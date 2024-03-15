import { getExperience } from "@/sanity/sanity.query";
import { ExperienceType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  experience: ExperienceType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const experience: ExperienceType[] = await getExperience();

  res.status(200).json({ experience });
}
