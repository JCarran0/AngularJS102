var myApp = angular.module('MyApp', ['CustomServices']);


myApp.controller('MyController', function(FileCabinet, Colors) {
  var self = this;

  var FileCab = new FileCabinet();
  self.folders = FileCab.folders;
  self.colors = Colors;

  // Set defaults
  self.newItem = {folder: "Personal"}; // default value
  self.selectedColor = 'none';


  // load default folders
  FileCab.addFolderToFileCabinet('Personal');
  FileCab.addFolderToFileCabinet('Business');
  FileCab.addFolderToFileCabinet('Family');

  // method to call FileCabinet factory, but also reset user input
  // George, is there a better way to do this?
  self.addNewItem = function(newItemObj){
    FileCab.addItemToFolder(newItemObj.folder, newItemObj.itemName);
    self.newItem.itemName = "";  // reset text input
  };
});
