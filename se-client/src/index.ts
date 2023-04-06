import { deleteFile, fetchFileContent, fetchFiles, updateFileContent } from './functions/call-api';
import { createTextBox, populateTable } from './functions/expand-html';

//TODO: move to env vars
const baseUrl = 'http://localhost:3000';

const main = async () => {              // be kell burkolni az await-et egy asyncbe, mert csak azon belül működik
  let promise = fetchFiles(baseUrl);    // ez kb egy task v todo, 'ezt kell csinálni'
  let fileList = await promise;         // az await indítja a munkát és meg is várja az eredményt, az async kód sync lesz
  let srtFiles = fileList.match(/[[a-zA-Z0-9]+\.srt*/gm) as string[];

  populateTable(srtFiles, 'files-table');
  createTextBox();

  document.addEventListener('click', async function (event) {
    const target = event.target as HTMLElement;
    let fileId: string = target.getAttribute('id') as string;

    switch (target.getAttribute('class')) {
      case 'delete-button':
        deleteFile(baseUrl, fileId, 'srt');
        deleteFile(baseUrl, fileId, 'json');
        break;

      case 'view-button':
        const fileContent = await fetchFileContent(baseUrl, fileId, 'srt');
        createTextBox(fileContent, fileId);
        break;

      case 'update-button':
        let textbox = document.getElementById('content-box') as HTMLTextAreaElement;
        if (confirm('Are you sure?') == true) {
          await updateFileContent(baseUrl, target.id, 'srt', { fileContent: textbox.value }); // TODO: interfacebe szervezni, több helyen is szerepel
        }
        break;

      case 'cancel-button':
        createTextBox();
        break;
    }
  });
};

main();
