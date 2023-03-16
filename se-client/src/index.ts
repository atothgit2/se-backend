import { fetchFileContent, fetchFiles, updateFileContent } from './functions/call-api';
import { createTextBox, populateTable } from './functions/expand-html';

//TODO move to env vars
const baseUrl = 'http://localhost:3000';

const main = async () => {              // be kell burkolni az await-et egy asyncbe, mert csak azon belül működik
  let promise = fetchFiles(baseUrl);    // ez kb egy task v todo, 'ezt kell csinálni'
  let fileList = await promise;         // az await indítja a munkát és meg is várja az eredményt, az async kód sync lesz
  let srtFiles = fileList.match(/[[a-zA-Z0-9]+\.srt*/gm) as string[];

  populateTable(srtFiles, "files-table");

  document.addEventListener("click", async function (event) {
    const target = event.target as HTMLElement;
    let fileId: string = "";

    if (target.getAttribute("class") === "view-button") {
      fileId = target.getAttribute("id") as string;
      const fileContent = await fetchFileContent(baseUrl, fileId, "srt");
      createTextBox(fileContent, fileId);
    }

    if (target.getAttribute("class") === "delete-button") {
      fileId = target.getAttribute("id") as string;
      console.log(fileId);
    }

    // TODO: ne tűnjön el a textbox update után!
    if (target.getAttribute("class") === "update-button") {
      let textbox = document.getElementById("content-box") as HTMLTextAreaElement;
      let updateButton = document.getElementsByClassName("update-button");
      // TODO: interfacebe szervezni, több helyen is szerepel
      if (confirm("Are you sure?") == true) {
        await updateFileContent(baseUrl, updateButton[0].id, "srt", { fileContent: textbox.value });
      }
    }
  });
};

main();

// button?.addEventListener('click', function() {
//   console.log('yey');
// });
