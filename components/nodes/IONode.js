import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import { DodecahedronSVG } from "./assets/DodecahedronSVG";
import HandleComponent from "./components/HandleComponent";
const IONode = (props) => {
    const { isRunning, nodeProps: { selected, data }, nodeError, } = props;
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsxs("div", { className: clsx("flex h-48 w-48 flex-col items-center", { "shadow-around shadow-accent4": isRunning || data.selected }, { "shadow-around shadow-red-700": nodeError }), children: [_jsx(DodecahedronSVG, {}), _jsx("h2", { className: "font-sans text-2xl font-extrabold tracking-wider text-accent4", children: data.label }), _jsx(HandleComponent, { data: data, colorClass: "!border-accent4" })] }) }));
};
export default memo(IONode);
