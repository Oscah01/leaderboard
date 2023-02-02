/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'NBQq0spHxP4d63RK6W85';
const identifierUrl = `${url}games/${id}/scores/`;

const getScore = async () => {
  const response = await fetch(identifierUrl, {
  });
  const res = await response.json();
  return res.result;
};

export { getScore };