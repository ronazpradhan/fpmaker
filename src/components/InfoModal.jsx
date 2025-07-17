import React from 'react';

function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-lg shadow-xl max-w-lg w-full p-6 relative border border-border">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-background-light text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-text-primary mb-4">About Front Generator</h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          Front Generator is a simple, efficient tool designed to help you quickly access pre-made academic cover page PDFs. Select your student name and the subject, and the system instantly prepares the correct PDF for download. This tool was made by Ronaj Pradhan with {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end underline">
            AI-Assisted
          </span> development.
        </p>
        <p className="text-text-secondary leading-relaxed text-sm">
          No need for complex editing – just select and download your pre-formatted cover page!
        </p>
      </div>
    </div>
  );
}

export default InfoModal;