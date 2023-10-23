exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://github.com',
      show: true,
      windowSize: '1615x900'
    }
  },
  include: {
    I: './steps_file.js',
    githubPage: "./pages/github.js",
    loginPage: "./pages/loginPage.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js', './step_definitions/loginSteps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'demo-applitools-codeceptjs'
}