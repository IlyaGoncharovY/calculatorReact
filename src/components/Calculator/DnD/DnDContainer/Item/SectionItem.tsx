import React, {FC} from 'react';
import {Data} from "../../../../../common/Data/DataSet";

interface SectionItemType {
    data: Data
    handleDragging: (dragging: boolean) => void
}

export const SectionItem: FC<SectionItemType> = ({data, handleDragging}) => {

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }

    const handleDragEnd = () => handleDragging(false)

    return (
        <div draggable={"true"}
             onDragStart={handleDragStart}
             onDragEnd={handleDragEnd}
        >
            {/*<p>content</p>*/}
            {data.content()}
        </div>
    );
};

