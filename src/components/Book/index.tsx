import { useWindowSize } from "../../hooks/useWindowSize";
import { Paper } from "./Paper";
import { Container } from "./style";



export function Book() {
    const { height, width} = useWindowSize();

   return (
       <Container>
           {width > 1100 ? (
               <>
                    <Paper />
                    <Paper />
               </>
           ) : (
                <Paper />
           )}
       </Container>
   ); 
}