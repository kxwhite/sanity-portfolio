import { SkillType } from "@/types";

export const fetchSkills = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`);

  const data = await res.json();
  const skills: SkillType[] = data.skills;

  // console.log("Fetching skills: ",skills);

  return skills;
}
