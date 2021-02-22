// const axios = require("axios");

const local = "http://localhost:5000/";
const dev = "";

const isLocal = true;
const url = isLocal ? local : dev;

const uploadImage = "uploadImage";

export const uploadImageURL = url + uploadImage;

// export const uploadLeafImage = (data) => {
//   return axios.post(uploadImageURL, data).then((res) => {
//     return res;
//   });
// };
