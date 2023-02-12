import * as fs from "fs";
import * as path from "path";

export const requestFileList = async (): Promise<string> => {
  try {
    const data = await fs.promises.readdir(path.join(__dirname, "..", "..", "uploads"));
    return JSON.stringify(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};