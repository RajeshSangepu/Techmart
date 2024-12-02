import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">TechMart Admin</h1>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Settings className="h-6 w-6" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </header>
  );
}