import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-tiger-dark focus:ring-tiger-blue";
  
  const variants = {
    primary: "bg-tiger-blue text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(0,136,255,0.4)] hover:shadow-[0_0_30px_rgba(0,136,255,0.6)] border border-blue-400/30",
    secondary: "bg-white text-tiger-dark hover:bg-gray-100",
    outline: "bg-transparent text-white border border-tiger-border hover:border-gray-500 hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ChevronRight className="ml-2 w-5 h-5" />}
    </motion.button>
  );
};
