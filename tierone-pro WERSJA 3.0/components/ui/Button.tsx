import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-heading font-bold tracking-wider transition-all duration-300 focus:outline-none group clip-diagonal";
  
  const variants = {
    primary: "bg-brand-lime text-brand-black hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]",
    outline: "bg-transparent border-2 border-brand-lime text-brand-lime hover:bg-brand-lime/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 uppercase">
        {children}
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};

export default Button;