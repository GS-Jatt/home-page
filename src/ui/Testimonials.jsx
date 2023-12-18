import styled from 'styled-components'
import Heading from './Heading'
import StyledGrid from './Grid'

const StyledTestimonials = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    & img {
        width: 10rem;
        height: 10rem;
        border-radius: 10rem;
    }
    & p {
        max-width: 40rem;
        color: #2d2e2e;
        text-align: center;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.2rem; /* 137.5% */
    }
    @media (max-width: 900px) {
        margin-bottom:-7rem;
    }
`;

function Testimonials() {
    const data = [
        {
            img: "/img/Ellipse1.png",
            name: "Corey Korsgaard",
            Comment:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            img: "/img/Ellipse2.png",
            name: "Jakob Aminoff",
            Comment:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            img: "/img/Ellipse3.png",
            name: "Carla Press",
            Comment:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
    ];
    return (
        <StyledTestimonials>
            <Heading as={"h3"}>Testimonials</Heading>
            <StyledGrid row={"29.6rem 29.6rem 29.6rem"} gap={"10rem"}>
                {data.map((data) => (
                    <Card key={data.name}>
                        <img src={data.img} />
                        <p>{data.name}</p>
                        <span>
                            <svg
                                width="126"
                                height="2"
                                viewBox="0 0 126 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H126" stroke="#A0CD9E" />
                            </svg>
                        </span>
                        <p>{data.Comment}</p>
                    </Card>
                ))}
            </StyledGrid>
        </StyledTestimonials>
    );
}

export default Testimonials
