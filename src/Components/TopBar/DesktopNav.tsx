import React from 'react';
import { RouteSection } from '../../Hooks/Routes';
import { Link } from 'react-router-dom';

interface IDesktopNav {
    routes: RouteSection;
}

const DesktopNav: React.FC<IDesktopNav> = ({ routes }) => {
    return (
        <div>
            {Object.keys(routes).map(route => (
                <Link key={routes[route].path} to={routes[route].path}>
                    {routes[route].name}
                </Link>
            ))}
        </div>
    );
};

export default DesktopNav;
