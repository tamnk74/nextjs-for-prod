export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md" {...props}>
        {children}
      </button>
    );
  }