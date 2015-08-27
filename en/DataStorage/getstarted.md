# Step1
## Overview
This project contains the `ParseLoginUI` library for building login and signup flows with the Parse Android SDK.
You can easily configure the look and feel of the login screens by either specifying XML configurations or constructing an Intent in code.
To use this project with your app, you should import it as a library project in Android Studio.

![sample screens](http://parseui-android.parseapp.com/images/parse_login_sample_screens.png)

### Getting Started
We built several sample apps demonstrating how to use the `ParseLoginUI` library.  Before importing
this library into your app, we recommend that you run these sample apps to become familiar with its
functionality and customizations.  In this section, we describe Android Studio instructions for
running the sample apps (as a standalone project), and importing the `ParseLoginUI` library into
your own app.  These instructions were last tested on Android Studio 1.1.0.

#### Running Sample Projects
To run our sample apps, you need to import this repo as a standalone Gradle project:

1. Clone this repository onto your machine.
2. Import this repository's project with Android Studio (File > Import Project > `ParseUI-Android` folder). The project has Maven dependencies on the Facebook SDK and the Bolts framework.  Android Studio automatically resolves these via Gradle.
3. Specify the following in `res/values/strings.xml` of each sample project:
    * <code>parse_app_id</code> and <code>parse_client_key</code>
    * <code>facebook_app_id</code>
    * <code>twitter_consumer_key</code> and <code>twitter_consumer_secret</code>
4. Build (Tools > Android > Sync Project with Gradle Files) and run the sample apps using Android Studio.

#### Importing into Your App
1. Clone this repository onto your machine.
2. Configure Parse SDK by following this [tutorial](https://www.parse.com/apps/quickstart#parse_data/mobile/android/native/existing).
3. Import `ParseLoginUI` as a module into your app's Android Studio Project
    * File > Import Module in Android Studio
    * In the New Module pop-up, set the source directory to the `ParseUI-Android/ParseLoginUI` folder within the cloned repo.
    
4. Add the following to the `dependencies` section of your app's build.gradle.

        // Module dependency on ParseLoginUI library sources
        compile project(':ParseLoginUI')

        // Uncomment if using Facebook Login (optional Maven dependency)
        // compile 'com.facebook.android:facebook-android-sdk:4.0.1'
        // compile files('YOUR_PROJECT_LIBS_PATH/ParseFacebookUtilsV4-1.10.0.jar')

5. Add the following to your `AndroidManifest.xml` within the `<application></application>` section.  You can see a complete example in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic/src/main/AndroidManifest.xml).

        <activity
            android:name="com.parse.ui.ParseLoginActivity"
            android:label="@string/app_name"
            android:launchMode="singleTop">
            <!-- For more options, see https://www.parse.com/docs/android_guide#ui-login -->
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_ENABLED"
                android:value="true"/>
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_EMAIL_AS_USERNAME"
                android:value="true"/>
        </activity>

6. Specify the following in `res/values/strings.xml` of your app

        <string name="parse_app_id">YOUR_PARSE_APP_ID</string>
        <string name="parse_client_key">YOUR_PARSE_CLIENT_KEY</string>

For an example of setting up Facebook and Twitter integrations, please see `AndroidManfest.xml` and `res/values/strings.xml` in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic).

# Step2
## Overview
This project contains the `ParseLoginUI` library for building login and signup flows with the Parse Android SDK.
You can easily configure the look and feel of the login screens by either specifying XML configurations or constructing an Intent in code.
To use this project with your app, you should import it as a library project in Android Studio.

