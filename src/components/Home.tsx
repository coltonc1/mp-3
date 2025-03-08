import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width:70%;
    background-color: rgb(208, 255, 172);
    height: 100vh;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height: 100vh;
        background-color: rgb(208, 255, 172);
    }
`;

const MainTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 4vw);
    color: darkgreen;

    @media screen and (max-width: 900px) {
        text-align: center;
        color: darkgreen;
    }
`;

const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media screen and (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const MainImageDiv = styled.div`
    width: 40%;

    @media screen and (max-width: 900px) {
        align-self: center;
    }
`;

const ProfileImage = styled.img`
    max-width: 100%;
`;

const MainTextDiv = styled.div`
    align-self: center;
    width: 90%;
    margin: 1vh 1vw;
    word-wrap: break-word

    @media screen and (max-width: 900px) {
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
    }
`;

const StyledP = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 2vw);

    @media screen and (max-width: 900px) {
        margin: 2% 2%;
        font-size: calc(2px + 3vw);
    }
`;





export default function Home() {
    return(
        <>
        <StyledMain>
            <MainTitle>Home</MainTitle>

            <MainDiv>

                <MainImageDiv>
                    {/* <ProfileImage src="../../public/profile.jpeg" alt="Colton Connolly"/> */}
                    <ProfileImage src="/profile.jpeg" alt="Colton Connolly"/>
                </MainImageDiv>

                <MainTextDiv>
                    <StyledP>
                        My name is Colton Connolly, and I am an undergraduate student at Boston University majoring in 
                        Computer Science. I am most interested in distributed systems and concurrent computing. I would like to 
                        enter the field and further my knowledge of the topic.
                    </StyledP>
                </MainTextDiv>

            </MainDiv>

            <StyledP>
                Welcome to my resume website, where you can click on the different navigation links to see my 
                <strong><em><u>Education</u></em></strong>, <strong><em><u>Projects</u></em></strong>, 
                <strong><em><u>Experience</u></em></strong>, etc. There is also a calculator you can use in the Projects page.
            </StyledP>
        </StyledMain>  
        </>
    );
}