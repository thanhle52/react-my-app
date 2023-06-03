import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = ({ children, options, ...props }) => {
  const el = useRef();
  useEffect(() => {
    VanillaTilt.init(el.current, options);
  });

  return (
    <div ref={el} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Tilt);
