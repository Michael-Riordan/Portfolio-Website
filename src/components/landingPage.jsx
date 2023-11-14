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
import wanderAmericaHomepage from '../assets/Web_capture_10-11-2023_85140_wanderamerica.netlify.app.webp'

export default function LandingPage() {
    const handleProject1Click = () => {
        window.open('https://lr-mobilenotary.com/', '_blank');
    }

    const handleProject2Click = () => {
        window.open('https://wanderamerica.netlify.app/', '_blank');
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
                            <a href='https://github.com/Michael-Riordan/notary-web-app.git' id='github-link-lrmobilenotary' target='_blank'>GitHub Repository (Front End)</a>
                            <a href='https://github.com/Michael-Riordan/Express-Server-For-Notary-Application.git' id='github-link-lrmobilenotary' target='_blank'>GitHub Repository (Back End)</a>
                            <picture id='lrmobilenotary-homepage-wrapper'>
                                <source media="(min-width: 300px)"/> 
                                <img src={lrmobilenotaryHomepage} id='lrmobilenotary-homepage' onClick={handleProject1Click} title='lr-mobilenotary.com'/> 
                            </picture>
                            <p id='project-1-description'>      
                                LR-mobilenotary.com is a comprehensive full-stack web application that seamlessly integrates React for the front end as well as an Express.js 
                                server for the back end. The Express server effectively handles API calls, manages interactions with Amazon RDS to store appointment details and admin credentials
                                within MySQL tables, and communicates with JSON files stored within an Amazon S3 bucket. This architecture enables effortless editing of business 
                                hours, date blocking, and appointment management.
                            </p>
                        </div>
                        <div id='project-1'>
                            <h2 id='project-1-header'> Wander America Web Application</h2>
                            <a href='https://github.com/Michael-Riordan/NatPark-Application.git' id='github-link-lrmobilenotary' target='_blank'>GitHub Repository (Front End)</a>
                            <a href='https://github.com/Michael-Riordan/NatPark-App-Express-Server.git' id='github-link-lrmobilenotary' target='_blank'>GitHub Repository (Back End)</a>
                            <picture id='lrmobilenotary-homepage-wrapper'>
                                <source media="(min-width: 300px)"/> 
                                <img src={wanderAmericaHomepage} id='wanderAmerica-homepage' onClick={handleProject2Click} title='wanderamerica.netlify.app'/> 
                            </picture>
                            <p id='project-1-description'>      
                                Wander America is a comprehensive full-stack web application that seamlessly integrates React for the front end as well as an Express.js 
                                server for the back end. The Express server effectively handles API calls to the National Park Government API. The website utilizes MapBox API to create
                                an interactive map for the user to see all national parks in the U.S. The user is able to filter parks based off of activity, state, and search for national
                                parks based off of name. After selecting a park, the selected park page will display activities available in the selected park, as well as a link to get directions to 
                                heart of the park and visitor centers. On selection of a displayed activity, the activity page will display information about the selected activity.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}