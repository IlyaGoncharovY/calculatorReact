import React from 'react';
import {InstructionContainer, InstructionLabel, TitleDown, TitleUp} from "../../styled/styled";

const Instruction = () => {
    return (
        <InstructionContainer>
            <InstructionLabel>
                +
            </InstructionLabel>
            <TitleUp>
                Перетащите сюда
            </TitleUp>
            <TitleDown>
                любой элемент из левой панели
            </TitleDown>
        </InstructionContainer>
    );
};

export default Instruction;