var MyApp = angular.module('CustomServices', []);

MyApp.factory('TestFactory', function(){

	var TestFactory = function(first, last){
		this.first = first;
		this.last = last;
	}

	return TestFactory;
});

MyApp.factory('FileCabinet', function(){

	var FileCabinet = function(){
		this.folders = [];
	}

	FileCabinet.prototype.addItemToFolder = function(folder, item) {		
		// find the desired folder and push item into it
		for (var i=0; i<this.folders.length; i++){
			if (this.folders[i].name === folder){
				this.folders[i].items.push(item);
				return;
			}
		}
	};

	FileCabinet.prototype.addFolderToFileCabinet = function(folder){		
		this.folders.push({
			name: folder,
			items: []
		});
	};

	return FileCabinet;
})


// MyApp.value('Folders', [
//   	{ 
//   		name: 'Personal',
//   		items: ['item1','item2']
//   	},
//   	{
//   		name: 'Work',
//   		items: ['item1','item2']
//   	},
//   	{
//   		name: 'Trip',
//   		items: ['item1','item2']
//   	}
//   ]);

  MyApp.value('Colors', ['red', 'blue', 'green', 'orange', 'purple', 'none']);