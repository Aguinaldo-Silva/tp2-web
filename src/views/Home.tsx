import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Home!');

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Home');
        };

        buscarMensagem();
    }, []);

    return (
        <div>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Home.</p>
        </div>
    );
};

export default Home;
