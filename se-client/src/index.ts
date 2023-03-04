import { fetchFileList } from './functions/call-api';
import { createNewTableRow } from './functions/expand-html';
const baseUrl = "http://localhost:3000";

const main = async () => {  // be kell burkolni az await-et egy asyncbe, mert csak azon belül működik
  /* ------------------------ FILE TABLE ------------------------ */
  let promise = fetchFileList(baseUrl);   // ez kb egy task v todo, "ezt kell csinálni"
  let fileList = await promise;           // az await indítja a munkát és meg is várja az eredményt, az async kód sync lesz
  let fileListArray = fileList.match(/[[a-zA-Z0-9]+\.srt*/gm);
  
  createNewTableRow("files-table", fileListArray);
};


// const fetchFileList = async (url: string) => {
//   let promise = axios
//     .get(url + "file", { responseType: "text" })
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => console.log(err));
//   return promise;
// };

main();