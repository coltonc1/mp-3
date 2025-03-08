import {Link} from 'react-router-dom';
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: rgb(151, 254, 73);
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    margin: 0px 0px;

    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(151, 254, 73);
        list-style: none;
        padding-left: 0;
    }
`;

const StyledLi = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color:darkgreen;
    padding: 2vh 0;
    margin: 5vh auto;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        background-color:darkgreen;
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

export default function Nav() {
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <Link to={`/`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/education`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Education</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/experience`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Experience</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/certifications`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Certifications</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/achievements`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Achievements</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/projects`} style={{ color: 'blanchedalmond', textDecoration: 'none' }}>Projects</Link>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}