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

  const fileContents = await fs.readFile(
    jsonDirectory + "/" + files[0],
    "utf8"
  );

  res.status(200).json(fileContents);
}
