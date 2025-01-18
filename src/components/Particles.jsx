import {  useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
        fullScreen:{enable:false},
          background: {
            color: {
              value: "#0D47A1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                enable: true,
                mode: "bounce",
              },
            },
            modes: {
              push: {
                quantity: 100,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 10,
                duration: 2,
                opacity: 0.8,
              },
              connect: {
                distance: 80,
                links: {
                  opacity: 0.5,
                },
                radius: 60,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 200,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 20,
              },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticleBackground;
