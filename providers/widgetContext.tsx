import { WidgetAction, WidgetState } from "@/types/context";
import React, { createContext, useContext, useReducer, ReactNode } from "react";


const initialState: WidgetState = {
    activeWidgets: [],
};

const widgetReducer = (state: WidgetState, action: WidgetAction): WidgetState => {
    switch (action.type) {
        case "ADD_WIDGET":
            if (!state.activeWidgets.includes(action.widget)) {
                return { activeWidgets: [...state.activeWidgets, action.widget] };
            }
            return state;
        case "REMOVE_WIDGET":
            return {
                activeWidgets: state.activeWidgets.filter((widget) => widget !== action.widget),
            };
        default:
            return state;
    }
};

const WidgetContext = createContext<{
    state: WidgetState;
    dispatch: React.Dispatch<WidgetAction>;
} | null>(null);

export const WidgetProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(widgetReducer, initialState);

    return (
        <WidgetContext.Provider value={{ state, dispatch }}>
            {children}
        </WidgetContext.Provider>
    );
};

export const useWidgetContext = () => {
    const context = useContext(WidgetContext);
    if (!context) {
        throw new Error("useWidgetContext must be used within a WidgetProvider");
    }
    return context;
};
