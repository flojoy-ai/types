import { memo } from "react";
import clsx from "clsx";
import { CustomNodeProps } from "@src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import { DodecahedronSVG } from "./assets/DodecahedronSVG";
import HandleComponent from "./components/HandleComponent";

const IONode = (props: CustomNodeProps) => {
  const {
    isRunning,
    nodeProps: { data },
    nodeError,
  } = props;

  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "flex h-48 w-48 flex-col items-center",
          { "shadow-accent4 shadow-around": isRunning || data.selected },
          { "shadow-around shadow-red-700": nodeError },
        )}
      >
        <DodecahedronSVG />
        <h2 className="text-accent4 font-sans text-2xl font-extrabold tracking-wider">
          {data.label}
        </h2>
        <HandleComponent data={data} variant="accent4" />
      </div>
    </NodeWrapper>
  );
};

export default memo(IONode);
