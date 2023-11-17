import React, { useEffect, useRef } from 'react';

const Loading = () => {
    const preloder = useRef(null)
    const loader = useRef(null)
    useEffect(() => {
        const removeLoader = () => {
            preloder.current.style.display = "none";
            loader.current.style.display = "none";
        }
        setTimeout(() => {
            removeLoader()
        }, 1000);
    }, [preloder, loader]);
    return (
        <div className='transition-all' id="preloder" ref={preloder}>
            <div className="loader" ref={loader} />
        </div>
    );
};

export default Loading;