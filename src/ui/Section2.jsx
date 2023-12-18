import styled from 'styled-components'
import StyledGrid from './Grid';
import { useState } from 'react';

const StyledSection2 = styled.div`
    margin: 10rem 0;
    /* max-height: 62rem; */
    & img {
        max-height: 73.2845rem;
        border-radius: 0 0 300px 350px;

        @media (max-width: 550px) {
           max-height: 56rem;
        }
    }
`;

const Card = styled.div`
    align-self: end;
    max-width:45rem; 
    height: 62rem;
    padding: 2.9rem;
    border-radius: 2.3346rem;
    background: #fff;
    box-shadow: 0px 4.425px 6.21px 0px rgba(0, 0, 0, 0.03),
        0px 14.862px 20.859px 0px rgba(0, 0, 0, 0.04),
        0px 66.537px 93.385px 0px rgba(0, 0, 0, 0.07);
    & h1 {
        font-family: 'Roboto';
        font-size: 3.2685rem;
        font-weight: 900;
    }
    & p {
        margin-top: 1.1rem;
        margin-bottom: 5.8rem;
        font-family: Roboto;
        font-size: 1.8677rem;
        font-weight: 400;
        line-height: 2.6848rem; /* 143.75% */
        letter-spacing: 0.0584rem;
    }
`;
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.7rem;
    column-gap: 1.17rem;
    & label {
        font-family: "Roboto";
        font-size: 1.284rem;
        font-weight: 600;
        line-height: 2; /* 209.091% */
        letter-spacing: 0.0584rem;
        text-transform: uppercase;
    }
    & section {
        grid-column: 1/3;
    }
    & input {
        padding: 1.7rem;
        position: relative;
        width: 100%;
        border-radius: 1.1673rem;
        border: 0px solid #000;
        background: #f3f3f3;
        text-align: center;

        &::placeholder {
            text-align: center;
            color: #78858f;
            font-family: "Roboto";
            font-size: 1.4008rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.6848rem; /* 191.667% */
            letter-spacing: 0.0584rem;
        }
    }
    & div {
        position: relative;
        & button {
            border: none;
            border-radius: 0rem 1.1673rem 1.1673rem 0rem;
            background: #ebebeb;
            padding: 1.7rem;
            cursor: pointer;

            position: absolute;
            left: 0;
            rotate: 180deg;
            &:last-child {
                rotate: 0deg;
                left: auto;
                right: 0;
            }
        }
    }
`;

const Button = styled.div`
max-width:13.5rem ;
    padding: 1.4rem 1.7rem;
    border-radius: 0.4669rem;
    background: #000;
    margin-top: 5.8rem;
    cursor: pointer;
    
    color: #fff;
    text-align: center;
    font-family: 'Roboto';
    font-size: 1.5175rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1261rem;
    text-transform: uppercase;
`;

function Section2() {
    const [star, setStar] = useState(0);
    const [room, setRoom] = useState(0);

    return (
        <StyledSection2>
            <StyledGrid row={"54rem 42rem"}>
                <img src="public/img/img47.png" alt="image" />
                <Card>
                    <h1>Book now</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <Form>
                        <section>
                            <label>City</label>
                            <input type="text" placeholder="Placeholder" />
                        </section>
                        <div>
                            <label>Arrival</label>
                            <input type="text" placeholder="10 oct" />
                        </div>
                        <div>
                            <label>Departure</label>
                            <input type="text" placeholder="11 oct" />
                        </div>
                        <div>
                            <label>star</label>
                            <input type="text" value={star} disabled></input>
                            <button
                                type="button"
                                onClick={() =>
                                    setStar((r) => {
                                        if (r > 0) return r - 1;
                                        return r;
                                    })
                                }>
                                <svg
                                    width="15"
                                    height="5"
                                    viewBox="0 0 15 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => setStar((r) => r + 1)}>
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <label>room</label>
                            <input type="number" disabled value={room} />
                            <button
                                type="button"
                                onClick={() =>
                                    setRoom((r) => {
                                        if (r > 0) return r - 1;
                                        return r;
                                    })
                                }>
                                <svg
                                    width="15"
                                    height="5"
                                    viewBox="0 0 15 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRoom((r) => r + 1)}>
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Button>Book now</Button>
                    </Form>
                </Card>
            </StyledGrid>
        </StyledSection2>
    );
}

export default Section2
