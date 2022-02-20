const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');

const { logger } = require('./middleware');
const {
  healthHandler,
  getAllUsersHandler,
  getOneUserHandler,
  getAllInvitationsHandler,
  createInvitationHandler,
} = require('./handlers');

const router = new Router();

router.get(
  '/health',
  logger,
  healthHandler,
);

router.get(
  '/users',
  logger,
  getAllUsersHandler,
);

router.get(
  '/users/:id',
  getOneUserHandler,
);

router.get(
  '/invitations',
  getAllInvitationsHandler,
)

router.post(
  '/invitations',
  createInvitationHandler,
);

class Server {
  app

  constructor() {
    this.app = new Koa();
    this.app
      .use(bodyparser())
      .use(router.routes());
  }

  start() {
    this.app.listen(3000, () => console.log('Server listening on port 3000'));
  }
}

const server = new Server();
server.start();
