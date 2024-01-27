import { Container, Row, Col } from "react-bootstrap";
export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <div className="">
              <h2>About</h2>
              <h1>
                Hello Everyone, I am Amit Singh Bisht from Almora, Uttarakhand,
                India. <br></br>I am a 3rd year Undergraduate at NIT Agartala.
              </h1>
              <br></br>
              <h1>Some of My Acheivements </h1>
              {/* s */}
              <p>
                {" "}
                &#9733; Acheived Highest rating of 1412(Specialist) in{" "}
                <a href="https://codeforces.com/profile/ami_2025">
                  {" "}
                  Codeforces
                </a>{" "}
                <br></br>
                &#9733; Acheived Highest rating of 1928(Knight) in
                <a href="https://leetcode.com/ami_2025/">Leetcode</a>
                <br></br>
                &#9733; Acheived Highest rating of 1845(4 star) in{" "}
                <a href="https://www.codechef.com/users/ami_2025">
                  Codechef
                </a>{" "}
                <br></br>
                &#9733; Secured Global Rank- 1038 in Google Kickstart Round G
                2022 <br></br>
                &#9733; Secured Global Rank- 385 in TCS Codevita 2024 amoung 1 Lakh students from across 63 countries
                <br></br>
                &#9733; Qualified Google Codejam Qualification Round -2022, Meta
                HackerCup Round 1 <br></br>
                &#9733; Finalist TVS CREDIT HACKATHON 2023: Top 5 in finale
                amoung 50K+ participants <br></br>
                &#9733; Finalist Code gladiators 2023 <br></br>
                &#9733; Played under-16 State level Cricket
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
