import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: initialStateType = {
    results: "0",
    operator: null,
    prevNumber: null,
    newNumber: null,
    isDecimal: false
}

interface initialStateType {
    results: string
    operator: string | null
    prevNumber: number | null
    newNumber: number | null
    isDecimal: boolean
}

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        updateResultValue: (state, action: PayloadAction<string>) => {
            state.results = action.payload
        },
        setOperator: (state, action: PayloadAction<string>) => {
            state.operator = action.payload
            state.prevNumber = parseFloat(state.results)
            state.isDecimal = false
        },
        // clearCalculator: (state) => {
        //     state.results = "0"
        //     state.operator = null
        //     state.prevNumber = null
        //     state.newNumber = null
        //     state.isDecimal = false
        // },
        calculateRes: (state) => {
            state.newNumber = parseFloat(state.results)

            switch (state.operator) {
                case "+":
                    state.results = (state.prevNumber! + state.newNumber!).toString()
                    break;
                case "-":
                    state.results = (state.prevNumber! - state.newNumber!).toString()
                    break;
                case "*":
                    state.results = (state.prevNumber! * state.newNumber!).toString()
                    break;
                case "/":
                    state.results = (state.prevNumber! / state.newNumber!).toString()
                    break;
                default:
                    state.results = "0"
            }
            state.operator = null
            state.prevNumber = null
            state.newNumber = null
            state.isDecimal = false
        },
        toggleDecimal: (state) => {
            if (!state.isDecimal) {
                state.results += "."
                state.isDecimal = true
            }
        },
        appendNumber: (state, action: PayloadAction<string>) => {
            if (state.results === "0" || state.operator !== null) {
                state.results = action.payload
            } else {
                state.results += action.payload
            }
        },
    }
})
export const {
    updateResultValue, setOperator,
     calculateRes,
    toggleDecimal, appendNumber
} = calculatorSlice.actions

export default calculatorSlice.reducer