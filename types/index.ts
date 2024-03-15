export type PageInfoType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  name: string,
  role: string,
  heroImage: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  },
  backgroundInformation: string,
  profilePic: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  },
  phoneNumber: string,
  email: string,
  address: string,
  socials: SocialType[],
};

export type ExperienceType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  jobTitle: string,
  companyImage: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  },
  company: string,
  dateStarted: Date,
  dateEnded: Date,
  isCurrentlyWorkingHere: boolean,
  technologies: TechnologyType[],
  points: string[]
};

export type TechnologyType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string,
  progress: number,
  image: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  }
}

export type ProjectType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string,
  image: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  },
  summary: string,
  technologies: TechnologyType[],
  linkToBuild: string
};

export type SkillType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string,
  progress: number,
  image: {
    asset: {
      _ref: string,
      _type: "reference",
    }
  }
};

export type SocialType = {
  _id: string,
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  title: string,
  url: string
}
