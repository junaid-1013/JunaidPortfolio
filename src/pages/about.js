import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-3.jpg"
import { useSpring, useInView, useMotionValue } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimateNumber = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Junaid Ali | About Page</title>
                <meta name='junaid ali' content="myintroduction" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, I'm Junaid, a web developer and a machine learning and computer vision enthusiast with over 3 years of experience
                                in the field. I am always looking for new and innovative ways to solve problems and create intuitive and enjoyable
                                digital experiences for users.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design and development go hand in hand and that a great user experience is essential to the success of
                                any digital product. My expertise in machine learning and computer vision allows me to bring a unique perspective to
                                web development and create cutting-edge solutions that meet the needs of today's users.
                            </p>
                            <p className="font-medium">
                                Whether I'm working on a website, mobile app, or other digital product, I am committed to design and development excellence
                                and always keep the user at the forefront of my thinking. I look forward to the opportunity to bring my skills and passion
                                to your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                        ">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark " />
                            <Image src={profilePic} alt="Junaid Ali" className='w-full h-auto rounded-2xl' />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimateNumber value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clinets</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimateNumber value={10} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">projects completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimateNumber value={3} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
                            </div>
                        </div>


                    </div>
                    <Skills />
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </>
    )
}
export default about