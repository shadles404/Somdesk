import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-float-slow left-0 top-0"></div>
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float-delayed right-0 bottom-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Moving particles */}
      <div className="particle"></div>
      <div className="particle delay-2"></div>
      <div className="particle delay-4"></div>
    </div>
  );
};

export default AnimatedBackground;