import React, { useEffect, useRef } from 'react';

const ParticleNetwork = ({ onLoadComplete }) => {
  const canvasRef = useRef(null);
  
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef({ lastMove: Date.now(), exploded: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    let particles = [];
    let animationFrameId;
    let isIntroExploded = false;
    const introStartTime = Date.now(); 

    // Cores
    const baseColor = '#DC2626';     
    const activeColor = '#ff5555';   

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      timeRef.current.lastMove = Date.now();
      timeRef.current.exploded = false;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, isCenter = false) {
        this.x = x;
        this.y = y;
        
        if (isCenter) {
          this.vx = 0;
          this.vy = 0;
        } else {
          const angle = Math.random() * Math.PI * 2;
          // AJUSTE 2: VIOLÊNCIA AUMENTADA (Força triplicada)
          // Elas vão cruzar a tela muito rápido no início
          const force = Math.random() * 60 + 30; 
          this.vx = Math.cos(angle) * force;
          this.vy = Math.sin(angle) * force;
        }

        this.size = Math.random() * 3 + 1;
        // AJUSTE 3: Atrito um pouco maior para desacelerar a violência inicial suavemente
        this.friction = 0.92; 
        this.angle = Math.random() * Math.PI * 2; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (Math.abs(this.vx) > 0.2) this.vx *= this.friction;
        if (Math.abs(this.vy) > 0.2) this.vy *= this.friction;

        if (Math.abs(this.vx) <= 0.5) {
            this.x += Math.cos(this.angle) * 0.3;
            this.y += Math.sin(this.angle) * 0.3;
            this.angle += 0.01; 
        }

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 250;

        if (distance < interactionRadius && !timeRef.current.exploded) {
            this.x += dx * 0.04; 
            this.y += dy * 0.04;
            return true; 
        }

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        return false;
      }

      repelFrom(targetX, targetY) {
        const dx = this.x - targetX;
        const dy = this.y - targetY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 350) {
            const angle = Math.atan2(dy, dx);
            const force = 15 + Math.random() * 15;
            this.vx = Math.cos(angle) * force;
            this.vy = Math.sin(angle) * force;
        }
      }

      draw(isActive) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (isActive) {
          ctx.fillStyle = activeColor;
          ctx.shadowBlur = 25;
          ctx.shadowColor = activeColor;
        } else {
          ctx.fillStyle = baseColor;
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const explodeIntro = () => {
      isIntroExploded = true;
      // Aumentei um pouco a quantidade de partículas para preencher mais a explosão maior
      for (let i = 0; i < 200; i++) {
        particles.push(new Particle(centerX, centerY));
      }
      setTimeout(() => {
        onLoadComplete(); 
      }, 300); // Tempo de fade-in do site um pouco mais rápido
    };

    // --- LOOP DE ANIMAÇÃO ---
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isIntroExploded) {
        // === FASE DE INTRO ===
        const elapsed = Date.now() - introStartTime;
        const baseRadius = 15;
        let currentRadius = baseRadius;
        let glowIntensity = 20;

        // Fase 1: Pulso Médio (0s a 1s)
        if (elapsed < 1000) {
            const progress = elapsed / 1000;
            const pulseToAdd = Math.pow(Math.sin(progress * Math.PI), 2) * 20; 
            currentRadius = baseRadius + pulseToAdd;
            glowIntensity = 20 + pulseToAdd * 1.5;

        // Fase 2: Pulso Grande (1s a 2s)
        } else if (elapsed < 2000) {
            const progress = (elapsed - 1000) / 1000;
            const pulseToAdd = Math.pow(Math.sin(progress * Math.PI), 2) * 50; 
            currentRadius = baseRadius + pulseToAdd;
            glowIntensity = 30 + pulseToAdd * 2;

        // Fase 3: TENSÃO / VIBRAÇÃO (2s a 2.8s)
        } else if (elapsed < 2800) {
             currentRadius = baseRadius + 30 + (elapsed - 2000) * 0.1;
             const shakeX = (Math.random() - 0.5) * 8; 
             const shakeY = (Math.random() - 0.5) * 8;
             ctx.translate(shakeX, shakeY);
             glowIntensity = 80 + (Math.random() * 40);

        // AJUSTE 1: FASE 4 - O FLASH (2.8s a 2.9s)
        // Expansão massiva em 100ms para cobrir a tela
        } else if (elapsed < 2900) {
             // Garante que o tremor parou
             ctx.setTransform(1, 0, 0, 1, 0, 0); 
             
             const flashProgress = (elapsed - 2800) / 100; // 0 a 1 muito rápido
             // Expande até ficar maior que a largura da tela
             currentRadius = 120 + (canvas.width * flashProgress * 1.5);
             glowIntensity = 200; // Brilho máximo

        } else {
            // Fim da Intro: Explode (após 2.9 segundos)
            explodeIntro();
        }

        if (!isIntroExploded) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = baseColor;
            ctx.shadowBlur = glowIntensity;
            ctx.shadowColor = activeColor;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Reseta o tremor se necessário
            ctx.setTransform(1, 0, 0, 1, 0, 0); 
        }

      } else {
        // === FASE PÓS-EXPLOSÃO ===
        const timeNow = Date.now();
        if (!timeRef.current.exploded && (timeNow - timeRef.current.lastMove > 3000)) {
            timeRef.current.exploded = true;
            particles.forEach(p => {
                p.repelFrom(mouseRef.current.x, mouseRef.current.y);
            });
        }

        particles.forEach((p) => {
          const isInteracting = p.update();
          const isExplodingNow = timeRef.current.exploded && (Math.abs(p.vx) > 5);
          p.draw(isInteracting || isExplodingNow);
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default ParticleNetwork;