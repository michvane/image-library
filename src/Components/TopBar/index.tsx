import React from 'react';
import useRoutes from '../../Hooks/Routes';
import DesktopNav from './DesktopNav';

const TopBar: React.FC = () => {
    const { navigable } = useRoutes();
    return (
        <div>
            <DesktopNav routes={navigable} />
        </div>
    );
};

export default TopBar;
