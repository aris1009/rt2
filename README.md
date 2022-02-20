Welcome.

Run `npm i` to install dependencies after cloning the repository.  
Run `npm start` to start the server. Nodemon is included for convenience.

You can create an invitation with following command:
```bash
curl localhost:3000/invitations -H 'content-type: application/json' -d '{"inviterId":"user1","email":"aa@asdf.com"}'
```
