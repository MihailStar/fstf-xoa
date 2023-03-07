import fastifySwagger from '@fastify/swagger';
import type { FastifyInstance } from 'fastify';
import fastify from 'fastify';
import { configuration } from './common/configuration';
import { itemRoute } from './resource/item/item.route';

const { isDevelopment } = configuration;

function createServer(): FastifyInstance {
  const instance = fastify({ logger: isDevelopment });

  void instance.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'fstf-xoa', version: '0.1.0' },
      tags: [{ name: 'items', description: 'CRUD' }],
    },
  });

  void instance.register(itemRoute);

  return instance;
}

export { createServer };
