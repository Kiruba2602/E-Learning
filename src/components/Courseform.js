//courseform.js
import React, { useState } from 'react';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission, make API call to save the content
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to save the information
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default CourseForm;