![sample screens](http://parseui-android.parseapp.com/images/parse_login_sample_screens.png)

### Getting Started
We built several sample apps demonstrating how to use the `ParseLoginUI` library.  Before importing
this library into your app, we recommend that you run these sample apps to become familiar with its
functionality and customizations.  In this section, we describe Android Studio instructions for
running the sample apps (as a standalone project), and importing the `ParseLoginUI` library into
your own app.  These instructions were last tested on Android Studio 1.1.0.

#### Running Sample Projects
To run our sample apps, you need to import this repo as a standalone Gradle project:

1. Clone this repository onto your machine.
2. Import this repository's project with Android Studio (File > Import Project > `ParseUI-Android` folder). The project has Maven dependencies on the Facebook SDK and the Bolts framework.  Android Studio automatically resolves these via Gradle.
3. Specify the following in `res/values/strings.xml` of each sample project:
    * <code>parse_app_id</code> and <code>parse_client_key</code>
    * <code>facebook_app_id</code>
    * <code>twitter_consumer_key</code> and <code>twitter_consumer_secret</code>
4. Build (Tools > Android > Sync Project with Gradle Files) and run the sample apps using Android Studio.

#### Importing into Your App
1. Clone this repository onto your machine.
2. Configure Parse SDK by following this [tutorial](https://www.parse.com/apps/quickstart#parse_data/mobile/android/native/existing).
3. Import `ParseLoginUI` as a module into your app's Android Studio Project
    * File > Import Module in Android Studio
    * In the New Module pop-up, set the source directory to the `ParseUI-Android/ParseLoginUI` folder within the cloned repo.
    
4. Add the following to the `dependencies` section of your app's build.gradle.

        // Module dependency on ParseLoginUI library sources
        compile project(':ParseLoginUI')

        // Uncomment if using Facebook Login (optional Maven dependency)
        // compile 'com.facebook.android:facebook-android-sdk:4.0.1'
        // compile files('YOUR_PROJECT_LIBS_PATH/ParseFacebookUtilsV4-1.10.0.jar')

5. Add the following to your `AndroidManifest.xml` within the `<application></application>` section.  You can see a complete example in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic/src/main/AndroidManifest.xml).

        <activity
            android:name="com.parse.ui.ParseLoginActivity"
            android:label="@string/app_name"
            android:launchMode="singleTop">
            <!-- For more options, see https://www.parse.com/docs/android_guide#ui-login -->
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_ENABLED"
                android:value="true"/>
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_EMAIL_AS_USERNAME"
                android:value="true"/>
        </activity>

6. Specify the following in `res/values/strings.xml` of your app

        <string name="parse_app_id">YOUR_PARSE_APP_ID</string>
        <string name="parse_client_key">YOUR_PARSE_CLIENT_KEY</string>

For an example of setting up Facebook and Twitter integrations, please see `AndroidManfest.xml` and `res/values/strings.xml` in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic).

# Step3
## Overview
This project contains the `ParseLoginUI` library for building login and signup flows with the Parse Android SDK.
You can easily configure the look and feel of the login screens by either specifying XML configurations or constructing an Intent in code.
To use this project with your app, you should import it as a library project in Android Studio.

![sample screens](http://parseui-android.parseapp.com/images/parse_login_sample_screens.png)

### Getting Started
We built several sample apps demonstrating how to use the `ParseLoginUI` library.  Before importing
this library into your app, we recommend that you run these sample apps to become familiar with its
functionality and customizations.  In this section, we describe Android Studio instructions for
running the sample apps (as a standalone project), and importing the `ParseLoginUI` library into
your own app.  These instructions were last tested on Android Studio 1.1.0.

#### Running Sample Projects
To run our sample apps, you need to import this repo as a standalone Gradle project:

1. Clone this repository onto your machine.
2. Import this repository's project with Android Studio (File > Import Project > `ParseUI-Android` folder). The project has Maven dependencies on the Facebook SDK and the Bolts framework.  Android Studio automatically resolves these via Gradle.
3. Specify the following in `res/values/strings.xml` of each sample project:
    * <code>parse_app_id</code> and <code>parse_client_key</code>
    * <code>facebook_app_id</code>
    * <code>twitter_consumer_key</code> and <code>twitter_consumer_secret</code>
4. Build (Tools > Android > Sync Project with Gradle Files) and run the sample apps using Android Studio.

#### Importing into Your App
1. Clone this repository onto your machine.
2. Configure Parse SDK by following this [tutorial](https://www.parse.com/apps/quickstart#parse_data/mobile/android/native/existing).
3. Import `ParseLoginUI` as a module into your app's Android Studio Project
    * File > Import Module in Android Studio
    * In the New Module pop-up, set the source directory to the `ParseUI-Android/ParseLoginUI` folder within the cloned repo.
    
4. Add the following to the `dependencies` section of your app's build.gradle.

        // Module dependency on ParseLoginUI library sources
        compile project(':ParseLoginUI')

        // Uncomment if using Facebook Login (optional Maven dependency)
        // compile 'com.facebook.android:facebook-android-sdk:4.0.1'
        // compile files('YOUR_PROJECT_LIBS_PATH/ParseFacebookUtilsV4-1.10.0.jar')

5. Add the following to your `AndroidManifest.xml` within the `<application></application>` section.  You can see a complete example in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic/src/main/AndroidManifest.xml).

        <activity
            android:name="com.parse.ui.ParseLoginActivity"
            android:label="@string/app_name"
            android:launchMode="singleTop">
            <!-- For more options, see https://www.parse.com/docs/android_guide#ui-login -->
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_ENABLED"
                android:value="true"/>
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_EMAIL_AS_USERNAME"
                android:value="true"/>
        </activity>

6. Specify the following in `res/values/strings.xml` of your app

        <string name="parse_app_id">YOUR_PARSE_APP_ID</string>
        <string name="parse_client_key">YOUR_PARSE_CLIENT_KEY</string>

For an example of setting up Facebook and Twitter integrations, please see `AndroidManfest.xml` and `res/values/strings.xml` in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic).

