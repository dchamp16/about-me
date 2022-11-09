import React from "react";
import MyImage from "../assets/img/me.JPG";
const AboutMe = () => {
  return (
    <div>
      <h1 className="h1aboutme">About me</h1>

      <p className="aboutmebody">
        <img id="mypicture" src={MyImage} alt="picture of me" />
        My name is Peter Justine Ramos; I go by Justin. I love cycling. I graduated and
        got my AS in Computer Science info system at Salt Lake Community College. Now, I
        am looking for my first full-time, part-time, or intern job. I'm continuing my
        school at UVU, and I love every second of it, even though this is a tough
        semester. My current goal is to find a good job that will help me improve and
        continue my BS degree in Computer Science here at UVU. I am 100% confident that I
        will improve and conquer all the obstacles that hinder me and succeed in my
        ultimate goal. My goals are to have a family, live comfortably, and share all the
        skills I will learn with my kids. The world is changing rapidly, and I don't have
        enough professional experience to know about such things. However, I know that
        I'll do everything I take as a challenge and approach every project I face at work
        and in life. I am always open to challenges and constructive feedback. I am
        open-minded and love learning new things. If I am given a chance to get hired by
        your company, I will assure you that you will not regret it and do everything to
        help your company. I would love to join a team, learn, be mentored by someone, and
        dedicate all my skills and talents to developing high-quality and unique products.
      </p>
    </div>
  );
};

export default AboutMe;
