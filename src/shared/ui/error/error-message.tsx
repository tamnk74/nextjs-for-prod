export function ErrorMessage({ message }: { message: string }) {
    return <div className="text-red-500 text-center py-4">{message}</div>;
  }