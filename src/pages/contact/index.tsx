import React from 'react';
import Layout from '../../components/layout';
import { ContactWrapper } from './_styles';
import {
    FiMessageCircle as EmailIcon,
    FiTwitter,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi';
import Helmet from '../../components/helmet';
import { colors } from '../../types';

const Contact: React.FC = () => (
    <>
        <Helmet />
        <Layout>
            <ContactWrapper>
                <h2 className="title">Sempre disposto a ouvir as pessoas!</h2>

                <div className="email">
                    <a href="mailto:rodrigonoronha09@gmail.com">
                        <EmailIcon color={colors.lucyTheme.const} size={30} />
                        rodrigonoronha09@gmail.com
                    </a>
                </div>

                <ul className="social-media">
                    <li>
                        <a
                            target="__blank"
                            href="https://twitter.com/roketman09"
                        >
                            <FiTwitter size={20} />
                            Twitter
                        </a>
                    </li>

                    <li>
                        <a
                            target="__blank"
                            href="https://github.com/rodrigodiasnoronha"
                        >
                            <FiGithub size={20} />
                            Github
                        </a>
                    </li>

                    <li>
                        <a
                            target="__blank"
                            href="https://www.linkedin.com/in/rodrigo-dias-noronha-4774ab112/"
                        >
                            <FiLinkedin size={20} />
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </ContactWrapper>
        </Layout>
    </>
);

export default Contact;
