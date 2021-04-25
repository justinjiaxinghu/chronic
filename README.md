# chronic-app
Github Repo for Chronic

## Release Notes
v0.1
* Chronic frontend is up
* Chronic backend is up, found [here](https://github.com/Hellblazer1804/chronic_backend_improvised) 
* Page preview icons are implemented for pages 1 - 28
* Full page functionality are implemented for pages 2 - 4 (these are technically pages 4, 115, 126, resp.)

## Install Guide
Prereqs:
* [Node.js](https://nodejs.org/en/download/)

Download:
* Clone this repository

Running Chronic:
1. Clone the backend found [here](https://github.com/Hellblazer1804/chronic_backend_improvised)
2. Start up the backend server, instructions found in the link above
3. Navigate to where you cloned this repository
4. Run `npm install`
5. Run `npm start`
6. The app should start on `localhost:3000` automatically, if not, open a web browser and navigate to `http://localhost:3000`

## Troubleshooting
* Images may load slowly, please be patient! 

## Future Development
* For each page, you need the following:
  * A small preview image for the page selection button on the page selection screen
  * A full size image (to view the overall page when the page button is clicked)
  * An image for each specific node (subpassage) with its position relative to the full page (to make the clickable regions). Make sure the color of the font is dark, preferably black
  * An SVG generated from the previous bullet following the steps [here](https://stackoverflow.com/a/43897155)
  * An image for each specific node with a "right side up" orientation for when the user clicks on a specific node (subpassage) for easy readability
  * Simple and complex mp3s for each page


