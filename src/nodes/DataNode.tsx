import { memo } from "react";
import clsx from "clsx";
import { CustomNodeProps } from "@src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import HandleComponent from "./components/HandleComponent";

const DataNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data, selected },
    isRunning,
    nodeError,
  } = props;
  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "flex h-24 w-52 items-center justify-center rounded-full border-2 border-accent2",
          { "shadow-around shadow-accent2": isRunning ?? selected },
          { "shadow-around shadow-red-700": nodeError }
        )}
      >
        <h2 className="font-sans text-2xl font-extrabold tracking-wider text-accent2">
          {data.label}
        </h2>
        <HandleComponent data={data} colorClass="!border-accent2" />
      </div>
    </NodeWrapper>
  );
};

export default memo(DataNode);
