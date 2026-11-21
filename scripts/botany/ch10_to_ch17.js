module.exports = [
  // =========================================================================
  // CHAPTER 10: MINERAL NUTRITION AND TRANSPORT IN PLANTS (18 Questions)
  // =========================================================================
  {
    id: "sec_bot_10",
    title: "Chapter 10: Mineral Nutrition and Transport in Plants",
    description: "Macronutrients, micronutrients, soil chemistry, water potential, cohesion-tension theory of xylem transport, and pressure-flow phloem translocation.",
    activities: [
      {
        id: "act_bot_10_lesson",
        type: "page",
        title: "Module 10.1: Fluid Dynamics & Nutrient Transport in Plants",
        completed: true,
        content: `### 1. Essential Plant Nutrients
Plants require 17 essential chemical elements to complete their life cycle:
- **Macronutrients (needed in large amounts, >0.1% dry weight):** Carbon, Hydrogen, Oxygen (from $CO_2$ and $H_2O$); Nitrogen (amino acids, nucleotides, chlorophyll); Potassium (osmotic regulation, stomatal turgor, enzyme activator); Calcium (cell wall pectin cross-linking, membrane stability, second messenger); Magnesium (central atom of the chlorophyll porphyrin ring, enzyme cofactor); Phosphorus (nucleic acids, ATP, phospholipids); Sulfur (methionine, cysteine amino acids).
- **Micronutrients (needed in trace quantities):** Iron (chlorophyll synthesis, electron transport cytochromes), Manganese, Boron, Zinc, Copper, Chlorine, Molybdenum, Nickel.

### 2. Soil Chemistry and Cation Exchange
Soil particles (clay and humus) carry net negative electrostatic surface charges, attracting positively charged mineral cations ($K^+, Ca^{2+}, Mg^{2+}$):
- **Cation Exchange:** Root epidermal cells pump protons ($H^+$) into the soil water and release $CO_2$ (forming carbonic acid). These protons displace bound nutrient cations from clay particles, releasing them into the soil solution for root absorption.
- **Anion Leaching:** Negatively charged nutrient anions ($NO_3^-, H_2PO_4^-, SO_4^{2-}$) are not bound by clay and readily wash out of the topsoil during heavy rains (leaching).

### 3. Water Potential ($\Psi$) and Transpirational Pull
Water moves passively from regions of **higher (less negative) water potential** to regions of **lower (more negative) water potential**:
$$\Psi = \Psi_s + \Psi_p$$
- **The Cohesion-Tension Theory of Xylem Sap Ascent:**
  1. Solar radiation drives **transpiration** (evaporation of water vapor from leaf mesophyll cell surfaces through open stomata into the drier atmosphere).
  2. Evaporation generates negative hydrostatic pressure (**tension**) at the air-water meniscus in mesophyll cell walls.
  3. Because water molecules are intensely **cohesive** (linked by hydrogen bonds) and **adhesive** (clinging to hydrophilic cellulose xylem walls), this negative tension pulls continuous unbroken water columns up the xylem from the roots to the canopy.
  4. Requires zero direct metabolic ATP expenditure by the plant.
  5. **Cavitation (Embolism):** If water columns break under extreme drought or freezing, air bubbles enter the conduit, blocking flow.

### 4. Phloem Translocation: The Pressure-Flow Hypothesis
Developed by Ernst Münch, explaining bulk flow of sucrose-rich phloem sap:
1. **Phloem Loading at the Source:** Mature photosynthetic leaves actively load sucrose into companion cells and sieve-tube elements using $H^+$/sucrose symporters, driven by proton-ATPase pumps.
2. **Osmotic Water Influx:** High sucrose accumulation drastically lowers solute potential ($\Psi_s$) inside the sieve tube, causing water to enter osmotically from adjacent xylem.
3. **Turgor Pressure Generation:** Influx of water creates high hydrostatic **turgor pressure** at the source end.
4. **Phloem Unloading at the Sink:** At actively growing tissues or storage sinks (roots, tubers, developing fruits), sucrose is actively or passively removed. Water follows osmotically back into the xylem, lowering turgor pressure.
5. **Bulk Flow:** The resulting turgor pressure gradient ($\Delta P$) drives rapid mass flow of sap from source to sink.`
      },
      {
        id: "quiz_bot_10",
        type: "quiz",
        title: "🌿 Chapter 10 Checkpoint: Plant Mineral Nutrition & Long-Distance Transport",
        completed: false,
        questions: [
          {
            question: "Which mineral element forms the central coordinating atom in the molecular structure of the chlorophyll porphyrin ring?",
            options: [
              "Iron (Fe)",
              "Magnesium (Mg)",
              "Calcium (Ca)",
              "Potassium (K)"
            ],
            correct: 1,
            explanation: "Magnesium ($Mg^{2+}$) is the central coordinating metallic cation in the chlorophyll molecule; deficiency causes severe interveinal chlorosis in older leaves."
          },
          {
            question: "Which plant macronutrient plays a dominant physiological role in regulating stomatal opening and closing through guard cell turgor flux?",
            options: [
              "Potassium (K)",
              "Nitrogen (N)",
              "Phosphorus (P)",
              "Sulfur (S)"
            ],
            correct: 0,
            explanation: "Potassium ($K^+$) is the primary osmoticum accumulated in guard cells to lower water potential and draw water osmotically to bow the stoma open."
          },
          {
            question: "How do plant roots absorb mineral cations (such as $K^+$ and $Ca^{2+}$) that are electrostatically bound to negatively charged soil clay particles?",
            options: [
              "Cation Exchange: roots exude protons ($H^+$) that displace the cations from clay surfaces into soil solution",
              "Roots engulf soil clay particles by endocytosis",
              "Roots heat the soil with microwaves to melt the clay",
              "Roots release pure chlorine gas"
            ],
            correct: 0,
            explanation: "Roots exude $H^+$ (via proton pumps and carbonic acid respiration), displacing bound mineral cations from negative clay micelles in a process termed cation exchange."
          },
          {
            question: "Why do negatively charged nutrient anions (such as nitrate, $NO_3^-$) leach out of agricultural soils much more readily than cations during heavy rains?",
            options: [
              "Anions are repelled by the negative surface charges of soil clay and humus particles, remaining unbound in soil solution",
              "Anions evaporate into gas instantly upon touching water",
              "Roots actively destroy all anions in the soil",
              "Clay particles destroy nitrate molecules on contact"
            ],
            correct: 0,
            explanation: "Because soil particles and humus carry negative charges, anions are not electrostatically bound and readily wash into groundwater (leaching)."
          },
          {
            question: "According to the Cohesion-Tension Theory, what is the primary physical driving force that pulls water up tall trees through the xylem?",
            options: [
              "Solar-driven transpirational evaporation from leaf cell surfaces generating negative tension",
              "High positive pressure pushed upward from root tips",
              "Active ATP pumping by dead xylem vessel elements",
              "Capillary suction from flower petals"
            ],
            correct: 0,
            explanation: "Solar transpiration evaporates water from mesophyll cell walls, creating negative pressure (tension) that pulls cohesive hydrogen-bonded water columns upward."
          },
          {
            question: "What prevents the unbroken water columns in xylem vessels from snapping apart under massive transpirational tension?",
            options: [
              "The cohesive hydrogen bonding between water molecules",
              "Rapid cellular respiration by vessel elements",
              "The presence of sucrose in xylem sap",
              "Suberin coatings inside xylem lumens"
            ],
            correct: 0,
            explanation: "Hydrogen bonding gives water high tensile strength (cohesion), allowing continuous columns to withstand tensions exceeding -2 to -3 MPa without breaking."
          },
          {
            question: "The formation of an air bubble within a xylem vessel element that breaks the continuous water column and halts conduction is called:",
            options: [
              "Cavitation (Embolism)",
              "Plasmolysis",
              "Guttation",
              "Girdling"
            ],
            correct: 0,
            explanation: "Cavitation occurs when excessive tension or freezing pulls dissolved gases out of solution, creating an air bubble (embolism) that breaks the conduit."
          },
          {
            question: "According to the Pressure-Flow Hypothesis, what creates the driving force for the bulk translocation of sugars through the phloem?",
            options: [
              "A hydrostatic turgor pressure gradient between the sugar source and the sugar sink",
              "Gravity pulling dense sugar down into the roots",
              "Transpirational suction pulling sap out through stomata",
              "Peristaltic muscle contractions of companion cells"
            ],
            correct: 0,
            explanation: "Active loading of sugar at the source draws water osmotically to generate high turgor; unloading at the sink relieves pressure, driving bulk flow along the pressure gradient."
          },
          {
            question: "In phloem transport, which of the following botanical organs functions as a 'Source' of carbohydrates during mid-summer?",
            options: [
              "A mature, fully expanded green photosynthetic leaf",
              "A newly developing root tip",
              "An expanding floral bud",
              "A developing green apple fruit"
            ],
            correct: 0,
            explanation: "A source is an organ that produces more sugar than it consumes, such as a mature photosynthetic leaf or a germinating storage tuber."
          },
          {
            question: "Which of the following functions as a 'Sink' for phloem translocation?",
            options: [
              "A developing storage tuber, growing root apical meristem, or ripening fruit",
              "A fully sunlit mature canopy leaf",
              "A dead heartwood ray",
              "A functional lenticel"
            ],
            correct: 0,
            explanation: "Sinks are organs that consume or store sugars, such as growing meristems, roots, developing seeds, and storage tubers."
          },
          {
            question: "How is sucrose loaded into companion cells and sieve-tube elements against a steep concentration gradient at the source?",
            options: [
              "Via secondary active transport utilizing a Proton/Sucrose Symporter driven by a proton pump",
              "Via passive simple diffusion across the cuticle",
              "Through nuclear pore complexes",
              "Via pinocytotic engulfment of starch grains"
            ],
            correct: 0,
            explanation: "Proton-ATPases pump $H^+$ into the apoplast; as protons flow back down their gradient, $H^+$/sucrose symporters co-transport sucrose into the phloem against its gradient."
          },
          {
            question: "Pure free water under standard atmospheric conditions and room temperature has an assigned water potential ($\Psi$) of:",
            options: [
              "0.0 Megapascals (MPa)",
              "+10.0 MPa",
              "-100.0 MPa",
              "+1.0 atmospheres"
            ],
            correct: 0,
            explanation: "By convention, pure liquid water at standard temperature and pressure has a water potential of exactly zero ($\Psi = 0$ MPa); dissolving solutes lowers $\Psi$ below zero."
          },
          {
            question: "Adding solute particles (such as sugar or mineral salts) to water has what effect on its Solute Potential ($\Psi_s$)?",
            options: [
              "It lowers $\Psi_s$, making it more negative and reducing free water energy",
              "It increases $\Psi_s$ to positive infinity",
              "It has zero effect on water potential",
              "It converts the water into hydrogen gas"
            ],
            correct: 0,
            explanation: "Solutes bind water molecules, reducing their free energy and entropy; solute potential ($\Psi_s$) is always negative in cellular solutions."
          },
          {
            question: "Deficiency of which primary macronutrient results in general stunted growth, spindly stems, and yellowing of older leaves (chlorosis)?",
            options: [
              "Nitrogen",
              "Boron",
              "Manganese",
              "Copper"
            ],
            correct: 0,
            explanation: "Nitrogen is required for amino acids, proteins, and chlorophyll; because it is mobile, plants scavenge it from older leaves to feed young growth, causing older leaf chlorosis."
          },
          {
            question: "Deficiency of phosphorus in plants is characteristically indicated on leaves by:",
            options: [
              "Dark purplish or bronze discoloration along veins and leaves, along with stunted root development",
              "Bright yellow polka dots",
              "Instant shedding of all bark",
              "Rapid overgrowth of flowers"
            ],
            correct: 0,
            explanation: "Phosphorus deficiency impairs ATP and nucleic acid synthesis, triggering anthocyanin accumulation that produces dark green to purplish leaf discoloration."
          },
          {
            question: "What microscopic diagnostic technique allows agricultural scientists to analyze the exact elemental composition of phloem sap without disrupting the plant?",
            options: [
              "Using feeding aphids to puncture sieve tubes and analyzing the exuding droplets from severed stylets",
              "Crushing the entire tree trunk with a hydraulic press",
              "Applying radioactive uranium to the foliage",
              "Boiling the soil in concentrated hydrochloric acid"
            ],
            correct: 0,
            explanation: "Aphids insert precise piercing stylets directly into sieve-tube elements without triggering wound responses; severing the aphid leaves an exuding stylet tapping pure sap."
          },
          {
            question: "Why does excessive chemical fertilizer application to garden soil cause plants to wilt and 'burn'?",
            options: [
              "Excessive fertilizer ions lower the soil water potential below that of the root cells, drawing water osmotically out of the roots",
              "Fertilizers consume all atmospheric oxygen around the leaves",
              "Fertilizers dissolve the plant's cell walls",
              "Fertilizers prevent sunlight from hitting chlorophyll"
            ],
            correct: 0,
            explanation: "'Fertilizer burn' occurs when high ionic concentrations drastically lower soil solute potential, making the soil hypertonic and dehydrating root cells."
          },
          {
            question: "Hydroponics is a botanical research and commercial agricultural method involving:",
            options: [
              "Growing plants with their roots suspended in aerated, chemically balanced nutrient water solutions without any soil",
              "Submerging entire terrestrial trees under ocean water",
              "Watering crops only with pure carbonated seltzer",
              "Freezing roots in solid ice"
            ],
            correct: 0,
            explanation: "Hydroponics cultivates crops in mineral-enriched liquid solutions without soil, allowing precise control and study of essential plant nutrient requirements."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 11: GROWTH RESPONSES AND REGULATION OF GROWTH (20 Questions)
  // =========================================================================
  {
    id: "sec_bot_11",
    title: "Chapter 11: Growth Responses and Regulation of Growth",
    description: "Plant hormones (Auxins, Gibberellins, Cytokinins, ABA, Ethylene, Brassinosteroids), tropisms, photoperiodism, and phytochrome signaling.",
    activities: [
      {
        id: "act_bot_11_lesson",
        type: "page",
        title: "Module 11.1: Plant Hormones, Tropisms & Photoperiodism",
        completed: true,
        content: `### 1. Plant Hormones (Phytohormones)
Plant hormones are organic chemical messengers synthesized in minute concentrations that regulate cellular division, elongation, differentiation, and stress responses:
1. **Auxin (Indole-3-acetic acid / IAA):**
   - Synthesized in shoot apical meristems and young leaves.
   - Promotes stem cell elongation via the **Acid Growth Hypothesis** (activating plasma membrane $H^+$-ATPases, lowering cell wall pH to activate **expansins** that loosen cellulose microfibrils).
   - Mediates **phototropism** and **gravitropism** through lateral polar transport.
   - Enforces **apical dominance** (suppressing lateral bud outgrowth).
   - Stimulates adventitious root formation in commercial cuttings.
2. **Gibberellins (GAs, e.g., $GA_3$):**
   - Stimulate dramatic stem elongation (internode lengthening) and bolting in biennials.
   - Break seed dormancy; during cereal germination, the embryo releases GA to trigger the **aleurone layer** to synthesize $\alpha$-amylase, mobilizing starch into glucose.
   - Promotes commercial seedless grape berry enlargement.
3. **Cytokinins (e.g., Zeatin):**
   - Synthesized primarily in root tips; transport upward in xylem.
   - Promote cytokinesis and cell division.
   - Delay leaf **senescence** (aging and protein breakdown).
   - In tissue culture, a high cytokinin-to-auxin ratio induces **shoot bud formation**, while a high auxin-to-cytokinin ratio induces **root formation**.
4. **Abscisic Acid (ABA):**
   - The 'stress hormone'. Promotes seed dormancy and inhibits premature viviparous germination.
   - Triggers rapid stomatal closure during water stress by driving $K^+$ ion efflux from guard cells.
5. **Ethylene ($C_2H_4$):**
   - The only gaseous plant hormone. Promotes commercial **fruit ripening** (converting starches to sugars, softening pectins) and induces petal/leaf **abscission**.
   - Induces the seedling **Triple Response** (stem thickening, growth slowing, horizontal curling).

### 2. Tropisms: Directional Growth Responses
Growth toward a directional stimulus is a positive tropism; away is negative:
- **Phototropism:** Directed growth toward light:
  - Blue light photoreceptors (**phototropins**) trigger lateral redistribution of auxin to the shaded side of the stem.
  - Higher auxin on the dark side stimulates accelerated cell elongation, bending the stem toward the light.
- **Gravitropism:** Directed growth in response to gravity:
  - Shoots exhibit negative gravitropism (growing upward); roots exhibit positive gravitropism (growing downward).
  - Mediated by **statolith** settling in root cap columella cells, directing auxin accumulation to the lower root surface (where high auxin concentrations *inhibit* root cell elongation, causing downward curvature).
- **Thigmotropism:** Growth response to mechanical touch (coiling tendrils).

### 3. Photoperiodism and Phytochrome
Plants monitor seasonal daylength to time flowering:
- **Phytochrome Pigment:** A photo-reversible chromoprotein existing in two interconvertible states:
  - $P_r$ (inactive): Absorbs red light (660 nm) and instantly converts to $P_{fr}$.
  - $P_{fr}$ (active): Absorbs far-red light (730 nm) and reverts to $P_r$. Sunlight converts $P_r \rightarrow P_{fr}$; in prolonged darkness, $P_{fr}$ slowly reverts to $P_r$.
- **Short-Day (Long-Night) Plants:** Flower only when the night period exceeds a critical duration (e.g., chrysanthemums, poinsettias). Interruption of the night with a brief flash of red light blocks flowering.
- **Long-Day (Short-Night) Plants:** Flower when the dark period is shorter than a critical duration (e.g., spinach, wheat).`
      },
      {
        id: "quiz_bot_11",
        type: "quiz",
        title: "🌿 Chapter 11 Checkpoint: Phytohormones, Tropisms & Photoperiodic Control",
        completed: false,
        questions: [
          {
            question: "Which plant hormone is responsible for phototropism, apical dominance, and cell elongation via the Acid Growth Hypothesis?",
            options: [
              "Auxin (IAA)",
              "Ethylene",
              "Abscisic Acid",
              "Cytokinin"
            ],
            correct: 0,
            explanation: "Auxin (IAA) stimulates cell elongation in stems, suppresses lateral bud outgrowth (apical dominance), and drives phototropic curvature."
          },
          {
            question: "The Acid Growth Hypothesis explains that auxin stimulates cell elongation primarily by:",
            options: [
              "Activating proton pumps to acidify the cell wall, activating expansin proteins that loosen cellulose microfibrils",
              "Dissolving the cell wall entirely with concentrated hydrochloric acid",
              "Freezing the cytoplasm into solid crystal sheets",
              "Stopping all vacuolar water uptake"
            ],
            correct: 0,
            explanation: "Auxin activates plasma membrane $H^+$-ATPases, lowering wall pH to ~4.5; this activates expansins that break hydrogen bonds between cellulose and hemicellulose."
          },
          {
            question: "Which plant hormone is a simple hydrocarbon gas that promotes commercial fruit ripening and leaf abscission?",
            options: [
              "Ethylene ($C_2H_4$)",
              "Auxin",
              "Methane",
              "Gibberellin"
            ],
            correct: 0,
            explanation: "Ethylene is the gaseous phytohormone triggering enzymatic pectin degradation (softening) and starch conversion to sugars in ripening fruit."
          },
          {
            question: "Commercial agriculturalists spray which hormone onto Thompson seedless grape clusters to dramatically increase berry size and loosen bunch spacing?",
            options: [
              "Gibberellins (GA)",
              "Abscisic acid",
              "Auxin",
              "Phytochrome"
            ],
            correct: 0,
            explanation: "Gibberellins stimulate rapid stem internode elongation and fruit cell expansion, producing larger grapes and open clusters less prone to mold."
          },
          {
            question: "During the germination of barley seeds, gibberellin released by the embryo signals which tissue layer to synthesize and secrete alpha-amylase to digest starch?",
            options: [
              "The Aleurone layer",
              "The Seed coat",
              "The Root cap",
              "The Coleoptile"
            ],
            correct: 0,
            explanation: "GA diffuses from the embryo to the aleurone cell layer, triggering transcriptional activation and secretion of $\alpha$-amylase to mobilize endosperm starch."
          },
          {
            question: "Which group of plant hormones promotes cytokinesis (cell division), delays leaf aging/senescence, and stimulates shoot bud development in tissue culture?",
            options: [
              "Cytokinins",
              "Auxins",
              "Abscisic acid",
              "Ethylene"
            ],
            correct: 0,
            explanation: "Cytokinins (such as zeatin and kinetin) promote active cell division, postpone chlorophyll breakdown, and promote shoot morphogenesis."
          },
          {
            question: "In plant micropropagation tissue culture, what combination of hormones produces shoots versus roots from undifferentiated callus tissue?",
            options: [
              "High Cytokinin-to-Auxin ratio induces shoot formation; High Auxin-to-Cytokinin ratio induces root formation",
              "High Ethylene induces shoots; High ABA induces roots",
              "Only gibberellins can produce plant organs in culture",
              "Equal ratios of auxin and cytokinin instantly destroy callus"
            ],
            correct: 0,
            explanation: "Skoog and Miller established that high cytokinin relative to auxin drives shoot organogenesis, whereas high auxin relative to cytokinin stimulates rhizogenesis (roots)."
          },
          {
            question: "Which plant hormone acts as an internal inhibitor, maintaining seed dormancy and triggering rapid stomatal closure during sudden drought stress?",
            options: [
              "Abscisic Acid (ABA)",
              "Gibberellin",
              "Auxin",
              "Brassinosteroid"
            ],
            correct: 0,
            explanation: "Abscisic acid (ABA) enforces seed dormancy until conditions are favorable and acts as an emergency signal closing stomata during water deficits."
          },
          {
            question: "Corn mutant seedlings lacking functional Abscisic Acid (ABA) synthesis display which dramatic phenotypic abnormality?",
            options: [
              "Vivipary (seeds germinate prematurely while still attached to the maternal ear)",
              "Total inability to flower",
              "Instant turning into wood",
              "Massive giant leaves"
            ],
            correct: 0,
            explanation: "ABA suppresses premature embryo growth; ABA-deficient mutants exhibit vivipary, where seeds sprout directly inside or on the parent fruit/ear."
          },
          {
            question: "When a houseplant stem bends toward a sunny window, why does the bending occur?",
            options: [
              "Auxin moves to the shaded side of the stem, stimulating greater cell elongation there than on the illuminated side",
              "Sunlight melts the cell walls on the sunny side",
              "The plant physically walks toward the window using roots",
              "Chlorophyll molecules contract like animal muscle fibers"
            ],
            correct: 0,
            explanation: "Phototropins detect directional blue light, causing auxin to shift to the shaded side; enhanced elongation on the shaded side bends the stem toward the light."
          },
          {
            question: "The directional growth of roots downward toward the gravitational center of the Earth is an example of:",
            options: [
              "Positive Gravitropism",
              "Negative Gravitropism",
              "Positive Phototropism",
              "Thigmotropism"
            ],
            correct: 0,
            explanation: "Roots display positive gravitropism (growing downward with gravity), whereas aerial shoots display negative gravitropism (growing upward against gravity)."
          },
          {
            question: "In root gravitropism, why does high auxin concentration on the lower side of a horizontal root cause downward bending?",
            options: [
              "In root tissue, high auxin concentrations inhibit cell elongation, allowing upper cells to expand faster and turn the tip downward",
              "Auxin dissolves the root cap",
              "Auxin transforms roots into green leaves",
              "Auxin freezes root cell division"
            ],
            correct: 0,
            explanation: "Roots are far more sensitive to auxin than stems; high auxin accumulating on the lower side inhibits expansion, so faster elongation on the upper side curves the root down."
          },
          {
            question: "The coiling of pea tendrils around a wooden garden stake upon physical contact illustrates which tropism?",
            options: [
              "Thigmotropism",
              "Phototropism",
              "Hydrotropism",
              "Thermotropism"
            ],
            correct: 0,
            explanation: "Thigmotropism is directional growth in response to mechanical physical contact, causing cells on the contact side to shorten and outer cells to elongate, wrapping the organ."
          },
          {
            question: "The rapid, reversible snap-closing of a Venus flytrap leaf when sensory trigger hairs are touched is caused by:",
            options: [
              "Rapid changes in cell turgor pressure and elastic membrane release (nastic movement)",
              "Cellular mitosis in the leaf blade",
              "Slow irreversible auxinic elongation",
              "Digestion of the plant's own stem"
            ],
            correct: 0,
            explanation: "Nastic movements are rapid, reversible movements driven by sudden changes in turgor pressure across motor cells, independent of stimulus direction."
          },
          {
            question: "What photoreversible pigment protein enables plants to detect seasonal daylength (photoperiod) and red versus far-red light ratios?",
            options: [
              "Phytochrome",
              "Chlorophyll a",
              "Anthocyanin",
              "Carotene"
            ],
            correct: 0,
            explanation: "Phytochrome exists as $P_r$ (absorbing red light) and $P_{fr}$ (biologically active form absorbing far-red light), acting as a molecular light switch for photoperiodism."
          },
          {
            question: "When exposed to daylight containing red light (660 nm), inactive phytochrome $P_r$ is immediately converted into:",
            options: [
              "Biologically active $P_{fr}$",
              "Chlorophyll b",
              "Lignin",
              "Auxin"
            ],
            correct: 0,
            explanation: "Red light converts $P_r$ into $P_{fr}$, the physiologically active conformation that translocates into the nucleus to regulate gene transcription."
          },
          {
            question: "In reality, 'Short-Day' plants (such as chrysanthemums and poinsettias) actually measure what critical environmental parameter to trigger flowering?",
            options: [
              "The continuous duration of uninterrupted darkness (critical night length)",
              "The brightness of the midday sun",
              "The temperature of the morning soil",
              "The speed of the wind"
            ],
            correct: 0,
            explanation: "Experiments show short-day plants are actually 'long-night' plants: flowering requires a continuous uninterrupted dark period exceeding a critical threshold."
          },
          {
            question: "What happens if a short-day (long-night) plant is exposed to a 10-minute flash of red light in the middle of its required 14-hour dark night?",
            options: [
              "Flowering is completely inhibited because the dark period was interrupted",
              "Flowering occurs twice as fast",
              "The plant permanently loses all leaves",
              "The plant produces double the flowers"
            ],
            correct: 0,
            explanation: "A night-break flash of red light converts $P_r$ back to active $P_{fr}$, mimicking daylight and resetting the internal night-clock, preventing short-day flowering."
          },
          {
            question: "What is the biological term for the shade-avoidance response in seedlings growing under dense forest canopies?",
            options: [
              "Etiolation (elongated pale stems searching for light)",
              "Plasmolysis",
              "Guttation",
              "Thigmonasty"
            ],
            correct: 0,
            explanation: "Under dense canopies, high far-red light lowers $P_{fr}$, triggering etiolation: accelerated internode elongation and suppressed leaf expansion to rapidly reach open sun."
          },
          {
            question: "The chemical signal 'florigen', which is synthesized in leaves under inductive photoperiods and translocated through the phloem to trigger floral initiation at shoot apices, is encoded by the:",
            options: [
              "FT (Flowering Locus T) gene and protein",
              "Auxin response factor 1",
              "Rubisco small subunit",
              "Cellulose synthase complex"
            ],
            correct: 0,
            explanation: "Florigen is the mobile protein product of the *Flowering Locus T (FT)* gene, traveling through phloem sieve tubes to reprogram shoot meristems into floral meristems."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 12: MITOSIS, MEIOSIS, AND LIFE CYCLES (16 Questions)
  // =========================================================================
  {
    id: "sec_bot_12",
    title: "Chapter 12: Mitosis, Meiosis, and Life Cycles",
    description: "The eukaryotic plant cell cycle, mitotic division, cell plate formation, meiosis, and alternation of generations.",
    activities: [
      {
        id: "act_bot_12_lesson",
        type: "page",
        title: "Module 12.1: Cellular Reproduction & Alternation of Generations",
        completed: true,
        content: `### 1. The Plant Cell Cycle
Plant cell division occurs primarily within specialized meristems:
- **Interphase:**
  - $G_1$ (Gap 1): Cellular growth and organelle duplication.
  - $S$ Phase: DNA synthesis and chromosome replication.
  - $G_2$ (Gap 2): Protein synthesis; assembly of the **preprophase band** of microtubules that marks the future division plane.
- **Mitosis (M Phase):** Nuclear division preserving ploidy ($2n \\rightarrow 2n$):
  - *Prophase:* Chromatin condenses into visible double-chromatid chromosomes; nucleolus disappears; mitotic spindle forms without centrioles (plant cells lack centrioles).
  - *Metaphase:* Chromosomes align along the equatorial metaphase plate.
  - *Anaphase:* Sister chromatids separate at centromeres, pulled toward opposite poles by kinetochore microtubules.
  - *Telophase:* Nuclear envelopes reform around daughter nuclei.
- **Cytokinesis in Plants:** The **phragmoplast** (barrel-shaped array of microtubules and actin filaments) directs Golgi vesicles containing pectins and hemicelluloses to the center. Vesicles coalesce into the **cell plate**, which expands centrifugally to fuse with the parental plasma membrane, establishing the middle lamella and primary cell walls.

### 2. Meiosis: Generating Genetic Diversity
Meiosis reduces chromosome number by half ($2n \\rightarrow 1n$):
- **Meiosis I (Reductional Division):**
  - *Prophase I:* Homologous chromosomes pair up (**synapsis**) to form tetrads/bivalents. Non-sister chromatids undergo reciprocal genetic exchange at **chiasmata** (**crossing-over**).
  - *Metaphase I & Anaphase I:* Homologous pairs align independently and segregate to opposite poles (**Independent Assortment**).
- **Meiosis II (Equational Division):** Sister chromatids separate, resulting in **four genetically distinct haploid ($1n$) spores**.

### 3. Alternation of Generations in Plants (Haplodiplontic Life Cycle)
All land plants alternate between two multicellular generations:
1. **Gametophyte Generation ($1n$ - Haploid):**
   - Produces haploid gametes (eggs and sperm) by **mitosis** inside multicellular gametangia (archegonia and antheridia).
   - Dominant, independent, photosynthetic generation in nonvascular **bryophytes** (mosses, liverworts).
2. **Sporophyte Generation ($2n$ - Diploid):**
   - Initiated by fertilization (syngamy) forming a $2n$ zygote that develops into a multicellular sporophyte.
   - Cells in specialized sporangia (sporocytes) undergo **meiosis** to produce haploid ($1n$) spores.
   - Evolutionary Trend: Progressive evolutionary dominance of the sporophyte generation in vascular plants (ferns, gymnosperms, angiosperms), with dramatic reduction of the gametophyte down to microscopic, dependent structures (pollen grains and embryo sacs in seed plants).`
      },
      {
        id: "quiz_bot_12",
        type: "quiz",
        title: "🌿 Chapter 12 Checkpoint: Mitosis, Meiosis & Plant Life Cycles",
        completed: false,
        questions: [
          {
            question: "How does cytokinesis in dividing plant cells differ fundamentally from cytokinesis in animal cells?",
            options: [
              "Plant cells assemble a cell plate from Golgi vesicles along a phragmoplast, whereas animal cells pinch in via an actin cleavage furrow",
              "Plant cells divide by simply splitting in half without any new cell wall",
              "Plant cells use centrioles to pull the cell apart",
              "Plant cytokinesis occurs only in complete darkness"
            ],
            correct: 0,
            explanation: "Because plant cells have rigid cell walls, they cannot form a cleavage furrow; cytokinesis requires the phragmoplast directing Golgi vesicles to build the cell plate from the center outward."
          },
          {
            question: "What cytoskeleton-associated structure forms in plant cells during late interphase to predict and mark the exact orientation of the future division plane?",
            options: [
              "The Preprophase Band of microtubules",
              "The Cleavage furrow",
              "The Centrosome aster",
              "The Kinetochore ring"
            ],
            correct: 0,
            explanation: "The preprophase band is a ring of cortical microtubules appearing during late G2 that marks the future site where the cell plate will fuse with the parental wall."
          },
          {
            question: "Unlike animal cells, typical higher plant cells completely lack which organelle during mitotic spindle assembly?",
            options: [
              "Centrioles (Centrosomes)",
              "Microtubules",
              "Chromosomes",
              "Nuclear envelopes"
            ],
            correct: 0,
            explanation: "Higher plant cells lack centrioles; spindle microtubules are nucleated and organized directly from nuclear envelope and cortical organizing centers."
          },
          {
            question: "The fundamental life cycle of all land plants, involving alternating multicellular haploid and diploid phases, is known as:",
            options: [
              "Alternation of Generations (Haplodiplontic life cycle)",
              "Diplontic cycle",
              "Parthenogenesis",
              "Binary fission"
            ],
            correct: 0,
            explanation: "Land plants alternate between a multicellular haploid gametophyte phase and a multicellular diploid sporophyte phase."
          },
          {
            question: "In the plant life cycle, what type of nuclear division produces haploid gametes (eggs and sperm) from the haploid gametophyte?",
            options: [
              "Mitosis",
              "Meiosis",
              "Binary fission",
              "Endoreduplication"
            ],
            correct: 0,
            explanation: "Because the gametophyte is already haploid ($1n$), it produces gametes through mitosis, NOT meiosis."
          },
          {
            question: "In the plant life cycle, what type of nuclear division occurs within the sporangia of the diploid sporophyte to produce spores?",
            options: [
              "Meiosis",
              "Mitosis",
              "Budding",
              "Conjugation"
            ],
            correct: 0,
            explanation: "Diploid ($2n$) spore mother cells within sporangia undergo meiosis to produce four genetically diverse haploid ($1n$) spores."
          },
          {
            question: "In nonvascular bryophytes (such as mosses and liverworts), which generation is dominant, photosynthetic, and independent?",
            options: [
              "The Haploid Gametophyte generation",
              "The Diploid Sporophyte generation",
              "Both are entirely dependent on fungi",
              "Neither generation exists"
            ],
            correct: 0,
            explanation: "In mosses, the familiar green leafy carpet is the independent haploid gametophyte; the diploid sporophyte is a dependent stalk growing out of the female plant."
          },
          {
            question: "What evolutionary trend characterizes the alternation of generations across the transition from bryophytes to ferns, gymnosperms, and angiosperms?",
            options: [
              "Progressive enlargement and dominance of the diploid sporophyte, with extreme reduction of the gametophyte to a microscopic dependent structure",
              "Total loss of the sporophyte generation",
              "Enlargement of the gametophyte until it becomes a giant tree",
              "Cessation of all sexual reproduction"
            ],
            correct: 0,
            explanation: "Vascular plant evolution showcases the dominance of the diploid sporophyte (trees, herbs), reducing gametophytes to microscopic structures (pollen and embryo sacs)."
          },
          {
            question: "During which phase of Meiosis I do homologous chromosomes pair up in synapsis and exchange reciprocal genetic segments via crossing-over?",
            options: [
              "Prophase I",
              "Metaphase II",
              "Anaphase I",
              "Telophase II"
            ],
            correct: 0,
            explanation: "Crossing-over occurs during Prophase I at points called chiasmata, creating novel recombinant combinations of maternal and paternal alleles."
          },
          {
            question: "What multicellular female reproductive structure produces and protects the egg cell in mosses, ferns, and gymnosperms?",
            options: [
              "Archegonium",
              "Antheridium",
              "Sporangium",
              "Pollen tube"
            ],
            correct: 0,
            explanation: "The archegonium is the multicellular female gametangium that produces a single non-motile egg at the base of a flask-shaped neck."
          },
          {
            question: "What multicellular male reproductive structure produces flagellated sperm in bryophytes and seedless vascular plants?",
            options: [
              "Antheridium",
              "Archegonium",
              "Stamen",
              "Sorus"
            ],
            correct: 0,
            explanation: "Antheridia are the multicellular male gametangia producing swimming, flagellated sperm cells that require free water to swim to archegonia."
          },
          {
            question: "During which subphase of the plant cell cycle is chromosomal DNA accurately replicated?",
            options: [
              "S phase (Synthesis phase)",
              "G1 phase",
              "G2 phase",
              "M phase"
            ],
            correct: 0,
            explanation: "DNA replication takes place during the S (synthesis) phase of interphase, duplicating each chromosome into two identical sister chromatids."
          },
          {
            question: "In flowering plants, the male microgametophyte is reduced to a microscopic structure containing just 2 or 3 cells, known as a:",
            options: [
              "Pollen grain",
              "Embryo sac",
              "Sporangium",
              "Zygote"
            ],
            correct: 0,
            explanation: "An angiosperm pollen grain is the immature male microgametophyte, consisting of a vegetative tube cell and a generative cell."
          },
          {
            question: "What is the ploidy level of a plant spore versus a plant zygote?",
            options: [
              "Spores are Haploid (1n); Zygotes are Diploid (2n)",
              "Spores are Diploid (2n); Zygotes are Haploid (1n)",
              "Both are Triploid (3n)",
              "Both are Hexaploid (6n)"
            ],
            correct: 0,
            explanation: "Spores are haploid products of meiosis ($1n$); fertilization of egg and sperm fuses two haploid gametes into a diploid ($2n$) zygote."
          },
          {
            question: "Independent assortment of maternal and paternal chromosomes, creating vast numbers of unique gamete combinations, occurs during:",
            options: [
              "Metaphase I and Anaphase I of Meiosis",
              "Mitotic metaphase",
              "Interphase G1",
              "Cell plate expansion"
            ],
            correct: 0,
            explanation: "During Metaphase I, bivalents align randomly along the equator, segregating paternal and maternal homologs independently in Anaphase I."
          },
          {
            question: "Which cellular structure coordinates the transport and fusion of Golgi vesicles to construct the new cell plate during plant cytokinesis?",
            options: [
              "The Phragmoplast",
              "The Tonoplast",
              "The Casparian strip",
              "The Centrosome"
            ],
            correct: 0,
            explanation: "The phragmoplast is an array of parallel microtubules and actin microfilaments that guides secretory Golgi vesicles to the cell plate."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 13: PATTERNS OF INHERITANCE (16 Questions)
  // =========================================================================
  {
    id: "sec_bot_13",
    title: "Chapter 13: Patterns of Inheritance",
    description: "Mendelian genetics in plants, laws of segregation and independent assortment, monohybrid/dihybrid crosses, and non-Mendelian inheritance.",
    activities: [
      {
        id: "act_bot_13_lesson",
        type: "page",
        title: "Module 13.1: Principles of Plant Genetics",
        completed: true,
        content: `### 1. Gregor Mendel and the Garden Pea (Pisum sativum)
Gregor Mendel formulated the foundational laws of inheritance in the 1860s using garden peas. *Pisum sativum* was an ideal model:
- Naturally self-pollinating, ensuring true-breeding parental lines.
- Easily cross-pollinated artificially by removing immature anthers.
- Exhibited distinct binary qualitative traits (tall vs. dwarf stems, purple vs. white flowers, round vs. wrinkled seeds, yellow vs. green cotyledons).

### 2. Mendel's Laws of Inheritance
- **The Principle of Uniformity:** Crossing two true-breeding parents differing in one trait ($TT \\times tt$) yields $F_1$ offspring displaying only the **dominant** phenotype ($Tt$).
- **The Law of Segregation:** During gamete formation, the two alleles of a gene separate so that each gamete carries only one allele. Selfing the $F_1$ generation ($Tt \\times Tt$) produces an $F_2$ phenotypic ratio of **3:1** (and a genotypic ratio of $1\\text{ }TT : 2\\text{ }Tt : 1\\text{ }tt$).
- **The Law of Independent Assortment:** Alleles of two or more different gene pairs assort independently into gametes, provided they reside on different chromosomes. A dihybrid cross ($RrYy \\times RrYy$) yields a classic **9:3:3:1** phenotypic ratio in the $F_2$ generation.

### 3. Non-Mendelian Genetic Patterns in Plants
- **Incomplete Dominance:** The heterozygote displays an intermediate phenotype between the two homozygotes (e.g., crossing red snapdragons $C^R C^R$ with white $C^W C^W$ yields 100% pink $C^R C^W$ flowers; $F_2$ ratio is 1:2:1).
- **Codominance:** Both alleles are simultaneously expressed without blending.
- **Polygenic Inheritance:** Multiple independent genes exert additive effects on a continuous quantitative trait (e.g., wheat kernel color, plant height, crop yield).
- **Gene Linkage and Genetic Mapping:** Genes located close together on the same chromosome do not assort independently; recombination frequencies (crossing-over) allow mapping of relative gene distances in centimorgans (cM).
- **Maternal Extranuclear (Cytoplasmic) Inheritance:** Chloroplast and mitochondrial genomes are transmitted almost exclusively through the maternal egg cytoplasm (e.g., leaf variegation in four-o'clocks, Mirabilis jalapa).`
      },
      {
        id: "quiz_bot_13",
        type: "quiz",
        title: "🌿 Chapter 13 Checkpoint: Mendelian Plant Genetics & Inheritance Patterns",
        completed: false,
        questions: [
          {
            question: "Why was the garden pea (Pisum sativum) an exceptionally advantageous model organism for Gregor Mendel's genetic investigations?",
            options: [
              "It was naturally self-pollinating with easily manipulable flower parts, short generation times, and clear binary qualitative traits",
              "Pea plants reproduce only once every 50 years",
              "Pea plants lack chromosomes",
              "Peas reproduce strictly through asexual cloning"
            ],
            correct: 0,
            explanation: "Peas feature self-fertilization, high fertility, distinct alternative traits (e.g., tall/dwarf, purple/white), and permit controlled artificial cross-pollination."
          },
          {
            question: "In Mendel's monohybrid crosses, crossing true-breeding purple-flowered peas (PP) with true-breeding white-flowered peas (pp) produced an F1 generation that was:",
            options: [
              "100% purple-flowered heterozygotes (Pp)",
              "100% white-flowered",
              "50% purple and 50% white",
              "100% pink"
            ],
            correct: 0,
            explanation: "All $F_1$ offspring receive a dominant P allele from the purple parent and a recessive p allele from the white parent, displaying the dominant purple phenotype."
          },
          {
            question: "When Mendel allowed the heterozygous F1 plants (Pp) to self-pollinate, what phenotypic ratio appeared in the resulting F2 generation?",
            options: [
              "3 Dominant (Purple) to 1 Recessive (White)",
              "9:3:3:1",
              "1:1",
              "1:2:1 exclusively white"
            ],
            correct: 0,
            explanation: "Segregation of alleles produces an $F_2$ genotypic ratio of 1 PP : 2 Pp : 1 pp, manifesting as a 3:1 dominant-to-recessive phenotypic ratio."
          },
          {
            question: "Mendel's Law of Segregation states that:",
            options: [
              "The two alleles for a heritable trait separate during gamete formation so that each gamete carries only one allele for each gene",
              "All genes on the same chromosome are inherited together forever",
              "Recessive traits can never reappear in future generations",
              "Genes are physically destroyed after fertilization"
            ],
            correct: 0,
            explanation: "The Law of Segregation reflects homologous chromosome separation during Anaphase I of meiosis, distributing one allele of each gene into each gamete."
          },
          {
            question: "In a dihybrid cross between two individuals heterozygous for two unlinked traits ($RrYy \\times RrYy$), what phenotypic ratio is expected in the offspring?",
            options: [
              "9:3:3:1",
              "3:1",
              "1:1:1:1",
              "15:1"
            ],
            correct: 0,
            explanation: "Independent assortment of two unlinked heterozygous traits produces a classic 9 (dominant-dominant) : 3 (dominant-recessive) : 3 (recessive-dominant) : 1 (recessive-recessive) ratio."
          },
          {
            question: "When crossing a true-breeding red snapdragon ($C^R C^R$) with a true-breeding white snapdragon ($C^W C^W$), all F1 offspring have pink flowers ($C^R C^W$). This illustrates:",
            options: [
              "Incomplete Dominance",
              "Codominance",
              "Epistasis",
              "Pleiotropy"
            ],
            correct: 0,
            explanation: "Incomplete dominance occurs when neither allele is fully dominant; the heterozygous phenotype is an intermediate blend between the two homozygous parental phenotypes."
          },
          {
            question: "Continuous quantitative variation in plant traits, such as wheat grain color or plant height governed by the additive effects of multiple independent genes, is termed:",
            options: [
              "Polygenic Inheritance",
              "Complete dominance",
              "Mendelian monohybridism",
              "Cytoplasmic segregation"
            ],
            correct: 0,
            explanation: "Polygenic traits result from the additive contributions of multiple gene loci, producing a continuous bell-shaped distribution of phenotypes in a population."
          },
          {
            question: "Why do two genes located very close together on the same chromosome fail to obey Mendel's Law of Independent Assortment?",
            options: [
              "They exhibit Gene Linkage and tend to be inherited together unless separated by crossing-over",
              "They destroy each other during meiosis",
              "They lack DNA nucleotides",
              "They mutate into RNA during gamete formation"
            ],
            correct: 0,
            explanation: "Linked genes reside on the same physical chromosome DNA molecule; they travel together into gametes unless reciprocal crossing-over breaks the linkage."
          },
          {
            question: "Variegated leaves in four-o'clock plants (Mirabilis jalapa), showing patches of white and green tissue, are inherited through which non-Mendelian mechanism?",
            options: [
              "Maternal cytoplasmic inheritance of defective chloroplasts via the egg cell",
              "Y-linked chromosomal inheritance",
              "Bacterial infection of roots",
              "Pollen tube nuclear dominance"
            ],
            correct: 0,
            explanation: "Plastids are inherited maternally through the cytoplasm of the egg; defective chloroplasts segregate randomly during embryonic mitosis, creating variegated sectors."
          },
          {
            question: "A plant geneticist crosses a plant displaying a dominant phenotype with a homozygous recessive individual to determine if the dominant plant is homozygous or heterozygous. This cross is a:",
            options: [
              "Testcross",
              "Dihybrid cross",
              "Monohybrid selfing",
              "Reciprocal diallel"
            ],
            correct: 0,
            explanation: "A testcross pairs an individual of unknown genotype exhibiting the dominant phenotype ($P_-$) with a homozygous recessive tester ($pp$) to reveal the genotype."
          },
          {
            question: "A single gene that exerts multiple, seemingly unrelated phenotypic effects across different plant organs illustrates:",
            options: [
              "Pleiotropy",
              "Polyploidy",
              "Codominance",
              "Incomplete penetrance"
            ],
            correct: 0,
            explanation: "Pleiotropy describes a genetic situation where a single mutation or gene locus alters multiple distinct physiological or morphological characteristics."
          },
          {
            question: "When one gene locus masks or alters the phenotypic expression of a completely separate gene locus, the genetic phenomenon is called:",
            options: [
              "Epistasis",
              "Codominance",
              "Polyploidy",
              "Incomplete dominance"
            ],
            correct: 0,
            explanation: "Epistasis occurs when the phenotypic expression of one gene depends on or is masked by alleles at a second independent locus."
          },
          {
            question: "What map unit is defined as a 1% recombination frequency between two linked gene loci on a chromosome?",
            options: [
              "Centimorgan (cM)",
              "Nanometer",
              "Base pair",
              "Kilodalton"
            ],
            correct: 0,
            explanation: "One centimorgan (cM) or map unit equals a 1% frequency of crossing-over (recombination) occurring between two gene loci during meiosis."
          },
          {
            question: "An organism that possesses two identical alleles for a specific gene locus (e.g., TT or tt) is described as:",
            options: [
              "Homozygous",
              "Heterozygous",
              "Hemizygous",
              "Aneuploid"
            ],
            correct: 0,
            explanation: "Homozygous individuals carry two identical alleles at a given gene locus, whereas heterozygotes carry two different alleles."
          },
          {
            question: "The observable physical, anatomical, and physiological properties of a plant resulting from the interaction of its genetic makeup with the environment is its:",
            options: [
              "Phenotype",
              "Genotype",
              "Karyotype",
              "Allele"
            ],
            correct: 0,
            explanation: "The phenotype is the expressed physical reality of an organism, shaped by its underlying genetic composition (genotype) and environmental influences."
          },
          {
            question: "If a homozygous tall plant with yellow seeds ($TTYY$) is crossed with a homozygous dwarf plant with green seeds ($ttyy$), what will be the genotype of all F1 progeny?",
            options: [
              "TtYy",
              "TTYY",
              "ttyy",
              "TTYy"
            ],
            correct: 0,
            explanation: "Each $F_1$ plant receives $T$ and $Y$ alleles from one parent and $t$ and $y$ alleles from the other, yielding 100% dihybrid heterozygous genotypes ($TtYy$)."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 14: THE MOLECULAR BASIS OF INHERITANCE (15 Questions)
  // =========================================================================
  {
    id: "sec_bot_14",
    title: "Chapter 14: The Molecular Basis of Inheritance",
    description: "DNA structure, semiconservative replication, transcription, RNA processing, translation of genetic code, and regulation of plant gene expression.",
    activities: [
      {
        id: "act_bot_14_lesson",
        type: "page",
        title: "Module 14.1: Molecular Biology & Gene Expression in Plants",
        completed: true,
        content: `### 1. Plant DNA Architecture
The genetic instructions for plant life reside within three distinct cellular compartments: the **nucleus**, the **chloroplast**, and the **mitochondrion**:
- **Nuclear DNA:** Arranged in linear chromosomes wrapped around basic **histone** proteins to form nucleosomes.
- **Double Helix Structure:** Antiparallel strands composed of deoxyribose sugars, phosphate groups, and four nitrogenous bases: Adenine ($A$), Thymine ($T$), Guanine ($G$), and Cytosine ($C$). Base pairing follows Chargaff's rules: $A = T$ (two hydrogen bonds) and $G \equiv C$ (three hydrogen bonds).

### 2. Semiconservative DNA Replication
Occurs during the S phase of interphase:
- **Helicase** unzips the double helix at replication origins.
- **DNA Polymerase III** synthesizes new complementary strands in the $5' \\rightarrow 3'$ direction:
  - *Leading Strand:* Synthesized continuously toward the replication fork.
  - *Lagging Strand:* Synthesized discontinuously as short **Okazaki fragments**, primed by RNA primers (primase) and sealed by **DNA ligase**.

### 3. Transcription in Plants
The synthesis of an RNA molecule from a DNA template:
- **RNA Polymerase II** binds to promoter sequences (e.g., TATA box), regulated by plant-specific **transcription factors**.
- Synthesizes pre-mRNA in the $5' \\rightarrow 3'$ direction.
- **Post-Transcriptional Processing (in Nucleus):**
  1. *5' Capping:* Addition of a 7-methylguanosine cap to protect against exonucleases.
  2. *Polyadenylation:* Addition of a poly-A tail (100-200 adenines) to the 3' end.
  3. *RNA Splicing:* **Spliceosomes** excise non-coding **introns** and ligate coding **exons**. Alternative splicing allows a single plant gene to yield multiple distinct protein isoforms.

### 4. Translation and the Genetic Code
Occurs in the cytosol, on rough endoplasmic reticulum, or inside plastids and mitochondria:
- **Ribosomes:** 80S ribosomes in the cytosol (60S and 40S subunits); 70S ribosomes in chloroplasts and mitochondria.
- **tRNA (Transfer RNA):** Matches specific amino acids to mRNA codons via complementary anticodon loops.
- **Stages:**
  - *Initiation:* Small ribosomal subunit binds mRNA 5' cap and locates the start codon (**AUG**, encoding methionine).
  - *Elongation:* Peptidyl transferase forms peptide bonds between amino acids in the A and P sites of the ribosome.
  - *Termination:* Stop codons (UAA, UAG, UGA) recruit release factors, releasing the completed polypeptide.`
      },
      {
        id: "quiz_bot_14",
        type: "quiz",
        title: "🌿 Chapter 14 Checkpoint: Molecular Genetics, Transcription & Translation",
        completed: false,
        questions: [
          {
            question: "In the Watson-Crick double helix model of DNA, what nitrogenous base pairs complementarily with Adenine (A) via two hydrogen bonds?",
            options: [
              "Thymine (T)",
              "Cytosine (C)",
              "Guanine (G)",
              "Uracil (U)"
            ],
            correct: 0,
            explanation: "Adenine pairs specifically with Thymine via two hydrogen bonds in DNA (or with Uracil in RNA), whereas Guanine pairs with Cytosine via three hydrogen bonds."
          },
          {
            question: "DNA replication is described as 'semiconservative' because:",
            options: [
              "Each newly replicated double helix consists of one original conserved parental strand and one newly synthesized daughter strand",
              "Only half of the plant's chromosomes are copied during S phase",
              "DNA molecules are completely broken down into individual atoms before rebuilding",
              "DNA replication requires zero energy"
            ],
            correct: 0,
            explanation: "Meselson and Stahl demonstrated semiconservative replication: each daughter duplex retains one intact template strand from the parent molecule."
          },
          {
            question: "In what direction does DNA polymerase synthesize a new complementary DNA strand during replication?",
            options: [
              "Exclusively in the 5' to 3' direction",
              "Exclusively in the 3' to 5' direction",
              "Randomly in both directions simultaneously",
              "From the middle of the chromosome outward"
            ],
            correct: 0,
            explanation: "DNA polymerases can add new nucleotides only to the free 3'-OH group of an existing primer, elongating strictly from the 5' end toward the 3' end."
          },
          {
            question: "During lagging-strand DNA replication, what enzyme joins and covalently seals the discontinuous Okazaki fragments together?",
            options: [
              "DNA Ligase",
              "DNA Helicase",
              "RNA Polymerase",
              "Amylase"
            ],
            correct: 0,
            explanation: "DNA ligase catalyzes the formation of phosphodiester bonds between adjacent Okazaki fragments, creating a continuous sugar-phosphate backbone."
          },
          {
            question: "What is the primary enzyme responsible for synthesizing messenger RNA (mRNA) from a DNA gene template during transcription?",
            options: [
              "RNA Polymerase II",
              "DNA Polymerase I",
              "Ribosome",
              "Reverse transcriptase"
            ],
            correct: 0,
            explanation: "RNA Polymerase II transcribes protein-coding genes into pre-mRNA in eukaryotic plant nuclei."
          },
          {
            question: "What universal start codon on an mRNA transcript signals the initiation of polypeptide translation by the ribosome?",
            options: [
              "AUG (encoding Methionine)",
              "UAA",
              "UGA",
              "CCC"
            ],
            correct: 0,
            explanation: "AUG is the universal start codon; it defines the translational reading frame and codes for the amino acid methionine."
          },
          {
            question: "During eukaryotic pre-mRNA processing in plant cell nuclei, non-coding intervening sequences that are excised and discarded are called:",
            options: [
              "Introns",
              "Exons",
              "Codons",
              "Promoters"
            ],
            correct: 0,
            explanation: "Introns are non-coding gene segments spliced out of pre-mRNA; the remaining coding sequences (exons) are joined together to form mature mRNA."
          },
          {
            question: "What modification is added to the 3' end of a newly transcribed eukaryotic plant mRNA to stabilize it against degradation and assist export to the cytoplasm?",
            options: [
              "A Poly-A Tail (chain of adenine nucleotides)",
              "A 5' methylguanosine cap",
              "A lipid bilayer",
              "A cellulose wall"
            ],
            correct: 0,
            explanation: "Polyadenylation adds a tail of 100-250 adenine residues to the 3' end, protecting the transcript from enzymatic degradation and aiding ribosomal binding."
          },
          {
            question: "What molecular structure delivers specific amino acids to the translating ribosome by matching its three-base anticodon to the mRNA codon?",
            options: [
              "Transfer RNA (tRNA)",
              "Ribosomal RNA (rRNA)",
              "Small interfering RNA (siRNA)",
              "DNA ligase"
            ],
            correct: 0,
            explanation: "Transfer RNA (tRNA) molecules carry a specific amino acid at their 3' acceptor stem and pair their anticodon with the complementary mRNA codon."
          },
          {
            question: "Besides the nucleus, which two plant organelles possess their own circular DNA genomes and replicate autonomously?",
            options: [
              "Chloroplasts and Mitochondria",
              "Vacuoles and Peroxisomes",
              "Golgi apparatus and Endoplasmic reticulum",
              "Cell walls and Ribosomes"
            ],
            correct: 0,
            explanation: "Due to their endosymbiotic prokaryotic origins, chloroplasts (cpDNA) and mitochondria (mtDNA) retain circular DNA genomes encoding essential proteins."
          },
          {
            question: "What biological phenomenon allows a single pre-mRNA transcript in plants to produce multiple distinct protein variants with different functions?",
            options: [
              "Alternative Splicing",
              "Gene duplication",
              "Semiconservative replication",
              "Polyadenylation"
            ],
            correct: 0,
            explanation: "Alternative splicing selectively includes or excludes different exons during RNA processing, expanding the functional proteome from a limited gene set."
          },
          {
            question: "What specific base is found in RNA molecules in place of the Thymine (T) found in DNA?",
            options: [
              "Uracil (U)",
              "Cytosine (C)",
              "Guanine (G)",
              "Adenine (A)"
            ],
            correct: 0,
            explanation: "RNA contains Uracil (U) instead of Thymine (T); Uracil lacks a methyl group on its pyrimidine ring and pairs with Adenine."
          },
          {
            question: "Proteins that bind to specific promoter or enhancer DNA sequences to stimulate or repress the transcription of plant genes are called:",
            options: [
              "Transcription Factors",
              "Ribozymes",
              "Histones",
              "Okazaki fragments"
            ],
            correct: 0,
            explanation: "Transcription factors are sequence-specific DNA-binding proteins that modulate the recruitment of RNA polymerase, controlling gene expression."
          },
          {
            question: "What is the structural unit of eukaryotic chromatin, consisting of 146 base pairs of DNA wrapped around an octamer of histone proteins?",
            options: [
              "A Nucleosome",
              "A Centromere",
              "A Telomere",
              "A Ribosome"
            ],
            correct: 0,
            explanation: "Nucleosomes are the fundamental 'beads-on-a-string' packaging units of eukaryotic chromatin, composed of DNA coiled around histone protein cores."
          },
          {
            question: "The chemical process of adding methyl groups directly to cytosine bases in plant DNA, typically silencing gene expression without altering the base sequence, is:",
            options: [
              "DNA Methylation (Epigenetics)",
              "Alternative Splicing",
              "Semiconservative replication",
              "Polyadenylation"
            ],
            correct: 0,
            explanation: "DNA methylation is an epigenetic mark that condenses chromatin and represses transcription, playing key roles in plant development and transposon silencing."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 15: GENETIC FRONTIERS (14 Questions)
  // =========================================================================
  {
    id: "sec_bot_15",
    title: "Chapter 15: Genetic Frontiers",
    description: "Recombinant DNA technology, Agrobacterium tumefaciens and the Ti plasmid, genetically modified (GM) crops, gene editing (CRISPR), and bioethics.",
    activities: [
      {
        id: "act_bot_15_lesson",
        type: "page",
        title: "Module 15.1: Plant Biotechnology & Genetic Engineering",
        completed: true,
        content: `### 1. Recombinant DNA Technology and Plant Transformation
Plant biotechnology manipulates plant genomes to enhance agronomic productivity, nutritional quality, and stress resilience:
- **Restriction Endonucleases:** Bacterial enzymes that cleave DNA at specific palindromic recognition sequences, generating 'sticky ends'.
- **Agrobacterium tumefaciens Vector System:**
  - *Natural Genetic Engineer:* A soil bacterium that infects wounded plants, transferring a segment of its **Tumor-Inducing (Ti) Plasmid**—the **T-DNA** (Transfer DNA)—directly into the host plant's nuclear genome.
  - *Engineered Plasmids:* Molecular biologists disarm the Ti plasmid by replacing tumor-causing genes with genes of interest (e.g., insect resistance, drought tolerance) and selectable marker genes (e.g., antibiotic resistance or herbicide tolerance).
- **Biolistics (Gene Gun):** Microscopic gold or tungsten microprojectiles coated with recombinant DNA fired at high velocity into plant cells or embryogenic tissue, particularly useful for transforming monocot cereal crops.

### 2. Major Commercial Transgenic Traits (GM Crops)
- **Bt Crops (Insect Resistance):** Cotton and maize engineered with genes from *Bacillus thuringiensis* encoding crystal **Cry endotoxins**. When ingested by corn borers or bollworms, gut alkaline enzymes activate the toxin, puncturing the insect larval gut and providing targeted pest control without broad-spectrum chemical insecticides.
- **Roundup Ready Crops (Herbicide Tolerance):** Crops engineered with a bacterial 5-enolpyruvylshikimate-3-phosphate (EPSP) synthase gene immune to glyphosate (the active ingredient in Roundup herbicide). Allows farmers to spray fields with herbicide to kill weeds without injuring the crop.
- **Golden Rice (Biofortification):** Genetically modified rice producing **beta-carotene** (provitamin A) in the edible grain endosperm to combat childhood blindness and vitamin A deficiency in developing nations.

### 3. Precision Genome Editing: CRISPR/Cas9
- Discovered as an adaptive immune system in bacteria.
- Consists of a **Cas9 endonuclease** guided by a synthetic single guide RNA (**sgRNA**) designed to match a target 20-nucleotide plant genomic sequence.
- Generates precise double-strand DNA breaks, triggering error-prone repair (knockouts) or precise gene insertion without leaving foreign bacterial vector sequences in the plant.`
      },
      {
        id: "quiz_bot_15",
        type: "quiz",
        title: "🌿 Chapter 15 Checkpoint: Plant Genetic Engineering & Biotechnology",
        completed: false,
        questions: [
          {
            question: "Which soil bacterium is widely utilized in biotechnology as a natural vector to insert foreign genes into plant genomes via its Ti (Tumor-Inducing) plasmid?",
            options: [
              "Agrobacterium tumefaciens",
              "Escherichia coli",
              "Rhizobium leguminosarum",
              "Bacillus subtilis"
            ],
            correct: 0,
            explanation: "Agrobacterium tumefaciens transfers its T-DNA from the Ti plasmid into the host plant chromosome, making it the premier vector for plant genetic engineering."
          },
          {
            question: "Genetically modified 'Bt Corn' and 'Bt Cotton' produce insecticidal proteins derived from which organism to defend against caterpillar pests?",
            options: [
              "The soil bacterium Bacillus thuringiensis",
              "The venom of scorpions",
              "Poisonous mushrooms",
              "Pitcher plants"
            ],
            correct: 0,
            explanation: "Bt crops contain genes from Bacillus thuringiensis encoding Cry endotoxins that selectively bind to receptor proteins in insect larval midguts, killing pests."
          },
          {
            question: "What agricultural herbicide resistance was engineered into 'Roundup Ready' crops (soybeans, corn, canola)?",
            options: [
              "Resistance to glyphosate (which inhibits the EPSP synthase enzyme in the aromatic amino acid pathway)",
              "Resistance to 2,4-D exclusively",
              "Resistance to excessive nitrogen fertilizers",
              "Immunity to salt water"
            ],
            correct: 0,
            explanation: "Roundup Ready crops possess a bacterial EPSP synthase enzyme that is resistant to inhibition by glyphosate, allowing weed spraying without crop damage."
          },
          {
            question: "'Golden Rice' was genetically engineered to address global childhood malnutrition by synthesizing which nutrient within the edible rice endosperm?",
            options: [
              "Beta-carotene (provitamin A)",
              "Vitamin C",
              "High concentrations of gluten",
              "Saturated animal fats"
            ],
            correct: 0,
            explanation: "Golden Rice expresses genes for phytoene synthase and carotene desaturase, accumulating beta-carotene to alleviate vitamin A deficiency and blindness."
          },
          {
            question: "The 'gene gun' (biolistics) method of plant transformation works by:",
            options: [
              "Firing microscopic gold or tungsten particles coated with DNA into plant tissue at high velocity",
              "Using ultrasound to rupture roots",
              "Applying electrical batteries to mature tree bark",
              "Injecting DNA with ordinary hypodermic needles"
            ],
            correct: 0,
            explanation: "Biolistics accelerates DNA-coated heavy metal microprojectiles with pressurized gas, penetrating plant cell walls to deliver genetic constructs."
          },
          {
            question: "What revolutionary genome-editing technology utilizes a guide RNA to direct the Cas9 endonuclease enzyme to create precise cuts in targeted plant DNA sequences?",
            options: [
              "CRISPR/Cas9",
              "Polymerase Chain Reaction (PCR)",
              "Gel electrophoresis",
              "Sanger sequencing"
            ],
            correct: 0,
            explanation: "CRISPR/Cas9 uses a synthetic single-guide RNA complementary to a target sequence to guide Cas9 endonuclease to generate targeted double-strand breaks."
          },
          {
            question: "Enzymes that cut double-stranded DNA at specific palindromic nucleotide recognition sequences are called:",
            options: [
              "Restriction Endonucleases",
              "DNA Ligases",
              "DNA Polymerases",
              "Amylases"
            ],
            correct: 0,
            explanation: "Restriction enzymes recognize and cleave specific palindromic DNA sequences, producing sticky or blunt ends essential for molecular cloning."
          },
          {
            question: "What is the primary ecological risk associated with the widespread cultivation of herbicide-tolerant (Roundup Ready) crops?",
            options: [
              "Intense over-application of glyphosate driving the natural selection of resistant 'superweeds'",
              "Immediate extinction of all honeybees worldwide",
              "Spontaneous combustion of corn fields",
              "Permanent loss of soil nitrogen"
            ],
            correct: 0,
            explanation: "Constant spraying of glyphosate exerts extreme selective pressure, selecting for glyphosate-resistant weed populations ('superweeds') across farmlands."
          },
          {
            question: "A plant possessing genetic material that has been experimentally introduced from an unrelated foreign species is described as:",
            options: [
              "Transgenic (Genetically Modified)",
              "Haploid",
              "Polygenic",
              "Etiolated"
            ],
            correct: 0,
            explanation: "A transgenic organism contains artificially introduced recombinant genes from another species integrated into its permanent genome."
          },
          {
            question: "Why are marker genes (such as antibiotic or herbicide resistance genes) included in recombinant DNA constructs used to transform plants?",
            options: [
              "To allow researchers to selectively kill untransformed cells and identify the rare cells that successfully incorporated the foreign gene",
              "To make the plant grow twice as tall",
              "To color the leaves blue",
              "To attract earthworms to the soil"
            ],
            correct: 0,
            explanation: "Selectable markers confer resistance to an agent (e.g., kanamycin), allowing only successfully transformed plant cells to survive on selective media."
          },
          {
            question: "What technique allows agricultural scientists to rapidly amplify millions of copies of a specific plant DNA fragment in a test tube within hours?",
            options: [
              "Polymerase Chain Reaction (PCR)",
              "Tissue culturing",
              "Grafting",
              "Stratification"
            ],
            correct: 0,
            explanation: "PCR uses heat-stable Taq polymerase and cycling temperatures (denaturation, annealing, extension) to amplify targeted DNA regions exponentially."
          },
          {
            question: "What is an important potential environmental benefit of cultivating insect-resistant Bt crops?",
            options: [
              "A dramatic reduction in the spraying of broad-spectrum chemical insecticides into the environment",
              "Complete elimination of all weeds without plowing",
              "No need to ever irrigate crops",
              "Rapid doubling of soil phosphorus levels"
            ],
            correct: 0,
            explanation: "Bt crops produce their own targeted defense proteins, substantially reducing the volume and frequency of toxic synthetic chemical insecticides sprayed."
          },
          {
            question: "The regeneration of an entire fertile adult plant from a single cultured somatic cell in a petri dish demonstrates which botanical principle?",
            options: [
              "Cellular Totipotency",
              "Apical dominance",
              "Dormancy",
              "Epistasis"
            ],
            correct: 0,
            explanation: "Totipotency is the inherent ability of a single differentiated plant cell to retain the complete genetic blueprint and regenerate into a whole, functional organism."
          },
          {
            question: "CRISPR-edited crops are distinguished regulatory-wise from traditional transgenic GMOs in many jurisdictions because:",
            options: [
              "CRISPR can introduce targeted mutations or deletions without inserting any permanent foreign DNA from another species",
              "CRISPR crops are completely immune to drought",
              "CRISPR works only on wild weeds, never crops",
              "CRISPR eliminates all chromosomes"
            ],
            correct: 0,
            explanation: "CRISPR can induce targeted gene knockouts without integrating foreign bacterial or viral vector DNA, leading several nations to regulate them like conventional breeding."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 16: CONTINUITY THROUGH EVOLUTION (14 Questions)
  // =========================================================================
  {
    id: "sec_bot_16",
    title: "Chapter 16: Continuity through Evolution",
    description: "Darwinian natural selection in plants, evidence of plant evolution, homologous vs analogous structures, transitional plant fossils, and adaptation.",
    activities: [
      {
        id: "act_bot_16_lesson",
        type: "page",
        title: "Module 16.1: Evolutionary Mechanisms in the Plant Kingdom",
        completed: true,
        content: `### 1. Darwinian Natural Selection in Plants
Charles Darwin established that evolution proceeds via natural selection based on four core observations:
1. **Overproduction:** Plants produce far more seeds and progeny than can possibly survive on limited environmental resources.
2. **Genetic Variation:** Individuals within a population exhibit heritable phenotypic variations in morphology, physiological tolerances, and disease resistance.
3. **Differential Survival and Reproduction:** Environmental pressures (drought, herbivory, soil salinity, light competition) favor individuals with advantageous traits, enabling them to survive and produce more viable seeds.
4. **Adaptation:** Over generations, favorable heritable alleles increase in frequency, shaping the population to its ecological niche.

### 2. Evidence for Plant Evolution
- **The Fossil Record:** Paleobotanical evidence tracks major terrestrial transitions:
  - Ordovician (~470 Ma): First fossilized land plant spores (trilete spores) showing protective sporopollenin coats.
  - Silurian (~425 Ma): Earliest vascular plant megafossils (*Cooksonia*), showing simple dichotomously branching leafless axes with terminal sporangia.
  - Devonian (~380 Ma): Evolution of vascular roots, leaves (**microphylls** and **megaphylls**), secondary wood, and the earliest seeds (*Elkinsia*).
  - Carboniferous (~300 Ma): Colossal swamp forests of lycophyte trees (*Lepidodendron*) and giant horsetails (*Calamites*) forming modern coal deposits.
- **Homologous vs. Analogous Structures:**
  - *Homologous Structures:* Anatomical features derived from a common evolutionary ancestor despite differing contemporary functions (e.g., the leaves of an oak, the defensive spines of a cactus, the floral petals of an orchid, and the pitcher traps of *Nepenthes* are all homologous modified leaves).
  - *Analogous Structures:* Morphologically similar structures resulting from **convergent evolution** in similar environments without close common ancestry (e.g., the succulent, spiny desert stems of New World Cactaceae and Old World Euphorbiaceae).
- **Comparative Molecular Systematics:** DNA sequence comparisons of conserved chloroplast genes (such as *rbcL* encoding the large subunit of Rubisco) construct phylogenetic trees mapping evolutionary divergences across land plants.`
      },
      {
        id: "quiz_bot_16",
        type: "quiz",
        title: "🌿 Chapter 16 Checkpoint: Evolutionary Theory, Fossil Evidence & Plant Adaptations",
        completed: false,
        questions: [
          {
            question: "According to Charles Darwin's theory of evolution by natural selection, what is the primary mechanism driving evolutionary change in plant populations?",
            options: [
              "Differential reproductive success of individuals possessing heritable traits that enhance survival in their environment",
              "Intentional genetic modifications made by individual plants during their lifetime",
              "The inheritance of acquired physical damage caused by herbivores",
              "Spontaneous generation of new plant species from mud"
            ],
            correct: 0,
            explanation: "Natural selection operates when heritable variations influence reproductive success; individuals with advantageous adaptations leave more offspring."
          },
          {
            question: "Cooksonia, discovered in Silurian rock strata dating to over 420 million years ago, is recognized in paleobotany as:",
            options: [
              "One of the earliest known macroscopic vascular land plant fossils",
              "A giant prehistoric flowering oak tree",
              "The first dinosaur fossil",
              "An ancient fossilized potato tuber"
            ],
            correct: 0,
            explanation: "Cooksonia was a primitive, leafless, rootless vascular plant featuring simple dichotomously branched stems capped by terminal sporangia."
          },
          {
            question: "The spines of a desert cactus, the climbing tendrils of a pea, and the carnivorous trap of a pitcher plant all develop from modified leaves. These organs are:",
            options: [
              "Homologous structures",
              "Analogous structures",
              "Vestigial enzymes",
              "Artificial mutations"
            ],
            correct: 0,
            explanation: "Homologous structures share a common ancestral and developmental origin (here, the ancestral leaf), despite having evolved diverse specialized functions."
          },
          {
            question: "The striking visual resemblance between desert cacti in North America and succulent spurges (Euphorbia) in African deserts is an example of:",
            options: [
              "Convergent Evolution (yielding analogous structures)",
              "Direct hybridization between continents",
              "Identical Mendelian crossing-over",
              "Artificial human selection"
            ],
            correct: 0,
            explanation: "Convergent evolution occurs when unrelated evolutionary lineages adapt independently to similar arid environmental selection pressures, producing similar succulent forms."
          },
          {
            question: "What durable, chemically inert biopolymer impregnates the outer walls of plant spores and pollen grains, allowing them to survive for millions of years in fossil beds?",
            options: [
              "Sporopollenin",
              "Cellulose",
              "Starch",
              "Chitin"
            ],
            correct: 0,
            explanation: "Sporopollenin is an extraordinarily resilient biopolymer that shields spores and pollen against desiccation, UV radiation, and microbial decay."
          },
          {
            question: "Most of Earth's vast commercial coal reserves were formed during which geological period from the compressed remains of giant seedless vascular forests?",
            options: [
              "The Carboniferous Period (~300-360 million years ago)",
              "The Cambrian Explosion",
              "The Pleistocene Ice Age",
              "The Jurassic Period"
            ],
            correct: 0,
            explanation: "The Carboniferous period featured extensive swamp forests of giant lycophyte trees (Lepidodendron) whose un-decomposed woody biomass formed coal beds."
          },
          {
            question: "A non-functional or greatly reduced anatomical structure that served an important purpose in an ancestral lineage is termed a:",
            options: [
              "Vestigial structure",
              "Homologous structure",
              "Convergent organ",
              "Meristematic defect"
            ],
            correct: 0,
            explanation: "Vestigial structures are evolutionary remnants that have lost their primary ancestral ancestral function (e.g., non-photosynthetic scale leaves on underground rhizomes)."
          },
          {
            question: "Which chloroplast gene, encoding the large subunit of the photosynthetic enzyme Rubisco, is extensively sequenced by plant systematists to infer phylogenetic relationships?",
            options: [
              "rbcL",
              "Cry1Ac",
              "EPSPS",
              "p53"
            ],
            correct: 0,
            explanation: "The rbcL gene is highly conserved and present in all photosynthetic plants, making it a standard molecular sequence for reconstructing plant phylogeny."
          },
          {
            question: "What evolutionary innovation in vascular leaves distinguishes broad megaphylls (with branching vein networks) from primitive single-veined microphylls?",
            options: [
              "Megaphylls evolved from the flattening (planation) and webbing of entire branched stem systems",
              "Megaphylls contain no vascular tissue",
              "Megaphylls develop exclusively from root hairs",
              "Microphylls are found only on giant flowering trees"
            ],
            correct: 0,
            explanation: "The telome theory explains that megaphylls evolved through the overtopping, planation, and webbed tissue expansion of branched photosynthetic stem systems."
          },
          {
            question: "What was the critical evolutionary advantage of the Seed over primitive free-sporing reproduction in land plant history?",
            options: [
              "The seed encases a multicellular dormant embryo and a food supply within a protective coat, eliminating the need for swimming sperm in external water",
              "Seeds reproduce without any chromosomes",
              "Seeds can only survive under water",
              "Seeds eliminated the sporophyte generation"
            ],
            correct: 0,
            explanation: "Seeds protect the dormant diploid embryo with a food reserve, allowing reproduction across dry terrestrial habitats without requiring water films for sperm."
          },
          {
            question: "Artificial selection differs fundamentally from natural selection because in artificial selection:",
            options: [
              "Humans deliberately choose which individual plants with desirable traits are bred, directing the evolutionary trajectory",
              "Wild predators determine which plants survive",
              "Mutations never occur",
              "Plants select their own human owners"
            ],
            correct: 0,
            explanation: "Artificial selection is driven by human preference (e.g., breeding wild Brassica oleracea into cabbage, broccoli, kale, cauliflower, and kohlrabi)."
          },
          {
            question: "The geographic distribution of modern and fossil plant taxa across different continents (such as the southern hemisphere Glossopteris flora) supports the theory of:",
            options: [
              "Plate Tectonics and Continental Drift (Biogeography)",
              "Global volcanic spontaneous creation",
              "Artificial plant dispersal by migratory birds in the Silurian",
              "Constant static positioning of continents"
            ],
            correct: 0,
            explanation: "The distribution of fossil seed fern Glossopteris across South America, Africa, India, Antarctica, and Australia provided prime evidence for the ancient supercontinent Gondwana."
          },
          {
            question: "What major evolutionary transition occurred approximately 140 million years ago during the early Cretaceous period, fundamentally reshaping terrestrial ecosystems?",
            options: [
              "The emergence and explosive radiation of Flowering Plants (Angiosperms)",
              "The extinction of all vascular plants",
              "The first evolution of green algae in oceans",
              "The total loss of all chloroplasts"
            ],
            correct: 0,
            explanation: "Angiosperms arose in the early Cretaceous, rapidly diversifying via animal co-pollination and closed carpels to become the dominant plant group on Earth."
          },
          {
            question: "The evolutionary history and genealogical lineage of relationships among a group of plant organisms is depicted graphically as a:",
            options: [
              "Phylogenetic Tree (Cladogram)",
              "Punnett Square",
              "Normal distribution bell curve",
              "Karyotype"
            ],
            correct: 0,
            explanation: "A phylogenetic tree or cladogram maps branching evolutionary lineages, common ancestors, and shared derived characteristics (synapomorphies)."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 17: THE EVOLUTION OF POPULATIONS AND SPECIES (16 Questions)
  // =========================================================================
  {
    id: "sec_bot_17",
    title: "Chapter 17: The Evolution of Populations and Species",
    description: "Hardy-Weinberg equilibrium, microevolution, genetic drift, gene flow, speciation mechanisms, and the unique role of polyploidy in plant evolution.",
    activities: [
      {
        id: "act_bot_17_lesson",
        type: "page",
        title: "Module 17.1: Population Genetics & Speciation Mechanisms",
        completed: true,
        content: `### 1. Population Genetics & Microevolution
Microevolution is the change in allele frequencies within a plant population's gene pool across generations:
- **Hardy-Weinberg Principle:** Allele and genotypic frequencies remain constant ($p^2 + 2pq + q^2 = 1$) under five equilibrium conditions: (1) no mutation, (2) no gene flow (isolation), (3) large population size (no genetic drift), (4) random mating, and (5) no natural selection.
- **Microevolutionary Forces:**
  - *Mutation:* The ultimate origin of novel genetic variation.
  - *Genetic Drift:* Random fluctuations in allele frequencies due to chance sampling error in small populations:
    - *Bottleneck Effect:* Drastic population reduction due to catastrophes (floods, fires, habitat fragmentation), randomly purging alleles.
    - *Founder Effect:* A few seeds colonize an isolated island, carrying only a fraction of the parent gene pool.
  - *Gene Flow:* Transfer of alleles between populations via pollen or seed dispersal.
  - *Natural Selection:* The only evolutionary force consistently producing adaptive change (stabilizing, directional, or disruptive selection).

### 2. Speciation in Plants
Speciation is the evolutionary divergence of reproductive lineages:
- **Allopatric Speciation:** Geographically isolated populations accumulate genetic differences (via mutation and selection) until reproductive isolating barriers prevent interbreeding upon reunion.
- **Sympatric Speciation:** Speciation occurring within the same geographic area without physical isolation.

### 3. Polyploidy: The Engine of Plant Speciation
Unlike animals (where extra chromosome sets are almost universally lethal), **polyploidy** (possessing three or more complete sets of chromosomes, $>3n$) is a primary driver of instant sympatric speciation in plants (~50-70% of all angiosperms have polyploid ancestry):
- **Autopolyploidy:** An individual receives multiple chromosome sets derived from a single parental species, usually via nondisjunction of chromosomes during gamete formation ($2n$ gamete fuses with $1n$ gamete $\\rightarrow 3n$ sterile triploid; or two $2n$ gametes fuse $\\rightarrow 4n$ fertile autotetraploid). Autotetraploids cannot produce fertile offspring with $2n$ parents, creating instant reproductive isolation.
- **Allopolyploidy:** Two different species hybridize, followed by chromosome doubling that restores fertile pairing of homologous chromosomes:
  - *Bread Wheat (Triticum aestivum):* An allohexaploid ($2n = 42$) derived from the sequential hybridization and chromosome doubling of three distinct wild diploid diploid grass species ($AA \\times BB \\rightarrow AABB \\times DD \\rightarrow AABBDD$).
  - Many premier economic crops (cotton, tobacco, potatoes, strawberries, sugarcane) are allopolyploids, exhibiting **hybrid vigor (heterosis)**, larger cell size, and greater ecological adaptability.`
      },
      {
        id: "quiz_bot_17",
        type: "quiz",
        title: "🌿 Chapter 17 Checkpoint: Population Genetics, Polyploidy & Speciation",
        completed: false,
        questions: [
          {
            question: "What genetic condition describes an organism possessing three or more complete sets of chromosomes (e.g., 3n, 4n, 6n), serving as a major mechanism of instant plant speciation?",
            options: [
              "Polyploidy",
              "Aneuploidy",
              "Heterozygosity",
              "Transversion"
            ],
            correct: 0,
            explanation: "Polyploidy is the possession of multiple complete chromosome sets; it is extraordinarily common in plants and drives rapid sympatric speciation."
          },
          {
            question: "How does Autopolyploidy differ fundamentally from Allopolyploidy?",
            options: [
              "Autopolyploids derive multiple chromosome sets from a single species; Allopolyploids arise through interspecific hybridization between two different species followed by chromosome doubling",
              "Autopolyploids occur only in animals; allopolyploids occur only in fungi",
              "Autopolyploids have no DNA",
              "There is no difference; they are exact synonyms"
            ],
            correct: 0,
            explanation: "Autopolyploidy involves genome duplication within one species; allopolyploidy involves interspecific hybridization between two different species followed by genome doubling."
          },
          {
            question: "Modern commercial bread wheat (Triticum aestivum) is an allohexaploid possessing 42 chromosomes (2n = 42). This means it contains:",
            options: [
              "Six complete sets of chromosomes derived from three distinct ancestral wild grass species",
              "A single haploid set of chromosomes",
              "Zero pairs of homologous chromosomes",
              "Forty-two independent gene mutations"
            ],
            correct: 0,
            explanation: "Bread wheat is an allohexaploid ($6n$) combining the complete genomes of three distinct diploid wild grass ancestors ($AA, BB, DD$)."
          },
          {
            question: "In population genetics, what does the Hardy-Weinberg equation ($p^2 + 2pq + q^2 = 1$) describe?",
            options: [
              "The expected genotype frequencies in a non-evolving population in genetic equilibrium",
              "The speed of pollen tube growth down the style",
              "The exact number of seeds produced by an oak tree",
              "The rate of transpirational water loss in leaves"
            ],
            correct: 0,
            explanation: "The Hardy-Weinberg equation calculates allele and genotype frequencies under theoretical equilibrium conditions where no microevolution is occurring."
          },
          {
            question: "Random fluctuations in allele frequencies within a small, isolated plant population caused purely by chance events are termed:",
            options: [
              "Genetic Drift",
              "Natural selection",
              "Gene flow",
              "Polyploidy"
            ],
            correct: 0,
            explanation: "Genetic drift is the random fluctuation of allele frequencies across generations due to sampling errors, operating most powerfully in small populations."
          },
          {
            question: "When a single stray coconut washes ashore on an isolated volcanic atoll and founds a new island population carrying only a tiny fraction of the mainland genetic diversity, this is:",
            options: [
              "The Founder Effect",
              "A Population Bottleneck",
              "Sympatric speciation",
              "Directional selection"
            ],
            correct: 0,
            explanation: "The founder effect occurs when a new colony is established by a small number of founders, uncharacteristically skewing allele frequencies relative to the source population."
          },
          {
            question: "A catastrophic forest fire wipes out 98% of an endangered pine population, leaving only a dozen surviving trees with heavily restricted genetic variation. This illustrates:",
            options: [
              "A Population Bottleneck",
              "The Founder effect",
              "Hardy-Weinberg equilibrium",
              "Allopolyploidy"
            ],
            correct: 0,
            explanation: "A population bottleneck occurs when an environmental catastrophe drastically reduces population size, eliminating alleles at random."
          },
          {
            question: "The physical exchange of alleles between two distinct plant populations mediated by windborne pollen or animal seed dispersal is called:",
            options: [
              "Gene Flow (Migration)",
              "Genetic drift",
              "Polyploidization",
              "Directional selection"
            ],
            correct: 0,
            explanation: "Gene flow is the movement of genetic material between populations via dispersing gametes (pollen) or individuals (seeds), reducing genetic divergence between populations."
          },
          {
            question: "Why are triploid (3n) crop plants (such as commercial seedless watermelons and Cavendish bananas) sterile and unable to produce seeds?",
            options: [
              "The three sets of chromosomes cannot pair up evenly during Meiosis I, resulting in chaotic chromosome segregation and defective gametes",
              "They lack cell walls",
              "They cannot perform cellular respiration",
              "They refuse to produce chlorophyll"
            ],
            correct: 0,
            explanation: "Triploids ($3n$) have an odd number of chromosome homologs that cannot pair symmetrically during Meiosis I, leading to meiotic failure and seedlessness."
          },
          {
            question: "Speciation that occurs when a physical geographic barrier (such as a newly formed mountain range or canyon) splits a plant population into two isolated groups is:",
            options: [
              "Allopatric Speciation",
              "Sympatric Speciation",
              "Autopolyploidization",
              "Artificial selection"
            ],
            correct: 0,
            explanation: "Allopatric speciation requires geographic separation preventing gene flow, allowing isolated populations to diverge through independent mutations and selective regimes."
          },
          {
            question: "Speciation that occurs within a continuous, shared geographic area without physical isolation (frequently driven by polyploid chromosome doubling in plants) is:",
            options: [
              "Sympatric Speciation",
              "Allopatric Speciation",
              "Genetic drift",
              "Macroevolutionary bottlenecking"
            ],
            correct: 0,
            explanation: "Sympatric speciation occurs within the geographic home range of the parent population, often mediated instantaneously by polyploidy or pollinator shifts."
          },
          {
            question: "What term describes the enhanced vigor, accelerated growth rate, larger biomass, and greater stress resilience often observed in allopolyploid hybrid plants compared to their diploid parents?",
            options: [
              "Heterosis (Hybrid Vigor)",
              "Inbreeding depression",
              "Aneuploid decay",
              "Etiolation"
            ],
            correct: 0,
            explanation: "Heterosis (hybrid vigor) is the phenotypic superiority of hybrid offspring in biomass, yield, and fertility over either homozygous parental strain."
          },
          {
            question: "Prezygotic reproductive isolating barriers in flowering plants include which of the following?",
            options: [
              "Different flowering seasons (temporal isolation) or reliance on different specialized insect pollinators (mechanical/behavioral isolation)",
              "Hybrid seed sterility",
              "Death of the hybrid embryo after fertilization",
              "Inability of adult hybrid plants to produce pollen"
            ],
            correct: 0,
            explanation: "Prezygotic barriers prevent successful mating or fertilization (e.g., temporal shifts in flowering times, structural flower differences for pollinators)."
          },
          {
            question: "Chemical treatment of germinating seedlings with Colchicine is used by plant breeders to induce:",
            options: [
              "Polyploidy (by disrupting mitotic spindle microtubules, preventing chromosome segregation during cell division)",
              "Immediate root rot",
              "Accelerated fruit ripening via ethylene release",
              "Viral resistance"
            ],
            correct: 0,
            explanation: "Colchicine inhibits microtubule polymerization, arresting dividing cells in metaphase; when the drug is removed, cells recover with doubled chromosome numbers."
          },
          {
            question: "Natural selection that favors individuals at both phenotypic extremes while selecting against intermediate phenotypes in a plant population is:",
            options: [
              "Disruptive (Diversifying) Selection",
              "Stabilizing Selection",
              "Directional Selection",
              "Random genetic drift"
            ],
            correct: 0,
            explanation: "Disruptive selection favors both extreme ends of a phenotypic spectrum over intermediate forms, potentially driving population divergence."
          },
          {
            question: "Natural selection that favors individuals at one specific end of a phenotypic distribution (for example, favoring plants with deeper roots during prolonged climatic drought) is:",
            options: [
              "Directional Selection",
              "Stabilizing Selection",
              "Disruptive Selection",
              "Balancing Selection"
            ],
            correct: 0,
            explanation: "Directional selection shifts the population's average phenotypic value toward one adaptive extreme in response to consistent environmental changes."
          }
        ]
      }
    ]
  }
];
