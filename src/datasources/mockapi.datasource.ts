import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mockapi',
  connector: 'rest',
  baseURL: 'https://605eb1b1e96e5c0017407abf.mockapi.io/',
  crud: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MockapiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mockapi';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mockapi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
