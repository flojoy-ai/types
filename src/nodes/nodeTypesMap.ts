import ArithmeticNode from "./ArithmeticNode";
import ConditionalNode from "./ConditionalNode";
import DataNode from "./DataNode";
import DefaultNode from "./DefaultNode";
import IONode from "./IONode";
import LoopNode from "./LoopNode";
import NumpyNode from "./NumpyNode";
import ScipyNode from "./ScipyNode";
import VisorNode from "./VisorNode";

export const nodeTypesMap = {
  default: DefaultNode,
  ARITHMETIC: ArithmeticNode,
  SIMULATIONS: DataNode,
  PLOTLY: VisorNode,
  CONDITIONALS: ConditionalNode,
  LOOPS: LoopNode,
  KEITHLEY: IONode,
  LABJACK: IONode,
  PHIDGET: IONode,
  SERIAL: IONode,
  STATS: ScipyNode,
  SIGNAL: ScipyNode,
  LINALG: NumpyNode,
};