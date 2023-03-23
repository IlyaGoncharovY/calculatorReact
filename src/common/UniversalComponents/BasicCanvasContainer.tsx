import React, {FC, ReactNode} from 'react';
import {useDrop} from "react-dnd";
import {CalculatorTypes} from "../Types/CalculatorTypes";

interface BasicCanvasContainerType {
    children: ReactNode
    title: string
}

const BasicCanvasContainer:FC<BasicCanvasContainerType> = ({children, title}) => {

    const [, drop] = useDrop({
        accept: CalculatorTypes.CALCULATOR,
        drop: () => ({name: title}),
        // collect: (monitor) => ({
        //     isOver: monitor.isOver(),
        //     canDrop: monitor.canDrop()
        // })
    })

    // console.log("---->", {canDrop, isOver})

    return (
        <div ref={drop}>
            {children}
        </div>
    );
};

export default BasicCanvasContainer;