import * as rx from "rxjs";

export default class Unit {
  private _savings: rx.Observable<number>;

  constructor(initSavings = 0){
    this._savings = rx.of(initSavings);
  }

  earn(income: number, unit: Unit){
    this.savingsChange(income);
    unit.justPay(income);
  }

  pay(cost: number, unit: Unit) {
    this.savingsChange(-cost);
    unit.justEarn(cost);
  }

  private justEarn(income: number){
    this.savingsChange(income);
  }

  private justPay(cost: number) {
    this.savingsChange(-cost);
  }

  private savingsChange(change: number) {
    this._savings = this._savings.pipe(
      rx.map(savings => savings + change)
    )
  }
  
  get savings() {
    return this._savings;
  }
}
