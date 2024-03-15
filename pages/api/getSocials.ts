import { getSocial } from "@/sanity/sanity.query";
import { SocialType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  socials: SocialType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const socials: SocialType[] = await getSocial();

  res.status(200).json({ socials });
}
