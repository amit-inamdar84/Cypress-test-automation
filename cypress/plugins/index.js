/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin");
const percyHealthCheck = require("@percy/cypress");

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('task',percyHealthCheck);
}
