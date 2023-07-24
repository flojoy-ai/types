import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import HandleComponent from "./components/HandleComponent";
const DataNode = (props) => {
    const { nodeProps: { data }, isRunning, nodeError, } = props;
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsxs("div", { className: clsx("flex h-24 w-52 items-center justify-center rounded-full border-2 border-accent2", { "shadow-around shadow-accent2": isRunning || data.selected }, { "shadow-around shadow-red-700": nodeError }), children: [_jsx("h2", { className: "font-sans text-2xl font-extrabold tracking-wider text-accent2", children: data.label }), _jsx(HandleComponent, { data: data, colorClass: "!border-accent2" })] }) }));
};
export default memo(DataNode);
