import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Position } from "reactflow";
import LogicNode from "./LogicNode";
import { CustomHandle } from "./components/CustomHandle";
export const ConditionalNode = (props) => {
    const { nodeProps: { data }, } = props;
    if (!data.inputs || !data.outputs) {
        throw new Error("ConditionalNode must have 2 inputs and 2 outputs");
    }
    const input1 = data.inputs[0];
    const input2 = data.inputs[1];
    const output1 = data.outputs[0];
    const output2 = data.outputs[1];
    const operator = data.ctrls["operator_type"].value;
    return (_jsxs(LogicNode, Object.assign({}, props, { children: [_jsx("h2", { className: "-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3", children: operator }), _jsx(CustomHandle, { position: Position.Bottom, type: "target", param: input1, colorClass: "!border-accent3", style: { bottom: -6 } }), _jsx(CustomHandle, { position: Position.Left, type: "target", param: input2, colorClass: "!border-accent3", style: { left: -6 } }), _jsx(CustomHandle, { position: Position.Top, type: "source", param: output1, colorClass: "!border-accent3", style: {
                    top: -6,
                } }), _jsx(CustomHandle, { position: Position.Right, type: "source", param: output2, colorClass: "!border-accent3", style: { right: -6 } })] })));
};
export default memo(ConditionalNode);
