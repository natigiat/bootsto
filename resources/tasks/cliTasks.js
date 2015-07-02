var TASKS = [
    {
    title: 'serve',
    name: 'serve',
    summary: 'Start a local development server for app dev/testing',
    args: {
      '[options]': ''
    },
    options: {
      '--consolelogs|-c': {
        title: 'Print app console logs to Ionic CLI',
        boolean: true
      },
      '--serverlogs|-s': {
        title: 'Print dev server logs to Ionic CLI',
        boolean: true
      },
      '--port|-p': 'Dev server HTTP port (8100 default)',
      '--livereload-port|-r': 'Live Reload port (35729 default)',
      '--nobrowser|-b': {
        title: 'Disable launching a browser',
        boolean: true
      },
      '--nolivereload|-d': {
        title: 'Do not start live reload',
        boolean: true
      },
      '--noproxy|-x': {
        title: 'Do not add proxies',
        boolean: true
      },
      '--address': 'Use specific address or return with failure',
      '--all|-a': {
        title: 'Have the server listen on all addresses (0.0.0.0)',
        boolean: true
      },
      '--browser|-w': 'Specifies the browser to use (safari, firefox, chrome)',
      '--browseroption|-o': 'Specifies a path to open to (/#/tab/dash)',
      '--lab|-l': {
        title: 'Test your apps on multiple screen sizes and platform types',
        boolean: true
      },
      '--nogulp': {
        title: 'Disable running gulp during serve',
        boolean: true
      },
      '--platform|-t': 'Start serve with a specific platform (ios/android)'
    },
    module: './bootsto/serve'
  }

  ];


module.exports = TASKS;