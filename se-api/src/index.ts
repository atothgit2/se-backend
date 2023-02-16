import * as fs from "fs";
import * as path from "path";
// import * as multer from "multer";

// const upload = multer({ dest: "../uploads" });

export const requestFileList = async (): Promise<string> => {
  try {
    const data = await fs.promises.readdir(
      path.join(__dirname, "..", "..", "source-files")
    );
    return JSON.stringify(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const requestFileContent = async (fileId: string): Promise<any> => {
  try {
    const data = await fs.promises.readFile(
      path.join(__dirname, "..", "..", "source-files", fileId),
      "utf8"
    );
    return JSON.stringify(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const requestUpload = async () => {
  try {
      // upload.single("file")
      const test = "test"
      return test    
  } catch (err) {
    console.error(err);
  } 
};