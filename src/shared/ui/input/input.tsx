import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`border rounded-md p-2 ${className}`}
      {...props}
    />
  )
);

Input.displayName = 'Input';