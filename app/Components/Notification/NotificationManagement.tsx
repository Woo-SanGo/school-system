"use client";

import React, { useState } from "react";
import NotificationForm from "./NotificationForm";
import NotificationList from "./NotificationList";

interface Notification {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const NotificationManagement: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleAddNotification = (notification: { title: string; content: string }) => {
    const newNotification: Notification = {
      id: Date.now(),
      title: notification.title,
      content: notification.content,
      createdAt: new Date().toISOString(),
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div>
      <h1>Notification Management</h1>
      <NotificationForm onSubmit={handleAddNotification} />
      <NotificationList notifications={notifications} onDelete={handleDeleteNotification} />
    </div>
  );
};

export default NotificationManagement;
