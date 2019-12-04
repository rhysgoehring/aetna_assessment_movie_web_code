# Rhys Goehring's Movie Web Code Test

Thank you very much for the opportunity to complete this assessment and hopefully move forward to the next steps of joining the Aetna team! I enjoyed this assessment and hope you like what I've done with the project.

------------------------------------------------------------------------------------------------------------------------


## How I Approached the Problem
The origial project was structured and layed out well which made getting an understanding of what was happening in the app very straightforward before I started working on it.

I wanted my code to be just as easy to follow. I considered avoiding class components and only utilizing the hooks API, but I wanted to display a good understanding of React concepts both old and new.

I decided to use class components on container components such as views and App.js that connected to the redux store and/or needed lifecycle methods that were easier to understand than using useEffect.

The rest of my components are functional and only track state locally if necessary.

Following the principle of simplicity, I also decided to manage all styles in app.scss rather than using a more modular structure as there aren't an overwhelming amount of classes being used in the app.

I also setup a Trello board with checklists for the requirements in each story so I could be sure I didn't leave anything out.

## Difficulties
- I ran into a little bit of trouble using the spread operator and arrow functions within my class components and traced it to being a webpack / babel issue. After adding a couple plugins everything worked as expected.

- I had some issues in the title search part of the assessment specifically in dealing with changing the URL. I found using history directly solved my problems. There is still one issue I wasn't able to resolve:
    - If the user navigates to the Home page from the MovieDetail page and then presses the forward button in their browser to move back to MovieDetail, no movie data loads.

## Thoughts on the Project/Assessment
I thought this assessment was an excellent way of testing React/Redux knowledge. I have completed assessments for other roles that are either a little too simplified and didn't give an opportunity to show what I know as well as assessments that come with a very large codebase that is difficult to get familiarized with in a day. This project was not too large but had the complexity needed to show off the right skills.



