import { SocialType } from "@/types";

export const fetchSocials = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: SocialType[] = data.socials;

  // console.log("Fetching socials: ",socials);

  return socials;
}
