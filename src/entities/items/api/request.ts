import { apiInstance } from "../../../shared/api/base";
import { IItemsResponseData } from "../store/types";

export const fetchItemsApi = async (pageRoute: string): Promise<IItemsResponseData> => {
  const pageHatchBack = pageRoute.split('/');
  const numberFromPage = pageHatchBack[pageHatchBack.length - 1];
  const { data } = await apiInstance.get(`https://taxivoshod.ru/testapi/?w=list&page=${numberFromPage}`)

  return data;
};

export const fetchItemByIdApi = async (id: string): Promise<any> => {
  const { data } = await apiInstance.get(`https://taxivoshod.ru/testapi/?w=item&id=${id}`)

  return data;
};
