import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import { NumpySvg } from "./assets/ArithmeticSVG";
import HandleComponent from "./components/HandleComponent";
const NumpyNode = (props) => {
    const { isRunning, nodeError, nodeProps: { data, selected } } = props;
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsxs("div", { className: clsx("flex h-40 w-60 items-center justify-center rounded-2xl border-2 border-blue-500 bg-accent1/5", { "shadow-around shadow-blue-500": isRunning !== null && isRunning !== void 0 ? isRunning : selected }, { "shadow-around shadow-red-700": nodeError }), children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx(NumpySvg, { className: "h-16 w-16" }), _jsxs("h2", { className: "font-sans text-2xl tracking-wider text-blue-500", children: [_jsx("span", { children: "np." }), _jsx("span", { className: "font-extrabold", children: data.label })] })] }), _jsx(HandleComponent, { data: data, colorClass: "!border-blue-500" })] }) }));
};
export default memo(NumpyNode);
