import * as rx from "rxjs";
import Add from "./flowNode/add";
import FlowNode from "./flowNode/FlowNode";

const add1 = new Add();
const add2 = new Add();

FlowNode.startSend<number>(1, add1.inflow.a);

rx.interval(1000).subscribe((a) => {
  FlowNode.startSend<number>(a, add1.inflow.b);
});

FlowNode.send<number>(
  add1.outflow.res,
  add2.inflow.a
);

FlowNode.startSend<number>(10, add2.inflow.b);

add2.outflow.res.subscribe(console.log);
