import { ProjectType } from "@/types";

export const fetchProjects = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProject`);

  const data = await res.json();
  const project: ProjectType[] = data.project;

  // console.log("Fetching Project: ",project);

  return project;
}
