import { useState, useEffect, useRef } from 'react'
import Typed from 'react-typed'
import { Container, Row, Col } from 'reactstrap';
import { BaseLayout, BasePage } from 'components';
import { useGetUser } from 'actions/user'

const ROLES = ['Full Stack Developer', 'ReactJS', 'Flask', 'Blockchain Enthusiast', 'Nature Enthusiast', 'Team Player', 'NodeJS', 'Django'];
const Index = () => {

  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const flipInterval = useRef();

  useEffect(() => {
    flipAnimation();
    //return -> Dispose fn(), which will be executed whenever the user navigates away from the page
    return () => flipInterval.current && clearInterval(flipInterval.current); // clears the interval for setInterval(), to prevent the-
    //- setInterval(), from being called, when the user is not on that page
  }, []);

  const flipAnimation = () => {
    flipInterval.current = setInterval(() => { // To provide the value of a reference, `.current` should be used
      // setIsFlipping(!isFlipping); => This won't work, as isFlipping will be undefined in this case => error
      setIsFlipping((prevFlipping) => !prevFlipping); //Manipulating the state inside a setInterval() can only be done using a callBack fn()
    }, 2000)
  }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}
      navClass="transparent"
    >
      <BasePage
        title="Portfolio - Guhaprasaanth"
        indexPage
      >
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index-tamil.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.jpg" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-2.jpg" />
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to my portfolio website.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                >
                </Typed>
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout >
  )
}

export default Index;
