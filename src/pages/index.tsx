import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Helmet from '../components/helmet';
import { AboutWrapper } from './_styles';

const App: React.FC = () => (
    <>
        <Helmet />
        <Layout>
            <AboutWrapper>
                <div className="profilePicWrapper">
                    <img
                        src={
                            'https://pt.gravatar.com/userimage/183402556/ec0f980abc14376e2a97a8237726bccc.png?size=500'
                        }
                        alt="Rodrigo"
                        title="Rodrigo's photo"
                    />
                </div>

                <div className="infoWrapper">
                    <h2>
                        <span className="orange">Hi there!</span> Nice to meet
                        you!
                    </h2>

                    <p>
                        My name's{' '}
                        <span className="green">Rodrigo Dias Noronha</span>. I'm
                        creative and ambitious developer passionate about
                        technologies. Always learning and always happy to hear
                        people.
                    </p>
                    <p>
                        I have always focused on the latest technologies on the
                        market like <span className="blue">React</span>,{' '}
                        <span className="purple">React Native</span> and{' '}
                        <span className="nodeGreen">Node.js</span>. And I love
                        it!
                    </p>

                    <p>
                        If you want to know more about me, you can to take a
                        look in my personal projects on{' '}
                        <a
                            href="https://github.com/rodrigodiasnoronha"
                            target="__blank"
                        >
                            <span className="gray">Github</span>{' '}
                        </a>
                        or my <Link to="/resume">resume</Link>.
                    </p>
                </div>
            </AboutWrapper>
        </Layout>
    </>
);

export default App;
