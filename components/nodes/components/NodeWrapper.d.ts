import React from "react";
import { CustomNodeProps } from "../../types/node";
declare const NodeWrapper: ({ wrapperProps: { nodeProps, wrapperOnClick, handleRemove, handleClickExpand, nodeError, }, children, }: {
    wrapperProps: CustomNodeProps;
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export default NodeWrapper;
