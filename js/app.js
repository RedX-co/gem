var app = angular.module("gemApp", ["firebase"]);

app.controller("GemCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://gem2.firebaseio.com/news");
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "news");
});
