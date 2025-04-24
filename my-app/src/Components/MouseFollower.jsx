import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const tagName = e.target.tagName.toLowerCase();
      const interactive = ["button", "input", "textarea", "a", "select"];
      setVisible(!interactive.includes(tagName));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="circle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: visible ? 1 : 0,
      }}
    />
  );
};

export default MouseFollower;
// import React, { useState, useEffect } from "react";

// const MouseFollower = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       className="circle"
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     />
//   );
// };

// export default MouseFollower;
