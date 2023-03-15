import * as rx from "rxjs";

export default class StartNode {
  constructor() { }
  send<T>(outflow: T, inflow: rx.Subject<T>) {
    inflow.next(outflow);
  }
}
