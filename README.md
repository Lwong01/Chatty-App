React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

# CHATTY APP

Chatter is a SPA (single-page application) using React, Websockets, HTML, CSS, UUID.

Users can change their name and start chatting with anyone who's online. They can also see how many users are online.

## Changing The User Name:
!["Changing a new user"](https://github.com/Lwong01/React/blob/master/docs/Change%20User%20name.png)

##Add New Message
!["Adding a new message"](https://github.com/Lwong01/React/blob/master/docs/Create%20New%20Message.png)

##Add An Additional User
!["Adding an additional user"](https://github.com/Lwong01/React/blob/master/docs/Add%20another%20user.png)

##Conversation between both people
!["Conversation between users"](https://github.com/Lwong01/React/blob/master/docs/Conversation%20between%20user.png)