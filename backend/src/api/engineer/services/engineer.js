'use strict';

/**
 * engineer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::engineer.engineer');
