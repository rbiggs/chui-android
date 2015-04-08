var argv = require('yargs').argv;
var username = argv.username || "joe";

exports.appDelegate = "";

exports.iml = '<?xml version="1.0" encoding="UTF-8"?>\n\
<module external.linked.project.path="$MODULE_DIR$" external.root.project.path="$MODULE_DIR$" external.system.id="GRADLE" type="JAVA_MODULE" version="4">\n\
  <component name="FacetManager">\n\
    <facet type="java-gradle" name="Java-Gradle">\n\
      <configuration>\n\
        <option name="BUILD_FOLDER_PATH" value="$MODULE_DIR$/build" />\n\
      </configuration>\n\
    </facet>\n\
  </component>\n\
  <component name="NewModuleRootManager" inherit-compiler-output="false">\n\
    <output url="file://$MODULE_DIR$/build/classes/main" />\n\
    <output-test url="file://$MODULE_DIR$/build/classes/test" />\n\
    <exclude-output />\n\
    <content url="file://$MODULE_DIR$">\n\
      <excludeFolder url="file://$MODULE_DIR$/.gradle" />\n\
    </content>\n\
    <orderEntry type="inheritedJdk" />\n\
    <orderEntry type="sourceFolder" forTests="false" />\n\
  </component>\n\
</module>';

exports.app_src_androidTest = 'package com.example.' + argv.username.toLowerCase() + '.' + argv.proj.toLowerCase() + ';\n\
\n\
import android.app.Application;\n\
import android.test.ApplicationTestCase;\n\
\n\
/**\n\
 * <a href="http://d.android.com/tools/testing/testing_android.html">Testing Fundamentals</a>\n\
 */\n\
public class ApplicationTest extends ApplicationTestCase<Application> {\n\
    public ApplicationTest() {\n\
        super(Application.class);\n\
    }\n\
}';

exports.android_manifest = '<?xml version="1.0" encoding="utf-8"?>\n\
<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n\
    package="com.example.' + argv.username.toLowerCase() + '.' + argv.proj.toLowerCase() + '" >\n\
\n\
    <application\n\
        android:allowBackup="true"\n\
        android:icon="@mipmap/ic_launcher"\n\
        android:label="@string/app_name"\n\
        android:theme="@style/AppTheme" >\n\
        <activity\n\
            android:name=".MainActivity"\n\
            android:label="@string/app_name" >\n\
            <intent-filter>\n\
                <action android:name="android.intent.action.MAIN" />\n\
\n\
                <category android:name="android.intent.category.LAUNCHER" />\n\
            </intent-filter>\n\
        </activity>\n\
    </application>\n\
\n\
</manifest>';

exports.android_main_activity = 'package com.example.' + argv.username.toLowerCase() + '.' + argv.proj.toLowerCase() + ';\n\
\n\
import android.support.v7.app.ActionBarActivity;\n\
import android.support.v7.app.ActionBar;\n\
import android.support.v4.app.Fragment;\n\
import android.os.Bundle;\n\
import android.view.LayoutInflater;\n\
import android.view.Menu;\n\
import android.view.MenuItem;\n\
import android.view.View;\n\
import android.view.ViewGroup;\n\
import android.os.Build;\n\
\n\
\n\
public class MainActivity extends ActionBarActivity {\n\
\n\
    @Override\n\
    protected void onCreate(Bundle savedInstanceState) {\n\
        super.onCreate(savedInstanceState);\n\
        setContentView(R.layout.activity_main);\n\
        if (savedInstanceState == null) {\n\
            getSupportFragmentManager().beginTransaction()\n\
                    .add(R.id.container, new PlaceholderFragment())\n\
                    .commit();\n\
        }\n\
    }\n\
\n\
\n\
    @Override\n\
    public boolean onCreateOptionsMenu(Menu menu) {\n\
        // Inflate the menu; this adds items to the action bar if it is present.\n\
        getMenuInflater().inflate(R.menu.menu_main, menu);\n\
        return true;\n\
    }\n\
\n\
    @Override\n\
    public boolean onOptionsItemSelected(MenuItem item) {\n\
        // Handle action bar item clicks here. The action bar will\n\
        // automatically handle clicks on the Home/Up button, so long\n\
        // as you specify a parent activity in AndroidManifest.xml.\n\
        int id = item.getItemId();\n\
\n\
        //noinspection SimplifiableIfStatement\n\
        if (id == R.id.action_settings) {\n\
            return true;\n\
        }\n\
\n\
        return super.onOptionsItemSelected(item);\n\
    }\n\
\n\
    /**\n\
     * A placeholder fragment containing a simple view.\n\
     */\n\
    public static class PlaceholderFragment extends Fragment {\n\
\n\
        public PlaceholderFragment() {\n\
        }\n\
\n\
        @Override\n\
        public View onCreateView(LayoutInflater inflater, ViewGroup container,\n\
                                 Bundle savedInstanceState) {\n\
            View rootView = inflater.inflate(R.layout.fragment_main, container, false);\n\
            return rootView;\n\
        }\n\
    }\n\
}';

