const postRequestMethod = (link, body) => {
  return new Promise(async (resolve, reject) => {
    const url = `${API_HOST}/iweb/${link}`;
    return fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body),
    })
      .then((response) => {
        const jsonRes = response.json();
        if (response.ok && response.status === 200) {
          resolve(jsonRes);
        } else {
          errorMethod(jsonRes, (data) => {
            reject(data);
          });
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

const getRequestMethod = (link, body) => {
  return new Promise(async (resolve, reject) => {
    const url = `${API_HOST}/iweb/${link}`;
    return fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body),
    })
      .then((response) => {
        const jsonRes = response.json();
        if (response.ok && response.status === 200) {
          resolve(jsonRes);
        } else {
          errorMethod(jsonRes, (data) => {
            reject(data);
          });
        }
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
