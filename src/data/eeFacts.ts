/*
Wattson - A Discord EE bot by Not_H3
Copyright (C) 2025  Not_H3

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export interface EEFact {
    id: number;
    category: 'history' | 'components' | 'circuits' | 'power' | 'signals' | 'fun' | 'careers' | 'theory';
    title: string;
    fact: string;
    explanation?: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const EE_FACTS: EEFact[] = [
    // History Facts
    {
        id: 1,
        category: 'history',
        title: 'Edison\'s Education',
        fact: 'Thomas Edison, often called the first electrical engineer, had only 3 months of formal education!',
        explanation: 'Edison was largely self-taught through experimentation. His teacher even told his mother he was "too dumb to learn anything."',
        difficulty: 'beginner'
    },
    {
        id: 2,
        category: 'history',
        title: 'Tesla\'s Genius',
        fact: 'Nikola Tesla held over 300 patents and could speak 8 languages fluently.',
        explanation: 'Tesla invented the AC motor, wireless technology foundations, and had an eidetic memory that allowed him to build entire machines in his mind.',
        difficulty: 'beginner'
    },
    {
        id: 3,
        category: 'history',
        title: 'First Computer Bug',
        fact: 'The first computer "bug" was an actual moth trapped in Harvard\'s Mark II computer in 1947!',
        explanation: 'Grace Hopper found the moth and taped it to her logbook with the note "First actual case of bug being found." The term stuck!',
        difficulty: 'beginner'
    },

    // Component Facts
    {
        id: 4,
        category: 'components',
        title: 'Transistor Density',
        fact: 'A single modern CPU contains over 50 billion transistors - more than stars in our galaxy!',
        explanation: 'The latest processors like Apple\'s M2 Ultra have around 134 billion transistors in a chip smaller than a credit card.',
        difficulty: 'intermediate'
    },
    {
        id: 5,
        category: 'components',
        title: 'Capacitor Danger',
        fact: 'Old CRT TV capacitors can store lethal voltages for years, even when unplugged!',
        explanation: 'High voltage capacitors discharge extremely slowly and can maintain 25kV+ for months or years. Always discharge safely!',
        difficulty: 'intermediate'
    },
    {
        id: 6,
        category: 'components',
        title: 'LED Reverse Function',
        fact: 'LEDs can work in reverse as light sensors and even generate small amounts of electricity!',
        explanation: 'This is due to the photovoltaic effect - the same principle behind solar panels. Some circuits use LEDs as both light sources and sensors.',
        difficulty: 'intermediate'
    },

    // Circuit Theory
    {
        id: 7,
        category: 'circuits',
        title: 'Kirchhoff\'s Timeless Laws',
        fact: 'Kirchhoff\'s circuit laws from 1845 still work perfectly for modern RF and microwave circuits!',
        explanation: 'KVL and KCL are fundamental laws that apply to all circuits, from DC to gigahertz frequencies, proving their mathematical elegance.',
        difficulty: 'beginner'
    },
    {
        id: 8,
        category: 'circuits',
        title: 'Short Circuit Myth',
        fact: 'A "short circuit" doesn\'t have to be physically short - it\'s about electrical path resistance!',
        explanation: 'The term means bypassing the intended circuit path with a low-resistance connection, regardless of physical wire length.',
        difficulty: 'beginner'
    },

    // Power Systems
    {
        id: 9,
        category: 'power',
        title: 'Lightning Power',
        fact: 'A lightning bolt contains 1-5 billion joules but lasts only 200 microseconds!',
        explanation: 'That\'s equivalent to about 38 gallons of gasoline worth of energy, delivered in less than a millisecond. Peak power can exceed 1 terawatt!',
        difficulty: 'intermediate'
    },
    {
        id: 10,
        category: 'power',
        title: 'Grid Synchronization',
        fact: 'The electrical grid must maintain perfect 60Hz synchronization across thousands of miles!',
        explanation: 'All generators must be phase-synchronized to within microseconds, making the power grid humanity\'s largest synchronized machine.',
        difficulty: 'advanced'
    },

    // Signal Processing
    {
        id: 11,
        category: 'signals',
        title: 'Fourier Transform Legacy',
        fact: 'The Fourier Transform from 1807 powers every digital device you use today!',
        explanation: 'From MP3 compression to WiFi, cellular networks, and image processing - Fourier analysis is the mathematical foundation of modern technology.',
        difficulty: 'intermediate'
    },
    {
        id: 12,
        category: 'signals',
        title: 'Smartphone Processing Power',
        fact: 'Your smartphone processes more data per second than entire 1990s computer centers!',
        explanation: 'Modern mobile processors can execute trillions of operations per second, with dedicated signal processing units for audio, video, and AI.',
        difficulty: 'beginner'
    },

    // Theory
    {
        id: 13,
        category: 'theory',
        title: 'Maxwell\'s Prediction',
        fact: 'Maxwell\'s equations predicted radio waves 20 years before Hertz proved they existed!',
        explanation: 'James Clerk Maxwell\'s 1865 equations showed electromagnetic waves must exist and travel at light speed - pure mathematical prediction!',
        difficulty: 'advanced'
    },
    {
        id: 14,
        category: 'theory',
        title: 'Shannon\'s Information',
        fact: 'Claude Shannon\'s 1948 information theory paper created the mathematical foundation for all digital communication!',
        explanation: 'Shannon defined the "bit" and proved fundamental limits on data compression and transmission that still govern internet and cellular networks.',
        difficulty: 'advanced'
    },

    // Fun Facts
    {
        id: 15,
        category: 'fun',
        title: 'Brain Power',
        fact: 'Your brain uses about 20 watts of power - the same as a dim light bulb!',
        explanation: 'Despite being only 2% of body weight, the brain consumes 20% of your daily energy, running incredibly efficient neural networks.',
        difficulty: 'beginner'
    },
    {
        id: 16,
        category: 'fun',
        title: 'Static Shock Voltage',
        fact: 'Walking across carpet can generate 25,000+ volts of static electricity!',
        explanation: 'That\'s higher than power transmission lines! But extremely low current makes it mostly harmless - though it can damage electronics.',
        difficulty: 'beginner'
    },
    {
        id: 17,
        category: 'fun',
        title: 'Car Wiring Length',
        fact: 'Modern cars contain over 1 mile of electrical wiring and 100+ computers!',
        explanation: 'Luxury vehicles can have 150+ ECUs (Electronic Control Units) managing everything from engine timing to seat memory.',
        difficulty: 'beginner'
    },

    // Career Facts
    {
        id: 18,
        category: 'careers',
        title: 'EE Versatility',
        fact: 'Electrical engineers work in every industry - from Hollywood special effects to Mars rovers!',
        explanation: 'EE skills are needed in entertainment, aerospace, medical devices, renewable energy, autonomous vehicles, and virtually all modern technology.',
        difficulty: 'beginner'
    },
    {
        id: 19,
        category: 'careers',
        title: 'Silicon Valley Origins',
        fact: 'Most major tech companies were founded by electrical engineers, including Intel, AMD, and NVIDIA!',
        explanation: 'Understanding both hardware and software gives EEs unique advantages in creating breakthrough technologies and successful startups.',
        difficulty: 'beginner'
    },
    {
        id: 20,
        category: 'careers',
        title: 'EE Salary Potential',
        fact: 'Specialized EE roles like RF design and chip architecture can earn $300k+ annually!',
        explanation: 'The complexity of modern semiconductors and wireless systems creates high demand for experts in these cutting-edge fields.',
        difficulty: 'intermediate'
    },

    // More History Facts
    {
        id: 21,
        category: 'history',
        title: 'Marconi\'s Wireless',
        fact: 'Guglielmo Marconi sent the first wireless signal across the Atlantic Ocean in 1901!',
        explanation: 'The signal was just three dots (Morse code for "S"), transmitted from Cornwall, England to Newfoundland, Canada.',
        difficulty: 'beginner'
    },
    {
        id: 22,
        category: 'history',
        title: 'Bell Labs Innovation',
        fact: 'Bell Labs invented the transistor, laser, solar cell, and Unix operating system!',
        explanation: 'Bell Labs researchers won 8 Nobel Prizes and fundamentally shaped modern technology between 1925-1980.',
        difficulty: 'intermediate'
    },
    {
        id: 23,
        category: 'history',
        title: 'Bardeen\'s Double Nobel',
        fact: 'John Bardeen is the only person to win two Nobel Prizes in Physics, both for electrical engineering!',
        explanation: 'He won in 1956 for co-inventing the transistor and in 1972 for the theory of superconductivity.',
        difficulty: 'advanced'
    },
    {
        id: 24,
        category: 'history',
        title: 'AC vs DC War',
        fact: 'The "War of Currents" between Edison and Westinghouse lasted over a decade!',
        explanation: 'Edison promoted DC power while Westinghouse (with Tesla) promoted AC. AC won due to its ability to transmit over long distances.',
        difficulty: 'beginner'
    },
    {
        id: 25,
        category: 'history',
        title: 'First Electronic Computer',
        fact: 'ENIAC, built in 1946, weighed 30 tons and used 17,468 vacuum tubes!',
        explanation: 'It consumed 150 kW of power and could perform 5,000 operations per second - your smartphone is millions of times faster.',
        difficulty: 'intermediate'
    },

    // More Component Facts
    {
        id: 26,
        category: 'components',
        title: 'Vacuum Tube Reliability',
        fact: 'Early computers failed every few minutes due to vacuum tube burnout!',
        explanation: 'ENIAC had a tube fail roughly every two days, requiring constant maintenance by teams of engineers.',
        difficulty: 'intermediate'
    },
    {
        id: 27,
        category: 'components',
        title: 'Transistor Size Evolution',
        fact: 'Modern transistors are smaller than viruses - only 3 nanometers wide!',
        explanation: 'That\'s about 25 silicon atoms across. Quantum effects become significant at these scales.',
        difficulty: 'advanced'
    },
    {
        id: 28,
        category: 'components',
        title: 'Inductor Energy Storage',
        fact: 'Inductors store energy in magnetic fields, not electric fields like capacitors!',
        explanation: 'This is why inductors resist changes in current, while capacitors resist changes in voltage.',
        difficulty: 'beginner'
    },
    {
        id: 29,
        category: 'components',
        title: 'Diode Discovery',
        fact: 'The first semiconductor diode was discovered accidentally in 1874!',
        explanation: 'Ferdinand Braun noticed that metal-sulfide contacts conducted electricity better in one direction than the other.',
        difficulty: 'intermediate'
    },
    {
        id: 30,
        category: 'components',
        title: 'Supercapacitor Power',
        fact: 'Supercapacitors can charge in seconds but store 10,000 times less energy than batteries!',
        explanation: 'They bridge the gap between regular capacitors and batteries, offering high power but lower energy density.',
        difficulty: 'intermediate'
    },

    // More Circuit Facts
    {
        id: 31,
        category: 'circuits',
        title: 'Thevenin\'s Theorem',
        fact: 'Any linear circuit can be simplified to just a voltage source and resistor!',
        explanation: 'Thévenin\'s theorem from 1883 allows complex circuits to be analyzed as simple equivalent circuits.',
        difficulty: 'intermediate'
    },
    {
        id: 32,
        category: 'circuits',
        title: 'Op-Amp Virtual Short',
        fact: 'Operational amplifiers create a "virtual short circuit" between their inputs!',
        explanation: 'In negative feedback, the op-amp forces both inputs to the same voltage without current flow between them.',
        difficulty: 'intermediate'
    },
    {
        id: 33,
        category: 'circuits',
        title: 'RC Time Constant',
        fact: 'An RC circuit charges to 63.2% of its final value in exactly one time constant!',
        explanation: 'The time constant τ = RC determines the charging/discharging rate of capacitive circuits.',
        difficulty: 'beginner'
    },
    {
        id: 34,
        category: 'circuits',
        title: 'Impedance Matching',
        fact: 'Maximum power transfer occurs when source and load impedances are complex conjugates!',
        explanation: 'This principle is crucial in RF design, audio systems, and power transmission for optimal efficiency.',
        difficulty: 'advanced'
    },
    {
        id: 35,
        category: 'circuits',
        title: 'Norton Equivalent',
        fact: 'Norton\'s theorem is the current-source version of Thévenin\'s voltage-source theorem!',
        explanation: 'Any linear circuit can be represented as either a Thévenin or Norton equivalent circuit.',
        difficulty: 'intermediate'
    },

    // More Power Facts
    {
        id: 36,
        category: 'power',
        title: 'Power Grid Frequency',
        fact: 'The US power grid operates at exactly 60.000 Hz, monitored to within 0.02 Hz!',
        explanation: 'Precise frequency control is essential for synchronizing generators and maintaining grid stability across the continent.',
        difficulty: 'advanced'
    },
    {
        id: 37,
        category: 'power',
        title: 'Transformer Efficiency',
        fact: 'Large power transformers can achieve 99.5% efficiency or higher!',
        explanation: 'Modern transformer design minimizes core losses and copper losses, making them among the most efficient electrical machines.',
        difficulty: 'intermediate'
    },
    {
        id: 38,
        category: 'power',
        title: 'Three-Phase Power',
        fact: 'Three-phase power systems use 25% less copper than single-phase for the same power!',
        explanation: 'Three-phase systems provide constant power flow and more efficient transmission, which is why they\'re used industrially.',
        difficulty: 'intermediate'
    },
    {
        id: 39,
        category: 'power',
        title: 'Power Factor Importance',
        fact: 'Poor power factor can waste 30% or more of electrical energy!',
        explanation: 'Reactive power doesn\'t do useful work but still requires current, leading to higher losses and utility penalties.',
        difficulty: 'intermediate'
    },
    {
        id: 40,
        category: 'power',
        title: 'HVDC Transmission',
        fact: 'High-voltage DC transmission can be more efficient than AC over long distances!',
        explanation: 'HVDC avoids reactive power losses and skin effect, making it ideal for submarine cables and long-distance transmission.',
        difficulty: 'advanced'
    },

    // More Signal Facts
    {
        id: 41,
        category: 'signals',
        title: 'Nyquist Theorem',
        fact: 'You must sample at least twice the highest frequency to avoid aliasing!',
        explanation: 'The Nyquist-Shannon sampling theorem is fundamental to all digital audio, video, and communication systems.',
        difficulty: 'advanced'
    },
    {
        id: 42,
        category: 'signals',
        title: 'WiFi Frequency Bands',
        fact: 'WiFi operates in "unlicensed" frequency bands shared with microwaves and garage doors!',
        explanation: '2.4 GHz and 5 GHz ISM bands are used by many devices, which is why WiFi can suffer interference.',
        difficulty: 'beginner'
    },
    {
        id: 43,
        category: 'signals',
        title: 'Digital Audio Quality',
        fact: 'CD quality (44.1 kHz sampling) can perfectly reproduce any sound humans can hear!',
        explanation: 'Human hearing maxes out around 20 kHz, so 44.1 kHz sampling (2.2× Nyquist rate) captures all audible frequencies.',
        difficulty: 'intermediate'
    },
    {
        id: 44,
        category: 'signals',
        title: 'Cellular Tower Range',
        fact: 'A single cell tower can theoretically communicate with the Moon!',
        explanation: 'The radio power is sufficient, but practical cell towers are limited to ~35 km by Earth\'s curvature and interference.',
        difficulty: 'beginner'
    },
    {
        id: 45,
        category: 'signals',
        title: 'Fiber Optic Speed',
        fact: 'Light in fiber optic cables travels at about 200,000 km/s - not the speed of light!',
        explanation: 'The refractive index of glass slows light to about 2/3 of its vacuum speed, affecting signal propagation delays.',
        difficulty: 'intermediate'
    },

    // More Theory Facts
    {
        id: 46,
        category: 'theory',
        title: 'Complex Numbers in EE',
        fact: 'Complex numbers were invented to solve electrical engineering problems!',
        explanation: 'Engineers use j (not i) to represent √(-1) to avoid confusion with current. Phasors make AC analysis possible.',
        difficulty: 'intermediate'
    },
    {
        id: 47,
        category: 'theory',
        title: 'Laplace Transform',
        fact: 'The Laplace transform converts differential equations into algebra!',
        explanation: 'This mathematical tool transforms time-domain circuit analysis into the s-domain, making complex circuits solvable.',
        difficulty: 'advanced'
    },
    {
        id: 48,
        category: 'theory',
        title: 'Skin Effect',
        fact: 'High-frequency AC current only flows on the surface of conductors!',
        explanation: 'At 1 MHz, current in copper only penetrates about 0.066 mm deep, requiring special conductor designs.',
        difficulty: 'advanced'
    },
    {
        id: 49,
        category: 'theory',
        title: 'Electromagnetic Spectrum',
        fact: 'Radio waves and gamma rays are the same thing - just different frequencies!',
        explanation: 'All electromagnetic radiation follows the same physics; only the frequency and energy levels differ.',
        difficulty: 'beginner'
    },
    {
        id: 50,
        category: 'theory',
        title: 'Gauss\'s Law',
        fact: 'Electric field lines must start on positive charges and end on negative charges!',
        explanation: 'Gauss\'s law explains why electric field lines can never form closed loops or just appear from nowhere.',
        difficulty: 'intermediate'
    },

    // More Fun Facts
    {
        id: 51,
        category: 'fun',
        title: 'Electric Eel Power',
        fact: 'Electric eels can generate up to 600 volts - enough to stun a horse!',
        explanation: 'They use specialized cells called electrocytes that work like biological batteries connected in series.',
        difficulty: 'beginner'
    },
    {
        id: 52,
        category: 'fun',
        title: 'Microwave Invention',
        fact: 'Microwave ovens were invented accidentally by a radar engineer!',
        explanation: 'Percy Spencer noticed a chocolate bar melted in his pocket while working on magnetron tubes for radar systems.',
        difficulty: 'beginner'
    },
    {
        id: 53,
        category: 'fun',
        title: 'Electric Chair Invention',
        fact: 'The electric chair was invented by a dentist to prove AC power was dangerous!',
        explanation: 'Alfred Southwick designed it during the War of Currents to make people fear AC power and favor Edison\'s DC.',
        difficulty: 'beginner'
    },
    {
        id: 54,
        category: 'fun',
        title: 'Smartphone Sensors',
        fact: 'Your smartphone has more sensors than a 1990s fighter jet!',
        explanation: 'Modern phones include accelerometers, gyroscopes, magnetometers, light sensors, proximity sensors, and more.',
        difficulty: 'beginner'
    },
    {
        id: 55,
        category: 'fun',
        title: 'Electricity Speed Myth',
        fact: 'Electricity doesn\'t travel at the speed of light - electrons move slower than molasses!',
        explanation: 'Electron drift velocity is millimeters per second, but the electromagnetic wave propagates near light speed.',
        difficulty: 'intermediate'
    },

    // More Career Facts
    {
        id: 56,
        category: 'careers',
        title: 'Patent King Edison',
        fact: 'Thomas Edison held 2,332 patents worldwide and had a patent factory!',
        explanation: 'Edison\'s Menlo Park laboratory was the first industrial research lab, employing teams of inventors and engineers.',
        difficulty: 'beginner'
    },
    {
        id: 57,
        category: 'careers',
        title: 'EE Job Growth',
        fact: 'Electrical engineering jobs are projected to grow 7% by 2032!',
        explanation: 'Growth is driven by renewable energy, electric vehicles, automation, and emerging technologies like quantum computing.',
        difficulty: 'beginner'
    },
    {
        id: 58,
        category: 'careers',
        title: 'Interdisciplinary Skills',
        fact: 'Modern EEs must understand software, materials science, and even biology!',
        explanation: 'Bioelectronics, quantum computing, and AI hardware require knowledge spanning multiple engineering disciplines.',
        difficulty: 'intermediate'
    },
    {
        id: 59,
        category: 'careers',
        title: 'Women in EE History',
        fact: 'Edith Clarke was the first female electrical engineer and invented the Clarke calculator!',
        explanation: 'She joined GE in 1922 and developed graphical methods for solving power transmission problems.',
        difficulty: 'intermediate'
    },
    {
        id: 60,
        category: 'careers',
        title: 'EE Entrepreneurship',
        fact: 'Electrical engineers have the highest rate of startup creation among all engineering fields!',
        explanation: 'The combination of hardware and software skills makes EEs uniquely positioned to create innovative technology companies.',
        difficulty: 'beginner'
    },

    // Additional Advanced Theory Facts
    {
        id: 61,
        category: 'theory',
        title: 'Quantum Tunneling',
        fact: 'Electrons can pass through barriers they classically shouldn\'t be able to cross!',
        explanation: 'Quantum tunneling enables modern electronics like tunnel diodes and is essential for quantum computing.',
        difficulty: 'advanced'
    },
    {
        id: 62,
        category: 'theory',
        title: 'Superconductivity',
        fact: 'Superconductors have exactly zero electrical resistance at low temperatures!',
        explanation: 'Cooper pairs of electrons move without scattering, enabling applications like MRI machines and quantum computers.',
        difficulty: 'advanced'
    },
    {
        id: 63,
        category: 'theory',
        title: 'Hall Effect',
        fact: 'The Hall effect can measure magnetic fields by deflecting current carriers!',
        explanation: 'Discovered in 1879, it\'s now used in sensors, motors, and determining semiconductor properties.',
        difficulty: 'intermediate'
    },
    {
        id: 64,
        category: 'theory',
        title: 'Piezoelectric Effect',
        fact: 'Some materials generate electricity when mechanically stressed!',
        explanation: 'Piezoelectricity powers quartz watches, ultrasonic transducers, and pressure sensors.',
        difficulty: 'intermediate'
    },
    {
        id: 65,
        category: 'theory',
        title: 'Doppler Radar',
        fact: 'Radar can measure speed by detecting frequency shifts in reflected waves!',
        explanation: 'The Doppler effect changes the frequency of waves reflected from moving objects, enabling speed measurement.',
        difficulty: 'intermediate'
    },

    // More Component Deep Dives
    {
        id: 66,
        category: 'components',
        title: 'MOSFET Dominance',
        fact: 'MOSFETs are the most manufactured device in human history!',
        explanation: 'Billions of MOSFETs are produced daily for processors, memory, and power electronics.',
        difficulty: 'intermediate'
    },
    {
        id: 67,
        category: 'components',
        title: 'Memristor Memory',
        fact: 'Memristors remember their resistance even when power is removed!',
        explanation: 'These "memory resistors" could revolutionize computing by creating non-volatile, ultra-fast memory.',
        difficulty: 'advanced'
    },
    {
        id: 68,
        category: 'components',
        title: 'Josephson Junctions',
        fact: 'Josephson junctions can switch in picoseconds using quantum effects!',
        explanation: 'These superconducting devices are used in quantum computers and ultra-sensitive magnetic field detectors.',
        difficulty: 'advanced'
    },
    {
        id: 69,
        category: 'components',
        title: 'Ferrite Core Memory',
        fact: 'Before RAM, computers used tiny magnetic donuts to store each bit!',
        explanation: 'Core memory was reliable and non-volatile but required complex wiring - each bit needed 3 wires threaded through it.',
        difficulty: 'intermediate'
    },
    {
        id: 70,
        category: 'components',
        title: 'Organic Electronics',
        fact: 'Organic semiconductors made from carbon can be printed like newspapers!',
        explanation: 'OLEDs and organic solar cells use carbon-based materials that can be deposited on flexible substrates.',
        difficulty: 'advanced'
    },

    // More Power Engineering
    {
        id: 71,
        category: 'power',
        title: 'Smart Grid Technology',
        fact: 'Smart grids can automatically heal themselves by rerouting power!',
        explanation: 'Advanced sensors and automation allow grids to detect faults and switch to alternate paths in milliseconds.',
        difficulty: 'intermediate'
    },
    {
        id: 72,
        category: 'power',
        title: 'Wireless Power Transfer',
        fact: 'Tesla demonstrated wireless power transmission over 25 miles in 1899!',
        explanation: 'His Colorado Springs laboratory could light bulbs wirelessly, though the method was inefficient and never commercialized.',
        difficulty: 'intermediate'
    },
    {
        id: 73,
        category: 'power',
        title: 'Grid Energy Storage',
        fact: 'Pumped hydro storage acts like a giant water battery for the electrical grid!',
        explanation: 'Excess electricity pumps water uphill; when power is needed, water flows down through generators.',
        difficulty: 'beginner'
    },
    {
        id: 74,
        category: 'power',
        title: 'Blackout Cascades',
        fact: 'The 2003 Northeast blackout started with overgrown trees touching power lines!',
        explanation: 'Small failures can cascade through interconnected grids, affecting millions of people within minutes.',
        difficulty: 'intermediate'
    },
    {
        id: 75,
        category: 'power',
        title: 'Power Line Communication',
        fact: 'Internet signals can travel through electrical wiring in your house!',
        explanation: 'Powerline communication uses existing electrical wires for data transmission, though it\'s limited by interference.',
        difficulty: 'beginner'
    },

    // More Signal Processing
    {
        id: 76,
        category: 'signals',
        title: 'GPS Signal Strength',
        fact: 'GPS signals are weaker than a 25-watt light bulb viewed from 12,000 miles away!',
        explanation: 'Satellites transmit only 27 watts, but spread spectrum techniques and sensitive receivers make reception possible.',
        difficulty: 'intermediate'
    },
    {
        id: 77,
        category: 'signals',
        title: 'Error Correction Codes',
        fact: 'Digital systems can automatically detect and fix transmission errors!',
        explanation: 'Reed-Solomon codes and other error correction enable reliable communication even with noisy channels.',
        difficulty: 'advanced'
    },
    {
        id: 78,
        category: 'signals',
        title: 'Spread Spectrum',
        fact: 'Spread spectrum makes signals look like noise to eavesdroppers!',
        explanation: 'Originally developed for military communications, it\'s now used in GPS, WiFi, and cellular systems.',
        difficulty: 'advanced'
    },
    {
        id: 79,
        category: 'signals',
        title: 'Digital Signal Processing',
        fact: 'DSP chips can perform billions of mathematical operations per second!',
        explanation: 'Specialized processors optimize multiply-accumulate operations essential for filtering and transforms.',
        difficulty: 'intermediate'
    },
    {
        id: 80,
        category: 'signals',
        title: 'Antenna Reciprocity',
        fact: 'An antenna transmits and receives equally well in any given direction!',
        explanation: 'The reciprocity theorem means an antenna\'s radiation pattern is identical to its reception pattern.',
        difficulty: 'intermediate'
    },

    // More Circuit Analysis
    {
        id: 81,
        category: 'circuits',
        title: 'Negative Resistance',
        fact: 'Some electronic devices have negative resistance - they provide power!',
        explanation: 'Tunnel diodes and certain transistor configurations can exhibit negative resistance, useful for oscillators.',
        difficulty: 'advanced'
    },
    {
        id: 82,
        category: 'circuits',
        title: 'Miller Effect',
        fact: 'Small capacitances can appear much larger due to voltage amplification!',
        explanation: 'The Miller effect multiplies capacitance by the gain factor, significantly affecting high-frequency response.',
        difficulty: 'advanced'
    },
    {
        id: 83,
        category: 'circuits',
        title: 'Resonant Circuits',
        fact: 'LC circuits can oscillate forever in theory, storing energy alternately as electric and magnetic!',
        explanation: 'Real circuits have resistance that dampens oscillations, but superconducting loops can maintain current indefinitely.',
        difficulty: 'intermediate'
    },
    {
        id: 84,
        category: 'circuits',
        title: 'Parasitic Elements',
        fact: 'Every real circuit component has unwanted resistance, capacitance, and inductance!',
        explanation: 'At high frequencies, parasitic elements dominate behavior and must be carefully considered in design.',
        difficulty: 'advanced'
    },
    {
        id: 85,
        category: 'circuits',
        title: 'Active Filters',
        fact: 'Active filters can amplify while filtering, something passive filters cannot do!',
        explanation: 'Op-amp based filters can provide gain and don\'t suffer from insertion loss like passive LC filters.',
        difficulty: 'intermediate'
    },

    // More Historical Insights
    {
        id: 86,
        category: 'history',
        title: 'Vacuum Tube Computers',
        fact: 'ENIAC consumed enough power to dim the lights of Philadelphia!',
        explanation: 'At 150 kW consumption, ENIAC used as much power as about 150 modern homes.',
        difficulty: 'beginner'
    },
    {
        id: 87,
        category: 'history',
        title: 'Transistor Revolution',
        fact: 'The first transistor was demonstrated on December 23, 1947!',
        explanation: 'Bell Labs\' point-contact transistor launched the semiconductor age, eventually replacing vacuum tubes.',
        difficulty: 'beginner'
    },
    {
        id: 88,
        category: 'history',
        title: 'Integrated Circuit Invention',
        fact: 'Two engineers independently invented the integrated circuit within months of each other!',
        explanation: 'Jack Kilby at Texas Instruments and Robert Noyce at Fairchild both created ICs in 1958-1959.',
        difficulty: 'intermediate'
    },
    {
        id: 89,
        category: 'history',
        title: 'Moore\'s Law Prediction',
        fact: 'Gordon Moore predicted in 1965 that chip complexity would double every two years!',
        explanation: 'Moore\'s Law has held for over 50 years, driving the exponential growth of computing power.',
        difficulty: 'beginner'
    },
    {
        id: 90,
        category: 'history',
        title: 'First Electronic Calculator',
        fact: 'The first electronic calculator weighed 55 pounds and cost $2,500 in 1961!',
        explanation: 'The ANITA Mk VII used vacuum tubes and cold-cathode tubes, equivalent to about $25,000 today.',
        difficulty: 'beginner'
    }
];

// Utility functions
export function getRandomFact(): EEFact {
    return EE_FACTS[Math.floor(Math.random() * EE_FACTS.length)];
}

export function getFactsByCategory(category: EEFact['category']): EEFact[] {
    return EE_FACTS.filter(fact => fact.category === category);
}

export function getFactsByDifficulty(difficulty: EEFact['difficulty']): EEFact[] {
    return EE_FACTS.filter(fact => fact.difficulty === difficulty);
}

export function getFactById(id: number): EEFact | undefined {
    return EE_FACTS.find(fact => fact.id === id);
}

export function getCategories(): string[] {
    return ['history', 'components', 'circuits', 'power', 'signals', 'fun', 'careers', 'theory'];
}

export function getCategoryEmoji(category: EEFact['category']): string {
    const emojiMap = {
        'history': '📜',
        'components': '🔌',
        'circuits': '🔄',
        'power': '⚡',
        'signals': '📡',
        'fun': '🎉',
        'careers': '💼',
        'theory': '🧮'
    };
    return emojiMap[category] || '📚';
}

export function getDifficultyEmoji(difficulty: EEFact['difficulty']): string {
    const emojiMap = {
        'beginner': '🟢',
        'intermediate': '🟡',
        'advanced': '🔴'
    };
    return emojiMap[difficulty] || '⚪';
}