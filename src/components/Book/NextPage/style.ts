import { colors } from './../../../config/colors';
import styled from "styled-components";

export const Container = styled.button`
    height: 4rem;
    width: 4rem;
    border-radius: 0.25rem; 
    svg {
        color: ${colors.black};
        font-size: 2rem;
    }
`;