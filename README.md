# Restaurant Reviews App Stage 1

---

Part of UDACITY FRONT END WEB NANODEGREE

## Project Overview:

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Local Installation?

1.  Download the .zip file or clone the repository
2.  In the downloaded folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    - In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
    - Note - For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.

3.  With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

## Using the Application

The Restaurant Review App is simple to use: You are provided with a map and filtering options. Select the neighborhood in New York City and the type of cuisine you are interested in from the drop down selectors. The options will be filtered based on your preferences, and the map will update as well with your selections. Once your options are provided below, as restaurant cards with a photo, you can select one to view more information. A full photo, a map, and all the reviews will be provided for the selected restaurant. There is a breadcrumb navigation near the top of this view to return to the selection screen. Easy as that!

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
