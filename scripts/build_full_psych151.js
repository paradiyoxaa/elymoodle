const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Build all 15 Chapters, 45 sub-modules, and 15 multiple-choice checkpoint quizzes
const psychCourse = {
  id: "course_psych151",
  code: "PSYCH-151",
  title: "PSYCH151: Introduction to Psychology",
  category: "Social Sciences",
  description: "A comprehensive introduction to the scientific study of mind, brain, and behavior based on the textbook by James W. Kalat. Features all 15 chapters, 45 core modules, and re-attemptable multiple-choice checkpoint quizzes for every chapter.",
  image: "🧠",
  progress: 10,
  sections: [
    {
      id: "sec_psych_0",
      title: "Course Overview & Full Textbook",
      description: "Access the complete 600+ page textbook and syllabus.",
      activities: [
        {
          id: "act_psych_ebook",
          type: "ebook",
          title: "📖 Full Course Textbook: Introduction to Psychology (PDF)",
          completed: true,
          content: "Access the full 15-chapter eBook for PSYCH151: Introduction to Psychology (James W. Kalat, Cengage Learning, 21.3 MB).",
          fileUrl: "/ebooks/ebook-introduction-to-psychology.pdf"
        },
        {
          id: "act_psych_syllabus",
          type: "page",
          title: "Course Syllabus & Information",
          completed: true,
          content: "Welcome to PSYCH151: Introduction to Psychology!\n\nInstructor: Admin\nStudent: Elizabeth\nTextbook: Introduction to Psychology (James W. Kalat)\n\nCourse Structure:\n- 15 Core Academic Chapters\n- 45 Specific Learning Modules with 'In Closing' Review Points\n- Chapter Checkpoint Quizzes (Multiple choice, re-attemptable anytime)\n- Integrated Full PDF eBook at the top of the course"
        }
      ]
    },
    {
      id: "sec_psych_1",
      title: "Chapter 1: What Is Psychology?",
      description: "Module 1.1: Psychologists' Goals | Module 1.2: Psychology Then and Now",
      activities: [
        {
          id: "act_psych_1_1",
          type: "page",
          title: "Module 1.1: Psychologists' Goals",
          completed: true,
          content: "### Major Specializations in Psychology\n\nPsychology is the systematic study of behavior and mental processes. Psychologists work across diverse domains:\n\n- **Clinical Psychologists:** Assess, diagnose, and treat mental, emotional, and behavioral disorders.\n- **Counseling Psychologists:** Assist individuals dealing with everyday adjustment problems (vocational, marriage, family).\n- **Cognitive Psychologists:** Research memory, thought, problem-solving, attention, and decision-making.\n- **Developmental Psychologists:** Study how behavior and mental capacities change from conception through old age.\n- **Biological Psychologists:** Examine behavioral neuroscience, brain mechanisms, hormones, and genetics.\n- **Industrial/Organizational (I/O) Psychologists:** Apply psychological principles to workplace dynamics, leadership, and ergonomics.\n\n### Core Philosophical Questions\n1. **Free Will vs. Determinism:** Are our choices autonomous, or are all actions the inevitable consequence of antecedent physical and environmental causes?\n2. **The Mind-Brain Problem:** Dualism (mind and brain are distinct entities) versus Monism (consciousness is the functioning of the brain).\n3. **Nature vs. Nurture:** How genetic inheritance interacts dynamically with environment and experience.\n\n### In Closing: Types of Psychologists\nNo single perspective explains the totality of human behavior; comprehensive psychology requires integrating biological, cognitive, social, and developmental viewpoints."
        },
        {
          id: "act_psych_1_2",
          type: "page",
          title: "Module 1.2: Psychology Then and Now",
          completed: true,
          content: "### Historical Timeline of Psychology\n\n- **1879 - Wilhelm Wundt:** Established the first psychology laboratory at the University of Leipzig, Germany. He investigated consciousness using **introspection** (trained observers reporting their sensations).\n- **Edward Titchener & Structuralism:** Attempted to catalog the fundamental structures of conscious experience, akin to chemical elements.\n- **William James & Functionalism:** Influenced by Charles Darwin, James published *The Principles of Psychology* (1890), asking *how* and *why* mental actions help an organism survive.\n- **John B. Watson, B.F. Skinner & Behaviorism:** Rejected introspection as unscientific; argued psychology must focus strictly on observable behavior and environmental stimuli.\n- **The Cognitive Revolution (1960s-Present):** Revived the study of internal information processing, perception, language, and memory, supported by computer models and neuroimaging.\n\n### In Closing: Psychology through the Years\nPsychology evolved from philosophical speculation to physiological introspection, shifted toward radical behavioral observation, and integrated into modern cognitive neuroscience."
        },
        {
          id: "quiz_psych_1",
          type: "quiz",
          title: "🧠 Chapter 1 Checkpoint: Foundations & History of Psychology",
          completed: false,
          questions: [
            {
              question: "What historic event occurred in 1879 that marks the birth of modern scientific psychology?",
              options: [
                "Sigmund Freud published The Interpretation of Dreams",
                "Wilhelm Wundt opened the first formal psychology laboratory in Leipzig",
                "William James published The Principles of Psychology",
                "B.F. Skinner invented the operant chamber"
              ],
              correct: 1,
              explanation: "In 1879, Wilhelm Wundt established the first formal psychological research laboratory in Leipzig, Germany, establishing psychology as an independent empirical discipline."
            },
            {
              question: "Which historical school of thought focused on how mental processes help organisms adapt to their environment?",
              options: [
                "Structuralism",
                "Functionalism",
                "Psychoanalysis",
                "Phrenology"
              ],
              correct: 1,
              explanation: "Functionalism, championed by William James and influenced by Darwin's evolutionary theory, investigated how the mind functions to assist survival and adaptation."
            },
            {
              question: "Why did early behaviorists like John B. Watson reject structuralism and introspection?",
              options: [
                "They believed unconscious impulses were the only valid subject matter",
                "They argued that internal mental states cannot be objectively measured or replicated",
                "They wanted to study brain anatomy directly using neuroimaging",
                "They were interested only in clinical psychopathology"
              ],
              correct: 1,
              explanation: "Behaviorists argued that introspection was subjective and unreliable, insisting that a true science must focus solely on observable, measurable behavior."
            },
            {
              question: "A psychologist studying the relationship between dopamine levels in the brain and decision-making is working in which subfield?",
              options: [
                "Cognitive Psychology",
                "Biological Psychology (Behavioral Neuroscience)",
                "Industrial-Organizational Psychology",
                "Forensic Psychology"
              ],
              correct: 1,
              explanation: "Biological psychology (or behavioral neuroscience) investigates the biological and neural underpinnings of behavior, including neurochemistry and brain structures."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_2",
      title: "Chapter 2: Scientific Methods in Psychology",
      description: "Module 2.1: Evaluating Evidence | Module 2.2: Conducting Research",
      activities: [
        {
          id: "act_psych_2_1",
          type: "page",
          title: "Module 2.1: Evaluating Evidence and Thinking Critically",
          completed: false,
          content: "### Scientific Thinking in Psychology\n\n- **Hypothesis:** A precise, testable prediction derived from a broader theoretical framework.\n- **Falsifiability:** A theory is scientific only if there is a conceivable empirical observation that could prove it false (Karl Popper).\n- **Principle of Parsimony (Occam's Razor):** Given multiple explanations that account for observations equally well, scientists prefer the explanation requiring the fewest unsupported assumptions.\n- **Operational Definitions:** A definition specifying the exact operations, measurements, or procedures used to manipulate or observe a variable.\n- **Replicability:** The requirement that findings can be reproduced by independent researchers following the same protocol.\n\n### In Closing: Scientific Thinking in Psychology\nCritical thinking requires demanding empirical proof, recognizing confirmation bias, and welcoming rival explanations."
        },
        {
          id: "act_psych_2_2",
          type: "page",
          title: "Module 2.2: Conducting Psychological Research",
          completed: false,
          content: "### Research Methodologies\n\n1. **Descriptive Designs:**\n   - *Naturalistic Observation:* Observing subjects in natural habitats without interference.\n   - *Case Studies:* Detailed examination of an individual or rare circumstance.\n   - *Surveys:* Questionnaires administered to a sample; susceptible to sampling bias and wording effects.\n\n2. **Correlational Studies:**\n   - Measures statistical association with the correlation coefficient ($r$, from $-1.00$ to $+1.00$).\n   - **Cardinal Rule:** Correlation does not prove causation (possibility of a third unmeasured confounding variable).\n\n3. **Experimental Designs (Testing Causality):**\n   - *Independent Variable (IV):* The variable manipulated by the researcher.\n   - *Dependent Variable (DV):* The variable measured to assess the effect of the IV.\n   - *Random Assignment:* Ensures each participant has an equal chance of being in any group, balancing pre-existing differences.\n   - *Placebo Effect & Blind Controls:* In a double-blind study, neither participants nor observers know who is receiving active treatment.\n\n### In Closing: Psychological Research\nExperiments are the only research design that can establish cause-and-effect relationships."
        },
        {
          id: "quiz_psych_2",
          type: "quiz",
          title: "🧠 Chapter 2 Checkpoint: Research Methods & Critical Thinking",
          completed: false,
          questions: [
            {
              question: "If research shows a strong positive correlation (r = +0.78) between physical exercise and academic grades, what can we definitively conclude?",
              options: [
                "Exercise causes students' grades to improve",
                "High grades cause students to exercise more",
                "Exercise and grades are associated, but one does not necessarily cause the other",
                "A third variable definitely does not exist"
              ],
              correct: 2,
              explanation: "Correlation quantifies the strength and direction of an association between variables, but it cannot demonstrate a cause-and-effect relationship."
            },
            {
              question: "In an experiment testing whether caffeine improves reaction time, what is the independent variable (IV)?",
              options: [
                "The reaction time measured in milliseconds",
                "The dosage of caffeine administered",
                "The age of the research participants",
                "The type of computer screen used"
              ],
              correct: 1,
              explanation: "The independent variable is the factor intentionally manipulated by the researcher—in this case, caffeine dosage."
            },
            {
              question: "What is the primary purpose of random assignment in an experiment?",
              options: [
                "To ensure the sample represents the entire global population",
                "To equalize individual differences across experimental and control groups",
                "To guarantee that the experimental hypothesis is confirmed",
                "To eliminate the need for an independent variable"
              ],
              correct: 1,
              explanation: "Random assignment distributes participant characteristics equally across groups, ensuring differences in the outcome variable are attributable to the treatment."
            },
            {
              question: "What does it mean for a psychological hypothesis to be 'falsifiable'?",
              options: [
                "The hypothesis has already been proven false by evidence",
                "There must be possible observable evidence that could demonstrate the hypothesis is incorrect",
                "The hypothesis cannot be tested experimentally",
                "The hypothesis is based on personal opinion rather than data"
              ],
              correct: 1,
              explanation: "Falsifiability means a hypothesis makes specific predictions that could theoretically be refuted by observable empirical data."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_3",
      title: "Chapter 3: Biological Psychology",
      description: "Module 3.1: Neurons | Module 3.2: Drugs | Module 3.3: Brain | Module 3.4: Genetics",
      activities: [
        {
          id: "act_psych_3_1",
          type: "page",
          title: "Module 3.1: Neurons and Behavior",
          completed: false,
          content: "### Neuronal Anatomy & Action Potentials\n\n- **Anatomy:**\n  - *Dendrites:* Branching fibers receiving incoming neurotransmitter signals.\n  - *Soma:* Cell body containing the nucleus and metabolic machinery.\n  - *Axon:* Long fiber transmitting electrical impulses away from the soma.\n  - *Myelin Sheath:* Glial lipid insulation speeding electrical conduction (*saltatory conduction*).\n  - *Terminal Buttons:* Bulb-shaped axon endings releasing neurotransmitters into the synaptic cleft.\n- **Electrophysiology:**\n  - *Resting Potential:* $-70\\text{ mV}$, maintained by the sodium-potassium pump (3 $\\text{Na}^+$ pumped out for every 2 $\\text{K}^+$ in).\n  - *Threshold of Excitation:* Approximately $-55\\text{ mV}$.\n  - *Action Potential:* Voltage-gated sodium channels open; $\\text{Na}^+$ rushes in, depolarizing the interior to $+30\\text{ mV}$. Operates on the **All-or-None Law**.\n  - *Refractory Period:* Absolute and relative recovery intervals preventing retrograde signal transmission.\n\n### In Closing: Neurons, Synapses, and Behavior\nAll psychological experiences arise from rapid chemical-electrical signaling among billions of interconnected neurons."
        },
        {
          id: "act_psych_3_2",
          type: "page",
          title: "Module 3.2: Drugs and Their Effects",
          completed: false,
          content: "### Major Neurotransmitter Systems\n\n- **Dopamine:** Reward, motor control, motivation (deficient in Parkinson's; hyperactive signaling in schizophrenia).\n- **Serotonin:** Mood, sleep, hunger, arousal (targeted by SSRIs).\n- **Acetylcholine (ACh):** Skeletal muscle movement, memory, attention (depleted in Alzheimer's disease).\n- **GABA:** Primary inhibitory neurotransmitter; tranquilizers increase GABA receptor affinity.\n- **Glutamate:** Primary excitatory neurotransmitter; crucial for long-term potentiation and learning.\n- **Endorphins:** Endogenous neuropeptides attenuating pain and enhancing pleasure.\n\n### Agonists and Antagonists\n- **Agonist:** A chemical that increases or mimics the effect of a neurotransmitter.\n- **Antagonist:** A chemical that blocks or decreases the effect of a neurotransmitter.\n\n### In Closing: Drugs and Synapses\nPsychoactive drugs alter mental states primarily by modifying synaptic neurotransmitter synthesis, release, binding, or reuptake."
        },
        {
          id: "act_psych_3_3",
          type: "page",
          title: "Module 3.3: Brain and Behavior",
          completed: false,
          content: "### Lobes of the Cerebral Cortex\n\n1. **Occipital Lobe:** Primary visual processing.\n2. **Temporal Lobe:** Auditory processing, complex visual pattern recognition, and language comprehension (*Wernicke's area* in the left hemisphere).\n3. **Parietal Lobe:** Somatosensory cortex (touch, temperature, pain, body position) and spatial attention.\n4. **Frontal Lobe:** Primary motor cortex, speech production (*Broca's area*), executive functions, emotional regulation, and working memory.\n\n### Subcortical Systems\n- **Thalamus:** Sensory gateway routing signals (except smell) to cortical processing centers.\n- **Hypothalamus:** Regulates autonomic homeostasis (temperature, hunger, thirst, fight-or-flight, reproduction).\n- **Hippocampus:** Essential for consolidating declarative memories from short-term to long-term storage.\n- **Amygdala:** Critical for emotional processing, especially fear and threat detection.\n- **Corpus Callosum:** Dense band of axons interconnecting left and right cerebral hemispheres.\n\n### In Closing: Brain and Behavior\nComplex behaviors depend on distributed neural networks rather than isolated single brain centers."
        },
        {
          id: "act_psych_3_4",
          type: "page",
          title: "Module 3.4: Genetics and Evolutionary Psychology",
          completed: false,
          content: "### Principles of Behavioral Genetics\n\n- **Heritability:** An estimate of the variance within a specific population attributable to genetic variation (measured through twin and adoption studies).\n- **Epigenetics:** Environmental factors regulating gene expression without modifying the underlying DNA sequence.\n- **Evolutionary Psychology:** Examines how behavioral tendencies were selected over evolutionary history to enhance survival and reproductive success.\n\n### In Closing: Genes and Experience\nNature and nurture are inseparable; genetic predispositions actively influence and are influenced by environmental contexts."
        },
        {
          id: "quiz_psych_3",
          type: "quiz",
          title: "🧠 Chapter 3 Checkpoint: Neuroanatomy & Biological Psychology",
          completed: false,
          questions: [
            {
              question: "What occurs during the depolarization phase of an action potential?",
              options: [
                "Sodium ions (Na+) rush rapidly into the neuron",
                "Potassium ions (K+) are permanently pumped out of the cell",
                "The resting membrane potential drops to -90 mV",
                "Neurotransmitters are destroyed by enzymes inside the soma"
              ],
              correct: 0,
              explanation: "When the threshold of excitation is reached, voltage-gated sodium channels open and Na+ ions rush in down their concentration gradient, depolarizing the cell to +30 mV."
            },
            {
              question: "Damage to Wernicke's area in the left temporal lobe typically results in what deficit?",
              options: [
                "Inability to move the right arm and leg",
                "Difficulty understanding spoken language, despite producing fluent speech",
                "Complete loss of long-term episodic memories",
                "Total blindness in both eyes"
              ],
              correct: 1,
              explanation: "Wernicke's aphasia is characterized by impaired language comprehension, though patients can still speak fluently (often producing meaningless jargon)."
            },
            {
              question: "A drug that binds to and blocks a neurotransmitter receptor site without activating it is classified as a(n):",
              options: [
                "Agonist",
                "Antagonist",
                "Reuptake inhibitor",
                "Precursor"
              ],
              correct: 1,
              explanation: "An antagonist binds to postsynaptic receptor sites and blocks the endogenous neurotransmitter from exerting its effect."
            },
            {
              question: "Which subcortical structure plays a vital role in consolidating new declarative memories?",
              options: [
                "Hypothalamus",
                "Hippocampus",
                "Medulla",
                "Cerebellum"
              ],
              correct: 1,
              explanation: "The hippocampus is essential for consolidating explicit (declarative) memories into long-term storage, as demonstrated by the famous case of patient H.M."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_4",
      title: "Chapter 4: Sensation and Perception",
      description: "Module 4.1: Vision | Module 4.2: Nonvisual Senses | Module 4.3: Sensory Interpretation",
      activities: [
        {
          id: "act_psych_4_1",
          type: "page",
          title: "Module 4.1: Vision",
          completed: false,
          content: "### Visual Anatomy and Photoreceptors\n\n- **Optical Pathway:** Cornea $\\rightarrow$ Pupil (regulated by iris) $\\rightarrow$ Lens (accommodation) $\\rightarrow$ Retina.\n- **Photoreceptors:**\n  - *Rods (~120 million):* Located in the peripheral retina; highly sensitive to dim light; no color discrimination.\n  - *Cones (~6 million):* Concentrated in the **fovea**; responsible for color vision and high visual acuity.\n- **Theories of Color Vision:**\n  1. *Trichromatic Theory (Young-Helmholtz):* Color perception relies on three cone types sensitive to short (blue), medium (green), and long (red) wavelengths.\n  2. *Opponent-Process Theory (Hering):* Bipolar/ganglion cells process color in opposing pairs: red vs. green, blue vs. yellow, black vs. white (explains negative afterimages).\n\n### In Closing: Vision as an Active Process\nVision is not a passive camera recording; it is an active constructive process interpreted by the visual cortex."
        },
        {
          id: "act_psych_4_2",
          type: "page",
          title: "Module 4.2: The Nonvisual Senses",
          completed: false,
          content: "### Audition and Other Modalities\n\n- **Audition (Hearing):** Sound waves cause vibrations of the tympanic membrane (eardrum) $\\rightarrow$ malleus, incus, stapes $\\rightarrow$ oval window $\\rightarrow$ cochlear fluid $\\rightarrow$ hair cells on the basilar membrane.\n- **Somatosensation:** Mechanoreceptors (pressure), thermoreceptors (temperature), nociceptors (pain). The **Gate-Control Theory** proposes that spinal cord neural gates can inhibit or facilitate pain transmission.\n- **Chemical Senses:**\n  - *Gustation:* Sweet, sour, salty, bitter, umami.\n  - *Olfaction:* Odorants bind to olfactory receptor neurons; olfactory bulb projects directly to the limbic system, bypassing the thalamus.\n- **Vestibular Sense:** Semicircular canals and otolith organs in the inner ear detect head orientation and acceleration.\n\n### In Closing: Sensory Systems\nEach sensory organ transforms unique physical stimuli into standardized neural impulses."
        },
        {
          id: "act_psych_4_3",
          type: "page",
          title: "Module 4.3: Interpreting Sensory Information",
          completed: false,
          content: "### Perceptual Organization (Gestalt)\n\n- **Top-Down vs. Bottom-Up Processing:** Bottom-up builds from raw sensory inputs; top-down applies prior knowledge, expectations, and context.\n- **Gestalt Principles:**\n  - *Figure-Ground:* Distinguishing focal objects from the background.\n  - *Proximity:* Grouping nearby elements.\n  - *Similarity:* Grouping visually alike elements.\n  - *Continuity:* Perceiving smooth, unbroken trajectories.\n  - *Closure:* Mentally completing incomplete shapes.\n- **Depth Perception:** Monocular cues (linear perspective, relative size, texture gradient) and binocular cues (retinal disparity, convergence).\n\n### In Closing: Making Sense of Sensory Information\nPerception resolves ambiguities using contextual expectations and evolutionary heuristics."
        },
        {
          id: "quiz_psych_4",
          type: "quiz",
          title: "🧠 Chapter 4 Checkpoint: Sensation & Perception",
          completed: false,
          questions: [
            {
              question: "Which photoreceptors are concentrated in the fovea and are responsible for color vision and high acuity?",
              options: [
                "Rods",
                "Cones",
                "Bipolar cells",
                "Ganglion cells"
              ],
              correct: 1,
              explanation: "Cones are concentrated in the fovea, providing high visual acuity and color perception in bright illumination."
            },
            {
              question: "Staring at a bright green patch and then looking at a white wall produces a red afterimage. Which color vision theory explains this?",
              options: [
                "Trichromatic theory",
                "Opponent-process theory",
                "Frequency theory",
                "Place theory"
              ],
              correct: 1,
              explanation: "Opponent-process theory explains negative afterimages: fatiguing green-channel receptor cells causes the opposing red channel to fire upon viewing neutral white light."
            },
            {
              question: "The Gestalt principle whereby individuals mentally fill in gaps to perceive an incomplete shape as a whole is known as:",
              options: [
                "Proximity",
                "Closure",
                "Similarity",
                "Continuity"
              ],
              correct: 1,
              explanation: "Closure describes our perceptual tendency to automatically complete incomplete visual borders to construct unified wholes."
            },
            {
              question: "Which of the following sensory systems sends signals directly to the limbic system without passing through the thalamus?",
              options: [
                "Vision",
                "Audition",
                "Olfaction (Smell)",
                "Gustation (Taste)"
              ],
              correct: 2,
              explanation: "Olfaction is the only major sense whose neural pathways bypass the thalamus, projecting directly to the olfactory bulb and limbic structures."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_5",
      title: "Chapter 5: Development",
      description: "Module 5.1: Cognitive Development | Module 5.2: Social Development | Module 5.3: Diversity",
      activities: [
        {
          id: "act_psych_5_1",
          type: "page",
          title: "Module 5.1: Cognitive Development in Infancy and Childhood",
          completed: false,
          content: "### Jean Piaget's Stage Theory\n\n1. **Sensorimotor (0-2 years):** Learning through motor activities and sensory impressions. Acquisition of **Object Permanence** (~8 months).\n2. **Preoperational (2-7 years):** Symbolic thought and language. Characterized by **egocentrism** (inability to take another's perspective) and lack of **conservation**.\n3. **Concrete Operational (7-11 years):** Understanding conservation, reversibility, and logical operations with concrete physical objects.\n4. **Formal Operational (12+ years):** Abstract reasoning, hypothetical logic, and systematic scientific experimentation.\n\n### Lev Vygotsky's Sociocultural Alternative\n- Emphasized social interaction, cultural tools, the **Zone of Proximal Development (ZPD)**, and instructional **scaffolding**.\n\n### In Closing: How Grown Up Are We?\nCognitive development progresses from concrete sensory actions to sophisticated abstract reasoning through interactions with cultural tools."
        },
        {
          id: "act_psych_5_2",
          type: "page",
          title: "Module 5.2: Social and Emotional Development",
          completed: false,
          content: "### Attachment Styles (Mary Ainsworth)\n- **Secure:** Explores comfortably; distressed when caregiver departs; easily comforted upon reunion.\n- **Insecure-Avoidant:** Shows minimal distress upon separation; avoids or ignores caregiver on return.\n- **Insecure-Anxious/Ambivalent:** High distress upon separation; shows conflicting anger and clinging upon reunion.\n\n### Erikson's 8 Psychosocial Stages\n1. Trust vs. Mistrust (Infancy)\n2. Autonomy vs. Shame/Doubt (Toddlerhood)\n3. Initiative vs. Guilt (Preschool)\n4. Industry vs. Inferiority (School Age)\n5. Identity vs. Role Confusion (Adolescence)\n6. Intimacy vs. Isolation (Young Adulthood)\n7. Generativity vs. Stagnation (Middle Adulthood)\n8. Integrity vs. Despair (Late Adulthood)\n\n### In Closing: Social and Emotional Issues through the Life Span\nEach stage of life presents a distinct psychosocial crisis that shapes personality and interpersonal orientation."
        },
        {
          id: "act_psych_5_3",
          type: "page",
          title: "Module 5.3: Diversity: Gender, Culture, and Family",
          completed: false,
          content: "### Societal Influences & Parenting Styles\n\n- **Parenting Styles (Diana Baumrind):**\n  - *Authoritative:* High warmth, high expectations (produces self-reliant, socially competent children).\n  - *Authoritarian:* Low warmth, high demands, strict obedience.\n  - *Permissive:* High warmth, low discipline.\n  - *Uninvolved:* Low warmth, low demands.\n- **Adolescent Identity (James Marcia):**\n  - *Identity Diffusion:* No commitment, no exploration.\n  - *Foreclosure:* Commitment without exploration (accepting parents' values unquestioned).\n  - *Moratorium:* Active exploration without final commitment.\n  - *Identity Achievement:* Commitment reached following exploration.\n\n### In Closing: Many Ways of Life\nCultural expectations and parental dynamics interact with biological predispositions to sculpt identity."
        },
        {
          id: "quiz_psych_5",
          type: "quiz",
          title: "🧠 Chapter 5 Checkpoint: Lifespan Development",
          completed: false,
          questions: [
            {
              question: "A child who understands that pouring water from a wide glass into a tall, thin glass does not change the amount of water has mastered:",
              options: [
                "Object permanence",
                "Conservation",
                "Egocentrism",
                "Animism"
              ],
              correct: 1,
              explanation: "Conservation is the realization that fundamental physical properties (volume, mass) remain unchanged despite alterations in outward appearance."
            },
            {
              question: "According to Erik Erikson, the primary psychosocial challenge faced during adolescence is:",
              options: [
                "Trust vs. Mistrust",
                "Industry vs. Inferiority",
                "Identity vs. Role Confusion",
                "Generativity vs. Stagnation"
              ],
              correct: 2,
              explanation: "During adolescence, individuals grapple with Identity vs. Role Confusion as they explore values, vocational directions, and personal beliefs."
            },
            {
              question: "Which parenting style combines high parental warmth with firm, consistent limits and reasoning?",
              options: [
                "Authoritative",
                "Authoritarian",
                "Permissive",
                "Uninvolved"
              ],
              correct: 0,
              explanation: "Authoritative parenting balances affection and responsiveness with clear standards and open communication, yielding optimal developmental outcomes."
            },
            {
              question: "In Mary Ainsworth's Strange Situation, an infant who is distressed upon the mother's departure but actively seeks contact and is quickly soothed upon her return demonstrates:",
              options: [
                "Secure attachment",
                "Avoidant attachment",
                "Ambivalent attachment",
                "Disorganized attachment"
              ],
              correct: 0,
              explanation: "Secure attachment is characterized by using the caregiver as a secure base, showing appropriate separation distress, and being comforted easily upon reunion."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_6",
      title: "Chapter 6: Learning",
      description: "Module 6.1: Classical Conditioning | Module 6.2: Operant Conditioning | Module 6.3: Variations",
      activities: [
        {
          id: "act_psych_6_1",
          type: "page",
          title: "Module 6.1: Classical Conditioning",
          completed: false,
          content: "### Pavlovian Classical Conditioning\n\n- **Unconditioned Stimulus (UCS):** Naturally elicits a reflexive response (e.g., meat powder).\n- **Unconditioned Response (UCR):** Reflexive unlearned reaction to UCS (e.g., salivation).\n- **Conditioned Stimulus (CS):** Previously neutral stimulus paired with UCS (e.g., tone).\n- **Conditioned Response (CR):** Learned response triggered by the CS alone.\n- **Conditioning Dynamics:**\n  - *Acquisition:* Initial stage establishing association.\n  - *Extinction:* Weakening of CR when CS is repeatedly presented without UCS.\n  - *Spontaneous Recovery:* Reappearance of an extinguished CR following a rest interval.\n  - *Generalization:* Responding to stimuli similar to the CS.\n  - *Discrimination:* Learning to respond only to the specific CS.\n\n### In Closing: Classical Conditioning Is More Than Drooling Dogs\nClassical conditioning underlies emotional reactions, phobias, taste aversions, and physiological anticipations."
        },
        {
          id: "act_psych_6_2",
          type: "page",
          title: "Module 6.2: Operant Conditioning",
          completed: false,
          content: "### Skinnerian Operant Conditioning\n\nBehavior is shaped by its consequences (Edward Thorndike's **Law of Effect**).\n\n- **Consequence Matrix:**\n  - *Positive Reinforcement:* Adding a pleasant stimulus to increase behavior.\n  - *Negative Reinforcement:* Removing an unpleasant stimulus to increase behavior.\n  - *Positive Punishment:* Adding an unpleasant stimulus to decrease behavior.\n  - *Negative Punishment (Extinction/Time-out):* Removing a pleasant stimulus to decrease behavior.\n- **Schedules of Reinforcement:**\n  - *Fixed-Ratio (FR):* Reward after fixed number of responses (e.g., piecework pay).\n  - *Variable-Ratio (VR):* Reward after variable number of responses (e.g., slot machines; highly resistant to extinction).\n  - *Fixed-Interval (FI):* Reward for first response after fixed time period.\n  - *Variable-Interval (VI):* Reward for first response after variable time period.\n\n### In Closing: Operant Conditioning and Human Behavior\nReinforcement produces more reliable and sustainable behavioral change than punishment."
        },
        {
          id: "act_psych_6_3",
          type: "page",
          title: "Module 6.3: Variations of Learning",
          completed: false,
          content: "### Observational and Cognitive Learning\n\n- **Albert Bandura:** Observational (social) learning demonstrated in the **Bobo Doll Experiment**. Individuals learn through *modeling* and *vicarious reinforcement*.\n- **Latent Learning (Edward Tolman):** Learning occurs without immediate reinforcement, evidenced by rats forming *cognitive maps* of mazes.\n- **Biological Preparedness (John Garcia):** Animals are evolutionarily predisposed to learn certain associations (e.g., taste with nausea) in a single trial (*conditioned taste aversion*).\n\n### In Closing: All Learning Is Not the Same\nLearning involves an interplay of behavioral contingencies, cognitive expectations, and evolutionary biological constraints."
        },
        {
          id: "quiz_psych_6",
          type: "quiz",
          title: "🧠 Chapter 6 Checkpoint: Classical & Operant Conditioning",
          completed: false,
          questions: [
            {
              question: "Taking an aspirin to relieve a severe headache is an example of:",
              options: [
                "Positive reinforcement",
                "Negative reinforcement",
                "Positive punishment",
                "Negative punishment"
              ],
              correct: 1,
              explanation: "Negative reinforcement occurs when a behavior increases because it removes or terminates an unpleasant or aversive stimulus (the headache pain)."
            },
            {
              question: "Slot machines in casinos reward players on which schedule of reinforcement?",
              options: [
                "Fixed-Ratio",
                "Variable-Ratio",
                "Fixed-Interval",
                "Variable-Interval"
              ],
              correct: 1,
              explanation: "Variable-ratio schedules deliver reinforcement after an unpredictable number of responses, creating high, consistent response rates that resist extinction."
            },
            {
              question: "In Pavlov's classical conditioning experiments, salivation to the sound of the bell was the:",
              options: [
                "Unconditioned stimulus (UCS)",
                "Unconditioned response (UCR)",
                "Conditioned stimulus (CS)",
                "Conditioned response (CR)"
              ],
              correct: 3,
              explanation: "Salivation in response to the bell (a learned stimulus) is the conditioned response (CR)."
            },
            {
              question: "Albert Bandura's famous Bobo Doll experiment demonstrated that children:",
              options: [
                "Can learn aggressive behaviors purely through observing and imitating adult models",
                "Only learn behaviors when physically reinforced with treats",
                "Cannot distinguish between fantasy and reality",
                "Are completely immune to social influences"
              ],
              correct: 0,
              explanation: "Bandura's Bobo doll study proved observational learning: children imitated novel aggressive acts demonstrated by adult models without direct reinforcement."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_7",
      title: "Chapter 7: Memory",
      description: "Module 7.1: Types of Memory | Module 7.2: Encoding & Storage | Module 7.3: Forgetting",
      activities: [
        {
          id: "act_psych_7_1",
          type: "page",
          title: "Module 7.1: Types of Memory",
          completed: false,
          content: "### The Architecture of Memory\n\n- **Atkinson-Shiffrin Model:**\n  1. *Sensory Memory:* Brief recording of sensory information (Iconic <1 sec; Echoic 3-4 sec).\n  2. *Short-Term / Working Memory:* Limited capacity ($7 \\pm 2$ chunks), duration 20-30 seconds without rehearsal. Baddeley's model includes Phonological Loop, Visuospatial Sketchpad, and Central Executive.\n  3. *Long-Term Memory:* Virtually unlimited capacity and durable duration.\n- **Taxonomy of Long-Term Memory:**\n  - *Explicit (Declarative):* Consciously recalled.\n    - *Episodic:* Personal experiences and autobiographical events.\n    - *Semantic:* General knowledge, vocabulary, facts.\n  - *Implicit (Nondeclarative):* Expressed through performance without conscious recollection (procedural motor skills, classical conditioning, priming).\n\n### In Closing: Varieties of Memory\nMemory is not a unitary drawer, but multiple distinct systems distributed across different neural circuits."
        },
        {
          id: "act_psych_7_2",
          type: "page",
          title: "Module 7.2: Encoding, Storage, and Retrieval",
          completed: false,
          content: "### Optimizing Memory Storage\n\n- **Levels of Processing (Craik & Lockhart):** Deep semantic processing (analyzing meaning) leads to far stronger memory traces than shallow acoustic or physical processing.\n- **Chunking & Mnemonics:** Organizing raw data into manageable meaningful units.\n- **Serial Position Effect:** Tendency to recall items at the beginning (*primacy effect* - long term transfer) and end (*recency effect* - working memory) of a list better than the middle.\n- **Encoding Specificity:** Retrieval is most effective when retrieval cues match the context in which the information was encoded (context-dependent and state-dependent memory).\n\n### In Closing: Improving Your Memory\nActive retrieval testing (*the testing effect*) and distributed study produce far greater retention than passive reading."
        },
        {
          id: "act_psych_7_3",
          type: "page",
          title: "Module 7.3: Forgetting and Memory Distortion",
          completed: false,
          content: "### Mechanisms of Forgetting\n\n- **Interference:**\n  - *Proactive Interference:* Prior learning interferes with the recall of newer information.\n  - *Retroactive Interference:* Newly acquired information interferes with the recall of older memories.\n- **Amnesia:**\n  - *Anterograde Amnesia:* Inability to form new long-term declarative memories after brain trauma (damage to hippocampus).\n  - *Retrograde Amnesia:* Loss of memories formed prior to brain injury.\n- **Memory Reconstruction:** Memories are reconstructed each time they are recalled. Elizabeth Loftus demonstrated the **Misinformation Effect**, proving leading questions can plant false memories.\n\n### In Closing: Memory Loss and Distortion\nHuman memory is dynamic and reconstructive, vulnerable to distortion and post-event suggestion."
        },
        {
          id: "quiz_psych_7",
          type: "quiz",
          title: "🧠 Chapter 7 Checkpoint: Memory Systems & Forgetting",
          completed: false,
          questions: [
            {
              question: "Remembering your first day of high school is an example of which type of memory?",
              options: [
                "Semantic memory",
                "Episodic memory",
                "Procedural memory",
                "Iconic memory"
              ],
              correct: 1,
              explanation: "Episodic memory stores personally experienced autobiographical events tied to a specific time and place."
            },
            {
              question: "If learning your new phone number causes you to forget your previous phone number, you are experiencing:",
              options: [
                "Proactive interference",
                "Retroactive interference",
                "Anterograde amnesia",
                "State-dependent memory"
              ],
              correct: 1,
              explanation: "Retroactive interference occurs when new learning disrupts the retrieval of previously stored information."
            },
            {
              question: "Patient H.M. had his bilateral medial temporal lobes (including hippocampi) removed, after which he could no longer form new explicit memories. This condition is called:",
              options: [
                "Retrograde amnesia",
                "Anterograde amnesia",
                "Dissociative fugue",
                "Aphasia"
              ],
              correct: 1,
              explanation: "Anterograde amnesia is the inability to transfer new information from short-term to long-term explicit storage following neurological injury."
            },
            {
              question: "According to Elizabeth Loftus's research, what happens when eyewitnesses are asked leading questions containing misleading information?",
              options: [
                "Their memories remain 100% immune to change",
                "The misinformation is frequently incorporated into their reconstructed memories",
                "They instantly realize the interviewer is deceiving them",
                "They completely lose all short-term memories"
              ],
              correct: 1,
              explanation: "The misinformation effect shows that exposure to misleading post-event information alters eyewitness recall because memory is reconstructive."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_8",
      title: "Chapter 8: Cognition and Language",
      description: "Module 8.1: Attention & Concepts | Module 8.2: Problem Solving | Module 8.3: Language",
      activities: [
        {
          id: "act_psych_8_1",
          type: "page",
          title: "Module 8.1: Attention and Categorization",
          completed: false,
          content: "### Attention and Concepts\n\n- **Attention:** Selective allocation of cognitive processing resources. The **Stroop Effect** illustrates the difficulty of overriding automatic reading when naming ink colors.\n- **Change Blindness:** Failure to detect visual changes in an environment due to divided attention.\n- **Concepts and Prototypes:** A *concept* is a mental grouping of similar objects. A *prototype* is an idealized best example of a category (e.g., a robin as a prototype for 'bird').\n\n### In Closing: Thinking about Attention and Concepts\nCategorization economizes cognitive effort by organizing experiences into structured conceptual models."
        },
        {
          id: "act_psych_8_2",
          type: "page",
          title: "Module 8.2: Solving Problems and Making Decisions",
          completed: false,
          content: "### Problem Solving & Cognitive Biases\n\n- **Algorithms:** Methodical, step-by-step rules guaranteeing a correct solution.\n- **Heuristics:** Fast cognitive shortcuts that are efficient but error-prone.\n  - *Availability Heuristic:* Estimating probability based on how readily instances come to mind (e.g., fearing plane crashes after news coverage).\n  - *Representativeness Heuristic:* Judging likelihood based on how well an item matches a prototype.\n- **Obstacles to Clear Thinking:**\n  - *Confirmation Bias:* Seeking evidence confirming preconceived ideas while ignoring disconfirming data.\n  - *Functional Fixedness:* Inability to envision novel uses for familiar objects.\n  - *Framing Effects:* Decisions influenced by how choices are presented (e.g., '90% lean' vs. '10% fat').\n\n### In Closing: Successful and Unsuccessful Problem Solving\nHuman decision-makers rely on rapid heuristics that serve well daily but systematically fail in probabilistic estimation."
        },
        {
          id: "act_psych_8_3",
          type: "page",
          title: "Module 8.3: Language",
          completed: false,
          content: "### Architecture of Human Language\n\n- **Phonemes:** Smallest distinctive sound units (e.g., /b/, /p/).\n- **Morphemes:** Smallest units of meaning (words, prefixes like 'un-', suffixes like '-ed').\n- **Syntax:** Rules governing grammatical word order.\n- **Language Acquisition:** Cooing $\\rightarrow$ babbling (~6 months) $\\rightarrow$ one-word stage (~1 year) $\\rightarrow$ telegraphic speech (~2 years). Noam Chomsky proposed a biological *Language Acquisition Device (LAD)*.\n- **Neural Substrates:**\n  - *Broca's Area (Frontal Lobe):* Motor speech generation (damage results in expressive aphasia).\n  - *Wernicke's Area (Temporal Lobe):* Language comprehension (damage results in receptive aphasia).\n\n### In Closing: Language and Humanity\nLanguage is a uniquely human biological adaptation enabling recursive thought and cultural transmission."
        },
        {
          id: "quiz_psych_8",
          type: "quiz",
          title: "🧠 Chapter 8 Checkpoint: Cognition, Problem Solving & Language",
          completed: false,
          questions: [
            {
              question: "Assuming that someone wearing a tweed jacket and glasses is a college professor rather than a truck driver is an example of the:",
              options: [
                "Availability heuristic",
                "Representativeness heuristic",
                "Framing effect",
                "Stroop effect"
              ],
              correct: 1,
              explanation: "The representativeness heuristic leads us to judge probability based on how closely an individual matches our mental prototype of a category."
            },
            {
              question: "The smallest units of meaning in a language (including prefixes and root words) are called:",
              options: [
                "Phonemes",
                "Morphemes",
                "Syntax",
                "Semantics"
              ],
              correct: 1,
              explanation: "Morphemes are the smallest grammatical units carrying semantic meaning in a language."
            },
            {
              question: "When people actively search for information that supports their pre-existing political views while dismissing counter-evidence, they exhibit:",
              options: [
                "Functional fixedness",
                "Confirmation bias",
                "Algorithm failure",
                "Receptive aphasia"
              ],
              correct: 1,
              explanation: "Confirmation bias is the pervasive tendency to search for, interpret, and favor information that validates preexisting beliefs."
            },
            {
              question: "Damage to Broca's area in the left frontal cortex causes which symptom?",
              options: [
                "Difficulty physically producing fluent spoken words, while comprehension remains largely intact",
                "Inability to hear auditory tones",
                "Fluent, effortless speech that makes no grammatical sense",
                "Total loss of facial recognition"
              ],
              correct: 0,
              explanation: "Broca's aphasia impairs motor speech production: speech is halting and effortful, though language comprehension is generally preserved."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_9",
      title: "Chapter 9: Intelligence",
      description: "Module 9.1: Intelligence Tests | Module 9.2: Evaluating Tests & Influences",
      activities: [
        {
          id: "act_psych_9_1",
          type: "page",
          title: "Module 9.1: Intelligence and Intelligence Tests",
          completed: false,
          content: "### Conceptual Models of Intelligence\n\n- **Charles Spearman (g Factor):** Proposed that a single underlying general cognitive ability ($g$) influences performance across all mental tasks.\n- **Raymond Cattell:**\n  - *Fluid Intelligence ($Gf$):* Raw reasoning power, problem-solving in novel situations (peaks in early adulthood).\n  - *Crystallized Intelligence ($Gc$):* Accumulated factual knowledge and verbal skills (increases across the lifespan).\n- **Howard Gardner (Multiple Intelligences):** Eight distinct intelligences (linguistic, musical, spatial, kinesthetic, etc.).\n- **Robert Sternberg (Triarchic Theory):** Analytical, Creative, and Practical intelligence.\n- **Measurement Origins:** Alfred Binet developed the first practical test to identify French schoolchildren requiring special instruction. Stanford-Binet and David Wechsler's tests (WAIS-IV) standardize IQ on a normal bell curve (Mean = 100, SD = 15).\n\n### In Closing: Measuring Intelligence\nIntelligence assessments quantify specific cognitive proficiencies but cannot capture the total breadth of human competence."
        },
        {
          id: "act_psych_9_2",
          type: "page",
          title: "Module 9.2: Evaluating Intelligence Tests",
          completed: false,
          content: "### Psychometric Standards\n\n- **Reliability:** Consistency of measurement (e.g., test-retest reliability).\n- **Validity:** Accuracy of measurement—does the test measure what it claims to measure?\n  - *Predictive Validity:* Predicting future real-world outcomes (e.g., GPA, job performance).\n- **The Flynn Effect:** Global average raw performance on intelligence tests has increased by approximately 3 IQ points per decade, necessitating periodic test renorming.\n- **Stereotype Threat:** Apprehension experienced by members of a group that their performance might confirm a negative stereotype, temporarily depressing test performance.\n\n### In Closing: Consequences of Testing\nStandardized tests must be interpreted cautiously, factoring in cultural, economic, and emotional variables."
        },
        {
          id: "quiz_psych_9",
          type: "quiz",
          title: "🧠 Chapter 9 Checkpoint: Intelligence Theories & Psychometrics",
          completed: false,
          questions: [
            {
              question: "The ability to reason abstractly and solve novel logic puzzles quickly without relying on prior schooling reflects:",
              options: [
                "Crystallized intelligence (Gc)",
                "Fluid intelligence (Gf)",
                "Emotional intelligence",
                "Verbal comprehension"
              ],
              correct: 1,
              explanation: "Fluid intelligence (Gf) represents innate, nonverbal reasoning capacity that operates independently of acquired cultural knowledge."
            },
            {
              question: "On modern standardized intelligence tests like the WAIS, what is the assigned mean and standard deviation?",
              options: [
                "Mean = 50, Standard Deviation = 10",
                "Mean = 100, Standard Deviation = 15",
                "Mean = 100, Standard Deviation = 50",
                "Mean = 75, Standard Deviation = 20"
              ],
              correct: 1,
              explanation: "Standardized IQ tests calibrate scores to a bell curve with a mean score of 100 and a standard deviation of 15."
            },
            {
              question: "The worldwide rise in raw performance on IQ tests over successive generations is known as the:",
              options: [
                "Spearman phenomenon",
                "Flynn effect",
                "Gardner expansion",
                "Barnum effect"
              ],
              correct: 1,
              explanation: "The Flynn effect describes the documented historical rise in average intelligence test performance across generations."
            },
            {
              question: "If a person takes an intelligence test on Monday and scores 120, then takes the identical test on Friday and scores 70, the test lacks:",
              options: [
                "Reliability",
                "Validity",
                "Standardization",
                "Predictive power"
              ],
              correct: 0,
              explanation: "Reliability refers to the consistency and repeatability of test scores under identical conditions."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_10",
      title: "Chapter 10: Consciousness",
      description: "Module 10.1: Conscious/Unconscious | Module 10.2: Sleep & Dreams | Module 10.3: Hypnosis",
      activities: [
        {
          id: "act_psych_10_1",
          type: "page",
          title: "Module 10.1: Conscious and Unconscious Processes",
          completed: false,
          content: "### Conscious Awareness\n\n- **Dual-Processing Mind:** Information is simultaneously processed on separate conscious (explicit, deliberate) and unconscious (implicit, automatic) tracks.\n- **Priming:** Subliminal or unattended stimuli influencing subsequent perceptions and actions without conscious awareness.\n\n### In Closing: Research on Consciousness\nMuch of human cognitive calculation operates beneath conscious awareness."
        },
        {
          id: "act_psych_10_2",
          type: "page",
          title: "Module 10.2: Sleep and Dreams",
          completed: false,
          content: "### Circadian Biology & Sleep Stages\n\n- **Circadian Rhythms:** 24-hour biological cycle coordinated by the **Suprachiasmatic Nucleus (SCN)** of the hypothalamus, modulating pineal melatonin secretion.\n- **Sleep Stages:**\n  - *NREM-1:* Transition from wakefulness; alpha to theta brainwaves; hypnagogic imagery.\n  - *NREM-2:* Characterized by **sleep spindles** and **K-complexes**.\n  - *NREM-3:* Slow-wave deep sleep; dominant delta waves; tissue repair and hormone release.\n  - *REM Sleep:* Rapid eye movements, heightened autonomic arousal, motor paralysis (*muscle atonia*), and vivid dreaming.\n- **Dream Theories:**\n  - *Freudian Psychoanalytic:* Latent (hidden psychological wishes) vs. Manifest (actual storyline) content.\n  - *Activation-Synthesis (Hobson & McCarley):* Dreams are the forebrain's attempt to synthesize random brainstem neural bursts.\n\n### In Closing: The Mysteries of Sleep and Dreams\nSleep is vital for memory consolidation, neurotoxin clearance, and emotional equilibrium."
        },
        {
          id: "act_psych_10_3",
          type: "page",
          title: "Module 10.3: Hypnosis",
          completed: false,
          content: "### The Nature of Hypnosis\n\n- **Hypnosis:** A state of focused attention, heightened suggestibility, and vivid imagery.\n- **Theories of Hypnosis:**\n  - *Divided Consciousness / Dissociation (Hilgard):* Hypnosis splits consciousness into an aware actor and a detached monitoring **'hidden observer'**.\n  - *Social-Cognitive Theory:* Hypnotized subjects enact the social role expected of them in a supportive context.\n\n### In Closing: What Hypnosis Is and Isn't\nHypnosis cannot force individuals to commit acts contrary to their morals or recover photographic memories, but it is effective in pain management."
        },
        {
          id: "quiz_psych_10",
          type: "quiz",
          title: "🧠 Chapter 10 Checkpoint: Sleep Stages, Consciousness & Dreams",
          completed: false,
          questions: [
            {
              question: "During which sleep stage do high brain metabolic activity, vivid dreaming, and skeletal muscle paralysis (atonia) occur simultaneously?",
              options: [
                "NREM-1",
                "NREM-2",
                "NREM-3",
                "REM Sleep"
              ],
              correct: 3,
              explanation: "REM (Rapid Eye Movement) sleep is referred to as 'paradoxical sleep' because the brain is highly active while the body's skeletal muscles are paralyzed."
            },
            {
              question: "Which brain structure acts as the master circadian pacemaker regulating our biological clock?",
              options: [
                "Suprachiasmatic Nucleus (SCN) in the hypothalamus",
                "Hippocampus",
                "Cerebellum",
                "Corpus Callosum"
              ],
              correct: 0,
              explanation: "The Suprachiasmatic Nucleus (SCN) in the hypothalamus receives light inputs from the retina and coordinates our 24-hour circadian cycle."
            },
            {
              question: "The Activation-Synthesis theory proposes that dreams are:",
              options: [
                "Repressed unconscious sexual and aggressive urges",
                "The cortex's effort to synthesize and make sense of random brainstem neural activity",
                "Psychic premonitions of future events",
                "The result of oxygen starvation to the visual cortex"
              ],
              correct: 1,
              explanation: "The activation-synthesis model argues that dreams are cognitive narratives constructed by the cortex to interpret random neural firing originating in the brainstem."
            },
            {
              question: "Ernest Hilgard's 'hidden observer' concept supports which theoretical explanation of hypnosis?",
              options: [
                "Social-cognitive role theory",
                "Dissociation theory",
                "Activation-synthesis theory",
                "Dual-coding theory"
              ],
              correct: 1,
              explanation: "Hilgard's dissociation theory posits that hypnosis splits consciousness into separate streams, with a 'hidden observer' monitoring experiences passively."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_11",
      title: "Chapter 11: Motivated Behaviors",
      description: "Module 11.1: Work Motivation | Module 11.2: Hunger | Module 11.3: Sexual Motivation",
      activities: [
        {
          id: "act_psych_11_1",
          type: "page",
          title: "Module 11.1: Work Motivation and General Theories",
          completed: false,
          content: "### Theories of Motivation\n\n- **Drive-Reduction Theory:** Internal physiological needs create unpleasant states of tension (drives) that organisms are compelled to reduce to maintain **homeostasis**.\n- **Arousal Theory (Yerkes-Dodson Law):** Performance peaks at intermediate levels of physiological arousal.\n- **Maslow's Hierarchy of Needs:** Physiological $\\rightarrow$ Safety $\\rightarrow$ Belongingness $\\rightarrow$ Esteem $\\rightarrow$ Self-Actualization.\n- **Intrinsic vs. Extrinsic:** The *Overjustification Effect* occurs when external incentives undermine intrinsic interest in an intrinsically enjoyable activity.\n\n### In Closing: Work and Ambition\nEffective motivation involves setting specific, challenging, yet attainable goals with clear feedback."
        },
        {
          id: "act_psych_11_2",
          type: "page",
          title: "Module 11.2: Hunger and Feeding Regulation",
          completed: false,
          content: "### Neural and Chemical Control of Hunger\n\n- **Hypothalamic Nuclei:**\n  - *Lateral Hypothalamus (LH):* The 'start eating' center (lesions cause cessation of feeding).\n  - *Ventromedial Hypothalamus (VMH):* The 'stop eating' center (lesions cause extreme hyperphagia).\n- **Hormonal Messengers:**\n  - *Ghrelin:* Released by empty stomach; triggers hunger cravings.\n  - *Leptin:* Secreted by fat tissue; signals adequate energy stores and suppresses appetite.\n  - *Insulin:* Secreted by pancreas; regulates glucose uptake.\n- **Eating Disorders:** Anorexia Nervosa (severe dietary restriction), Bulimia Nervosa (binge-purge cycle), Binge-Eating Disorder.\n\n### In Closing: The Complexities of Hunger\nHunger is regulated by an intricate balance of endocrine hormones, hypothalamic circuits, and cultural cues."
        },
        {
          id: "act_psych_11_3",
          type: "page",
          title: "Module 11.3: Sexual Motivation",
          completed: false,
          content: "### Physiology and Social Dimensions\n\n- **Masters and Johnson Sexual Response Cycle:** 1. Excitement, 2. Plateau, 3. Orgasm, 4. Resolution (accompanied by male refractory period).\n- **Evolutionary Perspectives:** Sexual strategies theory analyzes differential parental investment and reproductive strategies.\n\n### In Closing: The Biology and Sociology of Sex\nHuman sexual behavior represents an interaction between biological neuroendocrinology and socio-cultural values."
        },
        {
          id: "quiz_psych_11",
          type: "quiz",
          title: "🧠 Chapter 11 Checkpoint: Motivation & Physiological Drives",
          completed: false,
          questions: [
            {
              question: "According to the Yerkes-Dodson Law, optimal task performance occurs under which conditions?",
              options: [
                "Near-zero arousal",
                "Moderate physiological arousal",
                "Maximum possible anxiety and stress",
                "Only during sleep"
              ],
              correct: 1,
              explanation: "The Yerkes-Dodson law shows that performance peaks at intermediate arousal levels: low arousal causes inattention, while excessive arousal causes cognitive disruption."
            },
            {
              question: "If an animal suffers a lesion to the ventromedial hypothalamus (VMH), what behavior typically results?",
              options: [
                "It refuses to eat and starves unless force-fed",
                "It eats uncontrollably and gains substantial weight",
                "It completely stops sleeping",
                "It loses all motor coordination"
              ],
              correct: 1,
              explanation: "The VMH functions as the satiety center; destroying it impairs the signal to cease eating, leading to hyperphagia and obesity."
            },
            {
              question: "When a student who loves reading for fun is paid $10 for every book read, they gradually lose interest in reading once payments stop. This illustrates the:",
              options: [
                "Yerkes-Dodson law",
                "Overjustification effect",
                "Drive-reduction principle",
                "Homeostatic balance"
              ],
              correct: 1,
              explanation: "The overjustification effect occurs when external tangible rewards diminish preexisting intrinsic motivation."
            },
            {
              question: "Which hormone is secreted by adipose (fat) tissue to signal energy sufficiency and suppress appetite?",
              options: [
                "Ghrelin",
                "Leptin",
                "Melatonin",
                "Adrenaline"
              ],
              correct: 1,
              explanation: "Leptin is secreted by fat cells into the bloodstream to inform the brain that energy reserves are sufficient, down-regulating hunger."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_12",
      title: "Chapter 12: Emotions, Stress, and Health",
      description: "Module 12.1: Nature of Emotion | Module 12.2: Specific Experiences | Module 12.3: Stress & Health",
      activities: [
        {
          id: "act_psych_12_1",
          type: "page",
          title: "Module 12.1: The Nature of Emotion",
          completed: false,
          content: "### Major Theories of Emotion\n\n1. **James-Lange Theory:** Bodily arousal precedes and determines subjective feeling (*'We are afraid because we run'*).\n2. **Cannon-Bard Theory:** Physiological arousal and conscious emotion occur simultaneously and independently via the thalamus.\n3. **Schachter-Singer Two-Factor Theory:** Emotion requires both physiological arousal AND a cognitive appraisal/label of that arousal within the current context.\n\n### In Closing: Research on Emotions\nSubjective feelings reflect the brain's interpretation of peripheral autonomic sensations."
        },
        {
          id: "act_psych_12_2",
          type: "page",
          title: "Module 12.2: Fear, Anger, and Emotional Expression",
          completed: false,
          content: "### Expression and Threat Detection\n\n- **The Amygdala:** Processes rapid, non-conscious visual inputs to trigger sympathetic threat alarms (*fight or flight*).\n- **Universal Expressions (Paul Ekman):** Primary emotional facial expressions (happiness, sadness, anger, fear, disgust, surprise) are cross-culturally universal.\n- **Facial Feedback Hypothesis:** Facial muscle postures can directly modulate felt emotional states.\n\n### In Closing: Emotions and the Richness of Life\nEmotions provide rapid behavioral heuristics essential for social communication and survival."
        },
        {
          id: "act_psych_12_3",
          type: "page",
          title: "Module 12.3: Stress, Health, and Coping",
          completed: false,
          content: "### Stress Physiology (Hans Selye)\n\n- **General Adaptation Syndrome (GAS):**\n  1. *Alarm Stage:* Sympathetic fight-or-flight mobilization.\n  2. *Resistance Stage:* Sustained cortisol secretion via the HPA axis to cope with ongoing stress.\n  3. *Exhaustion Stage:* Biological breakdown; immune suppression, cardiovascular strain.\n- **Coping Mechanisms:**\n  - *Problem-Focused Coping:* Directly altering the stressor.\n  - *Emotion-Focused Coping:* Modifying emotional reactions to uncontrollable situations.\n\n### In Closing: Health Is Mental as Well as Medical\nPsychological perceptions of control profoundly influence immunological and cardiovascular health."
        },
        {
          id: "quiz_psych_12",
          type: "quiz",
          title: "🧠 Chapter 12 Checkpoint: Theories of Emotion & Stress Physiology",
          completed: false,
          questions: [
            {
              question: "You see a bear, your heart races, and you interpret your racing heart as evidence that you are terrified. Which theory of emotion does this exemplify?",
              options: [
                "James-Lange theory",
                "Cannon-Bard theory",
                "Activation-synthesis theory",
                "Evolutionary appraisal theory"
              ],
              correct: 0,
              explanation: "The James-Lange theory asserts that subjective emotional feelings are caused by the conscious perception of bodily physiological reactions."
            },
            {
              question: "What did the Schachter-Singer two-factor experiment demonstrate regarding emotion?",
              options: [
                "Emotions are strictly determined by genetics",
                "Physiological arousal determines emotional intensity, while cognitive appraisal determines the specific emotional label",
                "Facial expressions have no relationship to felt emotions",
                "All people react with identical emotions to adrenaline injections"
              ],
              correct: 1,
              explanation: "Schachter and Singer showed that emotion is a two-factor process: physiological arousal provides the energy, and cognitive appraisal provides the interpretive label."
            },
            {
              question: "What is the final stage of Hans Selye's General Adaptation Syndrome (GAS)?",
              options: [
                "Alarm",
                "Resistance",
                "Exhaustion",
                "Homeostasis"
              ],
              correct: 2,
              explanation: "The Exhaustion stage occurs when prolonged stress depletes the body's resources, leading to immune vulnerability and physical deterioration."
            },
            {
              question: "Which coping strategy focuses on directly changing the external stressor itself rather than just managing one's feelings about it?",
              options: [
                "Emotion-focused coping",
                "Problem-focused coping",
                "Defense mechanism denial",
                "Sublimation"
              ],
              correct: 1,
              explanation: "Problem-focused coping addresses the root cause of the stressor directly through active planning, problem-solving, and intervention."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_13",
      title: "Chapter 13: Social Behavior",
      description: "Module 13.1: Prosocial | Module 13.2: Perception | Module 13.3: Persuasion | Module 13.4: Attraction | Module 13.5: Influence",
      activities: [
        {
          id: "act_psych_13_1",
          type: "page",
          title: "Module 13.1: Prosocial and Antisocial Behavior",
          completed: false,
          content: "### Altruism and the Bystander Effect\n\n- **Bystander Effect (Darley & Latané):** The presence of other people decreases the likelihood that any single individual will intervene to help someone in distress.\n- **Underlying Causes:**\n  - *Diffusion of Responsibility:* Believing someone else will take action.\n  - *Pluralistic Ignorance:* Looking to others to define an ambiguous situation; if others appear calm, concluding no emergency exists.\n\n### In Closing: Is Cooperative Behavior Logical?\nHuman cooperation evolved through kin selection, direct reciprocity, and reputational benefits."
        },
        {
          id: "act_psych_13_2",
          type: "page",
          title: "Module 13.2: Social Perception and Cognition",
          completed: false,
          content: "### Attribution Theory\n\n- **Attribution:** Explaining the causes of behavior.\n  - *Internal (Dispositional):* Traits, personality, ability.\n  - *External (Situational):* Context, luck, environmental pressure.\n- **Attributional Biases:**\n  - *Fundamental Attribution Error (FAE):* Overestimating dispositional causes and underestimating situational pressures when explaining *others'* behavior.\n  - *Self-Serving Bias:* Attributing personal successes to internal ability and personal failures to external situational factors.\n\n### In Closing: How Social Perceptions Affect Behavior\nPeople routinely judge others as stable characters while explaining themselves through situational contexts."
        },
        {
          id: "act_psych_13_3",
          type: "page",
          title: "Module 13.3: Attitudes and Persuasion",
          completed: false,
          content: "### Attitude Change and Dissonance\n\n- **Cognitive Dissonance (Leon Festinger):** Unpleasant mental tension experienced when holding two contradictory beliefs or when behavior conflicts with attitudes. Resolved by changing attitudes to match behavior.\n- **Elaboration Likelihood Model (ELM):**\n  - *Central Route:* Scrutinizing logical arguments (durable attitude change).\n  - *Peripheral Route:* Influenced by celebrity endorsers, attractiveness, or emotional tone.\n- **Compliance Techniques:** Foot-in-the-Door, Door-in-the-Face, Low-Balling.\n\n### In Closing: Persuasion and Manipulation\nAttitudes adjust to justify past actions and reduce internal psychological conflict."
        },
        {
          id: "act_psych_13_4",
          type: "page",
          title: "Module 13.4: Interpersonal Attraction",
          completed: false,
          content: "### Determinants of Attraction\n\n- **Proximity:** Proximity breeds familiarity via the *Mere Exposure Effect*.\n- **Similarity:** People choose partners with matching values, socioeconomic status, and attitudes.\n- **Sternberg's Triangular Theory of Love:** Intimacy (closeness), Passion (romance/physical drive), and Commitment (decision to maintain love). All three combine to form *Consummate Love*.\n\n### In Closing: Choosing Your Partners Carefully\nRomantic bonds rely on an evolutionarily honed balance of companionate trust and passionate attachment."
        },
        {
          id: "act_psych_13_5",
          type: "page",
          title: "Module 13.5: Interpersonal Influence",
          completed: false,
          content: "### Conformity, Obedience, and Group Dynamics\n\n- **Solomon Asch (Conformity):** Over 75% of participants conformed at least once to an obviously incorrect majority line judgment.\n- **Stanley Milgram (Obedience):** 65% of normal adult participants obeyed experimenter commands to deliver lethal-level 450-volt shocks to an innocent confederate.\n- **Philip Zimbardo (Stanford Prison Experiment):** Demonstrated the power of assigned social roles and deindividuation in producing abusive behavior.\n- **Group Polarization & Groupthink:** Groups make more extreme decisions than individuals; cohesive groups suppress dissent to maintain consensus.\n\n### In Closing: Fix the Situation, Not Human Nature\nSituational pressures possess extraordinary power to override individual moral principles."
        },
        {
          id: "quiz_psych_13",
          type: "quiz",
          title: "🧠 Chapter 13 Checkpoint: Social Psychology & Influence",
          completed: false,
          questions: [
            {
              question: "Seeing a driver swerve and immediately assuming they are an aggressive idiot, while ignoring that they swerved to avoid an animal, exemplifies:",
              options: [
                "Fundamental Attribution Error (FAE)",
                "Pluralistic ignorance",
                "Cognitive dissonance",
                "Mere exposure effect"
              ],
              correct: 0,
              explanation: "The Fundamental Attribution Error describes the tendency to overestimate personality traits and underestimate situational factors when interpreting others' actions."
            },
            {
              question: "In Stanley Milgram's famous Yale obedience experiments, what percentage of participants administered shocks all the way to the maximum 450-volt level?",
              options: [
                "Less than 1%",
                "Approximately 10%",
                "Approximately 65%",
                "100%"
              ],
              correct: 2,
              explanation: "Milgram found that 65% of ordinary participants obeyed the experimenter's authority to deliver the maximum 450-volt shock, far exceeding prior psychiatric estimates."
            },
            {
              question: "Cognitive Dissonance Theory explains that when individuals act in ways that contradict their beliefs, they usually reduce psychological tension by:",
              options: [
                "Changing their underlying attitudes to align with their actions",
                "Developing anterograde amnesia",
                "Seeking legal counsel",
                "Engaging in operant extinction"
              ],
              correct: 0,
              explanation: "Leon Festinger's cognitive dissonance theory shows that people resolve internal discomfort by altering their attitudes to justify their completed behaviors."
            },
            {
              question: "The bystander effect occurs in emergencies primarily because onlookers experience:",
              options: [
                "Groupthink and obedience",
                "Diffusion of responsibility and pluralistic ignorance",
                "Severe cognitive dissonance",
                "Peripheral route persuasion"
              ],
              correct: 1,
              explanation: "Diffusion of responsibility (assuming others will act) and pluralistic ignorance (assuming it's not an emergency because others look calm) suppress bystander intervention."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_14",
      title: "Chapter 14: Personality",
      description: "Module 14.1: Personality Theories | Module 14.2: Traits | Module 14.3: Assessment",
      activities: [
        {
          id: "act_psych_14_1",
          type: "page",
          title: "Module 14.1: Personality Theories",
          completed: false,
          content: "### Psychodynamic and Humanistic Perspectives\n\n- **Sigmund Freud (Psychoanalysis):**\n  - *Id:* Unconscious, primal instinctual drives operating on the **Pleasure Principle**.\n  - *Ego:* Rational conscious executive operating on the **Reality Principle** to mediate between id and superego.\n  - *Superego:* Internalized moral standards, ideals, and conscience.\n  - *Defense Mechanisms:* Unconscious distortions of reality (Repression, Denial, Projection, Rationalization, Displacement, Sublimation, Reaction Formation).\n- **Humanistic Theories:**\n  - *Carl Rogers:* Person-centered theory; psychological health requires congruence between the *real self* and *ideal self*, fostered by **Unconditional Positive Regard**.\n  - *Abraham Maslow:* Focus on peak experiences and the drive toward **Self-Actualization**.\n\n### In Closing: In Search of Human Nature\nPsychodynamic theories prioritize unconscious conflicts, whereas humanistic models celebrate conscious self-determination."
        },
        {
          id: "act_psych_14_2",
          type: "page",
          title: "Module 14.2: Personality Traits",
          completed: false,
          content: "### The Big Five Factor Model (OCEAN)\n\nPersonality traits are stable, enduring patterns of thinking, feeling, and behaving.\n\n1. **Openness to Experience:** Intellectual curiosity, artistic sensitivity, preference for novelty.\n2. **Conscientiousness:** Self-discipline, organization, dependability, goal-directed striving.\n3. **Extraversion:** Sociability, assertiveness, positive emotionality, energy.\n4. **Agreeableness:** Compassion, cooperativeness, trustworthiness, warmth.\n5. **Neuroticism:** Emotional instability, anxiety, moodiness, vulnerability to psychological distress.\n\n### In Closing: The Challenges of Classifying Personality\nThe Big Five dimensions demonstrate strong cross-cultural validity and stability across adult development."
        },
        {
          id: "act_psych_14_3",
          type: "page",
          title: "Module 14.3: Personality Assessment",
          completed: false,
          content: "### Measuring Personality\n\n- **Objective Inventories:** Self-report questionnaires with standardized scoring.\n  - *Minnesota Multiphasic Personality Inventory (MMPI):* Empirically keyed to identify clinical psychopathology; includes lie and validity scales.\n  - *NEO-PI:* Measures the Big Five dimensions.\n- **Projective Tests:** Present ambiguous stimuli onto which participants project unconscious desires.\n  - *Rorschach Inkblot Test*\n  - *Thematic Apperception Test (TAT)*\n  - *Critique:* Projective tests suffer from low inter-rater reliability and questionable predictive validity.\n\n### In Closing: Possibilities and Limits of Personality Tests\nStandardized objective inventories provide dependable behavioral predictions; projective instruments remain clinically controversial."
        },
        {
          id: "quiz_psych_14",
          type: "quiz",
          title: "🧠 Chapter 14 Checkpoint: Personality Theories & The Big Five",
          completed: false,
          questions: [
            {
              question: "According to Sigmund Freud, which structural component of personality functions as the rational executive operating on the Reality Principle?",
              options: [
                "Id",
                "Ego",
                "Superego",
                "Archetype"
              ],
              correct: 1,
              explanation: "The Ego operates on the reality principle, mediating between the instinctual demands of the Id, the moral constraints of the Superego, and the external world."
            },
            {
              question: "A person who is highly organized, punctual, dependable, and self-disciplined scores high on which Big Five dimension?",
              options: [
                "Extraversion",
                "Agreeableness",
                "Conscientiousness",
                "Openness"
              ],
              correct: 2,
              explanation: "Conscientiousness reflects self-discipline, planfulness, responsibility, and persistence toward long-term goals."
            },
            {
              question: "A defense mechanism where someone redirects unacceptable aggressive impulses into productive, socially approved pursuits (like vigorous athletics) is called:",
              options: [
                "Projection",
                "Sublimation",
                "Reaction formation",
                "Displacement"
              ],
              correct: 1,
              explanation: "Sublimation is the transformation of unacceptable instinctual impulses into socially valued, productive cultural or artistic achievements."
            },
            {
              question: "Why do psychometricians criticize projective instruments like the Rorschach Inkblot Test?",
              options: [
                "They take too few seconds to administer",
                "They demonstrate low inter-rater reliability and questionable predictive validity",
                "They are only valid for children under age 5",
                "They rely entirely on multiple-choice computers"
              ],
              correct: 1,
              explanation: "Projective tests are frequently criticized for subjective scoring, low test-retest reliability, and poor predictive validity compared to standardized objective inventories like the MMPI."
            }
          ]
        }
      ]
    },
    {
      id: "sec_psych_15",
      title: "Chapter 15: Abnormal Psychology: Disorders and Treatment",
      description: "Module 15.1: Overview | Module 15.2: Anxiety | Module 15.3: Substances | Module 15.4: Mood & Schizophrenia | Module 15.5: Treatment",
      activities: [
        {
          id: "act_psych_15_1",
          type: "page",
          title: "Module 15.1: An Overview of Abnormal Behavior",
          completed: false,
          content: "### Criteria for Abnormality\n\n- **The 4 D's:** Deviance, Distress, Dysfunction, Danger.\n- **Diagnostic and Statistical Manual of Mental Disorders (DSM-5):** Standardized nosology outlining explicit diagnostic criteria, symptom duration thresholds, and differential exclusions.\n- **Biopsychosocial Model:** Integrates biological predispositions, cognitive styles, and sociocultural stressors (*Diathesis-Stress Model*).\n\n### In Closing: Is Anyone Normal?\nMental health exists on a continuum rather than an absolute binary division."
        },
        {
          id: "act_psych_15_2",
          type: "page",
          title: "Module 15.2: Anxiety Disorders and OCD",
          completed: false,
          content: "### Anxiety and Compulsive Disorders\n\n- **Generalized Anxiety Disorder (GAD):** Chronic, diffuse, pervasive worry for at least 6 months.\n- **Panic Disorder:** Recurrent unexpected panic attacks accompanied by agoraphobia (fear of inescapable places).\n- **Specific Phobia:** Irrational, persistent fear of a specific object or situation that prompts active avoidance.\n- **Obsessive-Compulsive Disorder (OCD):**\n  - *Obsessions:* Intrusive, distressing recurrent thoughts or impulses.\n  - *Compulsions:* Repetitive ritualistic behaviors performed to alleviate the anxiety provoked by obsessions.\n- **PTSD:** Intrusive trauma memories, hyperarousal, and emotional numbing following severe trauma.\n\n### In Closing: Emotions and Avoidance\nAvoidant behaviors maintain anxiety disorders through negative reinforcement."
        },
        {
          id: "act_psych_15_3",
          type: "page",
          title: "Module 15.3: Substance-Use Disorders",
          completed: false,
          content: "### Neurobiology of Addiction\n\n- **Tolerance:** Reduced responsiveness requiring progressively larger doses.\n- **Withdrawal:** Aversive physiological and psychological symptoms upon substance cessation.\n- **Neural Pathway:** Addictive substances hyperactivate the mesolimbic dopamine pathway from the ventral tegmental area (VTA) to the nucleus accumbens.\n\n### In Closing: Substances, the Individual, and Society\nAddiction involves neurobiological hijacking of natural reward pathways compounded by social vulnerabilities."
        },
        {
          id: "act_psych_15_4",
          type: "page",
          title: "Module 15.4: Mood Disorders, Schizophrenia, and Autism",
          completed: false,
          content: "### Severe Psychological Disorders\n\n- **Major Depressive Disorder (MDD):** Depressed mood, anhedonia (loss of pleasure), sleep and appetite disturbances, feelings of worthlessness, fatigue lasting $\\ge 2$ weeks. Aaron Beck's cognitive triad and Martin Seligman's learned helplessness.\n- **Bipolar Disorder:** Alternating episodes of depression and mania (grandiosity, decreased sleep need, flight of ideas, risky behavior).\n- **Schizophrenia:**\n  - *Positive Symptoms:* Delusions (grandeur, persecution), hallucinations (auditory), disorganized speech.\n  - *Negative Symptoms:* Flat affect, avolition, social withdrawal, poverty of speech.\n  - *Biological Mechanisms:* Dopamine dysregulation, enlarged ventricles, genetic heritability (~50% in identical twins).\n- **Autism Spectrum Disorder:** Persistent deficits in social communication combined with restricted, repetitive patterns of behavior.\n\n### In Closing: Disabling Psychological Disorders\nSevere psychiatric illnesses involve measurable neurochemical and structural brain anomalies interacting with environmental triggers."
        },
        {
          id: "act_psych_15_5",
          type: "page",
          title: "Module 15.5: Treatment of Mental Illness",
          completed: false,
          content: "### Psychotherapeutic and Biomedical Modalities\n\n1. **Cognitive-Behavioral Therapy (CBT):** Highly empirical; identifies maladaptive automatic thoughts (*cognitive restructuring*) and pairs it with behavioral exposure (systematic desensitization for phobias).\n2. **Psychodynamic Psychotherapy:** Explores unresolved childhood conflicts, defense mechanisms, and transference.\n3. **Humanistic Therapy (Carl Rogers):** Client-centered therapy utilizing empathy, active listening, and unconditional positive regard.\n4. **Biomedical Treatments:**\n   - *SSRIs:* Selectively block serotonin reuptake (used for depression and anxiety).\n   - *Antipsychotics (Neuroleptics):* Dopamine receptor antagonists for schizophrenia.\n   - *Mood Stabilizers (Lithium):* Standard treatment for bipolar disorder.\n   - *Electroconvulsive Therapy (ECT):* Highly effective for severe treatment-resistant depression.\n\n### In Closing: The Science and Politics of Mental Illness\nCombining cognitive-behavioral therapy with targeted pharmacotherapy often provides optimal long-term clinical recovery."
        },
        {
          id: "quiz_psych_15",
          type: "quiz",
          title: "🧠 Chapter 15 Checkpoint: Clinical Psychology & Treatments",
          completed: false,
          questions: [
            {
              question: "In Obsessive-Compulsive Disorder (OCD), what is the functional difference between an obsession and a compulsion?",
              options: [
                "Obsessions are behaviors; compulsions are thoughts",
                "Obsessions are intrusive, distressing thoughts; compulsions are repetitive behaviors enacted to alleviate anxiety",
                "Obsessions occur only during sleep; compulsions occur while awake",
                "There is no difference; they are identical psychiatric terms"
              ],
              correct: 1,
              explanation: "Obsessions are repetitive, intrusive thoughts that generate profound anxiety, while compulsions are ritualized behaviors performed to neutralize that distress."
            },
            {
              question: "Which of the following is classified as a 'positive symptom' of schizophrenia?",
              options: [
                "Flat affect (lack of emotional expression)",
                "Auditory hallucinations",
                "Avolition (inability to initiate goal-directed action)",
                "Poverty of speech (alogia)"
              ],
              correct: 1,
              explanation: "Positive symptoms are pathological additions to normal mental functioning, such as hallucinations and delusions, whereas negative symptoms involve behavioral deficits."
            },
            {
              question: "Cognitive-Behavioral Therapy (CBT) primarily operates by helping clients:",
              options: [
                "Recover repressed childhood memories through free association",
                "Identify and challenge irrational, distorted thought patterns while modifying maladaptive behaviors",
                "Undergo mandatory electroconvulsive therapy",
                "Analyze dreams to identify manifest and latent content"
              ],
              correct: 1,
              explanation: "CBT focuses on recognizing automatic negative thoughts (cognitive restructuring) and modifying behavioral habits through planned interventions and exposure."
            },
            {
              question: "Which class of antidepressant medication works by inhibiting the reabsorption of serotonin into the presynaptic neuron, leaving more serotonin in the synapse?",
              options: [
                "Selective Serotonin Reuptake Inhibitors (SSRIs)",
                "Benzodiazepines",
                "Dopamine antagonists",
                "Barbiturates"
              ],
              correct: 0,
              explanation: "SSRIs (like fluoxetine or sertraline) block the reuptake transporter for serotonin, prolonging its action in the synaptic cleft."
            }
          ]
        }
      ]
    }
  ]
};

// Update database with the expanded PSYCH-151 course
const existingIdx = db.courses.findIndex(c => c.code === 'PSYCH-151' || c.id === 'course_psych151');
if (existingIdx >= 0) {
  db.courses[existingIdx] = psychCourse;
} else {
  db.courses.unshift(psychCourse);
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully generated complete PSYCH151 course!');
console.log('Total chapters & sections:', psychCourse.sections.length);
let totalActs = 0;
let totalQuizzes = 0;
psychCourse.sections.forEach(s => {
  totalActs += s.activities.length;
  s.activities.forEach(a => { if (a.type === 'quiz') totalQuizzes++; });
});
console.log('Total activities:', totalActs);
console.log('Total checkpoint quizzes:', totalQuizzes);
