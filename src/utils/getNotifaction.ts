import Notification from 'rc-notification';

export function getNotificationInstance(config) {
  let notificationInstance = null;
  Notification.newInstance({ ...config }, n => {
    notificationInstance = n;
  });

  return notificationInstance;
}

export function getNotificationHook(config) {
  const notificationInstance = getNotificationInstance(config);
  return notificationInstance.useNotification;
}
