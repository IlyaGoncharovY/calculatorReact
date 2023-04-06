import React, {FC} from 'react';
import {Data, LocationType} from "../../../../common/Data/DataSet";
import {SectionItem} from "./Item/SectionItem";

interface ContainerSectionsType {
    location: LocationType
    items: Data[]
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, location: LocationType) => void
}

export const ContainerSections: FC<ContainerSectionsType> = ({
                                                                 location,
                                                                 items = [],
                                                                 isDragging,
                                                                 handleDragging,
                                                                 handleUpdateList
                                                             }) => {

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        handleUpdateList(id, location)
        handleDragging(false)
    }

    return (
        <div className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
             onDragOver={handleDragOver}
             onDrop={handleDrop}
        >
            <p>{location}</p>
            {items.map((item, index) => (
                location === item.location &&
                <SectionItem
                    key={index}
                    data={item}
                    handleDragging={handleDragging}
                />
            ))}
        </div>
    );
};

