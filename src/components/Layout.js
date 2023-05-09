import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from './nav/nav'
import { Footer } from './footer/Footer'

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const Layout = () => {
    return (
        <>
            <Navbar />
            <div>
                <ScrollToTop />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
