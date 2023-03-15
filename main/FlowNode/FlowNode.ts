import * as rx from "rxjs";

export interface InflowPonit<T> {
  [flowname: string]: rx.Subject<T>
}

export default class FlowNode {
  constructor() { };

  static send<T>(outflow: rx.Subject<T>, inflow: rx.Subject<T>) {
    outflow.subscribe(data => {
      inflow.next(data)
    });
  }

  static startSend<T>(outflow: T, inflow: rx.Subject<T>) {
    inflow.next(outflow);
  }
}
