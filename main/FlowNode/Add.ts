import * as rx from "rxjs";
import FlowNode from "./FlowNode";

export default class Add extends FlowNode {
  readonly inflow = {
    a: new rx.BehaviorSubject<number>(0),
    b: new rx.BehaviorSubject<number>(0),
  }

  readonly outflow = {
    res: new rx.BehaviorSubject<number>(0),
  }

  constructor() {
    super();
    this.flowInit();
  }

  flowInit() {
    const inflow = this.inflow;
    const outflow = this.outflow;
    const argsReady$ = rx.combineLatest([inflow.a, inflow.b]);
    argsReady$.subscribe(([a, b]) => {
      outflow.res.next(a + b);
    });
  }
}
