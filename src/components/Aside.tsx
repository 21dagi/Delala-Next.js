"use client";

import React from "react";
import Link from "next/link";

const Aside: React.FC = () => {
  return (
    <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center bg-gray-800 text-white">
      <Link
        href="/"
        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white"
      >
        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <Link
        href="/profile"
        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </Link>

      <Link
        href="/agent-contact"
        className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </Link>
    </aside>
  );
};

export default Aside;
