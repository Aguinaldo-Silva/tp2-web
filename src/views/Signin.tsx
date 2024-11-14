import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signin: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Signin!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Signin');
        };

        buscarMensagem();
    }, []);

    return (
        <div>
            <nav>
                <Link to="/"><Button>Home</Button></Link>
            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Signin.</p>
        </div>
    );
};

export default Signin;