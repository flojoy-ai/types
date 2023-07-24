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
      <div
        className={"absolute h-full flex top-0 flex-col justify-evenly left-[-6px]"}
      >
        {inputs.map((param) => (
          <div
            className="flex items-center relative"
            key={`input-${data.id}-${param.name}`}
          >
            <CustomHandle
              className="left-[0px]"
              position={Position.Left}
              type="target"
              param={param}
              colorClass={colorClass ?? ""}
            />
          </div>
        ))}
      </div>

      <div
        className={
          "absolute h-full flex top-0 flex-col justify-evenly right-[-10px]"
        }
      >
        {outputs.map((param) => (
          <div
            className="flex items-center relative"
            key={`input-${data.id}-${param.name}`}
          >
            <CustomHandle
              className="right-[4px]"
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
