import type { StatusCodes } from 'http-status-codes';
import type { FromSchema } from 'json-schema-to-ts';
import type {
  createItemDTO,
  createItemSchema,
  deleteItemSchema,
  item,
  readItemSchema,
  readItemsSchema,
  updateItemDTO,
  updateItemSchema,
} from './item.schema';

type Item = FromSchema<typeof item>;

// Create
type CreateItemDTO = FromSchema<typeof createItemDTO>;
type CreateItemBody = FromSchema<typeof createItemSchema['schema']['body']>;
type CreateItemReply = FromSchema<
  typeof createItemSchema['schema']['response'][StatusCodes.OK]
>;

// Read all
type ReadItemsReply = FromSchema<
  typeof readItemsSchema['schema']['response'][StatusCodes.OK]
>;

// Read
type ReadItemParams = FromSchema<typeof readItemSchema['schema']['params']>;
type ReadItemReply = FromSchema<
  | typeof readItemSchema['schema']['response'][StatusCodes.OK]
  | typeof readItemSchema['schema']['response'][StatusCodes.NOT_FOUND]
>;

// Update
type UpdateItemDTO = FromSchema<typeof updateItemDTO>;
type UpdateItemParams = FromSchema<typeof updateItemSchema['schema']['params']>;
type UpdateItemBody = FromSchema<typeof updateItemSchema['schema']['body']>;
type UpdateItemReply = FromSchema<
  | typeof updateItemSchema['schema']['response'][StatusCodes.OK]
  | typeof updateItemSchema['schema']['response'][StatusCodes.NOT_FOUND]
>;

// Delete
type DeleteItemParams = FromSchema<typeof deleteItemSchema['schema']['params']>;
type DeleteItemReply = FromSchema<
  | typeof deleteItemSchema['schema']['response'][StatusCodes.OK]
  | typeof deleteItemSchema['schema']['response'][StatusCodes.NOT_FOUND]
>;

export {
  Item,
  CreateItemDTO,
  CreateItemBody,
  CreateItemReply,
  ReadItemsReply,
  ReadItemParams,
  ReadItemReply,
  UpdateItemDTO,
  UpdateItemParams,
  UpdateItemBody,
  UpdateItemReply,
  DeleteItemParams,
  DeleteItemReply,
};
