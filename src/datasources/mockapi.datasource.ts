import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const MOCKAPI_PATH='https://605eb1b1e96e5c0017407abf.mockapi.io';

const config = {
  name: 'mockapi',
  connector: 'rest',
  options: {
    headers: {
      "accept": "application/json",
      "content-type": "application/json"
    },
    strictSSL: false,
  },
  baseURL: MOCKAPI_PATH,
  crud: true,
  operations: [{
    template: {
      method: 'GET',
      url: MOCKAPI_PATH + "/users",
      query: {

      },
      options: {
        strictSSL: true,
        useQueryString: true,
      }
    },
    functions: {
      getUser: []
    }
  },
  {
    template: {
      method: 'GET',
      url: MOCKAPI_PATH + "/users/{id}",
      query: {

      },
      options: {
        strictSSL: true,
        useQueryString: true,
      }
    },
    functions: {
      getUserById: ["id"]
    }
  },
  {
    template: {
      method: 'GET',
      url: MOCKAPI_PATH + "/users/{id}/posts",
      query: {

      },
      options: {
        strictSSL: true,
        useQueryString: true,
      }
    },
    functions: {
      getUserPost: ["id"]
    }
  },
  {
    template: {
      method: 'GET',
      url: MOCKAPI_PATH + "/users/{id}/posts/{pid}",
      query: {

      },
      options: {
        strictSSL: true,
        useQueryString: true,
      }
    },
    functions: {
      getUserPostById: ["id","pid"]
    }
  }
]
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
