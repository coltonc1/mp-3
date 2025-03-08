import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: darkgreen;
    color: blanchedalmond;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    a {
        color: blanchedalmond;
    }
`;

export default function Footer() {
    return(
        <>
            <StyledFooter>
                {/* Need to add link tag instead of a tag */}
                <p>All Rights Reserved by Colton Connolly <a href=""> Credits</a> &copy;</p>
            </StyledFooter>
        </>
    );
}