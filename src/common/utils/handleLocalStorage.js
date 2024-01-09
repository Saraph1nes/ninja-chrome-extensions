export const setLocalStorageItem = (key, value) => {
  const storage = localStorage.getItem('ezr-chrome-extension-storage');
  let keyValue = {};
  let item = {};
  if (storage) {
    item = JSON.parse(localStorage.getItem('ezr-chrome-extension-storage'));
  }
  keyValue[key] = value;
  let setItem = JSON.stringify(Object.assign(item, keyValue));
  localStorage.setItem('ezr-chrome-extension-storage', setItem);
};

export const getLocalStorageItem = (key) => {
  const storage = localStorage.getItem('ezr-chrome-extension-storage');
  if (storage) {
    const item = JSON.parse(storage);
    if (item[key]) {
      return item[key];
    }
  }
  return null;
};
