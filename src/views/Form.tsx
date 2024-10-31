import React, { useState, useEffect } from 'react';

const Form: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        const carregarDadosParaEdicao = () => {
            const dadosEditados = { nome: 'Usuário Teste', email: 'usuario@teste.com', telefone: '123456789' };
            setNome(dadosEditados.nome);
            setEmail(dadosEditados.email);
            setTelefone(dadosEditados.telefone);
            setIsEditing(true);
        };

        carregarDadosParaEdicao();
    }, []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const dados = { nome, email, telefone };
        console.log(isEditing ? 'Editando dados:' : 'Cadastrando dados:', dados);
        setNome('');
        setEmail('');
        setTelefone('');
        setIsEditing(false);
    };

    return (
        <div>
            <h1>{isEditing ? 'Editar Dados' : 'Cadastrar Dados'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Telefone:
                    <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">{isEditing ? 'Salvar Alterações' : 'Cadastrar'}</button>
            </form>
        </div>
    );
};

export default Form;
