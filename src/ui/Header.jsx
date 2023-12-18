import styled from "styled-components";
import StyledGrid from "./Grid";
import Heading from "./Heading";
import Button from "./Button";

const StyledHeader = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(248, 241, 211, 0.25);
    padding-top: 17.5rem ;
    & h1 {
        max-width: 52.2rem;
    }

    & p {
        max-width: 52rem;
        color: #505c59;
        font-size: 1.6rem;
        font-weight: 400;
        margin: 4rem 0;
    }
    @media (max-width: 900px) {
    height: auto;
    padding-top:24rem ;
    padding-bottom: 10rem;
    }
`;

const GridItem = styled.div`
    align-self: end;
    /* height: 73.7rem; */

    @media (max-width: 900px) {
        grid-row: 2;
        &:last-child{
            grid-row: 1;
        }
    }
`;
const Img = styled.div`
    max-width: 54.1rem;
    max-height: 54.1rem;
    position: relative;
    border-radius: 541px;
    background: #87cc81;

    & img {
        max-height: 71.8132rem;
        margin-top: -18rem;
        /* position: absolute; */
        /* bottom: 0; */
        border-radius: 0 0 600px 600px;
    }

    @media (max-width: 550px) {
        max-width: 44.1rem;
        max-height: 44.1rem;
        & img {
            max-height: 61.4rem;
            border-radius: 0 0 690px 600px;
        }
    }
`;

function Header() {
    return (
        <StyledHeader>
            <StyledGrid row={"63rem 54rem"} gap={"9rem"}>
                <GridItem>
                    <Heading as={"h4"}>
                        Discover the beauty of the tropics
                    </Heading>
                    <Heading as={"h1"}>
                        Tropical Destinations <span> For Student </span>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sit mattis donec
                        mi bibendum integer rutrum nisi. A nec nisl vitae{" "}
                    </p>
                    <Button>SIGN UP</Button>
                </GridItem>

                <GridItem>
                    <Img>
                        <img src="public/img/37.png" />
                    </Img>
                </GridItem>
            </StyledGrid>
        </StyledHeader>
    );
}

export default Header;
