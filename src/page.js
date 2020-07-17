angular.module('app', ['ui.ace'])
.controller('ctrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  
   var themes = [
    "chrome",
    "clouds",
    "crimson_editor",
    "dawn",
    "dreamweaver",
    "eclipse",
    "github",
    "solarized_light",
    "textmate",
    "tomorrow",
    "xcode",
    "kuroir",
    "katzenmilch",
    "ambiance",
    "chaos",
    "clouds_midnight",
    "cobalt",
    "idle_fingers",
    "kr_theme",
    "merbivore",
    "merbivore_soft",
    "mono_industrial",
    "monokai",
    "pastel_on_dark",
    "solarized_dark",
    "terminal",
    "tomorrow_night",
    "tomorrow_night_blue",
    "tomorrow_night_bright",
    "tomorrow_night_eighties",
    "twilight",
    "vibrant_ink"
  ];
  $scope.currentTheme = 14;
  
  var modes = [
    'abap',
    'actionscript',
    'ada',
    'apache_conf',
    'asciidoc',
    'assembly_x86',
    'autohotkey',
    'batchfile',
    'c9search',
    'c_cpp',
    'cirru',
    'clojure',
    'cobol',
    'coffee',
    'coldfusion',
    'csharp',
    'css',
    'curly',
    'd',
    'dart',
    'diff',
    'dockerfile',
    'dot',
    'dummy',
    'dummysyntax',
    'eiffel',
    'ejs',
    'elixir',
    'elm',
    'erlang',
    'forth',
    'ftl',
    'gcode',
    'gherkin',
    'gitignore',
    'glsl',
    'golang',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haxe',
    'html',
    'html_ruby',
    'ini',
    'io',
    'jack',
    'jade',
    'java',
    'javascript',
    'json',
    'jsoniq',
    'jsp',
    'jsx',
    'julia',
    'latex',
    'less',
    'liquid',
    'lisp',
    'livescript',
    'logiql',
    'lsl',
    'lua',
    'luapage',
    'lucene',
    'makefile',
    'markdown',
    'matlab',
    'mel',
    'mushcode',
    'mysql',
    'nix',
    'objectivec',
    'ocaml',
    'pascal',
    'perl',
    'pgsql',
    'php',
    'powershell',
    'praat',
    'prolog',
    'properties',
    'protobuf',
    'python',
    'r',
    'rdoc',
    'rhtml',
    'ruby',
    'rust',
    'sass',
    'scad',
    'scala',
    'scheme',
    'scss',
    'sh',
    'sjs',
    'smarty',
    'snippets',
    'soy_template',
    'space',
    'sql',
    'stylus',
    'svg',
    'tcl',
    'tex',
    'text',
    'textile',
    'toml',
    'twig',
    'typescript',
    'vala',
    'vbscript',
    'velocity',
    'verilog',
    'vhdl',
    'xml',
    'xquery',
    'yaml',
];
  
  $scope.value = '<html>';
  $http.get('https://rawgit.com/mrdoob/three.js/master/examples/webgl_lines_dashed.html').
  success(function(data, status, headers, config) {
    $scope.value = data;
  }).
  error(function(data, status, headers, config) {
    $scope.value = data;
  });
  
  $scope.aceLoaded = function (_editor) {
    
    _editor.setFontSize(14);
    
  }
  
  $scope.aceChanged = function (_editor) {
    
  }
  
  var editor = function() {
    this.theme = themes[$scope.currentTheme];
    this.mode = 'html';
    this.opacity = 65;
    this.useWrapMode = true;
    this.gutter = true;
    this.splitMode = false;
    this.themeCycle = true;
  };

  $scope.editor = new editor();
  var gui = new dat.GUI();
  
  var opacityCtrl = gui.add($scope.editor, 'opacity', 0, 100);
  opacityCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeCycle = gui.add($scope.editor, 'themeCycle', true);
  themeCycle.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeController = gui.add($scope.editor, 'theme', themes).listen();
  themeController.onChange(function(value) {
    $scope.$apply();
  });
  
  var modeController = gui.add($scope.editor, 'mode', modes);
  modeController.onChange(function(value) {
    $scope.$apply();
  });
  
  var useWrapModeCtrl = gui.add($scope.editor, 'useWrapMode', true);
  useWrapModeCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var gutterCtrl = gui.add($scope.editor, 'gutter', false);
  gutterCtrl.onChange(function(value) {
    $scope.$apply();
  });
  
  var splitMode = gui.add($scope.editor, 'splitMode', false);
  splitMode.onChange(function(value) {
    $scope.$apply();
  });
  
  var themeCycle = function() {
      $timeout(function(){
        if($scope.editor.themeCycle) {
          $scope.currentTheme = $scope.currentTheme + 1;
          if($scope.currentTheme < themes.length) {
            $scope.editor.theme = themes[$scope.currentTheme];
          } else {
            $scope.currentTheme = 0;
            $scope.editor.theme = themes[$scope.currentTheme];
          }
        }
        themeCycle();
      }, 500);
  }
 // themeCycle();
  
  
}]);