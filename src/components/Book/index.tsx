import { useCallback, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { NextPage } from "./NextPage";
import { Paper } from "./Paper";
import { Container } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { pages } from "../../config/pages";


export function Book() {
    const { width } = useWindowSize();
    const [currentPage, setCurrentPage] = useState(0);

    const handleTurnNextPage = useCallback(async() => {
        if(width > 1100) {
            if(pages.length > currentPage + 2) {
                setCurrentPage(currentPage + 1);
            }

            return
        }

        if(pages.length > currentPage + 1) {
            setCurrentPage(currentPage + 1);
        }

        return
    }, [currentPage, setCurrentPage]);

    const handleTurnBackPage = useCallback(async() => {
        if(currentPage - 1 >= 0) {
            setCurrentPage(currentPage - 1)
        }

        return
    }, [currentPage, setCurrentPage])

   return (
       <Container>
           <NextPage 
            nextPage={handleTurnBackPage}
            icon={<FiChevronLeft />}
           />
           {width > 1100 ? (
               <>
                    <Paper 
                        data={pages[currentPage]}
                    />
                    <Paper 
                        data={pages[currentPage + 1]}
                    />
               </>
           ) : (
                <Paper 
                    data={pages[currentPage]}
                />
           )}
           <NextPage 
            nextPage={handleTurnNextPage}
            icon={<FiChevronRight />}
           />
       </Container>
   ); 
}