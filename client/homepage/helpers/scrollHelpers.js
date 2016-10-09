import { $ } from 'meteor/jquery'
import 'pace'
// Highlight the top nav as scrolling
export function topNavScrolling(){
  $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 80
  })
}

// Page scrolling feature
export function pageScrolling(){

  $('a.page-scroll').bind('click', function(event) {
      var link = $(this)
      $('html, body').stop().animate({
          scrollTop: $(link.attr('href')).offset().top - 70
      }, 500)
      event.preventDefault()
  })
}

export class cbpAnimatedHeader {

  constructor(){
    this.docElem = document.documentElement
    this.header = $( '.navbar-default' )
    this.didScroll = false
    this.changeHeaderOn = 200
    this.init()
  }



    init() {
        window.addEventListener( 'scroll', () => {
            if( !this.didScroll ) {
                this.didScroll = true
                setTimeout( this.scrollPage(), 250 )
            }
        }, false )
    }

    scrollPage() {
        var sy = this.scrollY()
        if ( sy >= this.changeHeaderOn ) {
            this.header.addClass('navbar-scroll' )
        }
        else {
            this.header.removeClass( 'navbar-scroll' )
        }
        this.didScroll = false
    }

    scrollY() {
        return window.pageYOffset || this.docElem.scrollTop
    }

};
