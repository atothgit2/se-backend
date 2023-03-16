export const populateTable = (filenames: string[], tableId: string) => {
  let table = document.getElementById(tableId) as HTMLTableElement;
  let tbody: HTMLTableSectionElement | undefined = table?.getElementsByTagName("tbody")[0];

  if (filenames == null) {
    let cell: HTMLTableCellElement | undefined = tbody?.insertRow(-1).insertCell(0);
    cell.colSpan = table?.rows[0].cells.length;
    cell.innerText = "No data!";
    cell.style.textAlign = "center";
  } else {
    for (let i = 0; i < filenames.length; i++) {
      let currentFileName = filenames[i];
      createNewTableRow("files-table", currentFileName);
      createButton("view-button", tbody.rows[i], "View", currentFileName.slice(0, -4));
      createButton("delete-button", tbody.rows[i], "Delete", currentFileName.slice(0, -4));
    }
  }
};

export const createTextBox = (text: string, fileId: string) => {
  // if (document.getElementById('content-box') || document.getElementById('update-button')) {
  //   removeTextBox();
  // }

  let form: HTMLElement | null = document.getElementById("upload-form");

  let textbox: HTMLTextAreaElement | undefined = form!.appendChild(
    document.createElement("textarea")
  );
  textbox.id = "content-box";
  textbox.className = "textbox";
  textbox.value = text;

  let updateButton: HTMLInputElement | undefined = form!.appendChild(
    document.createElement("input")
  );
  updateButton.type = "button";
  updateButton.id = fileId;
  updateButton.className = "update-button";
  updateButton.value = "Update";

  let cancelButton: HTMLInputElement | undefined = form!.appendChild(
    document.createElement("input")
  );
  cancelButton.type = "button";
  cancelButton.id = "cancel-button";
  cancelButton.className = "cancel-button";
  cancelButton.value = "Cancel";

  let testButton: HTMLInputElement | undefined = form!.appendChild(document.createElement("input"));
  testButton.type = "button";
  testButton.id = "test-button";
  testButton.className = "test-button";
  testButton.value = "Test";

  document.getElementById("cancel-button")!.onclick = () => {
    removeTextBox();
  };
};

const createNewTableRow = (tableId: string, filename: string) => {
  let table = document.getElementById(tableId) as HTMLTableElement;
  let body: HTMLTableSectionElement | undefined = table.getElementsByTagName("tbody")[0];
  let row: HTMLTableRowElement | undefined = body.insertRow(-1);

  for (let j = 0; j < table.rows[0].cells.length; j++) {
    let cell = row.insertCell(j);
    let columnHeader = document.querySelectorAll(".table-header")[j].id;

    switch (columnHeader) {
      case "filename":
        cell.className = "tg-cell filename";
        cell.innerHTML += filename;
        cell.id = filename.slice(0, -4);
        break;
      // TODO metaadatokat kiolvasni
      case "id":
        cell.className = "tg-cell id";
        cell.innerHTML += "id";
        cell.id = filename.slice(0, -4);
        break;
      case "title":
        cell.className = "tg-cell title";
        cell.innerHTML += "title";
        cell.id = filename.slice(0, -4);
        break;
      case "imdb":
        cell.className = "tg-cell imdb";
        cell.innerHTML += "imdb";
        cell.id = filename.slice(0, -4);
        break;
      case "actions":
        cell.className = "tg-cell actions";
        cell.id = filename.slice(0, -4);
        break;
    }
  }
};

const createButton = (className: string, row: HTMLTableRowElement, buttonName: string, buttonId: string) => {
  const button = row.cells[4].appendChild(document.createElement("input"));
  button.type = "button";
  button.className = className;
  button.value = buttonName;
  button.id = buttonId;
};

const removeTextBox = () => {
  document.getElementById("content-box")?.remove();
  document.getElementsByClassName("update-button")[0]?.remove();
  document.getElementById("cancel-button")?.remove();
  document.getElementById("test-button")?.remove();
};
