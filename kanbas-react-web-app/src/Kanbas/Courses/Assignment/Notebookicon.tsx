import React from 'react';
import { FaBook } from 'react-icons/fa';

export default function NotebookIcon() {
  return (
    <span className="me-1 position-relative">
      {/* <FaBookOpen style={{ top: "2px" }} className="text-primary me-1 position-absolute fs-5" /> */}
      <FaBook className="text-secondary me-1 fs-6" />
    </span>
  );
}
