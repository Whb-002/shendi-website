import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroMock } from '@/utils/mockData';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

function useStarField(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const starsRef = useRef<Star[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const starCount = Math.floor((w * h) / 3000);
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.8 + 0.3,
      opacity: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      const newCount = Math.floor((w * h) / 3000);
      if (newCount > starsRef.current.length) {
        const diff = newCount - starsRef.current.length;
        for (let i = 0; i < diff; i++) {
          starsRef.current.push({
            x: Math.random() * w,
            y: Math.random() * h,
            radius: Math.random() * 1.8 + 0.3,
            opacity: Math.random() * 0.6 + 0.1,
            speed: Math.random() * 0.3 + 0.05,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinklePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, w, h);

      for (const star of starsRef.current) {
        star.y += star.speed;
        star.twinklePhase += star.twinkleSpeed;

        if (star.y > h + 5) {
          star.y = -5;
          star.x = Math.random() * w;
        }

        const currentOpacity =
          star.opacity * (0.5 + 0.5 * Math.sin(star.twinklePhase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity})`;
        ctx.fill();

        if (star.radius > 0.8) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 220, 255, ${currentOpacity * 0.08})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animRef.current);
    };
  }, [canvasRef]);
}

function AnimatedTitle({ text }: { text: string }) {
  return (
    <h1 className="font-display font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text mb-6">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.05 * i + 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  );
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useStarField(canvasRef);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-surface-dark">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-hero z-[1]" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-serif text-text-secondary text-sm sm:text-base md:text-lg tracking-[0.3em] mb-4"
        >
          {heroMock.subtitle}
        </motion.p>

        <AnimatedTitle text={heroMock.title} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="font-serif text-text-secondary text-base sm:text-lg md:text-xl mb-10 max-w-xl"
        >
          {heroMock.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/services"
            className="px-8 py-3.5 rounded-lg font-medium text-sm sm:text-base bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            了解服务
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-lg font-medium text-sm sm:text-base border border-primary/40 text-primary hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            联系我们
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const next = document.getElementById('home-stats');
          if (next) next.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-text-muted text-xs tracking-widest">向下滚动</span>
        <ChevronDown className="w-5 h-5 text-text-muted animate-scroll-arrow" />
      </motion.div>
    </section>
  );
}
