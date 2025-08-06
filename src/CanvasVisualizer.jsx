import React, { useEffect, useRef } from 'react';

const CanvasVisualizer = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');

    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      // height = rect.height;
      height = 250;
      canvas.width = width;
      canvas.height = height;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    function drawSquigglyEllipse(ctx, cx, cy, rx, ry, segments, amplitude) {
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * 2 * Math.PI;
        const offset = Math.sin(i * 2 + frame * 0.1) * amplitude;
        const x = cx + (rx + offset) * Math.cos(angle);
        const y = cy + (ry + offset) * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'yellow';
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    function drawTriangle(ctx, cx, cy, size) {
      const height = size * Math.sqrt(3) / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy - height / 2);
      ctx.lineTo(cx - size / 2, cy + height / 2);
      ctx.lineTo(cx + size / 2, cy + height / 2);
      ctx.closePath();
      ctx.strokeStyle = '#FFA07A';
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, scale) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);
      ctx.beginPath();
      let rot = Math.PI / 2 * 3;
      const step = Math.PI / spikes;
      ctx.moveTo(0, -outerRadius);
      for (let i = 0; i < spikes; i++) {
        let x = Math.cos(rot) * outerRadius;
        let y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.closePath();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = '#FF69B4';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      const ellipseX = centerX + 120 * Math.sin(frame * 0.015);
      const ellipseY = centerY + 80 * Math.sin(frame * 0.03);
      drawSquigglyEllipse(ctx, ellipseX, ellipseY, 120, 80, 100, 6);

      const triangleRadius = 130;
      const triangleX = centerX + triangleRadius * Math.cos(frame * 0.01);
      const triangleY = centerY + triangleRadius * Math.sin(frame * 0.01);
      drawTriangle(ctx, triangleX, triangleY, 140);

      const starRadius = 110;
      const starX = centerX + starRadius * Math.cos(frame * 0.02 + 1);
      const starY = centerY + starRadius * Math.sin(frame * 0.02 + 1);
      const starScale = 1.2 + 0.25 * Math.sin(frame * 0.1);
      drawStar(ctx, starX, starY, 5, 40, 20, starScale);

      frame++;
      requestAnimationFrame(animate);
    }

    animate();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        //   background: '#fffef7',
        }}
      />
    </div>
  );
};

export default CanvasVisualizer;
