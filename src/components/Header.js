import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "@reach/router";
import { withTheme } from '@material-ui/core/styles'
import styled from 'styled-components'

function Header() {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit" >
                    <Link to="/dashboard">Dashboard</Link>
                </Typography> 
                <Typography variant="title" color="inherit">
                    <Link to="/">Home</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withTheme()(styled(Header)`
  display: flex;

  .shell__main {
    display: flex;
    flex: 1 0;
    position: relative;
  }
  
`)