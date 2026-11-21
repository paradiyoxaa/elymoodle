module.exports = [
  // =========================================================================
  // CHAPTER 1: AN INTRODUCTION TO THE SCIENCE OF BOTANY (12 Questions)
  // =========================================================================
  {
    id: "sec_bot_1",
    title: "Chapter 1: An Introduction to the Science of Botany",
    description: "The nature of scientific inquiry, characteristics of living plant organisms, plant evolution, and human reliance on plants.",
    activities: [
      {
        id: "act_bot_1_lesson",
        type: "page",
        title: "Module 1.1: The Science of Botany & The Plant Kingdom",
        completed: true,
        content: `### 1. What Is Botany?
Botany is the scientific study of plants and plant-like organisms (including algae and fungi, historically studied under botanical traditions). In *Introductory Botany*, Linda R. Berg emphasizes that plants are not merely passive scenery, but active primary producers that generate the oxygen we breathe, drive global biogeochemical cycles, and form the trophic foundation of terrestrial ecosystems.

### 2. Core Characteristics of Living Plant Organisms
Living plants display seven fundamental biological properties:
1. **Cellular Organization:** Composed of eukaryotic cells encased in cellulose-rich cell walls.
2. **Metabolism & Energy Capture:** Capable of autotrophic nutrition through oxygenic photosynthesis, capturing solar electromagnetic energy.
3. **Homeostasis:** Regulating internal osmotic balance, water potential, and stomatal gas exchange.
4. **Growth & Morphogenesis:** Sustaining indeterminate, localized growth mediated by active meristematic zones.
5. **Responsiveness to Stimuli:** Altering growth direction via tropisms (phototropism, gravitropism, thigmotropism) and circadian rhythms.
6. **Reproduction & Life Cycles:** Exhibiting an alternation of generations between multicellular haploid (gametophyte) and diploid (sporophyte) phases.
7. **Evolutionary Adaptation:** Undergoing natural selection, generating morphological and physiological adaptations for terrestrial survival.

### 3. The Scientific Method in Botany
Botanical discoveries advance through empirical hypothesis testing:
- **Observation:** Formulating questions from natural phenomena.
- **Hypothesis:** Generating a tentative, testable, and falsifiable explanation.
- **Controlled Experimentation:** Isolating independent variables while holding environmental factors constant across control and experimental cohorts.
- **Theory Formulation:** Developing comprehensive conceptual frameworks supported by vast bodies of replicable empirical data.

### 4. Plants, People, and the Environment (Ethnobotany)
Human civilization is fundamentally rooted in plant domestication. The Neolithic agricultural transition (~10,000 years ago) with wheat, barley, rice, and maize transformed nomadic foragers into settled civilizations. Plants furnish timber, textiles (cotton, linen), pharmaceuticals (aspirin from willow bark, taxol from Pacific yew), and regulate atmospheric carbon dioxide balances.`
      },
      {
        id: "quiz_bot_1",
        type: "quiz",
        title: "🌿 Chapter 1 Checkpoint: Introduction to Botany & Plant Science",
        completed: false,
        questions: [
          {
            question: "What is the formal biological definition of Botany?",
            options: [
              "The chemical manufacturing of synthetic fertilizers",
              "The scientific study of plants, algae, and historically related photosynthetic organisms",
              "The commercial retail sale of garden ornamental flowers",
              "The exclusive veterinary care of herbivorous farm animals"
            ],
            correct: 1,
            explanation: "Botany is the empirical scientific discipline investigating plant biology, physiology, anatomy, morphology, genetics, ecology, and human-plant relationships."
          },
          {
            question: "Which of the following is a universal characteristic distinguishing plants from animals?",
            options: [
              "Plants lack cellular nuclei and mitochondria",
              "Plants are multicellular autotrophic eukaryotes possessing cellulose cell walls and chloroplasts",
              "Plants are heterotrophic organisms that ingest preformed organic matter",
              "Plants reproduce exclusively through asexual budding"
            ],
            correct: 1,
            explanation: "Plants are multicellular photosynthetic eukaryotes characterized by plastids (chloroplasts), rigid cell walls containing cellulose, and alternation of generations."
          },
          {
            question: "In the scientific method, what fundamental property must any valid scientific hypothesis possess?",
            options: [
              "It must be mathematically approved by government regulators",
              "It must be capable of being tested and falsified by empirical evidence",
              "It must agree with established ancient philosophical doctrines",
              "It must remain unchanged even if contradictory data is observed"
            ],
            correct: 1,
            explanation: "A scientific hypothesis must be testable and falsifiable—there must be possible empirical observations that could refute it."
          },
          {
            question: "What role do green plants perform in the global carbon cycle?",
            options: [
              "They act as major carbon sinks by absorbing atmospheric carbon dioxide during photosynthesis",
              "They permanently convert all atmospheric carbon into radioactive isotopes",
              "They produce carbon dioxide continuously without releasing any oxygen",
              "They have zero interaction with atmospheric gases"
            ],
            correct: 0,
            explanation: "Through photosynthesis, plants fix gaseous carbon dioxide into organic carbohydrates, functioning as primary terrestrial carbon sinks."
          },
          {
            question: "The subdiscipline of botany that focuses specifically on how different human cultures utilize indigenous plants for food, medicine, and textiles is:",
            options: [
              "Paleobotany",
              "Ethnobotany",
              "Plant Cytology",
              "Bryology"
            ],
            correct: 1,
            explanation: "Ethnobotany investigates the traditional cultural and practical knowledge and customs concerning the utilization of indigenous plants by human societies."
          },
          {
            question: "Which ancient agricultural crop was first domesticated in the Fertile Crescent, facilitating the rise of settled human civilizations?",
            options: [
              "Wheat and Barley",
              "Maize (Corn)",
              "Potatoes",
              "Soybeans"
            ],
            correct: 0,
            explanation: "The domestication of emmer wheat, einkorn wheat, and barley in the Fertile Crescent around 10,000 BCE marked the dawn of Neolithic agriculture."
          },
          {
            question: "In a botanical experiment testing the effect of nitrogen fertilizer concentrations on soybean yield, the nitrogen concentration represents the:",
            options: [
              "Dependent variable",
              "Independent variable",
              "Confounding variable",
              "Standard deviation"
            ],
            correct: 1,
            explanation: "The independent variable is the condition systematically varied or manipulated by the experimenter (nitrogen level) to observe its effect on the measured outcome."
          },
          {
            question: "The anticancer chemotherapy medication Taxol (paclitaxel) was famously discovered from which botanical species?",
            options: [
              "The Willow tree (Salix alba)",
              "The Pacific Yew (Taxus brevifolia)",
              "The Foxglove plant (Digitalis purpurea)",
              "The Madagascar Periwinkle (Catharanthus roseus)"
            ],
            correct: 1,
            explanation: "Taxol, a potent inhibitor of cellular microtubule disassembly used in breast and ovarian cancer therapies, was isolated from the bark of the Pacific Yew."
          },
          {
            question: "Which term describes a plant's ability to maintain a stable, balanced internal physiological state despite environmental fluctuations?",
            options: [
              "Homeostasis",
              "Indeterminate growth",
              "Apical dominance",
              "Heterotrophy"
            ],
            correct: 0,
            explanation: "Homeostasis refers to physiological mechanisms (e.g., stomatal regulation, ionic pumps) that maintain chemical and physical equilibrium within living plant tissues."
          },
          {
            question: "Why are plants classified as 'primary producers' in ecological trophic webs?",
            options: [
              "They hunt and consume herbivorous primary consumers",
              "They synthesize organic energy-rich molecules from inorganic raw materials using solar radiation",
              "They decompose rock minerals without utilizing light",
              "They exist at the absolute top of the food chain"
            ],
            correct: 1,
            explanation: "Plants are autotrophs; they capture sunlight to convert carbon dioxide and water into glucose, producing the organic energy base for all heterotrophic consumers."
          },
          {
            question: "Which branch of botany specializes in the study of fossil plants and the evolutionary history of plant life on Earth?",
            options: [
              "Plant Pathology",
              "Paleobotany",
              "Dendrology",
              "Economic Botany"
            ],
            correct: 1,
            explanation: "Paleobotany is the paleontological branch of botany recovering and identifying plant fossil remains to reconstruct evolutionary lineages and prehistoric environments."
          },
          {
            question: "Which of the following environmental problems is directly exacerbated by global deforestation?",
            options: [
              "Increased atmospheric carbon dioxide accumulation and loss of biological diversity",
              "Rapid global depletion of atmospheric nitrogen gas",
              "Excessive reduction of global soil salinity",
              "Immediate cessation of all tectonic volcanic activity"
            ],
            correct: 0,
            explanation: "Deforestation reduces photosynthetic carbon absorption, releases stored forest biomass carbon into the atmosphere, accelerates soil erosion, and drives species extinction."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 2: THE CHEMICAL COMPOSITION OF CELLS (16 Questions)
  // =========================================================================
  {
    id: "sec_bot_2",
    title: "Chapter 2: The Chemical Composition of Cells",
    description: "Inorganic and organic molecules in plant life, properties of water, carbohydrates, lipids, proteins, and nucleic acids.",
    activities: [
      {
        id: "act_bot_2_lesson",
        type: "page",
        title: "Module 2.1: Macromolecules & Biochemistry of Plant Cells",
        completed: true,
        content: `### 1. Water: The Biological Medium for Plant Life
Water comprises 80% to 95% of growing plant tissue mass. Its unique chemical architecture—a polar covalent molecule capable of extensive hydrogen bonding—confers vital properties:
- **Cohesion & Adhesion:** Cohesion (water molecules clinging to one another) and adhesion (water clinging to hydrophilic xylem walls) enable transpirational pull through capillary conduits over 100 meters high.
- **High Specific Heat & Heat of Vaporization:** Buffers plants against rapid thermal shocks and powers evaporative cooling during transpiration.
- **Universal Solvent:** Solubilizes essential mineral ions (nitrate, phosphate, potassium) for root uptake.

### 2. Carbohydrates in Plants
Carbohydrates are the primary structural and energy storage molecules:
- **Monosaccharides:** Glucose ($C_6H_{12}O_6$) and fructose, generated through photosynthesis.
- **Disaccharides:** Sucrose, the primary transport carbohydrate in phloem sap.
- **Storage Polysaccharides:** Starch (amylose and amylopectin), stored inside amyloplasts in seeds, roots, and tubers.
- **Structural Polysaccharides:** Cellulose, forming rigid microfibrils in cell walls, joined by $\beta$-1,4-glycosidic linkages that resist enzymatic digestion.

### 3. Lipids: Membranes, Cuticles, and Energy
- **Phospholipids:** Amphipathic molecules forming the selectively permeable lipid bilayer of organellar and plasma membranes.
- **Triglycerides:** Fats and vegetable oils stored in oleosomes (e.g., canola, olive, sunflower seeds).
- **Cutin, Suberin, and Waxes:** Complex hydrophobic polymers forming the protective leaf cuticle and the Casparian strip of roots, minimizing non-stomatal water evaporation.

### 4. Proteins and Enzymes
Proteins are linear polymers of amino acids folded into intricate three-dimensional conformations:
- **Enzymatic Catalysis:** Biological catalysts like Rubisco (Ribulose-1,5-bisphosphate carboxylase-oxygenase), the most abundant enzyme on Earth, catalyzing photosynthetic carbon fixation.
- **Structural Proteins:** Glycoproteins (extensins) in cell walls that govern wall extensibility during cell elongation.

### 5. Secondary Metabolites (Phytochemicals)
Plants produce thousands of specialized non-primary chemical compounds:
- **Alkaloids:** Nitrogenous, bitter defense compounds (caffeine, nicotine, morphine, quinine).
- **Terpenoids:** Isoprene-derived volatile compounds (menthol, pine resins, natural rubber).
- **Phenolics:** Aromatic compounds including flavonoids, anthocyanin pigments (red/purple floral attractants), and lignin (the hardening polymer of vascular wood).`
      },
      {
        id: "quiz_bot_2",
        type: "quiz",
        title: "🌿 Chapter 2 Checkpoint: Plant Biochemistry & Molecular Constituents",
        completed: false,
        questions: [
          {
            question: "Why is the polar nature of water molecules biologically indispensable for vascular plant transport?",
            options: [
              "It enables water molecules to repel one another and evaporate instantly",
              "It allows hydrogen bonding, generating high tensile cohesive strength that pulls continuous water columns up the xylem",
              "It prevents water from dissolving any mineral salts",
              "It transforms water into an electrical insulator inside the root cortex"
            ],
            correct: 1,
            explanation: "Hydrogen bonding creates high cohesion among water molecules, allowing transpirational tension to pull unbroken water columns from roots to leaves through xylem conduits."
          },
          {
            question: "What is the principal transport sugar moved through the phloem of vascular plants?",
            options: [
              "Glucose",
              "Sucrose",
              "Starch",
              "Cellulose"
            ],
            correct: 1,
            explanation: "Sucrose (a non-reducing disaccharide composed of glucose and fructose) is chemically stable and serves as the universal transport sugar in phloem translocation."
          },
          {
            question: "Which structural polysaccharide is the primary organic component of the plant cell wall?",
            options: [
              "Glycogen",
              "Cellulose",
              "Chitin",
              "Amylose"
            ],
            correct: 1,
            explanation: "Cellulose consists of unbranched chains of beta-glucose units joined by beta-1,4-glycosidic bonds, bundling into rigid crystalline microfibrils."
          },
          {
            question: "In what chemical form do plants primarily store excess energy reserves in roots, tubers, and seeds?",
            options: [
              "Glycogen",
              "Starch",
              "Lignin",
              "Wax esters"
            ],
            correct: 1,
            explanation: "Plants convert glucose into starch (a mixture of amylose and branched amylopectin polysaccharides) for long-term osmotic-neutral energy storage."
          },
          {
            question: "Rubisco is widely recognized by plant biochemists as:",
            options: [
              "A structural wax that seals the stomatal pores",
              "The most abundant enzyme on Earth, catalyzing photosynthetic carbon dioxide fixation",
              "A dangerous alkaloid toxin found in potato leaves",
              "The pigment that gives carrots their orange hue"
            ],
            correct: 1,
            explanation: "Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygenase) constitutes up to 50% of soluble leaf protein, fixing CO2 during the Calvin cycle."
          },
          {
            question: "Which class of plant lipids forms the hydrophobic waxy layer (cuticle) that covers the aerial epidermis of leaves and stems to prevent desiccation?",
            options: [
              "Phospholipids",
              "Cutin and Suberin",
              "Triglycerides",
              "Ribosomal nucleic acids"
            ],
            correct: 1,
            explanation: "Cutin and suberin, combined with surface waxes, form hydrophobic barriers that drastically restrict non-stomatal transpirational water loss."
          },
          {
            question: "Which complex polyphenolic polymer impregnates secondary cell walls, providing compressive mechanical rigidity to wood and waterproof sealing to xylem vessels?",
            options: [
              "Pectin",
              "Lignin",
              "Cellulose",
              "Glucan"
            ],
            correct: 1,
            explanation: "Lignin is an intricate aromatic polymer deposited in secondary cell walls; it confers structural strength to trees and prevents xylem collapse under negative pressure."
          },
          {
            question: "Caffeine, nicotine, morphine, and atropine belong to which diverse group of nitrogen-containing plant secondary metabolites?",
            options: [
              "Alkaloids",
              "Terpenoids",
              "Flavonoids",
              "Carotenoids"
            ],
            correct: 0,
            explanation: "Alkaloids are nitrogenous organic bases produced by plants primarily as chemical deterrents against herbivores and pathogen infections."
          },
          {
            question: "The red, purple, and blue water-soluble pigments found dissolved within the central vacuoles of flower petals and autumn leaves are:",
            options: [
              "Chlorophylls",
              "Anthocyanins",
              "Carotenes",
              "Xanthophylls"
            ],
            correct: 1,
            explanation: "Anthocyanins are flavonoid phenolic pigments located in the vacuolar sap, providing vibrant red to purple coloration that attracts animal pollinators."
          },
          {
            question: "What is the primary biological role of plant cell phospholipids?",
            options: [
              "Serving as the main caloric energy store in cereal grains",
              "Forming the selectively permeable lipid bilayer of biological membranes",
              "Cross-linking cellulose fibers in the middle lamella",
              "Transmitting genetic code to ribosomes"
            ],
            correct: 1,
            explanation: "Phospholipids have hydrophilic phosphate heads and hydrophobic fatty acid tails, naturally assembling into the bilayer foundation of cell membranes."
          },
          {
            question: "Proteins are polymers composed of which repeating monomer subunits joined by peptide bonds?",
            options: [
              "Monosaccharides",
              "Fatty acids",
              "Amino acids",
              "Nucleotides"
            ],
            correct: 2,
            explanation: "Proteins are constructed from linear sequences of 20 standard amino acids folded into complex functional secondary, tertiary, and quaternary structures."
          },
          {
            question: "Which nucleotide acts as the universal chemical energy currency in plant cellular metabolism?",
            options: [
              "Adenosine Triphosphate (ATP)",
              "Deoxyribonucleic acid (DNA)",
              "Ribulose biphosphate",
              "Nicotinamide adenine dinucleotide phosphate"
            ],
            correct: 0,
            explanation: "ATP transfers chemical energy via the hydrolysis of its high-energy phosphoanhydride bonds to drive endergonic cellular reactions."
          },
          {
            question: "What chemical property explains why vegetable oils (e.g., olive oil, sunflower oil) remain liquid at room temperature whereas animal fats are solid?",
            options: [
              "Plant oil triglycerides contain a high proportion of unsaturated fatty acids with cis-double bonds that introduce kinks",
              "Plant oils contain zero carbon atoms",
              "Plant oils are composed entirely of pure water",
              "Plant oils lack ester linkages"
            ],
            correct: 0,
            explanation: "Unsaturated fatty acids have carbon-carbon double bonds that produce kinks in the carbon chain, preventing tight molecular packing and lowering the melting point."
          },
          {
            question: "Which plant polysaccharide is found within the middle lamella, acting as an intercellular cementing agent extracted commercially for making fruit jellies?",
            options: [
              "Cellulose",
              "Pectin",
              "Lignin",
              "Chitin"
            ],
            correct: 1,
            explanation: "Pectins are acidic polysaccharides that form a gel-like matrix in the middle lamella, gluing neighboring plant cell walls together."
          },
          {
            question: "Turpentine, pine resins, and natural rubber belong to which major class of phytochemicals built from five-carbon isoprene units?",
            options: [
              "Alkaloids",
              "Terpenoids",
              "Phenolics",
              "Glycoproteins"
            ],
            correct: 1,
            explanation: "Terpenoids (isoprenoids) are synthesized from repeating isoprene units; they include essential oils, carotenoids, rubber, and plant defense resins."
          },
          {
            question: "What type of chemical bond joins the adjacent nucleotide units in a single strand of plant DNA?",
            options: [
              "Peptide bonds",
              "Phosphodiester bonds",
              "Hydrogen bonds",
              "Glycosidic bonds"
            ],
            correct: 1,
            explanation: "Phosphodiester bonds covalently link the 3' carbon of one deoxyribose sugar to the 5' phosphate group of the adjacent nucleotide in the nucleic acid backbone."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 3: PLANT CELLS (18 Questions)
  // =========================================================================
  {
    id: "sec_bot_3",
    title: "Chapter 3: Plant Cells",
    description: "Plant cellular architecture, the cell wall, central vacuole, plastids, plasmodesmata, and membrane transport.",
    activities: [
      {
        id: "act_bot_3_lesson",
        type: "page",
        title: "Module 3.1: Ultrastructure of the Plant Cell",
        completed: true,
        content: `### 1. Unique Features of Plant Cells
While plant cells share common eukaryotic organelles (nucleus, endoplasmic reticulum, Golgi apparatus, mitochondria, ribosomes) with animal cells, they possess four distinct architectural hallmarks:
1. **Rigid Cell Wall:** External envelope containing cellulose microfibrils, hemicellulose, and pectin.
2. **Plastids:** Organelles specialized for photosynthesis, pigment accumulation, and storage.
3. **Large Central Vacuole:** Membrane-bound sac occupying up to 90% of mature cell volume.
4. **Plasmodesmata:** Microscopic cytoplasmic channels spanning cell walls for intercellular transport.

### 2. The Plant Cell Wall
The cell wall governs cell shape, supports tissue posture, and prevents osmotic lysis:
- **Middle Lamella:** Outermost pectin-rich cementing layer binding adjacent cells.
- **Primary Cell Wall:** Formed during active cell division and elongation; pliable and expandable, rich in cellulose and hemicellulose.
- **Secondary Cell Wall:** Deposited inside the primary wall after cell expansion ceases; thickened with multiple cellulose layers and reinforced with **lignin** (found in tracheids, vessels, and sclerenchyma fibers).

### 3. Plastids: Metabolic Factories
- **Chloroplasts:** Double-membrane organelles containing thylakoid membranes organized into grana stacks, embedded in aqueous stroma. Site of photosynthesis. Possess circular DNA and 70S ribosomes (endosymbiotic origin from cyanobacteria).
- **Chromoplasts:** Synthesize and store carotenoid pigments (carotenes and xanthophylls), providing orange, yellow, and red colors to fruits (tomatoes, peppers) and flowers.
- **Leucoplasts:** Non-pigmented plastids, including **amyloplasts** (synthesizing and storing starch grains) and **elaioplasts** (storing lipids).

### 4. The Central Vacuole and Turgor Pressure
Enclosed by a selectively permeable membrane called the **tonoplast**:
- Maintains **turgor pressure** by accumulating potassium and malate ions, drawing water osmotically to generate outward hydrostatic pressure against the cell wall. Turgor keeps non-woody stems upright.
- Stores metabolic wastes, defense toxins (nicotine, cardiac glycosides), and pigments (anthocyanins).
- Functions as a cellular recycling center analogous to animal lysosomes.

### 5. Plasmodesmata and Intercellular Symplast
Plasmodesmata are plasma-membrane-lined pores crossing cell walls, containing a narrow core of modified endoplasmic reticulum called the **desmotubule**:
- **Symplastic Pathway:** Continuous cytoplasmic network allowing transport of sugars, signaling proteins, and RNA between cells without crossing plasma membranes.
- **Apoplastic Pathway:** Extracellular space consisting of porous cell walls and intercellular spaces.`
      },
      {
        id: "quiz_bot_3",
        type: "quiz",
        title: "🌿 Chapter 3 Checkpoint: Plant Cellular Ultrastructure & Organelles",
        completed: false,
        questions: [
          {
            question: "Which of the following cellular structures is present in typical plant cells but completely absent in animal cells?",
            options: [
              "Endoplasmic reticulum",
              "Cellulose cell wall and plastids",
              "Mitochondria",
              "Golgi apparatus"
            ],
            correct: 1,
            explanation: "Plant cells are uniquely distinguished from animal cells by the presence of a rigid cellulose cell wall, plastids (such as chloroplasts), and a large central vacuole."
          },
          {
            question: "What is the name of the selectively permeable membrane that encloses the plant cell's central vacuole?",
            options: [
              "Plasmalemma",
              "Tonoplast",
              "Peroxisome",
              "Thylakoid"
            ],
            correct: 1,
            explanation: "The tonoplast (vacuolar membrane) bounds the central vacuole and contains transport proteins that regulate ion and metabolite fluxes into the vacuolar sap."
          },
          {
            question: "Microscopic cytoplasmic channels traversing plant cell walls to connect the cytoplasm of adjacent cells are called:",
            options: [
              "Tight junctions",
              "Desmosomes",
              "Plasmodesmata",
              "Aquaporins"
            ],
            correct: 2,
            explanation: "Plasmodesmata are membrane-lined channels connecting plant cells, facilitating direct symplastic transport of nutrients and signaling molecules."
          },
          {
            question: "The endosymbiotic theory explains that chloroplasts originated through the ancient engulfment of an autotrophic:",
            options: [
              "Cyanobacterium",
              "Methanogen",
              "Spirillum",
              "Virus"
            ],
            correct: 0,
            explanation: "Chloroplasts evolved through the endosymbiosis of an ancestral photosynthetic cyanobacterium inside a eukaryotic host, supported by their circular DNA and bacterial-like ribosomes."
          },
          {
            question: "Which type of plastid is specialized for the synthesis and storage of starch grains in roots, tubers, and seeds?",
            options: [
              "Chromoplast",
              "Amyloplast",
              "Chloroplast",
              "Elaioplast"
            ],
            correct: 1,
            explanation: "Amyloplasts are specialized non-pigmented leucoplasts that polymerize glucose into dense starch granules in non-photosynthetic tissues."
          },
          {
            question: "What physical force maintains the firmness and upright stature of herbaceous plant stems?",
            options: [
              "Hydrostatic turgor pressure exerted by the vacuole against the rigid cell wall",
              "Electrostatic repulsion between secondary xylem vessels",
              "Atmospheric gas pressure inside intercellular cavities",
              "Gravitational kinetic acceleration"
            ],
            correct: 0,
            explanation: "Osmotic water entry into the vacuole generates internal hydrostatic turgor pressure pressing against the elastic cell wall, maintaining tissue rigidity."
          },
          {
            question: "Which cell wall layer is synthesized first and is richest in adhesive pectin compounds that cement adjacent plant cells together?",
            options: [
              "Secondary cell wall",
              "Middle lamella",
              "Plasma membrane",
              "Periderm"
            ],
            correct: 1,
            explanation: "The middle lamella is the pectin-rich cementing layer formed between the primary walls of neighboring daughter cells during cytokinesis."
          },
          {
            question: "Secondary cell walls are deposited by mature cells in which location?",
            options: [
              "Between the primary cell wall and the plasma membrane",
              "On the extreme outer exterior of the middle lamella",
              "Directly inside the lumen of the central vacuole",
              "Floating freely within the nucleoplasm"
            ],
            correct: 0,
            explanation: "Secondary cell walls are synthesized internally between the primary wall and the plasma membrane after cellular expansion has ceased."
          },
          {
            question: "Which plastid is responsible for synthesizing and accumulating carotenoid pigments that produce bright yellow, orange, and red colors in ripening fruit?",
            options: [
              "Chloroplast",
              "Chromoplast",
              "Leucoplast",
              "Proplastid"
            ],
            correct: 1,
            explanation: "Chromoplasts synthesize lipophilic carotenoid pigments that color petals and fruits to attract animal pollinators and seed dispersers."
          },
          {
            question: "In chloroplasts, the stacked membrane sacs where the light-dependent reactions of photosynthesis occur are called:",
            options: [
              "Stroma",
              "Thylakoids (organized into grana)",
              "Cristae",
              "Tonoplast folds"
            ],
            correct: 1,
            explanation: "Thylakoids are disc-shaped membranous sacs arranged in stacks called grana, housing chlorophyll complexes, electron transport chains, and ATP synthases."
          },
          {
            question: "The fluid-filled aqueous matrix surrounding the thylakoid grana inside the chloroplast where the Calvin cycle takes place is the:",
            options: [
              "Stroma",
              "Matrix",
              "Lumen",
              "Cytosol"
            ],
            correct: 0,
            explanation: "The stroma is the semi-fluid interior of the chloroplast containing soluble enzymes (including Rubisco) that synthesize sugars during the Calvin cycle."
          },
          {
            question: "What structure forms during plant cell cytokinesis, derived from Golgi vesicles that fuse along the equatorial plane to build the new cell wall?",
            options: [
              "Cleavage furrow",
              "Cell plate (via phragmoplast)",
              "Centrosome",
              "Casparian strip"
            ],
            correct: 1,
            explanation: "Plant cytokinesis involves the phragmoplast directing Golgi vesicles containing cell wall precursors to coalesce into the cell plate at the division plane."
          },
          {
            question: "The movement of water and dissolved solutes across the extracellular network of cell walls and intercellular spaces (without crossing plasma membranes) is the:",
            options: [
              "Symplastic pathway",
              "Apoplastic pathway",
              "Transmembrane pathway",
              "Vacuolar pathway"
            ],
            correct: 1,
            explanation: "The apoplast consists of the continuum of porous cell walls and water-filled intercellular spaces external to the living plasma membrane."
          },
          {
            question: "When a plant cell is placed into a hypertonic (highly concentrated saline) solution, water exits the central vacuole, causing the plasma membrane to pull away from the cell wall. This is:",
            options: [
              "Plasmolysis",
              "Deplasmolysis",
              "Turgor expansion",
              "Lysis"
            ],
            correct: 0,
            explanation: "Plasmolysis occurs when hypertonic external environments draw water out of the cell, causing the vacuole to collapse and the protoplast to shrink away from the wall."
          },
          {
            question: "Which organelle contains catalase enzymes specialized for breaking down toxic hydrogen peroxide ($H_2O_2$) generated during photorespiration?",
            options: [
              "Peroxisome",
              "Lysosome",
              "Golgi dictyosome",
              "Ribosome"
            ],
            correct: 0,
            explanation: "Peroxisomes contain oxidative enzymes (including catalase) that metabolize glycolate produced during photorespiration and neutralize hydrogen peroxide."
          },
          {
            question: "What is the narrow cylindrical core of compressed endoplasmic reticulum traversing the center of a plasmodesma called?",
            options: [
              "Desmotubule",
              "Microtubule",
              "Microfilament",
              "Centriole"
            ],
            correct: 0,
            explanation: "The desmotubule is a modified tubule of endoplasmic reticulum that extends through the plasmodesma, linking the endomembrane systems of neighboring cells."
          },
          {
            question: "Which enzyme complex, embedded in the plasma membrane, synthesizes cellulose microfibrils and spins them directly onto the external wall surface?",
            options: [
              "Cellulose Synthase (Rosette complex)",
              "RNA Polymerase III",
              "ATP Synthase",
              "Amylase"
            ],
            correct: 0,
            explanation: "Rosette terminal complexes of cellulose synthase embedded in the plasma membrane polymerize UDP-glucose into cellulose microfibrils directly into the cell wall."
          },
          {
            question: "The orientation of freshly deposited cellulose microfibrils in the growing plant cell wall is guided internally by which cytoskeletal components?",
            options: [
              "Cortical Microtubules",
              "Actin microfilaments",
              "Intermediate filaments",
              "Keratin sheaths"
            ],
            correct: 0,
            explanation: "Cortical microtubules lying immediately beneath the plasma membrane act as guide rails that direct the trajectories of cellulose synthase complexes, dictating expansion direction."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 4: METABOLISM IN CELLS (22 Questions)
  // =========================================================================
  {
    id: "sec_bot_4",
    title: "Chapter 4: Metabolism in Cells",
    description: "Thermodynamics, enzyme kinetics, light-dependent reactions of photosynthesis, Calvin cycle (C3, C4, CAM pathways), and cellular respiration.",
    activities: [
      {
        id: "act_bot_4_lesson",
        type: "page",
        title: "Module 4.1: Bioenergetics: Photosynthesis & Respiration",
        completed: true,
        content: `### 1. Overview of Photosynthesis
Photosynthesis converts solar radiant energy into chemical bond energy in carbohydrates:
$$6CO_2 + 6H_2O + \\text{light} \\rightarrow C_6H_{12}O_6 + 6O_2$$
It consists of two interconnected metabolic stages:
1. **Light-Dependent Reactions:** Occurring in thylakoid membranes, generating ATP and NADPH while photolyzing water into oxygen.
2. **Light-Independent Reactions (Calvin Cycle):** Occurring in the chloroplast stroma, fixing $CO_2$ into triose phosphate sugars.

### 2. The Light-Dependent Reactions
- **Photopigments:** Chlorophyll *a* (primary reaction-center pigment absorbing blue-violet and red wavelengths), Chlorophyll *b* (accessory pigment), and Carotenoids (photoprotective and light-harvesting).
- **Photosystem II (P680):** Absorbs light, exciting electrons that are extracted from water ($2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$). Protons accumulate in the thylakoid lumen.
- **Electron Transport Chain:** Cytochrome $b_6f$ complex pumps protons across the thylakoid membrane, generating a proton gradient ($\Delta pH$).
- **Photosystem I (P700):** Re-energizes electrons with photons to reduce $NADP^+$ to $NADPH$ via ferredoxin-NADP+ reductase.
- **Photophosphorylation:** Protons flow down their electrochemical gradient through **ATP Synthase** into the stroma, producing ATP (chemiosmosis).

### 3. The Calvin Cycle (C3 Pathway)
Occurs in three phases:
1. **Carbon Fixation:** Rubisco attaches atmospheric $CO_2$ to Ribulose-1,5-bisphosphate (RuBP, a 5-carbon sugar), forming an unstable 6-carbon intermediate that cleaves into two molecules of 3-phosphoglycerate (3-PGA).
2. **Reduction:** ATP and NADPH convert 3-PGA into glyceraldehyde-3-phosphate (G3P).
3. **Regeneration of RuBP:** Complex enzymatic steps consume ATP to rearrange G3P back into RuBP. For every 6 turns of the cycle, one net glucose equivalent ($2 \\times G3P$) exits for starch or sucrose synthesis.

### 4. Photorespiration and Evolutionary Adaptations: C4 and CAM
- **The Problem of Photorespiration:** Rubisco can bind oxygen ($O_2$) instead of $CO_2$ when temperatures rise and stomata close, producing toxic phosphoglycolate that requires costly metabolic salvaging, wasting up to 25% of captured energy.
- **C4 Photosynthesis (Spatial Separation):** Found in tropical grasses (maize, sugarcane). $CO_2$ is fixed in outer **mesophyll cells** by **PEP carboxylase** (which has zero affinity for $O_2$) into 4-carbon oxaloacetate/malate. Malate is pumped into tightly sealed **bundle sheath cells** (Kranz anatomy), releasing high concentrations of $CO_2$ directly to Rubisco.
- **CAM Photosynthesis (Temporal Separation):** Found in desert succulents (cacti, agaves, pineapples). Stomata open *only at night* to minimize water loss. $CO_2$ is fixed by PEP carboxylase into malic acid stored in the large vacuole. During the day, stomata remain tightly closed while malate is decarboxylated to feed Rubisco illuminated by sunlight.

### 5. Aerobic Cellular Respiration
Respiration breaks down carbohydrates to generate ATP for cellular growth:
$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\sim 32\\text{ ATP}$$
- **Glycolysis (Cytosol):** Splitting glucose into 2 pyruvates, producing 2 ATP and 2 NADH.
- **Pyruvate Oxidation & Citric Acid (Krebs) Cycle (Mitochondrial Matrix):** Generates $CO_2$, ATP, and electron carriers ($NADH, FADH_2$).
- **Mitochondrial Electron Transport & Oxidative Phosphorylation (Inner Mitochondrial Membrane):** Chemiosmotic ATP synthesis coupled to oxygen reduction.`
      },
      {
        id: "quiz_bot_4",
        type: "quiz",
        title: "🌿 Chapter 4 Checkpoint: Photosynthesis, Respiration & Plant Bioenergetics",
        completed: false,
        questions: [
          {
            question: "What is the primary source of the oxygen gas ($O_2$) released into Earth's atmosphere by photosynthetic plants?",
            options: [
              "The splitting (photolysis) of water molecules in Photosystem II",
              "The breakdown of carbon dioxide in the Calvin cycle",
              "The decomposition of glucose in mitochondria",
              "The enzymatic cleavage of ATP"
            ],
            correct: 0,
            explanation: "During light reactions in Photosystem II, water molecules are enzymatically split (photolyzed) into protons, electrons, and molecular oxygen ($O_2$)."
          },
          {
            question: "Which wavelengths of visible light are most strongly absorbed by chlorophyll a and chlorophyll b for photosynthesis?",
            options: [
              "Green and yellow wavelengths",
              "Blue-violet and red wavelengths",
              "Infrared and microwave wavelengths",
              "Ultraviolet wavelengths exclusively"
            ],
            correct: 1,
            explanation: "Chlorophylls absorb photons primarily in the blue-violet (400-450 nm) and red (640-680 nm) regions, reflecting unabsorbed green light."
          },
          {
            question: "What are the two high-energy chemical products generated by the light-dependent reactions that are consumed in the Calvin cycle?",
            options: [
              "ATP and NADPH",
              "Glucose and Oxygen",
              "Pyruvate and FADH2",
              "Rubisco and RuBP"
            ],
            correct: 0,
            explanation: "The light reactions capture photon energy to generate ATP and reducing power in the form of NADPH, which drive the biosynthetic reactions of the Calvin cycle."
          },
          {
            question: "In the Calvin cycle, Rubisco fixes atmospheric carbon dioxide onto which five-carbon acceptor sugar?",
            options: [
              "Glucose-6-phosphate",
              "Ribulose-1,5-bisphosphate (RuBP)",
              "Oxaloacetate",
              "Phosphoenolpyruvate (PEP)"
            ],
            correct: 1,
            explanation: "Rubisco catalyzes the addition of one CO2 molecule onto the 5-carbon sugar ribulose-1,5-bisphosphate (RuBP), yielding two 3-carbon 3-PGA molecules."
          },
          {
            question: "What biochemical inefficiency occurs when Rubisco binds oxygen ($O_2$) instead of carbon dioxide ($CO_2$), wasting energy and releasing fixed carbon?",
            options: [
              "Oxidative phosphorylation",
              "Photorespiration",
              "Lactic fermentation",
              "Photophosphorylation"
            ],
            correct: 1,
            explanation: "Photorespiration occurs when Rubisco oxygenates RuBP, producing toxic 2-phosphoglycolate that requires energy-consuming salvage pathways across peroxisomes and mitochondria."
          },
          {
            question: "How do C4 plants (such as corn and sugarcane) overcome the problem of photorespiration?",
            options: [
              "They fix carbon exclusively in the dark during the winter",
              "They spatially separate initial CO2 fixation in mesophyll cells from the Calvin cycle in bundle sheath cells (Kranz anatomy)",
              "They perform photosynthesis without using any enzymes",
              "They open their stomata only during torrential downpours"
            ],
            correct: 1,
            explanation: "C4 plants use PEP carboxylase to fix CO2 into 4-carbon acids in mesophyll cells, transporting them to tightly sealed bundle sheath cells where CO2 is released around Rubisco at high concentrations."
          },
          {
            question: "Which initial carbon-fixing enzyme is utilized by C4 and CAM plants because it has a high affinity for bicarbonate and zero affinity for oxygen?",
            options: [
              "Rubisco",
              "PEP Carboxylase",
              "ATP Synthase",
              "Amylase"
            ],
            correct: 1,
            explanation: "Phosphoenolpyruvate (PEP) carboxylase fixes inorganic carbon into oxaloacetate without binding oxygen, preventing photorespiration entirely."
          },
          {
            question: "Desert succulents utilizing Crassulacean Acid Metabolism (CAM) minimize daytime water loss by:",
            options: [
              "Opening their stomata at night to absorb CO2 and storing it as malic acid in vacuoles, then closing stomata during the hot day",
              "Absorbing water through their floral petals from morning dew",
              "Performing photosynthesis without capturing any solar photons",
              "Discarding their roots during the summer"
            ],
            correct: 0,
            explanation: "CAM plants achieve temporal separation: nocturnal stomatal opening allows CO2 uptake and vacuolar malate storage, while daytime closure conserves water while solar light reactions run."
          },
          {
            question: "The synthesis of ATP in both chloroplasts and mitochondria is driven by proton movement through ATP synthase, a mechanism known as:",
            options: [
              "Substrate-level oxidation",
              "Chemiosmosis (Peter Mitchell's chemiosmotic hypothesis)",
              "Passive capillary diffusion",
              "Thermal conduction"
            ],
            correct: 1,
            explanation: "Chemiosmosis couples ATP synthesis to the electrochemical proton gradient generated across the thylakoid or inner mitochondrial membrane as protons flow through ATP synthase."
          },
          {
            question: "In what sub-cellular compartment of the plant cell does the initial stage of cellular respiration (glycolysis) occur?",
            options: [
              "The mitochondrial matrix",
              "The cytosol",
              "The chloroplast stroma",
              "The vacuolar lumen"
            ],
            correct: 1,
            explanation: "Glycolysis is an anaerobic 10-step enzymatic pathway occurring in the cytosol that cleaves one 6-carbon glucose into two 3-carbon pyruvates."
          },
          {
            question: "What is the final electron acceptor in the mitochondrial electron transport chain during aerobic cellular respiration in plants?",
            options: [
              "Carbon dioxide ($CO_2$)",
              "Molecular oxygen ($O_2$)",
              "Water ($H_2O$)",
              "Glucose"
            ],
            correct: 1,
            explanation: "Oxygen acts as the terminal electron acceptor, combining with electrons and protons at Complex IV (cytochrome c oxidase) to form water ($H_2O$)."
          },
          {
            question: "Under flooded or anaerobic soil conditions where roots are deprived of oxygen, plant root cells must rely on which pathway to regenerate NAD+?",
            options: [
              "Alcoholic fermentation (producing ethanol and CO2)",
              "Photophosphorylation",
              "The Calvin-Benson cycle",
              "C4 malate shunting"
            ],
            correct: 0,
            explanation: "In anoxic flooded soils, plant roots undergo ethanolic fermentation, converting pyruvate to ethanol and CO2 to re-oxidize NADH back to NAD+ to keep glycolysis operating."
          },
          {
            question: "Which protein complex in the thylakoid membrane pumps protons from the stroma into the thylakoid lumen between Photosystems II and I?",
            options: [
              "Cytochrome b6f complex",
              "Rubisco",
              "PEP carboxylase",
              "Ferredoxin-NADP+ reductase"
            ],
            correct: 0,
            explanation: "The cytochrome b6f complex transfers electrons between plastoquinone and plastocyanin while pumping protons into the lumen, building the electrochemical proton gradient."
          },
          {
            question: "Cyclic electron flow in the light reactions of photosynthesis involves only Photosystem I and produces:",
            options: [
              "ATP exclusively (without generating NADPH or releasing O2)",
              "NADPH and Oxygen without ATP",
              "Glucose and RuBP",
              "Carbon dioxide gas"
            ],
            correct: 0,
            explanation: "Cyclic photophosphorylation routes electrons from ferredoxin back to the cytochrome complex to pump protons and generate extra ATP without producing NADPH or photolyzing water."
          },
          {
            question: "What term describes the specialized leaf anatomy of C4 plants featuring concentric layers of mesophyll cells surrounding enlarged, chloroplast-rich bundle sheath cells?",
            options: [
              "Kranz anatomy",
              "Palisade parenchyma",
              "Casparian strip",
              "Aerenchyma"
            ],
            correct: 0,
            explanation: "Kranz anatomy (from the German word for 'wreath') describes the tight floral-wreath arrangement of bundle sheath cells around vascular veins in C4 plants."
          },
          {
            question: "During which phase of aerobic respiration is the vast majority of carbon dioxide ($CO_2$) released from metabolic breakdown?",
            options: [
              "Glycolysis",
              "Pyruvate oxidation and the Citric Acid (Krebs) Cycle",
              "ATP synthase rotation",
              "The light reactions"
            ],
            correct: 1,
            explanation: "Decarboxylation reactions converting pyruvate to acetyl-CoA and within the mitochondrial Krebs cycle liberate the six carbon atoms of glucose as CO2."
          },
          {
            question: "What is the primary function of accessory pigments, such as beta-carotene and lutein, in the photosynthetic antenna complexes?",
            options: [
              "Absorbing light wavelengths not captured efficiently by chlorophylls and protecting against photo-oxidative damage",
              "Transporting sucrose to the root system",
              "Binding nitrogen from the atmosphere",
              "Digesting cellulose cell walls"
            ],
            correct: 0,
            explanation: "Carotenoids expand the absorption spectrum by transferring captured photon energy to chlorophyll a and quench reactive oxygen species to prevent photo-damage."
          },
          {
            question: "What is the light compensation point in plant physiology?",
            options: [
              "The light intensity at which the rate of photosynthetic carbon fixation exactly equals the rate of respiratory carbon loss",
              "The point where a leaf gets sunburned and turns brown",
              "The maximum speed of light inside a chloroplast",
              "The temperature at which chloroplast membranes melt"
            ],
            correct: 0,
            explanation: "At the light compensation point, photosynthetic CO2 uptake balances respiratory CO2 release, resulting in zero net gas exchange."
          },
          {
            question: "How many net molecules of glyceraldehyde-3-phosphate (G3P) are exported from the Calvin cycle to build sugars for every six molecules of fixed CO2?",
            options: [
              "Two G3P molecules (which combine to form one 6-carbon glucose)",
              "Twelve G3P molecules",
              "Zero G3P molecules",
              "Thirty-six G3P molecules"
            ],
            correct: 0,
            explanation: "Fixing 6 CO2 molecules produces 12 G3P molecules; 10 G3P are recycled to regenerate 6 RuBP, while 2 net G3P molecules exit to synthesize one glucose equivalent."
          },
          {
            question: "In what part of the mitochondrion is the electron transport chain located?",
            options: [
              "The inner mitochondrial membrane (cristae)",
              "The outer membrane pores",
              "The central nuclear pore",
              "The inter-membrane aqueous lumen"
            ],
            correct: 0,
            explanation: "The respiratory electron transport complexes and ATP synthases are embedded in the cristae folds of the inner mitochondrial membrane."
          },
          {
            question: "Why do C4 crops typically outperform C3 crops in hot, arid agricultural climates with intense sunlight?",
            options: [
              "C4 crops eliminate photorespiration and can maintain high photosynthetic rates with smaller stomatal openings, conserving water",
              "C4 crops do not require any solar sunlight",
              "C4 crops never undergo cellular respiration",
              "C4 crops absorb water vapor directly through their flowers"
            ],
            correct: 0,
            explanation: "Because PEP carboxylase eliminates photorespiration, C4 plants fix carbon rapidly even when partial stomatal closure restricts internal CO2 levels in hot climates."
          },
          {
            question: "What is the name of the alternative respiratory pathway in some plants (such as skunk cabbage, Symplocarpus foetidus) that bypasses ATP synthesis to generate large amounts of heat to melt snow and vaporize pollinator-attracting odors?",
            options: [
              "Thermogenic alternative oxidase (AOX) pathway",
              "Cyclic photophosphorylation",
              "Lactic acid fermentation",
              "Crassulacean acid cycle"
            ],
            correct: 0,
            explanation: "Alternative oxidase (AOX) redirects electron flow away from ATP generation, dissipating the free energy as metabolic heat (thermogenesis) to vaporize foul scents that attract flies."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 5: PLANT TISSUES AND THE MULTICELLULAR PLANT BODY (20 Questions)
  // =========================================================================
  {
    id: "sec_bot_5",
    title: "Chapter 5: Plant Tissues and the Multicellular Plant Body",
    description: "Meristematic tissues, ground tissue (parenchyma, collenchyma, sclerenchyma), vascular tissues (xylem, phloem), and dermal tissues.",
    activities: [
      {
        id: "act_bot_5_lesson",
        type: "page",
        title: "Module 5.1: Tissue Systems of the Plant Body",
        completed: true,
        content: `### 1. Plant Meristems: Centers of Indeterminate Growth
Unlike animals with determinate adult body plans, plants maintain lifelong growth from specialized embryonic regions called **meristems**:
- **Apical Meristems:** Located at the tips of shoots (Shoot Apical Meristem, SAM) and roots (Root Apical Meristem, RAM), giving rise to primary growth (elongation).
- **Primary Meristems:** Derived from apical meristems:
  - *Protoderm:* Generates the dermal tissue system.
  - *Ground Meristem:* Generates the ground tissue system.
  - *Procambium:* Generates primary vascular tissues (xylem and phloem).
- **Lateral Meristems:** Secondary meristems in woody plants responsible for secondary growth (girth expansion):
  - *Vascular Cambium:* Produces secondary xylem (wood) and secondary phloem (inner bark).
  - *Cork Cambium (Phellogen):* Produces protective periderm (outer bark).

### 2. The Ground Tissue System
Comprises the bulk of the non-vascular, non-dermal plant body:
- **Parenchyma:** The most versatile, abundant cell type. Living at maturity with thin primary walls. Functions in photosynthesis (chlorenchyma in leaves), nutrient storage (amyloplasts in roots/tubers), wound repair, and secretion.
- **Collenchyma:** Living elongated cells with unevenly thickened primary walls (rich in pectin). Provides flexible, tensile structural support to growing herbaceous organs (e.g., the 'strings' along celery petioles).
- **Sclerenchyma:** Rigid, dead cells at functional maturity with heavily lignified, thick secondary cell walls. Provides non-flexible mechanical support:
  - *Sclereids (Stone cells):* Short, branched cells providing gritty texture in pear fruits and hard shells in walnut nutshells.
  - *Fibers:* Long, slender tapered cells harvested commercially for textiles (hemp, jute, flax).

### 3. The Vascular Tissue System
Specialized for long-distance bulk transport through the plant body:
- **Xylem (Water & Minerals):** Conducts water from roots to shoots:
  - *Tracheids:* Long, tapered cells found in all vascular plants; water moves between adjacent cells via bordered pits. Dead at maturity.
  - *Vessel Elements:* Shorter, wider barrel-shaped cells with open perforation plates at ends, joined into continuous open tubes (vessels). Found primarily in angiosperms.
  - *Xylem Fibers and Xylem Parenchyma.*
- **Phloem (Sugars & Organic Nutrients):** Conducts photosynthetic photosynthate from sources to sinks:
  - *Sieve-Tube Elements (Angiosperms):* Living elongated conducting cells with perforated end walls (**sieve plates**). Lack nuclei, vacuoles, and ribosomes at functional maturity to minimize resistance.
  - *Companion Cells:* Nucleated cells adjacent to sieve-tube elements, connected via numerous plasmodesmata, providing metabolic support and loading/unloading sucrose.
  - *Sieve Cells and Albuminous Cells:* The conducting and support cells of gymnosperms.

### 4. The Dermal Tissue System
Forms the outer protective skin of the plant:
- **Epidermis:** Usually a single layer of tightly packed cells covered by a cutin/wax cuticle.
- **Guard Cells:** Specialized paired epidermal cells flanking **stomata**, regulating gas exchange and transpiration.
- **Trichomes (Hairs):** Outgrowths of the epidermis that reduce water loss, reflect intense solar radiation, or secrete defensive chemical deterrents.
- **Periderm:** Secondary protective tissue replacing epidermis in woody stems and roots, composed of cork cells impregnated with suberin.`
      },
      {
        id: "quiz_bot_5",
        type: "quiz",
        title: "🌿 Chapter 5 Checkpoint: Plant Tissues & Tissue Systems",
        completed: false,
        questions: [
          {
            question: "Which plant tissue consists of perpetually embryonic, actively dividing undifferentiated cells that sustain lifelong plant growth?",
            options: [
              "Sclerenchyma",
              "Meristematic tissue",
              "Periderm",
              "Collenchyma"
            ],
            correct: 1,
            explanation: "Meristems are regions of undifferentiated cells that divide mitotically to generate new cells for primary elongation and secondary girth expansion."
          },
          {
            question: "Primary growth in vascular plants, resulting in the elongation of stems and roots, originates from which meristems?",
            options: [
              "Apical Meristems (Shoot and Root Apical Meristems)",
              "Vascular Cambium",
              "Cork Cambium",
              "Interfascicular cambium"
            ],
            correct: 0,
            explanation: "Apical meristems at root and shoot tips produce primary growth, extending the plant body vertically into the soil and atmosphere."
          },
          {
            question: "Which ground tissue cell type is living at maturity, has thin primary cell walls, and performs photosynthesis, starch storage, and tissue regeneration?",
            options: [
              "Parenchyma",
              "Sclerenchyma",
              "Tracheids",
              "Vessel elements"
            ],
            correct: 0,
            explanation: "Parenchyma cells are the most abundant living cells in plants, functioning in photosynthetic assimilation, metabolic storage, and wound repair."
          },
          {
            question: "The flexible, tensile support fibers found in the 'strings' along the outer edge of a celery petiole are composed of which tissue?",
            options: [
              "Collenchyma",
              "Sclerenchyma stone cells",
              "Xylem vessels",
              "Cork"
            ],
            correct: 0,
            explanation: "Collenchyma cells have unevenly thickened, non-lignified primary walls rich in pectin, providing flexible structural support to actively growing shoots."
          },
          {
            question: "What distinct architectural feature characterizes mature sclerenchyma cells (such as fibers and sclereids)?",
            options: [
              "They lack cell walls completely",
              "They have thick, heavily lignified secondary cell walls and are dead at functional maturity",
              "They contain chloroplasts for active photosynthesis",
              "They maintain rapid mitotic cell division"
            ],
            correct: 1,
            explanation: "Sclerenchyma cells synthesize thick secondary walls impregnated with lignin and undergo programmed cell death, leaving an empty, rigid skeletal shell."
          },
          {
            question: "The gritty, sand-like texture felt when chewing the flesh of a ripe pear is caused by clusters of which sclerenchyma cell type?",
            options: [
              "Sclereids (Stone cells)",
              "Sieve-tube elements",
              "Guard cells",
              "Parenchyma chlorenchyma"
            ],
            correct: 0,
            explanation: "Sclereids (stone cells) are short, branched sclerenchyma cells with extremely thick, lignified secondary walls that provide protective hardness."
          },
          {
            question: "What are the two types of water-conducting tracheary elements found in vascular plant xylem?",
            options: [
              "Tracheids and Vessel elements",
              "Sieve cells and Companion cells",
              "Parenchyma and Collenchyma",
              "Guard cells and Trichomes"
            ],
            correct: 0,
            explanation: "Xylem contains tracheids (tapered cells with bordered pits) and vessel elements (barrel-shaped cells with open perforation plates)."
          },
          {
            question: "Why do mature xylem vessel elements and tracheids conduct water so efficiently?",
            options: [
              "They actively swim through the stem using flagella",
              "They are dead at functional maturity, lacking cytoplasm, nuclei, and organelles, forming hollow hydrodynamic pipes",
              "They pump water with internal vacuolar tonoplasts",
              "They are lined with digestive enzymes"
            ],
            correct: 1,
            explanation: "Tracheary elements undergo programmed cell death upon completing their walls, clearing all cytoplasmic contents to create frictionless conduits for sap flow."
          },
          {
            question: "In flowering plants (angiosperms), what conducting cell type transports sucrose-rich phloem sap?",
            options: [
              "Sieve-Tube Elements",
              "Tracheids",
              "Vessel elements",
              "Sclereids"
            ],
            correct: 0,
            explanation: "Sieve-tube elements are living, enucleated cells connected end-to-end through perforated sieve plates that conduct phloem sap."
          },
          {
            question: "What is the function of the nucleated Companion Cell positioned adjacent to a sieve-tube element in angiosperm phloem?",
            options: [
              "Conducting water under negative suction pressure",
              "Providing metabolic life support and actively loading sugars into the enucleate sieve-tube element",
              "Producing defensive lignin to harden the outer bark",
              "Photolyzing water into oxygen"
            ],
            correct: 1,
            explanation: "Because sieve-tube elements lack nuclei and ribosomes, adjacent companion cells manage their protein synthesis and actively load/unload sucrose."
          },
          {
            question: "Which primary meristem gives rise directly to primary xylem and primary phloem in developing plant organs?",
            options: [
              "Protoderm",
              "Procambium",
              "Ground meristem",
              "Cork cambium"
            ],
            correct: 1,
            explanation: "The procambium is the primary meristematic cylinder that differentiates into primary xylem toward the inside and primary phloem toward the outside."
          },
          {
            question: "Specialized epidermal hair-like outgrowths that deter herbivory, secrete glandular oils, or trap insulating air to reduce transpiration are called:",
            options: [
              "Trichomes",
              "Hydathodes",
              "Sclereids",
              "Lenticels"
            ],
            correct: 0,
            explanation: "Trichomes are epidermal appendages ranging from single hairs to complex multicellular glandular structures that defend against insects and minimize water loss."
          },
          {
            question: "What regulates the opening and closing of microscopic stomatal pores on the leaf epidermis for photosynthetic gas exchange?",
            options: [
              "A pair of flanking Guard Cells that change shape based on internal turgor pressure",
              "Fixed mechanical valves made of pure lignin",
              "Root endodermal Casparian strips",
              "Xylem bordered pit membranes"
            ],
            correct: 0,
            explanation: "Guard cells bow outward when swollen with turgor pressure (opening the stoma) and collapse together when flaccid (closing the stoma)."
          },
          {
            question: "In woody stems and roots, what secondary meristem produces the cork (phellem) that replaces the torn epidermis as outer bark?",
            options: [
              "Vascular cambium",
              "Cork Cambium (Phellogen)",
              "Apical meristem",
              "Protoderm"
            ],
            correct: 1,
            explanation: "The cork cambium (phellogen) divides to generate suberin-impregnated dead cork cells to the exterior, forming the protective periderm."
          },
          {
            question: "What lateral meristem is responsible for producing secondary xylem (wood) toward the interior and secondary phloem toward the exterior?",
            options: [
              "Vascular Cambium",
              "Shoot apical meristem",
              "Root apical meristem",
              "Procambium"
            ],
            correct: 0,
            explanation: "The vascular cambium is a cylindrical lateral meristem producing rings of secondary xylem inward and secondary phloem outward during secondary growth."
          },
          {
            question: "Which tissue type forms the outermost waxy, protective single-cell layer covering the primary plant body?",
            options: [
              "Epidermis",
              "Endodermis",
              "Pericycle",
              "Cortex"
            ],
            correct: 0,
            explanation: "The epidermis is the primary dermal layer covering young stems, leaves, flowers, and roots, coated on aerial organs by the cuticle."
          },
          {
            question: "Parenchyma tissue containing abundant chloroplasts and specialized for photosynthesis in leaf mesophyll is called:",
            options: [
              "Chlorenchyma",
              "Aerenchyma",
              "Collenchyma",
              "Endosperm"
            ],
            correct: 0,
            explanation: "Chlorenchyma is specialized, chloroplast-dense parenchyma tissue situated within the leaf and green stem layers where photosynthesis occurs."
          },
          {
            question: "Parenchyma tissue containing large, continuous air-filled intercellular spaces that provides buoyancy and internal aeration to aquatic plants is:",
            options: [
              "Aerenchyma",
              "Collenchyma",
              "Sclerenchyma",
              "Woody xylem"
            ],
            correct: 0,
            explanation: "Aerenchyma features prominent gas channels that permit oxygen diffusion down to submerged roots and provide buoyancy to floating water lilies."
          },
          {
            question: "What distinct anatomical feature differentiates angiosperm xylem vessels from gymnosperm tracheids?",
            options: [
              "Vessel elements have open perforation plates at their end walls, allowing uninterrupted bulk water flow",
              "Tracheids contain nuclei and cytoplasm at maturity",
              "Vessels conduct sucrose, not water",
              "Tracheids lack secondary cell walls"
            ],
            correct: 0,
            explanation: "Vessel elements have fully perforated or open ends, stacking into long continuous tube-like pipes (vessels) that provide lower hydrodynamic resistance than tracheids."
          },
          {
            question: "What substance impregnates the walls of dead cork cells in the periderm, rendering them impermeable to water and gases?",
            options: [
              "Suberin",
              "Pectin",
              "Cellulose",
              "Starch"
            ],
            correct: 0,
            explanation: "Suberin is a waxy, hydrophobic lipid substance deposited in cork cell walls, preventing water loss and protecting inner tissues from microbial invasion."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 6: PLANT ORGANS: ROOTS (18 Questions)
  // =========================================================================
  {
    id: "sec_bot_6",
    title: "Chapter 6: Plant Organs: Roots",
    description: "Root systems, internal anatomy, root cap, Casparian strip, water/nutrient uptake, mycorrhizae, and root nodules.",
    activities: [
      {
        id: "act_bot_6_lesson",
        type: "page",
        title: "Module 6.1: Form and Function of Plant Roots",
        completed: true,
        content: `### 1. Root System Architectures
Roots anchor the plant, absorb water and dissolved mineral ions, synthesize hormones (cytokinins), and store carbohydrates:
- **Taproot System:** Consists of a prominent, deep main root developing from the embryonic radicle, giving off smaller lateral roots. Found in most eudicots and gymnosperms (e.g., carrots, dandelions, oaks). Excellent for accessing deep water tables.
- **Fibrous Root System:** Consists of a dense mat of thin, adventitious roots arising from the stem base, with the radicle dying early. Found in monocots (e.g., grasses, wheat, corn). Highly effective for preventing surface soil erosion.

### 2. Longitudinal Zones of a Growing Root Tip
Moving proximally from the tip:
1. **Root Cap:** Thimble-shaped mass of parenchyma protecting the delicate RAM. Secretes lubricating **mucigel** and contains **statoliths** (dense amyloplasts) that settle to sense gravity (**gravitropism**).
2. **Zone of Cell Division:** Contains the RAM and primary meristems (protoderm, procambium, ground meristem).
3. **Zone of Elongation:** Cells absorb water into vacuoles and expand up to tenfold in length, pushing the root cap forward through soil particles.
4. **Zone of Maturation (Differentiation):** Epidermal cells extend **root hairs** (tubular outgrowths increasing absorptive surface area thousands of times). Primary tissues differentiate into xylem, phloem, and cortex.

### 3. Internal Anatomy of a Primary Eudicot Root
In cross-section:
- **Epidermis:** Single outer layer bearing root hairs; lacks a thick cuticle to permit water entry.
- **Cortex:** Wide band of loosely packed storage parenchyma cells storing starch.
- **Endodermis:** Innermost cortical layer consisting of a tightly fitting cylinder of cells. Cell walls are ringed by the **Casparian strip**—a band of hydrophobic suberin and lignin that blocks the apoplastic movement of water and ions, forcing all soil solution to pass through selectively permeable plasma membranes (symplast). Acts as a biological checkpoint.
- **Stele (Vascular Cylinder):**
  - *Pericycle:* Outermost layer of the stele inside the endodermis; retains meristematic capability to initiate **lateral (branch) roots**.
  - *Xylem:* Forms a central solid star-shaped core (often 3 to 5 radiating arms).
  - *Phloem:* Nestled in pockets between the radiating arms of xylem.

### 4. Symbiotic Mutualisms in Plant Roots
- **Mycorrhizae:** Mutualistic associations between plant roots and soil fungi:
  - *Ectomycorrhizae:* Fungal hyphae sheath the root exterior and penetrate intercellular spaces of the cortex (Hartig net). Common in temperate forest trees (pines, oaks).
  - *Endomycorrhizae (Arbuscular Mycorrhizae / AMF):* Fungi penetrate cortical cell walls to form branching tree-like structures (**arbuscules**) directly against the host plasma membrane. Found in >80% of terrestrial plants, vastly increasing phosphorus and micronutrient uptake in exchange for host photosynthate.
- **Root Nodules & Nitrogen Fixation:** Legumes (soybeans, clover, peas) form specialized root nodules inhabited by **Rhizobium** bacteria. The bacteria produce nitrogenase enzymes that reduce atmospheric $N_2$ into plant-available ammonia ($NH_3$), solving soil nitrogen depletion.`
      },
      {
        id: "quiz_bot_6",
        type: "quiz",
        title: "🌿 Chapter 6 Checkpoint: Root Anatomy, Physiology & Symbioses",
        completed: false,
        questions: [
          {
            question: "Which root system architecture, characteristic of grasses and monocots, consists of an extensive, dense mass of similarly sized roots originating adventitiously from the stem?",
            options: [
              "Taproot system",
              "Fibrous root system",
              "Haustorial system",
              "Pneumatophore cluster"
            ],
            correct: 1,
            explanation: "Fibrous root systems feature many slender, branching adventitious roots that form a dense network in topsoil, binding soil particles and preventing erosion."
          },
          {
            question: "What is the primary biological function of the Root Cap?",
            options: [
              "Conducting photosynthetic sugars up to floral buds",
              "Protecting the delicate root apical meristem and sensing gravity via statoliths",
              "Performing rapid transpirational evaporation",
              "Attracting pollinating butterflies with nectar"
            ],
            correct: 1,
            explanation: "The root cap protects the root apical meristem as it pushes through abrasive soil, secretes lubricating mucigel, and contains gravity-sensing statoliths."
          },
          {
            question: "Root hairs, which provide the vast majority of water and mineral absorption in plants, develop in which developmental zone of the root?",
            options: [
              "Zone of cell division",
              "Zone of elongation",
              "Zone of maturation (differentiation)",
              "Root cap"
            ],
            correct: 2,
            explanation: "Root hairs are delicate tubular extensions of epidermal cells that differentiate exclusively in the zone of maturation."
          },
          {
            question: "What is the physiological role of the Casparian Strip in the root endodermis?",
            options: [
              "Blocking apoplastic water and mineral diffusion, forcing the soil solution across selectively permeable plasma membranes",
              "Accelerating the speed of water evaporation into air pockets",
              "Producing secondary xylem wood rings",
              "Storing vast reserves of glycogen"
            ],
            correct: 0,
            explanation: "The Casparian strip is a waterproof suberin band sealing the radial and transverse walls of endodermal cells, functioning as a physiological checkpoint for mineral ions entering the stele."
          },
          {
            question: "From which internal layer of cells within the root vascular cylinder do lateral (branch) roots originate?",
            options: [
              "The Pericycle",
              "The Epidermis",
              "The Root cap",
              "The Exodermis"
            ],
            correct: 0,
            explanation: "Lateral roots initiate endogenously from mitotic divisions within the pericycle (the outermost cell layer of the stele), pushing outward through the cortex and epidermis."
          },
          {
            question: "In cross-section, a typical primary eudicot root features central vascular tissues arranged as:",
            options: [
              "A solid central star- or cross-shaped core of xylem with phloem nestled between the arms",
              "A hollow circle of separate vascular bundles surrounding a large pith",
              "Scattered vascular bundles throughout the cortex",
              "No xylem tissue whatsoever"
            ],
            correct: 0,
            explanation: "Eudicot roots possess a solid central core of xylem with radiating arms (like a star or cross) with phloem patches situated between the arms, lacking a central pith."
          },
          {
            question: "What mutualistic ecological relationship involves soil fungi and plant roots, vastly enhancing the root's absorption of phosphorus and water?",
            options: [
              "Mycorrhizae",
              "Lichens",
              "Galls",
              "Epiphytism"
            ],
            correct: 0,
            explanation: "Mycorrhizal fungi colonize plant roots, extending vast hyphal networks into the soil that supply phosphorus and water in exchange for plant carbohydrates."
          },
          {
            question: "Root nodules found in legumes (such as beans, peas, and clover) house which symbiotic bacteria capable of biological nitrogen fixation?",
            options: [
              "Rhizobium",
              "Escherichia coli",
              "Streptococcus",
              "Agrobacterium"
            ],
            correct: 0,
            explanation: "Rhizobium bacteria reside inside legume root nodules, utilizing nitrogenase to convert inert atmospheric N2 gas into ammonium (NH4+) usable by the plant."
          },
          {
            question: "Dense starch-containing amyloplasts within root cap cells that settle to the lower side of the cell in response to gravity are called:",
            options: [
              "Statoliths",
              "Chromoplasts",
              "Chloroplasts",
              "Desmotubules"
            ],
            correct: 0,
            explanation: "Statoliths are dense amyloplasts that sediment to the lowest point in columella root cap cells, triggering auxin redistribution that steers positive root gravitropism."
          },
          {
            question: "Mangrove trees growing in waterlogged, anaerobic coastal mud produce specialized upward-growing spongy roots called _______ that absorb oxygen from the air.",
            options: [
              "Pneumatophores",
              "Haustoria",
              "Prop roots",
              "Contractile roots"
            ],
            correct: 0,
            explanation: "Pneumatophores (air roots) grow upward above the water surface, utilizing aerenchyma and lenticels to funnel atmospheric oxygen down to submerged root tissues."
          },
          {
            question: "Parasitic plants such as dodder (Cuscuta) and mistletoe extract water, minerals, and carbohydrates from host plants using modified penetrating roots called:",
            options: [
              "Haustoria",
              "Prop roots",
              "Buttress roots",
              "Mycorrhizae"
            ],
            correct: 0,
            explanation: "Haustoria are specialized parasitic root structures that penetrate the host plant's stem or root tissues to tap into the vascular xylem and phloem."
          },
          {
            question: "Corn plants produce prominent aerial stilt roots growing from the lower stem nodes into the soil to brace the tall stalk against heavy winds. These are:",
            options: [
              "Prop roots",
              "Pneumatophores",
              "Storage roots",
              "Haustoria"
            ],
            correct: 0,
            explanation: "Prop roots are adventitious roots emerging from aerial stem nodes that penetrate the soil to provide mechanical bracing and wind stability."
          },
          {
            question: "Massive, swollen triangular root flanges radiating from the bases of tall tropical rainforest trees to stabilize shallow root systems in thin soils are:",
            options: [
              "Buttress roots",
              "Taproots",
              "Mycorrhizal nodules",
              "Contractile roots"
            ],
            correct: 0,
            explanation: "Buttress roots provide extensive mechanical anchorage for colossal tropical trees whose feeder roots must remain in nutrient-rich topsoil layers."
          },
          {
            question: "Which root zone is primarily responsible for the physical pushing of the root tip through resisting soil particles?",
            options: [
              "Zone of Elongation",
              "Zone of Maturation",
              "Root hair zone",
              "Pericycle zone"
            ],
            correct: 0,
            explanation: "The rapid longitudinal expansion of cells in the zone of elongation creates the hydrostatic thrust driving the root cap through the soil."
          },
          {
            question: "The slippery polysaccharide slime secreted by the root cap to lubricate its passage through abrasive soil particles is:",
            options: [
              "Mucigel",
              "Suberin",
              "Lignin",
              "Cellulose"
            ],
            correct: 0,
            explanation: "Mucigel is a viscous, carbohydrate-rich slime secreted by the outer root cap cells that lubricates root penetration and fosters beneficial rhizosphere microbes."
          },
          {
            question: "What happens to the cortex and epidermis of a woody eudicot root when it undergoes secondary growth?",
            options: [
              "They expand indefinitely and become the main photosynthetic engine",
              "They are split, sloughed off, and replaced by the protective periderm produced by the cork cambium",
              "They transform directly into secondary xylem wood",
              "They are pulled into the vascular cylinder by contraction"
            ],
            correct: 1,
            explanation: "Secondary thickening generated by the vascular cambium stretches and sloughs off the cortex and epidermis, which are replaced by the periderm."
          },
          {
            question: "In what root tissue of eudicot taproots (such as carrots, beets, and radishes) are the vast majority of stored dietary starches and sugars deposited?",
            options: [
              "Cortex and vascular parenchyma",
              "Root cap",
              "Endodermal Casparian strip",
              "Sclerenchyma fibers"
            ],
            correct: 0,
            explanation: "The parenchymal cells of the extensive cortex and ray tissues in fleshy taproots store large quantities of carbohydrates synthesized in the foliage."
          },
          {
            question: "How does the internal anatomy of a monocot root (e.g., corn, grasses) differ fundamentally from a eudicot root?",
            options: [
              "Monocot roots have a central pith composed of parenchyma surrounded by a ring of alternating xylem and phloem bundles",
              "Monocot roots lack an endodermis and pericycle",
              "Monocot roots possess secondary growth wood rings",
              "Monocot roots lack root hairs completely"
            ],
            correct: 0,
            explanation: "Monocot roots feature a distinct central ground-tissue pith surrounded by a ring of vascular bundles, unlike the solid star-shaped xylem core of eudicots."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 7: PLANT ORGANS: STEMS (18 Questions)
  // =========================================================================
  {
    id: "sec_bot_7",
    title: "Chapter 7: Plant Organs: Stems",
    description: "Primary and secondary stem growth, monocot vs eudicot vascular bundles, wood formation, annual rings, and modified stems.",
    activities: [
      {
        id: "act_bot_7_lesson",
        type: "page",
        title: "Module 7.1: Anatomy & Secondary Growth of Stems",
        completed: true,
        content: `### 1. Primary Stem Anatomy
The shoot system elevates photosynthetic leaves toward sunlight and bears reproductive flowers. Stems consist of **nodes** (points of leaf attachment) and **internodes** (regions between nodes), terminating in a **terminal bud** containing the shoot apical meristem (SAM):
- **Eudicot Primary Stems:** Vascular bundles (xylem toward the center, phloem toward the outside) are arranged in a **concentric ring** dividing ground tissue into an outer **cortex** and an inner **pith**.
- **Monocot Stems:** Vascular bundles are **scattered** throughout ground tissue. Monocots lack vascular cambium and typically do not undergo secondary growth.

### 2. Secondary Growth and the Formation of Wood
Secondary growth expands stem girth in woody gymnosperms and eudicots:
- **Vascular Cambium:** Lateral meristem originating between primary xylem and primary phloem (fascicular cambium) and expanding across interfascicular regions. Each division produces **secondary xylem** (wood) toward the interior and **secondary phloem** toward the exterior.
- **Annual Rings (Growth Rings):**
  - *Springwood (Early Wood):* Formed during wet spring months with wide, thin-walled vessel elements optimized for maximal water conduction.
  - *Summerwood (Late Wood):* Formed during drier late summer months with narrow, thick-walled elements providing mechanical support.
  - The sharp contrast between late wood of one year and early wood of the next creates an **annual growth ring**.
- **Heartwood vs. Sapwood:**
  - *Sapwood:* Outer, lighter-colored functional wood that actively conducts water.
  - *Heartwood:* Older central core of dead wood plugged by **tyloses** and saturated with decay-resistant tannins, resins, and oils. Provides structural support but no water conduction.
- **Bark:** All tissues external to the vascular cambium:
  - *Inner Bark:* Living secondary phloem.
  - *Outer Bark (Periderm):* Cork cambium, phelloderm, and suberized cork cells interrupted by **lenticels** (porous spongy openings permitting internal gas exchange).

### 3. Specialized Modified Stems
Stems have evolved diverse survival and storage adaptations:
- **Rhizomes:** Horizontal underground stems with nodes and adventitious roots (e.g., irises, ginger).
- **Tubers:** Enlarged, fleshy underground storage stem tips; the 'eyes' of a potato are nodes bearing axillary buds.
- **Bulbs:** Short vertical underground stem surrounded by fleshy, overlapping leaf bases (e.g., onions, tulips).
- **Corms:** Solid, swollen underground stem storage tissue covered by papery scales (e.g., crocuses, gladioli).
- **Stolons (Runners):** Horizontal aboveground stems that root at nodes to propagate clonal plantlets (e.g., strawberries).
- **Thorns:** Modified woody protective stems developing from axillary buds (distinct from epidermal prickles on roses or modified leaf spines on cacti).`
      },
      {
        id: "quiz_bot_7",
        type: "quiz",
        title: "🌿 Chapter 7 Checkpoint: Stem Anatomy, Dendrochronology & Wood Morphology",
        completed: false,
        questions: [
          {
            question: "How are primary vascular bundles arranged in a cross-section of a herbaceous eudicot stem versus a monocot stem?",
            options: [
              "Eudicots arrange bundles in a concentric ring; monocots have vascular bundles scattered throughout ground tissue",
              "Monocots arrange bundles in a ring; eudicots scatter them randomly",
              "Both monocots and eudicots possess an identical solid core of central wood",
              "Neither group contains vascular bundles in stems"
            ],
            correct: 0,
            explanation: "Eudicot stems organize vascular bundles in a neat circle separating cortex from pith, whereas monocot stems feature scattered bundles throughout ground parenchyma."
          },
          {
            question: "What tissue is commercially and botanically designated as 'wood' in a tree trunk?",
            options: [
              "Secondary Xylem",
              "Secondary Phloem",
              "Periderm",
              "Primary Cortex"
            ],
            correct: 0,
            explanation: "Wood is composed of accumulated secondary xylem produced to the interior of the vascular cambium year after year."
          },
          {
            question: "What causes the visible distinct annual growth rings in the wood of temperate zone trees?",
            options: [
              "The stark contrast between wide, thin-walled springwood (early wood) and subsequent narrow, thick-walled summerwood (late wood)",
              "Layers of dirt trapped during winter storms",
              "Alternating layers of dead bark and live leaves",
              "Periodic shifts in Earth's gravitational pull"
            ],
            correct: 0,
            explanation: "Springwood develops large vessel diameters for high water flow; late summerwood has smaller lumens and thicker walls, creating a visible visual boundary each year."
          },
          {
            question: "The science of dating past historical events and analyzing ancient climate patterns by measuring annual tree ring widths is called:",
            options: [
              "Dendrochronology",
              "Paleoclimatology",
              "Palynology",
              "Silviculture"
            ],
            correct: 0,
            explanation: "Dendrochronology analyzes annual tree ring growth patterns; wider rings reflect favorable moist growing seasons, whereas narrow rings indicate drought or environmental stress."
          },
          {
            question: "What is the key biological difference between functional Sapwood and non-functional Heartwood in a mature tree?",
            options: [
              "Sapwood is the lighter outer wood actively conducting water; heartwood is the darker central core plugged with resins and tannins providing purely structural support",
              "Heartwood conducts water; sapwood conducts phloem sugars",
              "Sapwood is dead; heartwood is alive and dividing mitotically",
              "There is no difference; both conduct sap equally"
            ],
            correct: 0,
            explanation: "Sapwood contains functional water-conducting xylem vessels, whereas heartwood vessels are blocked by tyloses and impregnated with protective chemical extracts."
          },
          {
            question: "By botanical definition, what does 'bark' encompass on a woody stem?",
            options: [
              "All tissues situated to the exterior of the vascular cambium (including living secondary phloem and the outer periderm)",
              "Only the dead cork layer on the surface",
              "The central pith and heartwood",
              "The vascular cambium itself"
            ],
            correct: 0,
            explanation: "Bark consists of all tissues external to the vascular cambium, divided functionally into the inner bark (living secondary phloem) and outer bark (periderm)."
          },
          {
            question: "Spongy, elevated porous openings in the woody periderm of twigs that permit gas exchange between internal living tissues and the atmosphere are:",
            options: [
              "Lenticels",
              "Stomata",
              "Hydathodes",
              "Pits"
            ],
            correct: 0,
            explanation: "Lenticels are loosely packed regions of cork cells in the periderm that allow oxygen to diffuse into the metabolically active inner bark and cambium."
          },
          {
            question: "What happens if a tree is 'girdled' (a complete ring of outer and inner bark is stripped around the entire circumference of the trunk)?",
            options: [
              "The tree grows twice as fast",
              "The tree dies because living secondary phloem is severed, starving roots of photosynthetic sugars manufactured in the leaves",
              "Only the leaves die while the trunk survives indefinitely",
              "Water transport is immediately blocked while sugar flow increases"
            ],
            correct: 1,
            explanation: "Girdling severs the living secondary phloem ring; while xylem sap continues ascending, photosynthetic sugars cannot reach the root system, causing root death."
          },
          {
            question: "An edible culinary potato is botanically classified as a modified underground stem known as a:",
            options: [
              "Tuber",
              "Taproot",
              "Bulb",
              "Corm"
            ],
            correct: 0,
            explanation: "A potato is a stem tuber—a swollen underground rhizome tip specialized for starch storage; the 'eyes' are stem nodes possessing axillary buds."
          },
          {
            question: "Horizontal, underground fleshy stems that produce new shoot nodes and adventitious roots (such as ginger and iris) are:",
            options: [
              "Rhizomes",
              "Stolons",
              "Bulbs",
              "Pneumatophores"
            ],
            correct: 0,
            explanation: "Rhizomes are horizontal stems growing underground or along the soil surface, serving as perennial storage and vegetative propagation organs."
          },
          {
            question: "An onion bulb is constructed primarily of:",
            options: [
              "A small conical stem plate surrounded by thick, fleshy, overlapping leaf bases storing nutrients",
              "A swollen fibrous root system",
              "A single enormous seed cotyledon",
              "Dead sclerenchyma stone cells"
            ],
            correct: 0,
            explanation: "A bulb consists of a compact basal stem disk surrounded by modified, layered, fleshy leaf scales that store reserves, topped by papery protective tunics."
          },
          {
            question: "Strawberry plants reproduce vegetatively by sending out slender, horizontal aboveground stems that form new plantlets at nodes. These are:",
            options: [
              "Stolons (Runners)",
              "Corms",
              "Thorns",
              "Haustoria"
            ],
            correct: 0,
            explanation: "Stolons (runners) are specialized aerial horizontal stems that grow along the ground surface, producing daughter clones at intervals."
          },
          {
            question: "What outgrowths balloon into the lumens of older xylem vessel elements in the heartwood, sealing them against air bubbles and fungal pathogens?",
            options: [
              "Tyloses",
              "Bordered pits",
              "Plasmodesmata",
              "Statoliths"
            ],
            correct: 0,
            explanation: "Tyloses are balloon-like outgrowths of adjacent xylem parenchyma cells that push through pits into vessel elements, permanently sealing non-functional heartwood."
          },
          {
            question: "Hard, sharp, pointed modified stems that arise from axillary buds (such as those on honey locust trees) are classified as:",
            options: [
              "Thorns",
              "Spines",
              "Prickles",
              "Trichomes"
            ],
            correct: 0,
            explanation: "Botanical thorns are modified branches/stems originating from axillary buds (unlike spines, which are modified leaves, or prickles, which are epidermal outgrowths)."
          },
          {
            question: "What lateral cell paths transport water, nutrients, and defensive chemicals horizontally across the radial axis of a woody tree trunk?",
            options: [
              "Vascular Rays (Parenchyma rays)",
              "Sieve plates",
              "Lenticels",
              "Pericambial conduits"
            ],
            correct: 0,
            explanation: "Vascular rays are horizontal ribbons of parenchyma cells traversing the secondary xylem and phloem, facilitating radial transport and storage."
          },
          {
            question: "What is the primary anatomical component of a solid, swollen underground stem storage organ such as a Crocus or Gladiolus corm?",
            options: [
              "Almost entirely solid swollen stem tissue covered by thin, papery scale leaves",
              "Concentric layers of thick fleshy leaf scales",
              "A swollen primary taproot",
              "A cluster of air-filled aerenchyma sacs"
            ],
            correct: 0,
            explanation: "Unlike a bulb (which is mostly fleshy leaf scales), a corm consists primarily of solid swollen stem parenchyma tissue surrounded by thin, papery protective leaves."
          },
          {
            question: "Hardwood lumber is harvested from _______, whereas softwood lumber is harvested from _______.",
            options: [
              "Angiosperm eudicot trees (bearing vessel elements); Gymnosperm conifer trees (lacking vessels)",
              "Gymnosperms; Angiosperms",
              "Ferns; Mosses",
              "Monocot grasses; Fungi"
            ],
            correct: 0,
            explanation: "Hardwoods originate from angiosperm broadleaf trees (possessing vessels and dense fibers), while softwoods come from gymnosperm conifers whose wood consists almost entirely of tracheids."
          },
          {
            question: "Which hormone, synthesized in terminal apical buds, moves down the stem to inhibit the outgrowth of nearby axillary buds, maintaining 'apical dominance'?",
            options: [
              "Auxin",
              "Ethylene",
              "Gibberellin",
              "Abscisic acid"
            ],
            correct: 0,
            explanation: "Auxin synthesized by the shoot apical meristem flows basipetally down the stem, suppressing axillary lateral bud development (apical dominance)."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 8: PLANT ORGANS: LEAVES (18 Questions)
  // =========================================================================
  {
    id: "sec_bot_8",
    title: "Chapter 8: Plant Organs: Leaves",
    description: "Leaf morphology, internal anatomy (cuticle, mesophyll, stomata), gas exchange regulation, leaf adaptations, and autumn abscission.",
    activities: [
      {
        id: "act_bot_8_lesson",
        type: "page",
        title: "Module 8.1: Architecture & Physiology of Leaves",
        completed: true,
        content: `### 1. External Morphology of the Leaf
The leaf is the primary photosynthetic solar collector of the plant. A typical eudicot leaf comprises an expanded, flattened **blade (lamina)** attached to the stem by a stalk called the **petiole** (leaves lacking petioles are termed **sessile**):
- **Simple Leaves:** Possess a single undivided blade.
- **Compound Leaves:** Blade is divided into distinct **leaflets** (pinnately compound like an ash tree, or palmately compound like a buckeye).
- **Venation Patterns:** Monocots display **parallel venation**; eudicots feature **netted (reticulate) venation** (pinnate or palmate).

### 2. Internal Microscopic Leaf Anatomy
A cross-section reveals adaptations designed to balance light capture against transpirational water loss:
- **Upper & Lower Epidermis:** Single transparent cell layer coated by a hydrophobic **cuticle**. Lacks chloroplasts (except in guard cells). Lower epidermis generally contains a higher density of stomata.
- **Mesophyll (Ground Tissue):**
  - *Palisade Mesophyll:* Upper layer of columnar, tightly packed parenchyma cells rich in chloroplasts, optimized for absorbing solar photons.
  - *Spongy Mesophyll:* Lower layer of loosely packed, irregularly shaped cells with extensive air spaces, facilitating gas diffusion ($CO_2$ in, $O_2$ and $H_2O$ out) to and from stomata.
- **Veins (Vascular Bundles):** Continuous with stem vascular cylinders:
  - *Xylem:* Located on the upper (adaxial) side of the vein, delivering water and minerals.
  - *Phloem:* Located on the lower (abaxial) side of the vein, loading photosynthesized sucrose.
  - *Bundle Sheath:* Protective cylinder of parenchyma or sclerenchyma encasing the vein.

### 3. Stomatal Mechanism and Regulation
Stomatal pores open and close based on osmotic changes in the flanking **guard cells**:
- **Stomatal Opening:** Blue light activates plasma membrane $H^+$-ATPase pumps, extruding protons. The resulting membrane hyperpolarization drives potassium ($K^+$) and chloride ($Cl^-$) ions into guard cells. Water follows osmotically, increasing guard cell turgor. Due to radial cellulose micellation and thickened inner walls, guard cells bow apart, opening the pore.
- **Stomatal Closure:** Under water stress, root synthesis of **Abscisic Acid (ABA)** triggers rapid efflux of $K^+$ and anions. Water exits, guard cells become flaccid, and the pore snaps shut.

### 4. Modified Leaves & Ecological Adaptations
- **Tendrils:** Slender coiling structures (peas) that grasp supports via thigmotropism.
- **Spines:** Hard, non-photosynthetic leaves (cacti) that deter herbivores and reduce evaporative surface area.
- **Bracts:** Brightly colored floral leaves (poinsettia, dogwood) that substitute for petals to attract pollinators.
- **Insectivorous Leaves:** Pitcher plants, sundews, and Venus flytraps trap and enzymatically digest insects to obtain nitrogen in acidic bogs.

### 5. Autumn Leaf Senescence and Abscission
As daylength shortens and temperatures drop in temperate deciduous trees:
- Chlorophyll breaks down, unmasking yellow/orange **carotenoids**. Newly synthesized **anthocyanins** produce vibrant red and purple shades.
- An **Abscission Zone** develops at the petiole base: an *enzymatic separation layer* breaks down while a *suberized protective scar layer* seals the stem before leaf detachment.`
      },
      {
        id: "quiz_bot_8",
        type: "quiz",
        title: "🌿 Chapter 8 Checkpoint: Leaf Anatomy, Stomatal Dynamics & Senescence",
        completed: false,
        questions: [
          {
            question: "In internal leaf anatomy, which tissue layer consists of columnar, tightly packed chloroplast-rich cells positioned directly beneath the upper epidermis to maximize solar light capture?",
            options: [
              "Palisade Mesophyll",
              "Spongy Mesophyll",
              "Cortex",
              "Pith"
            ],
            correct: 0,
            explanation: "The palisade mesophyll consists of vertically elongated, chloroplast-dense parenchyma cells specialized for high-efficiency photon capture."
          },
          {
            question: "Why is the spongy mesophyll layer loosely organized with vast interconnected intercellular air spaces?",
            options: [
              "To facilitate rapid diffusion of carbon dioxide, oxygen, and water vapor between stomata and photosynthetic cells",
              "To store heavy reserves of timber wood",
              "To prevent the leaf from absorbing any sunlight",
              "To provide habitat for nitrogen-fixing bacteria"
            ],
            correct: 0,
            explanation: "The extensive air spaces in the spongy mesophyll provide high surface-area-to-volume exposure for gas exchange with minimum resistance."
          },
          {
            question: "In a vascular leaf vein, what is the relative anatomical orientation of the xylem and phloem?",
            options: [
              "Xylem is situated on the upper (adaxial) side; phloem is situated on the lower (abaxial) side",
              "Phloem is on top; xylem is on the bottom",
              "Xylem forms an outer ring surrounding central phloem",
              "Veins contain phloem only, never xylem"
            ],
            correct: 0,
            explanation: "Because vascular traces diverge outward from the stem, xylem occupies the upper half of the leaf vein while phloem occupies the lower half."
          },
          {
            question: "What ion fluxes trigger the osmotic swelling and opening of stomatal guard cells in daylight?",
            options: [
              "Active proton pumping outward drives a massive influx of Potassium ($K^+$) and chloride ions into guard cells, drawing water osmotically",
              "Rapid loss of all water into the atmosphere",
              "Accumulation of toxic suberin crystals",
              "Efflux of all potassium ions into adjacent epidermal cells"
            ],
            correct: 0,
            explanation: "Proton extrusion hyperpolarizes guard cells, driving $K^+$ and $Cl^-$ uptake; the resulting osmotic potential draws water in, bowing guard cells open."
          },
          {
            question: "Which plant hormone is synthesized under drought conditions to signal the rapid closing of stomata to prevent dehydration?",
            options: [
              "Abscisic Acid (ABA)",
              "Auxin",
              "Gibberellin",
              "Cytokinin"
            ],
            correct: 0,
            explanation: "Abscisic acid (ABA) synthesized during water stress triggers potassium and anion channel opening in guard cells, causing turgor loss and rapid stomatal closure."
          },
          {
            question: "How do the parallel veins of monocot leaves (e.g., corn, grasses) differ from the netted venation of eudicot leaves?",
            options: [
              "Monocot veins run parallel along the longitudinal axis of the blade, whereas eudicots exhibit branching reticulate networks",
              "Monocot leaves have no vascular veins",
              "Eudicot leaves contain only a single vein",
              "Monocot leaves have veins that run exclusively horizontally across the stem"
            ],
            correct: 0,
            explanation: "Monocot blades feature parallel primary veins traversing the length of the blade, while eudicots feature netted (reticulate) pinnate or palmate venation."
          },
          {
            question: "The bright red 'petals' of a holiday Poinsettia are not true flower petals, but modified colorful leaves known as:",
            options: [
              "Bracts",
              "Spines",
              "Tendrils",
              "Bud scales"
            ],
            correct: 0,
            explanation: "Floral bracts are modified, colorful leaves situated beneath small, inconspicuous true flowers to attract pollinating insects."
          },
          {
            question: "The sharp, non-photosynthetic spines of a desert cactus are evolutionary modifications of which organ?",
            options: [
              "Leaves",
              "Stems",
              "Roots",
              "Flower sepals"
            ],
            correct: 0,
            explanation: "Cactus spines are modified leaves that reduce evaporative surface area and deter herbivores; the green fleshy pad is the photosynthetic stem."
          },
          {
            question: "Why have carnivorous plants (such as pitcher plants and Venus flytraps) evolved specialized insect-trapping leaves?",
            options: [
              "To obtain essential nitrogen and minerals in nutrient-poor, acidic bog soils",
              "Because they cannot perform photosynthesis",
              "To absorb water in arid deserts",
              "To kill all insect pests in the forest"
            ],
            correct: 0,
            explanation: "Carnivorous plants are photosynthetic autotrophs that trap insects specifically to scavenge scarce mineral nutrients (nitrogen and phosphorus) in bog soils."
          },
          {
            question: "What unmasks the brilliant yellow and orange colors seen in deciduous tree leaves during autumn?",
            options: [
              "The degradation of green chlorophyll pigments unmasks preexisting carotenoids (carotenes and xanthophylls)",
              "Sudden production of vast quantities of green chlorophyll",
              "Accumulation of toxic sulfur from rainfall",
              "Freezing of pure water inside xylem vessels"
            ],
            correct: 0,
            explanation: "Cool temperatures and shorter days trigger chlorophyll breakdown; the more stable yellow and orange carotenoids already present in plastids become visible."
          },
          {
            question: "Which water-soluble pigments are newly synthesized in the autumn leaves of some trees (such as sugar maples), producing deep red and purple foliage?",
            options: [
              "Anthocyanins",
              "Chlorophyll b",
              "Carotenes",
              "Lignins"
            ],
            correct: 0,
            explanation: "Anthocyanins are synthesized in late autumn within leaf vacuoles as trapped sugars react under bright sunlight, yielding brilliant red-purple hues."
          },
          {
            question: "The process by which leaves are shed in autumn involves the development of which specialized anatomical zone at the base of the petiole?",
            options: [
              "The Abscission Zone",
              "The Casparian strip",
              "The Lenticel zone",
              "The Cambium ring"
            ],
            correct: 0,
            explanation: "The abscission zone develops at the petiole base, comprising an outer separation layer of weakened parenchyma and a suberized protective cork scar layer."
          },
          {
            question: "A leaf blade that is subdivided into multiple distinct, separate leaflets attached to a central rachis or petiole is termed:",
            options: [
              "A Compound leaf",
              "A Simple leaf",
              "A Sessile leaf",
              "A Bract"
            ],
            correct: 0,
            explanation: "A compound leaf has its blade divided into distinct leaflets, distinguished from simple leaves by the absence of an axillary bud at the leaflet base."
          },
          {
            question: "What is the function of the waxy cuticle covering the upper and lower leaf epidermis?",
            options: [
              "Drastically restricting non-stomatal water evaporation and resisting microbial invasion",
              "Absorbing liquid nitrogen from raindrops",
              "Conducting high-voltage electric currents",
              "Digesting airborne fungal spores"
            ],
            correct: 0,
            explanation: "The cuticle consists of hydrophobic cutin and waxes that restrict uncontrolled evaporative water loss and serve as a physical barrier against pathogen entry."
          },
          {
            question: "Why do plants adapted to arid environments (xerophytes, such as oleander) often feature sunken stomatal crypts lined with trichome hairs?",
            options: [
              "To create sheltered microclimates of high humidity, reducing the transpirational water vapor gradient between the leaf and air",
              "To trap flying insects for protein",
              "To allow hot desert winds to scour the stomata",
              "To absorb toxic carbon monoxide"
            ],
            correct: 0,
            explanation: "Sunken stomata sheltered in hair-lined crypts trap a stagnant layer of humid air, dramatically reducing the evaporative water loss driven by dry winds."
          },
          {
            question: "The coiling, sensitive climbing organs of garden peas that wrap around garden trellises are modified leaves or leaflets called:",
            options: [
              "Tendrils",
              "Spines",
              "Thorns",
              "Haustoria"
            ],
            correct: 0,
            explanation: "Tendrils are specialized modified climbing leaves or stem shoots that respond thigmotropically to touch, wrapping around supports to elevate shoots."
          },
          {
            question: "Leaves that completely lack a petiole, attaching their blades directly onto the stem node (such as grasses), are termed:",
            options: [
              "Sessile",
              "Petiolate",
              "Compound",
              "Palmate"
            ],
            correct: 0,
            explanation: "Sessile leaves lack a supporting stalk (petiole), having blades that attach directly to the stem node or wrap around it in a basal sheath."
          },
          {
            question: "What physiological process describes the loss of liquid water droplets from hydathode pores along leaf margins under conditions of high soil moisture and zero transpiration?",
            options: [
              "Guttation",
              "Transpiration",
              "Plasmolysis",
              "Abscission"
            ],
            correct: 0,
            explanation: "Guttation occurs at night when high root pressure forces liquid xylem sap out through specialized marginal leaf pores called hydathodes."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // CHAPTER 9: FLOWERS, FRUITS, AND SEEDS (22 Questions)
  // =========================================================================
  {
    id: "sec_bot_9",
    title: "Chapter 9: Flowers, Fruits, and Seeds",
    description: "Floral morphology, double fertilization, fruit development and classification, seed anatomy, dormancy, and dispersal mechanisms.",
    activities: [
      {
        id: "act_bot_9_lesson",
        type: "page",
        title: "Module 9.1: Sexual Reproduction in Angiosperms",
        completed: true,
        content: `### 1. The Anatomy of a Complete Flower
The flower is the specialized reproductive shoot of angiosperms, featuring four concentric whorls of modified floral appendages attached to the **receptacle**:
1. **Calyx (Sepals):** Outermost green whorl protecting the floral bud prior to opening.
2. **Corolla (Petals):** Conspicuous, colorful whorl that visually attracts animal pollinators. (Calyx + Corolla = **Perianth**).
3. **Androecium (Stamens - Male Reproductive Organs):**
   - *Filament:* Slender stalk supporting the anther.
   - *Anther:* Terminal four-chambered pollen sac producing microspores via meiosis, which develop into two-celled **pollen grains** (immature microgametophytes containing a tube cell and a generative cell).
4. **Gynoecium (Carpels/Pistil - Female Reproductive Organs):**
   - *Stigma:* Receptive sticky terminal platform for pollen grain adhesion.
   - *Style:* Slender neck through which the pollen tube grows.
   - *Ovary:* Swollen basal chamber containing one or more **ovules**. Inside each ovule, a megaspore mother cell undergoes meiosis to form the 7-celled, 8-nucleate **female gametophyte (embryo sac)** containing the **egg cell** and a central cell with two **polar nuclei**.

### 2. Pollination and Double Fertilization
- **Pollination:** The physical transfer of pollen from an anther to a receptive stigma (mediated by wind, insects, birds, bats, or water).
- **Pollen Tube Growth:** Upon landing on a compatible stigma, the pollen grain germinates, extending a pollen tube down the style into the ovary, guided by chemical signals (synergid LURE peptides) toward the ovule's **micropyle**.
- **Double Fertilization (Hallmark of Angiosperms):**
  - The generative cell divides mitotically to produce **two non-motile sperm cells**.
  - *First Fertilization:* One sperm fuses with the haploid egg cell ($1n$) to form the diploid **zygote ($2n$)**, which develops into the embryo.
  - *Second Fertilization:* The second sperm fuses with the two haploid polar nuclei ($1n + 1n$) in the central cell, creating a **triploid ($3n$) endosperm** nucleus, which divides to form nutrient-rich endosperm tissue nourishing the developing embryo.

### 3. Seed Structure and Dormancy
Following fertilization, the ovule matures into a **seed**, encased within a protective **seed coat (testa)**:
- **Embryo:** Features an embryonic root (**radicle**), embryonic shoot (**epicotyl/hypocotyl**), and one (monocots) or two (eudicots) **cotyledons** (seed leaves).
- **Dormancy:** Dehydration (down to 5-15% water) suspends metabolic activity, enforced by high abscisic acid levels until environmental triggers (cold stratification, seed coat scarification, light) initiate **germination**.

### 4. Fruit Development and Classification
The ovary wall thickens into the **pericarp** (exocarp, mesocarp, endocarp), transforming the ovary into a **fruit** that protects seeds and facilitates dispersal:
- **Simple Fruits:** Derived from a single ovary of a single flower:
  - *Fleshy:* Berries (tomato, grape), Drupes (peach, cherry with stony pit), Pomes (apple, pear derived from receptacle).
  - *Dry Dehiscent (split open at maturity):* Legumes (peas, beans), Capsules (poppy).
  - *Dry Indehiscent (remain closed):* Achenes (sunflower), Caryopsis/Grains (corn, wheat fused to fruit wall), Nuts (acorn, hazelnut).
- **Aggregate Fruits:** Derived from multiple separate carpels of a single flower (e.g., raspberry, blackberry, strawberry).
- **Multiple Fruits:** Derived from the fused ovaries of many clustered flowers on an inflorescence (e.g., pineapple, fig).`
      },
      {
        id: "quiz_bot_9",
        type: "quiz",
        title: "🌿 Chapter 9 Checkpoint: Floral Anatomy, Double Fertilization & Fruit Biology",
        completed: false,
        questions: [
          {
            question: "What are the four concentric whorls of organs that compose a complete angiosperm flower, from outermost to innermost?",
            options: [
              "Sepals (calyx), Petals (corolla), Stamens (androecium), and Carpels (gynoecium)",
              "Roots, Stems, Leaves, and Buds",
              "Xylem, Phloem, Cortex, and Pith",
              "Endosperm, Zygote, Testa, and Cotyledon"
            ],
            correct: 0,
            explanation: "A complete flower features four whorls: sepals (protective), petals (attraction), stamens (male microsporophylls), and carpels (female megasporophylls)."
          },
          {
            question: "The male reproductive organ of a flower, the stamen, is composed of which two anatomical parts?",
            options: [
              "Filament and Anther",
              "Stigma and Style",
              "Ovary and Ovule",
              "Petal and Sepal"
            ],
            correct: 0,
            explanation: "The stamen consists of a supporting stalk (the filament) and a terminal pollen-producing sac (the anther)."
          },
          {
            question: "The female reproductive organ of a flower (the carpel or pistil) consists of which three parts?",
            options: [
              "Stigma, Style, and Ovary",
              "Anther, Filament, and Pollen",
              "Sepal, Petal, and Receptacle",
              "Radicle, Hypocotyl, and Epicotyl"
            ],
            correct: 0,
            explanation: "A carpel comprises the sticky terminal stigma for pollen reception, the neck-like style, and the basal swollen ovary containing ovules."
          },
          {
            question: "What unique reproductive process defines flowering plant (angiosperm) fertilization?",
            options: [
              "Double Fertilization (one sperm fertilizes the egg to form a 2n zygote; the second sperm fertilizes the central cell to form 3n endosperm)",
              "External fertilization in open rain water",
              "Binary fission of pollen grains",
              "Asexual cloning without gametes"
            ],
            correct: 0,
            explanation: "Double fertilization is unique to angiosperms: one sperm fuses with the egg yielding the 2n zygote, while the second sperm fuses with two polar nuclei yielding the 3n endosperm."
          },
          {
            question: "What is the biological ploidy level of the nutrient-rich Endosperm tissue that nourishes the developing angiosperm embryo?",
            options: [
              "Triploid (3n)",
              "Haploid (1n)",
              "Diploid (2n)",
              "Tetraploid (4n)"
            ],
            correct: 0,
            explanation: "The central cell contains two haploid polar nuclei ($1n + 1n$) that fuse with a haploid sperm ($1n$), producing triploid ($3n$) endosperm."
          },
          {
            question: "Following successful fertilization, the plant's ovule matures into a _______, while the surrounding ovary wall matures into a _______.",
            options: [
              "Seed; Fruit",
              "Fruit; Seed",
              "Pollen grain; Flower",
              "Root; Stem"
            ],
            correct: 0,
            explanation: "In angiosperm botany, ovules develop into seeds containing embryos, while the surrounding ovary wall expands into the fruit."
          },
          {
            question: "In botanical classification, what is a Drupe?",
            options: [
              "A fleshy simple fruit with a thin skin exocarp, fleshy mesocarp, and a hard, stony endocarp (pit) enclosing a single seed (e.g., peach, plum, cherry)",
              "A dry fruit that splits along two seams (e.g., pea pod)",
              "A fruit derived from hundreds of separate flowers fused together",
              "A winged seed dispersed by wind"
            ],
            correct: 0,
            explanation: "Drupes (stone fruits) have a fleshy mesocarp and a lignified, stony endocarp ('pit') protecting the seed, as in peaches, cherries, and olives."
          },
          {
            question: "A culinary tomato is botanically classified as a:",
            options: [
              "Berry",
              "Drupe",
              "Pome",
              "Legume"
            ],
            correct: 0,
            explanation: "In botany, a berry is a fleshy simple fruit developing from a compound ovary where the entire pericarp becomes soft and fleshy, enclosing one or more seeds."
          },
          {
            question: "An Aggregate Fruit (such as a raspberry or blackberry) develops from:",
            options: [
              "A single flower possessing multiple separate, unfused carpels",
              "An inflorescence of many separate flowers fusing together",
              "An unfertilized leaf blade",
              "A single carpel that dries at maturity"
            ],
            correct: 0,
            explanation: "Aggregate fruits develop from a single flower that contains numerous separate carpels; each ovary forms a tiny fruitlet attached to a common receptacle."
          },
          {
            question: "Pineapples and figs are examples of Multiple Fruits, meaning they develop from:",
            options: [
              "The ovaries of many separate, clustered flowers on a single inflorescence that fuse together during development",
              "A single flower with a single stamen",
              "Underground rhizome swellings",
              "Gymnosperm seed cones"
            ],
            correct: 0,
            explanation: "Multiple fruits develop from an inflorescence (tight cluster of many flowers) whose individual ovaries swell and fuse into a single collective fruit body."
          },
          {
            question: "The single large seed cotyledon found in grass and cereal grain embryos (such as corn and wheat) is specialized for absorbing endosperm and is called the:",
            options: [
              "Scutellum",
              "Coleoptile",
              "Radicle",
              "Hypocotyl"
            ],
            correct: 0,
            explanation: "The monocot grass cotyledon is modified into a shield-like scutellum that secretes digestive enzymes and absorbs nutrients from the endosperm."
          },
          {
            question: "What is the embryonic root of a seed called, which is the very first structure to emerge during seed germination?",
            options: [
              "The Radicle",
              "The Epicotyl",
              "The Coleoptile",
              "The Plumule"
            ],
            correct: 0,
            explanation: "The radicle is the embryonic root; it emerges first through the seed coat to anchor the seedling and begin water uptake."
          },
          {
            question: "Seed dormancy enforced by a thick, impermeable seed coat can be broken artificially or naturally by scratching, chipping, or acid-treating the coat. This is:",
            options: [
              "Scarification",
              "Stratification",
              "Vernalization",
              "Imbibition"
            ],
            correct: 0,
            explanation: "Scarification physically breaks or chemically weakens an impermeable seed coat (via digestive acid in bird guts or mechanical abrasion) to permit water imbibition."
          },
          {
            question: "Subjecting damp seeds to a prolonged period of cold temperatures (simulating winter) to break biochemical dormancy is called:",
            options: [
              "Stratification",
              "Scarification",
              "Photoperiodism",
              "Thigmotropism"
            ],
            correct: 0,
            explanation: "Cold stratification breaks physiological seed dormancy by lowering abscisic acid and increasing gibberellins, ensuring germination occurs in spring."
          },
          {
            question: "The initial physical uptake of water by a dry seed, causing it to swell and rupture its seed coat to trigger germination metabolism, is:",
            options: [
              "Imbibition",
              "Transpiration",
              "Guttation",
              "Plasmolysis"
            ],
            correct: 0,
            explanation: "Imbibition is the passive physical absorption of water by colloidal proteins and cellulose in dry seed tissues, causing dramatic swelling."
          },
          {
            question: "What protective sheath encloses and shields the delicate emerging shoot tip of grass seedlings as they push upward through abrasive soil?",
            options: [
              "The Coleoptile",
              "The Coleorhiza",
              "The Scutellum",
              "The Perisperm"
            ],
            correct: 0,
            explanation: "The coleoptile is a hollow, protective cylinder enclosing the apical meristem and embryonic leaves in monocot seedlings until it reaches the light."
          },
          {
            question: "Flowers pollinated by nocturnal bats or moths typically exhibit which floral characteristics?",
            options: [
              "White or pale-colored petals with heavy, sweet musky odors opening predominantly at night",
              "Bright red odorless petals opening only at noon",
              "Tiny green petals completely lacking nectar",
              "Blue flowers that mimic female bees"
            ],
            correct: 0,
            explanation: "Bat- and moth-pollinated flowers open at night, are white or dull-colored for visibility in darkness, and release intense fermenting or sweet fragrances."
          },
          {
            question: "Flowers that rely exclusively on wind for pollination (such as oak trees and grasses) typically lack:",
            options: [
              "Showy, colorful petals, sweet scents, and nectar rewards",
              "Pollen grains and stamens",
              "Stigmas and ovaries",
              "Cellulose in cell walls"
            ],
            correct: 0,
            explanation: "Wind-pollinated flowers invest energy into producing millions of lightweight pollen grains and large feathery stigmas rather than visual petals, scents, or nectar."
          },
          {
            question: "The edible flesh of an apple or pear is classified as a 'Pome' and develops primarily from which floral structure?",
            options: [
              "The enlarged, fleshy hypanthium (floral tube / receptacle)",
              "The mature seed coat",
              "The central seed cotyledons",
              "The swollen anther filaments"
            ],
            correct: 0,
            explanation: "In accessory fruits like pomes, the bulk of the edible flesh is formed by the enlarged receptacle and floral tube surrounding the papery core ovary."
          },
          {
            question: "What is an Achene?",
            options: [
              "A small, dry, indehiscent one-seeded fruit where the seed is attached to the fruit wall at only one point (e.g., sunflower 'seeds')",
              "A fleshy fruit with multiple pits",
              "A giant tropical pod that explodes when dry",
              "A swollen fungal fruiting body"
            ],
            correct: 0,
            explanation: "An achene is a dry simple fruit containing a single seed attached to the pericarp wall only at its base (the edible sunflower kernel inside the shell)."
          },
          {
            question: "In flowering plants, the mature female gametophyte (embryo sac) within the ovule typically consists of how many cells and nuclei?",
            options: [
              "7 cells containing 8 nuclei",
              "2 cells containing 2 nuclei",
              "100 cells containing 1,000 nuclei",
              "1 single un-nucleated vacuole"
            ],
            correct: 0,
            explanation: "The typical Polygonum-type embryo sac consists of 7 cells containing 8 nuclei: 3 antipodal cells, 2 synergids, 1 egg cell, and 1 central cell with 2 polar nuclei."
          },
          {
            question: "Why is seed dispersal critically beneficial for maternal plant reproductive fitness?",
            options: [
              "It moves offspring away from the parent, reducing resource competition and minimizing inbreeding and pathogen transmission",
              "It forces all offspring to die in the winter",
              "It prevents seeds from ever absorbing water",
              "It eliminates the need for pollination in future generations"
            ],
            correct: 0,
            explanation: "Dispersal spreads progeny to novel habitats, escapes dense density-dependent seedling mortality under the parent canopy, and expands species range."
          }
        ]
      }
    ]
  }
];
