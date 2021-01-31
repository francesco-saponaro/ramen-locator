# RAMEN LOCATOR
# UX
## Project Goals
Over the last 10 years, Japanese Ramen, thanks to its rich soup and tasty hand-made noodles, became extremely popular in the western world.  
I wanted to create a website that would give you more info on the types of ramen available and where to find them.  
The website is meant to be an helping hand, for both travellers and Ramen enthusiasts of any age, to either get their Ramen fix or to learn a little more on the types of Ramen available and their location.
## User Stories
### As a first time user I want:
* To know where the nearest Ramen restaurant is, so I can choose where to eat either on the same day or imminently.
* To learn about the types of Ramen available, so I can have more information on what to order next time I eat Ramen.
* To know about different types of Ramen depending on the Japanese region, so I can make an informed decision when I plan my trip.
* To sign up to the Newsletter mailer, so I can be up to date with the latest news, recipes and updates regarding the Ramen world.
* To test my Ramen skills as a recreational time.
### As a returning user I want:
* To know where the nearest Ramen restaurant is, so I can choose where to eat either on the same day or imminently.
* To know about different types of Ramen depending on the Japanese region, so I can make an informed decision when I plan my trip.
* To test my Ramen skills as a recreational time.
## Design Choices
The overall feel of the website is designed to be playful and inclined towards the Japanese Animation and Manga culture. The following design choices were made with this in mind:
### Fonts
* The Balsamiq Sans font was chosen as it resembles the fonts seen in Comic books, thus recreating the feel specified above.
### Icons
* All Icons were chosen keeping in mind the Comic book and playful feel specified above.
### Colours
* The primary colors are red and white as to resembles the Japoanese flag. Various shades of grey were used to balance the overall feel, making it softer on the eye.
### Styling 
* Cards, Icons and Container boxes were giver rounded corners, when possible, to further enhance the feel specified above.
### Backgrounds
* The  Main page background video was chosen to immediately display and give an idea of the succulent nature of Ramen.
### Images
* The Main page and regional Ramen dish images were chosen based on their picture quality and lighting.
* The Images of the Form submission and Quiz results Modals were chosen to further give the user the playful and Comic Book feel specified above.

