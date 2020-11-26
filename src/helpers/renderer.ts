import { Request, Response } from 'express';
import { Html } from './Html';
import { renderRoutes } from './';
import { Routes } from '../client/Routes';

export const renderer = (req: Request, res: Response) => {
  // Generate the html on the server
  const html = Html(renderRoutes(Routes, req));
  res.status(200);
  res.send(`<!doctype html>\n${html}`);
  res.end();
};
