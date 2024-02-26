import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas'

const config =  defineConfig({
  name: 'default',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  title: 'minimalist-portfolio-website',
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
