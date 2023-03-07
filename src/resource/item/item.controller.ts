import type { RouteHandler } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { ItemService } from './item.service';
import type {
  CreateItemBody,
  CreateItemReply,
  DeleteItemParams,
  DeleteItemReply,
  ReadItemParams,
  ReadItemReply,
  ReadItemsReply,
  UpdateItemBody,
  UpdateItemParams,
  UpdateItemReply,
} from './item.type';

// Create
const create: RouteHandler<{
  Body: CreateItemBody;
  Reply: CreateItemReply;
}> = async (request, reply): Promise<void> => {
  const { body: dto } = request;
  const createdItem = await ItemService.create(dto);

  void reply.code(StatusCodes.OK).send({ data: createdItem });
};

// Read all
const readAll: RouteHandler<{ Reply: ReadItemsReply }> = async (
  _request,
  reply
) => {
  const readedItems = await ItemService.readAll();

  void reply.code(StatusCodes.OK).send({ data: readedItems });
};

// Read
const read: RouteHandler<{
  Params: ReadItemParams;
  Reply: ReadItemReply;
}> = async (request, reply) => {
  const { id } = request.params;
  const readedItem = await ItemService.read(id);

  if (readedItem === null) {
    void reply.code(StatusCodes.NOT_FOUND).send({ data: null });
    return;
  }

  void reply.code(StatusCodes.OK).send({ data: readedItem });
};

// Update
const update: RouteHandler<{
  Params: UpdateItemParams;
  Body: UpdateItemBody;
  Reply: UpdateItemReply;
}> = async (request, reply) => {
  const { id } = request.params;
  const { body: dto } = request;

  const updatedItem = await ItemService.update(id, dto);

  if (updatedItem === null) {
    void reply.code(StatusCodes.NOT_FOUND).send({ data: null });
    return;
  }

  void reply.code(StatusCodes.OK).send({ data: updatedItem });
};

// Delete
const remove: RouteHandler<{
  Params: DeleteItemParams;
  Reply: DeleteItemReply;
}> = async (request, reply) => {
  const { id } = request.params;
  const deletedItem = await ItemService.delete(id);

  if (deletedItem === null) {
    void reply.code(StatusCodes.NOT_FOUND).send({ data: null });
    return;
  }

  void reply.code(StatusCodes.OK).send({ data: deletedItem });
};

const ItemController = {
  create,
  readAll,
  read,
  update,
  delete: remove,
};

export { ItemController };
