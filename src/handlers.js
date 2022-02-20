const { userService, invitationService } = require("./services");

function healthHandler(ctx) {
  ctx.status = 200;
  ctx.body = 'OK';
}

function getAllUsersHandler(ctx) {
  ctx.body = userService.getAll();
}

function getOneUserHandler(ctx) {
  const { id } = ctx.params;
  if (!id) {
    ctx.throw(400, 'Invalid user id')
  }

  ctx.body = userService.getById(id);
}

function getAllInvitationsHandler(ctx) {
  return invitationService.getAll();
}

function createInvitationHandler(ctx) {
  try {
    const { inviterId, email } = ctx.request.body;
    ctx.assert(inviterId, 400, 'Invalid Inviter id')
    ctx.assert(email, 400, 'Invitee\'s email can not be empty')

    const invitation = invitationService.create(inviterId, email);
    ctx.body = invitation;
  } catch (e) {
    ctx.throw(e.status || 500, e.message || 'Something went wrong. Please try again later')
  }
}


module.exports = {
  healthHandler,
  getAllUsersHandler,
  getOneUserHandler,
  getAllInvitationsHandler,
  createInvitationHandler,
}