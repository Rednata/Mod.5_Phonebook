const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, newContact) => {
  const temp = getStorage(key);
  temp.push(newContact);
  localStorage.setItem(key, JSON.stringify(temp));
};

const removeStorage = (data, numberPhone, key) => {
  const removeIndex = data.findIndex(elem =>
    elem['phone'] === numberPhone);
  data.splice(removeIndex, 1);
  localStorage.setItem(key, JSON.stringify(data));
};

export {
  getStorage,
  setStorage,
  removeStorage,
};
