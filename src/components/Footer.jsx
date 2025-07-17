import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center py-4 text-text-secondary text-sm border-t border-border mt-auto">
      &copy; {' '}
      <a
        href="https://pradhanronaj.com.np/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ronaj Pradhan
      </a>{' '}
      ({currentYear})
    </footer>
  );
}

export default Footer;