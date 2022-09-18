const dataApi = (data) => {
  return fetch('https://batwomenlitagarcia.herokuapp.com/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
export default dataApi;
