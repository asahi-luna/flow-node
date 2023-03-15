import * as rx from "rxjs";

export interface InflowPonit<T> {
  [flowname: string]: rx.Subject<T>
}

export default class FlowNode {
  constructor() { };

  static async getStateVal<T>(flow: rx.BehaviorSubject<T>): Promise<T> {
    return await new Promise((resolve) => {
      const flowsc = flow.subscribe(val => resolve(val));
      flowsc.unsubscribe();
    });
  }

  static send<T>(outflow: rx.Subject<T>, inflow: rx.Subject<T>) {
    outflow.subscribe(data => {
      inflow.next(data);
    });
  }

  static startSend<T>(outflow: T, inflow: rx.Subject<T>) {
    inflow.next(outflow);
  }
}
