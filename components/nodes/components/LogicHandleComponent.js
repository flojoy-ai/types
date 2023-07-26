import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Position } from "reactflow";
import { CustomHandle } from "./CustomHandle";
export const LogicHandleComponent = ({ data, colorClass, }) => {
    const inputs = data.inputs;
    const outputs = data.outputs;
    let inputHandles;
    let outputHandles;
    // Have to hard code the possible positions of the outputHandles
    // because of the weird shape of the logic nodes
    if (!inputs || inputs.length === 0) {
        inputHandles = _jsx(_Fragment, {});
    }
    else if (inputs.length === 1) {
        inputHandles = (_jsx(_Fragment, { children: _jsx(CustomHandle, { position: Position.Bottom, type: "target", param: inputs[0], colorClass: colorClass, style: { left: 3, bottom: -3 } }) }));
    }
    else if (inputs.length === 2) {
        inputHandles = (_jsxs(_Fragment, { children: [_jsx(CustomHandle, { position: Position.Bottom, type: "target", param: inputs[0], colorClass: colorClass, style: { bottom: -6 } }), _jsx(CustomHandle, { position: Position.Left, type: "target", param: inputs[1], colorClass: colorClass, style: { left: -6 } })] }));
    }
    if (!outputs || outputs.length === 0) {
        outputHandles = _jsx(_Fragment, {});
    }
    else if (outputs.length === 1) {
        outputHandles = (_jsx(_Fragment, { children: _jsx(CustomHandle, { position: Position.Right, type: "source", param: outputs[0], colorClass: colorClass, style: { right: -3, top: 3 } }) }));
    }
    else if (outputs.length === 2) {
        outputHandles = (_jsxs(_Fragment, { children: [_jsx(CustomHandle, { position: Position.Top, type: "source", param: outputs[0], colorClass: colorClass, style: {
                        top: -6,
                    } }), _jsx(CustomHandle, { position: Position.Right, type: "target", param: outputs[1], colorClass: colorClass, style: { right: -6 } })] }));
    }
    return (_jsxs(_Fragment, { children: [inputHandles, outputHandles] }));
};
