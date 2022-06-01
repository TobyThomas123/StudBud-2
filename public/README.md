

# StudBud - A learning assistance tool for children and students with concentration and learning difficulties.

The first few commits were in my other repository which had to be abandoned due to technical issues. Drew assisted with this.

__Note: Mobile version works best in iPhone XR mode in Chrome__ <br>
__Desktop version tested in Chrome on 13 inch MacBook Pro__
__Music player was tempremental in Chrome, but Safari definitely works__

* I am aware that there are still slight issues with the compatibility of the music player and also the horizontal scrolling of the covey table in mobile mode, I would rectify these in future versions but thus far have chosen to devote my time to more pressing areas of the design. *

Since the creation of my mockups in the previous assignment, I have made a number of changes to my website. These were done to perfect the usability or clarity of the features and interactions which are expressed through the design and were completed based on feedback from user testing on family, friends and my course teachers.

* To start with, I reduced the quantities of text shown on each page. This better conforms to my chosen target group as these people would find too much text distracting and difficult to read. Based on the feedback given for the previous assignment, I chose to make the design less childish and pastel-coloured while still remaining friendly and approachable. I also chose to have the background change in colour every when the page is refreshed to keep the page looking fresh and prevent boredom and monotony when studying. 

* Based on interviews I conducted on target demographics, it was clear that that the icons I had planned to implement were unflattering to the design, especially with the sickly grey selection boxes surrounding them. To clean up the design, I replaced these with written titles for the corresponding pages. This is also an improvement accessibility-wise as it allows screen readers used by those with visual impairments to read the description for each page.

Images: <br>
[Mobile contact info on mockup](#mobile-home-mockup.png) <br>



* Also in the mobile version, following advice from my father, who kindly participated in one of my user tests on the website, I removed changed the colour of many of the section backgrounds from a cream colour to a grey colour with white text. This made the text a great deal more legible by increasing the contrast and I took the opportunity to increase the line spacing and font weight as these were mentioned in interviews and academic papers as something which can assist dyslexic students with reading comprehension. I thought this was a vast improvement over previous designs and undoubtable increased the usabilty of the site.


Images: <br>
[Mobile _Music_ page on mockup](#mobile-music-mockup.png) <br>




Images: See above.

* I also received feedback from other students during class time, one of whom recommended I darken the the buttons when the are hovered to give the user more visual feedback on desktop and mobile versions. I completed this by using CSS to target certain buttons and reduce their opacity to 50% when hovered.

Images: <br>
[Desktop _Calendar_ page mockup](#desktop-calendar-mockup.png) <br>



* To allow the mobile version to remain visually appealing and useful, I had to use flexbox display modes to allow each section of the screen to stack underneath each other when the display is compressed. This works as how I envisioned it in the mockups and allows all elements to fill the screen properly, and remain usable on a small phone screen. 


* The dictionary lookup function utilises an online API to provide relevent definitions. I chose to place the search bar in the top right hand corner, in the menu bar. This allows the dictionary to be easy to find no matter which page the user is on. Hence, if the student is studying a textbook or website while listening to music or using the timer, the dictionary is always available and quickly to hand without disrupting study time. I used CSS break-points for many aspects of the mobile version of the app, and these allowed the dictionary search bar to extend itself across the full width of the screen on a phone allowing the user to still read what they type into the search box.

* The Covey Quadrants utilises the function of the To-Do list, automatically moving tasks into the correct grid area depending on the user's selection of importance and urgency. I chose not to include an imput for the estimated completion time as my users found that knowing the length of time they would have to spend doing a task filled them with a sense of dread which would cause procrastination. Instead, the To-Do list on the homepage allows the user to constantly see when their task is due, and the accompanying calendar would give them insight into the length of time until this date. In a final version, I would automatically sync tasks and their due dates to the calendar page too. Unfortunately I am aware that using a table for the quadrants is not idea for flexibility, however to improve this in the mobile version, I have added a horizontal scroll bar.

Images: <br>
[Desktop _Quadrants_ page mockup](#desktop-quadrants-mockup.png) <br>


One thing I found difficult on this assignment was understanding how best to implement and link JS functions and code into the HTML and CSS. Through my troubleshooting however, I have gained an improved knowledge of the functions and commands used in JS and its ability to interact with APIs, such as the dictionary I used and other internal and external systems in use in my web design.

In my opinion, the most successful designs on my site have a clear but bold aesthetic with large  which do not distract the viewer’s attention from the important information. I utilised numerous online resources to assist me in the creation of my website and have included them below in the references. I have very much enjoyed this assignment and would like to thank Drew, Caleb and Sam as well as the other tutors for the help the have provided during the development of my website. Thank you!
<br>

More mockup images can be viewed in the files.


# References:

Coding Artist. (2021, September 4). Example of Dictionary API Use. Youtube. https://www.youtube.com/watch?v=PUkgK7TI0x0&ab_channel=CodingArtist

Cosgrove, D. (2022, May 20th). Local Storage Demo. Replit. https://replit.com/@drewcosgrove/Local-Storage-Demo#index.html

Dongas, R. (2022). Interactive Task List. Replit. https://replit.com/@robdongas/InteractiveTaskList#solution.js

Dutton, C. (n.d.). Stopwatch Inspiration. Codepen. https://codepen.io/cathydutton/pen/xxpOOw

Jaya, A. (n.d.). JS Calendar. Codepen. https://codepen.io/onclick_indo/pen/KLyMdo

Morash, D. (n.d.). Button style inspiration. Codepen. https://codepen.io/derekmorash/pen/XddZJY

Reddy, A. (n.d.). Pomodoro Timer Inspiration. Codepen. https://codepen.io/Akshitha_Reddy/pen/ZEeZgqN

Tanm, S. (2020, April 16). JS Music Player Inspiration. GitHub. https://github.com/sayantanm19/js-music-player/blob/master/index.html





