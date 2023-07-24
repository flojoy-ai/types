import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NodeButtons from "./NodeButtons";
import clsx from "clsx";
const NodeWrapper = ({ wrapperProps: { nodeProps, wrapperOnClick, handleRemove, handleClickExpand, nodeError, }, children, }) => {
    const { data } = nodeProps;
    return (_jsxs("div", { className: "relative", "data-testid": "node-wrapper", onClick: wrapperOnClick, children: [data.selected && handleRemove && (_jsx(NodeButtons, { data: data, handleRemove: handleRemove, handleClickExpand: handleClickExpand })), nodeError && _jsx(ErrorPopup, { message: nodeError }), children] }));
};
export default NodeWrapper;
const ErrorPopup = ({ message }) => {
    return (_jsxs("div", { className: "absolute top-[-50px] p-5 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bg-modal shadow-md border border-red-300 rounded-lg my-[10px] w-[max-content] max-w-[500px] z-100 text-accent2 font-[600]", "data-testid": "node-error-popup", children: [_jsx("p", { className: "text-lg", children: message }), _jsx("div", { className: clsx("border-solid border-t-[10px] border-r-[10px] border-b-[0px] border-l-[10px] border-t-red-300 border-l-transparent border-b-transparent border-r-transparent", "h-0 w-0 absolute bottom-[-10px] left-[50%] -ml-[10px]") })] }));
};
