import { configuration } from './common/configuration';
import { createServer } from './server';
import { print } from './utility/print';
import { throwError } from './utility/throw-error';

const { SERVER_HOST, SERVER_PORT, isDevelopment } = configuration;

/** Bootstrap */
async function startServer(): Promise<void> {
  const server = createServer();

  try {
    await server.listen({ host: SERVER_HOST, port: SERVER_PORT });

    print(`✓ ${isDevelopment ? `http://${SERVER_HOST}:${SERVER_PORT}` : ''}`);
  } catch (reason) {
    server.log.error(reason);

    throwError(reason);
  }
}

void startServer();
