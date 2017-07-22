/**
 * Pa-Compute
 * Andresito de Guzman
 * 
 * Service Workers
 * v1
 */

// Cache Name
var CACHE_NAME = 'pa-compute-cache';
// Declare All Urls to Cache
var urlsToCache = [
    'index.html',
    'assets/css/materialize.min.css',
    'assets/css/styles.css',
    'assets/js/angular.min.js',
    'assets/js/app.js',
    'assets/js/jquery-3.2.1.min.js',
    'assets/js/materialize.min.js',
    'assets/fonts/roboto/Roboto-Bold.woff',
    'assets/fonts/roboto/Roboto-Bold.woff2',
    'assets/fonts/roboto/Roboto-Light.woff',
    'assets/fonts/roboto/Roboto-Light.woff2',
    'assets/fonts/roboto/Roboto-Medium.woff',
    'assets/fonts/roboto/Roboto-Medium.woff2',
    'assets/fonts/roboto/Roboto-Regular.woff',
    'assets/fonts/roboto/Roboto-Regular.woff2',
    'assets/fonts/roboto/Roboto-Thin.woff',
    'assets/fonts/roboto/Roboto-Thin.woff2'
];

// Install Cache
self.addEventListener('install',function(event){
    // Install
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache){
                return cache.addAll(urlsToCache);
            })
    );
});

// Getter
self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request)
            .then(function(response){
                if(response){
                    return response;
                }
                
                var fetchRequest = event.request.clone();

                return fetch(response).then(
                    function(response){
                        if(!response || response.status !== 200 || response.type !== 'basic'){
                            return response;
                        }

                        var responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(function(cache){
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    }
                );
            })
    );
});