## Wireframes
[Link to Wireframes](//francesc-droid.github.io/ramen-locator/media/wireframes/ramen-locator-wireframe.pdf)

# Features
## Existing features
* Geolocator Google map - Allows First time or returning users to find the Ramen restaurants nearest to their current location, by having them look at the map and navigating through it by dragging it, zooming on it and clicking on the marker/infowindow.
* Main page Tab area - Allows first time users to learn more about the 4 main types of Ramen available, by clicking on each tab and having the relevant information appear.
* Main page Mailing list area - Allows first time or returning users to sign up to the Newsletter mailer, by filling up the subscription form.
* Toggle slider menu - Allows first time or returning users to navigate to various regional Ramen type pages, access the Sign up modal, take the Ramen quiz or go back to the Home page, by clicking on the japanese flag home link.  
They can exit the menu by clicking on the Times closing icon.
* Regional Ramen type pages - Allows first time or returning users to learn more about specific Ramen types by Japanese region, by clicking on the relevant page.
* Google map by region - Allows first time or returning users to check the Ramen restaurants location for each region available, by clicking on the relevant region and navigating through it's map.
* Sign up modal - Allows first time or returning users to sign up to the Newsletter mailer, by filling up the modal form.
* Ramen quiz - Allows first time or returning users to test their Ramen knowledge by taking the Quiz via the link on the slider menu.
## Potential features
* How to cook Ramen section - It would allow first time or returning users see instruction and guidelines on how to cook homemade Ramen. 
* Ramen shop section - It would allow first time or returning users to buy Ramen cooking items or Ramen paraphernaelia.

# Technologies used
* HTML 
    * The project uses HTML5 as it is the latest and upgraded version of HTML.
* CSS
    * The project uses CSS3 as it is an easy, consistent, lightweight and fast language to style the HTML.
* JavaScript
    * The project uses Javascript to interact with the DOM and communicate with API's.
* [FontAwesome](https://fontawesome.com/)
    * The project uses FontAwesome to take advantage of  the extensive icons libraries.
* [Google Fonts](https://fonts.google.com/)
    * The project uses Google fonts to take advantage of extensive fonts libraries.
* [Google Maps API](https://developers.google.com/maps/documentation)
    * The project uses Google Maps API to provide the site with both a Geolocator map and various locations Maps.
* [EmailJS API](https://www.emailjs.com/)
    * The project uses EmailJS API to allow sending emails using client side technologies only, without requiring a server.

# Testing
## Validations
* [Home page HMTL validation](/media/validations/index-validation.png)
    * Two warnings showing, however, Headings are absolutely not needed
* [Regional Pages HTML validation](/media/validations/regional-validation.png)
* [Quiz page HTML validation](/media/validations/quiz-validation.png)
* [Style.css validation](/media/validations/style.css-validation.png)
* [Regional.css validation](/media/validations/regional.css-validation.png)
* [Quiz.css validation](/media/validations/quiz.css-validation.png)

## Lighthouse
* I have optimized and resized the autoplay video for better web performance.
* I have resized the four tabs images for better performance and loading times.

## Client stories testing
The website flow is designed so that every page is accessible through the slider menu, which is present at every page. The only exception is the quiz page, which only has an home page link.
### Testing client stories from UX section
#### As a user I want:
* To know where the nearest Ramen restaurant is, so I can choose where to eat either on the same day or imminently.
    * As soon as the user lands in the Home page he will see a geolocator map.
* To learn about the types of Ramen available, so I can have more information on what to order next time I eat Ramen.
    * In the Home page, the user has access to four switchable tabs, which give the opportunity, thanks to Javascript, to check all four types of Ramen while staying in the Home page.
* To know about different types of Ramen depending on the Japanese region, so I can make an informed decision when I plan my trip.
    * From the slider menu, which is accessible from every page with the exception of the quiz page, the user can navigate to every regional page available. 
* To sign up to the Newsletter mailer, so I can be up to date with the latest news, recipes and updates regarding the Ramen world.
    * The user can sign up to the Newsletter either through the sign up form in the main page, or through the modal which is accessible from the slider menu, which in turn is accessible on every page.
* To test my Ramen skills as a recreational time.
    * The user can take the Ramen knowledge quiz accessible through the slider menu, which is accessible from every page.

## Browsers
* Mozilla, Chrome, Edge and Safari all display same projected layout and have no issues and at any screen sizes.
*  Mozilla, Chrome, Edge and Safari display an "allow location" alert which requires authorisation in order to show the geolocation in the map.

## Screen sizes
* The website is responsive through percentages and media queries, starting from a screen size as small as 280px to as large as 1680px.
* All features are available and visible on every screen size.

## Bugs discovered
* Safari was not auto-playing or even displaying the Home page video. I then published the website and finally worked. The issue was for it to work it cannot be on Local host.
* Map marker icons, menu icons and quiz home page icon were not working on deployed version. I have changed the path from relative to absolute and now they work correctly.

# Deployment 
This project was developed using Gitpod, committed to Github and pushed to Github using the built in function.

To deploy this page to Github Pages from it's [Github repository](https://github.com/francesc-droid/ramen-locator), the following steps were taken:
1. Log into Github.
2. From the list of repositories on the screen, select "ramen-locator".
3. From the menu items near the top of the page, select "Settings".
4. Scroll down to the Github pages section.
5. Under "Source" click the drop down menu labelled "None" and select "Main" branch.
6. Click "Save" and the website is now deployed.
7. Above "Source" you will find the link to the deployed website.

## How to run this project locally
To clone this project into Gitpod you will need:
1. A Github account. Create a Github account [here](https://github.com/).
2. Use the Chrome browser.

Then follow these steps:
1. Install the Gitpod browser extension for Chrome.
2. After installation restart the browser.
3. Log into Github with your Github account.
4. Navigate to the project Github repository.
5. Click the green "Gitpod" button.
6. This will trigger a new Gitpod workspace to be created from the code in Github where you can work locally.

To work on the project code within a local IDE such as VSCode etc.
1. Follow this link to the [Project Github repository](https://github.com/francesc-droid/ramen-locator).
2. Under the repository name, click "Code" and then "Clone" or "Download ZIP".
3. In the "Clone with the HTTPs" section, copy the clone URL for the repository.
4. In your local IDE, open the terminal.
5. Change the current working directory to the location where you want the directory to be cloned.
6. Type "git clone",  and then paste the URL you copied in step 3.
7. Press "Enter" and your local clone will be created.

# Credits
## Code
### JavaScript
* The Maps JavaScript code was researched through The Google Maps and Places API pages and various Youtube instructional videos
* The "selectItem" function in the script.js file was taken from [Traversy Media](https://www.traversymedia.com/)
* The "clearValue" function was taken from [Traversy Media](https://www.traversymedia.com/)
* The "sendMail" function was taken from [EmailJS](https://www.emailjs.com/docs/) through [Code Institute](https://codeinstitute.net/)


## Content
### Text 
* The Main Page Hero section text and the Tab content items text was sourced at [Tokyo Ramen Tours](https://www.tokyoramentours.com/post/ramen-types-big-4)
* The Regional Ramen pages text wa sourced at [Gurunavi](https://gurunavi.com/en/japanfoodie/2018/02/regional-ramen.html)
### Quiz
* The Quiz questions were partly sourced at [All the tests](https://www.allthetests.com/knowledge-trivia-tests/food-drinks/other-food-drinks/quiz23/1182521396/do-you-know-ramen-noodles)

## Media 
### Video
* The video was sourced at [Pexels](https://www.pexels.com/video/person-using-chopsticks-getting-food-4224218/) - Video by alleksana from Pexels  
### Icons
* The Main and Regional page menu Icon was sourced at <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> 
*  The Map Markers Icon was sourced at <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a>
* The Quiz Home page Icon was sourced at <a href="https://www.freepik.com/vectors/icons">rawpixel.com - www.freepik.com</a>
### Images
* The Images of the Form submission Modals and Quiz results Modals were sourced at <a href='https://www.freepik.com/vectors/food'>Food vector created by catalyststuff - www.freepik.com</a>
* The Main Page Tab content Images were sourced at [Tokyo Ramen Tours](https://www.tokyoramentours.com/post/ramen-types-big-4)
* The Regional Ramen dish images were sourced at [Gurunavi](https://gurunavi.com/en/japanfoodie/2018/02/regional-ramen.html)

