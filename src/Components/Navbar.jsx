import {Box,Container,Flex} from "@chakra-ui/react";
import {useRef} from "react";


export default function Nav(){
const home=useRef();
const about=useRef();
const skills=useRef();
const project=useRef();
const contact=useRef();
    return(
      <Box bg="red" color={'white'} p="20px" fontSize={'22px'}>

        <Flex justifyContent="space-around">
        <h1 style={{fontSize:"28px",fontFamily:"cursive"}}>Ajay Sehwal</h1>
        <Box>
        <Flex gap={10}>
            <p onClick={()=>home.current.scrollIntoView()}>Home</p>
            <p>About Us</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact Us</p>
        </Flex>
        </Box>
           Resume
           linkedin
        </Flex>
         
         

      </Box>
    )
}