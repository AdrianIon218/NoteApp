import { useEffect, useState } from "react";

function getDataFromLocalStorage(key: string, initialValue: any): any {
  const ls: string | null = localStorage.getItem(key);
  if (ls) {
    return JSON.parse(ls);
  }
  return initialValue;
}

function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const currentData = getDataFromLocalStorage(key, initialValue);
    if (currentData !== initialValue) {
      setValue(currentData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return { value: value, setValue: (val: any) => setValue(val) };
}

export default useLocalStorage;
