const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('file:preprocessor', cucumber());
  on('task',{
    failed: require('cypress-failed-log/src/failed')
  })
}
