import { ExperienceType } from "@/types";

export const fetchExperiences = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

  const data = await res.json();
  const experience: ExperienceType[] = data.experience;

  // console.log("Fetching Experience: ",experience);

  return experience;
}
