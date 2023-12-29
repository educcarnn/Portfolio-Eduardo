import React from 'react';
import Particles from 'react-particles';

const ParticleComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
          color: {
            value: '#ffffff', // Cor das partículas (branca neste caso)
          },
          line_linked: {
            color: '#ffffff', // Cor das linhas que conectam as partículas (branca neste caso)
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
};

export default ParticleComponent;
