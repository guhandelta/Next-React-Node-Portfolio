import { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { BaseLayout, BasePage } from 'components';
import { useGetUser } from 'actions/user';


const AboutMe = () => {
    const { data, loading } = useGetUser();

    useEffect(() => { //
        return () => {
            window.__isAboutLoaded = true; // To say, that the page was already visited and not to execute the animation again
        }
    })

    const createFadeInClass = () => {
        if (typeof window !== 'undefined') { //Checking it app is viewed in a browser
            return window.__isAboutLoaded ? '' : 'fadein'; //Checking if thisis the first visit, to add the `fadein` class, for the animaiton
        }

        return 'fadein';
    }

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage className="about-page" title="About me - Guhaprasaanth" canonicalPath='/about'>
                {/* specifying the canonical path as /about, will make sure that the search engine crawlers won't crawl this page, but
                would crawl on /about */}
                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                            <h1 className={`title `}>Hello, Welcome</h1>
                            <h4 className={`subtitle `}>To About Page</h4>
                            <p className={`subsubTitle `}>Feel free to get to know me.</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div>
                            <p>I am Guhaprasaanth, I am an experienced software engineer and freelance developer. </p>
                            <p>
                                I have a Master's degree in Computer Science and experience in  working
                                on a wide range of technologies and projects.
                            </p>
                            <p>
                                Versatile Front-end/Web Developer with experience designing, developing, and managing complex responsive websites and web applications using JavaScript libraries and frameworks like ReactJS & NodeJS and Python frameworks like Django and Flask.
                         </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default AboutMe;
