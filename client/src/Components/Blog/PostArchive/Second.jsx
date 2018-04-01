import React, { Component } from 'react';

class Second extends Component {

  render() {
    return (
      <article className="Post">
        <h1>Algorithms! Oh My!</h1>
        <section className="content">
        <h2>The Beginnings of AdaBoost</h2>
          <p>When Yoav Freund and Robert Schapire won the prestigious 2003 Godel Prize [1], the AdaBoost algorithm they created stood out as an incredible discovery 
            in computing. The AdaBoost is a subset of a subset of algorithms called supervised leaning. In supervised learning algorithms an expected output is 
            used to “train” the algorithm to predict data more accurately. The more iterations of training, the more accurate the algorithm should be. Under 
            supervised learning lives the boosting algorithm category. In boosting, the goal is to combine many simple and low-cost correlation patterns into 
            one final correlation pattern that is extremely accurate. These simple correlation patterns are called “weak learner” and the complex patterns are 
            called “strong learners [2].”
          </p>
          <h2>How Does AdaBoost Stand Out from other Algorithms?</h2>
          <p>The AdaBoost (Adaptive Boosting) algorithm uses boosting but takes a unique approach. Instead of focusing on finding the correct results to a 
            correlation problem, it focuses on what the last “generation” of weak learners got wrong and works extra hard to correct those mistakes in the 
            next generation [3]. This is done through the use of a weighted array of coefficients that is multiplied by each individual weak learner. The weight
            is higher for the weak learner that was correct in the previous generation where the overall strong learner was wrong. Through enough iterations, 
            the correct weights are applied to the weak learners so that the summed up strong learner will be highly accurate.
          </p>
          <p>Professor Alexander Ihler does an incredible job of explaining how AdaBoost works by using a simple example [3]. There are + and - symbols in a
            box and the goal is to separate the + and – symbols. Each “weak learner” can only divide the box in one direction, left or right of a vertical
            light or top and bottom of a horizontal line. He shows 3 iterations where the next iteration focuses harder on getting correct what the previous
            iteration got wrong. By the end of 3 iterations, the 3 weak leaners are added up and a weight is applied to them to become a strong learner 
            which correctly identifies the positions of the + and – symbols.
          </p>
          <h2>Is AdaBoost Practical to Do by Hand?</h2>
          <p>Due to the sheer amount of arithmetic this algorithm would not be practical to be done by hand. This math is very simple because it is 
            multiplication and addition, but the algorithms should be iterated around 1,000 times [3] and the math involves addition and multiplication happening
            hundreds, thousands, or millions of times.
          </p>
          <h2>How does AdaBoost Relate to Our Textbook Material</h2>
          <p>“An algorithm is a fail-safe procedure, guaranteed to achieve a specific goal [4, Ch. 5, p. 78].” AdaBoost demonstrates this because it is a 
            highly accurate procedure whose goal is to have outcomes that are in line with what it has been trained on. AdaBoost also aligns with Hillis’s 
            statement that “Often the best algorithm is not obvious [4, Ch. 5, p. 80].” Most boosting algorithms focus on trying to make the weak learners 
            into strong learners through increasing the weight of the correct-guessing strong learners. It is not intuitive at all to increase the weight of 
            the things the weak learners got wrong.
          </p> 
          <h2>Applications of AdaBoost</h2>
          <p>AdaBoost, like other supervised learning algorithms needs a positive and a negate example to learn from. The more features or elements the algorithm 
            can detect as correct data or wrong data, the better the algorithm will be. Face detection is such an example. There are thousands of features in 
            faces that weak learners can train on to be taught what a face is as opposed to an inanimate object. Due to the multiple objects that are NOT 
            faces, AdaBoost does an incredible job of training on the counter-examples to make the strong learners highly accurate and less likely than other 
            algorithms to overfit. Viola Jones face detection is the specific family of face detection that uses AdaBoost algorithms [3].
          </p>
        </section>
        <section className="references">
          <h2>References:</h2>
          <span>[1] Wikipedia, ‘AdaBoost’, 2018. [Online]. Available: https://en.wikipedia.org/wiki/AdaBoost. [Accessed: 10- Feb- 2018]</span>
          <span>[2] Wikipedia, ‘Boosting (machine learning)’, 2018. [Online]. Available: https://en.wikipedia.org/wiki/Boosting_(machine_learning)#Boosting_algorithms. [Accessed: 10- Feb- 2018]</span> 
          <span>[3] A. Ihler, ’Ensembles (4) AdaBoost’, 2012. [Online]. Available: https://www.youtube.com/watch?v=ix6IvwbVpw0. [Accessed: 11- Feb- 2018]</span>
          <span>[4] W. Daniel Hillis, Pattern On The Stone: The Simple Ideas That Make Computers Work, Revised ed, Basic Books, 2015</span>
        </section>
      </article>
    );
  }
 }
 
 export default Second;