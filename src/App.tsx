import ReactFlow, { ReactFlowProvider, NodeTypes } from "reactflow";
import "reactflow/dist/style.css";
import { NOISY_SINE } from "./data/fc";
import result from "@src/data/result.json";
import React, { useEffect } from "react";
import { nodeTypesMap } from "@src/nodes/nodeTypesMap";

const handleRemove = () => {};
const nodeTypes: NodeTypes = Object.fromEntries(
  Object.entries(nodeTypesMap).map(([key, NodeComponent]) => [
    key,
    (props) => {
      const hasResult = result.find((x) => x.id === props.id);
      return (
        <NodeComponent
          nodeProps={props}
          nodeError={
            props.id === NOISY_SINE.nodes[0].id
              ? "Something went wrong"
              : undefined
          }
          plotlyFig={hasResult ? hasResult.result.default_fig : undefined}
          theme={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          }
          handleRemove={handleRemove}
        />
      );
    },
  ]),
);
console.log(" nodeTypes: ", nodeTypes["default"]);
const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ReactFlow
      nodes={NOISY_SINE.nodes}
      nodeTypes={nodeTypes}
      edges={NOISY_SINE.edges}
    ></ReactFlow>
  );
};

export default () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  </div>
);
