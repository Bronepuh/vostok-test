import { create } from 'zustand';
import { produce } from 'immer';
import { PagesRoutsEnum } from './constants';

interface IPagesStore {
  pages: PagesRoutsEnum[];
  currentPage: PagesRoutsEnum;
  setCurrentPage: (page: PagesRoutsEnum) => void;
}

export const pagesStore = create<IPagesStore>((set) => ({
  pages: [],
  currentPage: PagesRoutsEnum.page1,
  setCurrentPage: (page: PagesRoutsEnum) => {
    set(produce((store: IPagesStore) => {
      store.currentPage = page;
    }));
  },

}));