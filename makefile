# Set the default parameters for the build, can be overridden with either an
# environment variable or by using `make target KEY=VALUE`.

# ANDROID COMMANDS
run-android:
	. prepare-env.sh .env.$(ENV) .env && react-native run-android

run-android-release:
	. prepare-env.sh .env.$(ENV) .env && react-native run-android --variant=release

build-android-apk:
	ENV_FILE=.env.$(ENV)
	. prepare-env.sh .env.$(ENV) .env && cd android && ./gradlew clean && ./gradlew assembleRelease

build-android-bundle:
	ENV_FILE=.env.$(ENV)
	. prepare-env.sh .env.$(ENV) .env && cd android && ./gradlew clean && ./gradlew bundleRelease

# IOS COMMANDS
run-ios:
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios --simulator="iPhone XR"

run-ios-release:
	# Prepare a 'release' version of the iOS app and run in simulator
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios --configuration=release

run-reset:
	. prepare-env.sh .env.$(ENV) .env && react-native start --reset-cache
