import { DataContainer } from "./dataContainer";
import { PlotData } from "plotly.js";
import type { PlotParams } from "react-plotly.js";
export type DataContainer2PlotlyProps = {
    dataContainer: DataContainer;
    plotType: PlotData["type"];
    plotMode?: PlotData["mode"];
    theme: "dark" | "light";
    fig?: OverridePlotData;
};
export type OverridePlotData = Array<Partial<PlotData> & {
    header?: {
        values?: any;
        fill: {
            color: string;
        };
    };
    cells?: {
        values?: any;
        fill: {
            color: string;
        };
    };
}>;
export type PlotProps = {
    id: string;
    data: OverridePlotData;
    isThumbnail?: boolean;
    layout: any;
    theme?: "light" | "dark";
} & Omit<PlotParams, "data">;
