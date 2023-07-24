import { OverridePlotData } from "./plotly";
export declare const ALL_DC_TYPE: readonly ["grayscale", "matrix", "dataframe", "image", "ordered_pair", "ordered_triple", "scalar", "plotly"];
export type DataContainerType = (typeof ALL_DC_TYPE)[number];
export interface DataContainer {
    type: DataContainerType;
    x?: number[];
    y?: number[];
    z?: number[];
    t?: number[];
    m?: string;
    c?: number[];
    r?: number[];
    g?: number[];
    b?: number[];
    a?: number[];
    fig?: {
        data: OverridePlotData;
    };
}
