import * as path from "path";
import * as fs from "fs";
// TODO: ez miért nem kell már?
// import * as multer from 'multer';
// const upload = multer({ dest: '../uploads' });

export const requestFileList = async (path: fs.PathLike): Promise<string[]> => {
  try {
    const data = await fs.promises.readdir(path);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const requestFileContent = async (fileId: string): Promise<string> => {
  try {
    const data = await fs.promises.readFile(
      path.join(__dirname, "..", "..", "uploads", fileId)
    );
    return data.toString();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const requestUpload = async (
  originalFileName: string,
  newFileName: string,
  filePath: string,
  metadata: string
) => {
  try {
    fs.rename(`${filePath}/${originalFileName}`, `${filePath}/${newFileName}`, (err) => {
      if (err) throw err;
    });
    fs.writeFile(`${filePath}/${originalFileName}.json`, metadata, (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

// TODO: interfacebe szervezni, több helyen is szerepel
export const requestModify = async (id: string, newContent: { fileContent: string }) => {
  try {
    fs.writeFile(path.join(__dirname, "..", "..", "uploads", id), newContent.fileContent, (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

export const requestDeletion = async (id: string) => {
  try {
    fs.rm(path.join(__dirname, "..", "..", "uploads", id), { recursive: true }, (err) => {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};
