import React from 'react';
import './petInput.scss'

const PetInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className="petInp"/>
    );
});

export default PetInput;