import React from 'react';
import {
    BrowserRouter, createBrowserRouter,
    createHashRouter,
    createRoutesFromElements,
    Link,
} from 'react-router-dom'
import {Route, RouterProvider, Routes} from "react-router";
import MainPage from "../../pages/MainPage/ui/MainPage";
import HomePage from "../../pages/HomePage/ui/HomePage";
import {Paths} from "./paths";
import RegistrationPage from "../../pages/RegistrationPage/ui/RegistrationPage";

const AppRouter = (routes, opts) => {
    const router = createBrowserRouter([
        {
            path: Paths.main,
            element: <MainPage/>
        },
        {
            path: Paths.register,
            element: <RegistrationPage/>
        }
    ])

    return (
        <div className='app'>
            <RouterProvider router={router} />
        </div>
    )

};

export default AppRouter;