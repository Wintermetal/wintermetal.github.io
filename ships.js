var yoink = console.log;

let HMSship = [
    {   
        class: "Illustrious-class",
        built: "Built: 1937-1940",
        service: "In service: 1940-1968",
        ship1: "HMS Illustrious",
        ship2: "HMS Victorious",
        ship3: "HMS Furious",
        ship4: "HMS Indomitable"
    },
    { 
        class: "Implacable-class",
        built: "Built: 1939-1944",
        service: "In service: 1944-1955",
        ship1: "HMS Implacable",
        ship2: "HMS Indefatigable"
    },
    {   
        class: "Bellerophon-class",
        built: "Built: 1906-1909",
        service: "In service: 1909-1923",
        ship1: "HMS Bellerophon",
        ship2: "HMS Superb",
        ship3: "HMS Temeraire"
    },
    {   
        class: "Orion-class",
        built: "Built: 1909-1912",
        service: "In service: 1912-1926",
        ship1: "HMS Orion",
        ship2: "HMS Monarch",
        ship3: "HMS Conqueror",
        ship4: "HMS Thunderer"
    },
    {   
        class: "Admiral-class",
        built: "Built: 1916-1920",
        service: "In service: 1920-1941",
        ship1: "HMS Hood",
        ship2: "HMS Anson*",
        ship3: "HMS Howe*",
        ship4: "HMS Rodney*"
    },
    {   
        class: "Revenge-class",
        built: "Built: 1913-1917",
        service: "In service: 1916-1949",
        ship1: "HMS Revenge",
        ship2: "HMS Resolution",
        ship3: "HMS Royal Oak",
        ship4: "HMS Royal Sovereign",
        ship5: "HMS Ramillies"
    },
    { 
        class: "Renown-class",
        built: "Built: 1915-1916",
        service: "In service: 1916-1945",
        ship1: "HMS Renown",
        ship2: "HMS Repulse"
    },
    { 
        class: "King George V-class",
        built: "Built: 1936-1940",
        service: "In service: 1940-1951",
        ship1: "HMS King George V",
        ship2: "HMS Prince of Wales",
        ship3: "HMS Duke of York",
        ship4: "HMS Anson",
        ship5: "HMS Howe"
    },
    {   
        class: "Nelson-class",
        built: "Built: 1922-1927",
        service: "In service: 1927-1947",
        ship1: "HMS Nelson",
        ship2: "HMS Rodney"
    },
    {
        class: "Queen Elizabeth-class",
        built: "Built: 1912-1915",
        service: "In service: 1914-1947",
        ship1: "HMS Queen Elizabeth",
        ship2: "HMS Warspite",
        ship3: "HMS Valiant",
        ship4: "HMS Barham",
        ship5: "HMS Malaya"
    },
    {
        class: "Ironduke-class",
        built: "Built: 1912-1914",
        service: "In service: 1914-1946",
        ship1: "HMS Iron Duke",
        ship2: "HMS Marlborough",
        ship3: "HMS Benbow",
        ship4: "HMS Emperor of India"
    },
    {
        class: "Town-class",
        built: "Built: 1934-1939",
        service: "In service: 1937-1960",
        ship1: "HMS Southampton",
        ship2: "HMS Newcastle",
        ship3: "HMS Sheffield",
        ship4: "HMS Glasgow",
        ship5: "HMS Birmingham",
        ship6: "HMS Glouchester",
        ship7: "HMS Liverpool",
        ship8: "HMS Manchester",
        ship9: "HMS Edinburgh",
        ship10: "HMS Belfast"
    },
    {
        class: "Arethusa-class",
        built: "Built: 1933-1937",
        service: "In service: 1935-1949",
        ship1: "HMS Arethusa",
        ship2: "HMS Galatea",
        ship3: "HMS Penelope",
        ship4: "HMS Aurora"
    },
    {
        class: "Dido-class",
        built: "Built: 1937-1943",
        service: "In service: 1940-1966",
        ship1: "HMS Dido",
        ship2: "HMS Argonaut",
        ship3: "HMS Charybdis",
        ship4: "HMS Phoebe",
        ship5: "HMS Hermione",
        ship6: "HMS Bonaventure",
        ship7: "HMS Scylla",
        ship8: "HMS Naiad",
        ship9: "HMS Cleopatra",
        ship10: "HMS Sirius",
        ship11: "HMS Euryalus",
        ship12: "HMS Bellona",
        ship13: "HMS Royalist",
        ship14: "HMS Diadem",
        ship15: "HMS Black Prince",
        ship16: "HMS Spartan"
    },
    {
        class: "Fiji-class",
        built: "Built: 1938-1943",
        service: "In service: 1940-1985",
        ship1: "HMS Fiji",
        ship2: "HMS Nigeria",
        ship3: "HMS Mauritius",
        ship4: "HMS Kenya",
        ship5: "HMS Trinidad",
        ship6: "HMS Jamaica",
        ship7: "HMS Gambia",
        ship8: "HMS Bermuda",
        ship9: "HMS Ceylon",
        ship10: "HMS Uganda",
        ship11: "HMS Newfoundland"
    },
    {
        class: "Minotaur-class",
        built: "Built: 1941-1945",
        service: "In service: 1944-1958",
        ship1: "HMS Minotaur",
        ship2: "HMS Swiftsure",
        ship3: "HMS Superb",
        ship4: "HMS Hawke*",
        ship5: "HMS Bellerophon*"
    },
    {   
        class: "Laforey-class",
        built: "Built: 1912-1915",
        service: "In service: 1913-1923",
        ship1: "HMS Laforey",
        ship2: "HMS Llewellyn",
        ship3: "HMS Lennox",
        ship4: "HMS Loyal",
        ship5: "HMS Legion",
        ship6: "HMS Lawford",
        ship7: "HMS Louis",
        ship8: "HMS Lydiard",
        ship9: "HMS Leonidas",
        ship10: "HMS Lucifer",
        ship11: "HMS Laertes",
        ship12: "HMS Lysander",
        ship13: "HMS Lance",
        ship14: "HMS Lookout",
        ship15: "HMS Laurel",
        ship16: "HMS Liberty",
        ship17: "HMS Lark",
        ship18: "HMS Linnet",
        ship19: "HMS Laverock",
        ship20: "HMS Landrail",
        ship21: "HMS Lochinvar",
        ship22: "HMS Lassoo"
    },
    {
        class: "A-class",
        built: "Built: 1928-1931",
        service: "In service: 1930-1945",
        ship1: "HMS Codrington",
        ship2: "HMS Acasta",
        ship3: "HMS Achates",
        ship4: "HMS Active",
        ship5: "HMS Antelope",
        ship6: "HMS Anthony",
        ship7: "HMS Ardent",
        ship8: "HMS Arrow",
        ship9: "HMS Acheron",
        ship10: "HMS Saguenay",
        ship11: "HMS Skeena"
    },
    {
        class: "B-class",
        built: "Built: 1928-1931",
        service: "In service: 1930-1945",
        ship1: "HMS Keith",
        ship2: "HMS Basilisk",
        ship3: "HMS Beagle",
        ship4: "HMS Blanche",
        ship5: "HMS Boadicea",
        ship6: "HMS Boreas",
        ship7: "HMS Brazen",
        ship8: "HMS Brilliant",
        ship9: "HMS Bulldog"
    },
    {
        class: "C-class",
        built: "Built: 1930-1933",
        service: "In service: 1932-1945",
        ship1: "HMS Kempenfelt",
        ship2: "HMS Comet",
        ship3: "HMS Crusader",
        ship4: "HMS Cygnet",
        ship5: "HMS Crescent"
    },
    {
        class: "D-class",
        built: "Built: 1930-1933",
        service: "In service: 1932-1945",
        ship1: "HMS Duncan",
        ship2: "HMS Dainty",
        ship3: "HMS Daring",
        ship4: "HMS Decoy",
        ship5: "HMS Defender",
        ship6: "HMS Delight",
        ship7: "HMS Diamond",
        ship8: "HMS Diana",
        ship9: "HMS Duchess"
    },
    {
        class: "E-class",
        built: "Built: 1933-1935",
        service: "In service: 1934-1968",
        ship1: "HMS Exmouth",
        ship2: "HMS Echo",
        ship3: "HMS Eclipse",
        ship4: "HMS Electra",
        ship5: "HMS Encounter",
        ship6: "HMS Escapade",
        ship7: "HMS Escort",
        ship8: "HMS Esk",
        ship9: "HMS Express"
    },
    {
        class: "F-class",
        built: "Built: 1933-1935",
        service: "In service: 1934-1968",
        ship1: "HMS Faulknor",
        ship2: "HMS Fame",
        ship3: "HMS Fearless",
        ship4: "HMS Firedrake",
        ship5: "HMS Foresight",
        ship6: "HMS Forester",
        ship7: "HMS Fortune",
        ship8: "HMS Foxhound",
        ship9: "HMS Fury"
    },
    {
        class: "G-class",
        built: "Built: 1934-1940",
        service: "In service: 1936-1964",
        ship1: "HMS Gallant",
        ship2: "HMS Garland",
        ship3: "HMS Gipsy",
        ship4: "HMS Glowworm",
        ship5: "HMS Grafton",
        ship6: "HMS Grenade",
        ship7: "HMS Grenville",
        ship8: "HMS Greyhound",
        ship9: "HMS Griffin"
    },
    {
        class: "H-class",
        built: "Built: 1934-1940",
        service: "In service: 1936-1964",
        ship1: "HMS Hardy",
        ship2: "HMS Hasty",
        ship3: "HMS Havock",
        ship4: "HMS Hereward",
        ship5: "HMS Hero",
        ship6: "HMS Hostile",
        ship7: "HMS Hotspur",
        ship8: "HMS Hunter",
        ship9: "HMS Hyperion",
        ship10: "HMS Harvester",
        ship11: "HMS Havant",
        ship12: "HMS Havelock",
        ship13: "HMS Hesperus",
        ship14: "HMS Highlander",
        ship15: "HMS Hurricane"
    },
    {
        class: "I-class",
        built: "Built: 1936-1942",
        service: "In service: 1937-1960",
        ship1: "HMS Icarus",
        ship2: "HMS Ilex",
        ship3: "HMS Imogen",
        ship4: "HMS Imperial",
        ship5: "HMS Impulsive",
        ship6: "HMS Ingefield",
        ship7: "HMS Intrepid",
        ship8: "HMS Isis",
        ship9: "HMS Ivanhoe",
        ship10: "HMS Inconstant",
        ship11: "HMS Ithuriel",
        ship12: "HMS Sultanhisar",
        ship13: "HMS Demirhisar"
    }];

