var config = {	
	"bootstrap":{
		"name": "bootstrap",
		"version":"3.0.0",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"styles/bootflat/bootstrap/bootstrap.min.css"
		],
		"dependencies" :{
		}
	},
	"font-awesome":{
		"name": "font-awesome",
		"version":"4.0.0",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"styles/bootflat/css/font-awesome.min.css"
		],
		"dependencies" :{
		}
	},
	"bootflat":{
		"name": "bootflat",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"styles/bootflat/css/bootflat.css"
		],
		"dependencies" :{
			"bootstrap": ">=3.0.x",
			"font-awesome" :">=4.0.x"
		}
	},
	"bootflat-extensions":{
		"name": "bootflat-extensions",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"styles/bootflat/css/bootflat-extensions.css"
		],
		"dependencies" :{
			"bootflat": ">=1.0.x",
		}
	},
	"bootflat-square":{
		"name": "bootflat-square",
		"version":"1.0.1",
		"jsPaths": [
		],
		"templatePaths": [
		],
		"cssPaths": [
			"styles/bootflat/css/bootflat-square.css"
		],
		"dependencies" :{
			"bootflat": ">=1.0.x",
		}
	},
	"jquery": {
		"name":"jquery",
		"version":"2.0.3",
		"jsPaths":[
			"bower_components/jquery/jquery.min.js"
		],
		"dependencies": {
		}
	},
	"jquery-ui":{
		"name": "jquery-ui",
		"version":"1.10.3",
		"jsPaths":[
			"bower_components/jquery-ui/ui/minified/jquery-ui.min.js"
		],
		"dependencies":{

		}
	},
	"angular":{
		"name": "angular.js",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular/angular.js"
		],
		"dependencies":{
		}
	},
	"ngRoute":{
		"name":"angular-route",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-route/angular-route.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ngResource":{
		"name": "angular-resource",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-resource/angular-resource.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"ngSanitize":{
		"name": "angular-sanitize",
		"version":"1.2.5",
		"jsPaths":[
			"bower_components/angular-sanitize/angular-sanitize.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
	"Favor.FileSystemManager": {
		"name":"Favor.FileSystemManager",
		"version":"0.0.1",
		"jsPaths":[
			"../dist/favorFileSystem.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true
	},
    "angularBootstrapNavTree":{
		"name":"angularBootstrapNavTree",
		"version":"0.1.6",
		"jsPaths":[
		"vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js"
		],
		"dependencies":{
			"angular":">=1.2.x"
		},
		"angularModule":true

	}

}
