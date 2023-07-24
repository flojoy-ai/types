import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import clsx from "clsx";
import { Position } from "reactflow";
import NodeWrapper from "./components/NodeWrapper";
import { CustomHandle } from "./components/CustomHandle";
const LogicNode = (props) => {
    var _a;
    const { isRunning, nodeError, nodeProps: { data, selected }, children, } = props;
    const input = (_a = data.inputs) === null || _a === void 0 ? void 0 : _a[0];
    if (!input) {
        throw new Error("Logic node must have an input");
    }
    return (_jsx(NodeWrapper, { wrapperProps: props, children: _jsx("div", { className: clsx("flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border-2 border-accent3 bg-accent3/5", { "shadow-around shadow-accent3": isRunning !== null && isRunning !== void 0 ? isRunning : selected }, { "shadow-around shadow-red-700": nodeError }), children: children !== null && children !== void 0 ? children : (_jsxs(_Fragment, { children: [_jsx("h2", { className: "-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3", children: data.label }), _jsx(CustomHandle, { position: Position.Bottom, type: "target", param: input, colorClass: "!border-accent3", style: { left: 3, bottom: -3 } })] })) }) }));
};
export default memo(LogicNode);
