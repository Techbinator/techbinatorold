import React from 'react'
import {mount} from 'react-mounter'
import {HomepageLayout} from '../homepage/layout/MainLayout.jsx'
import Login from '../app/pages/Login.jsx'
import Register from '../app/pages/Register.jsx'


/**
Mount homepage
**/
FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(HomepageLayout)
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
