import React from 'react'
import './App.css'
import { Grid, Paper } from '@mui/material';
import Home from './paginas/home/Home';

function App() {

  return (
   <>
   <Grid container spacing={3}>
   <Grid item xs={12} sm={12}>
      <Home />
   </Grid>
   <Grid item xs={12} sm={6}>
      <Home />
     
   </Grid>
   <Grid item xs={12} sm={6}>
      <Home />
   </Grid>
   <Grid item xs={12} sm={3}>
    <Home />
   </Grid>
   <Grid item xs={12} sm={3}>
    <Home />
   </Grid>
   <Grid item xs={12} sm={3}>
    <Home />
   </Grid>
   <Grid item xs={12} sm={3}>
    <Home />
   </Grid>
   </Grid>

    </>
  )
};

export default App
