import { CustomNodeProps } from "@src/types/node";
import NodeWrapper from "./components/NodeWrapper";
import clsx from "clsx";
import HandleComponent from "./components/HandleComponent";
import Scatter from "./assets/nodes/Scatter";
import { memo, useMemo } from "react";
import { makePlotlyData } from "@src/plotly/formatPlotlyData";
import PlotlyComponent from "@src/plotly/PlotlyComponent";
import CompositePlot from "./assets/nodes/CompositePlot";
import ProphetComponents from "./assets/nodes/ProphetComponents";
import ProphetPlot from "./assets/nodes/ProphetPlot";
import ArrayView from "./assets/nodes/ArrayView";
import MatrixView from "./assets/nodes/MatrixView";
import BigNumber from "./assets/nodes/BigNumber";
import BoxPlot from "./assets/nodes/BoxPlot";
import Histogram from "./assets/nodes/Histogram";
import LineChart from "./assets/nodes/LineChart";
import Scatter3D from "./assets/nodes/3DScatter";
import Surface3D from "./assets/nodes/3DSurface";
import Bar from "./assets/nodes/Bar";
import Table from "./assets/nodes/Table";
import Image from "./assets/nodes/Image";

const chartElemMap: { [func: string]: React.JSX.Element } = {
  SCATTER: <Scatter />,
  HISTOGRAM: <Histogram />,
  LINE: <LineChart />,
  SURFACE3D: <Surface3D />,
  SCATTER3D: <Scatter3D />,
  BAR: <Bar />,
  TABLE: <Table />,
  IMAGE: <Image />,
  BOX: <BoxPlot />,
  BIG_NUMBER: <BigNumber />,
  MATRIX_VIEW: <MatrixView />,
  ARRAY_VIEW: <ArrayView />,
  PROPHET_PLOT: <ProphetPlot />,
  PROPHET_COMPONENTS: <ProphetComponents />,
  COMPOSITE: <CompositePlot />,
};

const VisorNode = (props: CustomNodeProps) => {
  const {
    nodeProps: { data },
    nodeError,
    isRunning,
    plotlyFig,
    theme = "light",
  } = props;

  const plotlyData = useMemo(
    () => (plotlyFig ? makePlotlyData(plotlyFig.data, theme, true) : null),
    [plotlyFig, theme]
  );

  return (
    <NodeWrapper wrapperProps={props}>
      <div
        className={clsx(
          "bg-transparent rounded-2xl",
          {
            "shadow-around shadow-accent1": isRunning || data.selected,
          },
          { "shadow-around shadow-red-700": nodeError }
        )}
      >
        {plotlyData ? (
          <div
            className={
              "relative flex items-center text-[17px] m-h-[130px] h-[fit-content]"
            }
          >
            <PlotlyComponent
              data={plotlyData}
              id={data.id}
              layout={plotlyFig?.layout ?? {}}
              useResizeHandler
              style={{
                height: 293,
                width: 380,
              }}
              theme={theme}
              isThumbnail
            />

            <HandleComponent data={data} colorClass="!border-accent1" />
          </div>
        ) : (
          <>
            {chartElemMap[data.func]}
            <HandleComponent data={data} colorClass="!border-accent1" />
          </>
        )}
      </div>
    </NodeWrapper>
  );
};

export default memo(VisorNode);
