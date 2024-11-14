import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' SignUp!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('SignUp');
        };

        buscarMensagem();
    }, []);

    return (
        <div>
            <nav>
                <Link to="/"><Button>Home</Button></Link>
            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela SignUp.</p>
        </div>
    );
};

export default SignUp;