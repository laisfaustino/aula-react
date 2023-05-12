import React from 'react'
import './Home.css'
import { Grid , Paper ,Box, Button } from '@mui/material';

function Home(){
    return(
   <>
        <Paper>
          <Box p={2}>
               <Box display="flex" justifyContent="center">
                    <h1>Titulo</h1>
               </Box>
               <img src="https://i.pinimg.com/originals/da/81/0d/da810d2a31e40a5747cbe51ded08330f.gif" alt="Cactus" style={{width: "100%" ,height: "100%"}} />
               <Box display="flex" justifyContent="center" p={2}>
                    <Button variant='contained' color="primary">Aceitar</Button>
                    <Button variant='contained' color="secondary">Recusar</Button></Box>
          </Box>
        </Paper>
   </>
   )
}

export default Home;