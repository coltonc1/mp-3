import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: darkgreen;
    color: blanchedalmond;
    align-items: left;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

const StyledH1 = styled.h1`
    margin: 0px 0px;
`;

const StyledP = styled.p`
    margin: 0px 0px;
`;

export default function Header() {
    return(
        <>
            <StyledHeader>
                <StyledH1>Colton Connolly</StyledH1>
                <StyledP>My Online Resume</StyledP>
            </StyledHeader>
        </>
    );
}