import {Grid,GridItem,Image} from "@chakra-ui/react";
import { ScrollEffect } from 'react-easy-scroll-effect'
import 'react-easy-scroll-effect/dist/index.css'
export default function GitStats({fo}){

    return (
        <div ref={fo}  >
            <hr />
            <br />
     <h1 style={{fontSize:"25px",fontWeight:"800"}}>Github Stats</h1>
     <br />
        <ScrollEffect>
               <Grid templateColumns={{lg:"repeat(2,1fr)",md:"repeat(1,1fr)", base:"repeat(1,1fr)"}} width="100%" m="auto" >
            <GridItem>
                <Image m='auto'  src='https://github-readme-stats.vercel.app/api?username=ajaysehwal&theme=blue-green&hide_border=false&include_all_commits=false&count_private=true'/>
            </GridItem>
            <GridItem>
                <Image m="auto" src='https://github-readme-streak-stats.herokuapp.com/?user=ajaysehwal&theme=blue-green&hide_border=false'/>
            </GridItem>

           </Grid>
          <Image m="auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ajaysehwal&theme=blue-green&hide_border=false&include_all_commits=false&count_private=true&layout=compact"/>
        </ScrollEffect>
          <br />
           <br />
          </div>
    )
}