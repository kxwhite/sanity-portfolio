import { getSkill } from "@/sanity/sanity.query";
import { SkillType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  skills: SkillType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const skills: SkillType[] = await getSkill();

  res.status(200).json({ skills });
}
