import React, { useState, useEffect } from 'react';

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
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela SignUp.</p>
        </div>
    );
};

export default SignUp;
