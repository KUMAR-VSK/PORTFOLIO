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
          background: '#000000',
          color: '#fff',
          border: '1px solid #333',
          padding: '16px',
          borderRadius: '12px',
          fontSize: '14px',
          maxWidth: '500px',
        },
        // Success toast style
        success: {
          duration: 3000,
          iconTheme: {
            primary: '#ffffff',
            secondary: '#000000',
          },
          style: {
            background: '#000000',
            border: '1px solid #ffffff',
          },
        },
        // Error toast style
        error: {
          duration: 4000,
          iconTheme: {
            primary: '#ffffff',
            secondary: '#000000',
          },
          style: {
            background: '#000000',
            border: '1px solid #ffffff',
          },
        },
        // Loading toast style
        loading: {
          iconTheme: {
            primary: '#ffffff',
            secondary: '#000000',
          },
          style: {
            background: '#000000',
            border: '1px solid #ffffff',
          },
        },
      }}
    />
  );
};

export default ToastContainer;
