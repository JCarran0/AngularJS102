var myApp = angular.module('MyApp', ['CustomServices']);


myApp.controller('MyController', function(TestFactory, FileCabinet, Colors) {
  var self = this;

  self.headerTitle = "Welcome To Jared's First Homework";
  self.colorTitle = "Select theme:";
  self.foldersTitle = "My folders:";
  self.newItem = {folder: "Personal"} // default value

  self.colors = Colors;
  self.selectedColor = 'none';
  var FileCab = new FileCabinet
  self.folders = FileCab.folders;

  // load default folders
  FileCab.addFolderToFileCabinet('Personal');
  FileCab.addFolderToFileCabinet('Business');
  FileCab.addFolderToFileCabinet('Family');

  // method to call FileCabinet factory, but also reset user input
  // George, is there a better way to do this?
  this.addNewItem = function(newItemObj){
    FileCab.addItemToFolder(newItemObj.folder, newItemObj.itemName);
    self.newItem.itemName = "";  // reset text input
  }

  self.test = new TestFactory('jared', 'carrano');
});