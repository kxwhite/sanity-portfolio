import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPageInfo() {
  return client.fetch(
    groq`*[_type == "pageInfo"][0]{
      _id,
      _createdAt,
      _rev,
      _updatedAt,
      name,
      role,
      heroImage,
      backgroundInformation,
      profilePic,
      phoneNumber,
      email,
      address,
      socials
    }`
  );
}

export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"] | order(dateStarted desc, dateEnded){
      _id,
      _createdAt,
      _rev,
      _updatedAt,
      jobTitle,
      companyImage,
      company,
      dateStarted,
      dateEnded,
      isCurrentlyWorkingHere,
      technologies[]->,
      points
    }`
  );
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"] | order(dateStarted desc){
      _id,
      _createdAt,
      _rev,
      _updatedAt,
      title,
      image,
      summary,
      technologies[]->,
      linkToBuild
    }`
  );
}

export async function getSkill() {
  return client.fetch(
    groq`*[_type == "skill"]{
      _id,
      _createdAt,
      _rev,
      _updatedAt,
      title,
      progress,
      image
    }`
  );
}

export async function getSocial() {
  return client.fetch(
    groq`*[_type == "social"]{
      _id,
      _createdAt,
      _rev,
      _updatedAt,
      title,
      url
    }`
  );
}
