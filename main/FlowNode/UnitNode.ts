import * as rx from "rxjs";
import FlowNode from "./FlowNode";

export default class UnitNode extends FlowNode {
  readonly inflow = {
    // 收入
    income: new rx.BehaviorSubject<number>(0),
  }

  readonly outflow = {
    // 储蓄
    savings: new rx.BehaviorSubject<number>(0),
  }

  constructor(initSavings = 0) {
    super();
    this.outflow.savings.next(initSavings);
    this.flowInit();
  }

  // 支出
  pay(money: number, inflow: rx.Subject<number>) {
    inflow.next(money);
    this.savingsChange(-money);
  }

  flowInit() {
    const inflow = this.inflow;
    const argsReady$ = rx.combineLatest([inflow.income]);
    argsReady$.subscribe(([income]) => {
      this.savingsChange(income);
    });
  }

  // 改变储蓄
  async savingsChange(income: number) {
    const outflow = this.outflow;
    const savings = await FlowNode.getStateVal(outflow.savings);
    outflow.savings.next(savings + income);
  }
}
