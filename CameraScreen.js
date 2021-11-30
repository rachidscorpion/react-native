// -------------------   https://www.fullstacklabs.co/blog/react-native-camera -----------------------//

// npm install --save react-native-vector-icons react-native-camera
// And we need to set up permissions for both Android and iOS. In the case of Android, we need to go to the android/app/src/main/AndroidManifest.xml file and add

// /* Required */‍
// ‍<uses-permission android:name="android.permission.CAMERA"></uses-permission>
// /* Include this only if you are planning to use the microphone for video recording */
// ‍
// ‍<uses-permission android:name="android.permission.RECORD_AUDIO"></uses-permission>
// /* Include this only if you are planning to use the camera roll */
// ‍
// ‍<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"></uses-permission>
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>

// And we also need to include a few lines at android/app/build.gradle‍

	
// android { 
//  ... 
//  defaultConfig { 
//   ... 
//   missingDimensionStrategy 'react-native-camera', 'general' /* insert this line */
//  }
// }

import React from 'react'
import {View, Text} from 'react-native'
import { RNCamera } from 'react-native-camera';

let CameraScreen = () =>{
    return (
    <View style={{
        width:400,
        height:400,
    }}>
    <RNCamera ref={ref => {this.camera = ref;}}
    captureAudio={false}
    style={{flex:1}}
    type={RNCamera.Constants.Type.back}
    androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
    }}
    />
    </View>
    )
}

export default CameraScreen
