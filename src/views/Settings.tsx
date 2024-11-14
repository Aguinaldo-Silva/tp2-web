import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Settings!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Settings');
        };

        buscarMensagem();
    }, []);

    return (
        <div>
            <nav>
                <Link to="/"><Button>Home</Button></Link>
            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Settings.</p>
        </div>
    );
};

export default Settings;