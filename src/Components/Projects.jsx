import bath from "../images/bath.png";
import big from "../images/big.png";
import lyst from "../images/lyst.png";
import rento from "../images/rento.png";
import jio from "../images/jio.png";
import  "../style/Navbar.css";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import {Grid,GridItem,Button} from "@chakra-ui/react";
export default function Project({fo}){
   return(
    <div style={{width:"100%",textAlign:"center",background:"rgb(0,49,64)",margin:'auto'}} ref={fo}>
            <br />
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Projects</h1>
      <br />
      <br />
     <Grid templateColumns='repeat(1, 1fr)' gap={20} style={{width:"90%",margin:"auto"}}>
     <AnimationOnScroll  animateIn="animate__fadeIn">
        <GridItem className="image-box">
        <img width={{lg:"500px",md:"400px",base:'300px'}} height={{lg:"700px",md:"600px",base:'500px'}} src={jio} alt="jio" />
        <div className="text-box">
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}}  >Clone- JioMart.com</h1>
      <div className="btn btn1">
      <h4>View Live</h4>
    </div>
    <a href="https://github.com/ajaysehwal/gruesome-can-8053.git">
    <div className="btn3 btn2">
      <h4><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></h4>
    </div>
    </a>
    </div>
        </GridItem>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeIn">
        <GridItem  className="image-box">
        <img width={{lg:"500px",md:"400px",base:'300px'}} height={{lg:"700px",md:"600px",base:'500px'}}src={big} alt="bigbasket" />
        <div class="text-box">
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Clone- Bigbasket.com</h1>
      <div className="btn btn1">
      <h4>View Live</h4>
    </div>
    <a href="https://github.com/ajaysehwal/racial-spiders-3687.git">
    <div className="btn3 btn2">
      <h4><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></h4>
    </div>
    </a>
    </div>
        </GridItem>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeIn">
        <GridItem  className="image-box">
        <img width={{lg:"500px",md:"400px",base:'300px'}} height={{lg:"700px",md:"600px",base:'500px'}}  src={lyst} alt="lyst" />
        <div class="text-box">
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Clone- lyst.com</h1>
      <div className="btn btn1">
      <h4>View Live</h4>
    </div>
    <a href="https://github.com/priyanshu2014204/elated-silver-5908.git">
    <div className="btn3 btn2">
      <h4><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></h4>
    </div>
    </a>
    </div>
        </GridItem>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeIn">
        <GridItem  className="image-box">
        <img  width={{lg:"500px",md:"400px",base:'300px'}} height={{lg:"700px",md:"600px",base:'500px'}} src={bath} alt="bath" />
        <div class="text-box">
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Clone- Bath&bodyWorks.in</h1>
      <div className="btn btn1">
      <h4>View Live</h4>
    </div>
    <a href="https://github.com/ajaysehwal/cogent-attraction-2098.git">
    <div className="btn3 btn2">
      <h4><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></h4>
    </div>
    </a>
    </div>
        </GridItem>
        </AnimationOnScroll>
        <AnimationOnScroll  animateIn="animate__fadeIn">
        <GridItem  className="image-box">
         <img width={{lg:"500px",md:"400px",base:'300px'}} height={{lg:"700px",md:"600px",base:'500px'}}   src={rento} alt="rento" />
         <div class="text-box">
      <h1  style={{fontSize:'30px',fontWeight:"650",color:"white"}} >Clone- Rentomojo.com</h1>
      <div className="btn btn1">
      <h4>View Live</h4>
    </div>
    <a href="https://github.com/ajaysehwal/hard-birds-9261.git">
    <div className="btn3 btn2">
      <h4><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" /></h4>
    </div>
    </a>
    </div>
        </GridItem>
        </AnimationOnScroll>
     </Grid>
    </div>
   )

}