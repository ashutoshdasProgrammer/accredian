
Youtube Vedio link:

https://youtu.be/5a9DSLhxt40

### Setup Instructions
1) First clone the github repository
 - git clone git@github.com:ashutoshdasProgrammer/accredian.git

2) Install the necessary packages.
 - npm install

3) Run the folder package
 - npm run dev

### Approach Taken
In the folder structure we have app/ and components/
app/ and components/
- Inside the app/ folder 
    - we have create the base tsx file <page.tsx> that will contain all the different components together can will create the webpage that we needed
    - we have <not-found.tsx> file so if anyone goes for the wrong file that is not present in the website then we will show them the custom error page.
- Inside the components/ folder
    - here we have different components file and animations folder that we use in our components to animate them so they look better like for scrolling, fadeing in and out etc...
    - we group together different components file in <page.tsx>

Here we focused on reuseability of the web components like animation, fadein-out.tsx using them again and agian.

For this project I have used tailwind.css to design the frontend.

For smoother scolling animations I used GSAP, Scroll Trigger and lucide-icons for the website

### AI Usage Explanation
- I used CHATGPT and GoogleAI
- I made AI give me what all components i may require for proper structuring of the website
- Generated a Figma model for the website and then redesigned it
- Help me analyse the color combination for the website and effect for the webpage.
- I specially opted for the soft colors as it enhances the page looks
- It helped me choose particular font-size and font-color for the webpage.
- Help me research on the particulars of the test and search for different animations on "codepen"

### Improvements you would make with more time
- With time i would have added more animations with statistics and charts for the company.
- I would have implemented a validation for the contact page so that client can contact us.
- Looked for basic "sql injections", "XSS" and other vulnerabilites so that i can make the website more secure.
- Implemented working backend route in app/api/leads/routes.ts so that we could have implemented mock data and tested the website in real-world environment.
- Added Images of our success stories, client satisfaction and vedios of our success rate for the project
