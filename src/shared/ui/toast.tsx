interface ActionProps {
  label: string;
  altText: string;
  onClick: () => void | Promise<void>;
}

interface ToastProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?(open: boolean): void;
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
  variant?: 'info' | 'success' | 'warning' | 'error' | 'loading';
  title?: string;
  description?: string;
  action?: ActionProps;
  disableDismiss?: boolean;
}

type ToastActionElement = ActionProps;

export { type ToastActionElement, type ToastProps };
