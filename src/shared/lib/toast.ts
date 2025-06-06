import { toast } from 'sonner';

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
  });
};
