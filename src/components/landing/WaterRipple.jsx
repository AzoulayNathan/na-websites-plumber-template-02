import React, { useState } from "react";

export default function WaterRipple({ children, className = "", as: Tag = "button", ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
    if (props.onClick) props.onClick(e);
  };

  return (
    <Tag {...props} className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none motion-reduce-hidden"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            animation: "ripple 0.7s ease-out forwards",
          }}
        />
      ))}
    </Tag>
  );
}