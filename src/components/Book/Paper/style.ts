import { colors } from './../../../config/colors';
import styled from "styled-components";

export const Container = styled.div`
    height: 70vh;
    width: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid ${colors.black};
    background: rgba(196,196,196,0.7);

    border-radius: 0.25rem;
    padding: 2rem;

    img {
        height: 14rem;
        width: 14rem;

        border-radius: 50%;
    }

    p {
        margin: 2rem 0 0 0;
        line-height: 2rem;  
    }
`;