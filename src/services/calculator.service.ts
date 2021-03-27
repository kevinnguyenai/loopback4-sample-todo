import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CalculatorDataSource} from '../datasources/calculator.datasource';

export interface MultiplyResponse {
  result: {
    value: number;
  };
}
export interface DivideResponse {
  result: {
    value: number;
  };
}
export interface AddResponse {
  result: {
    value: number;
  };
}
export interface SubtractResponse {
  result: {
    value: number;
  }
}

export interface CalculatorParameters {
  intA: number;
  intB: number;
}

export interface Calculator {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.S
  multiply(args: CalculatorParameters): Promise<MultiplyResponse>;
  add(args: CalculatorParameters): Promise<AddResponse>;
  subtract(args: CalculatorParameters): Promise<SubtractResponse>;
  divide(args: CalculatorParameters): Promise<DivideResponse>;
}

export class CalculatorProvider implements Provider<Calculator> {
  constructor(
    // calculator must match the name property in the datasource json file
    @inject('datasources.calculator')
    protected dataSource: CalculatorDataSource = new CalculatorDataSource(),
  ) {}

  value(): Promise<Calculator> {
    return getService(this.dataSource);
  }
}

