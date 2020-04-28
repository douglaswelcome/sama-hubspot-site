# **Hi There Sama Family**

This is the repo for the Samasource Marketing Website and Email templates, built on the Hubspot CMS.

### **Here's how this project works**

There are alot of seperate, moving functions to this project, but as the Hubspot CLI Tooling becomes more robust the goal is to unify these functions under that tooling. Also, this project originally used Gulp scripts for a lot of the processing, but these have been slowly moved over to npm scripts.

Here are the major functions under this project:

### **Website Development**

Currently, the website development environment consists of a development aka 'sandbox' portal on Hubspot and Samasource's production portal. In order to run the HUBL templating code properly, there is no local server development at this time. Rather, when developing and running the tooling, all code changes are pushed automatically to the sandbox server and can be reviewed in real time. In other words, the sandbox is a reflection of whatever branch you are currently running locally.

To work on this project, use best git practices: 
* Pull `develop`
* Branch and name `feature/YOURFEATURE`
* When done, submit pull request to `develop`
* Submit pull request from `develop` to `master` to push code live

**DO NOT COMMIT/PUSH TO MASTER** unless you want your code to go live. Any commits to the master branch will trigger a github action that will deploy to the Samasource Production Portal aka **GO LIVE**.

### **Image Uploading and Optimization**

When running the tooling, any img's uploaded to the `_src/img` directory will automatically be optimized and unploaded to the **PRODUCTION** portal. This allows designers to quickly overwrite images and immediately see updates on the web. The Sandbox Portal uses the Production portal's static file links, hence why you are able to see assets (fonts, images, etc) while still on the Sandbox Portal

Right now this tooling uses a Gulp script to upload via FTP, but Hubspot has introduced FTP access, so that will be a future update for this project.

### **Email Development**

Currently, our team is assesing how we want to create and develop email templates. There is a custom robust tooling here that uses MJML to spit out Hubspot friendly html modules. These can then be combined to create quick email templates. For now the tooling for these is run seperately. For more information, ask Douglas (dwelcome@samasource.com).

## **To Get Started:**

### Required:
* node version `^11.6.0`
* npm version `^6.14.4`

### To Run Web Development and Images Optimization/Uploading

* run `npm install`
* Create a `hubspot.config.yml` file, either manually or with `hs init`
* Put in your api credentials to `hubspot.config.yml` like so:
    ```
    defaultPortal: 'DEV'
    portals:
   Sample apikey entry, manually entered
  - name: 'DEV'
    portalId: XXXXXXX
    authType: 'apikey'
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXX'
  
  - name: 'PROD'
    portalId: XXXXXXX
    authType: 'apikey'
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXX' 
    ```

* create a `.env` file
* Put in your FTP credentials to your `.env` like so:
    ```
    FTP_USER=Yyouremail@samasource.com
    FTP_PWD=yourhubspotpassword
    ```
* run `npm run web`
* Your Set! You'll see a new browser open with a warning. This has to do with the SSL cert, but since we are developing its not a problem. Hit the `advanced` button then proceed to site.

## **A Few Considerations:**

The staging server, run by browsersync, is actually proxying the hubspot sandbox portal. To view a page, create a page on the sandbox portal and then add the slug to the localhost:XXXX in your browser. If you are experiencing slow reload, I suggest using the IP address (you'll see it in your terminal). MacOSX has a strange thing with Bonjour (<a href="https://stackoverflow.com/questions/24807786/browsersync-extremely-slow">see here</a>) but I am not sure how to implement a fix at this time.



### Further Resources:

* <a href="https://designers.hubspot.com/docs?_ga=2.52381166.650833058.1588003746-332362308.1582046786">Hubspot Documentation</a>
* <a href="https://mjml.io/documentation/">MJML Documentation</a>
* <a href="https://designers.hubspot.com/slack">Join the Hubspot Dev Slack</a>

