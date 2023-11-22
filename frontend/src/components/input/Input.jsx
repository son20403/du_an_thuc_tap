import React from 'react';

const Input = ({ label = '', type = 'text', name = '', placeholder = '', className = '', onChange = () => { } }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} type={type} name={name} id={name} placeholder={placeholder} className={`px-2 py-3 outline-none bg-gray-200 focus:bg-transparent transition-all border ${className}`} />
            <span />
        </div>
    );
};

export default Input;