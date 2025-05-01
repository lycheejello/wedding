import React from 'react';
import './Ha.css'; // Import global styles

interface ParallaxContainerProps {
  children: React.ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  return <div id="parallax-root">{children}</div>;
};

export default ParallaxContainer;