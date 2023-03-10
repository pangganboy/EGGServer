'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async siteTitle() {
    const { ctx } = this;
    ctx.body = '你是傻逼吧';
  }
}

module.exports = HomeController;
