import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './nav/nav'
import { Footer } from './footer/Footer'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            {/* <header> Header </header>

            <main>
                <Outlet />
            </main> */}
        </>
    )
}
