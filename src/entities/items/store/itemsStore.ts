import { create } from 'zustand';
import { produce } from 'immer';
import { PagesRoutsEnum } from '@/entities/pages/store/constants';
import { fetchItemByIdApi, fetchItemsApi } from '../api/request';
import { IItem } from './types';

interface IItemsStore {
  items: IItem[];
  chosenItem: IItem | null;
  fetchItems: (pageRoute: string) => void;
  fetchItem: (id: string) => void;
}

export const itemsStore = create<IItemsStore>((set) => ({
  items: [],
  chosenItem: null,
  fetchItems: async (pageRoute: string) => {
    try {
      const data = await fetchItemsApi(pageRoute);
      set(produce((store: IItemsStore) => {
        store.items = data.items;
      }));
    } catch (error) {
      alert(error)
    }
  },
  fetchItem: async (id: string) => {
    try {
      const data = await fetchItemByIdApi(id);
      set(produce((store: IItemsStore) => {
        store.chosenItem = data;
      }));
    } catch (error) {
      alert(error)
    }
  },

}));