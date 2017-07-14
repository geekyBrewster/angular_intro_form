console.log('Up and Atom!');

var fabForm = angular.module('fabForm', []);

fabForm.controller('FormController', function(){
  var form = this;

  form.allMessages = [];  // array container for all the messages appended to bottom of page
  form.object = {};    // single message as an object {name: name, message: message} to be added to array

  form.addInfo = function(name, message){
    form.object.name = name;
    form.object.message = message;
      console.log(form.object);
    //angular.copy() makes a copy of the data-bound data in the array & then severs the data binding
    // if you don't do this, the objects in the array retain their data binding causing all array
    // elements to be updated when you add a new message to the array
    form.allMessages.push(angular.copy(form.object));
      console.log(form.allMessages);
  };

  form.delete = function(index) {
  form.allMessages.splice(index, 1);
};

});
