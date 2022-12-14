export const setLocalStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const  getLocalStorage = (key: string) =>
  window.localStorage.getItem(key);
