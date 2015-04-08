var argv = require('yargs').argv;
var username = argv.username || "joe";

exports.copyright = '<component name="CopyrightManager">\n\
  <settings default="" />\n\
</component>';


exports.libraries_1 = '<component name="libraryTable">\n\
  <library name="appcompat-v7-22.0.0">\n\
    <CLASSES>\n\
      <root url="file://$PROJECT_DIR$/app/build/intermediates/exploded-aar/com.android.support/appcompat-v7/22.0.0/res" />\n\
      <root url="jar://$PROJECT_DIR$/app/build/intermediates/exploded-aar/com.android.support/appcompat-v7/22.0.0/classes.jar!/" />\n\
    </CLASSES>\n\
    <JAVADOC />\n\
    <SOURCES />\n\
  </library>\n\
</component>';

exports.libraries_2 = '<component name="libraryTable">\n\
  <library name="support-annotations-22.0.0">\n\
    <CLASSES>\n\
      <root url="jar://$USER_HOME$/Library/Android/sdk/extras/android/m2repository/com/android/support/support-annotations/22.0.0/support-annotations-22.0.0.jar!/" />\n\
    </CLASSES>\n\
    <JAVADOC />\n\
    <SOURCES>\n\
      <root url="jar://$USER_HOME$/Library/Android/sdk/extras/android/m2repository/com/android/support/support-annotations/22.0.0/support-annotations-22.0.0-sources.jar!/" />\n\
    </SOURCES>\n\
  </library>\n\
</component>';

exports.libraries_3 = '<component name="libraryTable">\n\
  <library name="support-v4-22.0.0">\n\
    <CLASSES>\n\
      <root url="file://$PROJECT_DIR$/app/build/intermediates/exploded-aar/com.android.support/support-v4/22.0.0/res" />\n\
      <root url="jar://$PROJECT_DIR$/app/build/intermediates/exploded-aar/com.android.support/support-v4/22.0.0/classes.jar!/" />\n\
      <root url="jar://$PROJECT_DIR$/app/build/intermediates/exploded-aar/com.android.support/support-v4/22.0.0/libs/internal_impl-22.0.0.jar!/" />\n\
    </CLASSES>\n\
    <JAVADOC />\n\
    <SOURCES />\n\
  </library>\n\
</component>';

exports.scopes = '<component name="DependencyValidationManager">\n\
  <state>\n\
    <option name="SKIP_IMPORT_STATEMENTS" value="false" />\n\
  </state>\n\
</component>';

exports.compiler = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="CompilerConfiguration">\n\
    <option name="DEFAULT_COMPILER" value="Javac" />\n\
    <resourceExtensions />\n\
    <wildcardResourcePatterns>\n\
      <entry name="!?*.java" />\n\
      <entry name="!?*.form" />\n\
      <entry name="!?*.class" />\n\
      <entry name="!?*.groovy" />\n\
      <entry name="!?*.scala" />\n\
      <entry name="!?*.flex" />\n\
      <entry name="!?*.kt" />\n\
      <entry name="!?*.clj" />\n\
    </wildcardResourcePatterns>\n\
    <annotationProcessing>\n\
      <profile default="true" name="Default" enabled="false">\n\
        <processorPath useClasspath="true" />\n\
      </profile>\n\
    </annotationProcessing>\n\
  </component>\n\
</project>';

exports.encodings = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="Encoding" useUTFGuessing="true" native2AsciiForPropertiesFiles="false" />\n\
</project>';

exports.idea_gradle = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="GradleSettings">\n\
    <option name="linkedExternalProjectsSettings">\n\
      <GradleProjectSettings>\n\
        <option name="distributionType" value="DEFAULT_WRAPPED" />\n\
        <option name="externalProjectPath" value="$PROJECT_DIR$" />\n\
        <option name="modules">\n\
          <set>\n\
            <option value="$PROJECT_DIR$" />\n\
            <option value="$PROJECT_DIR$/app" />\n\
          </set>\n\
        </option>\n\
      </GradleProjectSettings>\n\
    </option>\n\
  </component>\n\
</project>';

exports.misc = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="ProjectRootManager" version="2" languageLevel="JDK_1_7" assert-keyword="true" jdk-15="true" project-jdk-name="1.7" project-jdk-type="JavaSDK">\n\
    <output url="file://$PROJECT_DIR$/build/classes" />\n\
  </component>\n\
</project>';

exports.idea_modules = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="ProjectModuleManager">\n\
    <modules>\n\
      <module fileurl="file://$PROJECT_DIR$/'+ argv.proj + '.iml" filepath="$PROJECT_DIR$/'+ argv.proj + '.iml" />\n\
      <module fileurl="file://$PROJECT_DIR$/app/app.iml" filepath="$PROJECT_DIR$/app/app.iml" />\n\
    </modules>\n\
  </component>\n\
