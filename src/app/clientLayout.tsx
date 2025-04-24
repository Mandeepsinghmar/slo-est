'use client';

import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import './globals.css';
import { useState } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang='en'>
      <body className={`flex h-screen bg-gray-100 `}>
        <Sidebar isOpen={isSidebarOpen} />
        <div className='flex flex-col flex-1'>
          <Navbar toggleSidebar={handleToggleSidebar} />
          <main className=' overflow-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
