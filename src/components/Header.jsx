import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="bg-gray-50 py-2 border-b border-gray-200">
        <div
          className="mx-auto px-6 items-center text-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* Left side - Contact */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="text-gray-600">Do you need help?</span>
            <span className="font-semibold text-gray-800">
              +1 (345) 922 6665
            </span>
          </div>
          {/* Center text */}
          <h1 className="text-2xl font-bold text-black">
            Turning Your To-Do List Into a Done List
          </h1>
          {/* Right side - Social */}
          <div
            className="flex items-center gap-6"
            style={{ justifySelf: "end" }}
          >
            <div className="flex items-center gap-3">
              {/* Facebook Icon */}
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* 
            <div className="flex items-center gap-2">
              <div className="w-5 h-3 bg-red-600 relative">
                <div className="absolute inset-0 bg-red-600"></div>
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-800"></div>
                <div className="absolute top-0 left-1 w-1 h-full bg-white"></div>
              </div>
              <span className="text-gray-600 text-sm">Language</span>
              <span className="font-semibold text-gray-800 text-sm">
                English
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main navigation - Centered Layout */}
      <div className="bg-white">
        <div className="mx-auto">
          {/* Navigation Menu */}
          <nav className="flex items-center justify-center gap-12 bg-gray-50 py-2 border-b border-gray-200 ">
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              How to Book
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Our Projects
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
