import { useRef, useEffect, useState } from 'react';
import { useVisuals } from '../contexts/VisualsContext'

const SkillsCanvas = () => {
  const { visualsEnabled } = useVisuals()
  if (!visualsEnabled) return null
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!canvas || !ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Skills data
    const skills = [
      { name: 'Java', level: 90, color: '#0073e6' },
      { name: 'Spring Boot', level: 85, color: '#6db33f' },
      { name: 'React', level: 80, color: '#61dafb' },
      { name: 'JavaScript', level: 85, color: '#f7df1e' },
      { name: 'MySQL', level: 75, color: '#005b84' },
      { name: 'REST API', level: 80, color: '#0066cc' },
      { name: 'Docker', level: 70, color: '#2496ed' },
      { name: 'Git', level: 85, color: '#f05032' }
    ];
    
    // Animation loop
    let animationFrameId;
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw skills as interactive bubbles
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const distanceFromCenter = radius;
        
        // Calculate position
        let x = centerX + Math.cos(angle) * distanceFromCenter;
        let y = centerY + Math.sin(angle) * distanceFromCenter;
        
        // Apply mouse interaction
        const dx = mousePos.x - x;
        const dy = mousePos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          x += (dx / distance) * force * 20;
          y += (dy / distance) * force * 20;
        }
        
        // Draw connection lines to center
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw skill bubble
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);
        
        // Gradient for bubble
        const bubbleGradient = ctx.createRadialGradient(
          x, y, 0, x, y, 50
        );
        bubbleGradient.addColorStop(0, skill.color + '33');
        bubbleGradient.addColorStop(1, skill.color + '00');
        ctx.fillStyle = bubbleGradient;
        ctx.fill();
        
        ctx.strokeStyle = skill.color + '66';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw skill name
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(skill.name, x, y - 10);
        
        // Draw skill level
        ctx.fillStyle = skill.color;
        ctx.font = 'bold 22px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${skill.level}%`, x, y + 15);
      });
      
      // Draw central orb
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      const orbGradient = ctx.createRadialGradient(
        centerX, centerY, 0, centerX, centerY, 80
      );
      orbGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      orbGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = orbGradient;
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Draw title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SKILLS NEXUS', centerX, centerY - 10);
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-[-2] pointer-events-none" />;
};

export default SkillsCanvas;
