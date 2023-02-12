import express from "express";
import * as fs from "fs";
import * as path from "path";

const HAPPY_THRESHOLD = 0.3;

export function MoodController(_req: express.Request, res: express.Response) {
  const indicator = Math.random();
  if (indicator > HAPPY_THRESHOLD) {
    res.json({
      indicator: indicator,
      mood: "happy",
      text: "I am feeling glad today!",
    });
  } else {
    res.json({
      indicator: indicator,
      mood: "sad",
      text: "I am not feeling well today :sad_face:",
    });
  }
}

export const getFileList = async (_req: express.Request, res: express.Response, _next: Function) => {
  const data : any = await requestFileList();
  res.status(200).send(JSON.stringify(data))
};

// TODO - move to service layer
const requestFileList = async (): Promise<string> => {
  try {
    const data = await fs.promises.readdir(path.join(__dirname, "..", "..", "..", "uploads"));
    return JSON.stringify(data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};