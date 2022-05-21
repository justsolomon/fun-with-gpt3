import { useCallback } from 'react';

const useStorage = () => {
  const addStorageValue = useCallback(
    <ValueType>(key: string, value: ValueType): void => {
      localStorage[key] = JSON.stringify(value);
    },
    [],
  );

  const getStorageValue = useCallback(
    <ValueType = void>(key: string): ValueType => {
      const value = localStorage[key];

      if (value) return JSON.parse(value);
      return value;
    },
    [],
  );

  return {
    addStorageValue,
    getStorageValue,
  };
};

export default useStorage;
