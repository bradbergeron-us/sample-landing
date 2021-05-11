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
                  buildHookId: '609ac1f55136db49b080e1b0',
                  title: 'Sanity Studio',
                  name: 'sample-landing-studio',
                  apiId: '03ac04aa-093c-482d-aa39-11fc3fb089d1'
                },
                {
                  buildHookId: '609ac1f5f00508009a9682b6',
                  title: 'Landing pages Website',
                  name: 'sample-landing',
                  apiId: 'dc0f726b-1c2d-40d5-ac24-f3d79c677acc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bradbergeron-us/sample-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sample-landing.netlify.app', category: 'apps'}
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
