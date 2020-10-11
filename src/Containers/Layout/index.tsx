import React from 'react';
import TopBar from '../../Components/TopBar';

interface ILayout {
    children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <div>
            <TopBar />
            {children}
        </div>
    );
};

export default Layout;
