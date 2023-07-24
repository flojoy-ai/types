import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconArrowsMaximize, IconX } from "@tabler/icons-react";
const NodeButtons = ({ data, handleClickExpand, handleRemove, }) => {
    const onNodeExpandClick = () => {
        if (handleClickExpand) {
            handleClickExpand();
        }
    };
    const handleXButtonClick = () => {
        handleRemove(data.id, data.label);
    };
    return (_jsxs("div", { className: "absolute p-2 w-full z-[150] flex text-accent1", children: [_jsx("div", { className: "cursor-pointer", children: _jsx(IconArrowsMaximize, { "data-testid": "expand-button", onClick: onNodeExpandClick }) }), _jsx("div", { className: "ml-auto cursor-pointer", children: _jsx(IconX, { onClick: handleXButtonClick }) })] }));
};
export default NodeButtons;
