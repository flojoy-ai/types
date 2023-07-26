import { memo } from "react";
import { CustomNodeProps } from "@src/types/node";
import LogicNode from "./LogicNode";

export const ConditionalNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
  } = props;
  const operator = data.ctrls["operator_type"].value as string;

  return (
    <LogicNode {...props}>
      <h2 className="-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3">
        {operator}
      </h2>
    </LogicNode>
  );
};

export default memo(ConditionalNode);
