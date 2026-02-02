import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        // Default options for all toasts
        duration: 4000,
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151',
          padding: '16px',
          borderRadius: '12px',
          fontSize: '14px',
          maxWidth: '500px',
        },
        // Success toast style
        success: {
          duration: 3000,
          iconTheme: {
            primary: '#10b981',
            secondary: '#fff',
          },
          style: {
            background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
            border: '1px solid #10b981',
          },
        },
        // Error toast style
        error: {
          duration: 4000,
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
          style: {
            background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
            border: '1px solid #ef4444',
          },
        },
        // Loading toast style
        loading: {
          iconTheme: {
            primary: '#06b6d4',
            secondary: '#fff',
          },
          style: {
            background: 'linear-gradient(135deg, #164e63 0%, #155e75 100%)',
            border: '1px solid #06b6d4',
          },
        },
      }}
    />
  );
};

export default ToastContainer;
