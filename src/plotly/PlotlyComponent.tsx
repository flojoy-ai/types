/* eslint @typescript-eslint/no-explicit-any: 0 */
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js";
import { plotLayout } from "./layout";
import { useMemo } from "react";
import { PlotProps } from "@src/types/plotly";


const PlotlyComponent = (props: PlotProps) => {
  const { data, layout, useResizeHandler, style, id, isThumbnail, theme='light' } = props;
  const defaultPlotLayout = useMemo(()=> plotLayout(theme), [theme]);
  const Plot = createPlotlyComponent(Plotly);
  const isMatrix = data[0]?.header?.values?.length === 0;
  const is3dPlot = data[0]?.type === "surface" || data[0]?.type === "scatter3d";

  return (
    <Plot
      data={data}
      layout={{
        ...layout,
        ...defaultPlotLayout,
        showlegend: !isThumbnail,
        ...(isThumbnail && isMatrix && getSizeForMatrix()),
      }}
      useResizeHandler={useResizeHandler}
      config={{ displayModeBar: false, staticPlot: isThumbnail && !is3dPlot }}
      style={isMatrix && isThumbnail ? getSizeForMatrix() : style}
    />
  );
};

export default PlotlyComponent;

const getSizeForMatrix = () => {
  return {
    width: 240,
    height: 260,
  };
};
