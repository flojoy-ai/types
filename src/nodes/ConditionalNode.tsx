import { memo } from "react";
import { Position } from "reactflow";
import { CustomNodeProps } from "@src/types/node";
import LogicNode from "./LogicNode";
import { CustomHandle } from "./components/CustomHandle";

export const ConditionalNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
  } = props;
  if (!data.inputs || !data.outputs) {
    throw new Error("ConditionalNode must have 2 inputs and 2 outputs");
  }

  const input1 = data.inputs[0];
  const input2 = data.inputs[1];
  const output1 = data.outputs[0];
  const output2 = data.outputs[1];
  const operator = data.ctrls["operator_type"].value as string;

  return (
    <LogicNode {...props}>
      <h2 className="-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3">
        {operator}
      </h2>
      <CustomHandle
        position={Position.Bottom}
        type="target"
        param={input1}
        colorClass="!border-accent3"
        style={{ bottom: -6 }}
      />
      <CustomHandle
        position={Position.Left}
        type="target"
        param={input2}
        colorClass="!border-accent3"
        style={{ left: -6 }}
      />
      <CustomHandle
        position={Position.Top}
        type="source"
        param={output1}
        colorClass="!border-accent3"
        style={{
          top: -6,
        }}
      />
      <CustomHandle
        position={Position.Right}
        type="source"
        param={output2}
        colorClass="!border-accent3"
        style={{ right: -6 }}
      />
    </LogicNode>
  );
};

export default memo(ConditionalNode);