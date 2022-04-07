import { WSController, OnWSConnection, Inject } from '@midwayjs/decorator';
import { Context } from '@midwayjs/socketio';

@WSController('/test')
export class HelloSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnectionMethod() {
    console.log('on client connect', this.ctx.id);
  }
}
