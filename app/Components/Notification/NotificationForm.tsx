"use client";

import React, { useState } from "react";

interface NotificationFormProps {
  onSubmit: (notification: { title: string; content: string }) => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="notification-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter notification title"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter notification content"
          required
        />
      </div>
      <button type="submit" className="submit-btn">Create Notification</button>
    </form>
  );
};

export default NotificationForm;
