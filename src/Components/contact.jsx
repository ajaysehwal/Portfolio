import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Input,Grid,GridItem,Button} from "@chakra-ui/react"
import  "../style/Navbar.css";
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'
import { useToast } from '@chakra-ui/react'
export const ContactUs = ({fo}) => {
  const form = useRef();
  const toast =useToast();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n8ndbne', 'template_gqsprme', form.current, 'dyJhdIvnGY515twJH')
      .then((result) => {
          console.log(result.text);
          console.log("send")
      }, (error) => {
          console.log(error.text);
          console.log("no")
      });
  };
  const done=()=>{
    toast({
         title: 'Message Send',
         description: "Please Wait..",
         status: 'success',
         duration: 9000,
         isClosable: true,
       })
       sendEmail();
     }

  return (
    <div style={{background:"rgb(0,49,64)",color:"white",padding:"20px"}} ref={fo}>
            <br />
                   <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Contact Us</h1>
            <br />
            <Grid templateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)", base:"repeat(1,1fr)"}} style={{margin:"auto"}} >
             <GridItem style={{margin:"auto",fontSize:"20px",fontFamily:'"Poppins", sans-serif'}} >
              <ScrollEffect>
              <label style={{display:"flex",gap:"10px",marginBottom:"25px"}}>
              <img width="40px" height='40px' src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" alt="" />
              <a style={{color:"white",marginTop:"5px",textDecoration:"none",fontWeight:"100"}}  href="https://www.linkedin.com/in/ajay-sehwal/">Linkedin</a>
              </label>
              <label style={{display:"flex",gap:"10px",marginBottom:"25px"}}>
                <img  width="40px" height='40px'src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" />
                 <p style={{marginTop:"5px",fontWeight:"100"}}>+91 7404311418 </p>
              </label>
              <label style={{display:"flex",gap:"10px",marginBottom:"25px"}}>
                <img  style={{width:"40px",height:"50px"}} src="https://cdn-icons-png.flaticon.com/128/888/888853.png" alt="" />

                <p style={{marginTop:"5px",display:"grid",fontWeight:"100"}}> <h2>Have Any question?</h2> <p style={{fontSize:"15px"}}>  ajay.sehwal1@gmail.com</p></p>
              </label>
              <label style={{display:"flex",gap:"10px",marginBottom:"25px"}}>
                <img width="40px" height='40px' src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" alt="" />
                <a style={{color:"white",marginTop:"5px",textDecoration:"none",fontWeight:"100"}}  href='https://github.com/ajaysehwal'>Github</a>
              </label>
              <label style={{display:"flex",gap:"10px",marginBottom:"25px"}}>
                <img width="40px" style={{height:'50px'}}  src="https://cdn-icons-png.flaticon.com/128/684/684908.png" alt="" />
                <p style={{display:"grid",fontWeight:"100"}}><h2>Current Location</h2>
                 <p style={{fontWeight:"100",fontSize:'15px'}}>Sonipat, Haryana</p></p>
                
              </label>
              </ScrollEffect>
             </GridItem>
             <GridItem>
            <ScrollEffect>
        <form style={{display:"grid",gap:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"650px",padding:"15px",borderRadius:'50px',height:"510px"}} ref={form} onSubmit={sendEmail} >
          <h1 style={{fontSize:"27px",fontFamily:"sans-serif",fontWeight:"400"}}>Send Text Message To Me</h1>
      <Input style={{width:"80%",padding:"15px",height:"50px",fontSize:"20px",margin:"auto",borderRadius:"5px",outline:"none", background:'rgb(17, 91, 113)',border:"2px solid rgb(17, 91, 113)"}} type="text" name="user_name" placeholder='Enter Your Name' />
      <Input style={{width:"80%",padding:"15px",fontSize:"20px",height:"50px",margin:"auto",borderRadius:"5px",outline:"none",background:'rgb(17, 91, 113)',border:"2px solid rgb(17, 91, 113)"}} type="email" name="user_email" placeholder="Enter Your Email" />
      <textarea name="message" style={{width:"80%",fontSize:"20px",height:"110px",padding:"20px",margin:"auto",borderRadius:"5px",border:"1px solid rgb(9, 116, 149)",outline:"none", color:"white",background:'rgb(17, 91, 113)',border:"2px solid rgb(17, 91, 113)"}}  placeholder="Text Message"/>

      <Button style={{width:"30%",borderRadius:"5px",margin:"auto",padding:"10px",fontSize:"20px",border: "none",background:'rgb(138, 196, 50)',border:"3px solid rgb(138, 196, 50)"}} type="submit" value="Send"  onClick={done} >Submit</Button>
    </form>
    </ScrollEffect>
             </GridItem>

            
            </Grid>
          
</div>
   
  );
};