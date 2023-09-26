var app = new Framework7({
  el: '#app',
  name: 'UnTroll',
  panel: {
    swipe: true,
  },

  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
});

var mainView = app.views.create('.view-main');
