'use strict';
describe('FileSystem', function () {
  var scope;
  beforeEach(angular.mock.module('Favor.FileSystemManager'));
  
  beforeEach(angular.mock.inject(function($rootScope,$controller){
  	scope = $rootScope.$new();
  	$controller('FavorFileSystemCtrl',{$scope:scope});
  })
  );

  it('should get a list of files',function(){
    scope.explorer = filesystemMock;
    expect(scope.explorer.length).toBeGreaterThan(0);  
   });

  it('should through children for folders',function(){
    scope.explorer = filesystemMock;
    scope.searchTerm='lev';
    scope.searchFiles();
    expect(scope.searchTree.length).toBe(2);
    scope.searchTerm='sec';
    scope.searchFiles();
    console.log(scope.searchTree);
    expect(scope.searchTree.length).toBe(1);
  });
});
