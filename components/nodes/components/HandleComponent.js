import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Position } from "reactflow";
import { CustomHandle } from "./CustomHandle";
const HandleComponent = ({ data, colorClass, }) => {
    var _a, _b;
    const outputs = (_a = data.outputs) !== null && _a !== void 0 ? _a : [];
    const inputs = (_b = data.inputs) !== null && _b !== void 0 ? _b : [];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute h-full flex top-0 flex-col justify-evenly left-[-6px]", children: inputs.map((param) => (_jsx("div", { className: "flex items-center relative", children: _jsx(CustomHandle, { className: "left-[0px]", position: Position.Left, type: "target", param: param, colorClass: colorClass !== null && colorClass !== void 0 ? colorClass : "" }) }, `input-${data.id}-${param.name}`))) }), _jsx("div", { className: "absolute h-full flex top-0 flex-col justify-evenly right-[-10px]", children: outputs.map((param) => (_jsx("div", { className: "flex items-center relative", children: _jsx(CustomHandle, { className: "right-[4px]", position: Position.Right, type: "source", param: param, colorClass: colorClass !== null && colorClass !== void 0 ? colorClass : "" }) }, `input-${data.id}-${param.name}`))) })] }));
};
export default HandleComponent;
