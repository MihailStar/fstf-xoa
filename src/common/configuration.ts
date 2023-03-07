import dotenv from 'dotenv';
import { cleanEnv, host, port, str } from 'envalid';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '../../.env') });

const configuration = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production', 'test'] }),
  SERVER_HOST: host(),
  SERVER_PORT: port(),
});

export { configuration };
