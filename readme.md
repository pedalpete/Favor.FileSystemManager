Favor.FileSystemManager
=======================

Purpose
-------
The Favor File System Manager is an angular module for managing basic File I/O such as reading directories, opening, closing and saving files.

Requirements
------------
Angular.js >=1.2.5
Node.js >= 0.8.x


Usage 
-----

1. Include the dist/favorFileSystemManager.js file in your html.
2. Add Favor.FileSystemManager as a dependency in your Angular.js App. 

Using the FavorFileSystemCtrl
* open a directory and build it's tree structure using $scope.openFile where $scope.path is the directory to open
* open a directory branch or open a file using $scope.treeSelected in your ng-click item. If the selected item is a directory, it will get an expanded attribute set to true. If it is a file, the file will be opened.
* save as is accessed via $scope.fileSaveAs and uses $scope.savePath and $scope.fileToSave attributes to save the data to the correct location. 
* searching for text in file names is accessed via the $scope.searchFiles and searches via the $scope.searchTerm variable. 

