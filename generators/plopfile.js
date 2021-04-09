module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your component description?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/ui/components/{{pascalCase name}}/index.js',
        templateFile: 'components/Component.js.hbs'
      },
      {
        type: 'add',
        path: '../src/ui/components/{{pascalCase name}}/styles.js',
        templateFile: 'components/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/ui/components/{{pascalCase name}}/test.js',
        templateFile: 'components/test.js.hbs'
      }
    ]
  })
}
