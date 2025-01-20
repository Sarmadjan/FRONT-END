import { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
// eslint-disable-next-line react/prop-types
export const ParticleEffect = ({ children }) => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);
    return (
        <div style={{ backgroundColor: "black", overflow: 'hidden', position: "relative", width: "100%" }}>
            {/* Specific area for particles */}
            <div
                style={{
                    zIndex: 1,
                    position: "absolute",
                    width: "100vw",
                    
                    overflow: "hidden",
                }}
            >
                {init && (
                    <Particles
                        id="tsparticles"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        options={{
                            fullScreen: { enable: false },
                            background: {
                                color: {
                                    value: "#00000",
                                },
                            },
                            fpsLimit: 30,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: false,
                                        mode: "repulse",
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
                                        speed: 10,
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
                )}
            </div>
            {/* Other content */}
            <div style={{ padding: "0px", color: "#fff", position: 'relative', zIndex: 10 }}>
                {children}
            </div>
        </div>
    );
};
