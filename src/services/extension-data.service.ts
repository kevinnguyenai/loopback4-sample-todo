import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class ExtensionDataService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
