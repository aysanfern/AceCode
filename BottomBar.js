import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import {Button } from '@material-ui/core'

import Countdown from 'react-countdown';
import { ArticleContext } from '../global';


const useStyles = makeStyles((theme) => ({
  
    
   
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
  }));

export default function BottomAppBar({setOpen}) {
  const classes = useStyles();
  const [date,setDate] = useContext(ArticleContext)
  const dated = new Date(date[0].date)

  const handleOpen = ()=>{
      setOpen(true)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar  color="primary" className={classes.appBar}>
        <Toolbar >
      <Grid alignItems='center' container>
          <Grid xs={12} md={8 } item>
          <div style={{textAlign:'center'}}>
              
        <span  className="text-lg md:text-xl font-extrabold leading-tighter tracking-tighter mb-4" style={{color:'white'}} > FREE data science workshop
        <br/> {dated.toLocaleString('en-uk', {  weekday: 'long' })} {dated.getDate()} {dated.toLocaleString('en-uk', { month: 'long' })} {dated.toLocaleTimeString('en-uk',{hour: '2-digit', minute:'2-digit'})}pm 
        
        <div className='mt-2 mb-3 text-red-400 text-xl'>
        <Countdown date={date[0].date}  zeroPadDays='0'/>&nbsp;days
        </div>
</span> 
</div>
</Grid>

<Grid  xs={12} md={2} style={{textAlign:'center'}} item>

<Button variant='contained' onClick={handleOpen} style={{fontWeight:'bolder'}} >Register</Button>

</Grid>

                </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
