import { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("☀️ Good Morning");
    } else if (hour < 17) {
      setGreeting("🌤️ Good Afternoon");
    } else {
      setGreeting("🌙 Good Evening");
    }
  }, []);

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <h3 className="greeting">{greeting}, I'm Kishore 👋</h3>

      <figure className="profile-figure">
        <img src="/Kishore.jpeg" alt="Kishore" />
      </figure>

      <p>
       Hello! I'm Kishore, a passionate web developer who enjoys creating responsive and user-friendly websites.
      </p>

      <p>
       I love learning new technologies and improving my skills through projects and practice.
      </p> 

      <p> 
      My goal is to become a full-stack developer and build modern web applications.
      </p>
    </section>
  );
}

export default About;