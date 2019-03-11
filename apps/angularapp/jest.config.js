module.exports = {
  name: 'angularapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angularapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
