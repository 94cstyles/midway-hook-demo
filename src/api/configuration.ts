import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import * as socketio from '@midwayjs/socketio';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, socketio, hooks()],
  importConfigs: [{ 
    socketIO: {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    },
    default: { keys: 'session_keys' }
   }],
});
