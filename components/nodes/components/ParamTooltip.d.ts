/// <reference types="react" />
type ParamTooltipProps = {
    children: React.ReactNode;
    param: {
        name: string;
        type: string;
        desc: string | null;
    };
    annotation?: string;
    offsetX: number;
    offsetY: number;
};
export declare const ParamTooltip: ({ children, param, annotation, offsetX, offsetY, }: ParamTooltipProps) => import("react/jsx-runtime").JSX.Element;
export {};
