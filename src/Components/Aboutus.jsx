import { Grid,GridItem,Image } from "@chakra-ui/react"
import "animate.css/animate.min.css";
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'


export default function Aboutus({fo}){
return (
    <div ref={fo} style={{margin:"auto"}}>
     <Grid templateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)", base:"repeat(1,1fr)"}} m="auto">
        <GridItem style={{background:"rgb(0,49,64)"}}>
       <Image width="100%" src="https://coindsyz.com/wp-content/uploads/2022/03/1584023795.gif"/>
     </GridItem>

        <GridItem style={{background:"rgb(0,49,64)",color:"white",borderTopLeftRadius:"50px",padding:"15px"}}>
         <br />
           <h1 style={{fontSize:"25px"}}>About Us</h1>
           <ScrollEffect>
           <p className="text" style={{marginTop:"40px",fontFamily: "cursive",fontSize:"25px"}}>
               Solution-driven web developer adept at 
                   contributing to highly
                collaborative work environments and finding solutions.  Proven experience developing consumer-
          focused websites using HTML,  CSS,JavaScript, and React. Good knowledge of Data structure, and 
  
             Databases.  And I tend to view myself as a professional and solution-  oriented person who thrives in a
          challenging environment, continuing to learn  new languages and  development techniques.
               </p>
           </ScrollEffect>
         
             

             
        </GridItem>
     </Grid>
    
</div>
)
}