exports.layout_activity_main = '<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"\n\
    xmlns:tools="http://schemas.android.com/tools" android:id="@+id/container"\n\
    android:layout_width="match_parent" android:layout_height="match_parent"\n\
    tools:context=".MainActivity" tools:ignore="MergeRootFrame" />';

exports.layout_fragement_main = '<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"\n\
    xmlns:tools="http://schemas.android.com/tools" android:layout_width="match_parent"\n\
    android:layout_height="match_parent" android:paddingLeft="@dimen/activity_horizontal_margin"\n\
    android:paddingRight="@dimen/activity_horizontal_margin"\n\
    android:paddingTop="@dimen/activity_vertical_margin"\n\
    android:paddingBottom="@dimen/activity_vertical_margin"\n\
    tools:context=".MainActivity$PlaceholderFragment">\n\
\n\
    <TextView android:text="@string/hello_world" android:layout_width="wrap_content"\n\
        android:layout_height="wrap_content" />\n\
\n\
</RelativeLayout>';

exports.menu_main = '<menu xmlns:android="http://schemas.android.com/apk/res/android"\n\
    xmlns:app="http://schemas.android.com/apk/res-auto"\n\
    xmlns:tools="http://schemas.android.com/tools" tools:context=".MainActivity">\n\
    <item android:id="@+id/action_settings" android:title="@string/action_settings"\n\
        android:orderInCategory="100" app:showAsAction="never" />\n\
</menu>';

exports.values_dimens = '<resources>\n\
    <!-- Default screen margins, per the Android Design guidelines. -->\n\
    <dimen name="activity_horizontal_margin">16dp</dimen>\n\
    <dimen name="activity_vertical_margin">16dp</dimen>\n\
</resources>';

exports.values_strings = '<resources>\n\
    <string name="app_name">Andy</string>\n\
    <string name="hello_world">Hello world!</string>\n\
    <string name="action_settings">Settings</string>\n\
</resources>';

exports.values_styles = '<resources>\n\
\n\
    <!-- Base application theme. -->\n\
    <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">\n\
        <!-- Customize your theme here. -->\n\
    </style>\n\
\n\
</resources>';