# Step4
## Overview
This project contains the `ParseLoginUI` library for building login and signup flows with the Parse Android SDK.
You can easily configure the look and feel of the login screens by either specifying XML configurations or constructing an Intent in code.
To use this project with your app, you should import it as a library project in Android Studio.

![sample screens](http://parseui-android.parseapp.com/images/parse_login_sample_screens.png)

### Getting Started
We built several sample apps demonstrating how to use the `ParseLoginUI` library.  Before importing
this library into your app, we recommend that you run these sample apps to become familiar with its
functionality and customizations.  In this section, we describe Android Studio instructions for
running the sample apps (as a standalone project), and importing the `ParseLoginUI` library into
your own app.  These instructions were last tested on Android Studio 1.1.0.

#### Running Sample Projects
To run our sample apps, you need to import this repo as a standalone Gradle project:

1. Clone this repository onto your machine.
2. Import this repository's project with Android Studio (File > Import Project > `ParseUI-Android` folder). The project has Maven dependencies on the Facebook SDK and the Bolts framework.  Android Studio automatically resolves these via Gradle.
3. Specify the following in `res/values/strings.xml` of each sample project:
    * <code>parse_app_id</code> and <code>parse_client_key</code>
    * <code>facebook_app_id</code>
    * <code>twitter_consumer_key</code> and <code>twitter_consumer_secret</code>
4. Build (Tools > Android > Sync Project with Gradle Files) and run the sample apps using Android Studio.

#### Importing into Your App
1. Clone this repository onto your machine.
2. Configure Parse SDK by following this [tutorial](https://www.parse.com/apps/quickstart#parse_data/mobile/android/native/existing).
3. Import `ParseLoginUI` as a module into your app's Android Studio Project
    * File > Import Module in Android Studio
    * In the New Module pop-up, set the source directory to the `ParseUI-Android/ParseLoginUI` folder within the cloned repo.
    
4. Add the following to the `dependencies` section of your app's build.gradle.

        // Module dependency on ParseLoginUI library sources
        compile project(':ParseLoginUI')

        // Uncomment if using Facebook Login (optional Maven dependency)
        // compile 'com.facebook.android:facebook-android-sdk:4.0.1'
        // compile files('YOUR_PROJECT_LIBS_PATH/ParseFacebookUtilsV4-1.10.0.jar')

5. Add the following to your `AndroidManifest.xml` within the `<application></application>` section.  You can see a complete example in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic/src/main/AndroidManifest.xml).

        <activity
            android:name="com.parse.ui.ParseLoginActivity"
            android:label="@string/app_name"
            android:launchMode="singleTop">
            <!-- For more options, see https://www.parse.com/docs/android_guide#ui-login -->
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_ENABLED"
                android:value="true"/>
            <meta-data
                android:name="com.parse.ui.ParseLoginActivity.PARSE_LOGIN_EMAIL_AS_USERNAME"
                android:value="true"/>
        </activity>

6. Specify the following in `res/values/strings.xml` of your app

        <string name="parse_app_id">YOUR_PARSE_APP_ID</string>
        <string name="parse_client_key">YOUR_PARSE_CLIENT_KEY</string>

For an example of setting up Facebook and Twitter integrations, please see `AndroidManfest.xml` and `res/values/strings.xml` in our [sample app](https://github.com/ParsePlatform/ParseUI-Android/blob/master/ParseLoginSampleBasic).