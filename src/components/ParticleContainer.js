import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';
import useThemeSwitcher from "@/hooks/useThemeSwitcher";


export const ParticleContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async () => { }, []);
    const [mode, setMode] = useThemeSwitcher();
    const particleColor = mode === 'dark' ? '#f5f5f5' : '#1b1b1b'; 
    const linkColor = mode === 'dark' ? '#dcdde1' : '#1b1b1b'; 
    return (
        <Particles
            className='w-auto h-full absolute translate-z-0 -z-10'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: ''
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onclick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        }
                    }
                },
                particles: {
                    color: {
                        value: particleColor,
                    },
                    links: {
                        color:linkColor,
                        distance:150,
                        enable:true,
                        opacity:0.5,
                        width:1
                    },
                    collisions:{
                        enable:true,
                    },
                    move:{
                        directions:'none',
                        enable:true,
                        outModes:{
                            default:'bounce',
                        },
                        random:false,
                        speed:1,
                        straight:false
                    },
                    number:{
                        density:{
                            enable:true,
                            area:800
                        },
                        value:80
                    },
                    opacity:{
                        value:0.5,
                    },
                    shape:{
                        type:'circle'
                    },
                    size:{
                        value:{min:1,max:5}
                    },
                },
                detectRetina:true,
            }}
        />
    )
}
