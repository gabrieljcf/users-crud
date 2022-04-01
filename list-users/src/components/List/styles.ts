import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    h1 { 
        margin-top: 2.5rem;
    }

    button {
        margin-top: 1.25rem;
        padding: 1rem;
        
        border: 0;
        background: transparent;
        
        background-color: #EA005A;
        color: #fff;
        border-radius: 0.685rem;
        
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;
        

        &:hover {
            filter: brightness(0.9);
        }
    }

    ul {
        margin-top: 2rem;
    }
`;