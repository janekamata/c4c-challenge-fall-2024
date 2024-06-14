# Code4Community Fall 2024 Technical Challenge
## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together

## Setup Instructions

The setup is the same as the starter code.

1. In a terminal, run `npm install` **at the root of this project** to install the required packages
2. Run `npm run dev` **at the root of this project** to start the app locally
3. Visit `http://localhost:3000` to view the website. The backend will be available at `http://localhost:4000`

## Overview

This website creates an interactive dashboard for users to view, add, and delete partner organization information.

A new partner can be added to the dashboard using the *New Partner* button, which shows a form. The form requires the following information:
- Partner Name: text
- Partner Logo Source: URL
- Partner Description: text

By default, partners are inactive unless the *Active* checkbox on the form is checked.

Once the *Submit* button is clicked on a completed form, the new partner will show up in the dashboard. The partners are stored using Node.js in-memory storage, so while the same server instance is open, all users will see the same information.

Users are able to delete an individual organization's information card using the *Delete* button. 

## Design Decisions
As someone new to full-stack website development, especially React front-end, I wasn't sure how to structure my files. I moved the CSS sheets into a styles folder, and I ended up created a new folder for additional form handlers I needed. I additionally created a new component called *Form*, which I used in the dashboard for new partner data entry. 

Another decision I made was keeping the backend all in server.js. Ideally, the server would be broken up more into middleware, services, etc., but since the required backend features were simplistic I decided to keep it all together.

## Reflection
I learned a lot from this project. I have never worked on front-end React before, so it was an entirely new experience. 

Knowing what I know now, I would have done more to make the website easier to see at different window sizes, since I think it would have been easier to implement early. This is a feature that my project does not currently have, but I wish I addressed it when I started.

I would definitely do some things differently with more time. Similar to above, I think making the website responsive to resizing the window would be the main thing as well as the card layout at different numbers of cards and window sizes. Adding data validation for the endpoint would be another improvement with more time as well. From a code design perspective, having more reusable functions would be a better design, so with time there may have been more opportunities to abstract.

I don't think I went out of my way to implement any bonus features. I decided to add some basic validation to the form to submit a new partner. I also made the *New Partner* button change the visibility of the form, which was not a required functionality. Using CSS, I additionally made it so that large descriptions would show with a scroll bar so that all cards can maintain the same size while still showing all of the information. 