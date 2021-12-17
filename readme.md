## ⛔️ DEPRECATED ⛔️
Jfrog sunset Bintray, a new repo will be created with the latest rn update that no longer uses Bintray. See more : https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/

# React Native Tera's Template 

React Native template with Tera's configuration, ready to use.

## Generate a new project from this template

Click 'Use This Template' to create a new Github repo using this template. Then fill repository information for generating new project from this template.

Clone your repo and run `npm install` or `yarn install` on your terminal.

## Configuration
#### 1. Rename React Native Application 
Change the name of your application in the file 'app.json'.

```json5
{
  "name": "yourapp.package", //without com.
  "displayName": "Your App Name"
}
```
> Don't use 'com.' in the name field (package name), because it will automatically be added when you do the next configuration.

After changing the information in `/app.json`, make sure `android` & `ios` has been deleted or not generated previously.
Then run following command:
```shell script
react-native eject
```
> If this command doesn't work, make sure you have run `yarn install` or `npm install` beforehand
>> and make sure the `android` & `ios` directory is not in the project directory.

After the android & ios folder has been generated, open the file `/android/app/build.gradle`. Add the line below:
```
apply plugin: "com.android.application"

// add this line
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"

...
```
> In some cases you will have to run a few commands to clean the cache. [Check here](https://gist.github.com/teukuraja/dc84052760367526e3d4310e1c42cb08)

##### Test the application is work
Run the command below to run the application
```shell script
yarn android ENV=dev
```

#### 2. Set up application font
Put your font file into the `/app/Assets/Fonts/` directory.

Then configure your font, so it's easy to use. Open the file `/app/Themes/Fonts.js`, replace a few lines below:
```js
// example: Poppins-Regular.ttf -> so your 'regular' value => Poppins-Regular

export const FontType = {
  regular: 'YourFontName-Regular', 
  bold: 'YourFontName-Bold',
  medium: 'YourFontName-Medium',
  light: 'YourFontName-Light'
};
```
After configuring the above, run the following command to link the fonts to the fonts folder in the android & ios directory:
```shell script
react-native link
```

## Project Structure
Here is the project directory structure tree:
```
/
|-- android
|-- ios
|-- app
    |-- Assets
        |-- Images
        |-- Fonts
    |-- Components
        |-- index.js
    |-- Constants
    |-- Features
    |-- I18n
        |-- en-EN.json
        |-- id-ID.json
    |-- Redux
        |-- index.js
        |-- Reducers.js
        |-- Store.js
    |-- Router
        |-- Navigator
        |-- BaseApp.js
        |-- Routes.js
        |-- Navigation.config.js
        |-- Screen.config.js
    |-- Themes
        |-- Images.js
        |-- Colors.js
        |-- Fonts.js
        |-- Icons.js
        |-- index.js
    |-- Types
    |-- Utils
|-- app.json
|-- index.js
```

#### Add new feature
Before you create a new feature, create a directory structure with a sample like this:
```
Features
|-- MyFeature
    |-- Compoenents
        |-- YourComponents.component.js
        |-- YourComponents.style.js
    |-- Screens
        |-- YourFeature.screen.component.js
        |-- YourFeature.screen.style.js
    |-- MyFeature.container.js
    |-- MyFeature.reducer.js
    |-- MyFeature.actions.js
```
Then don't forget to register your screen at `Screen.config.js`, then don't forget to register your screen in Screen.config.js and the navigation components in the `./Router/Navigator/` directory.

#### Add new components
Here's the folder structure of a global component in your project:
```
Components
|-- YourComponents
    |-- YourComponents.component.js
    |-- YourComponents.style.js
|-- index.js    <-- regist your component on this file
```

#### Add new assets (images or icons)
Put your image files in the directory `./app/Assets/Images`, then don't forget to register your assets in the files available on the Themes.
```
/
|-- Assets      <-- put your image/icons asset here
    |-- Images 
    |-- Icons 
|-- Themes      <-- link/import your assets here
    |-- Images.js
    |-- Icons.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
