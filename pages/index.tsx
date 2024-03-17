import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Link from "next/link";
import ProfilePic from "/assets/ProfilePic.jpeg";
import { GetServerSideProps, GetStaticProps } from "next";
import { ExperienceType, PageInfoType, ProjectType, SkillType, SocialType } from "@/types";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProject";
import { fetchSocials } from "@/utils/fetchSocials";
import { urlFor } from "@/sanity.config";
import { getImageDimensions } from '@sanity/asset-utils';

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfoType;
  experiences: ExperienceType[];
  skills: SkillType[];
  projects: ProjectType[];
  socials: SocialType[];
}

export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  const firstName = pageInfo?.name.split(" ")[0];
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{`${firstName}s Portfolio`}</title>
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <Experience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contactme" className="snap-start">
        {pageInfo && <ContactMe pageInfo={pageInfo}/>}
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
             {pageInfo?.heroImage && (
              <Image
                className='w-10 h-10 rounded-full object-contain filter grayscale hover:grayscale-0 cursor-pointer'
                loader={() => urlFor(pageInfo?.heroImage).url()}
                src={urlFor(pageInfo?.heroImage).url()}
                width={getImageDimensions(urlFor(pageInfo?.heroImage).url()).width}
                height={getImageDimensions(urlFor(pageInfo?.heroImage).url()).height}
                unoptimized={true}
                priority={true}
                alt="Profile Pic"
              />
             )}
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfoType = await fetchPageInfo();
  const experiences: ExperienceType[] = await fetchExperiences();
  const skills: SkillType[] = await fetchSkills();
  const projects: ProjectType[] = await fetchProjects();
  const socials: SocialType[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // revalidate: 10
  }
}
