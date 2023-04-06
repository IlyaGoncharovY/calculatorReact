import React from "react";
import {CommonWrapper} from "../../styled/styled";
import {DragAndDrop} from "./DnD/DragAndDrop";
import ChangeMode from "./ChageMode/ChangeMode";

export const Calculator = () => {

    return (
        <CommonWrapper>
            <ChangeMode/>
            <DragAndDrop/>
        </CommonWrapper>
    );
};

