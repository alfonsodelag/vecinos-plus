import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas/index";

export default defineConfig({
  name: "vecinos-plus",
  title: "Vecinos Plus — CMS",
  projectId: "jdls3x4j",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
