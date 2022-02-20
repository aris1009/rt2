const { BadRequestError } = require("./errors");

const getId = () => (Math.random() + 1).toString(36).substring(2);

const users = [
  { id: 'user1', name: 'Jane Doe', email: 'jd28@foo.io', password: 'doe234', workspaces: ['ws1'] },
  { id: 'user2', name: ' Tychon Firenze ', email: 'tychon@bar.com', password: 'tychon85', workspaces: ['ws2'] },
]
const invitations = [];

class UserService {
  getAll() {
    return users;
  }

  getById(id) {
    return users.find(u => u.id === id);
  }
}

class InvitationService {
  getAll() {
    return users;
  }

  create(inviterId, email) {
    const inviter = userService.getById(inviterId);
    if (!inviter) {
      throw new BadRequestError('Inviter does not exist')
    }

    const invitation = {
      inviter,
      email,
      id: getId()
    }
    invitations.push(invitation);

    return invitation;
  }
}


const userService = new UserService();
const invitationService = new InvitationService();

module.exports = {
  userService,
  invitationService
}
