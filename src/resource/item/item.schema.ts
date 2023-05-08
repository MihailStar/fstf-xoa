import { StatusCodes } from 'http-status-codes';

const item = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: {
      description: 'item id', // optional, for Swagger
      type: 'string',
      format: 'uuid',
    },
    name: { type: 'string' },
  },
  required: ['id', 'name'],
} as const;

// Create
const createItemDTO = {
  additionalProperties: false,
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
} as const;

const createItemSchema = {
  schema: {
    summary: 'Create', // optional, for Swagger
    body: createItemDTO,
    response: {
      [StatusCodes.OK]: {
        type: 'object',
        properties: {
          data: item,
        },
        required: ['data'],
      },
    },
    tags: ['items'] as string[], // optional, for Swagger
    // `as string[]` for correct typing `RouteShorthandOptions`
  },
} as const;

// Read all
const readItemsSchema = {
  schema: {
    summary: 'Read all', // optional, for Swagger
    response: {
      [StatusCodes.OK]: {
        type: 'object',
        properties: {
          data: { type: 'array', items: item },
        },
        required: ['data'],
      },
    },
    tags: ['items'] as string[], // optional, for Swagger
    // `as string[]` for correct typing `RouteShorthandOptions`
  },
} as const;

// Read
const readItemSchema = {
  schema: {
    summary: 'Read', // optional, for Swagger
    params: {
      type: 'object',
      properties: {
        id: item.properties.id,
      },
      required: ['id'],
    },
    response: {
      [StatusCodes.OK]: {
        type: 'object',
        properties: {
          data: item,
        },
        required: ['data'],
      },
      [StatusCodes.NOT_FOUND]: {
        type: 'object',
        properties: {
          data: { type: 'null' },
        },
        required: ['data'],
      },
    },
    tags: ['items'] as string[], // optional, for Swagger
    // `as string[]` for correct typing `RouteShorthandOptions`
  },
} as const;

// Update
const updateItemDTO = {
  additionalProperties: false,
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: [],
} as const;

const updateItemSchema = {
  schema: {
    summary: 'Update', // optional, for Swagger
    params: {
      type: 'object',
      properties: {
        id: item.properties.id,
      },
      required: ['id'],
    },
    body: updateItemDTO,
    response: {
      [StatusCodes.OK]: {
        type: 'object',
        properties: {
          data: item,
        },
        required: ['data'],
      },
      [StatusCodes.NOT_FOUND]: {
        type: 'object',
        properties: {
          data: { type: 'null' },
        },
        required: ['data'],
      },
    },
    tags: ['items'] as string[], // optional, for Swagger
    // `as string[]` for correct typing `RouteShorthandOptions`
  },
} as const;

// Delete
const deleteItemSchema = {
  schema: {
    summary: 'Delete', // optional, for Swagger
    params: {
      type: 'object',
      properties: {
        id: item.properties.id,
      },
      required: ['id'],
    },
    response: {
      [StatusCodes.OK]: {
        type: 'object',
        properties: {
          data: item,
        },
        required: ['data'],
      },
      [StatusCodes.NOT_FOUND]: {
        type: 'object',
        properties: {
          data: { type: 'null' },
        },
        required: ['data'],
      },
    },
    tags: ['items'] as string[], // optional, for Swagger
    // `as string[]` for correct typing `RouteShorthandOptions`
  },
} as const;

export {
  item,
  createItemDTO,
  createItemSchema,
  readItemsSchema,
  readItemSchema,
  updateItemDTO,
  updateItemSchema,
  deleteItemSchema,
};
