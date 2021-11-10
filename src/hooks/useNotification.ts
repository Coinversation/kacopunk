import { getNotificationInstance } from 'utils/getNotifaction';

export function getNotificationHook(config) {
  const notificationInstance = getNotificationInstance(config);
  return notificationInstance.useNotification;
}

export const useNotification = getNotificationHook({
  maxCount: 4,
});
