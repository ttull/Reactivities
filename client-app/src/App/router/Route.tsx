import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../Features/Activities/Dashboard/ActivityDashboard";
import ActivityDetails from "../../Features/Activities/details/ActivityDetails";
import ActivityForm from "../../Features/Activities/form/ActivityForm";
import App from "../Layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm key='manage' /> }
        ]
    }
]

export const router = createBrowserRouter(routes);