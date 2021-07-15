import {Typography,Grid} from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse';
import {useState} from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FAQS(){
    
    const classes=useStyles()

    return(
        <>
        <Grid justify='center' style={{textAlign:'center'}} container>
            <Grid  item xs={10}>
    
        
        
        
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Why data science?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Data science is the most in demand job skill right now. With endless industries and 
          jobs it is being applied in, studying data science will massively boost future prospects.

          </Typography>
        </AccordionDetails>
      </Accordion>
        
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>How much does each lesson cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         One to one lessons are £25 an hour, this includes email support and homework.
          </Typography>
        </AccordionDetails>
      </Accordion>  
        {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What if I miss a lesson?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you are unable to attend a lesson let us know 24 hours in advance and 
            the lesson can be rescheduled for a future date.
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Who are the lessons taught by?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The lessons are taught by Aysan, the founder of AceCode. I am the Previous Lead Data Science Mentor for Marks and Spencers and Dunelm teaching working professionals coding and how to use data science in their roles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What coding language is taught?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The main language taught would be Python. This is the best starting language
            for students as it is quite beginner friendly and also incredibly powerful being
            the prominent tool for data science.      </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What ages are suitable for Data Science?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The one to one lessons are most suitable for anyone aged 10 and over.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Do you offer topics other than Data Science?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         Yes, the main topics that I teach are general programming (Python), web & mobile development and data science.
          </Typography>
        </AccordionDetails>
      </Accordion>  
      </Grid>
      </Grid>
      <br/>
      <br/>

        </>
    )
}