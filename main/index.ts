import * as rx from "rxjs";
import Add from "./flowNode/add";
import FlowNode from "./flowNode/FlowNode";
import Unit from "./FlowNode/Unit";
import UnitNode from "./FlowNode/UnitNode";

const unit1 = new Unit(100);
const unit2 = new Unit(568);

unit1.pay(23, unit2);
unit1.pay(43, unit2);
unit1.earn(3, unit2);

unit1.savings.subscribe((val) => console.log(`unit1：${val}`));
unit2.savings.subscribe((val) => console.log(`unit2：${val}`));

// const unit1 = new UnitNode(100);
// const unit2 = new UnitNode(999);

// unit1.pay(23, unit2.inflow.income);
// unit2.pay(44, unit1.inflow.income);

// unit1.outflow.savings.subscribe((val) => console.log(`unit1：${val}`));
// unit2.outflow.savings.subscribe((val) => console.log(`unit2：${val}`));

// const add1 = new Add();
// const add2 = new Add();

// FlowNode.startSend<number>(1, add1.inflow.a);

// rx.interval(1000).subscribe((a) => {
//   FlowNode.startSend<number>(a, add1.inflow.b);
// });

// FlowNode.send<number>(
//   add1.outflow.res,
//   add2.inflow.a
// );

// FlowNode.startSend<number>(10, add2.inflow.b);

// add2.outflow.res.subscribe(console.log);