</project>';

exports.vcs = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="VcsDirectoryMappings">\n\
    <mapping directory="" vcs="" />\n\
  </component>\n\
</project>';

exports.workspace = '<?xml version="1.0" encoding="UTF-8"?>\n\
<project version="4">\n\
  <component name="AndroidLayouts">\n\
    <shared>\n\
      <config />\n\
    </shared>\n\
  </component>\n\
  <component name="ChangeListManager">\n\
    <list default="true" id="511a5b16-839c-4910-93b2-ff8c96a3b2cb" name="Default" comment="" />\n\
    <ignored path="'+ argv.proj + '.iws" />\n\
    <ignored path=".idea/workspace.xml" />\n\
    <option name="TRACKING_ENABLED" value="true" />\n\
    <option name="SHOW_DIALOG" value="false" />\n\
    <option name="HIGHLIGHT_CONFLICTS" value="true" />\n\
    <option name="HIGHLIGHT_NON_ACTIVE_CHANGELIST" value="false" />\n\
    <option name="LAST_RESOLUTION" value="IGNORE" />\n\
  </component>\n\
  <component name="ChangesViewManager" flattened_view="true" show_ignored="false" />\n\
  <component name="CreatePatchCommitExecutor">\n\
    <option name="PATCH_PATH" value="" />\n\
  </component>\n\
  <component name="DaemonCodeAnalyzer">\n\
    <disable_hints />\n\
  </component>\n\
  <component name="ExecutionTargetManager" SELECTED_TARGET="default_target" />\n\
  <component name="FavoritesManager">\n\
    <favorites_list name="'+ argv.proj + '" />\n\
  </component>\n\
  <component name="FileEditorManager">\n\
    <leaf>\n\
      <file leaf-file-name="MainActivity.java" pinned="false" current="false" current-in-tab="false">\n\
        <entry file="file://$PROJECT_DIR$/app/src/main/java/com/example/wobba/'+ argv.proj.toLowerCase() + '/MainActivity.java">\n\
          <provider selected="true" editor-type-id="text-editor">\n\
            <state vertical-scroll-proportion="0.0" vertical-offset="0" max-vertical-offset="630">\n\
              <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />\n\
              <folding />\n\
            </state>\n\
          </provider>\n\
        </entry>\n\
      </file>\n\
      <file leaf-file-name="activity_main.xml" pinned="false" current="true" current-in-tab="true">\n\
        <entry file="file://$PROJECT_DIR$/app/src/main/res/layout/activity_main.xml">\n\
          <provider selected="true" editor-type-id="android-designer">\n\
            <state />\n\
          </provider>\n\
          <provider editor-type-id="text-editor">\n\
            <state vertical-scroll-proportion="0.0" vertical-offset="0" max-vertical-offset="255">\n\
              <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />\n\
              <folding />\n\
            </state>\n\
          </provider>\n\
        </entry>\n\
      </file>\n\
    </leaf>\n\
  </component>\n\
  <component name="GradleLocalSettings">\n\
    <option name="tasksExpandState">\n\
      <map>\n\
        <entry key="" value="true" />\n\
      </map>\n\
    </option>\n\
    <option name="availableProjects">\n\
      <map>\n\
        <entry>\n\
          <key>\n\
            <ExternalProjectPojo>\n\
              <option name="name" value="'+ argv.proj + '" />\n\
              <option name="path" value="$PROJECT_DIR$" />\n\
            </ExternalProjectPojo>\n\
          </key>\n\
          <value>\n\
            <list>\n\
              <ExternalProjectPojo>\n\
                <option name="name" value=":app" />\n\
                <option name="path" value="$PROJECT_DIR$/app" />\n\
              </ExternalProjectPojo>\n\
              <ExternalProjectPojo>\n\
                <option name="name" value="'+ argv.proj + '" />\n\
                <option name="path" value="$PROJECT_DIR$" />\n\
              </ExternalProjectPojo>\n\
            </list>\n\
          </value>\n\
        </entry>\n\
      </map>\n\
    </option>\n\
    <option name="availableTasks">\n\
      <map>\n\
        <entry key="$PROJECT_DIR$/app">\n\
          <value>\n\
            <list>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Displays the Android dependencies of the project." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="androidDependencies" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles all variants of all applications and secondary packages." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assemble" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles all the Test applications." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles all Debug builds." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles the android (on device) tests for the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles the unit tests for the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleDebugUnitTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles all Release builds." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles the unit tests for the Release build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="assembleReleaseUnitTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles and tests this project." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="build" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles and tests this project and all projects that depend on it." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="buildDependents" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Assembles and tests this project and all projects it depends on." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="buildNeeded" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs all checks." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="check" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="checkDebugManifest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="checkReleaseManifest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Deletes the build directory." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="clean" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAidl" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAndroidTestAidl" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAndroidTestJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAndroidTestNdk" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAndroidTestRenderscript" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugAndroidTestSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugNdk" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugRenderscript" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugUnitTestJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileDebugUnitTestSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileLint" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseAidl" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseNdk" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseRenderscript" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseUnitTestJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="compileReleaseUnitTestSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Installs and runs the tests for Debug build on connected devices." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="connectedAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs all device checks on currently connected devices." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="connectedCheck" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs all device checks using Device Providers and Test Servers." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="deviceCheck" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="dexDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="dexDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="dexRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAndroidTestAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAndroidTestBuildConfig" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAndroidTestResValues" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAndroidTestResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAndroidTestSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugBuildConfig" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugResValues" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateDebugSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateReleaseAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateReleaseBuildConfig" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateReleaseResValues" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateReleaseResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="generateReleaseSources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Installs the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="installDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Installs the android (on device) tests for the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="installDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs lint on all variants." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="lint" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs lint on the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="lintDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs lint on the Release build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="lintRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Runs lint on just the fatal issues in the Release build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="lintVitalRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeDebugAndroidTestAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeDebugAndroidTestResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeDebugAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeDebugResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeReleaseAssets" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mergeReleaseResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Creates a version of android.jar that\'s suitable for unit tests." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="mockableAndroidJar" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="packageDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="packageDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="packageRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preBuild" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preCompileDebugUnitTestJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preCompileReleaseUnitTestJava" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preDebugAndroidTestBuild" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preDebugBuild" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preDexDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preDexDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preDexRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="preReleaseBuild" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Prepare com.android.support:appcompat-v7:22.0.0" />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="prepareComAndroidSupportAppcompatV72200Library" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Prepare com.android.support:support-v4:22.0.0" />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="prepareComAndroidSupportSupportV42200Library" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="prepareDebugAndroidTestDependencies" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="prepareDebugDependencies" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="prepareReleaseDependencies" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugAndroidTestJavaRes" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugAndroidTestManifest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugAndroidTestResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugJavaRes" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugManifest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processDebugResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processReleaseJavaRes" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processReleaseManifest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="processReleaseResources" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Displays the signing info for each variant." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="signingReport" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Run all unit tests." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="test" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Run unit tests for the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="testDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Run unit tests for the Release build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="testRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Uninstall all applications." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="uninstallAll" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Uninstalls the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="uninstallDebug" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Uninstalls the android (on device) tests for the Debug build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="uninstallDebugAndroidTest" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="description" value="Uninstalls the Release build." />\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="uninstallRelease" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="validateDebugSigning" />\n\
              </ExternalTaskPojo>\n\
              <ExternalTaskPojo>\n\
                <option name="linkedExternalProjectPath" value="$PROJECT_DIR$/app" />\n\
                <option name="name" value="zipalignDebug" />\n\
              </ExternalTaskPojo>\n\
            </list>\n\
          </value>\n\
        </entry>\n\
      </map>\n\
    </option>\n\
    <option name="modificationStamps">\n\
      <map>\n\
        <entry key="$PROJECT_DIR$" value="4285061132000" />\n\
        <entry key="$PROJECT_DIR$/../Bingo" value="4278837799000" />\n\
      </map>\n\
    </option>\n\
    <option name="projectBuildClasspath">\n\
      <map>\n\
        <entry key="$PROJECT_DIR$">\n\
          <value>\n\
            <ExternalProjectBuildClasspathPojo>\n\
              <option name="modulesBuildClasspath">\n\
                <map>\n\
                  <entry key="$PROJECT_DIR$">\n\
                    <value>\n\
                      <ExternalModuleBuildClasspathPojo>\n\
                        <option name="entries">\n\
                          <list>\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle/1.1.0/gradle-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle/1.1.0/gradle-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle-core/1.1.0/gradle-core-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle-core/1.1.0/gradle-core-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint/24.1.0/lint-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint/24.1.0/lint-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-gradle/5.1/proguard-gradle-5.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-gradle/5.1/proguard-gradle-5.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder/1.1.0/builder-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder/1.1.0/builder-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/eclipse/jdt/core/compiler/ecj/4.4/ecj-4.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/eclipse/jdt/core/compiler/ecj/4.4/ecj-4.4.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-checks/24.1.0/lint-checks-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-checks/24.1.0/lint-checks-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-base/5.1/proguard-base-5.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-base/5.1/proguard-base-5.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdk-common/24.1.0/sdk-common-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdk-common/24.1.0/sdk-common-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-model/1.1.0/builder-model-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-model/1.1.0/builder-model-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/manifest-merger/24.1.0/manifest-merger-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/manifest-merger/24.1.0/manifest-merger-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-test-api/1.1.0/builder-test-api-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-test-api/1.1.0/builder-test-api-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/ddms/ddmlib/24.1.0/ddmlib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/ddms/ddmlib/24.1.0/ddmlib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/squareup/javawriter/2.5.0/javawriter-2.5.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/squareup/javawriter/2.5.0/javawriter-2.5.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdklib/24.1.0/sdklib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdklib/24.1.0/sdklib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/common/24.1.0/common-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/common/24.1.0/common-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm/5.0.3/asm-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm/5.0.3/asm-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-api/24.1.0/lint-api-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-api/24.1.0/lint-api-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/code/gson/gson/2.2.4/gson-2.2.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/annotations/24.1.0/annotations-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/annotations/24.1.0/annotations-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/dvlib/24.1.0/dvlib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/dvlib/24.1.0/dvlib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/layoutlib/layoutlib-api/24.1.0/layoutlib-api-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/layoutlib/layoutlib-api/24.1.0/layoutlib-api-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/guava/guava/17.0/guava-17.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/guava/guava/17.0/guava-17.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-codec/commons-codec/1.4/commons-codec-1.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-codec/commons-codec/1.4/commons-codec-1.4.jar" />\n\
                          </list>\n\
                        </option>\n\
                        <option name="path" value="$PROJECT_DIR$" />\n\
                      </ExternalModuleBuildClasspathPojo>\n\
                    </value>\n\
                  </entry>\n\
                  <entry key="$PROJECT_DIR$/app">\n\
                    <value>\n\
                      <ExternalModuleBuildClasspathPojo>\n\
                        <option name="entries">\n\
                          <list>\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle/1.1.0/gradle-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle/1.1.0/gradle-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle-core/1.1.0/gradle-core-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/gradle-core/1.1.0/gradle-core-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint/24.1.0/lint-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint/24.1.0/lint-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-gradle/5.1/proguard-gradle-5.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-gradle/5.1/proguard-gradle-5.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder/1.1.0/builder-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder/1.1.0/builder-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/eclipse/jdt/core/compiler/ecj/4.4/ecj-4.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/eclipse/jdt/core/compiler/ecj/4.4/ecj-4.4.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-checks/24.1.0/lint-checks-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-checks/24.1.0/lint-checks-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-base/5.1/proguard-base-5.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/proguard/proguard-base/5.1/proguard-base-5.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdk-common/24.1.0/sdk-common-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdk-common/24.1.0/sdk-common-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-model/1.1.0/builder-model-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-model/1.1.0/builder-model-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/manifest-merger/24.1.0/manifest-merger-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/manifest-merger/24.1.0/manifest-merger-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcprov-jdk15on/1.48/bcprov-jdk15on-1.48.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-test-api/1.1.0/builder-test-api-1.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/build/builder-test-api/1.1.0/builder-test-api-1.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-tree/5.0.3/asm-tree-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/ddms/ddmlib/24.1.0/ddmlib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/ddms/ddmlib/24.1.0/ddmlib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/squareup/javawriter/2.5.0/javawriter-2.5.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/squareup/javawriter/2.5.0/javawriter-2.5.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdklib/24.1.0/sdklib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/sdklib/24.1.0/sdklib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/common/24.1.0/common-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/common/24.1.0/common-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm/5.0.3/asm-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm/5.0.3/asm-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/bouncycastle/bcpkix-jdk15on/1.48/bcpkix-jdk15on-1.48.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/ow2/asm/asm-analysis/5.0.3/asm-analysis-5.0.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-api/24.1.0/lint-api-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/lint/lint-api/24.1.0/lint-api-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/code/gson/gson/2.2.4/gson-2.2.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/code/gson/gson/2.2.4/gson-2.2.4.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/annotations/24.1.0/annotations-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/annotations/24.1.0/annotations-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/net/sf/kxml/kxml2/2.3.0/kxml2-2.3.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/dvlib/24.1.0/dvlib-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/dvlib/24.1.0/dvlib-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpclient/4.1.1/httpclient-4.1.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpmime/4.1/httpmime-4.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/layoutlib/layoutlib-api/24.1.0/layoutlib-api-24.1.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/layoutlib/layoutlib-api/24.1.0/layoutlib-api-24.1.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/commons/commons-compress/1.8.1/commons-compress-1.8.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/guava/guava/17.0/guava-17.0-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/google/guava/guava/17.0/guava-17.0.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/com/android/tools/external/lombok/lombok-ast/0.2.3/lombok-ast-0.2.3.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/org/apache/httpcomponents/httpcore/4.1/httpcore-4.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-logging/commons-logging/1.1.1/commons-logging-1.1.1.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-codec/commons-codec/1.4/commons-codec-1.4-sources.jar" />\n\
                            <option value="$APPLICATION_HOME_DIR$/gradle/m2repository/commons-codec/commons-codec/1.4/commons-codec-1.4.jar" />\n\
                            <option value="$USER_HOME$/Library/Android/sdk/extras/android/m2repository/com/android/support/appcompat-v7/22.0.0/appcompat-v7-22.0.0.aar" />\n\
                            <option value="$USER_HOME$/Library/Android/sdk/extras/android/m2repository/com/android/support/support-v4/22.0.0/support-v4-22.0.0.aar" />\n\
                            <option value="$USER_HOME$/Library/Android/sdk/extras/android/m2repository/com/android/support/support-annotations/22.0.0/support-annotations-22.0.0.jar" />\n\
                          </list>\n\
                        </option>\n\
                        <option name="path" value="$PROJECT_DIR$/app" />\n\
                      </ExternalModuleBuildClasspathPojo>\n\
                    </value>\n\
                  </entry>\n\
                </map>\n\
              </option>\n\
              <option name="name" value="app" />\n\
              <option name="projectBuildClasspath">\n\
                <list>\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/announce" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/antlr" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/base-services" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/base-services-groovy" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/build-comparison" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/build-init" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/cli" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/code-quality" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/core" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/cunit" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/dependency-management" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/diagnostics" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/ear" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/ide" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/ide-native" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/internal-integ-testing" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/internal-testing" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/ivy" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/jacoco" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/javascript" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/jetty" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/language-groovy" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/language-java" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/language-jvm" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/language-native" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/launcher" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/maven" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/messaging" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/model-core" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/model-groovy" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/native" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/open-api" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/osgi" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/platform-base" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/platform-jvm" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/platform-native" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/plugin-development" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/plugin-use" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/plugins" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/publish" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/reporting" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/resources" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/resources-http" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/scala" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/signing" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/sonar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/tooling-api" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/ui" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/src/wrapper" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/ant-1.9.3.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/ant-launcher-1.9.3.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-base-services-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-base-services-groovy-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-cli-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-core-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-docs-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-launcher-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-messaging-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-model-core-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-model-groovy-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-native-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-open-api-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-resources-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-tooling-api-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-ui-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/gradle-wrapper-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/groovy-all-2.3.6.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/ant-antlr-1.9.3.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-announce-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-antlr-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-build-comparison-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-build-init-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-code-quality-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-cunit-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-dependency-management-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-diagnostics-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-ear-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-ide-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-ide-native-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-ivy-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-jacoco-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-javascript-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-jetty-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-language-groovy-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-language-java-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-language-jvm-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-language-native-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-maven-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-osgi-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-platform-base-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-platform-jvm-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-platform-native-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-plugin-development-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-plugin-use-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-plugins-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-publish-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-reporting-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-resources-http-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-scala-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-signing-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/gradle-sonar-2.2.1.jar" />\n\
                  <option value="$USER_HOME$/.gradle/wrapper/dists/gradle-2.2.1-all/c64ydeuardnfqctvr1gm30w53/gradle-2.2.1/lib/plugins/ivy-2.2.0.jar" />\n\
                  <option value="$PROJECT_DIR$/buildSrc/src/main/java" />\n\
                  <option value="$PROJECT_DIR$/buildSrc/src/main/groovy" />\n\
                </list>\n\
              </option>\n\
            </ExternalProjectBuildClasspathPojo>\n\
          </value>\n\
        </entry>\n\
      </map>\n\
    </option>\n\
  </component>\n\
  <component name="ProjectFrameBounds">\n\
    <option name="x" value="49" />\n\
    <option name="y" value="23" />\n\
    <option name="width" value="1391" />\n\
    <option name="height" value="877" />\n\
  </component>\n\
  <component name="ProjectLevelVcsManager" settingsEditedManually="false">\n\
    <OptionsSetting value="true" id="Add" />\n\
    <OptionsSetting value="true" id="Remove" />\n\
    <OptionsSetting value="true" id="Checkout" />\n\
    <OptionsSetting value="true" id="Update" />\n\
    <OptionsSetting value="true" id="Status" />\n\
    <OptionsSetting value="true" id="Edit" />\n\
    <ConfirmationsSetting value="0" id="Add" />\n\
    <ConfirmationsSetting value="0" id="Remove" />\n\
  </component>\n\
  <component name="ProjectReloadState">\n\
    <option name="STATE" value="0" />\n\
  </component>\n\
  <component name="ProjectView">\n\
    <navigator currentView="AndroidView" proportions="" version="1">\n\
      <flattenPackages />\n\
      <showMembers />\n\
      <showModules />\n\
      <showLibraryContents />\n\
      <hideEmptyPackages />\n\
      <abbreviatePackageNames />\n\
      <autoscrollToSource />\n\
      <autoscrollFromSource />\n\
      <sortByType />\n\
    </navigator>\n\
    <panes>\n\
      <pane id="AndroidView">\n\
        <subPane>\n\
          <PATH>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="'+ argv.proj + '" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidViewProjectNode" />\n\
            </PATH_ELEMENT>\n\
          </PATH>\n\
          <PATH>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="'+ argv.proj + '" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidViewProjectNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="app" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidModuleNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="res" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidResFolderNode" />\n\
            </PATH_ELEMENT>\n\
          </PATH>\n\
          <PATH>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="'+ argv.proj + '" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidViewProjectNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="app" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidModuleNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="res" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidResFolderNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="layout" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidResFolderTypeNode" />\n\
            </PATH_ELEMENT>\n\
          </PATH>\n\
          <PATH>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="'+ argv.proj + '" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidViewProjectNode" />\n\
            </PATH_ELEMENT>\n\
            <PATH_ELEMENT>\n\
              <option name="myItemId" value="app" />\n\
              <option name="myItemType" value="com.android.tools.idea.navigator.nodes.AndroidModuleNode" />\n\
            </PATH_ELEMENT>\n\
          </PATH>\n\
        </subPane>\n\
      </pane>\n\
      <pane id="PackagesPane" />\n\
      <pane id="Scope" />\n\
      <pane id="ProjectPane" />\n\
    </panes>\n\
  </component>\n\
  <component name="PropertiesComponent">\n\
    <property name="GoToClass.includeLibraries" value="false" />\n\
    <property name="GoToClass.toSaveIncludeLibraries" value="false" />\n\
    <property name="GoToFile.includeJavaFiles" value="false" />\n\
    <property name="MemberChooser.sorted" value="false" />\n\
    <property name="MemberChooser.showClasses" value="true" />\n\
    <property name="MemberChooser.copyJavadoc" value="false" />\n\
    <property name="android.sdk.path" value="$USER_HOME$/Library/Android/sdk" />\n\
    <property name="recentsLimit" value="5" />\n\
  </component>\n\
  <component name="RunManager" selected="Android Application.app">\n\
    <configuration default="true" type="Remote" factoryName="Remote">\n\
      <option name="USE_SOCKET_TRANSPORT" value="true" />\n\
      <option name="SERVER_MODE" value="false" />\n\
      <option name="SHMEM_ADDRESS" value="javadebug" />\n\
      <option name="HOST" value="localhost" />\n\
      <option name="PORT" value="5005" />\n\
      <method />\n\
    </configuration>\n\
    <configuration default="true" type="TestNG" factoryName="TestNG">\n\
      <module name="" />\n\
      <option name="ALTERNATIVE_JRE_PATH_ENABLED" value="false" />\n\
      <option name="ALTERNATIVE_JRE_PATH" />\n\
      <option name="SUITE_NAME" />\n\
      <option name="PACKAGE_NAME" />\n\
      <option name="MAIN_CLASS_NAME" />\n\
      <option name="METHOD_NAME" />\n\
      <option name="GROUP_NAME" />\n\
      <option name="TEST_OBJECT" value="CLASS" />\n\
      <option name="VM_PARAMETERS" value="-ea" />\n\
      <option name="PARAMETERS" />\n\
      <option name="WORKING_DIRECTORY" value="$PROJECT_DIR$" />\n\
      <option name="OUTPUT_DIRECTORY" />\n\
      <option name="ANNOTATION_TYPE" />\n\
      <option name="ENV_VARIABLES" />\n\
      <option name="PASS_PARENT_ENVS" value="true" />\n\
      <option name="TEST_SEARCH_SCOPE">\n\
        <value defaultName="moduleWithDependencies" />\n\
      </option>\n\
      <option name="USE_DEFAULT_REPORTERS" value="false" />\n\
      <option name="PROPERTIES_FILE" />\n\
      <envs />\n\
      <properties />\n\
      <listeners />\n\
      <method />\n\
    </configuration>\n\
    <configuration default="true" type="Application" factoryName="Application">\n\
      <option name="MAIN_CLASS_NAME" />\n\
      <option name="VM_PARAMETERS" />\n\
      <option name="PROGRAM_PARAMETERS" />\n\
      <option name="WORKING_DIRECTORY" value="$PROJECT_DIR$" />\n\
      <option name="ALTERNATIVE_JRE_PATH_ENABLED" value="false" />\n\
      <option name="ALTERNATIVE_JRE_PATH" />\n\
      <option name="ENABLE_SWING_INSPECTOR" value="false" />\n\
      <option name="ENV_VARIABLES" />\n\
      <option name="PASS_PARENT_ENVS" value="true" />\n\
      <module name="" />\n\
      <envs />\n\
      <method />\n\
    </configuration>\n\
    <configuration default="true" type="JUnit" factoryName="JUnit">\n\
      <module name="" />\n\
      <option name="ALTERNATIVE_JRE_PATH_ENABLED" value="false" />\n\
      <option name="ALTERNATIVE_JRE_PATH" />\n\
      <option name="PACKAGE_NAME" />\n\
      <option name="MAIN_CLASS_NAME" />\n\
      <option name="METHOD_NAME" />\n\
      <option name="TEST_OBJECT" value="class" />\n\
      <option name="VM_PARAMETERS" value="-ea" />\n\
      <option name="PARAMETERS" />\n\
      <option name="WORKING_DIRECTORY" value="$PROJECT_DIR$" />\n\
      <option name="ENV_VARIABLES" />\n\
      <option name="PASS_PARENT_ENVS" value="true" />\n\
      <option name="TEST_SEARCH_SCOPE">\n\
        <value defaultName="moduleWithDependencies" />\n\
      </option>\n\
      <envs />\n\
      <patterns />\n\
      <method />\n\
    </configuration>\n\
    <configuration default="true" type="AndroidRunConfigurationType" factoryName="Android Application">\n\
      <module name="" />\n\
      <option name="ACTIVITY_CLASS" value="" />\n\
      <option name="MODE" value="default_activity" />\n\
      <option name="DEPLOY" value="true" />\n\
      <option name="ARTIFACT_NAME" value="" />\n\
      <option name="TARGET_SELECTION_MODE" value="EMULATOR" />\n\
      <option name="USE_LAST_SELECTED_DEVICE" value="false" />\n\
      <option name="PREFERRED_AVD" value="" />\n\
      <option name="USE_COMMAND_LINE" value="true" />\n\
      <option name="COMMAND_LINE" value="" />\n\
      <option name="WIPE_USER_DATA" value="false" />\n\
      <option name="DISABLE_BOOT_ANIMATION" value="false" />\n\
      <option name="NETWORK_SPEED" value="full" />\n\
      <option name="NETWORK_LATENCY" value="none" />\n\
      <option name="CLEAR_LOGCAT" value="false" />\n\
      <option name="SHOW_LOGCAT_AUTOMATICALLY" value="true" />\n\
      <option name="FILTER_LOGCAT_AUTOMATICALLY" value="true" />\n\
      <method />\n\
    </configuration>\n\
    <configuration default="false" name="app" type="AndroidRunConfigurationType" factoryName="Android Application">\n\
      <module name="app" />\n\
      <option name="ACTIVITY_CLASS" value="" />\n\
      <option name="MODE" value="default_activity" />\n\
      <option name="DEPLOY" value="true" />\n\
      <option name="ARTIFACT_NAME" value="" />\n\
      <option name="TARGET_SELECTION_MODE" value="SHOW_DIALOG" />\n\
      <option name="USE_LAST_SELECTED_DEVICE" value="false" />\n\
      <option name="PREFERRED_AVD" value="" />\n\
      <option name="USE_COMMAND_LINE" value="true" />\n\
      <option name="COMMAND_LINE" value="" />\n\
      <option name="WIPE_USER_DATA" value="false" />\n\
      <option name="DISABLE_BOOT_ANIMATION" value="false" />\n\
      <option name="NETWORK_SPEED" value="full" />\n\
      <option name="NETWORK_LATENCY" value="none" />\n\
      <option name="CLEAR_LOGCAT" value="false" />\n\
      <option name="SHOW_LOGCAT_AUTOMATICALLY" value="true" />\n\
      <option name="FILTER_LOGCAT_AUTOMATICALLY" value="true" />\n\
      <method />\n\
    </configuration>\n\
    <list size="1">\n\
      <item index="0" class="java.lang.String" itemvalue="Android Application.app" />\n\
    </list>\n\
    <configuration name="&lt;template&gt;" type="Applet" default="true" selected="false">\n\
      <option name="MAIN_CLASS_NAME" />\n\
      <option name="HTML_FILE_NAME" />\n\
      <option name="HTML_USED" value="false" />\n\
      <option name="WIDTH" value="400" />\n\
      <option name="HEIGHT" value="300" />\n\
      <option name="POLICY_FILE" value="$APPLICATION_HOME_DIR$/bin/appletviewer.policy" />\n\
      <option name="VM_PARAMETERS" />\n\
    </configuration>\n\
    <configuration name="&lt;template&gt;" type="#org.jetbrains.idea.devkit.run.PluginConfigurationType" default="true" selected="false">\n\
      <option name="VM_PARAMETERS" value="-Xmx512m -Xms256m -XX:MaxPermSize=250m -ea" />\n\
    </configuration>\n\
    <configuration name="&lt;template&gt;" type="WebApp" default="true" selected="false">\n\
      <Host>localhost</Host>\n\
      <Port>5050</Port>\n\
    </configuration>\n\
  </component>\n\
  <component name="ShelveChangesManager" show_recycled="false" />\n\
  <component name="TaskManager">\n\
    <task active="true" id="Default" summary="Default task">\n\
      <changelist id="511a5b16-839c-4910-93b2-ff8c96a3b2cb" name="Default" comment="" />\n\
      <created>1428353712771</created>\n\
      <updated>1428353712771</updated>\n\
    </task>\n\
    <servers />\n\
  </component>\n\
  <component name="ToolWindowManager">\n\
    <frame x="49" y="23" width="1391" height="877" extended-state="6" />\n\
    <editor active="false" />\n\
    <layout>\n\
      <window_info id="Palette&#9;" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Changes" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Designer" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Terminal" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Debug" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.4" sideWeight="0.5" order="3" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Event Log" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="true" content_ui="tabs" />\n\
      <window_info id="Favorites" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="true" content_ui="tabs" />\n\
      <window_info id="Build Variants" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="true" content_ui="tabs" />\n\
      <window_info id="Version Control" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Gradle Console" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="true" content_ui="tabs" />\n\
      <window_info id="Messages" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Android" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="TODO" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="6" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Gradle" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Structure" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Maven Projects" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Commander" active="false" anchor="right" auto_hide="false" internal_type="SLIDING" type="SLIDING" visible="false" weight="0.4" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Application Servers" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Project" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="true" weight="0.24981467" sideWeight="0.5" order="0" side_tool="false" content_ui="combo" />\n\
      <window_info id="Run" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="2" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Memory Monitor" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="-1" side_tool="true" content_ui="tabs" />\n\
      <window_info id="Cvs" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="4" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Message" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Ant Build" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Find" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.33" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />\n\
      <window_info id="Hierarchy" active="false" anchor="right" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.25" sideWeight="0.5" order="2" side_tool="false" content_ui="combo" />\n\
      <window_info id="Inspection" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" weight="0.4" sideWeight="0.5" order="5" side_tool="false" content_ui="tabs" />\n\
    </layout>\n\
  </component>\n\
  <component name="Vcs.Log.UiProperties">\n\
    <option name="RECENTLY_FILTERED_USER_GROUPS">\n\
      <collection />\n\
    </option>\n\
    <option name="RECENTLY_FILTERED_BRANCH_GROUPS">\n\
      <collection />\n\
    </option>\n\
  </component>\n\
  <component name="VcsContentAnnotationSettings">\n\
    <option name="myLimit" value="2678400000" />\n\
  </component>\n\
  <component name="VcsManagerConfiguration">\n\
    <option name="myTodoPanelSettings">\n\
      <TodoPanelSettings />\n\
    </option>\n\
  </component>\n\
  <component name="XDebuggerManager">\n\
    <breakpoint-manager />\n\
  </component>\n\
  <component name="editorHistoryManager">\n\
    <entry file="file:\/\/$PROJECT_DIR$/app/src/main/java/com/example/wobba/'+ argv.proj.toLowerCase() + '/MainActivity.java">\n\
      <provider selected="true" editor-type-id="text-editor">\n\
        <state vertical-scroll-proportion="0.0" vertical-offset="0" max-vertical-offset="630">\n\
          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />\n\
          <folding />\n\
        </state>\n\
      </provider>\n\
    </entry>\n\
    <entry file="file:\/\/$PROJECT_DIR$/app/src/main/res/layout/activity_main.xml">\n\
      <provider selected="true" editor-type-id="android-designer">\n\
        <state />\n\
      </provider>\n\
      <provider editor-type-id="text-editor">\n\
        <state vertical-scroll-proportion="0.0" vertical-offset="0" max-vertical-offset="255">\n\
          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />\n\
          <folding />\n\
        </state>\n\
      </provider>\n\
    </entry>\n\
  </component>\n\
</project>';