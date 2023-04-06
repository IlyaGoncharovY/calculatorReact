import {Display} from "../../components/Calculator/CalcSections/Display/Display";
import {ExpressionBar} from "../../components/Calculator/CalcSections/ExpressionBar/ExpressionBar";
import {ButtonsBar} from "../../components/Calculator/CalcSections/ButtonsBar/ButtonsBar";
import {EqualBar} from "../../components/Calculator/CalcSections/EqualBar/EqualBar";

export type ExpressionType = {
    value: string
}

export type ButtonsType = {
    value: string
}

export const Expression: ExpressionType[] = [
    {value: "/"},
    {value: "x"},
    {value: "-"},
    {value: "+"},
    {value: "CE"},
]

export const Buttons: ButtonsType[] = [
    {value: "1"},
    {value: "2"},
    {value: "3"},
    {value: "4"},
    {value: "5"},
    {value: "6"},
    {value: "7"},
    {value: "8"},
    {value: "9"},
    {value: "0"},
    {value: "."},
]

export type LocationType = "Calculator" | "Canvas"

export interface Data {
    id: number
    content: () => JSX.Element
    location: LocationType
}

export const data: Data[] = [
    {id: 1, content: Display, location: "Calculator"},
    {id: 2, content: ExpressionBar, location: "Calculator"},
    {id: 3, content: ButtonsBar, location: "Calculator"},
    {id: 4, content: EqualBar, location: "Calculator"},
]