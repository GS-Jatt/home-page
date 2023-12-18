import styled from 'styled-components'
import Button from './Button';

const StyledNavbar = styled.div`
position: absolute;
top: 0;
width: 100%;
/* left: 0;
right: 0; */
height: 9.2rem;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
`
const Nav = styled.nav`
    padding: 0px 7.5px 2px 20.6rem;
    max-width: 127.4rem;
    height: 5.1rem;
    display: flex;

    justify-content: flex-end;
    align-items: center;
    gap: 36.35rem;
    
    @media (max-width: 900px) {
        padding-left: 0;
        gap: 10rem;
    }
    
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    list-style: none;
    font-size: 1.6rem;

    font-weight: 500;
    @media (max-width: 900px) {
        &:last-child {
            display: none;
        }
    }

    @media (max-width: 550px) {
        gap: 2rem;
    }
`;

function Navbar() {
    return (
        <StyledNavbar>
            <Nav>
                <Ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Schedules</li>
                    <li>Membership</li>
                    <li>Pricing</li>
                </Ul>
                <Ul>
                    <li>Offer</li>
                    <li>
                        <Button>Courses</Button>
                    </li>
                </Ul>
            </Nav>
        </StyledNavbar>
    );
}

export default Navbar
