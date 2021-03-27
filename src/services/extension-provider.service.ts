import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';

/*
 * Fix the service type. Possible options can be:
 * - import {ExtensionProvider} from 'your-module';
 * - export type ExtensionProvider = string;
 * - export interface ExtensionProvider {}
 */
export type ExtensionProvider = unknown;

@injectable({scope: BindingScope.TRANSIENT})
export class ExtensionProviderProvider implements Provider<ExtensionProvider> {
  constructor(/* Add @inject to inject parameters */) {}

  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }
}
