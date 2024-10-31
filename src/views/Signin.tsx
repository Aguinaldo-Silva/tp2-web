import React, { useState, useEffect } from 'react';

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
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Signin.</p>
        </div>
    );
};

export default Signin;
