import { useEffect, useState } from 'react';
import { FILTER_KEYS } from '../../common/consts/app-keys.const';
import { ITodo } from '../types/todo.types';

interface IUseFilter {
  filterValue: string | null;
  data?: ITodo[];
}

export const useFilter = ({ filterValue, data }: IUseFilter): ITodo[] | undefined => {
  const [filteredData, setFilteredData] = useState<ITodo[] | undefined>(data);

  useEffect(() => {
    if (data) {
      switch (filterValue) {
        case FILTER_KEYS.PRIVATE:
          setFilteredData(data.filter((todo) => todo.isPrivate));
          break;

        case FILTER_KEYS.PUBLIC:
          setFilteredData(data.filter((todo) => !todo.isPrivate));
          break;

        case FILTER_KEYS.COMPLETED:
          setFilteredData(data.filter((todo) => todo.isCompleted));
          break;

        default:
          setFilteredData(data);
      }
    }
  }, [filterValue, data]);

  return filteredData;
};
