# MedPal

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This React application allows a user to track their medications by curating a custom medication list. A user can search for a medication by brand name or generic name (spelling counts!) and a list of matching options of various strengths will populate. Once they find their matching medication name and strength, they can click on that option to populate a modal form. This form contains additional medication details for the user to select (quantity and frequency) before they officially add it to their medication list. Once they've added all of their medications to the list, they can view the list and see all of their medications and medication details in one place!

### Tech stack / Tools:
JavaScript, React, React Router, Cypress, HTML, CSS, REST APIs, Git, GitHub, Figma, Vercel

### Deployed Application:
https://medpal-ot7eb0f6j-dana-zacks-projects.vercel.app

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

To install & run:
- Clone the repository to your local machine
- Cd into the newly created directory
- Run 'npm install'
- Run 'npm start'

To initiate cypress testing:
- Run 'npm run cypress'

### App Preview:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

<img width="1393" alt="Screenshot 2024-03-02 at 3 17 57 PM" src="https://github.com/dana-zack/med-pal/assets/128552954/280894ef-17f3-4673-8a9a-0fcba194dca3">

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This was a solo project completed over the course of 5 days and approximately 35 hours.

### Backstory:
When I was working as a primary care provider, I would ask new patients: “What medications are you currently taking?”

Many patients did not know at all. Others had medication names scribbled on a piece of paper, but these scribbles lacked corresponding medication information (every med has a myriad of strength/dosing options). When taking over a patient’s care, it was critical to confirm current medications (name, strength, quantity, and frequency) because I was often responsible for refilling a patient’s entire medication list in our first office visit. Misprescribing medications could have a profound impact on a patient’s health (as well as put my medical license at risk).

Additionally, patients often visit the emergency room unexpectedly and--therefore–-don’t have their medication records at the ready. EMR systems vary across hospitals and often don’t pull the correct (or most updated) medication lists for patients across different healthcare systems.

This app would help bridge these gaps and provide a layer of protection for both patients and providers.

### Project Board:
https://github.com/users/dana-zack/projects/4/views/1

### WireFrame: 
https://www.figma.com/file/i3ZUSwEufPu7mXYKmp3hYv/MedPal?type=design&node-id=0-1&mode=design&t=Nz9wYwfY7kJi3zAp-0 <br>
(Note: this reflects the original design which was slightly modified during production)

### Equity Analysis:
https://docs.google.com/document/d/1aEzSCChsw4dU6TJwJyEFdaCDm28f-mtpDWUuzn61-0A/edit

### Public API:
https://lhncbc.nlm.nih.gov/RxNav/APIs/api-Prescribable.getDrugs.html

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Wins:
- Created my first responsive UI using CSS media queries
- Wrote thorough Cypress tests of both happy and sad paths
- Retrieved data from a public API endpoint dynamically based on a user's search input

Challenges :
- Implemented a modal component to overlay the application (this was also a big win!)

### Future Features:
- Create the ability to delete or edit medications on the medication list
- Continue to fine tune UI / responsiveness
- Add unit testing (react testing library)
- Build Node/Express backend so that medications added to the medication list can persist on page load

