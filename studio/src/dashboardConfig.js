export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c85e6d97efebb6952a031f",
                  title: "Sanity Studio",
                  name: "mark-refined-blog-studio",
                  apiId: "3569ac8a-b2ca-476b-8ddf-4b982e4e3da5",
                },
                {
                  buildHookId: "60c85e6d1466adcfbdf8da49",
                  title: "Blog Website",
                  name: "mark-refined-blog",
                  apiId: "b8226613-0c59-4a7b-a3ac-b8fa56f7272e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/wmmak888/mark-refined-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://mark-refined-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
