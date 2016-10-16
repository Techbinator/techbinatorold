import React from 'react'
import {mount} from 'react-mounter'
import {MainPage} from '../homepage/pages/MainPage.jsx'
import Login from '../homepage/pages/Login.jsx'
import Register from '../homepage/pages/Register.jsx'
import Main from '../app/layouts/Main.js'
import Dashboard from '../app/views/Dashboard'


/**
Mount homepage
**/
FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainPage)
  }
})

/**
  Mount Wrong page
**/
FlowRouter.notFound = {
  action: function() {
   FlowRouter.go('home')
  }
}

/**
Mount Login
**/
FlowRouter.route('/login', {
  name: 'login',
  action() {
    mount(Login)
  }
})

/**
Mount Register
**/
FlowRouter.route('/register', {
  name: 'register',
  action() {
    mount(Register)
  }
})

/**
Loged in user group // app
**/
var appRoutes = FlowRouter.group({
  prefix: '/app',
  name: 'app',
  triggersEnter: [function(context, redirect) {
    if( !Meteor.userId()){ // in case the user is loged in don`t show the home page
      FlowRouter.go('login')
    }
  }]
})

appRoutes.route('/', {
  name: 'dashboard',
  action() {
    mount(Main, {
      content:(<Dashboard />)
    })
  }
})
