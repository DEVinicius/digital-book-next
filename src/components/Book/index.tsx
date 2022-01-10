import { useCallback, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NextPage } from "./NextPage";
import { Paper } from "./Paper";
import { Container } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


export function Book() {
    const { width } = useWindowSize();
    const [page, setPage] = useState(1);

    const handleTurnNextPage = useCallback(async() => {
        setPage(page + 1);
    }, [page, setPage]);

    const handleTurnBackPage = useCallback(async() => {
        setPage(page - 1)
    }, [page, setPage])

   return (
       <Container>
           <NextPage 
            nextPage={handleTurnBackPage}
            icon={<FiChevronLeft />}
           />
           {width > 1100 ? (
               <>
                    <Paper />
                    <Paper />
               </>
           ) : (
                <Paper />
           )}
           <NextPage 
            nextPage={handleTurnNextPage}
            icon={<FiChevronRight />}
           />
       </Container>
   ); 
}