import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import HandleComponent from "./components/HandleComponent";
const DefaultNode = (props) => {
    const { nodeProps: { data, selected }, height, width, isRunning = false, nodeError = null, children, } = props;
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsxs("div", { className: clsx("flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-accent1 bg-accent1/5", {
                "shadow-around shadow-accent1": isRunning || selected,
            }, { "shadow-around shadow-red-700": nodeError }), style: {
                width,
                height,
            }, children: [children !== null && children !== void 0 ? children : (_jsx("h2", { className: "font-sans text-2xl font-extrabold tracking-wider text-accent1", children: data.label })), _jsx(HandleComponent, { data: data, colorClass: "!border-accent2" })] }) }));
};
export default memo(DefaultNode);
