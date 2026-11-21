const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const psychCourse = {
  id: "course_psych151",
  code: "PSYCH-151",
  title: "PSYCH151: Introduction to Psychology",
  category: "Social Sciences",
  description: "A comprehensive introduction to the scientific study of mind, brain, and behavior. Covers biological foundations, cognition, development, learning, personality, and psychological disorders using the official Kalat textbook.",
  image: "🧠",
  progress: 15,
  sections: [
    {
      id: "sec_psych_0",
      title: "Course Overview & Textbook",
      description: "Access the complete course textbook and syllabus.",
      activities: [
        {
          id: "act_psych_ebook",
          type: "ebook",
          title: "📖 Full Course Textbook: Introduction to Psychology (PDF)",
          completed: true,
          content: "Access the full 15-chapter eBook for PSYCH151: Introduction to Psychology (James W. Kalat, Cengage).",
          fileUrl: "/ebooks/ebook-introduction-to-psychology.pdf"
        },
        {
          id: "act_psych_syllabus",
          type: "page",
          title: "Syllabus & Course Information",
          completed: true,
          content: "Welcome to PSYCH151: Introduction to Psychology!\n\nInstructor: Admin\nStudent: Elizabeth\nTextbook: Introduction to Psychology by James W. Kalat\n\nCourse Description:\nThis course explores the biological, cognitive, developmental, and social dimensions of human behavior. You will study foundational theories, historical evolutions, scientific methodologies, neurological processes, sensory systems, learning mechanisms, memory models, cognitive architectures, intelligence theories, developmental stages, social dynamics, and psychological disorders.\n\nGrading Criteria:\n- Module Readings & Check-ins: 30%\n- Assignments & Critical Analyses: 50%\n- Final Synthesis Project: 20%"
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
          content: "### Major Subfields and Specializations in Psychology\n\nPsychology is the systematic, scientific study of behavior and mental processes. Key disciplines include:\n\n1. **Clinical Psychology:** Assessment, diagnosis, and treatment of individuals with psychological disorders.\n2. **Counseling Psychology:** Assisting individuals with everyday personal, educational, and vocational adjustment challenges.\n3. **Cognitive Psychology:** Investigating internal mental processes such as memory, perception, language, reasoning, and decision-making.\n4. **Developmental Psychology:** Tracking cognitive, physical, emotional, and social changes across the entire lifespan.\n5. **Biological Psychology (Behavioral Neuroscience):** Examining how brain chemistry, neural pathways, genetics, and hormones determine behavior.\n6. **Forensic & Industrial-Organizational Psychology:** Applying psychological principles to legal questions and workplace efficiency.\n\n### Foundational Philosophical Questions\n- **Free Will vs. Determinism:** Is every human action caused by identifiable antecedent factors, or do individuals make independent choices?\n- **The Mind-Brain Problem:** Dualism (mind and brain are distinct entities) versus Monism (conscious experience is inseparable from neural activity).\n- **Nature vs. Nurture:** How genetic inheritance and environmental experiences interact to shape behavioral traits."
        },
        {
          id: "act_psych_1_2",
          type: "page",
          title: "Module 1.2: Psychology Then and Now",
          completed: true,
          content: "### Historical Roots of Modern Psychology\n\n- **Wilhelm Wundt (1879):** Established the first formal psychology laboratory in Leipzig, Germany. Emphasized *introspection* to analyze the fundamental elements of conscious sensation.\n- **Edward Titchener & Structuralism:** Attempted to categorize mental structures into basic sensations and feelings.\n- **William James & Functionalism:** Influenced by Charles Darwin, James emphasized how mental processes function to help organisms adapt and survive in their environments.\n- **The Rise of Behaviorism (Watson, Skinner):** Rejected introspection; insisted psychology must focus solely on observable, measurable behavior.\n- **The Cognitive Revolution (1960s-Present):** Revived the study of internal information processing, memory, and cognitive architectures supported by neuroscience."
        },
        {
          id: "act_psych_1_assign",
          type: "assignment",
          title: "Assignment 1: Structuralism vs. Functionalism Analysis",
          dueDate: "2026-11-25",
          completed: true,
          instructions: "Compare and contrast Wundt's structuralism with William James's functionalism. How does modern cognitive neuroscience bridge these two historical perspectives?",
          submission: {
            submitted: true,
            text: "Structuralism focused on breaking down conscious experience into its basic sensory components using introspection, whereas William James's functionalism focused on why mental processes exist and how they help organisms adapt to their environment. Modern cognitive neuroscience bridges both by mapping specific neural structures while analyzing their evolutionary and adaptive functions.",
            submittedDate: "2026-11-19",
            grade: "100 / 100 (A)",
            feedback: "Excellent analysis, Elizabeth. You clearly highlighted the transition from elemental sensation to adaptive function.",
            feedbackDate: "2026-11-19",
            gradedBy: "Admin"
          }
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
          content: "### Principles of Scientific Skepticism\n\n- **Hypotheses and Theories:** A theory is an integrated set of principles explaining observations; a hypothesis is a testable prediction derived from a theory.\n- **Falsifiability:** For a hypothesis to be scientific, there must be potential observable evidence that could prove it false.\n- **Principle of Parsimony (Occam's Razor):** When multiple explanations account for data, scientists favor the simplest explanation with the fewest unsupported assumptions.\n- **Replicability:** Scientific findings must be reproducible under identical conditions by independent investigators."
        },
        {
          id: "act_psych_2_2",
          type: "page",
          title: "Module 2.2: Conducting Psychological Research",
          completed: false,
          content: "### Research Methodologies in Psychology\n\n1. **Descriptive Methods:**\n   - *Naturalistic Observation:* Watching behavior in real-world contexts without intervention.\n   - *Case Studies:* In-depth examinations of a single individual or unique condition (e.g., Phineas Gage, H.M.).\n   - *Surveys:* Standardized questionnaires assessing attitudes or behaviors in large representative samples.\n\n2. **Correlational Research:**\n   - Quantifies the relationship between two variables using the correlation coefficient (*r*), ranging from -1.00 to +1.00.\n   - **Critical rule:** Correlation does not demonstrate causation (potential third-variable confounders).\n\n3. **Experimental Research (Establishing Causation):**\n   - *Independent Variable (IV):* The factor manipulated by the experimenter.\n   - *Dependent Variable (DV):* The measured outcome expected to change in response to the IV.\n   - *Random Assignment:* Ensures equal probability of participant placement in experimental or control groups.\n   - *Double-Blind Designs:* Neither participants nor experimenters know who received the treatment to prevent placebo effects and observer bias."
        },
        {
          id: "act_psych_2_assign",
          type: "assignment",
          title: "Assignment 2: Experimental Design & Confounding Variables",
          dueDate: "2026-12-02",
          completed: false,
          instructions: "Propose an experiment testing whether 8 hours of sleep improves memory retention compared to 4 hours of sleep. Identify your IV, DV, control group, experimental group, and how you will control for confounding variables.",
          submission: null
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
          content: "### Neural Structure and Communication\n\n- **Neuron Anatomy:** Dendrites receive chemical inputs; Soma integrates signals; Axon conducts electrical impulses; Myelin Sheath insulates the axon and accelerates transmission (saltatory conduction); Axon Terminals release neurotransmitters.\n- **Resting Membrane Potential:** -70 mV, maintained by the sodium-potassium pump (pumping 3 Na+ out for every 2 K+ in).\n- **Action Potential:** Triggered when stimulation crosses the threshold of excitation (~ -55 mV). Voltage-gated Na+ channels open, depolarizing the cell to +30 mV. Follows the **All-or-None Law**.\n- **Synaptic Transmission:** Neurotransmitters diffuse across the synaptic cleft to bind with postsynaptic receptor sites."
        },
        {
          id: "act_psych_3_2",
          type: "page",
          title: "Module 3.2: Drugs and Neurotransmitters",
          completed: false,
          content: "### Major Neurotransmitters\n\n- **Dopamine:** Reward, voluntary motor control, reinforcement learning (implicated in Parkinson's disease and schizophrenia).\n- **Serotonin:** Mood regulation, sleep, appetite, impulse control (targeted by SSRIs).\n- **Acetylcholine (ACh):** Muscle contraction, memory formation, attention (depleted in Alzheimer's disease).\n- **GABA:** Primary inhibitory neurotransmitter; prevents over-excitation.\n- **Glutamate:** Primary excitatory neurotransmitter; crucial for long-term potentiation.\n\n### Pharmacological Classifications\n- **Agonists:** Increase or mimic the activity of a neurotransmitter.\n- **Antagonists:** Block or diminish the activity of a neurotransmitter."
        },
        {
          id: "act_psych_3_3",
          type: "page",
          title: "Module 3.3: Brain and Behavior",
          completed: false,
          content: "### Lobes of the Cerebral Cortex\n\n1. **Occipital Lobe:** Primary visual processing.\n2. **Temporal Lobe:** Auditory processing, facial recognition, and language comprehension (*Wernicke's area*).\n3. **Parietal Lobe:** Somatosensory processing (touch, temperature, proprioception) and spatial awareness.\n4. **Frontal Lobe:** Motor control (*Primary motor cortex*), speech production (*Broca's area*), executive function, emotional regulation, and working memory.\n\n### Key Subcortical Systems\n- **Hippocampus:** Consolidation of declarative memory.\n- **Amygdala:** Processing emotional valence, particularly fear and threat responses.\n- **Thalamus:** Sensory relay station for all senses except olfaction.\n- **Hypothalamus:** Regulates autonomic functions (the 4 F's: fighting, fleeing, feeding, reproduction)."
        },
        {
          id: "act_psych_3_4",
          type: "page",
          title: "Module 3.4: Genetics and Evolutionary Psychology",
          completed: false,
          content: "### Genetic Mechanisms and Epigenetics\n\n- **Heritability:** Statistical estimate of the proportion of variance in a trait within a population attributable to genetic differences.\n- **Epigenetics:** Changes in gene expression resulting from environmental experiences without alterations in the underlying DNA nucleotide sequence."
        }
      ]
    },
    {
      id: "sec_psych_4",
      title: "Chapter 4: Sensation and Perception",
      description: "Module 4.1: Vision | Module 4.2: Nonvisual Senses | Module 4.3: Interpretation",
      activities: [
        {
          id: "act_psych_4_1",
          type: "page",
          title: "Module 4.1: Vision",
          completed: false,
          content: "### The Visual Processing Pathway\n\n- Light enters via the cornea, passes through the pupil, is focused by the lens onto the retina.\n- **Photoreceptors:**\n  - *Rods:* ~120 million; highly sensitive to dim light, located in the periphery, no color detection.\n  - *Cones:* ~6 million; concentrated in the *fovea*; responsible for color vision and high visual acuity.\n- **Color Vision Theories:**\n  - *Trichromatic Theory:* Three types of cones sensitive to short (blue), medium (green), and long (red) wavelengths.\n  - *Opponent-Process Theory:* Visual neurons fire in opposing pairs: red-green, blue-yellow, black-white (explains negative afterimages)."
        },
        {
          id: "act_psych_4_2",
          type: "page",
          title: "Module 4.2 & 4.3: Sensory Systems and Gestalt Interpretation",
          completed: false,
          content: "### Audition and Somatosensation\n\n- Sound waves cause vibrations of the eardrum, ossicles, and fluid inside the cochlea, bending hair cells on the basilar membrane.\n- Gate Control Theory of Pain: Spinal cord contains a neurological gate that blocks or allows pain signals to reach the brain.\n\n### Gestalt Principles of Perceptual Organization\n- **Proximity:** Grouping objects that are close together.\n- **Similarity:** Grouping objects with similar shape, color, or texture.\n- **Continuity:** Perceiving continuous, smooth paths rather than jagged lines.\n- **Closure:** Automatically filling in gaps to perceive a complete whole."
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
          title: "Module 5.1: Jean Piaget's Cognitive Stages",
          completed: false,
          content: "### Piaget's Four Stages of Cognitive Growth\n\n1. **Sensorimotor Stage (0-2 years):** Learning through sensory contact and motor activity. Development of *Object Permanence*.\n2. **Preoperational Stage (2-7 years):** Symbolic thinking; characterized by *egocentrism* (inability to adopt another's viewpoint) and lack of *conservation*.\n3. **Concrete Operational Stage (7-11 years):** Understanding conservation, reversibility, and logical classification of tangible objects.\n4. **Formal Operational Stage (12+ years):** Abstract reasoning, hypothetical problem-solving, and systematic hypothesis testing.\n\n### Vygotsky's Sociocultural View\n- Emphasizes the **Zone of Proximal Development (ZPD)** and instructional **scaffolding** provided by mentors."
        },
        {
          id: "act_psych_5_2",
          type: "page",
          title: "Module 5.2: Attachment and Erikson's Psychosocial Stages",
          completed: false,
          content: "### Attachment Styles (Mary Ainsworth)\n- **Secure:** Uses caregiver as a secure base; distressed on separation, comforted on reunion.\n- **Insecure-Avoidant:** Shows minimal distress on departure and ignores caregiver on reunion.\n- **Insecure-Anxious/Ambivalent:** Highly distressed; shows anger and resistance upon reunion.\n\n### Erikson's Eight Lifespan Stages\n1. Trust vs. Mistrust (Infancy)\n2. Autonomy vs. Shame/Doubt (Toddlerhood)\n3. Initiative vs. Guilt (Early Childhood)\n4. Industry vs. Inferiority (School Age)\n5. Identity vs. Role Confusion (Adolescence)\n6. Intimacy vs. Isolation (Young Adulthood)\n7. Generativity vs. Stagnation (Middle Adulthood)\n8. Integrity vs. Despair (Late Adulthood)"
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
          title: "Module 6.1: Classical Conditioning (Pavlov)",
          completed: false,
          content: "### Classical Conditioning Paradigm\n\n- **Unconditioned Stimulus (UCS):** Automatically elicits a natural response (e.g., food).\n- **Unconditioned Response (UCR):** The unlearned response to the UCS (e.g., salivation).\n- **Conditioned Stimulus (CS):** A previously neutral stimulus paired with the UCS (e.g., bell).\n- **Conditioned Response (CR):** Learned response to the CS alone.\n- **Key Phenomena:** Extinction (diminishing CR when CS occurs without UCS), Spontaneous Recovery, Stimulus Generalization, and Stimulus Discrimination."
        },
        {
          id: "act_psych_6_2",
          type: "page",
          title: "Module 6.2: Operant Conditioning (Skinner)",
          completed: false,
          content: "### Operant Consequences\n\n- **Positive Reinforcement:** Presenting a desirable stimulus to increase behavior.\n- **Negative Reinforcement:** Removing an aversive stimulus to increase behavior.\n- **Positive Punishment:** Presenting an aversive stimulus to decrease behavior.\n- **Negative Punishment:** Removing a desirable stimulus to decrease behavior.\n\n### Schedules of Reinforcement\n- **Fixed-Ratio (FR):** Reward after a set number of responses.\n- **Variable-Ratio (VR):** Reward after an unpredictable number of responses (highest response rate, resistant to extinction, e.g., slot machines).\n- **Fixed-Interval (FI):** Reward after a set amount of elapsed time.\n- **Variable-Interval (VI):** Reward after unpredictable intervals of time."
        }
      ]
    },
    {
      id: "sec_psych_7",
      title: "Chapter 7: Memory",
      description: "Module 7.1: Types of Memory | Module 7.2: Encoding | Module 7.3: Forgetting",
      activities: [
        {
          id: "act_psych_7_1",
          type: "page",
          title: "Module 7.1 & 7.2: Memory Systems and Encoding",
          completed: false,
          content: "### The Atkinson-Shiffrin Model\n\n1. **Sensory Memory:** Iconic (visual, <1 sec) and Echoic (auditory, 3-4 sec).\n2. **Short-Term / Working Memory:** Capacity of 7 ± 2 items (Miller), duration ~20-30 seconds without rehearsal. Baddeley model includes Phonological Loop, Visuospatial Sketchpad, and Central Executive.\n3. **Long-Term Memory:**\n   - *Explicit (Declarative):* Episodic (personal life events) and Semantic (general facts/knowledge).\n   - *Implicit (Nondeclarative):* Procedural skills (e.g., riding a bike), Classical Conditioning, Priming.\n\n### Encoding Optimization\n- **Levels of Processing:** Semantic/deep encoding produces far superior retention than shallow acoustic or visual encoding.\n- **Spacing Effect & Retrieval Practice:** Distributed practice consistently outperforms massed cramming."
        },
        {
          id: "act_psych_7_3",
          type: "page",
          title: "Module 7.3: Mechanisms of Forgetting",
          completed: false,
          content: "### Theories of Forgetting\n\n- **Proactive Interference:** Old memories interfere with the retrieval of newly acquired information.\n- **Retroactive Interference:** Newly learned material interferes with the retrieval of older information.\n- **Amnesia:**\n  - *Anterograde Amnesia:* Inability to form new declarative memories after damage to the hippocampus.\n  - *Retrograde Amnesia:* Loss of memories formed prior to brain trauma.\n- **Constructive Memory:** Memories are reconstructed rather than played back like video recordings (Elizabeth Loftus research on misinformation effects and false memories)."
        }
      ]
    },
    {
      id: "sec_psych_8",
      title: "Chapter 8: Cognition and Language",
      description: "Module 8.1: Attention | Module 8.2: Problem Solving | Module 8.3: Language",
      activities: [
        {
          id: "act_psych_8_1",
          type: "page",
          title: "Module 8.1 & 8.2: Problem Solving, Heuristics, and Biases",
          completed: false,
          content: "### Problem Solving Strategies\n- **Algorithm:** Step-by-step procedure guaranteed to find a correct solution if followed.\n- **Heuristic:** Cognitive shortcut or rule-of-thumb that speeds up decision making but does not guarantee accuracy.\n\n### Common Cognitive Biases\n- **Availability Heuristic:** Estimating the likelihood of events based on how readily examples come to mind.\n- **Representativeness Heuristic:** Judging probability based on how closely an instance matches a mental prototype.\n- **Confirmation Bias:** Selectively searching for and prioritizing information that confirms preexisting beliefs.\n- **Functional Fixedness:** Viewing objects only in terms of their customary use."
        },
        {
          id: "act_psych_8_3",
          type: "page",
          title: "Module 8.3: Structure and Development of Language",
          completed: false,
          content: "### Language Architecture\n- **Phonemes:** Smallest distinctive sound units in a spoken language.\n- **Morphemes:** Smallest units of meaning (words, prefixes, suffixes).\n- **Syntax:** Rules governing word order and grammatical sentence construction.\n\n### Neural Basis of Language\n- **Broca's Area (Frontal Lobe):** Motor speech production; damage causes expressive non-fluent aphasia.\n- **Wernicke's Area (Temporal Lobe):** Language comprehension; damage causes fluent but meaningless receptive aphasia."
        }
      ]
    },
    {
      id: "sec_psych_9",
      title: "Chapter 9: Intelligence",
      description: "Module 9.1: Intelligence Tests | Module 9.2: Evaluation and Cultural Issues",
      activities: [
        {
          id: "act_psych_9_1",
          type: "page",
          title: "Module 9.1 & 9.2: Psychometrics and Theories of Intelligence",
          completed: false,
          content: "### Major Theoretical Models\n- **Charles Spearman (General Intelligence 'g'):** Posited that a single general mental ability underlies all cognitive performance.\n- **Howard Gardner (Multiple Intelligences):** Identified eight distinct modular intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic).\n- **Robert Sternberg (Triarchic Theory):** Analytical, Creative, and Practical intelligence.\n\n### Evaluating Psychological Tests\n- **Reliability:** Consistency of test scores across repeated administrations (test-retest reliability).\n- **Validity:** The extent to which a test accurately measures what it claims to measure (predictive and construct validity).\n- **The Flynn Effect:** Steady historical rise in raw average intelligence test scores worldwide across generations."
        }
      ]
    },
    {
      id: "sec_psych_10",
      title: "Chapter 10: Consciousness",
      description: "Module 10.1: Conscious vs. Unconscious | Module 10.2: Sleep & Dreams | Module 10.3: Hypnosis",
      activities: [
        {
          id: "act_psych_10_1",
          type: "page",
          title: "Module 10.1 & 10.2: Circadian Rhythms and Sleep Architecture",
          completed: false,
          content: "### Circadian Rhythms\n- 24-hour physiological cycle governed by the **Suprachiasmatic Nucleus (SCN)** in the hypothalamus, regulating melatonin secretion by the pineal gland.\n\n### Stages of Sleep\n1. **NREM-1:** Transition from wakefulness; alpha to theta waves; hypnagogic jerks.\n2. **NREM-2:** Light sleep; characterized by **sleep spindles** and **K-complexes**.\n3. **NREM-3:** Deep, slow-wave sleep; dominant **delta waves**; essential for physical restoration.\n4. **REM (Rapid Eye Movement) Sleep:** Paradoxical sleep; high cerebral metabolic activity, rapid eye movements, muscle atonia (paralysis), and vivid narrative dreaming."
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
          title: "Module 11.1 & 11.2: Theories of Motivation and Biological Drives",
          completed: false,
          content: "### Frameworks of Motivation\n- **Drive-Reduction Theory:** Biological needs create unpleasant internal tension (drives) motivating behavior to restore homeostasis.\n- **Yerkes-Dodson Law:** Optimal performance occurs at moderate levels of physiological arousal.\n- **Intrinsic vs. Extrinsic Motivation:** Engaging in activity for inherent satisfaction versus tangible external rewards (risk of the *overjustification effect*).\n\n### Biological Regulation of Hunger\n- **Lateral Hypothalamus:** The hunger trigger (lesions lead to aphagia/starvation).\n- **Ventromedial Hypothalamus:** The satiety trigger (lesions lead to hyperphagia/overeating).\n- **Hormones:** Ghrelin stimulates hunger; Leptin and Insulin signal nutritional satiety."
        }
      ]
    },
    {
      id: "sec_psych_12",
      title: "Chapter 12: Emotions, Stress, and Health",
      description: "Module 12.1: Nature of Emotion | Module 12.2: Experience | Module 12.3: Stress & Health",
      activities: [
        {
          id: "act_psych_12_1",
          type: "page",
          title: "Module 12.1: Classic Theories of Emotion",
          completed: false,
          content: "### Major Theoretical Formulations\n1. **James-Lange Theory:** Physiological autonomic arousal precedes and causes the subjective experience of emotion (*'We feel sad because we cry'*).\n2. **Cannon-Bard Theory:** Physiological arousal and emotional experience occur simultaneously and independently via thalamic relays.\n3. **Schachter-Singer Two-Factor Theory:** Emotion is determined by physiological arousal combined with cognitive appraisal and contextual interpretation."
        },
        {
          id: "act_psych_12_3",
          type: "page",
          title: "Module 12.3: Stress Physiology and Coping",
          completed: false,
          content: "### General Adaptation Syndrome (Hans Selye)\n1. **Alarm Stage:** Acute sympathetic activation and adrenaline release.\n2. **Resistance Stage:** Sustained cortisol secretion by the adrenal cortex via the HPA axis.\n3. **Exhaustion Stage:** Depletion of biological resources resulting in immune suppression and vulnerability to illness.\n\n### Coping Paradigms\n- **Problem-Focused Coping:** Directly altering or removing the stressor.\n- **Emotion-Focused Coping:** Regulating internal emotional reactions to unchangeable circumstances."
        }
      ]
    },
    {
      id: "sec_psych_13",
      title: "Chapter 13: Social Behavior",
      description: "Module 13.1: Prosocial Behavior | Module 13.2: Perception | Module 13.3: Persuasion | Module 13.5: Influence",
      activities: [
        {
          id: "act_psych_13_1",
          type: "page",
          title: "Module 13.1 & 13.2: Social Perception and Attribution",
          completed: false,
          content: "### Attribution Theory\n- **Fundamental Attribution Error (FAE):** Tendency to explain others' behavior using internal dispositional factors while underestimating situational constraints.\n- **Self-Serving Bias:** Attributing our personal successes to internal dispositions and our failures to external environmental factors.\n\n### Prosocial Behavior & Bystander Effect\n- Presence of multiple bystanders significantly reduces the likelihood of intervention due to **diffusion of responsibility** and **pluralistic ignorance**."
        },
        {
          id: "act_psych_13_5",
          type: "page",
          title: "Module 13.5: Conformity, Obedience, and Group Dynamics",
          completed: false,
          content: "### Landmark Social Experiments\n- **Solomon Asch (Conformity):** Demonstrated that individuals will conform to an obviously incorrect unanimous group consensus on line-judgment tasks.\n- **Stanley Milgram (Obedience):** Over 65% of normal participants administered maximum 450-volt shocks under the explicit commands of a perceived authority figure.\n- **Groupthink:** Flawed group decision-making caused by prioritizing consensus over critical assessment."
        }
      ]
    },
    {
      id: "sec_psych_14",
      title: "Chapter 14: Personality",
      description: "Module 14.1: Theories | Module 14.2: Traits | Module 14.3: Assessment",
      activities: [
        {
          id: "act_psych_14_1",
          type: "page",
          title: "Module 14.1 & 14.2: Psychodynamic & Trait Theories",
          completed: false,
          content: "### Freud's Structural Model\n- **Id:** Primitive, unconscious, driven by the *Pleasure Principle*.\n- **Ego:** Rational executive mediator, operates via the *Reality Principle*.\n- **Superego:** Internalized moral conscience and societal ideals.\n- **Defense Mechanisms:** Repression, Projection, Rationalization, Displacement, Sublimation, Reaction Formation.\n\n### The Five-Factor Model (The Big Five / OCEAN)\n1. **Openness:** Imagination, intellectual curiosity, aesthetic sensitivity.\n2. **Conscientiousness:** Organization, goal-directed behavior, discipline.\n3. **Extraversion:** Sociability, positive emotionality, assertiveness.\n4. **Agreeableness:** Compassion, trust, cooperation.\n5. **Neuroticism:** Emotional instability, anxiety, vulnerability to stress."
        }
      ]
    },
    {
      id: "sec_psych_15",
      title: "Chapter 15: Abnormal Psychology: Disorders and Treatment",
      description: "Module 15.1: Abnormal Behavior | Module 15.2: Anxiety | Module 15.4: Mood & Schizophrenia | Module 15.5: Treatment",
      activities: [
        {
          id: "act_psych_15_1",
          type: "page",
          title: "Module 15.1 & 15.2: Anxiety, OCD, and Mood Disorders",
          completed: false,
          content: "### Criteria for Abnormality (The 4 D's)\n- Deviance, Distress, Dysfunction, Danger. Evaluated via the DSM-5.\n\n### Anxiety & Mood Disorders\n- **Generalized Anxiety Disorder (GAD):** Chronic, excessive, uncontrollable worry.\n- **Panic Disorder:** Recurrent unexpected panic attacks accompanied by agoraphobia.\n- **Obsessive-Compulsive Disorder (OCD):** Intrusive recurrent thoughts (obsessions) that drive repetitive ritualistic behaviors (compulsions).\n- **Major Depressive Disorder (MDD):** Persistent depressed mood, anhedonia, cognitive deficits, and altered vegetative signs.\n- **Bipolar Disorder:** Fluctuations between severe depressive episodes and manic states."
        },
        {
          id: "act_psych_15_4",
          type: "page",
          title: "Module 15.4 & 15.5: Schizophrenia and Therapeutic Treatments",
          completed: false,
          content: "### Schizophrenia Spectrum\n- **Positive Symptoms:** Hallucinations (mostly auditory), delusions (persecutory, grandiose), disorganized thought and speech.\n- **Negative Symptoms:** Flat affect, avolition, alogia, social withdrawal.\n- **Etiology:** Genetic vulnerability, excessive dopamine receptor activity, enlarged ventricles.\n\n### Major Therapeutic Modalities\n- **Cognitive-Behavioral Therapy (CBT):** Identifying and altering maladaptive cognitive distortions combined with behavioral exposure.\n- **Pharmacotherapy:** SSRIs for depression/anxiety; Antipsychotics (dopamine antagonists) for schizophrenia; Mood stabilizers (Lithium) for bipolar disorder."
        },
        {
          id: "act_psych_15_assign",
          type: "assignment",
          title: "Final Case Analysis: Assessment & Treatment Formulation",
          dueDate: "2026-12-15",
          completed: false,
          instructions: "Analyze a clinical vignette involving anxiety and depressive symptoms. Apply the biopsychosocial model to formulate a diagnosis and outline an evidence-based CBT and pharmacological treatment strategy.",
          submission: null
        }
      ]
    }
  ]
};

// Add or update PSYCH-151 course in database
const existingIdx = db.courses.findIndex(c => c.code === 'PSYCH-151' || c.id === 'course_psych151');
if (existingIdx >= 0) {
  db.courses[existingIdx] = psychCourse;
} else {
  // Put PSYCH-151 at the very top of courses!
  db.courses.unshift(psychCourse);
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
console.log('Successfully updated database with PSYCH151: Introduction to Psychology!');
console.log('Total sections in PSYCH151:', psychCourse.sections.length);
