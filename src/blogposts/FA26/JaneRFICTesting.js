import React from "react";
import spring2025Board from "./imgs/JaneRFICTesting/spring-2025-rfic-test-board.png";
import receiveChain from "./imgs/JaneRFICTesting/receive-chain.png";
import transmitChain from "./imgs/JaneRFICTesting/transmit-chain.png";
import lnaBoard from "./imgs/JaneRFICTesting/lna-test-board.png";
import comparatorBoard from "./imgs/JaneRFICTesting/comparator-test-board.png";
import itatBoard from "./imgs/JaneRFICTesting/itat-test-board.png";

function JaneRFICTesting() {
  return (
    <main id="main">
      <section id="apply" className="breadcrumbs">
        <div className="container">
          <div className="section-title">
            <h1>From 915 MHz to 2.4 GHz: RFIC Testing on Platforms</h1>
            <h2>Jane Chen</h2>
            <h2 className="underline">November 18, 2026</h2>
          </div>
        </div>
      </section>

      <section className="inner-page blog-post">
        <div className="container">
          <p>
            Hello! My name is Jane, and I am a part of the Business Operations
            subteam of C2S2. To kick off my first blog post, I wanted to explore
            the various projects underway within the team, starting with the
            Radio Frequency Integrated Circuits (RFIC) testing board project on
            the Platforms side.
          </p>

          <h2>Initial Design: Spring 2025 Tapeout</h2>

          <p>
            Chips are extremely small, making it impractical to manually wire
            individual components to them. Printed circuit boards (PCBs) address
            this issue by using patterned copper traces on insulating layers to
            connect the chip to power, test equipment, and other components.
            Platforms designs the boards and test setups needed to power,
            interface with, and characterize C2S2&apos;s chips.
          </p>

          <figure>
            <img
              loading="lazy"
              decoding="async"
              src={spring2025Board}
              alt="Spring 2025 RFIC test board designed by Joseph Wan"
            />
            <figcaption>
              <strong>Figure 1</strong>
              <br />Spring 2025 tapeout RFIC test board iteration
            </figcaption>
          </figure>

          <p>
            Figure 1 shows the test board designed by Joseph Wan on the
            Platforms team for the Spring 2025 tapeout, which operates at 915
            MHz.
          </p>

          <p>
            The goal was to consolidate testing of the chip&apos;s blocks onto a
            single PCB, with one power source supplying the entire system.
            Low-dropout regulators (LDOs) were used to provide regulated voltage
            rails. Given the low expected current draws, excessive thermal
            dissipation was not a concern. By using a digital potentiometer
            controlled by a microcontroller, the output voltage of each LDO can
            be fine-tuned through software.
          </p>

          <h2>New Year, New Chip: Spring 2026 Tapeout</h2>

          <p>
            Compared with the 2025 tapeout, the 2026 tapeout operates at the
            higher frequency of 2.4 GHz. The chip implements a half-duplex
            transceiver, meaning it can transmit or receive signals, but cannot
            perform both at the same time. An RF switch directs signals through
            the appropriate path depending on the desired operation. If the
            antenna receives an incoming signal, the RF switch routes it through
            the receiver (Rx) chain. When transmitting a message, the signal
            follows the transmitter (Tx) chain before being sent through the
            antenna.
          </p>

          <figure>
            <img
              loading="lazy"
              decoding="async"
              src={receiveChain}
              alt="RFIC block diagram with the receive chain emphasized"
            />
            <figcaption>
              <strong>Figure 2</strong>
              <br />The receive chain, emphasized in the block diagram
            </figcaption>
          </figure>

          <p>
            When a signal is received, it enters through the low-noise amplifier
            (LNA). The LNA amplifies weak RF signals while minimizing additional
            noise introduced by the amplification process. Preserving the
            signal-to-noise ratio at this stage is particularly important
            because noise introduced early on can significantly affect later
            signal processing.
          </p>

          <p>
            The amplified signal then passes through the preamplifier, which
            provides additional gain before demodulation. Amplifying the signal
            improves the quality of the received message and makes it easier for
            the envelope detector to process. The envelope detector extracts the
            amplitude envelope of the incoming signal. By tracking the signal&apos;s
            amplitude variations, the detector produces an output corresponding
            to the high and low states of the original data signal. The
            comparator then compares the recovered envelope voltage against a
            threshold, producing a digital high or low. Through these stages,
            the receiver converts an incoming RF signal into digital data that a
            computer can interpret and process.
          </p>

          <figure>
            <img
              loading="lazy"
              decoding="async"
              src={transmitChain}
              alt="RFIC block diagram with the transmit chain emphasized"
            />
            <figcaption>
              <strong>Figure 3</strong>
              <br />The transmit chain, emphasized in the block diagram
            </figcaption>
          </figure>

          <p>
            During transmission, off-chip signal generators create a data
            signal. However, this signal does not have sufficient power to travel
            over long distances. The voltage-controlled oscillator (VCO)
            generates a carrier signal while the phase-locked loop (PLL)
            regulates its frequency, resulting in a 2.4 GHz carrier. The power
            amplifier (PA) adds power to the signal so it can travel the desired
            distance while maintaining the frequency. The RF switch then sends
            the amplified signal through the antenna.
          </p>

          <h2>Addressing Setbacks</h2>

          <p>
            One of the primary challenges identified in the 2025 testing cycle
            was the lack of isolation between blocks and components. With a
            single PCB responsible for all test cases of the Spring 2025 blocks,
            it was extremely difficult to identify whether discrepancies came
            from the chip, the board, or interactions between the blocks. To
            address this, the Spring 2026 test boards are modular, allocating one
            PCB per block. This provides more direct access to inputs, outputs,
            and bias connections, making it easier to isolate problems and
            characterize each block before testing them together.
          </p>

          <p>
            To better understand this testing approach, I interviewed Mohamed
            Elmi, co-lead of the Platforms team and the lead for the RF testing
            effort from the Platforms perspective. According to Mohamed, the
            boards&apos; goal is to capture measurable signals that demonstrate
            whether each component on the chip is working properly.
          </p>

          <p>
            For example, when characterizing the LNA, Mohamed applies a known
            low-power input signal and measures the resulting amplification. An
            important consideration in this process is impedance matching.
            Impedance describes how a circuit opposes alternating current. In RF
            systems, matching the impedance between the antenna input and the
            LNA input is important for maximizing power transfer. If a mismatch
            exists, part of the input signal can reflect instead of reaching the
            LNA, leaving less signal available to amplify.
          </p>

          <figure>
            <img
              loading="lazy"
              decoding="async"
              src={lnaBoard}
              alt="Modular LNA test board for the Spring 2026 RFIC tapeout"
            />
            <figcaption>
              <strong>Figure 4</strong>
              <br />LNA test board
            </figcaption>
          </figure>

          <p>
            After driving the LNA with a known source and measuring the output
            power, the measured gain can be compared with the expected
            performance to evaluate the amplifier&apos;s effectiveness. To achieve
            the desired impedance match, Mohamed adds passive components in the
            signal path to adjust the effective impedance presented to the LNA.
            The goal is to minimize reflections and maximize the power delivered
            to the circuit. Matching matters across the RF paths, but each block
            requires different functional tests.
          </p>

          <figure>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  decoding="async"
                  src={comparatorBoard}
                  alt="Comparator test board"
                />
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  decoding="async"
                  src={itatBoard}
                  alt="ITAT current-reference test board"
                />
              </div>
            </div>
            <figcaption>
              <strong>Figure 5</strong>
              <br />Comparator and ITAT test boards, respectively
            </figcaption>
          </figure>

          <p>
            The demodulator, or envelope detector, is tested by applying an
            on-off keying (OOK) modulated signal and verifying that its output
            accurately follows the expected signal envelope. The comparator is
            tested by applying varying input voltages to determine whether it
            correctly transitions between digital high and low states.
          </p>

          <p>
            One particularly interesting characterization effort involves the
            ITAT block, which provides a current reference to the other blocks.
            Mohamed measures the reference current and evaluates its stability
            as temperature changes. This helps determine whether the circuit can
            maintain a consistent reference current under varying operating
            conditions.
          </p>

          <p>
            The PA and demodulator each have dedicated test boards that follow
            the same design approach as the boards shown above. In addition to
            characterizing individual blocks, Mohamed has begun testing how they
            work together on the full receive and transmit boards. On the receive
            board, he is evaluating whether the amplifier stages can boost a weak
            2.4 GHz signal enough for the demodulator to detect its envelope and
            for the comparator to recover the transmitted bits. Testing the full
            receive chain also helps him pinpoint where the signal degrades
            between stages. On the transmit board, he is evaluating how the PA
            performs as part of the complete transmit chain.
          </p>

          <h2>Looking Ahead</h2>

          <p>
            Mohamed&apos;s work represents one of the many ongoing efforts within
            the Platforms subteam to ensure the functionality and success of
            each chip that C2S2 tapes out. These efforts provide valuable insight
            into the practical challenges of testing custom integrated circuits
            and bring C2S2 closer to successfully demonstrating its ability to
            build custom silicon designs.
          </p>
        </div>
      </section>
    </main>
  );
}

export default JaneRFICTesting;
