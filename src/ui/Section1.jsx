import styled from 'styled-components'
import StyledGrid from './Grid'
import Heading from './Heading';
import Button from './Button';

const StyledSection1 = styled.section`
margin: 21.6rem 0;
@media (max-width: 900px) {
        margin:9rem 0px;
        }
`;
const GridItem = styled.div`
    align-self: center;
    & h2 {
        max-width: 36.8rem;
        margin-bottom: 0.9rem;
    }
    @media (max-width: 900px) {
        gap: 10rem;
        &:last-child{
            grid-row: 1;
        }
    }
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    list-style: none;
    & li {
        padding: 2.5rem;
        display: flex;
        gap: 1rem;

        border-radius: 20px;
        box-shadow: 0px 3.126px 5.926px 0px rgba(0, 0, 0, 0.04),
            0px 47px 152px 0px rgba(0, 0, 0, 0.09);
        & img {
            width: 8rem;
            height: 8rem;
        }
        & h5 {
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        & p {

            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    }
`;

const List = styled.ul`
    margin-top: 2rem;
    margin-bottom: 6rem;
    margin-left: 1.6rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
`;

function Section1() {
    return (
        <StyledSection1>
            <StyledGrid row={"36rem 44.7rem"} gap={"25.1rem"}>
                <GridItem>
                    <Ul>
                        <li>
                            <img src="public/img/avatar1.png" alt="avatar" />
                            <div>
                                <h5>Jenny Wilson</h5>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    adipiscing...
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="public/img/avatar2.png" alt="avatar" />
                            <div>
                                <h5>Jenny Wilson</h5>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    adipiscing...
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="public/img/avatar3.png" alt="avatar" />
                            <div>
                                <h5>Jenny Wilson</h5>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    adipiscing...
                                </p>
                            </div>
                        </li>
                    </Ul>
                </GridItem>

                <GridItem>
                    <Heading as={"h2"}>
                        Tropical Adventure <span>for Students.</span>
                    </Heading>
                    <Heading as={"h4"}>
                        Student Tropical Vacation: Relax and Recharge
                    </Heading>
                    <List>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </List>
                    <Button>Explore More</Button>
                </GridItem>
            </StyledGrid>
        </StyledSection1>
    );
}

export default Section1
