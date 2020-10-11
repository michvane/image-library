import React from 'react';
import useRoutes from '../../../../Hooks/Routes';
import { Route } from 'react-router-dom';

const Router: React.FC = () => {
    const { navigable, hidden } = useRoutes();

    return (
        <>
            {Object.keys(navigable).map(route => (
                <Route key={navigable[route].path} exact={true} path={navigable[route].path} component={navigable[route].Component} />
            ))}
            {Object.keys(hidden).map(route => (
                <Route key={hidden[route].path} path={hidden[route].path} component={hidden[route].Component} />
            ))}
        </>
    );
};

export default Router;
