import React, { useCallback } from "react";
import "./AboutMe.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AboutMe = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="particle-layer">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#507eb3"
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
        <div className="tilt-div">
            <p> <b><i>It's me... your friendly neighborhood Software Engineer</i></b></p>
            <p>
                Hey! This is Arnav, I'm a Software Engineer at Credit Karma who
                enjoys building things.
            </p>
            <p>
                Click on the experience section to learn more about my role at
                Credit Karma and about my past work experience.
            </p>
        </div>
    </div>
  );
};

export default AboutMe;
