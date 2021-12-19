import React from "react";
import "../css/FacultyTeam.css";
import bhanu from "../images/bhanu.jpg";
import director from "../images/director.jpg";
import mprdaf from "../images/mprdaf.jpg";
import Ap from "../images/Ap.jpeg";
import { Container } from "react-bootstrap";

import { FacultyProfileComponent } from "./FacultyProfileComponent";

export const FacultyTeam = () => {
  return (
    <Container>
      <section id="team" class="white-bg padding-top-bottom">
        <Container>
          <h1 class="section-title text-center page-title">Our Patrons</h1>

          <FacultyProfileComponent
            FacultyImage={director}
            Name="Prof. Ajit K. Chaturvedi"
            Title="Director, IIT Roorkee"
            About="Professor Ajit Kumar Chaturvedi, Director of IIT Roorkee, acts
            as a source of inspiration for the entire team. His constant
            belief in the team inspires everyone to work tirelessly and
            learn new things."
            email="director@iitr.ac.in"
            twitter="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html"
            facebook="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html"
            linkedin="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html"
          />
          <FacultyProfileComponent
            FacultyImage={mprdaf}
            Name="Prof. Manoranjan Parida"
            Title="Dy Director, IIT Roorkee"
            About="Professor Manoranjan Parida, Deputy Director of IIT Roorkee.
            His compassion and commitment to the well-being of the team
            UBA is an invaluable asset and driving force behind the team’s
            sheer dedication."
            email="m.parida@ce.iitr.ac.in"
            twitter="https://civil.iitr.ac.in/CE?Uid=mprdafce"
            facebook="https://civil.iitr.ac.in/CE?Uid=mprdafce"
            linkedin="https://civil.iitr.ac.in/CE?Uid=mprdafce"
          />

          <FacultyProfileComponent
            FacultyImage={bhanu}
            Name="Vellanki, Bhanu Prakash"
            Title="Co-ordinator, UBA IIT Roorkee"
            About="Dr. Bhanu Prakash Vellanki, Coordinator of the team UBA, is
            the reason for this positive tone in the team. His involvement
            in initiatives of the team makes the UBA team more efficient
            and productive."
            email="bhanuprakashv@ce.iitr.ac.in"
            twitter="https://civil.iitr.ac.in/CE?Uid=bhanufce"
            facebook="https://civil.iitr.ac.in/CE?Uid=bhanufce"
            linkedin="https://civil.iitr.ac.in/CE?Uid=bhanufce"
          />
          <FacultyProfileComponent
            FacultyImage={Ap}
            Name="Prof. Ashish Pandey"
            Title="Regional Cordinator, UBA"
            About="Professor Ashish Pandey, Regional Coordinator of UBA team,
            shapes the conditions for the team members to learn and
            succeed. His vision, wisdom, and passion for this campus group
            are apparent in every successful initiative this team carries."
            email="ashish.pandey@wr.iitr.ac.in"
            twitter="https://www.iitr.ac.in/~WR/ashisfwt"
            facebook="https://www.iitr.ac.in/~WR/ashisfwt"
            linkedin="https://www.iitr.ac.in/~WR/ashisfwt"
          />
        </Container>
      </section>
    </Container>
  );
};