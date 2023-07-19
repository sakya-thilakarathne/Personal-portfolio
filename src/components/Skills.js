import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I am a versatile professional with a wide range of skills. In the realm of web development, I possess expertise in multiple programming languages, frameworks, and tools, enabling me to create dynamic and user-friendly websites. Additionally, my proficiency in risk management allows me to identify and mitigate potential risks, ensuring project success and alignment with business objectives. As a YouTuber, I create engaging content, leveraging my storytelling abilities and video editing skills to connect with viewers. My passion for travel has not only broadened my cultural awareness and adaptability but also provided me with unique experiences to share through my YouTube channel. With strong public speaking skills, I confidently deliver presentations, captivating audiences and leaving a lasting impact. Moreover, I excel in teamwork, fostering effective communication, collaboration, and leveraging the strengths of my teammates to achieve collective success. Through this combination of skills, I bring a well-rounded approach to my work and a commitment to excellence in all endeavors. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Risk Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Public Speaking</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Teamwork</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
