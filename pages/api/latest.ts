import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "result");
  let files = await fs.readdir(jsonDirectory);

  files = files.sort((x, y) => y.localeCompare(x));

  res.status(200).json(files[0].split(".")[0]);
}
