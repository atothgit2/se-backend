import { fetchFileList } from "./functions/call-api";

const baseUrl = "http://localhost:3000/file";
const main = async () => {    
  console.log(baseUrl);
  fetchFileList(baseUrl)
}

main();

