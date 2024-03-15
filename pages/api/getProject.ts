import { getProject } from "@/sanity/sanity.query";
import { ProjectType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  project: ProjectType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const project: ProjectType[] = await getProject();

  res.status(200).json({ project });
}
