import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NodeButtons from "./NodeButtons";
const NodeWrapper = ({ wrapperProps: { nodeProps, wrapperOnClick, handleRemove, handleClickExpand, nodeError, }, children, }) => {
    const { data } = nodeProps;
    return (_jsxs("div", { className: "relative", "data-testid": "node-wrapper", onClick: wrapperOnClick, children: [data.selected && handleRemove && (_jsx(NodeButtons, { data: data, handleRemove: handleRemove, handleClickExpand: handleClickExpand })), nodeError && _jsx(ErrorPopup, { message: nodeError }), children] }));
};
export default NodeWrapper;
const ErrorPopup = ({ message }) => {
    return (_jsxs("div", { className: "absolute -top-14 left-1/2 right-1/2 z-50 my-3 w-max max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-red-400 p-3 font-semibold", "data-testid": "node-error-popup", children: [_jsx("p", { className: "text-lg text-gray-900 dark:text-gray-50", children: message }), _jsx("div", { className: "absolute -bottom-2 left-1/2 -ml-2 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-red-400" })] }));
};
