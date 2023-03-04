console.log("yey");
import tslib from 'tslib';
import axios from 'axios';

// import { fetchFileList } from "./functions/call-api";

const baseUrl = "http://localhost:3000/file";

function main() {
  console.log(tslib);
  fetchFileList(baseUrl);
};


const fetchFileList = async (url: string) => {
  let promise = axios
    .get(url + "/file", { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};



main();