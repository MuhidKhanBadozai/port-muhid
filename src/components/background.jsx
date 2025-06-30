import React, { useEffect } from 'react'
import './style/background.css'

function Background() {
    return (
        <div className='bg z-1 h-screen overflow-hidden'>
            <div className='cont'>
                <div className="heading-text">
                    <p>Turning ideas into <span id='grad'>creative</span> solutions.</p>
                    <p id='under-text'>Innovative web developer crafting unique user experiences.</p>
                </div>
            </div>

        </div>
    )
}

export default Background