import type { FastifyInstance } from 'fastify';
import { ItemController } from './item.controller';
import {
  createItemSchema,
  deleteItemSchema,
  readItemSchema,
  readItemsSchema,
  updateItemSchema,
} from './item.schema';

async function itemRoute(instance: FastifyInstance): Promise<void> {
  // Create
  instance.post('/items', createItemSchema, ItemController.create);

  // Read all
  instance.get('/items', readItemsSchema, ItemController.readAll);

  // Read
  instance.get('/items/:id', readItemSchema, ItemController.read);

  // Update
  instance.put('/items/:id', updateItemSchema, ItemController.update);

  // Delete
  instance.delete('/items/:id', deleteItemSchema, ItemController.delete);
}

export { itemRoute };
