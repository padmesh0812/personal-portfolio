import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      <CheckCircle size={18} color="var(--accent4)" />
      <span>{message}</span>
    </div>
  );
}
