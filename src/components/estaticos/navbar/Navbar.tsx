import React from 'react';
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/action';
import './Navbar.css'

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useNavigate();
    const dispatch = useDispatch();
    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        history('/login')
    }

    var navBarComponent;

    if(token !== ""){
        navBarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box className="cursor" >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                </Link>
                <Link to="/posts" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                </Link>
                    <Box mx={1} className="cursor" onClick={goLogout} >
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navBarComponent}
        </>
    );
}
export default Navbar;