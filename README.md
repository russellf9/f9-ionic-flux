# Magic Squares Mobile

## Project Introduction

This project is a continuation of [Magic Squares](https://github.com/russellf9/magic-squares) focusing on creating the Magic Squares game for iOS using Ionic.

## Description

A logic puzzle where the objective is to solve a 3×3 magic square.

## Keywords

logic, puzzle, maths, game

( The description and keywords are for [iTunes connect](itunesconnect.apple.com) )


### Icon

![Icon](/design/ios/AppIcon.appiconset/icon-1024.png?raw=true "Magic Squares Icon")

### Screenshot

![Screenshot](/design/screenshot-640x1096.jpg?raw=true "Magic Squares Screenshot")





## Original Cordova Installation

(Update to Xcode 6 first!)

```
$ sudo npm install -g cordova ionic

$ ionic start magic-squares blank

$ cd magic-squares

```

### Develop in the browser with live reload:

```
$ ionic serve
```

- issue with cmd. Will re-visit with Gulp.



### Ionic cmds

```
$ ionic build ios

$ ionic emulate ios

```

## Issues:

```
# ios-sim not present
 Library not loaded: @rpath/iPhoneSimulatorRemoteClient.framework/Versions/A/iPhoneSimulatorRemoteClient
```

See: [dyld: Library not loaded: #70](https://github.com/phonegap/ios-sim/issues/70)


```

# using Homebrew

$ brew update

$ brew unlink ios-sim

$ brew install ios-sim
```


ios-deploy was not found.

```
$ npm install -g ios-deploy
```

### Links

* [ios-sim](https://github.com/phonegap/ios-sim)
