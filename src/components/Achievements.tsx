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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const MainDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    padding: 1vh 2vw;

    @media screen and (max-width: 900px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const MainText = styled.div`
    align-self: center;
    width: 90%;
    margin: 1vh 1vw;

    @media screen and (max-width: 900px) {
        align-self: center;
        width: 100%;
        margin: 1vh 1vw;
    }
`;

const StyledUl = styled.ul`
    list-style-type: circle;
`;

const StyledLi = styled.li`
    margin-bottom: 10%;
    font-size: calc(2px + 1.5vw);
`;


export default function Achievements() {
    return(
        <>
        <StyledMain>
            <MainTitle>Achievements</MainTitle>

            <MainDiv>

            <MainText>
                <StyledUl>
                    <StyledLi>Dean's List at Boston University</StyledLi>
                    <StyledLi>Nobel Prize for solving NP-hard problems</StyledLi>
                    <StyledLi>Nobel Prize for discovering new information about the universe</StyledLi>
                    <StyledLi>Won 1000 hackathons blindfolded</StyledLi>
                </StyledUl>
            </MainText>

            </MainDiv>
        </StyledMain>
        </>
    );
}