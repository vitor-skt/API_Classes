import styled from 'styled-components';

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    span{
        font-size: 1.2rem;
        font-weight: bold;
    }
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem; 
    }
    li{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    img {
        width: 12rem;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
`