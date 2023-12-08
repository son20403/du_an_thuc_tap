import React, { useEffect, useRef } from 'react';

const Loading = () => {
    useEffect(() => {
        const preloder = document.querySelector('#preloder');
        const loader = document.querySelector('.loader');
        const removeLoader = () => {
            if (preloder) {
                preloder.style.display = "none";
            }
            if (loader) {
                loader.style.display = "none";
            }
        }
        setTimeout(() => {
            removeLoader()
        }, 1000);
    }, []);
    return (
        <div className='transition-all' id="preloder">
            <div className="loader" />
        </div>
    );
};

export default Loading;