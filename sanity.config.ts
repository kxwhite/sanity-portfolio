import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import React from 'react'
import client from './sanity/sanity.client'
import imageUrlBuilder from '@sanity/image-url'

export default defineConfig({
  name: 'sanity-portfolio',
  title: 'Sanity Portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production',

  plugins: [structureTool(), visionTool()],

  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH || '/studio',

  schema: {
    types: schemaTypes,
  },
})

export const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
