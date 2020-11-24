import { Request, Response } from 'express';
import { Html } from './Html';

export const renderer = (req: Request, res: Response) => {
  // Generate the html on the server
  const html = Html;
  res.status(200);
  res.send(`<!doctype html>\n${html}`);
  res.end();
};
