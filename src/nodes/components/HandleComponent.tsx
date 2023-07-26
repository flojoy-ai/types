import { Position } from "reactflow";
import { CustomHandle } from "./CustomHandle";
import { CustomNodeProps } from "@src/types/node";

const HandleComponent = ({
  data,
  colorClass,
}: {
  data: CustomNodeProps["nodeProps"]["data"];
  colorClass?: string;
}) => {
  const outputs = data.outputs ?? [];
  const inputs = data.inputs ?? [];

  return (
    <>
      <div className="absolute -left-0.5 top-0 flex h-full flex-col justify-evenly">
        {inputs.map((param) => (
          <div
            className="relative flex items-center"
            key={`input-${data.id}-${param.name}`}
          >
            <CustomHandle
              className="left-0"
              position={Position.Left}
              type="target"
              param={param}
              colorClass={colorClass ?? ""}
            />
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 flex h-full flex-col justify-evenly">
        {outputs.map((param) => (
          <div
            className="relative flex items-center"
            key={`input-${data.id}-${param.name}`}
          >
            <CustomHandle
              className="right-1"
              position={Position.Right}
              type="source"
              param={param}
              colorClass={colorClass ?? ""}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HandleComponent;
