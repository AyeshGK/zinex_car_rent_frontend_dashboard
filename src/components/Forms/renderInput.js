import React from 'react';

function RenderInput({handleInputChange, value, type = "text", name, placeholder}) {
    return (
        <div>
            <input
                type={type}
                name={name}
                onChange={handleInputChange}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}

export default RenderInput;