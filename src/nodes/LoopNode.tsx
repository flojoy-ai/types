import { CustomNodeProps } from "@src/types/node";
import { memo } from "react";
import { Position } from "reactflow";
import LogicNode from "./LogicNode";
import { CustomHandle } from "./components/CustomHandle";

export const LoopNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
  } = props;
  if (!data.inputs || !data.outputs) {
    throw new Error("LoopNode must have 1 inputs and 2 outputs");
  }

  const input = data.inputs[0];
  const output1 = data.outputs[0];
  const output2 = data.outputs[1];

  return (
    <LogicNode {...props}>
      <h2 className="-rotate-45 font-sans text-2xl font-extrabold tracking-wider text-accent3">
        {data.label}
      </h2>
      <CustomHandle
        position={Position.Bottom}
        type="target"
        param={input}
        colorClass="!border-accent3"
        style={{ left: 3, bottom: -3 }}
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

export default memo(LoopNode);
