import React from 'react';
import { Image } from 'semantic-ui-react';

import foto from '../images/foto.jpeg';


const AboutMe = () => (

<section className="det">

    <div className="photo">
    <Image src={foto} circular />
    </div>

    <div className="paragraph">
    <h3 id="info-me">Matteo Atti, Personal Trainer & Precision Nutrition </h3>
    <div className="line"></div>
    </div>

    <div className="story">
    <h1 id="approccio"> Il mio approccio con il cliente </h1>
    <h2 id="me"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h2>
    </div>

    <section id="1step" className="step1">
    <div className="container">
        <div className="project columns">

        <div className="column">
            <img className="transition" src="https://c.stocksy.com/a/NiF000/z9/60411.jpg?1559693406" width="auto" height="200px" />
        </div>


        <div className="column-transition-left">
            <p id="step1">STEP 1:</p>
            <p id="free-consultation">FREE CONSULTATION </p>
            <p id="cosultation">Before starting your fitness journey we will book a 60 minute consultation, either over the phone or at my private studio, where we will get an opportunity to talk about your needs, your goals, lifestyle habits and your diet and for us to establish if we are a good fit to work together. I will prescribe the best path forward for you to progress and achieve more than you thought possible.
            </p>
        </div>
        </div>
    </div>
    </section>

    <section id="2step" className="step2">
    <div className="container">
        <div className="project columns">

        <div className="column">
            <img className="transition" src="https://c.stocksy.com/a/NiF000/z9/60411.jpg?1559693406" width="auto" height="200px" />
        </div>


        <div className="column-transition-left">
            <p id="step1">STEP 2:</p>
            <p id="free-consultation">HEALTH ASSESSMENT & FITNESS TESTING </p>
            <p id="cosultation1">Before you can start a training and nutritional plan, or at least one that&rsquos actually going to be effective, I will carry out a number of tests to establish your current state of health and fitness. You see there isn&rsquot a blueprint for weight management. How you need to train and what you need to eat is different for everyone, even if the goal is the same. It&rsquos going to depend on your age, gender, somatotype (body type) and lifestyle. So...how can someone possibly give you a bespoke nutritional and exercise programme (not a useless general plan) if they don&rsquot know anything about your body? How can you track the effects of your training and diet if you don&rsquot have a benchmark?
            </p>
        </div>
        </div>
    </div>
    </section>


    <section id="1step" className="step1">
    <div className="container">
        <div className="project columns">

        <div className="column">
            <img className="transition" src="https://c.stocksy.com/a/NiF000/z9/60411.jpg?1559693406" width="auto" height="200px" />
        </div>


        <div className="column-transition-left">
            <p id="step1">STEP 3:</p>
            <p id="free-consultation">LIFESTYLE ASSESSMENT & PLAN </p>
            <p id="cosultation">Did you know that 80% of your weight loss or weight management results come from the time you spend out of the gym?! Lets say you train at the gym 4 times a week for 1 hour at a time, that amounts to less than 2% of your week. Therefore, if you don&rsquot have a suitable plan for your time outside the gym then you are severely compromising your results. I go beyond the gym walls and ensure you are living a lifestyle that will help to get you into shape and feeling great!
            </p>
        </div>
        </div>
    </div>
    </section>

</section>


)

export default AboutMe