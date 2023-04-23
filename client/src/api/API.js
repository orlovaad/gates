const DOMAIN_URL = 'http://localhost:3001/';

// получить данные с сервера
export const serverResponse = async () => {
  const response = await fetch(DOMAIN_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
  return await response.json();
};
