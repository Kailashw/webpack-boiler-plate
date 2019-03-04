# Project Name : react-boiler-plate
*This Project helps in understanding how the "create-react-app" works behind the scence. This react boiler plate project is built using webpack, babel and React.*

## Steps to follow to use this boiler-plate.
<ol>
<li> You can either clone the repo by using command <b>git clone https://github.com/Kailashw/webpack-boiler-plate </b> or simply downloading the zip file from the location. </li>
<li> Go to the location of downloaded file and open command prompt.</li>
<li> Run "npm install"</li>
<li> Followed by "npm launch" </li>
</ol>

## Steps that you should follow to build this boiler plate from scratch.

Open the command prompt and start executing the following commands sequentially.
<ol>
<li>mkdir webpack-bolier-plate </li> // this is the folder that we will work on
<li>cd webpack-bolier-plate </li> 
<li>npm init -y </li> // to create a package.json file.
<li>npm install react react-dom </li> // installing react and react-dom 
<li>npm install --save-dev @babel/core @babel/preset-env @babel/preset-react css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server babel-loader </li>
// installing supporting libraries 
</ol>


## Manipulation of Files.
* now create a file named webpack.config.js
* The following lines help to bundle all modules in app into single file. so let's define entry point and destination folder/filename.

        module.exports ={
            entry : './app/index.js',
            output : {
                path : path.resolve(__dirname,'dist'),
                filename : 'index_bundle.js'
            }
        }
* the followig lines help us set rules on our js and css files and how to deal with them and should be added after the 'output' entry in previous step.

        module :{
           rules :[
                { test : /\.(js)$/,use : 'babel-loader'},
                { test : /\.(css)$/,use:['style-loader','css-loader']}
            ]
        }

* now add following code, whcih defines which mode you want use your code and to which html page your bundle index_bundle.js file should be exported to. this should be added to module.export object.

        mode : 'development',
        plugins :[
            new HtmlWebpackPlugin({
                template : 'app/index.html'
            })
        ]

* create a new file named .babelrc and have following in that file.

        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
        }

* add follolwing inside the "scripts" section, to build and launch the app inside package.json
        
        "build": "webpack",
        "launch": "webpack-dev-server --open"

* run "npm run build" to see your first build exported to 'dist' folder 😊
* now run the "npm run launch" command to see the app working.

<br/>
<br/>
NOTE: <b>I have followed <a href="https://www.youtube.com/watch?v=Zb2mQyQRwqc"> this youtube video</a> tutorial but added my own customization on top of it. </b>