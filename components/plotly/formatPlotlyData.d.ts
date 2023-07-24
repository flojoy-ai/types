import { DataContainer2PlotlyProps, OverridePlotData } from "../types/plotly";
export declare const makePlotlyData: (data: OverridePlotData, theme: "light" | "dark", isThumbnail?: boolean) => any[];
export declare const dataContainer2Plotly: ({ dataContainer, plotType, plotMode, theme, fig, }: DataContainer2PlotlyProps) => OverridePlotData;
