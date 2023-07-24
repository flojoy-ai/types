import { IconArrowsMaximize, IconX } from "@tabler/icons-react";
import { ElementsData } from "../../types/node";

type NodeButtonsProps = {
  data: ElementsData;
  handleClickExpand?: () => void;
  handleRemove: (nodeId: string, nodeLabel: string) => void;
};

const NodeButtons = ({
  data,
  handleClickExpand,
  handleRemove,
}: NodeButtonsProps) => {
  const onNodeExpandClick = () => {
    if (handleClickExpand) {
      handleClickExpand();
    }
  };

  const handleXButtonClick = () => {
    handleRemove(data.id, data.label);
  };

  return (
    <div className={"absolute p-2 w-full z-150 flex text-accent1"}>
      <div className="cursor-pointer">
        <IconArrowsMaximize
          data-testid="expand-button"
          onClick={onNodeExpandClick}
        />
      </div>
      <div className="ml-auto cursor-pointer">
        <IconX onClick={handleXButtonClick} />
      </div>
    </div>
  );
};

export default NodeButtons;
