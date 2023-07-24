import React from "react";
import { CustomNodeProps } from "../../types/node";
import NodeButtons from "./NodeButtons";
import clsx from "clsx";

const NodeWrapper = ({
  wrapperProps: {
    nodeProps,
    wrapperOnClick,
    handleRemove,
    handleClickExpand,
    nodeError,
  },
  children,
}: {
  wrapperProps: CustomNodeProps;
  children: React.ReactNode;
}) => {
  const { data } = nodeProps;

  return (
    <div
      className="relative"
      data-testid="node-wrapper"
      onClick={wrapperOnClick}
    >
      {data.selected && handleRemove && (
        <NodeButtons
          data={data}
          handleRemove={handleRemove}
          handleClickExpand={handleClickExpand}
        />
      )}
      {nodeError && <ErrorPopup message={nodeError} />}
      {children}
    </div>
  );
};

export default NodeWrapper;

const ErrorPopup = ({ message }: { message: string }) => {
  return (
    <div
      className="absolute top-[-50px] p-5 left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] bg-modal shadow-md border border-red-300 rounded-lg my-[10px] w-[max-content] max-w-[500px] z-100 text-accent2 font-[600]"
      data-testid="node-error-popup"
    >
      <p className="text-lg">{message}</p>
      <div
        className={clsx(
          "border-solid border-t-[10px] border-r-[10px] border-b-[0px] border-l-[10px] border-t-red-300 border-l-transparent border-b-transparent border-r-transparent",
          "h-0 w-0 absolute bottom-[-10px] left-[50%] -ml-[10px]"
        )}
      />
    </div>
  );
};
