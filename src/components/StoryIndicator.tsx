import React, { useEffect, useState } from 'react';

export const StoryIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
        <div
          className="h-full bg-ink transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};
