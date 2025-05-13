import './CSS/team.css'
import { useEffect, React, useRef } from 'react';
import ScrollReveal from "scrollreveal";
import { SocialIcon } from 'react-social-icons'
import image1 from './CSS/alok.jpg'
import image2 from './CSS/abhi.jpg'
import image3 from './CSS/Anand.jpg'

const Team = () => {
    const revealRefBottom = useRef(null);
    const revealRefLeft = useRef(null);
    const revealRefTop = useRef(null);
    const revealRefRight = useRef(null);

    useEffect(() => {


        ScrollReveal().reveal(revealRefBottom.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    useEffect(() => {


        ScrollReveal().reveal(revealRefRight.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'right',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefLeft.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'left',
            easing: 'ease',
            reset: 'true',
        });
    }, []); useEffect(() => {


        ScrollReveal().reveal(revealRefTop.current, {

            duration: 1000,
            delay: 200,
            distance: '50px',
            origin: 'top',
            easing: 'ease',
            reset: 'true',
        });
    }, []);
    return (
        <div className="Team">
            <h2 ref={revealRefTop}> Our Team</h2>
            <div className='Team-Content'>
                <div className='Team-Content-Card' ref={revealRefLeft}>
                    <img src={image1} className='image'></img>
                    <h3>Alok Kumar</h3>
                    <p>Enthusiastic Software Developer with , solid foundation in C++, Python and JavaScript. Experienced in crafting engaging web experiences through projects
                        like a Data Analysis System, Online Voting System etc. Adept at adapting to new technologies like React.js and Node.js,
                        eager to contribute adaptability and fresh perspectives to dynamic teams.</p>
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/alok-mishra-992796327" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/Mishra-Alok?tab=repositories" target='_blank' url="www.github.com" />
                    {/* <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.instagram.com" /> */}
                </div>

                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image2} className='image'></img>
                    <h3>Abhi Shrivastav</h3>
                    <p> proficient in C++, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/abhi-srivastav-76292822b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/kayasthaofficial4361" target='_blank' url="www.github.com" />
                    {/* <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.instagram.com" /> */}
                </div>
                <div className='Team-Content-Card' ref={revealRefRight}>
                    <img src={image3} className='image'></img>
                    <h3>Anand Patel</h3>
                    <p> proficient in C++, Python, and JavaScript. Skilled in creating interactive web applications, demonstrated through projects like Arwes-AI-Powered-chatbot. Experienced in embracing new technologies such as React.js and Node.js, and ready to bring innovative ideas and flexibility to dynamic teams.</p>                    
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://www.linkedin.com/in/anand-patel-382331292/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' url="www.linkedin.com" />
                    <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="https://github.com/Anandpatel09" target='_blank' url="www.github.com" />
                    {/* <SocialIcon className='SocialIcon' style={{ height: "30px", width: "30px" }} href="" target='_blank' url="www.instagram.com" /> */}
                </div>

            </div>
        </div>
    )
}
export default Team;