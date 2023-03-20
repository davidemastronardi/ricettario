'use strict';

/**
 * ricette service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ricette.ricette');
