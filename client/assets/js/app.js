(function() {
  'use strict';

  var app = angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }
  // framily feed controller
app.controller('FramilyController',function(){
  this.posts = items;
});
var items =[ 
  {
    id:[1,1],
  name: "Username",
  date: "16 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.Lorem",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "assets/img/affinity.jpeg"
    } 
  },
  {
    id:[1,2],
  name: "Username2",
  date: "18 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-2.jpeg",
    content: "assets/img/home-banner-01.jpg"
    }
  },
  {
    id:[1,3],
  name: "Username3",
  date: "22 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-2.jpeg",
    content: "assets/img/surly.jpeg"
    }
  },
  {
    id:[1,4],
  name: "Username4",
  date: "28 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "assets/img/cinelli-front.jpeg"
    }
  },
  {
    id:[1,5],
  name: "Username5",
  date: "34 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[1,6],
  name: "Username6",
  date: "36 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  }
  ];

app.controller('NewsController',function(){
  this.posts = newsItems;
});
var newsItems =[ 
  {
    id:[2,1],
  name: "Username",
  date: "16 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    } 
  },
  {
    id:[2,2],
  name: "CNN",
  date: "18 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/cnn.png",
    content: "assets/img/people.jpeg"
    }
  },
  {
    id:[2,3],
  name: "Username3",
  date: "22 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/cnn.png",
    content: "assets/img/video.jpg"
    }
  },
  {
    id:[2,4],
  name: "Username4",
  date: "28 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[2,5],
  name: "Username5",
  date: "34 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[2,6],
  name: "Username6",
  date: "36 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  }
  ];

app.controller('interestController',function(){
  this.posts = interestItems;
});
var interestItems =[ 
  {
    id:[3,1],
  name: "Username",
  date: "16 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    } 
  },
  {
    id:[3,2],
  name: "Username2",
  date: "18 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:3,
  name: "Username3",
  date: "22 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[3,4],
  name: "Username4",
  date: "28 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[3,5],
  name: "Username5",
  date: "34 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[3,6],
  name: "Username6",
  date: "36 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  }
  ];
app.controller('profileController',function(){
  this.account = userAccount;
  this.posts=userPosts;
  this.books = books;
});
var books = 
  [
    {
      name: "book one"
    },
    {
      name: "book two"
    },
    {
      name: "book three"
    },
  ] 
var userAccount=
  {
    name: "user account",
    joined:"july, 2015",
    profileImage:"assets/img/portrait-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis doloribus neque eaque reprehenderit ipsum, animi nesciunt dolores debitis velit repellendus ad culpa, totam veritatis tenetur. Quam assumenda, non autem.",
    email:"email123@email.com",
  };
var userPosts =[ 
  {
    id:[1,1],
  name: "Username",
  date: "16 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.Lorem",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "assets/img/affinity.jpeg"
    } 
  },
  {
    id:[1,2],
  name: "Username2",
  date: "18 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-2.jpeg",
    content: "assets/img/home-banner-01.jpg"
    }
  },
  {
    id:[1,3],
  name: "Username3",
  date: "22 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-2.jpeg",
    content: "assets/img/surly.jpeg"
    }
  },
  {
    id:[1,4],
  name: "Username4",
  date: "28 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "assets/img/cinelli-front.jpeg"
    }
  },
  {
    id:[1,5],
  name: "Username5",
  date: "34 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "assets/img/portrait-1.jpg",
    content: "http://placehold.it/300x225"
    }
  },
  {
    id:[1,6],
  name: "Username6",
  date: "36 hrs",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ab, temporibus. Harum voluptatem praesentium nulla ratione iste mollitia eos, numquam! Quis, iste quibusdam facere inventore. Nostrum cupiditate hic, laboriosam quas.",
  images:
    {
    profile: "http://placehold.it/80x80",
    content: "http://placehold.it/300x225"
    }
  }
  ];

})();
