export type WidgetState =  {
    activeWidgets: string[];
}

type WidgetAction = { type: "ADD_WIDGET"; widget: string } | { type: "REMOVE_WIDGET"; widget: string };
