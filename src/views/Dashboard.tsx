import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Dashboard!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Dashboard');
        };

        buscarMensagem();
    }, []);

    return (
        <div>
            <nav>
                <Link to="/"><Button>Home</Button></Link>
            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Dashboard.</p>
        </div>
    );
};

export default Dashboard;