exports.app_iml = '<?xml version="1.0" encoding="UTF-8"?>\n\
<module external.linked.project.path="$MODULE_DIR$" external.root.project.path="$MODULE_DIR$/.." external.system.id="GRADLE" external.system.module.group="Andy" external.system.module.version="unspecified" type="JAVA_MODULE" version="4">\n\
  <component name="FacetManager">\n\
    <facet type="android-gradle" name="Android-Gradle">\n\
      <configuration>\n\
        <option name="GRADLE_PROJECT_PATH" value=":app" />\n\
      </configuration>\n\
    </facet>\n\
    <facet type="android" name="Android">\n\
      <configuration>\n\
        <option name="SELECTED_BUILD_VARIANT" value="debug" />\n\
        <option name="SELECTED_TEST_ARTIFACT" value="_android_test_" />\n\
        <option name="ASSEMBLE_TASK_NAME" value="assembleDebug" />\n\
        <option name="COMPILE_JAVA_TASK_NAME" value="compileDebugSources" />\n\
        <option name="ASSEMBLE_TEST_TASK_NAME" value="assembleDebugAndroidTest" />\n\
        <option name="SOURCE_GEN_TASK_NAME" value="generateDebugSources" />\n\
        <option name="TEST_SOURCE_GEN_TASK_NAME" value="generateDebugAndroidTestSources" />\n\
        <option name="ALLOW_USER_CONFIGURATION" value="false" />\n\
        <option name="MANIFEST_FILE_RELATIVE_PATH" value="/src/main/AndroidManifest.xml" />\n\
        <option name="RES_FOLDER_RELATIVE_PATH" value="/src/main/res" />\n\
        <option name="RES_FOLDERS_RELATIVE_PATH" value="file://$MODULE_DIR$/src/main/res" />\n\
        <option name="ASSETS_FOLDER_RELATIVE_PATH" value="/src/main/assets" />\n\
      </configuration>\n\
    </facet>\n\
  </component>\n\
  <component name="NewModuleRootManager" inherit-compiler-output="false">\n\
    <output url="file://$MODULE_DIR$/build/intermediates/classes/debug" />\n\
    <output-test url="file://$MODULE_DIR$/build/intermediates/classes/androidTest/debug" />\n\
    <exclude-output />\n\
    <content url="file://$MODULE_DIR$">\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/r/debug" isTestSource="false" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/aidl/debug" isTestSource="false" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/buildConfig/debug" isTestSource="false" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/rs/debug" isTestSource="false" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/res/rs/debug" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/res/generated/debug" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/r/androidTest/debug" isTestSource="true" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/aidl/androidTest/debug" isTestSource="true" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/buildConfig/androidTest/debug" isTestSource="true" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/source/rs/androidTest/debug" isTestSource="true" generated="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/res/rs/androidTest/debug" type="java-test-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/build/generated/res/generated/androidTest/debug" type="java-test-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/res" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/resources" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/assets" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/aidl" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/java" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/jni" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/debug/rs" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/res" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/resources" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/assets" type="java-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/aidl" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/java" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/jni" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/main/rs" isTestSource="false" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/res" type="java-test-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/resources" type="java-test-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/assets" type="java-test-resource" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/aidl" isTestSource="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/java" isTestSource="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/jni" isTestSource="true" />\n\
      <sourceFolder url="file://$MODULE_DIR$/src/androidTest/rs" isTestSource="true" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/assets" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/bundles" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/classes" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/coverage-instrumented-classes" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/dependency-cache" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/dex" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/dex-cache" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/incremental" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/jacoco" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/javaResources" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/libs" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/lint" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/manifests" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/ndk" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/pre-dexed" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/proguard" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/res" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/rs" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/intermediates/symbols" />\n\
      <excludeFolder url="file://$MODULE_DIR$/build/outputs" />\n\
    </content>\n\
    <orderEntry type="jdk" jdkName="Android API 21 Platform" jdkType="Android SDK" />\n\
    <orderEntry type="sourceFolder" forTests="false" />\n\
    <orderEntry type="library" exported="" name="support-v4-22.0.0" level="project" />\n\
    <orderEntry type="library" exported="" name="support-annotations-22.0.0" level="project" />\n\
    <orderEntry type="library" exported="" name="appcompat-v7-22.0.0" level="project" />\n\
  </component>\n\
</module>';

exports.build_gradle = 'apply plugin: "com.android.application"\n\
android {\n\
    compileSdkVersion 21\n\
    buildToolsVersion "21.1.2"\n\
\n\
    defaultConfig {\n\
        applicationId "com.example.wobba.andy"\n\
        minSdkVersion 15\n\
        targetSdkVersion 21\n\
        versionCode 1\n\
        versionName "1.0"\n\
    }\n\
    buildTypes {\n\
        release {\n\
            minifyEnabled false\n\
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n\
        }\n\
    }\n\
}\n\
\n\
dependencies {\n\
    compile fileTree(dir: "libs", include: ["*.jar"])\n\
    compile "com.android.support:appcompat-v7:22.0.0"\n\
}';

exports.proguard_rules = '# Add project specific ProGuard rules here.\n\
# By default, the flags in this file are appended to flags specified\n\
# in /Users/wobba/Library/Android/sdk/tools/proguard/proguard-android.txt\n\
# You can edit the include path and order by changing the proguardFiles\n\
# directive in build.gradle.\n\
#\n\
# For more details, see\n\
#   http://developer.android.com/guide/developing/tools/proguard.html\n\
\n\
# Add any project specific keep options here:\n\
\n\
# If your project uses WebView with JS, uncomment the following\n\
# and specify the fully qualified class name to the JavaScript interface\n\
# class:\n\
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {\n\
#   public *;\n\
#}';