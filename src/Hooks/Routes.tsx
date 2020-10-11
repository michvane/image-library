import React from 'react';
import About from '../Containers/About';
import Homescreen from '../Containers/Homescreen';

export interface IRoute {
    name: string;
    path: string;
    Component: React.FunctionComponent | undefined;
}

export interface RouteSection {
    [key: string]: IRoute;
}

interface IRoutes {
    navigable: RouteSection;
    hidden: {
        [key: string]: IRoute;
    };
}

export const routes = (): IRoutes => ({
    navigable: {
        home: {
            name: 'Home',
            path: '/',
            Component: () => <Homescreen />,
        },
        about: {
            name: 'About',
            path: '/about',
            Component: () => <About />,
        },
    },
    hidden: {
        detail: {
            name: 'Detail',
            path: '/image/:id',
            Component: undefined,
        },
    },
});

const useRoutes = (): IRoutes => routes();
export default useRoutes;
