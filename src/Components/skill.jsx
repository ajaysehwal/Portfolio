import {Grid,GridItem, Image} from "@chakra-ui/react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import  "../style/Navbar.css";


export default function Skills({fo}){

    return (
        <div ref={fo}>
                

            <br />
            <h1 style={{fontSize:'30px',fontWeight:"650"}} >Skills</h1>
            <br />
            <br />

         <Grid templateColumns={{lg:"repeat(5,1fr)",md:"repeat(3,1fr)", base:"repeat(2,1fr)"}} gap={20} style={{width:"70%",margin:"auto",textAlign:"center",}}>
            <AnimationOnScroll  animateIn="animate__fadeIn">
            <GridItem className="Skills" >
                 <img  style={{margin:"auto"}}width="120px" height="120px"  src='https://cdn-icons-png.flaticon.com/128/1051/1051277.png' alt="img"/>
                 <p>HTML</p>
                 </GridItem>
            </AnimationOnScroll>
             <AnimationOnScroll animateIn="animate__fadeIn">
             <GridItem className="Skills">
                <img  style={{margin:"auto"}} width="120px" height="120px"  src='https://cdn-icons-png.flaticon.com/128/732/732190.png' alt="img"/>
                <p>CSS</p>
            </GridItem>
             </AnimationOnScroll>
               <AnimationOnScroll animateIn="animate__fadeIn">
               <GridItem className="Skills">
                <img style={{margin:"auto"}}  width="120px" height="120px"src='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' alt="img"/>
                <p>JavaScript</p>
            </GridItem>
               </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn">
              <GridItem className="Skills">
                <img  style={{margin:"auto"}}width="120px" height="120px"src='https://cdn-icons-png.flaticon.com/128/6454/6454035.png' alt="img"/>
                <p>ReactJS</p>
            </GridItem>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeIn"> <GridItem className="Skills">
                <img style={{margin:"auto"}}  width="120px" height="120px"src='https://cdn-icons-png.flaticon.com/512/919/919825.png'  alt="img"/>
                <p>NodeJS</p>
            </GridItem></AnimationOnScroll>
           
            
            <AnimationOnScroll animateIn="animate__fadeIn"><GridItem className="Skills">
                <img style={{margin:"auto"}} width="120px" height="120px" src='https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png' alt="img"/>
                <p>ExpressJS</p>
            </GridItem></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <GridItem className="Skills">
                <img style={{margin:"auto"}} width="120px" height="120px" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="img"/>
                <p>MongoDB</p>
            </GridItem>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn"> <GridItem className="Skills">
                 <img style={{margin:"auto"}} width="120px" height="120px" src='https://img.icons8.com/arcade/256/sql.png' alt="img"/>
                 <p>SQL</p>
            </GridItem></AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn"> <GridItem className="Skills">
                 <img style={{margin:"auto"}} width="120px" height="120px" src='https://cdn-icons-png.flaticon.com/128/2504/2504911.png' alt="img"/>
                 <p>Github</p>
            </GridItem></AnimationOnScroll>
            {/* <GridItem>
                <Image src=''/>
            </GridItem> */}
         </Grid>
    <br />
    <br />
    <hr />
        </div>
    )
}