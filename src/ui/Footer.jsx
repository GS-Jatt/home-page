import styled from 'styled-components'
import Heading from './Heading'

const StyledFooter = styled.footer`
margin-top: 23rem;
margin-bottom: 10rem;

`
const Div = styled.div`
    margin: auto;
    margin-bottom: 5.2rem;
    max-width: 68.8rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    & p {
        max-width: 42.3rem;

        /* Text */
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.2rem; /* 137.5% */
    }
    @media (max-width: 550px) {
        max-width: 60rem;
    }
`;
const Nav = styled.nav`
    max-width: 107rem;
    margin: auto;
    align-items: center;
    display: flex;
    gap: 3.3rem;

    & ul {
        list-style: none;
        color: #2d2e2e;

        /* Text */
        font-size: 1.6rem;
        font-weight: 400;

        display: flex;
        gap: 4.6rem;

        &:last-child {
            font-weight: 600;
        }
        @media (max-width: 550px) {
            flex-direction: column;
        }
    }
    @media (max-width: 900px) {
        flex-direction: column;
    }
    @media (max-width: 550px) {
        flex-direction: row;
        justify-content: center;
        align-items: start;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <Div>
                <Heading as={"h2"}>
                    Student Special: Discounted rates on tropical getaways!
                </Heading>
                <p>
                    Lets embody your beautiful ideas together, simplify the way
                    you visualize your next big things.
                </p>
            </Div>
            <Nav>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales and Refunds</li>
                    <li>Legal</li>
                </ul>

                <uL>
                    <li>About</li>
                    <li>Schedules</li>
                    <li>Pricing</li>
                    <li>Membership</li>
                    <li>Joins</li>
                </uL>
            </Nav>
        </StyledFooter>
    );
}

export default Footer
