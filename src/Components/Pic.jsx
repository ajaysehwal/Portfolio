import React from "react";
import  "../style/Navbar.css";
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'
import { useEffect,useState } from "react";
import { Grid, GridItem ,Box,Button} from '@chakra-ui/react'
import my from "../images/my.png"
 export default function Pic({fo}){
    return (
        <div ref={fo}>
        <div style={{height:"50px",width:"100%"}}></div>
             <Grid className="first" templateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)", base:"repeat(1,1fr)"}}>
                 <GridItem className="profess" >
                    <h1 className="myname">Hey I'm Ajay Sehwal </h1>
                     <h1 className="autotext">I'm Full Stack Web Developer</h1> 
                    <h1 className="try">
                    
  <span>always be</span>
  <div className="message">
    <div className="word1">Learning</div>
    <div className="word2">code</div>
    <div className="word3">creating</div>
  </div>
</h1>
                  
                 </GridItem>
                 <GridItem className="mypic" >
                     <img src={my} alt="mypic" />
                     </GridItem>
             </Grid>
            
 
         </div>
    )
 }
 

