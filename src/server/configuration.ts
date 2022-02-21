import { createConfiguration, hooks } from '@midwayjs/hooks';
import * as Koa from '@midwayjs/koa';
import * as orm from '@midwayjs/orm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, orm, hooks()],
  importConfigs: [{ 
    default: { 
      keys: 'session_keys',
      orm: {
        default: {
            type: 'mysql',
            database: 'test',
            host: '127.0.0.1',
            port: 3306,
            username: 'admin',
            password: 'admin',
            logging: false,
            namingStrategy: new SnakeNamingStrategy()
        }
      }
    } 
  }],
});
