import { ElementsData } from "../../types/node";
type NodeButtonsProps = {
    data: ElementsData;
    handleClickExpand?: () => void;
    handleRemove: (nodeId: string, nodeLabel: string) => void;
};
declare const NodeButtons: ({ data, handleClickExpand, handleRemove, }: NodeButtonsProps) => import("react/jsx-runtime").JSX.Element;
export default NodeButtons;
