import { memo } from "react";
import clsx from "clsx";
import NodeWrapper from "./components/NodeWrapper";
import { CustomNodeProps } from "@src/types/node";
import { ScipySvg } from "./assets/ArithmeticSVG";
import HandleComponent from "./components/HandleComponent";

const NumpyNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
    isRunning,
    nodeError,
  } = props;
  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "flex h-40 w-60 items-center justify-center rounded-2xl border-2 border-blue-500 bg-accent1/5",
          isRunning || data.selected ? "shadow-around shadow-blue-500" : "",
          nodeError ? "shadow-around shadow-red-700" : ""
        )}
      >
        <div className="flex flex-col items-center">
          <ScipySvg className="h-16 w-16" />
          <h2 className="font-sans text-2xl tracking-wider text-blue-500">
            <span>sp.</span>
            <span className="font-extrabold">{data.label}</span>
          </h2>
        </div>
        <HandleComponent data={data} colorClass="!border-blue-500" />
      </div>
    </NodeWrapper>
  );
};

export default memo(NumpyNode);
