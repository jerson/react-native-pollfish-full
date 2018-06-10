
# react-native-pollfish-full

Pollfish support for **Android** and **iOS**

## Getting started

`$ npm install react-native-pollfish-full --save`

### Mostly automatic installation

`$ react-native link react-native-pollfish-full`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-pollfish-full` and add `RNPollfish.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNPollfish.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import me.jerson.mobile.ads.RNPollfishPackage;` to the imports at the top of the file
  - Add `new RNPollfishPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-pollfish-full'
  	project(':react-native-pollfish-full').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-pollfish-full/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-pollfish-full')
  	```


## Usage
```javascript
import Pollfish from 'react-native-pollfish-full';


  eventHandlers = [
    surveyReceived,
    surveyCompleted,
    userNotEligible,
    surveyNotAvailable,
    surveyOpened,
    surveyClosed
  ];

  Pollfish.initialize(key, releaseMode, customMode, format, userId);
  Pollfish.show();
  Pollfish.hide();
  Pollfish.destroy();
  Pollfish.addEventListener(type, handler);
  Pollfish.removeEventListener(type, handler);
  Pollfish.removeAllListeners();
```
  