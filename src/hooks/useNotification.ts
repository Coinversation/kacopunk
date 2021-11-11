import { useCallback } from 'react';
import { getNotificationHook } from 'utils/getNotifaction';

const notificationHook = getNotificationHook({
  maxCount: 8,
  style: {
    top: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

export const useNotification = () => {
  const [notice, holder] = notificationHook();

  const errorNotice = useCallback(
    config => {
      notice({
        style: {
          background: '#e33152',
          color: 'white',
        },
        ...config,
      });
    },
    [notice]
  );

  const successNotice = useCallback(
    config => {
      notice({
        style: {
          background: '#3ead36',
          color: 'white',
        },
        ...config,
      });
    },
    [notice]
  );

  return { notice, errorNotice, successNotice, holder };
};
