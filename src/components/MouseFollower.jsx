
import  { useState, useEffect } from 'react';

function MouseFollower() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY -8);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          transition:'transform 0.5s ease-out',
          position: 'absolute',
          left: x,
          top: y,
          width: 15,
          height: 15,
          borderRadius: '50%',
          backgroundColor: 'grey',
        }}
      />
    </div>
  );
}

export default MouseFollower;