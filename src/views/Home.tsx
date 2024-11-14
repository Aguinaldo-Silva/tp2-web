import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/alert';
import Avatar from '../components/avatar';
import Box from '../components/box';
import Card from '../components/card';
import Checkbox from '../components/checkbox';
import Container from '../components/container';
import DatePicker from '../components/datePicker';
import DateTimePicker from '../components/dateTimePicker';
import Fab from '../components/fab';
import Grid from '../components/grid';
import IconButton from '../components/iconbutton';
import SnackBar from '../components/snackbar';
import Switch from '../components/switch';
import Tab from '../components/tab';
import TextField from '../components/textfield';
import Typography from '../components/typography';
import './home.style.css'

const Home: React.FC = () => {
    const [mensagem, setMensagem] = useState<string>(' Home!');

    const [checked, setChecked] = useState(false);
    const [text, setText] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [tabActive, setTabActive] = useState(0);

    useEffect(() => {
        const buscarMensagem = async () => {
            setMensagem('Home');
        };

        buscarMensagem();
    }, []);

    return (
        <div>

            <nav>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/Settings"><Button>Settings</Button></Link>
                <Link to="/Dashboard"><Button>Dashboard</Button></Link>
                <Link to="/SignIn"><Button>SignIn</Button></Link>
                <Link to="/SignUp"><Button>SignUp</Button></Link>
                <Link to="/Form"><Button>Form</Button></Link>

            </nav>
            <h1>{mensagem}</h1>
            <p>Esta é a estrutura inicial da tela Home.</p>

            <Container style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <Typography variant="h1" style={{ marginBottom: '20px' }}>teste component</Typography>

                <Alert severity="success" style={{ marginBottom: '20px' }}>alerta</Alert>

                <Avatar src="https://via.placeholder.com/150" alt="Avatar" style={{ marginBottom: '20px' }} />

                <Box style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '4px' }}>
                    <Typography variant="body1">dentro da box</Typography>
                </Box>

                <Card title="titulo" content="teste dentro do card" style={{ marginBottom: '20px' }} />

                <Checkbox label="clique aqui" checked={checked} onChange={setChecked} style={{ marginBottom: '20px' }} />

                <DatePicker style={{ marginBottom: '20px' }} />

                <DateTimePicker style={{ marginBottom: '20px' }} />

                <Fab onClick={() => alert('Fab clicado!')} style={{ position: 'fixed', bottom: '20px', right: '20px' }} />

                <Grid style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                    <div>Grid item 1</div>
                    <div>Grid item 2</div>
                </Grid>

                <IconButton onClick={() => alert('botão clicado')} style={{ marginBottom: '20px' }} />

                <SnackBar message="snackbar" open={snackBarOpen} onClose={() => setSnackBarOpen(false)} style={{ marginBottom: '20px' }} />
                <button onClick={() => setSnackBarOpen(!snackBarOpen)}>clique aqui</button>

                <Switch checked={checked} onChange={setChecked} style={{ marginBottom: '20px' }} />

                <Tab labels={['Tab 1', 'Tab 2']} activeTab={tabActive} onChange={(e, newValue) => setTabActive(newValue)} style={{ marginBottom: '20px' }} />

                <TextField value={text} onChange={setText} style={{ marginBottom: '20px' }} />

                <Typography variant="h2" style={{ marginBottom: '20px' }}>exemplo tipografia</Typography>
                <Typography variant="body1" style={{ marginBottom: '20px' }}>exemplo tipografia</Typography>
            </Container>

        </div>
    );
};

export default Home;