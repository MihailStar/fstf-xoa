import { v4 as uuid } from 'uuid';
import type { CreateItemDTO, Item, UpdateItemDTO } from './item.type';

// типа IMDB
const itemIdToItem: Record<Item['id'], Item> = {};

// Create
const create = async (dto: CreateItemDTO): Promise<Item> => {
  const createdItem: Item = { id: uuid(), ...dto };

  itemIdToItem[createdItem.id] = createdItem;

  return createdItem;
};

// Read all
const readAll = async (): Promise<Item[]> => {
  const foundItems = Object.values(itemIdToItem);

  return foundItems;
};

// Read
const read = async (id: Item['id']): Promise<Item | null> => {
  const foundItem = itemIdToItem[id];
  if (foundItem === undefined) return null;

  return foundItem;
};

// Update
const update = async (
  id: Item['id'],
  dto: UpdateItemDTO
): Promise<Item | null> => {
  const foundItem = itemIdToItem[id];
  if (foundItem === undefined) return null;

  const updatedItem: Item = { ...foundItem, ...dto };
  itemIdToItem[id] = updatedItem;

  return updatedItem;
};

// Delete
const remove = async (id: Item['id']): Promise<Item | null> => {
  const foundItem = itemIdToItem[id];
  if (foundItem === undefined) return null;

  delete itemIdToItem[id];

  return foundItem;
};

const ItemService = {
  create,
  readAll,
  read,
  update,
  delete: remove,
};

export { ItemService };
