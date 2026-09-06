// /**
// * This configuration file lets you run `$ sanity [command]` in this folder
// * Go to https://www.sanity.io/docs/cli to learn more.
// **/
// import { defineCliConfig } from 'sanity/cli'
//
// const projectId = process.env.oqwjd5f1
// const dataset = process.env.production
//
// export default defineCliConfig({ api: { projectId, dataset } })


import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
    api: {
        projectId: "oqwjd5f1",
        dataset: "production",
    },

    typegen: {
        path: "./**/*.{ts,tsx,js,jsx}",
        schema: "./sanity/extract.json",
        generates: "./sanity/types.ts",
        overloadClientMethods: true,
    },
});