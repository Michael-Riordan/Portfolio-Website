import htmlLogo from '../assets/icons8-html5.svg'
import cssLogo from '../assets/icons8-css-logo.svg'
import javascriptLogo from '../assets/icons8-javascript.svg'
import reactLogo from '../assets/icons8-react.svg'
import MySQLLogo from '../assets/icons8-mysql-logo.svg'
import AWSLogo from '../assets/icons8-aws-logo.svg'
import nodeJSLogo from '../assets/icons8-node-js.svg'
import githubLogo from '../assets/icons8-github.svg'
import pythonLogo from '../assets/icons8-python.svg'
import lrmobilenotaryHomepage from '../assets/lrmobilenotary-homepage-capture-1.webp'

export default function LandingPage() {
    const handleProjectClick = () => {
        window.location.href = 'https://lr-mobilenotary.com/'
    }

    return (
        <>
            <section id='landing-page'>
                <header id='portfolio-header'>
                    <h1 id='header-content'>Michael J. Riordan</h1>
                    <h2 id='header-content-2'>Full-Stack Developer, with Strong Front-End Expertise.</h2>
                </header>
                <section id='landing-page-body'>
                    <h1 id='skills-header'>Technology Proficiency</h1>
                    <div id='technologies-wrapper'>
                        <img src={htmlLogo} alt='HTML logo' className='skills-logo html' title='HTML'></img>
                        <img src={cssLogo} alt='CSS logo' className='skills-logo css' title='CSS'></img>
                        <img src={javascriptLogo} alt='javascript logo' className='skills-logo javascript' title='JavaScript'></img>
                        <img src={reactLogo} alt='react logo' className='skills-logo react' title='React'></img>
                        <img src={MySQLLogo} alt='MySQL logo' className='skills-logo MySQL' title='MySQL'></img>
                        <img src={AWSLogo} alt='AWS logo' className='skills-logo AWS' title='Amazon Web Services'></img>
                        <img src={nodeJSLogo} alt='Node.js logo' className='skills-logo node' title='Node.js'></img>
                        <img src={pythonLogo} alt='python logo' className='skills-logo python' title='Python'></img>
                        <img src={githubLogo} alt='GitHub logo' className='skills-logo github' title='GitHub'></img>
                    </div>
                </section>
                <section id='landing-page-projects'>
                    <h1 id='projects-header'>Projects</h1>
                    <div id='projects-wrapper'>
                        <div id='project-1'>
                            <h2 id='project-1-header'>Mobile Notary Web Application</h2>
                            <a href='https://github.com/Michael-Riordan/notary-web-app.git' id='github-link-lrmobilenotary'>GitHub Repository (Front End)</a>
                            <a href='https://github.com/Michael-Riordan/Express-Server-For-Notary-Application.git' id='github-link-lrmobilenotary'>GitHub Repository (Back End)</a>
                            <picture id='lrmobilenotary-homepage-wrapper'>
                                <source media="(min-width: 300px)"/> 
                                <img src={lrmobilenotaryHomepage} id='lrmobilenotary-homepage' onClick={handleProjectClick} title='lr-mobilenotary.com'/> 
                            </picture>
                            <p id='project-1-description'>      
                                LR-mobilenotary.com is a comprehensive full-stack web application that seamlessly integrates React for the front end as well as an Express.js 
                                server for the back end. The Express server effectively handles API calls, manages interactions with Amazon RDS to store appointment details and admin credentials
                                within MySQL tables, and communicates with JSON files stored within an Amazon S3 bucket. This architecture enables effortless editing of business 
                                hours, date blocking, and appointment management.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}