let SMSship = [
    {    
        class: "Mackensen-class",
        built: "Built: 1914-1919",
        service: "In service: Cancelled",
        ship1: "SMS Mackensen*",
        ship2: "SMS Graf Spee*",
        ship3: "SMS Prinz Eitel Friedrich*",
        ship4: "SMS Fürst Bismarck*"
    },
    { 
        class: "Helgoland-class",
        built: "Built: 1908-1912",
        service: "In service: 1911-1920",
        ship1: "SMS Helgoland",
        ship2: "SMS Ostfriesland",
        ship3: "SMS Thüringen",
        ship4: "SMS Oldenburg"
    },
    { 
        class: "Nassau-class",
        built: "Built: 1907-1910",
        service: "In service: 1909-1919",
        ship1: "SMS Nassau",
        ship2: "SMS Westfalen",
        ship3: "SMS Rheinland",
        ship4: "SMS Posen"
    },
    { 
        class: "Kaiser-class",
        built: "Built: 1909-1913",
        service: "In service: 1912-1919",
        ship1: "SMS Kaiser",
        ship2: "SMS Friedrich der Große",
        ship3: "SMS Kaiserin",
        ship4: "SMS Prinzregent luitpold",
        ship5: "SMS König Albert"
    },
    { 
        class: "König-class",
        built: "Built: 1911-1914",
        service: "In service: 1914-1919",
        ship1: "SMS König",
        ship2: "SMS Großer Kurfürst",
        ship3: "SMS Markgraf",
        ship4: "SMS Kronprinz"
    },
    { 
        class: "Bayern-class",
        built: "Built: 1913-1917",
        service: "In service: 1916-1919",
        ship1: "SMS Bayern",
        ship2: "SMS Baden",
        ship3: "SMS Sachen*",
        ship4: "SMS Wüttemberg*"
    }];

let KMSship = [
    {   
        class: "Bismarck-class",
        built: "Built: 1936-1941",
        service: "In service: 1940-1944",
        ship1: "KMS Bismarck",
        ship2: "KMS Tirpitz"
    },
    {   
        class: "Scharnhorst-class",
        built: "Built: 1935-1939",
        service: "In service: 1938-1943",
        ship1: "KMS Scharnhorst",
        ship2: "KMS Gneisenau"
    },
    {   
        class: "Deutschland-class",
        built: "Built: 1929-1936",
        service: "In service: 1933-1945",
        ship1: "KMS Deutschland",
        ship2: "KMS Admiral Scheer",
        ship3: "KMS Admiral Graf Spee"
    },
    {   
        class: "Admiral Hipper-class",
        built: "Built: 1935-1940",
        service: "In service: 1939-1945",
        ship1: "KMS Admiral Hipper",
        ship2: "KMS Blücher",
        ship3: "KMS Prinz Eugen",
        ship4: "KMS Seydlitz*",
        ship5: "KMS Lützow*"
    },
    {   
        class: "Zerstörer 1934",
        built: "Built: 1934-1935",
        service: "In service: 1937-1947",
        ship1: "KMS Z1 Leberecht Maas",
        ship2: "KMS Z2 Georg Thiele",
        ship3: "KMS Z3 Max Schultz",
        ship4: "KMS Z4 Richard Beitzen"
    },
    {
        class: "Zerstörer 1934A",
        built: "Built: 1935-1936",
        service: "In service: 1937-1958",
        ship1: "KMS Z5 Paul Jacobi",
        ship2: "KMS Z6 Theodor Riedel",
        ship3: "KMS Z7 Hermann Schoemann",
        ship4: "KMS Z8 Bruno Heinemann",
        ship5: "KMS Z9 Wolfgang Zenker",
        ship6: "KMS Z10 Hans Lody",
        ship7: "KMS Z11 Bernd von Arnim",
        ship8: "KMS Z12 Erich Giese",
        ship9: "KMS Z13 Erich koellner",
        ship10: "KMS Z14 Friedrich Ihn",
        ship11: "KMS Z15 Erich Steinbrinck",
        ship12: "KMS Z16 Friedrich Eckoldt"
    },
    {   
        class: "Zerstörer 1936",
        built: "Built: 1936-1939",
        service: "In service: 1938-1956",
        ship1: "KMS Z17 Diether von Roeder",
        ship2: "KMS Z18 Hans Lüdemann",
        ship3: "KMS Z19 Hermann Künne",
        ship4: "KMS Z20 Karl Galster",
        ship5: "KMS Z21 Wilhelm Heidkamp",
        ship6: "KMS Z22 Anton Schmitt"
    },
    {   
        class: `Zerstörer 1936A "Narvik"`,
        built: "Built: 1938-1941",
        service: "In service: 1940-1958",
        ship1: "KMS Z23",
        ship2: "KMS Z24",
        ship3: "KMS Z25",
        ship4: "KMS Z26",
        ship5: "KMS Z27",
        ship6: "KMS Z28",
        ship7: "KMS Z29",
        ship8: "KMS Z30"
    },
    {
        class: "Zerstörer 1936A (Mobilmachung)",
        built: "Built: 1940-1943",
        service: "In service: 1942-1964",
        ship1: "KMS Z31",
        ship2: "KMS Z32",
        ship3: "KMS Z33",
        ship4: "KMS Z34",
        ship7: "KMS Z37",
        ship8: "KMS Z38",
        ship9: "KMS Z39"
    },
    {
        class: "Zerstörer 1936B",
        built: "Built: 1941-1945",
        service: "In service: 1943-1964",
        ship1: "KMS Z35",
        ship2: "KMS Z36",
        ship3: "KMS Z43",
        ship4: "KMS Z44*",
        ship5: "KMS Z45*"
    },
    {
        class: "Zerstörer 1936C",
        built: "Built: 1942-cancelled",
        ship1: "KMS Z46*",
        ship2: "KMS Z47*"
    },
    {
        class: "Zerstörer 1942",
        built: "Built: 1943-1945",
        service: "In service: Lost",
        ship1: "KMS Z51*"
    },
    {
        class: "Zerstörer 1944",
        built: "Built: 1943-cancelled",
        ship1: "KMS Z52*",
        ship2: "KMS Z53*",
        ship3: "KMS Z54*",
        ship4: "KMS Z55*",
        ship5: "KMS Z56*"
    },
    {   
        class: "Elbing-class",
        built: "Built: 1941-1944",
        service: "In service: unknown",
        ship1: "KMS T22",
        ship2: "KMS T23",
        ship3: "KMS T24",
        ship4: "KMS T25",
        ship5: "KMS T26",
        ship6: "KMS T27",
        ship7: "KMS T28",
        ship8: "KMS T29",
        ship9: "KMS T30",
        ship10: "KMS T31",
        ship11: "KMS T32",
        ship12: "KMS T33",
        ship13: "KMS T34",
        ship14: "KMS T35",
        ship15: "KMS T36"
    }];

