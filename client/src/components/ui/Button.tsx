import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  download?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/25',
      outline: 'border border-slate-700 bg-transparent hover:bg-slate-800 text-slate-100',
      ghost: 'hover:bg-slate-800 hover:text-slate-100 text-slate-300',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (props.href) {
      const { download, ...rest } = props;
      return (
        <a href={props.href} download={download} className={classes} {...(rest as any)}>
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
