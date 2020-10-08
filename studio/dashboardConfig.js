export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e727597b0fa889df4eba4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6ngsch5u',
                  apiId: '7ed4cea1-2d53-4bac-b59f-31f00458f252'
                },
                {
                  buildHookId: '5f7e72752224ee795430e9a8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-58deszyd',
                  apiId: '3c8c8f1c-afb2-42f8-a6a8-25d2cf999114'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ardhieb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-58deszyd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
