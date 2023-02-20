import './App.css';
import Aboutus from "./Components/Aboutus"
import Pic from "./Components/Pic"
import Skills from './Components/skill';
import Projects from "./Components/Projects"
import {ContactUs} from "./Components/contact";
import "./style/textanimation.css";

import GitStats from './Components/gitstats';
import {Box,Container,Flex,Link,Menu,MenuButton,MenuItem,MenuList,Icon,IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useRef} from "react";
import Ex from './Components/extra';
function App() {
  const home=useRef();
const about=useRef();
const skills=useRef();
const project=useRef();
const contact=useRef();
const git=useRef();
  return (
    <div className="App">
       <Box bg="rgb(0,49,64)" color={'white'} p="15px" fontSize={'19px'}>
      
<Flex justifyContent="space-around">
<h1 style={{fontSize:"28px",fontFamily:"cursive"}}>Ajay Sehwal</h1>
<Box>
<Flex gap={10} display={{lg:"flex",md:"none",base:"none"}} className="anim">
    <p onClick={()=>home.current.scrollIntoView()} style={{cursor:"pointer"}}>Home</p>
    <p onClick={()=>about.current.scrollIntoView()} style={{cursor:"pointer"}}>About Us</p>
    <p onClick={()=>skills.current.scrollIntoView()} style={{cursor:"pointer"}}>Skills</p>
    <p onClick={()=>git.current.scrollIntoView()} style={{cursor:"pointer"}}>Github Stats</p>
    <p onClick={()=>project.current.scrollIntoView()} style={{cursor:"pointer"}}>Projects</p>
    <p onClick={()=>contact.current.scrollIntoView()} style={{cursor:"pointer"}}>Contact Us</p>
</Flex>
<Flex  display={{lg:"none",md:"block",base:"block"}}>
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem color="rgb(0,49,64)" onClick={()=>home.current.scrollIntoView()} >
     <img width="30px" src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt='home' style={{marginRight:"10px"}}/>  Home
    </MenuItem>
    <MenuItem  color="rgb(0,49,64)" onClick={()=>about.current.scrollIntoView()} >
     <img width="30px" src='https://cdn-icons-png.flaticon.com/128/1/1176.png' alt='about' style={{marginRight:"10px"}}/> About Us
    </MenuItem>
    <MenuItem color="rgb(0,49,64)" onClick={()=>skills.current.scrollIntoView()} >
      <img width="30px" src='https://cdn-icons-png.flaticon.com/128/1979/1979375.png' alt='' style={{marginRight:"10px"}}/> Skills
    </MenuItem>
    <MenuItem  color="rgb(0,49,64)" onClick={()=>git.current.scrollIntoView()}>
     <img  width="30px"  src='https://cdn-icons-png.flaticon.com/128/2111/2111432.png' alt="" style={{marginRight:"10px"}}/> Github Stats
    </MenuItem>
    <MenuItem color="rgb(0,49,64)"  onClick={()=>project.current.scrollIntoView()}>
    <img width='30px' src="https://cdn-icons-png.flaticon.com/128/1659/1659067.png" alt='hello' style={{marginRight:"10px"}}/> Projects
    </MenuItem>
    <MenuItem color="rgb(0,49,64)"  onClick={()=>contact.current.scrollIntoView()}>
    <img width="30px" src='https://cdn-icons-png.flaticon.com/128/6596/6596115.png' alt='' style={{marginRight:"10px"}}/>  Contact Us
    </MenuItem>
    <Link to='https://drive.google.com/file/d/1xa4Mhj6ivVrZA9umfaOPaVagmyk74w2r/view?usp=share_link'>
    <MenuItem color="rgb(0,49,64)" >
    <img width="30px" src='https://cdn-icons-png.flaticon.com/128/4212/4212312.png' alt='' style={{marginRight:"10px"}}/>  Resume
    </MenuItem>
    </Link>
    <Link to='https://www.linkedin.com/in/ajay-sehwal/'>
    <MenuItem color="rgb(0,49,64)">
   <img width="30px" src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt='' style={{marginRight:"10px"}}/>  Linkedin
    </MenuItem>
    </Link>
  </MenuList>
</Menu>
</Flex>

</Box>
<Box display={{lg:"flex",md:"none",base:"none"}} gap="10px">
    <a href="https://drive.google.com/file/d/1xa4Mhj6ivVrZA9umfaOPaVagmyk74w2r/view?usp=share_link"> <img width="30px" src='https://cdn-icons-png.flaticon.com/128/9648/9648414.png'/></a>
   <a href='https://www.linkedin.com/in/ajay-sehwal/'><img width="30px" src='https://cdn-icons-png.flaticon.com/128/145/145807.png' alt=''/> </a>
   <a href="https://github.com/ajaysehwal"><img width="30px" src='https://cdn-icons-png.flaticon.com/128/270/270798.png'/></a>
</Box>
   
</Flex>
 
 

</Box>
        <Pic fo={home}/>
        <Aboutus fo={about}/>
        <Skills fo={skills}/>
        <Projects fo={project}/>
        <GitStats fo={git}/>
        <ContactUs fo={contact}/>
        <Ex/>

    </div>
  );
}

export default App;
