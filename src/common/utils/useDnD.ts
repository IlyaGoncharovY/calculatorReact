import { useState } from "react"
import {Data, LocationType} from "../Data/DataSet";


export const useDragAndDrop = (initialState: Data[]) => {

    const [isDragging, setIsDragging] = useState(false)
    const [listItems, setListItems] = useState<Data[]>(initialState)

    const handleUpdateList = (id: number, location: LocationType) => {

        let card = listItems.find(item => item.id === id)

        if (card && card.location !== location) {

            card.location = location

            setListItems( prev => ([
                card!,
                ...prev.filter(item => item.id !== id)
            ]))
        }
    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    return {
        isDragging,
        listItems,
        handleUpdateList,
        handleDragging,
    }
}