export const fetchFileList = async (url) => {
  let promise = axios
    .get(url + "/file", { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};

// TODO: Ezt a createNewTableRow() function hívja meg most! Main() hívja meg!
export const fetchFileContent = async (url, id, extension) => {
  let promise = axios
    .get(url + "/file/" + id + "." + extension, { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};

export const uploadFile = async (url, formData) => {
  axios
    .post(url + "/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((err) => console.log(err));
};

export const deleteFile = async (url, id) => {
  let promise = axios
    .delete(url + "/file/" + id, { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return promise;
};

export const updateFile = async (url, id, formData) => {
  axios
    .put(url + "/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((err) => console.log(err));
};
