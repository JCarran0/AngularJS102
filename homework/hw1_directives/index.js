var myApp = angular.module('MyApp', []);


myApp.controller('MyController', function() {
  var self = this;

  self.headerTitle = "Welcome To Jared's First Homework";
  self.colorTitle = "Select theme:";
  self.foldersTitle = "My folders:";
  self.newItem = {folder: "Personal"} // default value

  self.colors = ['red', 'blue', 'green', 'orange', 'purple', 'none'];
  self.selectedColor = 'none';

  self.folders = [
  	{ 
  		name: 'Personal',
  		items: ['item1','item2']
  	},
  	{
  		name: 'Work',
  		items: ['item1','item2']
  	},
  	{
  		name: 'Trip',
  		items: ['item1','item2']
  	}
  ];

  self.addNewItem = function(newItemObj){
  	console.log(newItemObj);
  	for (var i=0; i<self.folders.length; i++){
  		var folder = self.folders[i];
  		if (folder.name === newItemObj.folder){
			folder.items.push(newItemObj.itemName);
			self.newItem.itemName = ""; // reset the text input 
			return;
  		}
  	}
	throw new Error("Folder " + newItemObj.folder + " not found");
  }
});