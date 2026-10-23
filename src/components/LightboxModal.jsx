import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button
          className="lb-close"
          onClick={onClose}
          aria-label="Close certificate lightbox"
        >
          <X size={20} />
        </button>

        <img src={cert.image} alt={cert.name} />

        <div className="lb-caption">
          <div className="lb-title">{cert.name}</div>
          <div className="lb-sub">{cert.details}</div>
        </div>
      </div>
    </div>
  );
}
