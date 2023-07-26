import { jsx as _jsx } from "react/jsx-runtime";
/* eslint @typescript-eslint/no-explicit-any: 0 */
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js";
import { plotLayout } from "./layout";
import { useMemo } from "react";
const MATRIX_SIZE = {
    width: 240,
    height: 260,
};
const PlotlyComponent = (props) => {
    var _a, _b, _c, _d, _e;
    const { data, layout, useResizeHandler, style, id, isThumbnail, theme = "light", } = props;
    const defaultPlotLayout = useMemo(() => plotLayout(theme), [theme]);
    const Plot = createPlotlyComponent(Plotly);
    const isMatrix = ((_c = (_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.header) === null || _b === void 0 ? void 0 : _b.values) === null || _c === void 0 ? void 0 : _c.length) === 0;
    const is3dPlot = ((_d = data[0]) === null || _d === void 0 ? void 0 : _d.type) === "surface" || ((_e = data[0]) === null || _e === void 0 ? void 0 : _e.type) === "scatter3d";
    return (_jsx(Plot, { data: data, layout: Object.assign(Object.assign(Object.assign(Object.assign({}, layout), defaultPlotLayout), { showlegend: !isThumbnail }), (isThumbnail && isMatrix && MATRIX_SIZE)), useResizeHandler: useResizeHandler, config: { displayModeBar: false, staticPlot: isThumbnail && !is3dPlot }, style: isMatrix && isThumbnail ? MATRIX_SIZE : style }));
};
export default PlotlyComponent;
