import { getPageInfo } from "@/sanity/sanity.query";
import { PageInfoType } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  pageInfo: PageInfoType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const pageInfo: PageInfoType[] = await getPageInfo();

  res.status(200).json({ pageInfo });
}
