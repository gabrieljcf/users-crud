import styled from "styled-components";

export const List = styled.li`
    width: 100%;
    
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.685rem;
    
    background-color: #fff;
    font-weight: 500;

    & + li {
        margin-top: 1rem;
    }    
`;