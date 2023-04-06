import React from 'react';
import {data, LocationType} from "../../../common/Data/DataSet";
import {ContainerSections} from "./DnDContainer/ContainerSections";
import {useDragAndDrop} from "../../../common/utils/useDnD";

const locationSections: LocationType[] = ["Calculator", "Canvas"]

export const DragAndDrop = () => {

    const {isDragging, listItems, handleDragging, handleUpdateList} = useDragAndDrop(data)

    return (
        <div>
            {
                locationSections.map((container, index) => (
                    <ContainerSections
                        key={index}
                        location={container}
                        items={listItems}

                        isDragging={isDragging}
                        handleDragging={handleDragging}
                        handleUpdateList={handleUpdateList}
                    />
                ))
            }
        </div>
    );
};

