import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Card from "./Card";
import Heading from "./Heading";

const StyledSlider = styled.div`
    width: 100%;
    height: 65.5rem;
    margin: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    overflow: hidden;
    position: relative;
    padding-left: 29rem;
    @media (max-width: 900px) {
        padding-left: 15rem;
    }

    @media (max-width: 550px) {
        padding-left:10rem ;
    }
`;


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & h4 {
        font-size: 3.2rem;
        font-style: normal;
        font-weight: 600;
        line-height: 0.9; /* 93.75% */
        & span {
            color:  #7d7d7d;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 500;
            line-height: 0.9;
        }
    }
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    /* border-radius: 60px; */
    /* box-shadow: 0 0 8px #00000086; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    left: 0;

    & svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    &:last-child {
        rotate: -180deg;
        left: auto;
        right: 0%;
        translate: 20%;
    }
    `;
    const Heading2 = styled(Heading)`
        margin-left: 28rem;
        @media (max-width: 900px) {
            margin-left: 15rem;
        }
        @media (max-width: 550px) {
            margin-left: 10rem;
        }
    `;

function Slider() {
    const [sPosition, setSPosition] = useState(0);
    const data = [
        {
            img: "public/img/card-image1.png",
            title: "Harvard University",
            address: "Cambridge, Massachusetts, UK",
        },
        {
            img: "public/img/card-image2.png",
            title: "Oxford University",
            address: "Oxford, England",
        },
        {
            img: "public/img/card-image3.png",
            title: "Stanford University",
            address: "Stanford, California",
        },
        {
            img: "public/img/card-image4.png",
            title: "Nanyang University",
            address: "Nanyang Ave, Singapura",
        },
    ];

    function handleNext() {
        if (sPosition === data.length - 1) setSPosition(0);
        if (sPosition < data.length - 1) setSPosition((p) => p + 1);
    }

    function handlePre() {
        if (sPosition === 0) setSPosition(data.length - 1);
        sPosition && setSPosition((p) => p - 1);
    }
    return (
        <>
            <Heading2 as={'h3'}>Our Destinations</Heading2>
            <StyledSlider>
                {data.map((data) => (
                    <Card key={data.title} pos={sPosition} data={data} />
                ))}
            </StyledSlider>
            <Div>
                <Button onClick={handlePre}>
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z"
                            fill="#262626"
                        />
                    </svg>
                </Button>
                <h4>
                    {sPosition + 1} / <span>{data.length}</span>{" "}
                </h4>
                <Button onClick={handleNext}>
                    <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z"
                            fill="#262626"
                        />
                    </svg>
                </Button>
            </Div>
        </>
    );
}

export default Slider;
