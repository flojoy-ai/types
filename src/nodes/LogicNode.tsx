import { memo } from "react";
import clsx from "clsx";
import { CustomNodeProps } from "@src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import { LogicHandleComponent } from "./components/LogicHandleComponent";

const LogicNode = (props: CustomNodeProps) => {
  const {
    isRunning,
    nodeError,
    nodeProps: { data },
    children,
  } = props;

  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "border-accent3 bg-accent3/5 flex h-24 w-24 rotate-45 items-center justify-center rounded-xl border-2",
          { "shadow-accent3 shadow-around": isRunning || data.selected },
          { "shadow-around shadow-red-700": nodeError },
        )}
      >
        {children ?? (
          <h2 className="text-accent3 -rotate-45 font-sans text-2xl font-extrabold tracking-wider">
            {data.label}
          </h2>
        )}
        <LogicHandleComponent data={data} colorClass="!border-accent3" />
      </div>
    </NodeWrapper>
  );
};

export default memo(LogicNode);
