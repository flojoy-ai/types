import { HTMLAttributes } from "react";
import { HandleProps } from "reactflow";
type CustomHandleProps = HandleProps & Omit<HTMLAttributes<HTMLDivElement>, "id"> & {
    colorClass: string;
    param: {
        name: string;
        type: string;
        id: string;
        desc: string | null;
    };
};
export declare const CustomHandle: ({ type, param, ...props }: CustomHandleProps) => import("react/jsx-runtime").JSX.Element;
export {};
