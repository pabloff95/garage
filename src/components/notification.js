import React from "react";
import toast, { Toaster } from "react-hot-toast";

class Notification extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            border: "1px solid var(--neutral-color-primary)",
            padding: "1rem",
            background: "var(--neutral-color-primary)",
            color: "var(--neutral-color-contrast)",
            maxWidth: this.props.useFixedWitdh ? "" : "fit-content",
          },
          success: {
            iconTheme: {
              primary: "var(--confirmation-green-color)",
              secondary: "var(--neutral-color-primary)",
            },
          },
        }}
        gutter={24}
      />
    );
  }
}

export const showSuccessNotification = (message, duration = 0) => {
  toast.success(message, {
    duration: duration
      ? duration
      : parseInt(process.env.REACT_APP_NOTIFICATION_DURATION),
  });
};

export const showLoadingNotification = (message, duration = 0) => {
  toast.loading(message, {
    duration: duration
      ? duration
      : parseInt(process.env.REACT_APP_NOTIFICATION_DURATION),
  });
};

export const showErrorNotification = (message, duration = 0) => {
  toast.error(message, {
    duration: duration
      ? duration
      : parseInt(process.env.REACT_APP_NOTIFICATION_DURATION),
  });
};

export default Notification;
