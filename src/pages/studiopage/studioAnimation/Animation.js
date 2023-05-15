import React from 'react'
import { useState, useEffect } from 'react'

import './Animation.scss'
import img from '../../../images/animate-img.jpg'
import { GlassBanner } from '../../../components/glassBanner/GlassBanner'

export const Animation = () => {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const div = document.querySelector(".image-border");
        const img = document.querySelector(".image-border img");
        const banner = document.querySelector(".glass-banner");

        div.classList.add("fill");
        img.classList.add("fill");
        banner.classList.add("fill");

        if (!refresh) {
            setRefresh(true);
            div.classList.remove("fill");
            img.classList.remove("fill");
            banner.classList.remove("fill");
        }
    }, [refresh]);

    return (
        <div className='animation-container'>
            <div className='image-border'>
                <img className='img' src={img} alt='img'/>
            </div>
            <GlassBanner title={"About our studio"} />
        </div>
    )
}
