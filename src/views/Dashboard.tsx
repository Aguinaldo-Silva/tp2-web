import React, { useState, useEffect } from 'react';

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
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Dashboard.</p>
        </div>
    );
};

export default Dashboard;
