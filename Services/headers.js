export const headers = () => {
  var headers = {
    Accept: 'application/json',
    // withCredentials: true,
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('tokenfromAPI'),
  };

  return headers;
};

export default headers;
