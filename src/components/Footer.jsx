import React from 'react';
import { Typography } from '@mui/material';
function Footer() {
  return (
    <footer className="bg-blue-800 text-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Links Section */}
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <Typography variant="body2">
            © {new Date().getFullYear()} Weather Application. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
