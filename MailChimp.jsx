import React from "react"
import jsonp from "jsonp"
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Typography,DialogTitle } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react'
import { LensTwoTone } from "@material-ui/icons";
import {Alert} from '@material-ui/lab'

class Mailchimp extends React.Component {
  state = {status:'',confirm:false};
  
  

  handleSubmit(evt) {
    evt.preventDefault();
    const { fields, action } = this.props;
    const values = fields.map(field => {
      return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
    }).join("&");
    const path = `${action}&${values}`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = this.state['EMAIL'];
    (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
  };

  sendData(url) {
    this.setState({ status: "sending",confirm:false });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        this.setState({ status: 'duplicate',confirm:false });
      } else if (err) {
        this.setState({ status: 'error' ,confirm:false});
      } else if (data.result !== 'success') {
        this.setState({ status: 'error' ,confirm:false});
      } else {
        this.setState({ status: 'success' ,confirm:true});
        this.props.setSubscribed(true)
        
      };
    });
  }


  render() {

  
    const { fields, styles, className, buttonClassName } = this.props;
    const messages = {
      ...Mailchimp.defaultProps.messages,
      ...this.props.messages
    }
    const { status } = this.state;
    let { confirm } = this.state.confirm;
    console.log(this.state.confirm)
    return (
      <>
       {/* {!this.state.confirm ?  <> */}
          
       <form onSubmit={this.handleSubmit.bind(this)} className={className}>
        <Grid container alignItems='center' spacing={2}>
        
        {fields.map(input =>
        <Grid item xs={12} md={12} style={{textAlign:''}}>
          {/* <TextField
          variant="outlined"
            {...input}
            key={input.name}
            onChange={({ target }) => this.setState({ [input.name]: target.value })}
            defaultValue={this.state[input.name]}
            
           
          />`` */}
          <div >
           <input
          variant="outlined"
            {...input}
            key={input.name}
            onChange={({ target }) => this.setState({ [input.name]: target.value })}
            defaultValue={this.state[input.name]}
            className='w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400'
           
          />
          </div>
         
          </Grid>
        )}
            
            
      <br/>
      <Grid item xs={12} >
           <Grid container alignItems='center'>
           <Grid item xs={2} justify='left'>
         <Checkbox
        required='true'
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      </Grid>
      <Grid item xs={10}>
      I agree to receive marketing communications and promotional offers from AceCode.

      </Grid>
     
      </Grid>
      </Grid>
      
      <Grid item xs={12} md={12}>
        
        <Button
          disabled={status === "sending" || status === "success"}
          type="submit"
          className={buttonClassName}
          variant='outlined'
          
          style={{backgroundColor:'#f87171',color:'white'}}
        >
          {messages.button}
        </Button>
        <br/>
        </Grid>
        </Grid>
        <div className='msg-alert'>
          {status === "sending" && <p style={styles.sendingMsg}>{messages.sending}</p>}
          {status === "success" && <p style={styles.successMsg}>{messages.success}</p>}
          {status === "duplicate" && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
          {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
          {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
        </div>
       
      </form>
      {/* </>:<>
      <Grid justify='center' container>
          <Grid item xs={12}>
          <Alert severity="success"> Successfully Joined!</Alert>
          
            <Typography style={{fontFamily:'bebas neue',color:'grey',textAlign:'center'}} variant='h3'> <span style={{color:'black'}}>VINVELA30</span></Typography>
            <Typography style={{fontSize:'20',fontFamily:'open sans',textAlign:'center'}}>(Can be applied in checkout)</Typography>
 
          </Grid>
          

      </Grid>
      
      
      </>} */}
     </>
    );
  }
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Successful",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "This email has already been registered. Please contact if you have any issues.",
    button: "Join!"
  },
  buttonClassName: "",
  styles: {
    sendingMsg: {
      color: "#0652DD"
    },
    successMsg: {
      color: "#009432"
    },
    duplicateMsg: {
      color: "#EE5A24"
    },
    errorMsg: {
      color: "#ED4C67"
    }
  }
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string
};

export default Mailchimp;