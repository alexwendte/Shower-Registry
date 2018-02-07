import React, { Component } from 'react';

class First extends Component {

   render() {
      return (
        <article className="Post">
          <h1>My First Ever Blog Post!</h1>
          <section className="content">
            <p>Hello, my name is Alex Wendte and I am from Overland Park, Kansas and have lived there all my life. I knew K-State had an 
              incredible engineering program, and when I came for a college visit I was blown away by how beautiful the campus was. 
              Being close to home and my family is important to me so K-State was a great option. Computer Science requires a mind that 
              is analytical, creative, logical, disciplined, patient, and determined. I am not patient at all but I have a lot of those 
              other qualities so I absolutely love the discipline (and my roommates find it hilarious when I lose patience during a project 
              and am yelling at my computer).
            </p> 
            <p>Last semester I worked as the coordinator for the Engineering Physics II lab. I felt fully incapable in every way, but it is a 
              funny experience to look back on. My job description was to set up the physics labs and then explain to the teachers how to 
              teach the labs to the students. I gave it the best effort I had and would prepare for the lab explanations, but it still did 
              not turn out as I expected. It intimidated me so much to teach 7 Physics graduate students, 6 Physics professors with PHD’s, 
              and the head instructor of Physics how to do the labs. And I am a Computer Science major… I made multiple mistakes each week 
              and believe I wasted a lot of their time because things didn’t work as I had anticipated them to. With that being said, I 
              enjoyed the job and definitely learned the value of preparing more adequately. I also learned the importance of seeking out 
              help. The biggest life lesson I learned from the semester was that sometimes in physics, and in your job in general, things 
              just don’t work, and you must go with the flow.
            </p>
            <p>My heart is with student ministry. Christian Challenge and the leaders they have raised up made and continue to make a huge 
              difference in my life. I desire to teach other men to live along side Christ as older men have taught me to do, and it would 
              be incredible to do that as my occupation. Much of the work involved in this type of ministry is one-on-one meetings with 
              guys, time in prayer and reading the Word, and time in staff meetings. It is a very flexible job and would give me the 
              opportunity to stay at home with my soon to be wife when she is home and the ability to work another job at the same time. 
              This year I have grown a huge passion for website development and am working on my skills through taking personal projects 
              and I plan to move into working as a freelancer very soon. Freelancing is flexible as well, so ultimately I would like to 
              be a student minister and a freelance website developer. Computer Science does not necessarily play very largely into those 
              two careers, but I love the content of the major.
            </p>
            <p>The chapter on “Universal Building Blocks” and “Memory: Information and Secret Codes” look particularly interesting to me. 
              In physics I see that molecules are the physical building blocks, and I read a little bit of the first chapter and I can 
              see from other classes I have taken that bits absolutely are the building blocks for anything computing. I would love 
              learn more in-depth how computers store memory so I am excited for the chapter on memory. I watch
              <a href="https://www.youtube.com/user/LinusTechTips"> Linus Tech Tips</a> every now and then 
              to learn about different technologies and to see what is new. His videos on Techquickie have taught me a ton about RAM, 
              video cards, CPU’s, and how to take care of my computer. Through Linus’s help I was also able to build my first computer 
              and then teach my brother how to build computers too.
            </p>
          </section>
          <section className="references">
            <h2>References:</h2>
            <p>[1] W. Daniel Hillis, Pattern On The Stone: The Simple Ideas That Make Computers Work, Revised ed, Basic Books, 2015</p>
          </section>
        </article>
     );
   }
 }
 
 export default First;