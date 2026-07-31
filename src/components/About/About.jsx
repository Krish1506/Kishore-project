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
        I love creating responsive and modern websites using HTML, CSS and
        JavaScript. I'm continuously learning new technologies to become a Full
        Stack Developer.
      </p>
    </section>
  );
}

export default About;