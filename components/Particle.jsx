import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
// import  { Engine } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

import React from 'react'

const Particle = () => {
  
  

// const App = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    await loadStarsPreset(engine);
    await loadBubblesPreset(engine);

  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const options = {
    preset: "circle",
    background: {
      color: {
        value: "gradient",
      },
    },
    number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
    fpsLimit: 60,
        
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        
  }

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    // options={options}
    options={{
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      
      particles: {
        color: {
          value:[
            "#D15D64","#00A959","#FCD05C","#E98333", "#7b63ab", '#23bg5s', '#fc67hf'

          ] , 
        },
        
        
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["star", "circle", "polygon","square"],
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
      }}
    />
  );
};

export default Particle;