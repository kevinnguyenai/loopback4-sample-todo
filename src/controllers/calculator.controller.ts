// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, HttpErrors, param} from '@loopback/rest';
import {
  MultiplyResponse,
  AddResponse,
  SubtractResponse,
  DivideResponse,
  CalculatorParameters,
  Calculator
} from '../services/calculator.service'

export class CalculatorController {
  constructor(
    @inject('services.Calculator')
    protected calculatorProvider: Calculator,
    ) {}

  @get('/multiply/{intA}/{intB}')
  async multiply(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<MultiplyResponse> {
    return this.calculatorProvider.multiply(<CalculatorParameters>{
      intA,
      intB,
    });
  }

  @get('/divide/{intA}/{intB}')
  async divide(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intA') intB: number,
  ): Promise<DivideResponse> {
    return this.calculatorProvider.divide(<CalculatorParameters>{
      intA,
      intB,
    });
  }

  @get('/add/{intA}/{intB}')
  async add(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<DivideResponse> {
    return this.calculatorProvider.add(<CalculatorParameters>{
      intA,
      intB,
    });
  }

  @get('/subtract/{intA}/{intB}')
  async subtract(
    @param.path.integer('intA') intA: number,
    @param.path.integer('intB') intB: number,
  ): Promise<SubtractResponse> {
    return this.calculatorProvider.subtract(<CalculatorParameters>{
      intA,
      intB,
    });
  }
}
