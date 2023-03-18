import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
    displayValue: string;
    operator: string | null;
    previousValue: string | null;
    currentValue: string;
}

const initialState: CalculatorState = {
    displayValue: "0",
    operator: null,
    previousValue: null,
    currentValue: "0",
};

const evaluate = (a: string, b: string, operator: string): string => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
        case "+":
            return (numA + numB).toString();
        case "-":
            return (numA - numB).toString();
        case "x":
            return (numA * numB).toString();
        case "/":
            return (numA / numB).toString();
        default:
            return b;
    }
};

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        inputDigit: (state, action: PayloadAction<string>) => {
            if (state.currentValue === "0") {
                state.currentValue = action.payload.toString();
            } else {
                state.currentValue += action.payload.toString();
            }
            state.displayValue = state.currentValue;
        },
        inputDecimal: (state) => {
            if (!state.currentValue.includes(".")) {
                state.currentValue += ".";
                state.displayValue = state.currentValue;
            }
        },
        inputOperator: (state, action: PayloadAction<{ operator: string }>) => {
            const { operator } = action.payload;
            if (state.operator === null) {
                state.previousValue = state.currentValue;
            } else {
                state.previousValue = evaluate(
                    state.previousValue!,
                    state.currentValue!,
                    state.operator
                );
            }
            state.currentValue = "0";
            state.displayValue = state.previousValue!;
            state.operator = operator;
        },
        calculateResult: (state) => {
            if (state.operator !== null) {
                state.displayValue = evaluate(
                    state.previousValue!,
                    state.currentValue,
                    state.operator
                );
                state.currentValue = state.displayValue;
                state.previousValue = null;
                state.operator = null;
            }
        },
        clearCalculator: (state) => {
            state.displayValue = "0";
            state.operator = null;
            state.previousValue = null;
            state.currentValue = "0";
        },
    },
});

export const {
    inputDigit,
    inputDecimal,
    calculateResult,
    inputOperator,
    clearCalculator
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

