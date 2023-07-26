import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import { LogicHandleComponent } from "./components/LogicHandleComponent";
const LogicNode = (props) => {
    const { isRunning, nodeError, nodeProps: { data }, children, } = props;
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsxs("div", { className: clsx("flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border-2 border-accent3 bg-accent3/5", { "shadow-around shadow-accent3": isRunning || data.selected }, { "shadow-around shadow-red-700": nodeError }), children: [children !== null && children !== void 0 ? children : (_jsx("h2", { className: "-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3", children: data.label })), _jsx(LogicHandleComponent, { data: data, colorClass: "!border-accent3" })] }) }));
};
export default memo(LogicNode);
