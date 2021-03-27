import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {MockapiDataSource} from '../datasources';

export interface Mockapi {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class MockapiProvider implements Provider<Mockapi> {
  constructor(
    // mockapi must match the name property in the datasource json file
    @inject('datasources.mockapi')
    protected dataSource: MockapiDataSource = new MockapiDataSource(),
  ) {}

  value(): Promise<Mockapi> {
    return getService(this.dataSource);
  }
}
