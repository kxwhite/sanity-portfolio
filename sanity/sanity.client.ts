import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production',
  apiVersion: "2024-03-13",
  useCdn: false,
};

const client = createClient(config);

export default client;
