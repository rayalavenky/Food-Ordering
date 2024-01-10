import React from 'react';

function Title() {
    return (
        <div className='title1'>
            <div className="centered-content">
                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/89/1f/15/891f151d-0ed6-785a-7889-21a87aef7212/source/512x512bb.jpg" alt="Restaurant Logo" className='logo1' />
            <div style={{ fontFamily: '-moz-initial' }}>
                <a className='title'>Let's Eat</a>
            </div>
            <div>
                <div className="container">
                    <p className="middle-paragraph">Food is art, and food is love.
                        And we should show love and appreciation for those who cook it by eating it with relish.
                        First we eat, then we do everything else.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Title;
