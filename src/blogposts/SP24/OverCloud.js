import React from "react";
import image1 from "./imgs/OverCloud/image1.png";
import image2 from "./imgs/OverCloud/image2.png";


function OverCloud() {
    return (

        <main id="main">


            <section id="apply" className="breadcrumbs">
                <div className="container">

                    <div className="section-title">
                        <h1>Over-the-Cloud Communication using the Particle Argon</h1>
                        <h2>Akshati Vaishnav and Kene Chukwuma-Orakwe</h2>
                        <h2 className="underline">April 21, 2024</h2>
                    </div>

                </div>
            </section>

            <section className="inner-page blog-post">
                <div className="container">

                    <p>
                        Over the last year, C2S2 has been developing a bird tag system for the Lab of Ornithology. Specifically, the System
                        Architecture subteam has been involved in determining the system required to successfully execute the project with the
                        Lab of Ornithology.
                    </p>

                    <figure>
                        <img src={image1} />
                        <figcaption><strong>Figure 1</strong><br /> System diagram for the Bird Tag</figcaption>
                    </figure>

                    <p>
                        One of the primary goals for the System Architecture subteam is to find a method of offloading data from the Bird Tag to
                        a docking station. We considered various methods of offloading data wirelessly to the cloud, ranging from WiFi to
                        Bluetooth to Radio-Frequency Communication.
                    </p>

                    <p>
                        In order to explore how over-the-cloud communication works, we decided to use a commercial Wifi-development kit, the
                        Particle Argon. The Particle Argon is a microcontroller board designed for IoT projects, with integrated WiFi
                        connectivity and a suite of features including onboard sensors, libraries, and cloud integration. This combination of
                        capabilities simplifies the development process for IoT applications. The built-in WiFi functionality of the Particle
                        Argon is particularly valuable for understanding how to transmit data from the Bird Tag to cloud-based platforms without
                        physical connections.
                    </p>

                    <p>
                        The Particle Board is a programmable device. In order to program it, there is a Web IDE which can be used and that
                        supports over-the-cloud flashing of programs. It supports programming in Arduino and C++. We added a Lithium polymer
                        battery to the board so we could use it wirelessly, and we also connected a Temperature and Humidity sensor to it.
                        Lastly, we enclosed the whole system in a box to allow for movement. Figure 2 shows the complete setup.
                    </p>

                    <figure>
                        <img src={image2} />
                        <figcaption><strong>Figure 2</strong><br />The Particle Argon enclosed in a casing with its battery inside the box and the Temperature sensor attached on the lid of the box</figcaption>
                    </figure>

                    <p>
                        Over the course of our work so far, we created multiple programs to explore what we could do with the Particle board. In
                        this post, we hope to share three primary programs. First, we want to share our process of reading data from the
                        temperature sensor. Next, we'll discuss how we created a program to blink an LED through a phone. Lastly, we'll explain
                        the process of publish and subscribe, and how we used that to make two Particle boards interact with each other.
                    </p>

                    <p>
                        Our first program is designed to read temperature and humidity data from a Grove Temperature and Humidity Sensor
                        connected to the board. In order to use the sensors and the LEDs, we first set up the pins that they are connected to.
                        We continuously collect temperature and humidity values from the sensor, format them, and "publish" them to the Particle
                        Cloud every second. This code essentially retrieves sensor data and sends it to the cloud periodically, allowing for
                        remote monitoring and analysis of temperature and humidity levels.
                    </p>

                    <p>
                        Next is our over-the-cloud blinky program which is designed to control an LED using remote commands through the Particle
                        Cloud. The setup initializes the LED pin as an output and establishes a Particle function named "led" that triggers the
                        toggle() function. This function listens for commands like "on", "off", or "blink" sent through the Particle Cloud. When
                        the function receives a command, the toggle() function executes the corresponding action: turning the LED on (HIGH), off
                        (LOW), or making it blink for a few cycles. If an unrecognized command is received, the function returns an error code.
                        This setup demonstrates how to remotely control hardware using Particle Cloud functions, providing a simple interface to
                        interact with physical devices connected to the Particle Argon.
                    </p>

                    <p>
                        In our next program, our goal was to create a system in which pressing a physical button would trigger an event through
                        one Particle board, leading to a change in the state of an LED on another Particle board. In order to make this work,
                        both of the devices must be connected to the same WiFi network and they need to be added to the same account on the
                        Particle Sandbox. To program this functionality, we had to create two different files, one for each device. The first
                        file sets up one Particle board to detect a button press and publish a "toggle-led" message to the cloud when the button
                        is pressed. The second file sets up the other Particle board to perform an action when the "toggle-led" message is
                        received. Specifically, when the message is received, the LED on the second board toggles its state.
                    </p>

                    <p>
                        These are just a few of the programs that we have programmed on the particle board. Although simple, these programs are
                        the building blocks of our more recent work, in which we save the data collected from a sensor onto memory, so that we
                        can transfer files instead of continuous messages. We have been able to collect temperature and humidity sensor data and
                        store that onto a file. Our next goal is to collect data from an external microphone, save this data onto a file, and
                        then transfer it to a computer over the cloud. In doing so, we hope to replicate a small subset of what the whole bird
                        tag system is supposed to do.
                    </p>

                    <p>
                        Overall, our work with the particle board attempts to simulate the overall bird tag system. Specifically, we are hoping
                        to understand how over-the-cloud communication works and how we can implement some of the Particle board's functions
                        onto our software and PCB designs in the future.
                    </p>
                </div>
            </section>

        </main>);
}

export default OverCloud