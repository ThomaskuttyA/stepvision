export interface ProductItem {
    name: string;
    image?: string;
    description?: string;
}

export interface Subcategory {
    name: string;
    items: ProductItem[];
}

export interface Product {
    slug: string;
    name: string;
    icon: string;
    coverImage: string;
    description: string;
    subcategories: Subcategory[];
}

export const products: Product[] = [
    {
        slug: "building-materials",
        name: "1) BUILDING MATERIALS & HARDWARE",
        icon: "🏗️",
        coverImage: "/images/covers/new_catalog/steel_bars.png",
        description: "Comprehensive construction materials including steel, wood, paints, and specialized hardware.",
        subcategories: [
            {
                name: "Steel Bars",
                items: [
                    { name: "REINFORCE BARS", image: "/images/products/new_catalog/reinforcement-bars.jpg", description: "Reinforcement Round bar available in various sizes 6 to 32 mm diameter." },
                    { name: "FLAT BARS", image: "/images/products/new_catalog/flat-bars.jpg", description: "Mild Steel Flat bar available in various sizes 10 x 3, 13X3 mm, 13 X 5 mm etc." },
                    { name: "SERRATED BARS", image: "/images/products/new_catalog/serrated-bars.jpg", description: "Serrated bar available various sizes 3mm to 5 mm at various depths of 20mm to 70mm." }
                ]
            },
            {
                name: "White Wood",
                items: [
                    { name: "Plywood", image: "/images/products/new_catalog/plywood.jpeg", description: "Various type ply wood available – Bendy Plywood, Birch Plywood, Commercial plywood, Film faced plywood, Veneer plywood WBP plywood." },
                    { name: "MOISTURE RESISTANCE MDF", image: "/images/products/new_catalog/moisture-resistance-mdf.jpg", description: "MR MDF No soggy sagas, only style! Secret weapon: water-repelling glue, maybe a waxy dip. Pulped, pressed, prepped, ready to conquer damp." },
                    { name: "SOLID CORE CHIP BOARD", image: "/images/products/new_catalog/solid-core-chip-board.jpg", description: "Solid Core Chip Board 38 mm thickness, size 915 x 2135mm. Easy to work with and can be finished with laminates, veneers, or paint." }
                ]
            },
            {
                name: "Paints",
                items: [
                    { name: "INTERIOR PAINTS", image: "/images/products/new_catalog/interior-paints.jpg", description: "Jotun Fenomastic My Home Smooth Silk. Premium smooth silk finish." },
                    { name: "EXTERIOR PAINTS", image: "/images/products/new_catalog/exterior-paints.jpg", description: "Weathercoat Anti Dustt TT. 100% acrylic emulsion exterior wall paint with Dust Guard technology." },
                    { name: "ANTI FOUL PAINTS", image: "/images/products/new_catalog/anti-foul-paints.jpg", description: "High-performance anti-fouling protective coatings for marine environments." }
                ]
            },
            {
                name: "Water Proofing Materials",
                items: [
                    { name: "Water Proofing Additive for Cements/Mortar", image: "/images/products/new_catalog/sikalite.jpeg", description: "SIKA LITE. Ready to use powdered waterproofing admixture for cement/sand mortars and concrete." },
                    { name: "Silicon Sealant", image: "/images/products/new_catalog/sikasil-1.jpeg", description: "SIKA universal multipurpose silicone sealants for glazing and weatherproofing." }
                ]
            },
            {
                name: "CEMENT BOARD",
                items: [
                    { name: "FIBRE CEMENT BOARD", image: "/images/products/building-materials-hardware/cement-board/cement-fibre-board.jpg", description: "Durable and reliable Fibre Cement Board for all construction needs." },
                    { name: "GYPSUM BOARD", image: "/images/products/new_catalog/gypsum-board.jpg", description: "High-quality Gypsum Board for versatile construction applications." }
                ]
            },
            {
                name: "POWER TOOLS",
                items: [
                    { name: "ROTORY HAMMERS", image: "/images/products/new_catalog/rotary-hammer.jpg", description: "Professional grade drilling and hammering equipment for high-performance construction tasks." },
                    { name: "ANGLE GRINDERS", image: "/images/products/new_catalog/angle-grinder.jpg", description: "Heavy-duty electric angle grinders for precision cutting and grinding in metal and stone." },
                    { name: "CUT OFF SAWS", image: "/images/products/new_catalog/cut-off-saw.jpg", description: "Industrial abrasive cut-off saw designed for powerful, accurate cutting through metal sections." }
                ]
            },
            {
                name: "HAND & MEASURING TOOLS",
                items: [
                    { name: "COMBINATION PLIERS", image: "/images/products/new_catalog/combination-pliers.jpg", description: "Professional grade multi-purpose combination pliers with ergonomic grips for maximum control." },
                    { name: "TOOLS SET", image: "/images/products/new_catalog/tools-set.jpg", description: "Comprehensive high-quality tool set featuring essential equipment for professional maintenance and repair work." },
                    { name: "SPIRIT LEVEL", image: "/images/products/new_catalog/spirit-level.jpg", description: "Precision spirit level for accurate horizontal and vertical alignment in construction and carpentry." },
                    { name: "MEASURING TAPE", image: "/images/products/new_catalog/measuring-tape.jpg", description: "Durable and accurate measuring tape with clear markings and robust locking mechanism." },
                    { name: "SAFETY SHOES", image: "/images/products/new_catalog/safety-shoes.jpg", description: "Premium industrial safety shoes providing superior protection and comfort for rugged work environments." }
                ]
            },
        ]
    },
    {
        slug: "heavy-equipment",
        name: "2) HEAVY EQUIPMENTS & MACHINARIES",
        icon: "🚜",
        coverImage: "/images/covers/new_catalog/heavy_equipment.png",
        description: "Industrial machinery, earthmoving equipment, and specialized mixing processing units.",
        subcategories: [
            {
                name: "EARTH MOVING",
                items: [
                    { name: "BACKHOE LOADERS", image: "/images/products/new_catalog/backhoe-loader.jpg", description: "Multi-functional backhoe loaders for digging, trenching, and loading tasks." },
                    { name: "TRACK LOADER", image: "/images/products/new_catalog/track-loader.jpg", description: "Versatile track loaders for efficient loading and material handling on various terrains." },
                    { name: "ESCAVATORS", image: "/images/products/new_catalog/excavator.jpg", description: "Heavy-duty excavators for large scale digging and earthmoving operations." }
                ]
            },
            {
                name: "LIFTING EQUIPMENTS",
                items: [
                    { name: "BOOM LIFT", image: "/images/products/new_catalog/boom-lift.jpg", description: "Versatile boom lifts for high-altitude reach and stability." },
                    { name: "SCISSOR LIFT", image: "/images/products/new_catalog/scissor-lift.jpg", description: "Efficient scissor lifts for vertical elevation and workspace safety." },
                    { name: "MOBILE CRANES", image: "/images/products/new_catalog/mobile-crane.jpg", description: "High-capacity mobile cranes for heavy lifting across various sites." },
                    { name: "FORK LIFTS", image: "/images/products/new_catalog/fork-lift.jpg", description: "Reliable forklifts for material handling and warehouse operations." },
                    { name: "PALLET TRUCKS", image: "/images/products/new_catalog/pallet-truck.jpg", description: "Durable pallet trucks for efficient transport of goods and materials." }
                ]
            },
            {
                name: "TRANSPORT & HAULAGE",
                items: [
                    { name: "TRUCK", image: "/images/products/new_catalog/truck-scania.jpg", description: "Heavy-duty Scania trucks for reliable large-scale material transport and haulage." },
                    { name: "TRAILOR", image: "/images/products/new_catalog/trailer-benz.jpg", description: "Durable Mercedes-Benz trailers for specialized transport and heavy load hauling." }
                ]
            },
            {
                name: "MIXING & PROCESSING",
                items: [
                    { name: "TRUCK MIXER", image: "/images/products/new_catalog/truck-mixer-sany.jpg", description: "Professional grade Sany truck mixers for on-site concrete preparation and delivery." },
                    { name: "INDUSTRIAL MIXER", image: "/images/products/new_catalog/industrial-mixer-imer.png", description: "High-performance Imer industrial mixers for consistent mixing of construction materials." }
                ]
            }
        ]
    },
    {
        slug: "automotive",
        name: "3) AUTOMOTIVE & SPARE PARTS",
        icon: "🚗",
        coverImage: "/images/covers/new_catalog/automotive.png",
        description: "Premium vehicles, genuine spare parts, and specialized automotive components.",
        subcategories: [
            {
                name: "VEHICLES",
                items: [
                    { name: "GOLF CAR", image: "/images/products/new_catalog/golf-car-clubcar.png", description: "Premium Club Car golf cars and utility vehicles for golf courses, resorts, and gated communities." }
                ]
            },
            {
                name: "TYRES",
                items: [
                    { name: "STANDARD TYRES", image: "/images/products/new_catalog/standard-tyre.png", description: "High-quality standard tires for various passenger and commercial vehicles." },
                    { name: "OFF ROAD TYRES", image: "/images/products/new_catalog/off-road-tyre.jpg", description: "Durable off-road tires designed for superior traction and performance on rugged terrains." }
                ]
            },
            {
                name: "ELECTRICAL & COOLING",
                items: [
                    { name: "ALTERNATOR", image: "/images/products/new_catalog/alternator.png", description: "High-output alternators for reliable vehicle electrical system charging." },
                    { name: "STARTING MOTOR", image: "/images/products/new_catalog/starting-motor.png", description: "Powerful starting motors for consistent and dependable engine ignition." },
                    { name: "RADIATOR", image: "/images/products/new_catalog/radiator.png", description: "High-efficiency Radiator for reliable engine cooling in all conditions." },
                    { name: "AC COMPONENTS", image: "/images/products/new_catalog/ac-components.png", description: "Complete range of premium automotive air conditioning compressors and components." }
                ]
            },
            {
                name: "ENGINE PARTS",
                items: [
                    { name: "PISTON", image: "/images/products/new_catalog/engine-piston.jpg", description: "Precision engineered pistons for various engine models." },
                    { name: "ENGINE PARTS", image: "/images/products/new_catalog/engine-parts-set.jpg", description: "Comprehensive range of high-quality engine components and replacement parts." },
                    { name: "GASKET", image: "/images/products/new_catalog/engine-gasket.jpg", description: "High-quality engine gaskets for reliable sealing and performance." },
                    { name: "FILTERS", image: "/images/products/new_catalog/engine-filter.jpg", description: "Premium oil, air, and fuel filters for superior engine protection and longevity." }
                ]
            },
            {
                name: "SUSPENSION & STEERING",
                items: [
                    { name: "SHOCK ABSORBER", image: "/images/products/new_catalog/shock-absorber.png", description: "High-performance suspension dampening systems for various vehicles." },
                    { name: "CONTROL ARMS", image: "/images/products/new_catalog/control-arm.png", description: "Durable and precision-engineered steering control arm components." },
                    { name: "STEERING COMPONENTS", image: "/images/products/new_catalog/steering-components.png", description: "Complete range of precision steering racks, linkage, and associated components." }
                ]
            },
            {
                name: "TRANSMISSION",
                items: [
                    { name: "GEAR BOX COMPONENTS", image: "/images/products/new_catalog/gearbox-components.png", description: "Precision-engineered transmission gears, casings, and synchronizer assemblies." },
                    { name: "CLUTCH SYSTEMS", image: "/images/products/new_catalog/clutch-systems.png", description: "High-performance clutch kits, pressure plates, and release bearings for smooth engagement." },
                    { name: "DRIVE SHAFT COMPONENTS", image: "/images/products/new_catalog/driveshaft-components.png", description: "Robust power transmission shafts, U-joints, and differential components." }
                ]
            },
        ]
    },
    {
        slug: "marine",
        name: "4) MARINE EQUIPMENT",
        icon: "⚓",
        coverImage: "/images/covers/new_catalog/marine.png",
        description: "Professional maritime gear including anchoring, electronics, and safety systems.",
        subcategories: [
            {
                name: "ANCHORING & DOCKING",
                items: [
                    { name: "BOAT ANCHORS", image: "/images/products/new_catalog/boat-anchor.jpg", description: "High-hold boat anchors for various seabeds and vessel sizes." },
                    { name: "MOORING ROPES", image: "/images/products/new_catalog/mooring-rope.png", description: "Durable marine-grade nylon and polyester mooring ropes." },
                    { name: "BOAT FENDERS", image: "/images/products/new_catalog/boat-fender.jpg", description: "Impact-resistant boat fenders for optimal hull protection while docking." },
                    { name: "SHACKLES", image: "/images/products/new_catalog/shackles.png", description: "Stainless steel marine shackles and heavy-duty connectors." }
                ]
            },
            {
                name: "MARINE ELECTRONICS",
                items: [
                    { name: "GPS UNITS", image: "/images/products/new_catalog/gps-unit.jpg", description: "Advanced high-precision marine navigation GPS systems." },
                    { name: "VHF RADIO", image: "/images/products/new_catalog/vhf-radio.png", description: "Global maritime communication VHF radios for clear emergency and operational hailing." },
                    { name: "FISH FINDERS", image: "/images/products/new_catalog/fish-finder.png", description: "High-resolution CHIRP sonar for precise maritime detecting and underwater imaging." },
                    { name: "MARINE SPEAKERS", image: "/images/products/new_catalog/marine-speaker.jpg", description: "Premium waterproof marine entertainment systems for harsh sea environments." }
                ]
            },
            {
                name: "ELECTRICAL & LIGHTING",
                items: [
                    { name: "MARINE LED LIGHTS", image: "/images/products/new_catalog/marine-led-light.png", description: "High-intensity underwater and deck LED lighting systems." },
                    { name: "NAVIGATION LIGHTS", image: "/images/products/new_catalog/navigation-light.png", description: "Certified maritime navigation and signal lighting for safe passage." },
                    { name: "MARINE ELECTRICAL WIRING", image: "/images/products/new_catalog/marine-wiring.jpg", description: "Tinned copper marine-grade multi-core electrical wiring and cables." }
                ]
            },
            {
                name: "SAFETY EQUIPMENT",
                items: [
                    { name: "Life Jackets", image: "https://placehold.co/600x400/1A1A2E/D4AF37?text=LifeJackets", description: "SOLAS approved life jackets for all passenger types." },
                    { name: "LIFE RINGS", image: "/images/products/new_catalog/life-ring.png", description: "High-visibility SOLAS approved life rings and rescue buoys." },
                    { name: "LIFEBOUY LIGHTS", image: "/images/products/new_catalog/lifebuoy-light.png", description: "Automatic water-activated lifebuoy self-igniting lights." },
                    { name: "EPIRB", image: "/images/products/new_catalog/epirb.png", description: "Global emergency position indicating radio beacons for sea rescue." },
                    { name: "Flares", image: "https://placehold.co/600x400/1A1A2E/D4AF37?text=Flares", description: "Handheld and parachute marine distress signals." }
                ]
            },
            {
                name: "MARINE PLUMBING & STEERING",
                items: [
                    { name: "FLIP TRAP SINK DRAIN", image: "/images/products/new_catalog/sink-drain.jpg", description: "Space-saving marine flip-trap sink drains with integrated odor blocker." },
                    { name: "BRASS FITTING", image: "/images/products/new_catalog/brass-fitting.jpg", description: "Corrosion-resistant marine brass fittings and pipe connectors." },
                    { name: "MARINE SANITISATION DEVICE", image: "/images/products/new_catalog/sanitisation-device.jpg", description: "Advanced marine sewage treatment and sanitization systems." },
                    { name: "MARINE STEERING SYSTEM", image: "/images/products/new_catalog/steering-system.png", description: "Hydraulic and mechanical marine steering helm and cable systems." }
                ]
            }
        ]
    },
    {
        slug: "electrical",
        name: "5) ELECTRICAL EQUIPMENT & ELECTRONICS",
        icon: "⚡",
        coverImage: "/images/covers/new_catalog/electrical.png",
        description: "Power generation, distribution, and smart climate control solutions.",
        subcategories: [
            {
                name: "POWER GENERATION",
                items: [
                    { name: "PORTABLE GENERATOR", image: "/images/products/new_catalog/portable-generator.png", description: "Compact and reliable portable marine power generators." },
                    { name: "GENERATOR- STATIONARY", image: "/images/products/new_catalog/stationary-generator.png", description: "Industrial capacity standby generator sets for heavy-duty power backup." },
                    { name: "WATER HEATER", image: "/images/products/new_catalog/water-heater.png", description: "High-efficiency marine and industrial electric water heating units." },
                    { name: "SOLAR SYSTEM", image: "/images/products/new_catalog/solar-system.png", description: "Comprehensive renewable solar energy kits for sustainable power." }
                ]
            },
            {
                name: "ELECTRICAL DISTRIBUTION",
                items: [
                    { name: "SWITCH GEAR", image: "/images/products/new_catalog/switch-gear.png", description: "High-voltage electrical switchgear for industrial power management." },
                    { name: "SWITCH BOARD", image: "/images/products/new_catalog/switch-board.png", description: "Industrial control switchboards and electrical distribution panels." },
                    { name: "CABLE", image: "/images/products/new_catalog/electrical-cable.png", description: "Low and medium voltage industrial electrical cables and wiring." },
                    { name: "PVC CONDUIT PIPES", image: "/images/products/new_catalog/pvc-conduit.png", description: "Durable PVC electrical protection conduit pipes and systems." }
                ]
            },
            {
                name: "LIGHTING",
                items: [
                    { name: "OUTDOOR LIGHTING", image: "/images/products/new_catalog/outdoor-lighting.png", description: "Weatherproof architectural outdoor and garden lighting solutions." },
                    { name: "LED FIXTURES", image: "/images/products/new_catalog/led-fixture.jpg", description: "High-efficiency indoor LED ceiling and wall light fixtures." },
                    { name: "COMMERCIAL LIGHTING", image: "/images/products/new_catalog/commercial-lighting.png", description: "Large-scale industrial, office, and retail lighting systems." }
                ]
            },
            {
                name: "CLIMATE & VENTILATION",
                items: [
                    { name: "CEILING FAN", image: "/images/products/new_catalog/ceiling-fan.png", description: "Modern high-airflow elegant decorative ceiling fans." },
                    { name: "AIR CONDITIONING UNITS", image: "/images/products/new_catalog/ac-unit.jpg", description: "Package and split air conditioning systems for marine and home." },
                    { name: "PANNEL VENTILATION SYSTEMS", image: "/images/products/new_catalog/panel-ventilation.png", description: "Industrial electrical panel cooling and ventilation systems." }
                ]
            },
            {
                name: "CONSUMER ELECTRONICS",
                items: [
                    { name: "TV", image: "/images/products/new_catalog/smart-tv.jpg", description: "High-definition smart LED and OLED television sets." },
                    { name: "HOME THEATER", image: "/images/products/new_catalog/home-theater.jpg", description: "Professional surround sound home theater systems." },
                    { name: "SMART HOME SYSTEM", image: "/images/products/new_catalog/smart-home.png", description: "Integrated home automation and smart control systems." }
                ]
            }
        ]
    },
    {
        slug: "hotel-supplies",
        name: "6) HOTEL SUPPLIES",
        icon: "🏨",
        coverImage: "/images/covers/new_catalog/hotel_supplies.png",
        description: "Professional hospitality supplies for dining, kitchen, and housekeeping.",
        subcategories: [
            {
                name: "Table Top & Dining",
                items: [
                    { name: "GLASSWARE", image: "/images/products/new_catalog/glassware.jpg", description: "Premium crystal and tempered glassware sets for dining and bars." },
                    { name: "DINNERWARE", image: "/images/products/new_catalog/dinnerware.jpg", description: "Fine porcelain and luxury ceramic dinner sets for high-end dining." },
                    { name: "CUTLERY WARE", image: "/images/products/new_catalog/cutlery-ware.png", description: "Premium stainless steel designer cutlery and fine flatware sets." }
                ]
            },
            {
                name: "Kitchen & Catering",
                items: [
                    { name: "COOKWARE", image: "/images/products/new_catalog/cookware.png", description: "Professional-grade industrial pots, pans, and commercial baking sets." },
                    { name: "KITCHEN TOOLS", image: "/images/products/new_catalog/kitchen-tools.jpg", description: "Advanced professional chef utensils and essential kitchen aids." }
                ]
            },
            {
                name: "Housekeeping & Cleaning",
                items: [
                    { name: "CLEANING CARTS", image: "/images/products/new_catalog/cleaning-cart.jpg", description: "Professional-grade janitorial trolleys and mobile cleaning stations." },
                    { name: "FRONT OFFICE TROLLEY", image: "/images/products/new_catalog/front-office-trolley.jpg", description: "Luxury golden luggage and front office trolleys for premium hospitality." }
                ]
            },
            {
                name: "Guest Room Essentials",
                items: [
                    { name: "SHOWER GEL", image: "/images/products/new_catalog/shower-gel-luxury.jpg", description: "Premium luxury hospitality shower gel for guest rooms." },
                    { name: "SOAP", image: "/images/products/new_catalog/soap-luxury.jpg", description: "Designer luxury soap bars for premium hotel guest amenities." }
                ]
            }
        ]
    },
    {
        slug: "it-office",
        name: "7) IT & OFFICE PRODUCTS",
        icon: "💻",
        coverImage: "/images/covers/new_catalog/it_office.png",
        description: "Advanced networking hardware, IT infrastructure, and modern office supplies.",
        subcategories: [
            {
                name: "Networking",
                items: [
                    { name: "NETWORK CABLE", image: "https://placehold.co/600x400/1A1A2E/D4AF37?text=Network+Cable", description: "CAT6 and high-speed fiber optic networking cables." },
                    { name: "ROUTER", image: "https://placehold.co/600x400/1A1A2E/D4AF37?text=Router", description: "Enterprise-grade high-performance routers." },
                    { name: "ETHERNET SPLITTER", image: "/images/products/new_catalog/ethernet-splitter-ext.png", description: "High-performance Gigabit Ethernet network switches and hub expanders." }
                ]
            },
            {
                name: "Office Organization",
                items: [
                    { name: "DESKTOP ORGANIZERS", image: "/images/products/new_catalog/desktop-organizer-mesh.jpg", description: "Premium mesh desk management systems and ergonomic storage solutions." }
                ]
            }
        ]
    },
    {
        slug: "stationery",
        name: "8) STATIONERY & GENERAL SUPPLIES",
        icon: "📝",
        coverImage: "/images/covers/new_catalog/stationery.png",
        description: "Essential office stationery, paper products, and general utility tools.",
        subcategories: [
            {
                name: "General Supplies",
                items: [
                    { name: "PRINTOR COPY PAPER", image: "/images/products/new_catalog/premium-copy-paper.jpg", description: "High-bright, premium A4 printer paper for professional office use." },
                    { name: "CALCULATOR", image: "/images/products/new_catalog/desktop-calculator.png", description: "Advanced scientific and desktop calculation devices for office and engineers." }
                ]
            }
        ]
    },
    {
        slug: "sanitaryware",
        name: "9) SANITARWARE & BATHROOM FITTINGS",
        icon: "🛀",
        coverImage: "/images/covers/new_catalog/sanitaryware.png",
        description: "Premium sanitaryware and modern bathroom fittings for residential and commercial use.",
        subcategories: [
            {
                name: "BATHROOM FITTINGS",
                items: [
                    { name: "MIXER", image: "/images/products/new_catalog/bathroom-mixer.png", description: "Elegant mixers for basins and showers with precise temperature control." },
                    { name: "BATH TUB", image: "/images/products/new_catalog/bathtub.jpg", description: "Modern and comfortable bath tubs designed for relaxation." },
                    { name: "SHOWER", image: "/images/products/new_catalog/shower.jpg", description: "Advanced shower systems for a refreshing bathroom experience." }
                ]
            }
        ]
    }
]
