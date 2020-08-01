import React, { useState } from 'react';
import Alert from '../components/Alert';

function useAlert() {
  const alertType = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
  };

  const [_showMessage, setShowMessage] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  function showMessage(messageToShow) {
    setAlertMessage(messageToShow);
    setShowMessage(true);
  }

  function hideMessage() {
    setShowMessage(false);
  }

  function alert() {
    return (
      <>
        {_showMessage && (
        <Alert
          type={alertMessage.type}
          title={alertMessage.title}
          message={alertMessage.message}
          onDismiss={hideMessage}
        />
        )}
      </>
    );
  }

  return {
    alertType,
    showMessage,
    hideMessage,
    alert,
  };
}

export default useAlert;
