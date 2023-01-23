import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../Features/Activities/Dashboard/ActivityDashboard";
import ActivityDetails from "../../Features/Activities/details/ActivityDetails";
import ActivityForm from "../../Features/Activities/form/ActivityForm";
import NotFound from "../../Features/errors/NotFound";
import ServerError from "../../Features/errors/ServerError";
import TestErrors from "../../Features/errors/TestError";
import App from "../Layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm key='manage' /> },
            { path: 'errors', element: <TestErrors /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='not-found' /> }
        ]
    }
]

export const router = createBrowserRouter(routes);