import React, { useState } from 'react';

export default function Info() {
    return(
        <div>
            <img src="../Assets/butler-potrait.jpg" alt="an image"/>
            <h1>Butler Shimaluwani</h1>
            <p>butlermuwo@gmail.com</p>
            <section className="sec-btns">
                <button><img src="business-card\src\Assets\twitter-sign.png" alt="Dave"/>Twitter</button>
                <button><img src="business-card\src\Assets\github.png" alt="riajulislam"/>GitHub</button>
            </section>
        </div>
    )
}