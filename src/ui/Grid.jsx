import styled from 'styled-components'

const StyledGrid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: ${(props) => (props.row ? props.row : "1fr 1fr")};
    justify-content: center;
    align-content: center;
    /* align-items: end; */

    gap: ${(props) => (props.gap ? props.gap : "2rem")};

    padding: 1.5rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        justify-items: center;
        row-gap: 12rem;
        
    }
`;
export default StyledGrid;
