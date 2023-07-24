import { memo } from "react";
import clsx from "clsx";
import { Position } from "reactflow";
import { CustomNodeProps } from "@src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import { CustomHandle } from "./components/CustomHandle";

const LogicNode = (props: CustomNodeProps) => {
  const {
    isRunning,
    nodeError,
    nodeProps: { data },
    children,
  } = props;

  const input = data.inputs?.[0];
  if (!input) {
    throw new Error("Logic node must have an input");
  }

  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border-2 border-accent3 bg-accent3/5",
          { "shadow-around shadow-accent3": isRunning || data.selected },
          { "shadow-around shadow-red-700": nodeError }
        )}
      >
        {children ?? (
          <>
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
          </>
        )}
      </div>
    </NodeWrapper>
  );
};

export default memo(LogicNode);
