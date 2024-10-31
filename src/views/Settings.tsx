import React, { useState, useEffect } from 'react';

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
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Settings.</p>
        </div>
    );
};

export default Settings;
