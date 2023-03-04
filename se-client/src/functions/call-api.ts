import axios from 'axios';

export const fetchFileList = async (url: string) => {
  let promise = axios
    .get(url + "/file", { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};

// TODO: Ezt a createNewTableRow() function hívja meg most! Main() hívja meg!
export const fetchFileContent = async (url: string, id: string, extension: string) => {
  let promise = axios
    .get(url + "/file/" + id + "." + extension, { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};
