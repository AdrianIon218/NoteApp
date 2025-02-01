import { useEffect, useState } from "react";

function getDataFromLocalStorage(key: string, initialValue: unknown): unknown {
  const ls: string | null = localStorage.getItem(key);
  if (ls) {
    return JSON.parse(ls);
  }
  return initialValue;
}

function useLocalStorage(key: string, initialValue: unknown) {
  const [value, setValue] = useState(() =>
    getDataFromLocalStorage(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { value, setValue };
}

export default useLocalStorage;
