import React, {Dispatch, FC, ReactNode, SetStateAction} from 'react';
import {useDrag} from "react-dnd";
import {CalculatorTypes} from "../Types/CalculatorTypes";

interface BasicCalculatorSectionsType {
    children: ReactNode
    setIsCanvas: Dispatch<SetStateAction<boolean>>
    // isCanvas: boolean
}

const BasicCalculatorSections: FC<BasicCalculatorSectionsType> = ({children, setIsCanvas}) => {

    // const [, drag] = useDrag(() => ({
    //     type: CalculatorTypes.CALCULATOR,
    //     end: (item, monitor) => {
    //         const dropResult = monitor.getDropResult()
    //         dropResult === CalculatorTypes.CALCULATOR ? setIsCanvas(true) : setIsCanvas(false)
    //     },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // }))

    const [, drag] = useDrag({
        item: {name: CalculatorTypes.CALCULATOR},
        type: CalculatorTypes.CALCULATOR,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult<{ name: "Calculator"; }>()
            if (dropResult && dropResult.name === CalculatorTypes.CALCULATOR) {
                setIsCanvas(true)
            } else {
                setIsCanvas(false)
            }
        },
        collect: monitor => ({
              isDragging: monitor.isDragging()
        })
    })

    return (
        <div ref={drag}>
            {children}
        </div>
    );
};

export default BasicCalculatorSections;