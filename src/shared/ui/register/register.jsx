import React from 'react';

import './register.scss'

const Register = ({style}) => {
    return (
        <a href="/registration">
            <button style={style} className="register-header">
                Зарегистрироваться
            </button>
        </a>

    );
};

export default Register;