'use strict';
angular.module('Favor.FileSystemManager',[])
.factory('FavorFileSystemModel',function($rootScope){
	var tree_list = [];
	var FileSystemObj = {};

	function checkFile(path){
		return fs.lstatSync(path).isDirectory();
	}
	
	function get_folder(path, tree, folder_get){
		fs.readdir(path, function(err,files){
			if (err) return console.log(err);

			files.forEach( function (file,idx){
				var file_path = path+'/'+file;
				var is_directory = checkFile(file_path);
				tree.push(treeEntry(file, file_path,is_directory));
				if(is_directory){
					get_folder(path+'/'+file, tree[idx].children , folder_get++);
				}
			});
		});
		folder_get--;
		return;
	}

	function treeEntry(entry,path,directory){
		return { label : entry,
				 path: path,
				 isDirectory: directory,
				 children: []}
	}

	FileSystemObj.get = function(path){
				var tree = [treeEntry(path.replace(/^.*[\\\/]/, ''),path,checkFile(path))];	
				get_folder(path, tree[0].children, 1);
				tree_list.push(tree);
				FileSystemObj.viewFolders(true);
				return tree;
	}
	
	FileSystemObj.tree_list = function(){
		return tree_list;
	}

	var folders_visible=false;

	function folderVisibility(visible){
		if(!visible){
			folders_visible = !folders_visible;
		} else {
			folders_visible = visible;
		}	
	}
	FileSystemObj.viewFolders = function(visible){
		folderVisibility(visible);
		$rootScope.$broadcast('viewFoldersChanged');
	}

	FileSystemObj.folderVisibility = function(){
		return folders_visible;
	}


	FileSystemObj.saveFile = function(path, file){
		fs.writeFile(path, file.content , function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		      	file.last_save=file.content;
		        if(file.path===''){
		        	file.path=path;
		        	file.name=path.replace(/^.*[\\\/]/, '');
		        }
		        if(file.close_after_save) $rootScope.$broadcast('closeFile',file);
		    }
		}); 
	}

	return FileSystemObj;
})
.controller('FavorFileSystemCtrl',function($scope,FavorFileSystemModel){
			
	$scope.explorer=[];
	$scope.searchTree=[];
	$scope.path='';
	function returnFiles(tree){
		$scope.$apply(function(){
			$scope.explorer=tree;
		});
	}

	$scope.openFile = function(path){
			var tree = FavorFileSystemModel.get(path);
			returnFiles(tree);
	};

	
	$scope.treeSelected = function(branch){
		
		if(branch.isDirectory){
			$scope.$apply(function(){
				branch.expanded= !branch.expanded;
			});
		}
		if(!branch.isDirectory){
			FavorFileSystemModel.openFile(branch.path);
		}
	}

	$scope.fileSaveAs = function(){
		FavorFileSystemModel.saveFile($scope.savePath, $scope.fileToSave);
		$scope.savePath='';
		$scope.fileToSave='';
	}

	function searchBranch(branch){
		if(branch.label.toLowerCase().indexOf($scope.searchTerm.toLowerCase()) != -1){
			console.log(branch.label,$scope.searchTerm,branch.label.toLowerCase().indexOf($scope.searchTerm.toLowerCase()));
			$scope.searchTree.push(branch);
		}
		if(branch.children.length>0){
			for(var i=0;i<branch.children.length;i++){
				searchBranch(branch.children[i]);
			}
		}
	}

	function emptySearch(){
		$scope.searchTree=[];
		return;
	}
	$scope.searchFiles = function() {
		emptySearch();
      if (!$scope.searchTerm) return true;

      	for(var b=0;b<$scope.explorer.length;b++){
      		searchBranch($scope.explorer[b]);
      	}
  	};

	$scope.$on('saveAs', function(event,file){
		$scope.fileToSave = file;
		document.getElementById('saveFile').click();
	});


	$scope.$on('viewFoldersChanged',function(){
		$scope.foldersVisible = FavorFileSystemModel.folderVisibility();
	});
});