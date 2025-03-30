import React from 'react';

export default function Button({ children, onClick, variant, size, className }) {
  return (
    <button 
      onClick={onClick}
      className={`rounded-md ${
        variant === 'outline' 
          ? 'border border-gray-300 bg-transparent' 
          : 'bg-gray-100 dark:bg-gray-800'
      } ${
        size === 'icon' ? 'p-2' : 'px-4 py-2'
      } ${className}`}
    >
      {children}
    </button>
  );
}
