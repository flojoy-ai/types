import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import NodeWrapper from "./components/NodeWrapper";
import clsx from "clsx";
import HandleComponent from "./components/HandleComponent";
import Scatter from "./assets/nodes/Scatter";
import { memo, useMemo } from "react";
import { makePlotlyData } from "../plotly/formatPlotlyData";
import PlotlyComponent from "../plotly/PlotlyComponent";
import CompositePlot from "./assets/nodes/CompositePlot";
import ProphetComponents from "./assets/nodes/ProphetComponents";
import ProphetPlot from "./assets/nodes/ProphetPlot";
import ArrayView from "./assets/nodes/ArrayView";
import MatrixView from "./assets/nodes/MatrixView";
import BigNumber from "./assets/nodes/BigNumber";
import BoxPlot from "./assets/nodes/BoxPlot";
import Histogram from "./assets/nodes/Histogram";
import LineChart from "./assets/nodes/LineChart";
import Scatter3D from "./assets/nodes/3DScatter";
import Surface3D from "./assets/nodes/3DSurface";
import Bar from "./assets/nodes/Bar";
import Table from "./assets/nodes/Table";
import Image from "./assets/nodes/Image";
const chartElemMap = {
    SCATTER: _jsx(Scatter, {}),
    HISTOGRAM: _jsx(Histogram, {}),
    LINE: _jsx(LineChart, {}),
    SURFACE3D: _jsx(Surface3D, {}),
    SCATTER3D: _jsx(Scatter3D, {}),
    BAR: _jsx(Bar, {}),
    TABLE: _jsx(Table, {}),
    IMAGE: _jsx(Image, {}),
    BOX: _jsx(BoxPlot, {}),
    BIG_NUMBER: _jsx(BigNumber, {}),
    MATRIX_VIEW: _jsx(MatrixView, {}),
    ARRAY_VIEW: _jsx(ArrayView, {}),
    PROPHET_PLOT: _jsx(ProphetPlot, {}),
    PROPHET_COMPONENTS: _jsx(ProphetComponents, {}),
    COMPOSITE: _jsx(CompositePlot, {}),
};
const VisorNode = (props) => {
    var _a;
    const { nodeProps: { data }, nodeError, isRunning, plotlyFig, theme = "light", } = props;
    const plotlyData = useMemo(() => (plotlyFig ? makePlotlyData(plotlyFig.data, theme, true) : null), [plotlyFig, theme]);
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsx("div", { className: clsx("bg-transparent rounded-2xl", { "shadow-around shadow-accent1": isRunning || data.selected }, { "shadow-around shadow-red-700": nodeError }), children: plotlyData ? (_jsxs("div", { className: "relative flex items-center text-[17px] m-h-[130px] h-[fit-content]", children: [_jsx(PlotlyComponent, { data: plotlyData, id: data.id, layout: (_a = plotlyFig === null || plotlyFig === void 0 ? void 0 : plotlyFig.layout) !== null && _a !== void 0 ? _a : {}, useResizeHandler: true, style: {
                            height: 293,
                            width: 380,
                        }, theme: theme, isThumbnail: true }), _jsx(HandleComponent, { data: data, colorClass: "!border-accent1" })] })) : (_jsxs(_Fragment, { children: [chartElemMap[data.func], _jsx(HandleComponent, { data: data, colorClass: "!border-accent1" })] })) }) }));
};
export default memo(VisorNode);