let IJNship = [
    {
        class: "Shõkaku-class",
        built: "Built: 1938-1941",
        service: "In service: 1941-1944",
        ship1: "IJN Shõkaku",
        ship2: "IJN Zuikaku"
    },
    {
        class: "Unryū-class",
        built: "Built: 1942-1945",
        service: "In service: 1944-1945",
        ship1: "IJN Unryū",
        ship2: "IJN Amagi",
        ship3: "IJN Katsuragi",
        ship4: "IJN Kasagi",
        ship5: "IJN Aso",
    },
    {   
        class: "Yamato-class",
        built: "Built: 1937-1942",
        service: "In service: 1941-1945",
        ship1: "IJN Yamato",
        ship2: "IJN Mushashi",
        ship3: "IJN Shinano",
        ship4: "Warship Number 111 (IJN Kii)*",
        ship5: "Warship Number 797**"
    },
    {
        class: "Kongō-class",
        built: "Built: 1911-1915",
        service: "In service: 1913-1945",
        ship1: "IJN Kongō",
        ship2: "IJN Hiei",
        ship3: "IJN Kirishima",
        ship4: "IJN Haruna"
    },
    {
        class: "Furutaka-class",
        built: "Built: 1922-1926",
        service: "In service: 1926-1942",
        ship1: "IJN Furutaka",
        ship2: "IJN Kako"
    },
    {
        class: "Aoba-class",
        built: "Built: 1924-1927",
        service: "In service: 1927-1945",
        ship1: "IJN Aoba",
        ship2: "IJN Kinugasa"
    },
    {
        class: "Myōkō-class",
        built: "Built: 1924-1929",
        service: "In service: 1928-1946",
        ship1: "IJN Myōkō",
        ship2: "IJN Nachi",
        ship3: "IJN Haguro",
        ship4: "IJN Ashigara"
    },
    {
        class: "Takao-class",
        built: "Built: 1927-1932",
        service: "In service: 1932-1945",
        ship1: "IJN Takao",
        ship2: "IJN Atago",
        ship3: "IJN Maya",
        ship4: "IJN Choukai"
        //(高雄)(愛宕)(摩耶)(鳥海)
    },
    {
        class: "Mogami-class",
        built: "Built: 1931-1937",
        service: "In service: 1935-1944",
        ship1: "IJN Mogami",
        ship2: "IJN Mikuma",
        ship3: "IJN Suzuya",
        ship4: "IJN Kumano"
    },
    {
        class: "Ibuki-class",
        built: "Built: 1942-1945",
        service: "In service: scrapped",
        ship1: "IJN Ibuki*",
        ship2: "IJN No. 301*"
    },
    {
        class: "Kuma-class",
        built: "Built: 1917-1921",
        service: "In service: 1920-1946",
        ship1: "IJN Kuma",
        ship2: "IJN Tama",
        ship3: "IJN Kitakami",
        ship4: "IJN Ōi",
        ship5: "IJN Kiso"
    },
    {
        class: "Nagara-class",
        built: "Built: 1920-1924",
        service: "In service: 1922-1944",
        ship1: "IJN Nagara",
        ship2: "IJN Isuzu",
        ship3: "IJN Yura",
        ship4: "IJN Natori",
        ship5: "IJN Kinu",
        ship6: "IJN Abukuma"
    },
    {   
        class: "Minekaze-class",
        built: "Built: 1918-1922",
        service: "In service: 1922-1944",
        ship1: "IJN Minekaze",
        ship2: "IJN Sawakaze",
        ship3: "IJN Okikaze",
        ship4: "IJN Shimakaze",
        ship5: "IJN Nadakaze",
        ship6: "IJN Yakaze",
        ship7: "IJN Hakaze",
        ship8: "IJN Shiokaze",
        ship9: "IJN Akikaze",
        ship10: "IJN Yūkaze",
        ship11: "IJN Tachikaze",
        ship12: "IJN Hokaze",
        ship13: "IJN Nokaze",
        ship14: "IJN Namikaze",
        ship15: "IJN Numakaze"
    },
    {   
        class: "Kagerō-class",
        built: "Built: 1937-1941",
        service: "In service: 1939-1947",
        ship1: "IJN Kagerō",
        ship2: "IJN Shiranui",
        ship3: "IJN Kuroshio",
        ship4: "IJN Oyashio",
        ship5: "IJN Hayashio",
        ship6: "IJN Natsushio",
        ship7: "IJN Hatsukaze",
        ship8: "IJN Yukikaze",
        ship9: "IJN Amatsukaze",
        ship10: "IJN Tokitsukaze",
        ship11: "IJN Urakaze",
        ship12: "IJN Isokaze",
        ship13: "IJN Hamakaze",
        ship14: "IJN Tanikaze",
        ship15: "IJN Nowaki",
        ship16: "IJN Arashi",
        ship17: "IJN Hagikaze",
        ship18: "IJN Maikaze",
        ship19: "IJN Akigumo",
        ship20: "IJN Harekaze**"
    }];

let RUSship = [
    {
        class: "Borodino-class",
        built: "Built: 1899-1905",
        service: "In service: 1904-1922",
        ship1: "Borodino",
        ship2: "Imperator Aleksander III",
        ship3: "Knyaz Suvorov",
        ship4: "Oryol",
        ship5: "Slava"
    },
    {
        class: "Gangut-class",
        built: "Built: 1909-1914",
        service: "In service: 1914-1917",
        ship1: "Gangut",
        ship2: "Petropavlovsk",
        ship3: "Sevastopol",
        ship4: "Poltava"
    },
    {
        class: "Admiral Nakhimov-class",
        built: "Built: 1913-1932",
        ship1: "Admiral Nakhimov",
        ship2: "Admiral Kornilov*",
        ship3: "Admiral Istomin*",
        ship4: "Admiral Lazarev"
    }];

