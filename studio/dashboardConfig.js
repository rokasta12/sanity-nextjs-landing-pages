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
                  buildHookId: '60783025eec2e80d6d1608eb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qj3vucyh',
                  apiId: '410af94d-f096-4912-a502-b0f2eb5c2c65'
                },
                {
                  buildHookId: '60783025283f40d9f0f99980',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-et4vheef',
                  apiId: 'c2297a48-0224-498e-a908-d677e2b90fe0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rokasta12/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-et4vheef.netlify.app', category: 'apps'}
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
