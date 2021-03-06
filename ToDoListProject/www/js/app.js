// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])



.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    
     $ionicConfigProvider.tabs.position('top');

    $stateProvider.state('task-details', {
        url: '/task-details',
        cache: false,
        templateUrl: 'templates/task-details.html',
        controller: 'DetailsCtrl'
    });


    $stateProvider.state('newTask', {
        url: '/newTask',
        cache: false,
        templateUrl: 'templates/newTask.html',
        controller: 'NewTaskController'
    });

    $stateProvider


    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.TODO', {
            url: '/TODO',
            views: {
                'tab-TODO': {
                    templateUrl: 'templates/tab-TODO.html',
                    controller: 'TODOCtrl'
                }
            }
        })
        .state('tab.completed', {
            url: '/completed',
            views: {
                'tab-completed': {
                    templateUrl: 'templates/tab-completed.html',
                    controller: 'CompletedCtrl'
                }
            }

        });



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/TODO');
});
