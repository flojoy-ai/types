import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import LogicNode from "./LogicNode";
export const ConditionalNode = (props) => {
    const { nodeProps: { data }, } = props;
    const operator = data.ctrls["operator_type"].value;
    return (_jsx(LogicNode, Object.assign({}, props, { children: _jsx("h2", { className: "-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3", children: operator }) })));
};
export default memo(ConditionalNode);
