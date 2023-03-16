import express from "express";
import * as path from "path"
import { requestFileList, requestFileContent, requestUpload, requestModify, requestDeletion } from "se-api";

export const getFileList = async (_req: express.Request, res: express.Response, _next: Function) => {
  const data : any = await requestFileList(path.join(__dirname, "..", "..", "..", "uploads"));
  res.status(200).send(JSON.stringify(data))
};

export const getFileContent = async (req: express.Request, res: express.Response, _next: Function) => {
  let id: string = req.params.id;
  let data: string = await requestFileContent(id);
  res.status(200).send(data);
};

export const uploadFile = async (req: express.Request, res: express.Response, _next: Function)=> {
  await requestUpload(`${req.file?.filename}`,`${req.file?.filename}.srt`, './../uploads', JSON.stringify(req.body))
  res.status(200).send(`New file(s) created!`);
}

export const modifyFile = async (req: express.Request, res: express.Response, _next: Function)=> {
  let id: string = req.params.id;
  // TODO: interfacebe szervezni, több helyen is szerepel
  let data : {fileContent: string} = req.body;
  await requestModify(id, data);
  res.status(200).send(`Content modified!`);
}

export const deleteFile = async (req: express.Request, res: express.Response, _next: Function)=> {
  let id: string = req.params.id;
  requestDeletion(id);
  res.status(200).send(`File removed!`);
}