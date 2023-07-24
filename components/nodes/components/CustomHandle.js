var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { forwardRef } from "react";
import { Handle } from "reactflow";
import { ParamTooltip } from "./ParamTooltip";
const HandleWrapper = forwardRef((_a, ref) => {
    var { colorClass, param, type, className } = _a, props = __rest(_a, ["colorClass", "param", "type", "className"]);
    return (_jsx(Handle, Object.assign({ className: clsx("!h-3 !w-3 !border-2 !bg-white transition-colors duration-150 dark:!bg-black", colorClass, className), type: type, id: param === null || param === void 0 ? void 0 : param.id, ref: ref }, props)));
});
HandleWrapper.displayName = "HandleWrapper";
export const CustomHandle = (_a) => {
    var { type, param } = _a, props = __rest(_a, ["type", "param"]);
    return (_jsx(ParamTooltip, { param: param, annotation: `(${type === "target" ? "input" : "output"})`, offsetX: 32, offsetY: -128, children: _jsx(HandleWrapper, Object.assign({ type: type, param: param }, props)) }));
};
