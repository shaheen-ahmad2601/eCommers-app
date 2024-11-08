import React from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-grow p-4 bg-gray-100">
                {children}
            </main>
            <RightSidebar />
        </div>
    );
};

export default Layout;
