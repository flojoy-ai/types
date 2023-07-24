import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, Children, cloneElement, isValidElement, } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
const getTooltipStyle = (element, offsetX, offsetY) => {
    const TOOLTIP_WIDTH = 264; // average tooltip width
    const { top, left, right } = element.getBoundingClientRect();
    if (left < window.innerWidth / 2) {
        return { left: right + offsetX, top: top + offsetY };
    }
    else {
        return { left: left - TOOLTIP_WIDTH - offsetX, top: top + offsetY };
    }
};
export const ParamTooltip = ({ children, param, annotation, offsetX = 0, offsetY = 0, }) => {
    var _a, _b, _c;
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const timeoutRef = useRef(null);
    const elemRef = useRef(null);
    const onHover = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setTooltipOpen(true);
        }, 150);
    };
    const onLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setTooltipOpen(false);
        }, 500);
    };
    if (!children) {
        throw new Error("ParamTooltip must have a child element");
    }
    const child = Children.only(children);
    if (!isValidElement(child)) {
        throw new Error("Child must be a valid JSX element");
    }
    return (_jsxs(_Fragment, { children: [cloneElement(child, {
                ref: elemRef,
                onMouseEnter: onHover,
                onMouseLeave: onLeave,
            }), elemRef.current
                ? createPortal(_jsxs("div", { className: clsx("pointer-events-none opacity-0 hover:opacity-100 hover:pointer-events-auto absolute z-50 h-fit w-64 rounded-lg border bg-modal p-4 text-left text-sm font-normal text-foreground shadow-md transition-opacity duration-150", { "opacity-100 !pointer-events-auto": tooltipOpen }), style: getTooltipStyle(elemRef.current, offsetX, offsetY), children: [_jsxs("div", { className: "whitespace-nowrap text-lg font-medium", children: [param.name, " ", _jsx("span", { className: "text-sm font-normal text-foreground/60", children: annotation })] }), param.type.split("|").map((t) => (_jsxs("code", { children: [t, _jsx("br", {})] }, t))), _jsx("div", { className: "py-2" }), _jsx("div", { children: (_b = (_a = param.desc) === null || _a === void 0 ? void 0 : _a.split("\n").map((line) => (_jsxs("span", { children: [line, _jsx("br", {})] }, line)))) !== null && _b !== void 0 ? _b : "No description." })] }), (_c = document.getElementById("tw-theme-root")) !== null && _c !== void 0 ? _c : document.body)
                : null] }));
};
