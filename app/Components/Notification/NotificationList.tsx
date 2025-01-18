"use client";

import React from "react";

interface Notification {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface NotificationListProps {
  notifications: Notification[];
  onDelete: (id: number) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications, onDelete }) => {
  return (
    <div className="notification-list">
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <h3>{notification.title}</h3>
            <p>{notification.content}</p>
            <small>Created At: {new Date(notification.createdAt).toLocaleString()}</small>
            <button onClick={() => onDelete(notification.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotificationList;