let USSRship = [
    {
        class: "Sovetsky Soyuz-class",
        built: "Built: 1938-1941",
        service: "In service: cancelled",
        ship1: "VMF Sovetsky Soyuz*",
        ship2: "VMF Sovetskaya Ukraina*",
        ship3: "VMF Sovetskaya Rossiya*",
        ship4: "VMF Sovetskaya Belorussiya*"
    },
    {
        class: "Gangut-class",
        built: "Built: 1909-1914",
        service: "In service: 1917-1956",
        ship1: "VMF Oktyabrskaya Revolyutsiya",
        ship2: "VMF Marat",
        ship3: "VMF Parizhskaya Kommuna",
        ship4: "VMF Frunze"
    },
    {
        class: "Admiral Nakhimov-class",
        built: "Built: 1913-1932",
        service: "In service: 1927-1952",
        ship1: "VMF Chervona Ukraina",
        ship2: "VMF Krazny Kavkaz"
    },
    {
        class: "Kirov-class",
        built: "Built: 1935-1944",
        service: "In service: 1938-1970",
        ship1: "VMF Kirov",
        ship2: "VMF Voroshilov",
        ship3: "VMF Maxim Groky",
        ship4: "VMF Molotov",
        ship5: "VMF Kaganovich",
        ship6: "VMF Kalinin"
    },
    {
        class: "Chapayev-class",
        built: "Built: 1939-1950",
        service: "In service: 1950-1981",
        ship1: "VMF Chapayev",
        ship2: "VMF Zheleznyakov",
        ship3: "VMF Kuybyshev",
        ship4: "VMF Chkalov",
        ship5: "VMF Frunze",
        ship6: "VMF Ordzhinikidze*",
        ship7: "VMF Sverdlov*"
    },
    {
        class: "Sverdlov-class",
        built: "Built: 1949-1955",
        service: "In service: 1952-2000",
        ship1: "VMF Sverdlov",
        ship2: "VMF Zhdanov",
        ship3: "VMF Admiral Ushakov",
        ship4: "VMF Aleksandr Suvorov",
        ship5: "VMF Admiral Senyavin",
        ship6: "VMF Dmitry Pozharsky",
        ship7: "VMF Kronstadt*",
        ship8: "VMF Tallinn*",
        ship9: "VMF Varyag*",
        ship10: "VMF Ordzhonikidze",
        ship11: "VMF Alexandr Nevsky",
        ship12: "VMF Admiral Lazarev",
        ship13: "VMF Shcherbakov*",
        ship14: "VMF Dzerzhinsky",
        ship15: "VMF Admiral Nakhimov",
        ship16: "VMF Mikhail Kutuzov",
        ship17: "VMF Admiral Kornilov*",
        ship18: "VMF Oktyabrskaya Revolyutsia",
        ship19: "VMF Murmansk",
        ship20: "VMF Arkhangelsk*",
        ship21: "VMF Vladivostok*"
    },
    {
        class: "Kashin-class",
        built: "Built: 1959-1986",
        service: "In service: 1962-2003",
        ship1: "VMF Komsomolets Ukrainy",
        ship2: "VMF Soobrazitelnyy",
        ship3: "VMF Provornyy",
        ship4: "VMF Obraztsovyy",
        ship5: "VMF Odarennyy",
        ship6: "VMF Otvazhnyy",
        ship7: "VMF Steregushchiy",
        ship8: "VMF Krasnyy Kavkaz",
        ship9: "VMF Reshitelnyy",
        ship10: "VMF Strogiy",
        ship11: "VMF Smetlivyy",
        ship12: "VMF Krasnyy Krym",
        ship13: "VMF Sposobnyy",
        ship14: "VMF Skoryy",
        ship15: "VMF Onevoy",
        ship16: "VMF Stroynyy",
        ship17: "VMF Slavnyy",
        ship18: "VMF Smyshlenyy",
        ship19: "ORP Warszawa",
        ship20: "VMF Sderzhanny"
    },
    {
        class: "Town-class (on loan from UK)",
        built: "Built: 1917-1920",
        service: "In service: 1944-1952",
        ship1: "VMF Deyatelny (HMS Churchill)",
        ship2: "VMF Derzkiy (HMS Chelsea)",
        ship3: "VMF Zhyostky (HMS Roxborough)",
        ship4: "VMF Dostoyny (HMS St Albans)",
        ship5: "VMF Druzhny (HMS Lincoln)",
        ship6: "VMF Zharkiy (HMS Brighton)",
        ship7: "VMF Zhguchi (HMS Leamington)",
        ship8: "VMF Zhivuchiy (HMS Richmond)",
        ship9: "VMF Doblestny (HMS Georgetown)"
    },
    {
        class: "Udaloy I-class",
        built: "Built: 1977-1994",
        service: "In service: 1980-present",
        ship1: "VMF Udaloy",
        ship2: "VMF Vice-Admiral Kulakov",
        ship3: "VMF Marshal Vasilevsky",
        ship4: "VMF Admiral Zakharov",
        ship5: "VMF Admiral Spiridonov",
        ship6: "VMF Admiral Tributs",
        ship7: "VMF Marshal Shaposhnikov",
        ship8: "VMF Sevemorsk",
        ship9: "VMF Admiral Levchenko",
        ship10: "VMF Admiral Vinogradov",
        ship11: "VMF Admiral Kharlamov",
        ship12: "VMF Admiral Panteleyev"
    }];

let FNship = [
    {
        class: "Bretagne-class",
        built: "Built: 1912-1916",
        service: "In service: 1916-1953",
        ship1: "FN Bretagne",
        ship2: "FN Lorraine",
        ship3: "FN Provence",
        ship4: "FN Vasilefs Konstantinos*"
    },
    {
        class: "Normandie-class",
        built: "Built: 1913-scrapped",
        service: "In service: scrapped",
        ship1: "FN Normandie*",
        ship2: "FN Flandre*",
        ship3: "FN Gascogne*",
        ship4: "FN Languedoc*",
        ship5: "FN Béarn"
    },
    {
        class: "Dunkerque-class",
        built: "Built: 1932-1938",
        service: "In service: 1937-1942",
        ship1: "FN Dunkerque",
        ship2: "FN Strasbourg"
    },
    {
        class: "Richeliu-class",
        built: "Built: 1935-1955",
        service: "In service: 1940-1970",
        ship1: "FN Richeliu",
        ship2: "FN Jean Bart",
        ship3: "FN Clemenceau*",
        ship4: "FN Gascogne*"
    },
    {
        class: "Duquesne-class",
        built: "Built: 1924-1928",
        service: "In service: 1928-1950",
        ship1: "FN Duquesne",
        ship2: "FN Tourville"
    },
    {
        class: "Suffren-class",
        built: "Built: Unknown",
        service: "In service: 1930-1947",
        ship1: "FN Suffren",
        ship2: "FN Colbert",
        ship3: "FN Dupleix",
        ship4: "FN Foch"
    },
    {
        class: "La Galissonnière-class",
        built: "Built: Unknown",
        service: "In service: 1937-1958",
        ship1: "FN La Galissonnière",
        ship2: "FN Montcalm",
        ship3: "FN Georges Leygues",
        ship4: "FN Jean de Vienne",
        ship5: "FN Marseillaise",
        ship6: "FN Gloire"
    },
    {
        class: "Guépard-class",
        built: "Built: 1927-1931",
        service: "In service: 1929-1945",
        ship1: "FN Bison",
        ship2: "FN Guépard",
        ship3: "FN Lion",
        ship4: "FN Valmy",
        ship5: "FN Verdun",
        ship6: "FN Vauban"
    },
    {
        class: "Aigle-class",
        built: "Built: unknown-1934",
        service: "In service: 1929-1959",
        ship1: "FN Aigle",
        ship2: "FN Vautour",
        ship3: "FN Albatros",
        ship4: "FN Gerfaut",
        ship5: "FN Milan",
        ship6: "FN Épervier"
    },
    {
        class: "Vauquelin-class",
        built: "Built: 1930-1934",
        service: "In service: 1933-1942",
        ship1: "FN Vauquelin",
        ship2: "FN Kersaint",
        ship3: "FN Cassard",
        ship4: "FN Tartu",
        ship5: "FN Maillé Brézé",
        ship6: "FN Le Chevalier Paul"
    },
    {
        class: "Le Fantasque-class",
        built: "Built: 1931-1936",
        service: "In service: 1935-1963",
        ship1: "FN L'Audacieux",
        ship2: "FN Le Malin",
        ship3: "FN Le Terrible",
        ship4: "FN Le Triomphant",
        ship5: "FN L'Indomptable"
    },
    {
        class: "Mogador-class",
        built: "Built: 1934-1938",
        service: "In service: 1939-1942",
        ship1: "FN Mogador",
        ship2: "FN Volta",
        ship3: "FN Kléber",
        ship4: "FN Desaix",
        ship5: "FN Hoche",
        ship6: "FN Marceau"
    },
    {
        class: "Le Hardi-class",
        built: "Built: 1936-1947",
        service: "In service: 1940-1942",
        ship1: "FN Le Hardi",
        ship2: "FN Fleuret",
        ship3: "FN Épée",
        ship4: "FN Mameluk",
        ship5: "FN Casque",
        ship6: "FN Lansquenet",
        ship7: "FN Le Flibustier",
        ship8: "FN Le Corsaire",
        ship9: "FN L'Intrépide",
        ship10: "FN Le Téméraire",
        ship11: "FN L'Opiniâtre",
        ship12: "FN L'Aventurier"
    }];

