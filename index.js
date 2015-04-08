#!/usr/bin/env node
var fs = require('fs');
var mkdirp = require('mkdirp');
var writefile = require('writefile');
var ncp = require('ncp').ncp;
var argv = require('yargs').usage('Usage: --proj "myApp" --username "Joe" --chuiapp "~/Documents/myWebApp"').demand(['proj', 'username']).argv;
var templates = require('./templates/android.js');
var gradle = require('./templates/gradle.js');
var idea = require('./templates/idea.js');
var username = argv.username || 'joe';
var path = require('path');
var appPath;
if (process.env.HOME) {
  appPath = path.join(process.env.HOME, '/Desktop/');
} else {
  appPath = path.join(process.env.HOMEPATH, 'Desktop');
}
var appicons = argv.appicons;

var noop = function() {};
if (argv.proj) {

  // Check to see if the folder exists:
  fs.exists(appPath + argv.proj, function(exists) {

    // If it does not exist, create it:
    if (!exists) {
      mkdirp(path.join(appPath, argv.proj, 'app'), noop);
      mkdirp(path.join(appPath, argv.proj, 'build'), noop);

      // writefile(appPath + argv.proj + '/build.gradle', "", noop);
      // writefile(appPath + argv.proj + '/gradle.properties', "", noop);
      // writefile(appPath + argv.proj + '/gradlew', "", noop);
      // writefile(appPath + argv.proj + '/local.properties', "", noop);
      // writefile(appPath + argv.proj + '/settings.gradle', "", noop);
      // writefile(appPath + argv.proj + '/' + argv.proj + '.iml', "", noop);


      writefile(appPath + argv.proj + '/.gradle/2.2.1/taskArtifacts/cache.properties.lock', gradle.cache_lock, noop);
      writefile(appPath + argv.proj + '/.gradle/2.2.1/taskArtifacts/fileHashes.bin', gradle.fileHashes, noop);
      writefile(appPath + argv.proj + '/.gradle/2.2.1/taskArtifacts/fileSnapshots.bin', "", noop);
      writefile(appPath + argv.proj + '/.gradle/2.2.1/taskArtifacts/outputFileStates.bin', "", noop);
      writefile(appPath + argv.proj + '/.gradle/2.2.1/taskArtifacts/taskArtifacts.bin', "", noop);

      

      writefile(appPath + argv.proj + '/gradle/wrapper/gradle-wrapper.jar', gradle.wrapper, noop);
      writefile(appPath + argv.proj + '/gradle/wrapper/gradle-wrapper.properties', gradle.wrapper_properties, noop);


      writefile(appPath + argv.proj + '/build.gradle', gradle.build, noop);
      writefile(appPath + argv.proj + '/gradle.properties', gradle.gradle_properties, noop);
      writefile(appPath + argv.proj + '/gradlew', gradle.gradlew, noop);
      writefile(appPath + argv.proj + '/gradlew.bat', gradle.gradle_bat, noop);
      writefile(appPath + argv.proj + '/local.properties', gradle.local_properties, noop);
      writefile(appPath + argv.proj + '/settings.gradle', "include ':app'", noop);
      writefile(appPath + argv.proj + '/' + argv.proj + '.iml', templates.iml, noop);


      // App files: 
      writefile(appPath + argv.proj + '/app/app.iml', templates.app_iml, noop);
      writefile(appPath + argv.proj + '/app/build.gradle', templates.build_gradle, noop);
      writefile(appPath + argv.proj + '/app/proguard-rules.pro', templates.proguard_rules, noop);
      


      writefile(appPath + argv.proj + '/app/src/androidTest/java/com/example/' + argv.username + '/' + argv.proj + '/ApplicationTest.java', templates.app_src_androidTest, noop);
      writefile(appPath + argv.proj + '/app/src/main/AndroidManifest.xml', templates.android_manifest, noop);

      writefile(appPath + argv.proj + '/app/src/main/java/com/example/' + argv.username.toLowerCase() + '/' + argv.proj.toLowerCase() + '/MainActivity.java', templates.android_main_activity, noop);
      mkdirp(path.join(appPath, argv.proj, 'app/libs'), noop);

      // Resources:
      mkdirp(path.join(appPath, argv.proj, 'app/src/main/res/drawable'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/src/main/res/mipmap-hdpi'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/src/main/res/mipmap-mdpi'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/src/main/res/mipmap-xhdpi'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/src/main/res/mipmap-xxhdpi'), noop);
      writefile(appPath + argv.proj + '/app/src/main/res/layout/acitvity_main.xml', templates.layout_activity_main, noop);
      writefile(appPath + argv.proj + '/app/src/main/res/layout/fragment_main.xml', templates.layout_fragement_main, noop);
      writefile(appPath + argv.proj + '/app/src/main/res/menu/menu_main.xml', templates.menu_main, noop);
      writefile(appPath + argv.proj + '/app/src/main/res/values/dimens.xml', templates.values_dimens, noop);
      writefile(appPath + argv.proj + '/app/src/main/res/values/strings.xml', templates.values_strings, noop);
      writefile(appPath + argv.proj + '/app/src/main/res/values/styles.xml', templates.values_styles, noop);

      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/res/generated/androidTest'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/res/rs/androidTest/debug'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/res/rs/debug'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/source/aidl/androidTest/debug'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/source/aidl/debug'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/source/rs/androidTest/debug'), noop);
      mkdirp(path.join(appPath, argv.proj, 'app/build/generated/source/rs/debug'), noop);


      writefile(appPath + argv.proj + '/.idea/copyright/profiles_settings.xml', idea.copyright, noop);
      writefile(appPath + argv.proj + '/.idea/libraries/appcompat_v7_22_0_0.xml', idea.libraries_1, noop);
      writefile(appPath + argv.proj + '/.idea/libraries/support_annotations_22_0_0.xml', idea.libraries_2, noop);
      writefile(appPath + argv.proj + '/.idea/libraries/support_v4_22_0_0.xml', idea.libraries_3, noop);
      writefile(appPath + argv.proj + '/.idea/scopes/scopes_settings.xml', idea.scopes, noop);
      writefile(appPath + argv.proj + '/.idea/.name', argv.proj, noop);
      writefile(appPath + argv.proj + '/.idea/complier.xml', idea.compiler, noop);
      writefile(appPath + argv.proj + '/.idea/encodings.xml', idea.encodings, noop);
      writefile(appPath + argv.proj + '/.idea/gradle.xml', idea.idea_gradle, noop);
      writefile(appPath + argv.proj + '/.idea/misc.xml', idea.misc, noop);
      writefile(appPath + argv.proj + '/.idea/modules.xml', idea.idea_modules, noop);
      writefile(appPath + argv.proj + '/.idea/vcs.xml', idea.vcs, noop);
      writefile(appPath + argv.proj + '/.idea/workspace.xml', idea.workspace, noop);

    }
  });
}