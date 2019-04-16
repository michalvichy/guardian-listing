export function saveItem(key: string, data: any) {
  const stringifiedData = JSON.stringify(data);

  localStorage.setItem(key, stringifiedData);
}

export function readItem(key: string) {
  const data = localStorage.getItem(key);

  return data && JSON.parse(data);
}