let LRNship = [
    {
        class: "Leaper-class",
        ship1: "LRNS Leaper",
        ship2: "LRNS Jumper",
        ship3: "LRNS Springer",
        ship4: "LRNS Hopper",
        ship5: "LRNS Bouncer",
        ship6: "LRNS Bounder",
        ship6: "LRNS Skipper",
        ship6: "LRNS Prancer",
        ship6: "LRNS Gamboller",
        ship6: "LRNS Frolicker",
        ship6: "LRNS Cavorter",
    },
    {
        class: "Komodo-class",
        ship1: "LRNS Komodoensis",
        ship2: "LRNS Flavescens",
        ship3: "LRNS Griseus",
        ship4: "LRNS Nebulosus",
        ship5: "LRNS Bengalensis"
    },
    {
        class: "Laden-class",
        ship1: "LRNS Laden",
        ship2: "LRNS Latent",
        ship3: "LRNS Laudable",
        ship4: "LRNS Laurel",
        ship5: "LRNS Legible",
        ship6: "LRNS Liquidator"
    },
    {
        class: "M-class",
        ship1: "LRNS M-class Miner",
        ship2: "LRNS M-class Courier",
        ship3: "LRNS M-class Carrier",
        ship4: "LRNS M-class Builder",
        ship5: "LRNS M-class Fighter"
    },
    {
        class: "S-class",
        ship1: "LRNS S-class Fregate",
        ship2: "LRNS S-class Fighter",
        ship3: "LRNS S-class Grinder",
        ship4: "LRNS S-class Builder"
    },
    {
        class: "Leucopsis-class",
        ship1: "LRNS Leucopsis",
        ship2: "LRNS Bernicla",
        ship3: "LRNS Ruficollis",
        ship4: "LRNS Canadensis",
        ship5: "LRNS Sandvicensis",
        ship6: "LRNS Hutchinsii"
    },
    {
        class: "Lemuridae-class",
        ship1: "LRNS Lemuridae",
        ship2: "LRNS Cheirogaleidae",
        ship3: "LRNS Daubentoniidae",
        ship4: "LRNS Indriidae",
        ship5: "LRNS Lepilemuridae",
        ship6: "LRNS Megaladapidae"
    }];

    // Royal Marine

    let HMSshipList = document.getElementById("HMSshiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newHMSShipDiv(HMSship){
        let myDiv = document.createElement("div");
        myDiv.className = "HMSship";
    
        let myTitle = newTextElem(HMSship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(HMSship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    HMSship.forEach(HMSship => {
        let elem = newHMSShipDiv(HMSship);
        HMSshipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(HMSship){
        let myDiv = document.createElement("div");
    
        let myBuilt = newTextElem(HMSship.built, "h6");
        let myService = newTextElem(HMSship.service, "h6");
        let myShip1 = newTextElem(HMSship.ship1, "p");
        let myShip2 = newTextElem(HMSship.ship2, "p");
        let myShip3 = newTextElem(HMSship.ship3, "p");
        let myShip4 = newTextElem(HMSship.ship4, "p");
        let myShip5 = newTextElem(HMSship.ship5, "p");
        let myShip6 = newTextElem(HMSship.ship6, "p");
        let myShip7 = newTextElem(HMSship.ship7, "p");
        let myShip8 = newTextElem(HMSship.ship8, "p");
        let myShip9 = newTextElem(HMSship.ship9, "p");
        let myShip10 = newTextElem(HMSship.ship10, "p");
        let myShip11 = newTextElem(HMSship.ship11, "p");
        let myShip12 = newTextElem(HMSship.ship12, "p");
        let myShip13 = newTextElem(HMSship.ship13, "p");
        let myShip14 = newTextElem(HMSship.ship14, "p");
        let myShip15 = newTextElem(HMSship.ship15, "p");
        let myShip16 = newTextElem(HMSship.ship16, "p");
        let myShip17 = newTextElem(HMSship.ship17, "p");
        let myShip18 = newTextElem(HMSship.ship18, "p");
        let myShip19 = newTextElem(HMSship.ship19, "p");
        let myShip20 = newTextElem(HMSship.ship20, "p");
        let myShip21 = newTextElem(HMSship.ship21, "p");
        let myShip22 = newTextElem(HMSship.ship22, "p");
        let myShip23 = newTextElem(HMSship.ship23, "p");
        let myShip24 = newTextElem(HMSship.ship24, "p");
        let myShip25 = newTextElem(HMSship.ship25, "p");
        let myShip26 = newTextElem(HMSship.ship26, "p");
        let myShip27 = newTextElem(HMSship.ship27, "p");
        let myShip28 = newTextElem(HMSship.ship28, "p");
        let myShip29 = newTextElem(HMSship.ship29, "p");
        let myShip30 = newTextElem(HMSship.ship30, "p");
        let myShip31 = newTextElem(HMSship.ship31, "p");
        let myShip32 = newTextElem(HMSship.ship32, "p");
        let myShip33 = newTextElem(HMSship.ship33, "p");
        let myShip34 = newTextElem(HMSship.ship34, "p");
        let myShip35 = newTextElem(HMSship.ship35, "p");
        let myShip36 = newTextElem(HMSship.ship36, "p");
        let myShip37 = newTextElem(HMSship.ship37, "p");
        let myShip38 = newTextElem(HMSship.ship38, "p");
        let myShip39 = newTextElem(HMSship.ship39, "p");
        let myShip40 = newTextElem(HMSship.ship40, "p");
        let myShip41 = newTextElem(HMSship.ship41, "p");


        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);

        return myDiv;
    };

    // Kaisermarine

    let SMSshipList = document.getElementById("SMSshiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newSMSShipDiv(SMSship){
        let myDiv = document.createElement("div");
        myDiv.className = "SMSship";
    
        let myTitle = newTextElem(SMSship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(SMSship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    SMSship.forEach(SMSship => {
        let elem = newHMSShipDiv(SMSship);
        SMSshipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(SMSship){
        let myDiv = document.createElement("div");
    
        let myBuilt = newTextElem(SMSship.built, "h6");
        let myService = newTextElem(SMSship.service, "h6");
        let myShip1 = newTextElem(SMSship.ship1, "p");
        let myShip2 = newTextElem(SMSship.ship2, "p");
        let myShip3 = newTextElem(SMSship.ship3, "p");
        let myShip4 = newTextElem(SMSship.ship4, "p");
        let myShip5 = newTextElem(SMSship.ship5, "p");
        let myShip6 = newTextElem(SMSship.ship6, "p");
        let myShip7 = newTextElem(SMSship.ship7, "p");
        let myShip8 = newTextElem(SMSship.ship8, "p");
        let myShip9 = newTextElem(SMSship.ship9, "p");
        let myShip10 = newTextElem(SMSship.ship10, "p");
        let myShip11 = newTextElem(SMSship.ship11, "p");
        let myShip12 = newTextElem(SMSship.ship12, "p");
        let myShip13 = newTextElem(SMSship.ship13, "p");
        let myShip14 = newTextElem(SMSship.ship14, "p");
        let myShip15 = newTextElem(SMSship.ship15, "p");
        let myShip16 = newTextElem(SMSship.ship16, "p");
        let myShip17 = newTextElem(SMSship.ship17, "p");
        let myShip18 = newTextElem(SMSship.ship18, "p");
        let myShip19 = newTextElem(SMSship.ship19, "p");
        let myShip20 = newTextElem(SMSship.ship20, "p");
        let myShip21 = newTextElem(SMSship.ship21, "p");
        let myShip22 = newTextElem(SMSship.ship22, "p");


        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22);

        return myDiv;
    };

    // Kriegsmarine

    let KMSshipList = document.getElementById("KMSshiplist");

    function newTextElem(text, type){
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };

    function newKMSShipDiv(KMSship){
        let myDiv = document.createElement("div");
        myDiv.className = "KMSship";
    
        let myTitle = newTextElem(KMSship.class,"H3")
    
        myDiv.append(myTitle);

        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));

        let myInfoDiv = newInfoDiv(KMSship);
        myDiv.append(myTitle, myInfoDiv);
    
        myInfoDiv.style.display = "none";

        myTitle.addEventListener("click", () => toggleData(myInfoDiv));

        return myDiv;
    };

    KMSship.forEach(KMSship => {
        let elem = newHMSShipDiv(KMSship);
        KMSshipList.appendChild(elem);
    });

    function changeColor(elem, color){
        elem.style.color = color;
    };

    function newInfoDiv(KMSship){
        let myDiv = document.createElement("div");
    
        let myBuilt = newTextElem(KMSship.built, "h6");
        let myService = newTextElem(KMSship.service, "h6");
        let myShip1 = newTextElem(KMSship.ship1, "p");
        let myShip2 = newTextElem(KMSship.ship2, "p");
        let myShip3 = newTextElem(KMSship.ship3, "p");
        let myShip4 = newTextElem(KMSship.ship4, "p");
        let myShip5 = newTextElem(KMSship.ship5, "p");
        let myShip6 = newTextElem(KMSship.ship6, "p");
        let myShip7 = newTextElem(KMSship.ship7, "p");
        let myShip8 = newTextElem(KMSship.ship8, "p");
        let myShip9 = newTextElem(KMSship.ship9, "p");
        let myShip10 = newTextElem(KMSship.ship10, "p");
        let myShip11 = newTextElem(KMSship.ship11, "p");
        let myShip12 = newTextElem(KMSship.ship12, "p");
        let myShip13 = newTextElem(KMSship.ship13, "p");
        let myShip14 = newTextElem(KMSship.ship14, "p");
        let myShip15 = newTextElem(KMSship.ship15, "p");
        let myShip16 = newTextElem(KMSship.ship16, "p");
        let myShip17 = newTextElem(KMSship.ship17, "p");
        let myShip18 = newTextElem(KMSship.ship18, "p");
        let myShip19 = newTextElem(KMSship.ship19, "p");
        let myShip20 = newTextElem(KMSship.ship20, "p");
        let myShip21 = newTextElem(KMSship.ship21, "p");
        let myShip22 = newTextElem(KMSship.ship22, "p");


        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22);

        return myDiv;
    };

    // Imperial Japanese navy

    let IJNshipList = document.getElementById("IJNshiplist");
    
    function newTextElem(text, type) {
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };
    
    function newIJNShipDiv(IJNship){
        let myDiv = document.createElement("div");
        myDiv.className = "IJNship";
    
        let myTitle = newTextElem(IJNship.class,"H3")
    
        myDiv.append(myTitle);
    
        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
    
        let myInfoDiv = newInfoDiv(IJNship);
        myDiv.append(myTitle, myInfoDiv);
        
        myInfoDiv.style.display = "none";
    
        myTitle.addEventListener("click", () => toggleData(myInfoDiv));
    
        return myDiv;
    };
    
    IJNship.forEach(IJNship => {
        let elem = newIJNShipDiv(IJNship);
        IJNshipList.appendChild(elem);
    });
    
    function changeColor(elem, color){
        elem.style.color = color;
    };
    
    function newInfoDiv(IJNship){
        let myDiv = document.createElement("div");
        
        let myBuilt = newTextElem(IJNship.built, "h6");
        let myService = newTextElem(IJNship.service, "h6");
        let myShip1 = newTextElem(IJNship.ship1, "p");
        let myShip2 = newTextElem(IJNship.ship2, "p");
        let myShip3 = newTextElem(IJNship.ship3, "p");
        let myShip4 = newTextElem(IJNship.ship4, "p");
        let myShip5 = newTextElem(IJNship.ship5, "p");
        let myShip6 = newTextElem(IJNship.ship6, "p");
        let myShip7 = newTextElem(IJNship.ship7, "p");
        let myShip8 = newTextElem(IJNship.ship8, "p");
        let myShip9 = newTextElem(IJNship.ship9, "p");
        let myShip10 = newTextElem(IJNship.ship10, "p");
        let myShip11 = newTextElem(IJNship.ship11, "p");
        let myShip12 = newTextElem(IJNship.ship12, "p");
        let myShip13 = newTextElem(IJNship.ship13, "p");
        let myShip14 = newTextElem(IJNship.ship14, "p");
        let myShip15 = newTextElem(IJNship.ship15, "p");
        let myShip16 = newTextElem(IJNship.ship16, "p");
        let myShip17 = newTextElem(IJNship.ship17, "p");
        let myShip18 = newTextElem(IJNship.ship18, "p");
        let myShip19 = newTextElem(IJNship.ship19, "p");
        let myShip20 = newTextElem(IJNship.ship20, "p");
        let myShip21 = newTextElem(IJNship.ship21, "p");
        let myShip22 = newTextElem(IJNship.ship22, "p");
        let myShip23 = newTextElem(IJNship.ship23, "p");
        let myShip24 = newTextElem(IJNship.ship24, "p");
        let myShip25 = newTextElem(IJNship.ship25, "p");
        let myShip26 = newTextElem(IJNship.ship26, "p");
        let myShip27 = newTextElem(IJNship.ship27, "p");
        let myShip28 = newTextElem(IJNship.ship28, "p");
        let myShip29 = newTextElem(IJNship.ship29, "p");
        let myShip30 = newTextElem(IJNship.ship30, "p");
        let myShip31 = newTextElem(IJNship.ship31, "p");
        let myShip32 = newTextElem(IJNship.ship32, "p");
        let myShip33 = newTextElem(IJNship.ship33, "p");
        let myShip34 = newTextElem(IJNship.ship34, "p");
        let myShip35 = newTextElem(IJNship.ship35, "p");
        let myShip36 = newTextElem(IJNship.ship36, "p");
        let myShip37 = newTextElem(IJNship.ship37, "p");
        let myShip38 = newTextElem(IJNship.ship38, "p");
        let myShip39 = newTextElem(IJNship.ship39, "p");
        let myShip40 = newTextElem(IJNship.ship40, "p");
        let myShip41 = newTextElem(IJNship.ship41, "p");
    
    
        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);
    
        return myDiv;
    };

    // Imperial Russian Navy

    let RUSshipList = document.getElementById("RUSshiplist");
        
    function newTextElem(text, type) {
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };
        
    function newRUSShipDiv(RUSship){
        let myDiv = document.createElement("div");
        myDiv.className = "RUSship";
            
        let myTitle = newTextElem(RUSship.class,"H3")
            
        myDiv.append(myTitle);
        
        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
        
        let myInfoDiv = newInfoDiv(RUSship);
        myDiv.append(myTitle, myInfoDiv);
            
        myInfoDiv.style.display = "none";
        
        myTitle.addEventListener("click", () => toggleData(myInfoDiv));
        
        return myDiv;
    };
        
    RUSship.forEach(RUSship => {
        let elem = newRUSShipDiv(RUSship);
        RUSshipList.appendChild(elem);
    });
        
    function changeColor(elem, color){
        elem.style.color = color;
    };
        
    function newInfoDiv(RUSship){
        let myDiv = document.createElement("div");
        
        let myBuilt = newTextElem(RUSship.built, "h6");
        let myService = newTextElem(RUSship.service, "h6");
        let myShip1 = newTextElem(RUSship.ship1, "p");
        let myShip2 = newTextElem(RUSship.ship2, "p");
        let myShip3 = newTextElem(RUSship.ship3, "p");
        let myShip4 = newTextElem(RUSship.ship4, "p");
        let myShip5 = newTextElem(RUSship.ship5, "p");
        let myShip6 = newTextElem(RUSship.ship6, "p");
        let myShip7 = newTextElem(RUSship.ship7, "p");
        let myShip8 = newTextElem(RUSship.ship8, "p");
        let myShip9 = newTextElem(RUSship.ship9, "p");
        let myShip10 = newTextElem(RUSship.ship10, "p");
        let myShip11 = newTextElem(RUSship.ship11, "p");
        let myShip12 = newTextElem(RUSship.ship12, "p");
        let myShip13 = newTextElem(RUSship.ship13, "p");
        let myShip14 = newTextElem(RUSship.ship14, "p");
        let myShip15 = newTextElem(RUSship.ship15, "p");
        let myShip16 = newTextElem(RUSship.ship16, "p");
        let myShip17 = newTextElem(RUSship.ship17, "p");
        let myShip18 = newTextElem(RUSship.ship18, "p");
        let myShip19 = newTextElem(RUSship.ship19, "p");
        let myShip20 = newTextElem(RUSship.ship20, "p");
        let myShip21 = newTextElem(RUSship.ship21, "p");
        let myShip22 = newTextElem(RUSship.ship22, "p");
        let myShip23 = newTextElem(RUSship.ship23, "p");
        let myShip24 = newTextElem(RUSship.ship24, "p");
        let myShip25 = newTextElem(RUSship.ship25, "p");
        let myShip26 = newTextElem(RUSship.ship26, "p");
        let myShip27 = newTextElem(RUSship.ship27, "p");
        let myShip28 = newTextElem(RUSship.ship28, "p");
        let myShip29 = newTextElem(RUSship.ship29, "p");
        let myShip30 = newTextElem(RUSship.ship30, "p");
        let myShip31 = newTextElem(RUSship.ship31, "p");
        let myShip32 = newTextElem(RUSship.ship32, "p");
        let myShip33 = newTextElem(RUSship.ship33, "p");
        let myShip34 = newTextElem(RUSship.ship34, "p");
        let myShip35 = newTextElem(RUSship.ship35, "p");
        let myShip36 = newTextElem(RUSship.ship36, "p");
        let myShip37 = newTextElem(RUSship.ship37, "p");
        let myShip38 = newTextElem(RUSship.ship38, "p");
        let myShip39 = newTextElem(RUSship.ship39, "p");
        let myShip40 = newTextElem(RUSship.ship40, "p");
        let myShip41 = newTextElem(RUSship.ship41, "p");
        
        
        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);
        
        return myDiv;
    };

    // Soviet Navy

    let USSRshipList = document.getElementById("USSRshiplist");
        
    function newTextElem(text, type) {
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };
        
    function newUSSRShipDiv(USSRship){
        let myDiv = document.createElement("div");
        myDiv.className = "USSRship";
            
        let myTitle = newTextElem(USSRship.class,"H3")
            
        myDiv.append(myTitle);
        
        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
        
        let myInfoDiv = newInfoDiv(USSRship);
        myDiv.append(myTitle, myInfoDiv);
            
        myInfoDiv.style.display = "none";
        
        myTitle.addEventListener("click", () => toggleData(myInfoDiv));
        
        return myDiv;
    };
        
    USSRship.forEach(USSRship => {
        let elem = newUSSRShipDiv(USSRship);
        USSRshipList.appendChild(elem);
    });
        
    function changeColor(elem, color){
        elem.style.color = color;
    };
        
    function newInfoDiv(USSRship){
        let myDiv = document.createElement("div");
        
        let myBuilt = newTextElem(USSRship.built, "h6");
        let myService = newTextElem(USSRship.service, "h6");
        let myShip1 = newTextElem(USSRship.ship1, "p");
        let myShip2 = newTextElem(USSRship.ship2, "p");
        let myShip3 = newTextElem(USSRship.ship3, "p");
        let myShip4 = newTextElem(USSRship.ship4, "p");
        let myShip5 = newTextElem(USSRship.ship5, "p");
        let myShip6 = newTextElem(USSRship.ship6, "p");
        let myShip7 = newTextElem(USSRship.ship7, "p");
        let myShip8 = newTextElem(USSRship.ship8, "p");
        let myShip9 = newTextElem(USSRship.ship9, "p");
        let myShip10 = newTextElem(USSRship.ship10, "p");
        let myShip11 = newTextElem(USSRship.ship11, "p");
        let myShip12 = newTextElem(USSRship.ship12, "p");
        let myShip13 = newTextElem(USSRship.ship13, "p");
        let myShip14 = newTextElem(USSRship.ship14, "p");
        let myShip15 = newTextElem(USSRship.ship15, "p");
        let myShip16 = newTextElem(USSRship.ship16, "p");
        let myShip17 = newTextElem(USSRship.ship17, "p");
        let myShip18 = newTextElem(USSRship.ship18, "p");
        let myShip19 = newTextElem(USSRship.ship19, "p");
        let myShip20 = newTextElem(USSRship.ship20, "p");
        let myShip21 = newTextElem(USSRship.ship21, "p");
        let myShip22 = newTextElem(USSRship.ship22, "p");
        let myShip23 = newTextElem(USSRship.ship23, "p");
        let myShip24 = newTextElem(USSRship.ship24, "p");
        let myShip25 = newTextElem(USSRship.ship25, "p");
        let myShip26 = newTextElem(USSRship.ship26, "p");
        let myShip27 = newTextElem(USSRship.ship27, "p");
        let myShip28 = newTextElem(USSRship.ship28, "p");
        let myShip29 = newTextElem(USSRship.ship29, "p");
        let myShip30 = newTextElem(USSRship.ship30, "p");
        let myShip31 = newTextElem(USSRship.ship31, "p");
        let myShip32 = newTextElem(USSRship.ship32, "p");
        let myShip33 = newTextElem(USSRship.ship33, "p");
        let myShip34 = newTextElem(USSRship.ship34, "p");
        let myShip35 = newTextElem(USSRship.ship35, "p");
        let myShip36 = newTextElem(USSRship.ship36, "p");
        let myShip37 = newTextElem(USSRship.ship37, "p");
        let myShip38 = newTextElem(USSRship.ship38, "p");
        let myShip39 = newTextElem(USSRship.ship39, "p");
        let myShip40 = newTextElem(USSRship.ship40, "p");
        let myShip41 = newTextElem(USSRship.ship41, "p");
        
        
        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);
        
        return myDiv;
    };

    // French Navy

    let FNshipList = document.getElementById("FNshiplist");
        
    function newTextElem(text, type) {
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };
        
    function newFNShipDiv(FNship){
        let myDiv = document.createElement("div");
        myDiv.className = "FNship";
            
        let myTitle = newTextElem(FNship.class,"H3")
            
        myDiv.append(myTitle);
        
        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
        
        let myInfoDiv = newInfoDiv(FNship);
        myDiv.append(myTitle, myInfoDiv);
            
        myInfoDiv.style.display = "none";
        
        myTitle.addEventListener("click", () => toggleData(myInfoDiv));
        
        return myDiv;
    };
        
    FNship.forEach(FNship => {
        let elem = newFNShipDiv(FNship);
        FNshipList.appendChild(elem);
    });
        
    function changeColor(elem, color){
        elem.style.color = color;
    };
        
    function newInfoDiv(FNship){
        let myDiv = document.createElement("div");
        
        let myBuilt = newTextElem(FNship.built, "h6");
        let myService = newTextElem(FNship.service, "h6");
        let myShip1 = newTextElem(FNship.ship1, "p");
        let myShip2 = newTextElem(FNship.ship2, "p");
        let myShip3 = newTextElem(FNship.ship3, "p");
        let myShip4 = newTextElem(FNship.ship4, "p");
        let myShip5 = newTextElem(FNship.ship5, "p");
        let myShip6 = newTextElem(FNship.ship6, "p");
        let myShip7 = newTextElem(FNship.ship7, "p");
        let myShip8 = newTextElem(FNship.ship8, "p");
        let myShip9 = newTextElem(FNship.ship9, "p");
        let myShip10 = newTextElem(FNship.ship10, "p");
        let myShip11 = newTextElem(FNship.ship11, "p");
        let myShip12 = newTextElem(FNship.ship12, "p");
        let myShip13 = newTextElem(FNship.ship13, "p");
        let myShip14 = newTextElem(FNship.ship14, "p");
        let myShip15 = newTextElem(FNship.ship15, "p");
        let myShip16 = newTextElem(FNship.ship16, "p");
        let myShip17 = newTextElem(FNship.ship17, "p");
        let myShip18 = newTextElem(FNship.ship18, "p");
        let myShip19 = newTextElem(FNship.ship19, "p");
        let myShip20 = newTextElem(FNship.ship20, "p");
        let myShip21 = newTextElem(FNship.ship21, "p");
        let myShip22 = newTextElem(FNship.ship22, "p");
        let myShip23 = newTextElem(FNship.ship23, "p");
        let myShip24 = newTextElem(FNship.ship24, "p");
        let myShip25 = newTextElem(FNship.ship25, "p");
        let myShip26 = newTextElem(FNship.ship26, "p");
        let myShip27 = newTextElem(FNship.ship27, "p");
        let myShip28 = newTextElem(FNship.ship28, "p");
        let myShip29 = newTextElem(FNship.ship29, "p");
        let myShip30 = newTextElem(FNship.ship30, "p");
        let myShip31 = newTextElem(FNship.ship31, "p");
        let myShip32 = newTextElem(FNship.ship32, "p");
        let myShip33 = newTextElem(FNship.ship33, "p");
        let myShip34 = newTextElem(FNship.ship34, "p");
        let myShip35 = newTextElem(FNship.ship35, "p");
        let myShip36 = newTextElem(FNship.ship36, "p");
        let myShip37 = newTextElem(FNship.ship37, "p");
        let myShip38 = newTextElem(FNship.ship38, "p");
        let myShip39 = newTextElem(FNship.ship39, "p");
        let myShip40 = newTextElem(FNship.ship40, "p");
        let myShip41 = newTextElem(FNship.ship41, "p");
        
        
        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);
        
        return myDiv;
    };

    // Lython Royal Navy

    let LRNshipList = document.getElementById("LRNshiplist");
        
    function newTextElem(text, type) {
        let myElem = document.createElement(type)
        myElem.textContent = text;
        return myElem;
    };
        
    function newLRNShipDiv(LRNship){
        let myDiv = document.createElement("div");
        myDiv.className = "LRNship";
            
        let myTitle = newTextElem(LRNship.class,"H3")
            
        myDiv.append(myTitle);
        
        myTitle.addEventListener("mouseover", () => changeColor(myTitle, "#e1c699"));
        myTitle.addEventListener("mouseout", () => changeColor(myTitle, "#000000"));
        
        let myInfoDiv = newInfoDiv(LRNship);
        myDiv.append(myTitle, myInfoDiv);
            
        myInfoDiv.style.display = "none";
        
        myTitle.addEventListener("click", () => toggleData(myInfoDiv));
        
        return myDiv;
    };
        
    LRNship.forEach(LRNship => {
        let elem = newLRNShipDiv(LRNship);
        LRNshipList.appendChild(elem);
    });
        
    function newInfoDiv(LRNship){
        let myDiv = document.createElement("div");
        
        let myBuilt = newTextElem(LRNship.built, "h6");
        let myService = newTextElem(LRNship.service, "h6");
        let myShip1 = newTextElem(LRNship.ship1, "p");
        let myShip2 = newTextElem(LRNship.ship2, "p");
        let myShip3 = newTextElem(LRNship.ship3, "p");
        let myShip4 = newTextElem(LRNship.ship4, "p");
        let myShip5 = newTextElem(LRNship.ship5, "p");
        let myShip6 = newTextElem(LRNship.ship6, "p");
        let myShip7 = newTextElem(LRNship.ship7, "p");
        let myShip8 = newTextElem(LRNship.ship8, "p");
        let myShip9 = newTextElem(LRNship.ship9, "p");
        let myShip10 = newTextElem(LRNship.ship10, "p");
        let myShip11 = newTextElem(LRNship.ship11, "p");
        let myShip12 = newTextElem(LRNship.ship12, "p");
        let myShip13 = newTextElem(LRNship.ship13, "p");
        let myShip14 = newTextElem(LRNship.ship14, "p");
        let myShip15 = newTextElem(LRNship.ship15, "p");
        let myShip16 = newTextElem(LRNship.ship16, "p");
        let myShip17 = newTextElem(LRNship.ship17, "p");
        let myShip18 = newTextElem(LRNship.ship18, "p");
        let myShip19 = newTextElem(LRNship.ship19, "p");
        let myShip20 = newTextElem(LRNship.ship20, "p");
        let myShip21 = newTextElem(LRNship.ship21, "p");
        let myShip22 = newTextElem(LRNship.ship22, "p");
        let myShip23 = newTextElem(LRNship.ship23, "p");
        let myShip24 = newTextElem(LRNship.ship24, "p");
        let myShip25 = newTextElem(LRNship.ship25, "p");
        let myShip26 = newTextElem(LRNship.ship26, "p");
        let myShip27 = newTextElem(LRNship.ship27, "p");
        let myShip28 = newTextElem(LRNship.ship28, "p");
        let myShip29 = newTextElem(LRNship.ship29, "p");
        let myShip30 = newTextElem(LRNship.ship30, "p");
        let myShip31 = newTextElem(LRNship.ship31, "p");
        let myShip32 = newTextElem(LRNship.ship32, "p");
        let myShip33 = newTextElem(LRNship.ship33, "p");
        let myShip34 = newTextElem(LRNship.ship34, "p");
        let myShip35 = newTextElem(LRNship.ship35, "p");
        let myShip36 = newTextElem(LRNship.ship36, "p");
        let myShip37 = newTextElem(LRNship.ship37, "p");
        let myShip38 = newTextElem(LRNship.ship38, "p");
        let myShip39 = newTextElem(LRNship.ship39, "p");
        let myShip40 = newTextElem(LRNship.ship40, "p");
        let myShip41 = newTextElem(LRNship.ship41, "p");
        
        
        myDiv.append(myBuilt, myService, myShip1, myShip2, myShip3, myShip4, myShip5, myShip6, myShip7, myShip8, myShip9, myShip10, myShip11, myShip12, myShip13, myShip14, myShip15, myShip16, myShip17, myShip18, myShip19, myShip20, myShip21, myShip22, myShip23, myShip24, myShip25, myShip26, myShip27, myShip28, myShip29, myShip30, myShip31, myShip32, myShip33, myShip34, myShip35, myShip36, myShip37, myShip38, myShip39, myShip40, myShip41);
        
        return myDiv;
    };

    function changeColor(elem, color){
        elem.style.color = color;
    };
    
    function toggleData(item) {
        if(item.style.display === "none"){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        };
    };