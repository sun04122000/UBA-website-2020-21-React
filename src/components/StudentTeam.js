import React from "react";
import "../css/StudentTeam.css";
import HTANWAR from "../images/StudentTeam/HARSH TANWAR.jpg";
import HKUMAR from "../images/StudentTeam/HARSH KUMAR.jpg";
import KURELLI from "../images/StudentTeam/KURELLI DIKSHITHA.jpg";
import SUNIDHI from "../images/StudentTeam/SUNIDHI JINDAL.jpg";
import KAVYA from "../images/StudentTeam/KAVYA SAXENA.jpg";
import AISHWARYA from "../images/StudentTeam/AISHWARYA MERTIA.jpeg";
import Deepal from "../images/StudentTeam/Deepal Tiwari.jpg";
import URADE from "../images/StudentTeam/URADE PRATYAY.jpg";
import AYUSH from "../images/StudentTeam/AYUSH KUMAR.jpg";
import PRAMOD from "../images/StudentTeam/PRAMOD KUMAR.jpg";
import ABHINAV from "../images/StudentTeam/ABHINAV SAINI.jpg";
import KESHAV from "../images/StudentTeam/KESHAV PARETA.jpg";
import HINGANE from "../images/StudentTeam/HINGANE YASH.jpg";
import VISHAL from "../images/StudentTeam/VISHAL YADAV.jpg";
import SAGAR from "../images/StudentTeam/SAGAR GUPTA.jpg";
import ANKIT from "../images/StudentTeam/ANKIT BABU.jpg";
import { Row, Container } from "react-bootstrap";
import { IdentityCard } from "./IdentityCard.js";
export const StudentTeam = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team</h1>
        <Row>
          <IdentityCard
            studImg={HTANWAR}
            name="Harsh Tanwar"
            pos="Team Leader"
            email="Email: harsh_t@ce.iitr.ac.in"
            linkedIn="https://www.linkedin.com/in/harsh-tanwar-100b1019b"
          />

          <IdentityCard
            studImg={HKUMAR}
            name="Harsh Kumar"
            pos="Overall Student Coordinator"
            email="Email: harsh_k@ce.iitr.ac.in"
            linkedIn="http://linkedin.com/in/harsh-kumar-228581192"
          />

          <IdentityCard
            studImg={KURELLI}
            name="Kurelli Dikshitha"
            pos="Overall Initiative Leader"
            email="Email: kurelli_d@ch.iitr.ac.in"
            linkedIn="https://www.linkedin.com/in/kurelli-dikshitha-6095a5192"
          />
          <IdentityCard
            studImg={SUNIDHI}
            name=" Sunidhi Jindal"
            pos="Overall Co-ordinator for Media and Outreach"
            email="Email: sunidhi_j@ch.iitr.ac.in"
            linkedIn="http://www.linkedin.com/in/sunidhi-jindal-57921a1b9"
          />

          <IdentityCard
            studImg={KAVYA}
            name="Kavya Saxena"
            pos="Overall Co-ordinator for Documentation"
            email="Email: kavya_s@me.iitr.ac.in"
            linkedIn="https://www.linkedin.com/in/kavya-s-22ba83194/"
          />

          <IdentityCard
            studImg={AISHWARYA}
            name="Aishwarya Mertia"
            pos="Overall Co-ordinator for Sponsorship and Public Relations "
            email="Email: aishwarya_m@pp.iitr.ac.in"
            linkedIn="https://www.linkedin.com/in/aishwarya-mertia-7019a71a2"
          />

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <IdentityCard
            studImg={Deepal}
            name="Deepal Tiwari"
            pos="Village Co-ordinator"
            email="Beladi"
            linkedIn="https://www.linkedin.com/in/deepal-tiwari-531b1a198"
          />
          <IdentityCard
            studImg={URADE}
            name="Pratyay Urade"
            pos="Village Co-ordinator"
            email="Beladi"
            linkedIn="https://www.linkedin.com/in/pratyay-urade-532227191/"
          />
          <IdentityCard
            studImg={ABHINAV}
            name="Abhinav Saini"
            pos="Village Co-ordinator"
            email="Chandpur"
            linkedIn="https://www.linkedin.com/in/abhinav-saini-7a860519b"
          />
          <IdentityCard
            studImg={KESHAV}
            name="Keshav Pareta"
            pos="Village Co-ordinator"
            email="Chandpur"
            linkedIn="https://www.linkedin.com/in/keshav-pareta-041029179"
          />
          <IdentityCard
            studImg={AYUSH}
            name="Ayush Kumar"
            pos="Village Co-ordinator"
            email="Chharba"
            linkedIn="https://www.linkedin.com/in/ayush-kumar-92a5aa192"
          />
          <IdentityCard
            studImg={PRAMOD}
            name="Pramod Kumar"
            pos="Village Co-ordinator"
            email="Chharba"
            linkedIn="http://linkedin.com/in/pramod-kumar-b4b595218"
          />
          <IdentityCard
            studImg={VISHAL}
            name="Vishal Yadav"
            pos="Village Co-ordinator"
            email="Meerpur"
            linkedIn="https://www.linkedin.com/in/vishal-yadav-b3b1a5158"
          />
          <IdentityCard
            studImg={HINGANE}
            name="Yash Hingane"
            pos="Village Co-ordinator"
            email="Meerpur"
            linkedIn="https://www.linkedin.com/in/yash-hingane-b63645120"
          />
          <IdentityCard
            studImg={ANKIT}
            name="Ankit Babu"
            pos="Village Co-ordinator"
            email="Puranpur"
            linkedIn="https://www.linkedin.com/in/ankit-babu-86a35619b"
          />
          <IdentityCard
            studImg={SAGAR}
            name="Sagar Gupta"
            pos="Village Co-ordinator"
            email="Puranpur"
            linkedIn="https://www.linkedin.com/in/sagar-gupta-86073619b/"
          />
        </Row>
      </Container>
    </>
  );
};
