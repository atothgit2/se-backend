import axios from "axios";

export const fetchFiles = async (url: string): Promise<string> => {
  let promise = axios
    .get(url + "/file", { responseType: "text" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return await promise;
};

export const fetchFileContent = async (
  url: string,
  id: string,
  extension: string
): Promise<string> => {
  let promise = axios
    .get(url + "/file/" + id + "." + extension, { responseType: "text", responseEncoding: "utf8" })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return await promise;
};

// TODO: interfacebe szervezni, több helyen is szerepel
export const updateFileContent = async (
  url: string,
  id: string,
  extension: string,
  data: { fileContent: string }
) => {
  const options = {
    method: "PUT",
    headers: { responseType: "json", responseEncoding: "utf8" },
    url: url + "/file/" + id + "." + extension,
    data: data,
  };

  let promise = await axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
  return await promise;
};

export const deleteFile = async (url: string, id: string, extension: string) => {
  await axios
    .delete(url + "/file/" + id + "." + extension)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
