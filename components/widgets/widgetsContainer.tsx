"use client";

import { useWidgetContext, WidgetProvider } from "@/providers/widgetContext";
import WeatherWidget from "@/components/widgets/weather";
import NewsWidget from "@/components/widgets/news";

const WidgetsList = () => {
  const { state } = useWidgetContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {state.activeWidgets.includes("weather") && <WeatherWidget />}
      {state.activeWidgets.includes("news") && <NewsWidget />}
    </div>
  );
};

const WidgetsControls = () => {
  const { state, dispatch } = useWidgetContext();

  const toggleWidget = (widget: string) => {
    if (state.activeWidgets.includes(widget)) {
      dispatch({ type: "REMOVE_WIDGET", widget });
    } else {
      dispatch({ type: "ADD_WIDGET", widget });
    }
  };

  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => toggleWidget("weather")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {state.activeWidgets.includes("weather") ? "Remove Weather" : "Add Weather"}
      </button>

      <button
        onClick={() => toggleWidget("news")}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        {state.activeWidgets.includes("news") ? "Remove News" : "Add News"}
      </button>
    </div>
  );
};

const WidgetsContainer = () => {
  return (
    <WidgetProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
        <WidgetsControls />
        <WidgetsList />
      </div>
    </WidgetProvider>
  );
};

export default WidgetsContainer;
