import { fetchFileContent } from "../functions/call-api";

//TODO move to env vars
const url = "http://localhost:3000"

export const createNewTableRow = (tableId: string, fileListArray: string[]) => {
  if (fileListArray != null) {
    for (let i = 0; i < fileListArray.length; i++) {
      let table = document.getElementById(tableId) as HTMLTableElement;
      let body: HTMLTableSectionElement | undefined = table.getElementsByTagName("tbody")[0];
      let row: HTMLTableRowElement | undefined = body.insertRow(-1);
      let filename = fileListArray[i];

      for (let j = 0; j < table.rows[0].cells.length; j++) {
        let cell = row.insertCell(j);
        let columnHeader = document.querySelectorAll(".table-header")[j].id;

        switch (columnHeader) {
          case "filename":
            cell.className = "tg-cell filename " + filename;
            cell.innerHTML += filename;
            break;
          case "id":
            cell.className = "tg-cell id " + filename.slice(0, -4);
            cell.innerHTML += "id";
            break;
          case "title":
            cell.className = "tg-cell title " + filename.slice(0, -4);
            cell.innerHTML += "title";
            break;
          case "imdb":
            cell.className = "tg-cell imdb " + filename.slice(0, -4);
            cell.innerHTML += "imdb";
            break;
          case "actions":
            cell.className = "tg-cell actions " + filename.slice(0, -4);

            const button_view = cell.appendChild(document.createElement("input"));
            button_view.type = "button";
            button_view.className = "submit-button view " + filename.slice(0, -4);
            button_view.value = "View";
            button_view.id = "view-button";
            button_view.onclick = async () => {
              console.log(filename);
              let content = await fetchFileContent(url, filename.slice(0, -4), "srt");
              // TODO: .slice() kell?
              createTextBox(content);
            };

            const button_delete = cell.appendChild(document.createElement("input"));
            button_delete.type = "button";
            button_delete.className = "submit-button delete " + filename.slice(0, -4);
            button_delete.value = "Delete";
            button_delete.id = "delete-button";
            button_delete.onclick = async () => {
              return filename;
            };

            //   document.getElementById(`delete-file-submit-${filename}`).onclick =
            //     async () => {
            //       if (confirm("Are you sure?") == true) {
            //         await deleteFile(url, filename);
            //       }
            //     };

            break;
        }
      }
    }
  } else {
    let table = document.getElementById(tableId) as HTMLTableElement;
    console.log(table);
    console.log(typeof table);
    let body: HTMLTableSectionElement | undefined = table?.getElementsByTagName("tbody")[0];
    let row: HTMLTableRowElement | undefined = body?.insertRow(-1);
    let cell: HTMLTableCellElement | undefined = row?.insertCell(0);
    cell.colSpan = table?.rows[0].cells.length;
    cell.innerText = "No data!";
    cell.style.textAlign = "center";
  }
};

const createTextBox = (text: string) => {
  let form: HTMLElement | null = document.getElementById("upload-form");
  if (
    document.getElementById("content-box") ||
    document.getElementById("update-button")
  ) {
    let textFieldElement = document.getElementById("content-box");
    let updateButtonElement = document.getElementById("update-button");
    textFieldElement?.remove();
    updateButtonElement?.remove();
  }
  let textbox: HTMLTextAreaElement | undefined = form!.appendChild(document.createElement("textarea"));
  textbox.id = "content-box";
  textbox.className = "form-element textbox";
  textbox.value = text;

  let updateButton: HTMLInputElement | undefined = form!.appendChild(document.createElement("input"));
  updateButton.type = "submit";
  updateButton.id = "update-button";
  updateButton.className = "form-element submit-button";
  updateButton.value = "Update";
};