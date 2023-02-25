import { useEffect, useState } from 'react';
import { ITodo } from '../types/todo.types';

interface IUseSearch {
  data?: ITodo[];
  searchTerm: string;
}

export const useSearch = ({ data, searchTerm }: IUseSearch): ITodo[] | null => {
  const [searchedData, setSearchedData] = useState<ITodo[] | null>(null);

  useEffect(() => {
    if (data) {
      setSearchedData(
        data.filter((todo) => todo.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)
      );
    }
  }, [searchTerm]);

  return searchedData;
};
