// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, HttpErrors, param} from '@loopback/rest';
import {
  MockapiParameters,
  Mockapi,
  MockapiResponse
} from '../services/mockapi.service';

export class MockapiController {
  constructor(
    @inject('services.Mockapi')
    protected mockapiProvider: Mockapi,
  ) {}

  @get('/users')
  async read(): Promise<MockapiResponse> {
    return this.mockapiProvider.getUser();
  }

  @get('/users/{id}')
  async readById(
    @param.path.string('id') id: string,
  ): Promise<MockapiResponse> {
    return this.mockapiProvider.getUserById(
      id,
    );
  }

  @get('/users/{id}/posts')
  async readUserPost(
    @param.path.string('id') id: string,
  ): Promise<MockapiResponse> {
    return this.mockapiProvider.getUserPost(
      id,
    );
  }

  @get('/users/{id}/posts/{pid}')
  async readUserPostById(
    @param.path.string('id') id: string,
    @param.path.string('pid') pid: string,
  ): Promise<MockapiResponse> {
    return this.mockapiProvider.getUserPostById(
      id,
      pid,
    );
  }
}
