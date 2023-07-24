import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Position } from "reactflow";
import LogicNode from "./LogicNode";
import { CustomHandle } from "./components/CustomHandle";
export const LoopNode = (props) => {
    const { nodeProps: { data }, } = props;
    if (!data.inputs || !data.outputs) {
        throw new Error("LoopNode must have 1 inputs and 2 outputs");
    }
    const input = data.inputs[0];
    const output1 = data.outputs[0];
    const output2 = data.outputs[1];
    return (_jsxs(LogicNode, Object.assign({}, props, { children: [_jsx("h2", { className: "-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3", children: data.label }), _jsx(CustomHandle, { position: Position.Bottom, type: "target", param: input, colorClass: "!border-accent3", style: { left: 3, bottom: -3 } }), _jsx(CustomHandle, { position: Position.Top, type: "source", param: output1, colorClass: "!border-accent3", style: {
                    top: -6,
                } }), _jsx(CustomHandle, { position: Position.Right, type: "source", param: output2, colorClass: "!border-accent3", style: { right: -6 } })] })));
};
export default memo(LoopNode);