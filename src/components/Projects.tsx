import styled from "styled-components";
import { useState } from "react";

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

const CalcWrapper = styled.div`
    background-color: aqua;
    width: 100%;
    align-items: center;
    padding: 2vh 2vw;
    align-self: center;
    width: 60%;
    height: 100%;
    margin: 1vh 1vw;
`;

const CalcTitle = styled.h3`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 4vw);
    color: darkblue;
`;

const CalcInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
`;

const CalcInputNums = styled.input`
    height: 20%;
    margin-bottom: 2%;
    border: 2px solid darkblue;
    font-size: calc(2px + 2vw);
`;

const CalcButtonsDiv = styled.div`
    margin-left: 20%;
`;

const CalcButton = styled.button`
    border: 2px solid darkblue;
    font-size: calc(2px + 2vw);
`;

const CalcOutput = styled.div`
    margin-left: 2%;
    background-color: white;
    margin-top: 2%;
    font-size: calc(2px + 2vw);
    align-items: center;
    padding-left: 1%;
    border: 2px solid darkblue;
    width: fit-content;
    height: fit-content;
`;

const OutputH3 = styled.h3`
    margin: 0px 0px;
`;

const NegativeOutputH3 = styled.h3`
    margin: 0px 0px;
    color: red;
`;


// Need to add for loop for power function cant use **

export default function Projects() {

    const [firstnumber, setFirstNumber] = useState("");
    const [secondnumber, setSecondNumber] = useState("");
    const [output, setOutput] = useState(0);

    function calculator(operation: string) {
        if(operation === "add") {
            setOutput(Number(firstnumber) + Number(secondnumber));
        } else if (operation === "sub") {
            setOutput(Number(firstnumber) - Number(secondnumber));
        } else if (operation === "mul") {
            setOutput(Number(firstnumber) * Number(secondnumber));
        } else if (operation === "div") {
            setOutput(Number(firstnumber) / Number(secondnumber));
        } else if (operation === "pow") {
            let startNumber = 1;
            for(let i = 0; i < Number(secondnumber); i++) {
                startNumber = Number(firstnumber) * startNumber;
            }
            setOutput(startNumber);
        } else if (operation === "clear") {
            setOutput(0);
            setFirstNumber("");
            setSecondNumber("");
        }
    }

    function displayOutput() {
        if(output >= 0) {
            return (
                <OutputH3>{output}</OutputH3>
            );
        } else {
            return (
                <NegativeOutputH3>{output}</NegativeOutputH3>
            );
        }
    }

    


    return(
        <>
        <StyledMain>
            <MainTitle>Projects</MainTitle>

            <MainDiv>

                <MainText>
                    <StyledUl>
                        <StyledLi>Collaborated with a team to make a playlist guessing game for the user
                            using the Spotify API
                        </StyledLi>
                        <StyledLi>Implemented Map-Reduce using Go</StyledLi>
                        <StyledLi>Implemented a sudoku solver using recursive backtracking in Java</StyledLi>
                        <StyledLi>Created a resume website, the one you are reading right now</StyledLi>
                    </StyledUl>
                </MainText>

            </MainDiv>

            <CalcWrapper>
                <CalcTitle>Calculator</CalcTitle>
                <CalcInputDiv>
                    <label htmlFor="First number for calculator">
                        <CalcInputNums type="number" 
                        placeholder="First number" 
                        value={firstnumber}
                        onChange={(e => setFirstNumber(e.target.value))}/>
                    </label>
                    <label htmlFor="Second number for calculator">
                        <CalcInputNums type="number" 
                        placeholder="Second number" 
                        value={secondnumber}
                        onChange={(e => setSecondNumber(e.target.value))}/>
                    </label>

                </CalcInputDiv>
                <CalcButtonsDiv>
                    <CalcButton onClick={() => calculator("add")}>+</CalcButton>
                    <CalcButton onClick={() => calculator("sub")}>-</CalcButton>
                    <CalcButton onClick={() => calculator("mul")}>*</CalcButton>
                    <CalcButton onClick={() => calculator("div")}>/</CalcButton>
                    <CalcButton onClick={() => calculator("pow")}>**</CalcButton>
                    <CalcButton onClick={() => calculator("clear")}>Clear</CalcButton>
                </CalcButtonsDiv>
                <CalcOutput>{displayOutput()}</CalcOutput>

            </CalcWrapper>
        </StyledMain>
        </>
    );
}