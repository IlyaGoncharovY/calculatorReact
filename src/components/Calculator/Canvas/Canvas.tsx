import React from 'react';
import Instruction from "./Instruction";
import {CanvasWrapper} from "../../../styled/styled";


const Canvas = () => {
    return (
        <div>
            <CanvasWrapper>
                <Instruction/>
            </CanvasWrapper>
        </div>

    );
};

export default Canvas;