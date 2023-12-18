import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    width: 36rem;
    height: 49.5rem;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 2rem;
    background: #fff;
    box-shadow: 0px -0.275px 2.748px 0px rgba(0, 0, 0, 0.02),
        0px -0.695px 6.95px 0px rgba(0, 0, 0, 0.03),
        0px -1.418px 14.177px 0px rgba(0, 0, 0, 0.04),
        0px -2.92px 29.201px 0px rgba(0, 0, 0, 0.05),
        0px -8px 80px 0px rgba(0, 0, 0, 0.07);
    transition: all 2s;
    translate: ${(props) => props.$pos * -100}%;
    & h3 {
        padding: 2.5rem;
        font-family: Roboto;
        font-size: 2.8rem;
        font-weight: 900;
        word-break: break-all;
    }
    & div {
        display: flex;
        padding: 1rem 2.5rem 2.5rem 2.5rem;
        justify-content: space-between;
        align-items: center;
    }
    & p {
        font-family: Roboto;
        font-size: 1.4rem;
        font-weight: 500;
    }
    & button {
        display: flex;
        width: 5rem;
        height: 5rem;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        border-radius: 5rem;
        background: #f2f2f2;
        font-size: 3rem;
        font-weight: 900;
        padding-bottom: 25px;
    }
    @media (max-width: 900px) {
        width: 30rem;
        height: 43.5rem;
    }
`;
const Img = styled.img`
    width: 36rem;
    height: 32.7rem;
    border-radius: 2rem;
    @media (max-width: 900px) {
        width: 30rem;
        height: 25.5rem;
    }
`;

function Card({data ,pos}) {
    return (
        <StyledCard $pos ={pos}>
            <Img src={data.img}></Img>
            <h3>{data.title}</h3>
            <div>
                <p>{data.address}</p>
                <button>&hellip; </button>
            </div>
        </StyledCard>
    );
}

export default Card;
