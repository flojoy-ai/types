import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import DefaultNode from "./DefaultNode";
const operatorMap = {
    MULTIPLY: "×",
    ADD: "+",
    SUBTRACT: "-",
    DIVIDE: "÷",
    ABS: "|x|",
};
const ArithmeticNode = (props) => {
    return (_jsx(DefaultNode, Object.assign({ width: 72, height: 72 }, props, { children: _jsx("h2", { className: "font-sans text-4xl font-semibold tracking-wider text-accent1", children: operatorMap[props.nodeProps.data.func] }) })));
};
export default memo(ArithmeticNode);
