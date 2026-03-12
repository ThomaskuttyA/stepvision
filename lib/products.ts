export const products = [
    {
        slug: "building-materials-hardware",
        name: "Building Materials & Hardware",
        icon: "🔨",
        coverImage: "/images/covers/building-materials-hardware.jpg",
        description: "Quality construction supplies, tools, fittings and industrial hardware.",
        subcategories: [
            {
                name: "Steel Bars",
                items: [
                    { name: "Mild Steel Round Bar – 10mm", description: "Specification: Mild Steel Square Bar, available in various sizes 6 to 32 mm diameter" },
                    { name: "Reinforcement Bar 8 mm", image: "/images/products/building-materials-hardware/steel-bars/reinforcement-bar-8mm.jpeg", description: "Specification: Reinforcement Round bar available in various sizes 6 to 32 mm diameter" },
                    { name: "Flat bars 10x 3 mm", image: "/images/products/building-materials-hardware/steel-bars/flat-bars.jpeg", description: "Specification: Flat bar available in various sizes 10 x 3, 13X3 mm, 13 X 5 mm, 13 X 6 mm, 16x5 mm etc" },
                    { name: "Serrated bar 20 mm x 3 mm", image: "/images/products/building-materials-hardware/steel-bars/serrated-bars.jpeg", description: "Specification: Serrated bar available various sizes 3mm to 5 mm at various depths of 20mm to 70mm." }
                ]
            },
            {
                name: "White Wood",
                items: [
                    { name: "White Wood Canadian White Wood WXW50", description: "Canadian White Wood WXW50. Specification: Size 1'' x 2'', 1'' x 4'', 1'' x 6'', 2'' x 2'', 2'' x 3'', 2'' x 4'', 2'' x 12'', 3'' x 3'', 4'' x 4''" },
                    { name: "Ply Wood – Hardwood", description: "Various type ply wood available – Bendy Plywood, Birch Plywood, Commercial plywood, Film faced plywood, Veneer plywood WBP plywood" },
                    { name: "Moisture Resistance MDF", image: "/images/products/building-materials-hardware/wood/moisture-resistant-mdf.jpeg", description: "Specification: MR MDF No soggy sagas, only style! Secret weapon: water-repelling glue, maybe a waxy dip. Pulped, pressed, prepped, ready to conquer damp." },
                    { name: "Solid Core Chip Board", image: "/images/products/building-materials-hardware/wood/solid-core-chip-board.jpeg", description: "Solid Core Chip Board 38 mm thickness .size 915 x 2135mm. Solid Core Chipboard is easy to work with and can be finished with laminates, veneers, or paint, providing a versatile solution for various design" }
                ]
            },
            {
                name: "Aluminum Sections",
                items: [
                    { name: "Aluminium 40 x 20 x 1.2 mm Rectangular Hollow 5.95M", description: "Specification: Shape Form: Hollow. Shape Profile: Rectangular hollow profile, Rectangular Hollow Section (RHS). Cross Section Dimensions: 0.2 CMT (height). Length: 5.95M. Thickness: Uniform wall thickness. Width: 5 CMT" },
                    { name: "GI Pipes", description: "Specification: • Strong, tough and corrosion-resistant. • Popular choice in various applications for aesthetic appearances. • Available sizes range from 20NB to 100NB. • Thickness range from 1.2mm to 2.5mm" },
                    { name: "Copper Pipes", description: "Copper Pipe/Tube 1/4\"-6\" Inch Diameter x 1' foot Length" },
                    { name: "Metal Sheets", description: "0.8mm Thick Metal Plate 1050 Grade Aluminium Sheets" }
                ]
            },
            {
                name: "Paints",
                items: [
                    { name: "Jotun Fenomastic My Home Smooth Silk Base A (900 ml)", image: "/images/products/building-materials-hardware/paints/jotun-interior.jpeg", description: "Brand:Jotun" },
                    { name: "Weathercoat Anti Dustt TT", image: "/images/products/building-materials-hardware/paints/berger-silk-glamor.jpeg", description: "Brand:BERGER. 100% acrylic emulsion exterior wall paint. Unique Dust Guard technology." },
                    { name: "Jotun Penguard Topcoat", image: "/images/products/building-materials-hardware/paints/jotun-interior.jpeg", description: "Brand : JOTUN. This is a 2 Component Product (A + B), Both are Included 5L Consists of 4 + 1 Litre" },
                    { name: "National Paints PVA Primer White", image: "/images/products/building-materials-hardware/paints/national-paints-primer.jpeg", description: "Brand :National Paints. Color :White. Itme Type : PVA Primer" }
                ]
            },
            {
                name: "Construction Products",
                items: [
                    { name: "Waterproofing Materials (SIKALITE)", image: "/images/products/building-materials-hardware/construction-products/sikalite.jpeg", description: "Ready To Use Powdered Waterproofing Admixture For Cement/Sand Mortars and Concrete" },
                    { name: "Adhesives & Sealants (Sikasil-116 GP White)", description: "SIKA - Universal Multipurpose Silicone Sealant For Glazing And Weatherproofing - Sikasil-116 Gp White" }
                ]
            },
            {
                name: "Cement Board",
                items: [
                    { name: "Fiber Cement Board", image: "/images/products/building-materials-hardware/cement-board/cement-fibre-board.jpg", description: "ideal for cladding, partition walls, ceilings, and facades." },
                    { name: "Gypsum Board", image: "/images/products/building-materials-hardware/cement-board/regular-gypsum.jpg", description: "Standard Gypsum dimensions (1200 x 2400 x 12mm - 15mm) user-friendly installation features." }
                ]
            },
            {
                name: "Power Tools",
                items: [
                    { name: "Bosch Hammer GBH 4-32 DFR", image: "/images/products/building-materials-hardware/power-tools/bosch-hammer.jpeg" },
                    { name: "DeWalt Cut-off Saw 14 inch", image: "/images/products/building-materials-hardware/power-tools/dewalt-cutoff-saw.jpeg" },
                    { name: "Makita Grinder", image: "/images/products/building-materials-hardware/power-tools/makita-grinder.jpeg" }
                ]
            },
            {
                name: "Hand Tools & Measuring",
                items: [
                    { name: "Fibre Glass nail Hammer 450 Gramms (Stanley)", description: "Brand : Stanley" },
                    { name: "Combination Wrench Set (Stanley)", image: "/images/products/hand-tools-measuring/stanley-wrench-set.png", description: "Combination wrench 10 mm, 12 mm, 14 mm. Brand : Stanley" },
                    { name: "Spirit Level 12\" Professional (UKEN)", description: "Brand :UKEN" },
                    { name: "Stanley Measuring Tape 8M Bimaterial", image: "/images/products/hand-tools-measuring/stanley-measuring-tape.jpeg", description: "8-meter length, suitable for large-scale measurements. Bimaterial build for added comfort and durability. Clear, accurate markings for precise results. Ideal for construction, carpentry, and industrial use. Robust Stanley design ensures long-lasting performance." },
                    { name: "Safety Shoe Model # 50053-127-44", image: "/images/products/hand-tools-measuring/dewalt-safety-shoes.jpeg", description: "Brand :DEWALT. PLANE Low Cut Safety Shoes - Size 39-44, Steel Toe, Taupe Suede, SB Rated, Oil Resistant" },
                    { name: "Dynagrip Combination Plier 180MM", image: "/images/products/building-materials-hardware/hand-tools-measuring/combination-plier.jpeg", description: "Forged carbon steel jaws and handle provides long life. Heat treated to ensure durability and optimal performance. For greater reliability, induction hardened at cutting edges. Induction hardened for high performance, Ergonomically designed" }
                ]
            },
            {
                name: "Electrical, Plumbing & HVAC",
                items: [
                    { name: "Electrical fittings" },
                    { name: "Plumbing pipes & fittings" },
                    { name: "HVAC units" },
                    { name: "Ductwork" },
                    { name: "GROHE Mixer", image: "/images/products/building-materials-hardware/electrical-plumbing-hvac/grohe-mixer.jpg" }
                ]
            }
        ]
    },
    {
        slug: "heavy-equipment-machinery",
        name: "Heavy Equipment & Machinery",
        icon: "⚙️",
        coverImage: "/images/covers/heavy-equipment-machinery.jpg",
        description: "Excavators, loaders, earthmoving machinery and support equipment.",
        subcategories: [
            {
                name: "Earthmoving",
                items: [
                    { name: "JCB 4CX Super Backhoe Loader", image: "/images/products/heavy-equipment-machinery/earthmoving/jcb-4cx-backhoe.jpeg", description: "The primary design features of the 4CX-14 SUPER backhoe loader are the four equal-sized tires which provide high ground clearance and traction, and 4-wheel steer capability for enhanced manoeuvrability. Additionally, a host of performance, comfort, safety and efficiency enhancements enable this machine to tackle loading operations like no other." },
                    { name: "Track loaders", image: "/images/products/heavy-equipment-machinery/earthmoving/jcb-teleskid.jpg", description: "High-performance loaders for construction and earthmoving" },
                    { name: "Backhoe loaders", description: "Versatile machines for loading and excavation operations" },
                    { name: "Compact loaders", description: "Manoeuvrable loaders for tight spaces and efficient earthmoving" }
                ]
            },
            {
                name: "Lifting Equipment",
                items: [
                    { name: "Boom lift", image: "/images/products/heavy-equipment-machinery/lifting-equipment/genie-boom-lift.jpg" },
                    { name: "Scissor lift", image: "/images/products/heavy-equipment-machinery/lifting-equipment/scissor-lift.jpg" },
                    { name: "Mobile crane", image: "/images/products/heavy-equipment-machinery/lifting-equipment/liebherr-crane.jpg" },
                    { name: "Forklifts", image: "/images/products/heavy-equipment-machinery/lifting-equipment/cat-forklift.jpg" },
                    { name: "Stanley Pallet Truck", image: "/images/products/heavy-equipment-machinery/lifting-equipment/stanley-pallet-truck.jpg" }
                ]
            },
            {
                name: "Transport & Haulage",
                items: [
                    { name: "Trucks", image: "/images/products/heavy-equipment-machinery/transport-haulage/scania-truck.jpg" },
                    { name: "Trailers", image: "/images/products/heavy-equipment-machinery/transport-haulage/benz-trailer.jpg" }
                ]
            },
            {
                name: "Mixing & Processing",
                items: [
                    { name: "Imer Multi-Mix 350 Mortar/Concrete Mixer w/Steel Drum", image: "/images/products/heavy-equipment-machinery/mixing-processing/imer-mixer.png", description: "Brand : IMER. Drum Capacity :12 Cu ft. Motor Power 1.9 hp" },
                    { name: "Industrial mixers", description: "Heavy-duty mixing solutions for construction and industry" }
                ]
            }
        ]
    },
    {
        slug: "automotive-spare-parts",
        name: "Automotive & Spare Parts",
        icon: "🚗",
        coverImage: "/images/covers/automotive-spare-parts.jpg",
        description: "New and used spare parts for automobiles and heavy equipment.",
        subcategories: [
            {
                name: "Vehicles",
                items: [
                    { name: "Golf cars / utility vehicles", image: "/images/products/automotive-spare-parts/vehicles/golf-car.jpg" },
                    { name: "Off-road vehicles" },
                    { name: "Used vehicles" }
                ]
            },
            {
                name: "Tyres",
                items: [
                    { name: "Standard tyres", image: "/images/products/automotive-spare-parts/tyres/goodyear-tyre.jpg" },
                    { name: "Off-road tyres", image: "/images/products/automotive-spare-parts/tyres/off-road-tyres.jpg" },
                    { name: "Heavy equipment tyres" },
                    { name: "Yokohama Tyre", image: "/images/products/automotive-spare-parts/tyres/yokohama-tyre.jpg" }
                ]
            },
            {
                name: "Engine Parts",
                items: [
                    { name: "Engine components" },
                    { name: "Gaskets" },
                    { name: "Filters" }
                ]
            },
            {
                name: "Suspension & Steering",
                items: [
                    { name: "Shock absorbers" },
                    { name: "Control arms" },
                    { name: "Steering components" }
                ]
            },
            {
                name: "Electrical & Cooling",
                items: [
                    { name: "Alternators" },
                    { name: "Starters" },
                    { name: "Radiators" },
                    { name: "AC components" }
                ]
            },
            {
                name: "Transmission",
                items: [
                    { name: "Gearbox parts" },
                    { name: "Clutch systems" },
                    { name: "Driveshaft components" }
                ]
            }
        ]
    },
    {
        slug: "marine-equipment",
        name: "Marine Equipment",
        icon: "⚓",
        coverImage: "/images/covers/marine-equipment.jpg",
        description: "Marine hardware and accessories for vessels, docks, and offshore projects.",
        subcategories: [
            {
                name: "Anchoring & Docking",
                items: [
                    { name: "Anchors" },
                    { name: "Mooring ropes" },
                    { name: "Dock fenders" },
                    { name: "Chain & shackles" }
                ]
            },
            {
                name: "Boats & Vessels",
                items: [
                    { name: "Boat sales/supply" },
                    { name: "Vessel accessories" }
                ]
            },
            {
                name: "Marine Electronics",
                items: [
                    { name: "GPS units" },
                    { name: "VHF radios" },
                    { name: "Fish finders" },
                    { name: "Marine speakers" }
                ]
            },
            {
                name: "Electrical & Lighting",
                items: [
                    { name: "Marine LED lights" },
                    { name: "Navigation lights" },
                    { name: "Electrical wiring" }
                ]
            },
            {
                name: "Safety Equipment",
                items: [
                    { name: "Life rings" },
                    { name: "Life-saving lights" },
                    { name: "Buoys" },
                    { name: "EPIRBs" }
                ]
            },
            {
                name: "Plumbing & Steering",
                items: [
                    { name: "Marine plumbing" },
                    { name: "Sanitation systems" },
                    { name: "Steering components" }
                ]
            },
            {
                name: "Marine Paints",
                items: [
                    { name: "Anti-fouling paint" },
                    { name: "Topside paint" },
                    { name: "Primer" }
                ]
            },
            {
                name: "Ropes & Lines",
                items: [
                    { name: "Mooring lines" },
                    { name: "Anchor rope" },
                    { name: "Dock lines" }
                ]
            }
        ]
    },
    {
        slug: "electrical-electronics",
        name: "Electrical Equipment & Electronics",
        icon: "⚡",
        coverImage: "/images/covers/electrical-electronics.jpg",
        description: "Power distribution, generators, cables and consumer electronics.",
        subcategories: [
            {
                name: "Power Generation",
                items: [
                    { name: "Generators" },
                    { name: "Water heaters" },
                    { name: "Solar systems" }
                ]
            },
            {
                name: "Electrical Distribution",
                items: [
                    { name: "Switches & switchgear" },
                    { name: "Cables & wiring" },
                    { name: "PVC conduit & accessories" },
                    { name: "DUCAB Electrical Cable", image: "/images/products/electrical-electronics/electrical-distribution/ducab-cable.jpg" },
                    { name: "FLUKE Tester", image: "/images/products/electrical-electronics/electrical-distribution/fluke-tester.jpg" },
                    { name: "HIOKI Clamp Meter", image: "/images/products/electrical-electronics/electrical-distribution/hioki-clamp-meter.jpg" }
                ]
            },
            {
                name: "Lighting",
                items: [
                    { name: "Outdoor lighting" },
                    { name: "LED fixtures" },
                    { name: "Commercial lighting" },
                    { name: "Ceiling Light 30W LED", image: "/images/products/electrical-electronics/lighting/ceiling-light.jpg" },
                    { name: "Wireless Mini LED", image: "/images/products/electrical-electronics/lighting/wireless-mini-led.jpg" }
                ]
            },
            {
                name: "Climate & Ventilation",
                items: [
                    { name: "Fans" },
                    { name: "Air conditioning units", image: "/images/products/electrical-electronics/climate-ventilation/generaltec-ac.jpg" },
                    { name: "Ventilation systems" }
                ]
            },
            {
                name: "Consumer Electronics",
                items: [
                    { name: "TVs" },
                    { name: "Audio systems" },
                    { name: "Smart devices" }
                ]
            }
        ]
    },
    {
        slug: "hotel-industry-supplies",
        name: "Hotel Industry Supplies",
        icon: "🏨",
        coverImage: "/images/covers/hotel-industry-supplies.jpg",
        description: "Complete hospitality supply solutions for hotels and commercial kitchens.",
        subcategories: [
            {
                name: "Kitchen Equipment",
                items: [
                    { name: "Commercial ovens" },
                    { name: "Refrigeration" },
                    { name: "Food prep equipment" },
                    { name: "Cookware" }
                ]
            },
            {
                name: "Lobby & Common Areas",
                items: [
                    { name: "Furniture" },
                    { name: "Decorative items" },
                    { name: "Reception equipment" }
                ]
            },
            {
                name: "Laundry Equipment",
                items: [
                    { name: "Commercial washers" },
                    { name: "Dryers" },
                    { name: "Ironing equipment" }
                ]
            },
            {
                name: "Guest Room Supplies",
                items: [
                    { name: "Bedding & linens" },
                    { name: "Guest amenities" },
                    { name: "In-room equipment" }
                ]
            },
            {
                name: "Housekeeping",
                items: [
                    { name: "Cleaning equipment" },
                    { name: "Housekeeping trolleys" },
                    { name: "Cleaning products" }
                ]
            }
        ]
    },
    {
        slug: "it-office-products",
        name: "IT & Office Products",
        icon: "💻",
        coverImage: "/images/covers/it-office-products.jpg",
        description: "Computers, networking equipment, peripherals and office essentials.",
        subcategories: [
            {
                name: "Computing",
                items: [
                    { name: "Desktop PCs" },
                    { name: "Laptops" },
                    { name: "Servers" },
                    { name: "Peripherals" }
                ]
            },
            {
                name: "Networking",
                items: [
                    { name: "Routers & switches" },
                    { name: "Network cables" },
                    { name: "WiFi equipment" },
                    { name: "Rack systems" }
                ]
            },
            {
                name: "Office Equipment",
                items: [
                    { name: "Printers" },
                    { name: "Copiers" },
                    { name: "Scanners" },
                    { name: "Projectors" }
                ]
            },
            {
                name: "Communication",
                items: [
                    { name: "IP phones" },
                    { name: "CCTV systems" },
                    { name: "Intercoms" }
                ]
            }
        ]
    },
    {
        slug: "stationery-general-supplies",
        name: "Stationery & General Supplies",
        icon: "📎",
        coverImage: "/images/covers/stationery-general-supplies.jpg",
        description: "Corporate, hospitality and institutional stationery and consumables.",
        subcategories: [
            {
                name: "Office Stationery",
                items: [
                    { name: "Paper & notebooks" },
                    { name: "Pens & writing instruments" },
                    { name: "Filing & organization" }
                ]
            },
            {
                name: "Packaging & Labels",
                items: [
                    { name: "Shipping supplies" },
                    { name: "Labels & tags" },
                    { name: "Tape & fasteners" }
                ]
            },
            {
                name: "Hospitality Stationery",
                items: [
                    { name: "Branded notepads" },
                    { name: "Menu holders" },
                    { name: "Guest forms" }
                ]
            },
            {
                name: "General Consumables",
                items: [
                    { name: "Cleaning supplies" },
                    { name: "Safety PPE" },
                    { name: "Janitorial products" }
                ]
            }
        ]
    }
]

export interface ProductItem {
    name: string
    image?: string
    description?: string
}

export type Product = Omit<typeof products[0], 'subcategories'> & {
    subcategories: {
        name: string
        items: ProductItem[]
    }[]
    coverImage?: string
}
export type Subcategory = Product['subcategories'][0]
