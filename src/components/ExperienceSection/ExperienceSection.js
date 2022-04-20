import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <div className="experience">
      <SectionTitle className="experienceHeader" heading="Experiences" />
      <div className="experienceContainer">
        <div className="expSection-left">
          <p className="solved">
            <b>Participated - </b>
          </p>
          <p>- 6 National Onsite Programming Contest</p>
          <p>- 2 Regional Onsite Programming Contest</p>
          <p>- 100+ Online Programming Contest</p>
          <p>- 2 Regional Hackathon</p>
          <p>- 2 Online Project Competetion</p>
          <br />
          <p className="solved">
            Solved 1000+ programming problems on different online judges.
          </p>
          <br />
          <p className="solved">
            Published different technical contents on Medium and Hackernoon.
          </p>
        </div>
        <div className="expSection-right">
          <div>
            <h4>Online Judge Profiles -</h4>
            <p>
              <b>HackerRank:</b>
              <a
                target="_blank"
                href="https://www.hackerrank.com/Ayve_178"
                rel="noreferrer"
              >
                Khairun Nessa Ayve
              </a>
            </p>
            <p>
              <b>Codeforces:</b>
              <a
                target="_blank"
                href="https://codeforces.com/profile/Ayve_178"
                rel="noreferrer"
              >
                Ayve_178
              </a>
            </p>
            <p>
              <b>UVa:</b>
              <a
                target="_blank"
                href="https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=15"
                rel="noreferrer"
              >
                Ayve_178
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="additionalExperienceContainer">
        <div className = "addExpItem">
        <p className='addHead'><b>Additional Experiences</b></p>
        <p className="addExpHeading"><b>WISE Secretary, CLUSTER</b></p>
        <p className="addExpDuration">Jan, 2020 - Jan, 2021</p>
        <p className="addExpDesc">- WISE stands for Women in Science and engineering. <br/>- Organized several workshops and events from CLUSTER(Club for Updated Search on Computer)</p>
        </div>

        <br/><br/>
        <div className = "addExpItem">
        <p className="addExpHeading"><b>Assistant IT Secretary, CLUSTER</b></p>
        <p className="addExpDuration">Jan, 2019 - Jan, 2020</p>
        <p className="addExpDesc">Organized regional CSE FEST as well as several workshops and events from CLUSTER(Club for Updated Search on Computer)</p>
        </div>

        <br/><br/>
        <div className = "addExpItem">
        <p className="addExpHeading"><b>Campus Ambassador, BDOSN</b></p>
        <p className="addExpDuration">Mar, 2018 - Apr, 2020</p>
        <p className="addExpDesc">Managed diffrent events on girls empowerment from BDOSN and inspire girls to be more involved in tech world</p>
        </div>

        <br/><br/>
        <div className = "addExpItem">
        <p className="addExpHeading"><b>Technical Content Writer</b></p>
        <p className="addExpDuration">2018 - Present</p>
        <p className="addExpDesc">I love to write technical contents on different topics in different platforms like Medium, HackarNoon and Ayve_178(Personal Blog Site).</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
