import { ReactNode } from "react";
import { Container } from "./style";

interface INextPage {
    nextPage: () => Promise<void>;
    icon: ReactNode;
}

export function NextPage({
    nextPage,
    icon
}:INextPage) {

    return (
        <Container
            onClick={nextPage}
        >
            {icon}
        </Container>
    );
}