// --- BASE DE DONNÉES BUREAU DU RAP (database.js) ---
// Date : 22/11/2025

export const dataRappeurs = [
    // ==========================================
    // 🏆 LES LÉGENDES
    // ==========================================
    {
        id: "booba",
        nom: "Booba",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/booba.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.7M Abonnés",
        bio: "Le Duc. Patron du 92i.",
        bioLongue: "Élie Yaffa, dit Booba. Pionnier du rap français, il a traversé les époques. Il a imposé l'autotune et le rap business en France.",
        albums: [
            {
                titre: "ULTRA", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_ultra.jpg",
                tracks: ["GP", "Azerty", "RST", "Bonne journée", "Mona Lisa", "Je t'aime", "5G", "Vue sur la mer", "L'olivier", "VVV", "31", "Ultra", "Dernière fois", "Grain de sable"]
            },
            {
                titre: "Trône", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_trône.jpg",
                tracks: ["Centurion", "Friday", "Drapeau noir", "Trône", "Bouyon", "DKR", "Nougat", "Fleur de saison", "Terrain", "Petite fille", "Ça va aller", "113", "Ridin'", "Éléphant"]
            },
            {
                titre: "Temps Mort", annee: "2002", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/booba_temps_mort.jpg",
                tracks: ["Temps mort", "Ma définition", "Jusqu'ici tout va bien", "Repose en paix", "Le bitume avec une plume", "Animals", "Sans ratures", "Ecoute bien", "Inédit", "Strass et paillettes", "Destinée"]
            }
        ]
    },
    {
        id: "iam",
        nom: "IAM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/iam.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "500k Abonnés",
        bio: "Les architectes du rap marseillais.",
        albums: [
            {
                titre: "L'École du Micro d'Argent", annee: "1997", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_lecole_du_micro_dargent.jpg",
                tracks: ["L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "Demain, c'est loin"]
            },
            { titre: "Ombre est lumière", annee: "1993", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_ombre_est_lumière.jpg", tracks: ["Le feu", "Cosmos", "Vos dieux ont les mains sales", "Le mia", "Je danse le mia"] },
            { titre: "Arts Martiens", annee: "2013", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/iam_arts_martiens.jpg", tracks: ["Spartiate Spirit", "Les raisons de la colère", "Notre dame veille", "Benkei et Minamoto"] }
        ]
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/suprême_ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie brute de la révolte.",
        albums: [
            { titre: "Suprême NTM", annee: "1998", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/suprême_ntm_suprême_ntm.jpg", tracks: ["Intro", "Back dans les bacs", "Laisse pas traîner ton fils", "Ma Benz", "Seine-Saint-Denis Style", "Pose ton gun"] },
            { titre: "Paris sous les bombes", annee: "1995", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/suprême_ntm_paris_sous_les_bombes.jpg", tracks: ["Plus jamais ça", "Tout n'est pas si facile", "La fièvre", "Paris sous les bombes", "Qu'est-ce qu'on attend"] }
        ]
    },
    {
        id: "kaaris",
        nom: "Kaaris",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kaaris.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.1M Abonnés",
        bio: "Le Dozo. Père de la Trap française.",
        albums: [
            { titre: "Or Noir", annee: "2013", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_or_noir.jpg", tracks: ["Bizon", "Zoo", "Ciroc", "Or noir", "Bouchon de liège", "Dès le départ", "Pas de remède", "Je bibi", "2.7.0"] },
            { titre: "Le Bruit de mon âme", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_le_bruit_de_mon_âme.jpg" },
            { titre: "Okou Gnakouri", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kaaris_okou_gnakouri.jpg" }
        ]
    },
    {
        id: "rohff",
        nom: "Rohff",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/rohff.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "729k Abonnés",
        bio: "Le Padre du Rap Game.",
        albums: [
            { titre: "Le Code de l'Horreur", annee: "2008", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/rohff_le_code_de_lhorreur.jpg", tracks: ["Rap Game", "J'arrive", "Testament", "Sévère", "Hysteric love", "La grande classe"] },
            { titre: "La Fierté des Nôtres", annee: "2004", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/rohff_la_fierté_des_nôtres.jpg", tracks: ["La fierté des nôtres", "Le son qui tue", "Zone internationale", "94"] }
        ]
    },
    {
        id: "mcsolaar",
        nom: "MC Solaar",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mc solar.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "300k Abonnés",
        bio: "L'As de Trèfle. Le poète du rap français.",
        albums: [
            { titre: "Prose Combat", annee: "1994", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mc_solaar_prose_combat.jpg" },
            { titre: "Qui sème le vent récolte le tempo", annee: "1991", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mc_solaar_qui_sème_le_vent_récolte_le_tempo.jpg" }
        ]
    },
    {
        id: "sexion",
        nom: "Sexion d'Assaut",
        statut: "legende",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sexion_dassaut.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.1M Abonnés",
        bio: "Le groupe qui a marqué une génération.",
        albums: [
            { titre: "L'Apogée", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sexion_dassaut_lapogée.jpg", tracks: ["Mets pas celle là", "Ma direction", "Disque d'or", "Avant qu'elle parte", "Wati House", "Africain", "Problèmes d'adultes", "J'reste debout", "Balader"] },
            { titre: "L'École des points vitaux", annee: "2010", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sexion_dassaut_lécole_des_points_vitaux.jpg", tracks: ["Casquette à l'envers", "Désolé", "Wati by Night", "J'ai pas les loves", "Changement d'ambiance", "Mon gars sûr"] }
        ]
    },

    // ==========================================
    // 🔥 TENDANCES
    // ==========================================
    {
        id: "gazo",
        nom: "Gazo",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/gazo.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "4.3M Abonnés",
        bio: "Le chef de la Drill FR.",
        albums: [
            { titre: "KMT", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_kmt.jpg", tracks: ["BECTE", "BODIES", "LETTRE À UN OPPS", "RAPPEL", "JEUX DANGEREUX", "M.A.L.A", "GRA GRA BOOM", "HENNESSY", "DIE", "BOSS", "CÉLINE 3X", "MOLLAZI", "FLEURS"] },
            { titre: "Drill FR", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_drill_fr.jpg", tracks: ["Intro", "Haine&Sex", "Kassav", "Tchin 2x", "Parkinson", "A$AP", "Drill FR 5", "Euphon", "Mon cher"] },
            { titre: "La Mélo est Gangx", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gazo_la_mélo_est_gangx.jpg", tracks: ["200%", "SOBAD", "CARTIER", "NOTRE DAME", "INTERLUDE", "100K", "24/34", "OUTRO"] }
        ]
    },
    {
        id: "tiakola",
        nom: "Tiakola",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/tiakola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.6M Abonnés",
        bio: "Le prince de la mélo.",
        albums: [
            { titre: "Mélo", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tiakola_mélo.jpg", tracks: ["1ntro'p", "#TT", "Arsenik", "Parapluie", "La clé", "Mode AV", "Si j'savais", "Meuda", "Gasolina", "Soza", "Riri / No Camera", "M3lo", "Atasanté", "Roro", "Coucher de soleil"] },
            { titre: "BDLM Vol. 1", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/tiakola_bdlm_vol_1.jpg", tracks: ["MANON B", "Y.J", "GRAND PRIX", "RESTE-LA", "PLAISIR NOCIF", "T.I.A", "LA TOUR", "PAPILLON"] }
        ]
    },
    {
        id: "werenoi",
        nom: "Werenoi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/werenoi.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.8M Abonnés",
        bio: "La machine à hits du 93.",
        albums: [
            { titre: "Carré", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_carré.jpg", tracks: ["Intro Rolex", "Maison hantée", "Ciao", "Figaro", "Grisaille", "Laboratoire", "Virus", "Tout seul", "L'ancien", "Vroum Vroum", "Satan 2", "Nos labels c'est du papel", "Boussole", "Escorte", "Salaire", "Rude Boy", "Chemin d'or"] },
            { titre: "Pyramide", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_pyramide.jpg", tracks: ["Intro", "Pyramide", "Maudit", "Dans un verre", "Location", "Télescope", "La vie de star", "Chaleur", "Je suis en moto", "Matelas", "Les codes", "3x filtré", "Faf", "10.03.2023", "Animal", "Picasso", "Seul"] },
            { titre: "Telegram 2", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/werenoi_telegram_2.jpg", tracks: ["Magot", "Bang", "3x filtré", "Mauvaise", "Dans un verre", "Tu connais", "Bipolaire", "Alpha"] }
        ]
    },
    {
        id: "sdm",
        nom: "SDM",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sdm.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.8M Abonnés",
        bio: "Ocho. La voix tonitruante du 92i.",
        albums: [
            { titre: "À la vie à la mort", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_à_la_vie_à_la_mort.jpg", tracks: ["PLUS RIEN", "CARTIER SANTOS", "TOKA", "JEUX D'ECHECS", "MAINTENANT ÇA VA", "POUR ELLE", "METALLICA", "DANS LA TÊTE", "SCORPION", "TOUT CE QU'IL NOUS RESTE"] },
            { titre: "Liens du 100", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_liens_du_100.jpg", tracks: ["Hier encore", "Mr. Ocho", "Bolide allemand", "Ragnar", "Nwar sur Nwar", "Si tu savais", "Cette année-là", "Fame", "Dans le club", "Franklin Saint", "2sang43", "Redescends", "File de gauche", "Le temps", "Sang40"] },
            { titre: "OCHO (Deluxe)", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sdm_ocho_(deluxe).jpg", tracks: ["Intro", "Yakalelo", "Rousseau", "Titulaires", "Prince de la Calle", "Gâchette", "Appel manqué", "Daddy", "La vie de rêve", "Rentrer", "Keur nwar", "Droit de veto", "Cello", "Van Damme", "T'as peur", "Le bruit des applaudissements", "100-O", "Game Over", "Compte sur moi"] }
        ]
    },
    {
        id: "plk",
        nom: "PLK",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/plk.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "885k Abonnés",
        bio: "Polak. L'efficacité incarnée.",
        albums: [
            { titre: "Enna", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/plk_enna.jpg", tracks: ["Bénef", "On sait jamais", "Les comptes", "Billet d'20", "Dégaine de bandit", "Dans les clips", "C'est mort", "Pourtant", "Mamie", "Alleluia", "Chandon et Moët", "Calme", "La vie c'est marrant", "3 en 1", "Toutes générations", "Au fond d'ma tête", "Pilote", "Terrible"] },
            { titre: "Polak", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/plk_polak.jpg", tracks: ["Intro", "Le sel", "Waow", "Séparés", "250", "Idiots", "Polak", "Go", "Bunkoeur", "Monégasque", "Hier", "Ils nous comprennent pas", "Olcho", "Dingue", "Sans suite"] }
        ]
    },
    {
        id: "jul",
        nom: "Jul",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jul.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "7M Abonnés",
        bio: "L'OVNI. Le plus gros vendeur.",
        albums: [
            { titre: "L'OVNI", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_lovni.jpg", tracks: ["On m'appelle l'ovni", "C'est le son de la gratte", "Tchikita", "Je dis rien", "E.T", "Je fais le sourd", "Qui a dit"] },
            { titre: "My World", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_my_world.jpg", tracks: ["En Y", "Wesh alors", "Comme d'hab", "Lova", "Mamasita", "Amnésia", "Dans l'appart", "Pour les vaillants", "Il me faut des billets"] },
            { titre: "La Machine", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jul_la_machine.jpg", tracks: ["Folie", "Italia", "Sousou", "Bande organisée", "Toute la nuit", "Pas de love", "Ça sent bon", "Pour un rien", "Rentrez pas dans ma tête"] }
        ]
    },
    {
        id: "ninho",
        nom: "Ninho",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ninho.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "12.3M Abonnés",
        bio: "Jefe. Recordman des certifications.",
        albums: [
            { titre: "Jefe", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_jefe.jpg", tracks: ["Jefe", "VVS", "Vérité", "Arme de poing", "Sky Priority", "OG", "Aïcha", "Mood", "Athéna", "La maison que je voulais"] },
            { titre: "Destin", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_destin.jpg", tracks: ["Sans peine", "La vie qu'on mène", "Goutte d'eau", "Paris c'est magique", "Jeune Lossa", "Maman ne le sait pas", "Putana", "À découvert", "L'ancien", "Jamais"] },
            { titre: "M.I.L.S 3", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ninho_mils_3.jpg", tracks: ["M.I.L.S 3", "Lettre à une femme", "Zipette", "Promo", "Filon", "La puerta", "En chien", "Mauvais Djo", "Gros vendeurs"] }
        ]
    },
    {
        id: "hamza",
        nom: "Hamza",
        statut: "tendance",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/hamza.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "1.8M Abonnés",
        bio: "Sauce God. Le roi du drip.",
        albums: [
            { titre: "Sincèrement", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hamza_sincèrement.jpg", tracks: ["Introduction", "Free YSL", "Ma réalité", "Au bout de la nuit", "Sincèrement", "Codéine 19", "Sadio", "Tsunami", "Atasanté"] },
            { titre: "Paradise", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hamza_paradise.jpg", tracks: ["Paradise", "Validé", "HS", "Vibes", "Addiction", "1994", "Goleador", "Minuit 13", "Dale x Love Therapy"] }
        ]
    },
    {
        id: "yame",
        nom: "Yamê",
        statut: "tendance",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/yamê.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "442k Abonnés",
        bio: "La révélation 'Bécane'. Voix unique.",
        albums: [
            { titre: "ELOWI", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/yamê_elowi.jpg", tracks: ["Ayo Mba", "Mon bail", "Call of Valhalla", "Lowkey", "Bahwai", "Déter", "Bécane", "Business", "Quête"] }
        ]
    },
    {
        id: "fave",
        nom: "Favé",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/favé.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1M Abonnés",
        bio: "L'énergie Jersey. Ascension fulgurante.",
        albums: [
            { titre: "Il le fallait", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/favé_il_le_fallait.jpg", tracks: ["Urus", "Flashback", "Mercedes", "Toxic", "Vibes", "Mode avion", "Favé"] }
        ]
    },
    {
        id: "houdi",
        nom: "Houdi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/houdi.webp",
        chiffres: "121k Abonnés",
        bio: "Le rappeur masqué du 77.",
        albums: [
            { titre: "SUN7", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/houdi_sun7.jpg", tracks: ["Sun7", "Médical", "Woka", "Grünt #54", "Sensation", "Mode", "Dernière ligne droite"] },
            { titre: "La Folie des Grandeurs", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/houdi_la_folie_des_grandeurs.jpg", tracks: ["La folie des grandeurs", "Monde", "Belle chanson", "Mélancolie", "Doute"] }
        ]
    },
    {
        id: "la_mano_19",
        nom: "La Mano 1.9",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/la_mano_19.webp",
        chiffres: "749k Abonnés",
        bio: "La terreur du 19ème. Énergie brute.",
        albums: [
            { titre: "R.A.T.", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_mano_19_rat.jpg", tracks: ["R.A.T.", "Halla", "Trahison", "Cartel", "Zone", "La Mano"] }
        ]
    },
    {
        id: "kerchak",
        nom: "Kerchak",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kerchak.webp",
        chiffres: "743k Abonnés",
        bio: "Le retour de la Jersey en France.",
        albums: [
            { titre: "Confiance", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kerchak_confiance.jpg", tracks: ["Sabor", "Peur", "Jane", "Calme", "Tarzan", "Génération Miracle", "Confiance"] }
        ]
    },
    {
        id: "timal",
        nom: "Timal",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/timal.webp",
        chiffres: "1.4M Abonnés",
        bio: "Trop chaud. Rap agressif.",
        albums: [
            { titre: "Arès", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/timal_arès.jpg", tracks: ["Fuego", "Filtré", "La 13", "Arès", "Je me promène", "Bouteille"] },
            { titre: "Trop Chaud", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/timal_trop_chaud.jpg", tracks: ["Arrivant", "Dans la ville", "Maria", "Du rire aux larmes", "La 9"] }
        ]
    },
    {
        id: "zola",
        nom: "Zola",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/zola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "170k Abonnés",
        bio: "Attitude rockstar et motos.",
        albums: [
            { titre: "Diamant du Bled", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_diamant_du_bled.jpg", tracks: ["Amber", "Toute la journée", "Cartier Panthère", "Envie7vie", "Finish Him", "Gorgée", "L'info", "Cœur de Ice"] },
            { titre: "Survie", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_survie.jpg", tracks: ["Leurs vies", "Pistou", "Papillon", "Ma jolie", "Wow", "Madame", "Pollos Hermanos", "Sanchez", "Vista", "Bad Bi", "Mauvais choix"] },
            { titre: "Cicatrices", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zola_cicatrices.jpg", tracks: ["Baby Boy", "Fuckboi", "Mugiwara", "Spiderman", "L1 L2", "Extasy", "Kinshasa", "Astroboy", "Zolabeille", "7.65", "Alloicizolaski", "L", "California Girl", "Cicatrices", "B.A.L"] }
        ]
    },

    // ==========================================
    // 💎 PÉPITES (Estime / Underground)
    // ==========================================
    {
        id: "la_feve",
        nom: "La Fève",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/la_feve.webp",
        chiffres: "301k Abonnés",
        bio: "Le chef de file de la New Wave.",
        albums: [
            { titre: "ERRR", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_errr.jpg", tracks: ["BELEK", "OTW", "L'APPEL", "CASTRO", "NO HOOK", "SAOULÉ", "CRENSHAW", "RAT INTERLUDE", "ZAZA", "MAUVAIS PAYEUR", "VOIR AILLEURS", "BOXE INTERLUDE"] },
            { titre: "24", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_24.jpg", tracks: ["ZOMBIE", "24", "DJ", "LOYAL", "QUI ?", "RIP KEED", "OUTRO", "7W", "MAUVAIS"] },
            { titre: "KOLAF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/la_fève_kolaf.jpg", tracks: ["LA FOUDRE", "JEUNE INTERLUDE", "VILAIN", "TATOUE", "LADY D", "KOLAF", "DANS LA PIÈCE", "BELLES SOMMES"] }
        ]
    },
    {
        id: "alphawann",
        nom: "Alpha Wann",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/alpha_wann.webp",
        chiffres: "506k Abonnés",
        bio: "Le Don. La référence technique.",
        albums: [
            { titre: "UMLA", annee: "2018", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=UMLA", tracks: ["Stupéfiant et noir", "Pistolet Rose", "Langage Crypté", "Pour celles", "Olive & Tom", "1500", "Ça va ensemble", "Contrex", "La lumière dans les yeux", "Le piège"] },
            { titre: "don dada mixtape vol 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alpha_wann_don_dada_mixtape_vol_1.jpg", tracks: ["mitsubishi", "philly flingo", "soldat tue soldat", "ny à fond", "san andreas", "dirty", "velux", "t'as capté"] },
            { titre: "Alph Lauren 3", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alpha_wann_alph_lauren_3.jpg", tracks: ["Paire de Prada", "R5", "Courchevel", "Turban", "Loub", "Shanghaï", "Kim K", "Le jeune de l'année"] }
        ]
    },
    {
        id: "laylow",
        nom: "Laylow",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/laylow.webp",
        chiffres: "876k Abonnés",
        bio: "Mr Anderson. Visionnaire digital.",
        albums: [
            { titre: "TRINITY", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/laylow_trinity.jpg", tracks: ["Initialisation", "MEGATRON", "TRINITYVILLE", "VAMONOS", "PLUG", "PIRANA", "HILLZ", "AKIRA", "LOGICIEL TRISTE"] },
            { titre: "L'Étrange Histoire de Mr.Anderson", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Mr.Anderson", tracks: ["UN RÊVE ÉTRANGE", "L'HISTOIRE DE MR. ANDERSON", "IIV", "VOIR LE MONDE BRÛLER", "WINDOW SHOPPER PART. 1", "SPECIAL", "LOST FOREST"] },
            { titre: ".RAW-Z", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/laylow_raw-z.jpg", tracks: ["KANYE WEST", "CITY", "MALADIE", "VISA", "AMY", "GOGO", "SWISH", "BOTOX"] }
        ]
    },
    {
        id: "luther",
        nom: "Luther",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/luther.webp",
        chiffres: "245k Abonnés",
        bio: "Le mystère d'Avignon.",
        albums: [
            { titre: "GARÇON", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_garçon.jpg", tracks: ["PK TU M'APL ?", "ALAKAZAM", "BLAKE & MORTIMER", "MA VIE D'AVANT", "LESSGUI", "LE SANG", "TORIEL", "GARÇON"] },
            { titre: "EXIT", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_exit.jpg", tracks: ["INTRO", "ROUGE GORON", "MOSSY COBBLESTONE", "T3", "LOOK", "JOURNAL", "SEUIL", "CHÂTEAU FORT", "USINE", "WATERPROOF"] },
            { titre: "Trame", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/luther_trame.jpg", tracks: ["Plaies", "Mani", "Errance", "Trame", "Slow", "Hiver", "Le ciel est bleu", "Fin"] }
        ]
    },
    {
        id: "h_jeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/h_jeunecrack.webp",
        chiffres: "46k Abonnés",
        bio: "Le roi du DIY.",
        albums: [
            { titre: "3ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_3ème_cycle.jpg", tracks: ["La Trinité", "Musée", "3 Meufs", "Vrai Crack", "La Cantine", "L'éther", "Le joueur le plus précieux"] },
            { titre: "MATIÈRE PREMIÈRE", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_matière_première.jpg", tracks: ["Au max", "Mauvais", "Présidentiel flow", "La H", "Encore un matin", "T-Shirt blanc", "P.E.C.", "Cactus"] },
            { titre: "2ème Cycle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/h_jeunecrack_2ème_cycle.jpg", tracks: ["Introduction", "Onyx", "Donne moi le", "Etoiles", "Cycle", "Tout droit", "Pape du hood", "Fin"] }
        ]
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mairo.webp",
        chiffres: "52k Abonnés",
        bio: "La technique suisse.",
        albums: [
            { titre: "omar chappier", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_omar_chappier.jpg", tracks: ["la mouche", "crack crack", "2 jackets", "nouvelle écriture", "dope sound", "merci bonne journée", "larousse", "pov 2023"] },
            { titre: "Rougemort", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_rougemort.jpg", tracks: ["Rougemort", "Attentat", "La vigne", "Erythrée", "Kill Bill", "M.A.I.R"] },
            { titre: "95 Monde Libre", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mairo_95_monde_libre.jpg", tracks: ["Intro", "Monde Libre", "95", "Liberté", "Egalité", "Fraternité", "Outro"] }
        ]
    },
    {
        id: "khali",
        nom: "Khali",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/khali.webp",
        chiffres: "68k Abonnés",
        bio: "L'émotion nasillarde.",
        albums: [
            { titre: "LAÏLA", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/khali_laïla.jpg", tracks: ["COULEURS", "D&G", "ME3ZA", "LE MONDE EST À TOI", "FREE", "JAMAIS COMME ILS VONT", "JE FERAI DE MON MIEUX"] },
            { titre: "IL ME RESSEMBLE PAS NON PLUS", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/khali_il_me_ressemble_pas_non_plus.jpg", tracks: ["PEUR ET DÉSIR", "NO PAIN NO GAIN", "UN TRUC ÉTRANGE", "DOULEUR FANTÔME", "LE MONDE EST À TOI 2"] },
            { titre: "Palmer", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/khali_palmer.jpg", tracks: ["Palmer", "Sable", "Mer", "Soleil", "Vent", "Pluie", "Orage", "Eclair"] }
        ]
    },
    {
        id: "solalune",
        nom: "So La Lune",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/so_la_lune.webp",
        chiffres: "123k Abonnés",
        bio: "La voix qui divise et fascine.",
        albums: [
            { titre: "Fissure de vie", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/so_la_lune_fissure_de_vie.jpg", tracks: ["Soleil mourant", "Fin heureuse", "Medellín", "Range Ro", "Guérison", "En bas", "Vide", "Dona"] },
            { titre: "L'enfant de la pluie", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=L'enfant", tracks: ["Intro (L'enfant de la pluie)", "Remontada", "99", "Perte de temps", "Au bord du précipice", "Opérationnelle", "Interlude"] },
            { titre: "Théia", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/so_la_lune_théia.jpg", tracks: ["Théia", "Lune", "Soleil", "Etoiles", "Galaxie", "Univers", "Cosmos", "Infini"] }
        ]
    },
    {
        id: "princewaly",
        nom: "Prince Waly",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/prince_waly.webp",
        chiffres: "52k Abonnés",
        bio: "Le style incarné.",
        albums: [
            { titre: "Moussa", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_moussa.jpg", tracks: ["Balotelli", "Problème", "Avertissement", "Mojo", "Mercutio", "Rottweiler", "Walygator"] },
            { titre: "BO Y Z", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_bo_y_z.jpg", tracks: ["Yacht", "BO Y Z", "Doggy Bag", "Marsellus Wallace", "Plan", "Smoke", "Californie"] },
            { titre: "Junior", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/prince_waly_junior.jpg", tracks: ["Junior", "Senior", "Majeur", "Mineur", "Adulte", "Enfant", "Bébé", "Vieux"] }
        ]
    },
    {
        id: "benjaminepps",
        nom: "Benjamin Epps",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/benjamin_epps.webp",
        chiffres: "51k Abonnés",
        bio: "La voix de crécelle.",
        albums: [
            { titre: "Fantôme avec chauffeur", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/benjamin_epps_fantôme_avec_chauffeur.jpg", tracks: ["Notorious", "Goom", "J'entends parler de toi", "Matlas", "Dieu bénisse les enfants", "Le plus grand"] },
            { titre: "La grande désillusion", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/benjamin_epps_la_grande_désillusion.jpg", tracks: ["Bienvenue à Bellevue", "La pression", "Intellectuel violent", "Jeune", "Libre", "Marathon", "Tout va bien"] },
            { titre: "Le futur", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/benjamin_epps_le_futur.jpg", tracks: ["Le futur", "Le présent", "Le passé", "L'avenir", "L'histoire", "Le temps", "L'époque", "La période"] }
        ]
    },
    {
        id: "hugotsr",
        nom: "Hugo TSR",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/hugo_tsr.webp",
        chiffres: "319k Abonnés",
        bio: "Le fantôme du 18ème.",
        albums: [
            { titre: "Tant qu'on est là", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_tant_quon_est_là.jpg", tracks: ["Rei", "Exercice", "Iceberg", "Tant qu'on est là", "La ligne verte", "Là-haut", "Autour de moi"] },
            { titre: "Fenêtre sur rue", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_fenêtre_sur_rue.jpg", tracks: ["Point de départ", "Ujis", "Coma artificiel", "Fenêtre sur rue", "La salle d'attente", "Eldorado", "L'habitude de la poisse"] },
            { titre: "Flaque de samples", annee: "2008", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/hugo_tsr_flaque_de_samples.jpg", tracks: ["Flaque de samples", "La pluie", "L'orage", "La tempête", "Le déluge", "L'inondation", "La marée", "Le tsunami"] }
        ]
    },
    {
        id: "demiportion",
        nom: "Demi Portion",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/demi_portion.webp",
        chiffres: "98k Abonnés",
        bio: "L'artisan. Rap sincère.",
        albums: [
            { titre: "Poids plume", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/demi_portion_poids_plume.jpg", tracks: ["Poids plume", "1990", "Retour aux sources", "Petit bonhomme", "La bonne école", "Artisan"] },
            { titre: "La bonne école", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/demi_portion_la_bonne_école.jpg", tracks: ["La bonne école", "Petit bonhomme", "Artisan", "Poids plume", "1990", "Retour aux sources"] },
            { titre: "Dragon Rash", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/demi_portion_dragon_rash.jpg", tracks: ["Dragon Rash", "Le dragon", "Le feu", "La flamme", "La brûlure", "La cendre", "La fumée", "L'étincelle"] }
        ]
    },
    {
        id: "souffrance",
        nom: "Souffrance",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/souffrance.webp",
        chiffres: "32k Abonnés",
        bio: "Le kickeur de Montreuil.",
        albums: [
            { titre: "Eau de source", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_eau_de_source.jpg", tracks: ["Intro", "Au boulot", "Khalass", "D'où l'on vient", "Matrice", "Ciel gris", "93", "Métro"] },
            { titre: "Tour de magie", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_tour_de_magie.jpg", tracks: ["Intro", "Magicien", "Simba", "Banal", "Au pied du mur", "Poussière", "Kandinsky", "Chaque jour"] },
            { titre: "Cité d'or", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/souffrance_cité_dor.jpg", tracks: ["Cité d'or", "L'or", "L'argent", "Le bronze", "Le cuivre", "Le fer", "L'acier", "Le métal"] }
        ]
    },
    {
        id: "isha",
        nom: "Isha",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/isha.webp",
        chiffres: "3k Abonnés",
        bio: "Le sage.",
        albums: [
            { titre: "Labrador Bleu", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_labrador_bleu.jpg", tracks: ["Intro", "La réincarnation de la queue du diable", "FIFA", "Bouteille de gaz", "Tueur de dragon", "A l'époque", "Maître nageur"] },
            { titre: "La Vie Augmente, Vol. 3", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_la_vie_augmente,_vol_3.jpg", tracks: ["Durag", "Les Magiciens", "Idole", "Magma", "Tradition", "Bad Boy", "La Vie Augmente", "Décorer les murs"] },
            { titre: "La Vie Augmente, Vol. 2", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/isha_la_vie_augmente,_vol_2.jpg", tracks: ["Tosma", "Domino", "L'augmentation", "La vie", "La mort", "La naissance", "La fin", "Le début"] }
        ]
    },
    {
        id: "limsa",
        nom: "Limsa d'Aulnay",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/limsa_daulnay.webp",
        chiffres: "53k Abonnés",
        bio: "La fluidité.",
        albums: [
            { titre: "Logique, Pt. 2", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/limsa_daulnay_logique,_pt_2.jpg", tracks: ["Seul Two", "4 décembre", "Le Ptit", "ASB", "Duper", "Kany"] },
            { titre: "Logique, Pt. 3", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/limsa_daulnay_logique,_pt_3.jpg", tracks: ["Intro", "Logique", "Jdid", "Le bouchon", "Starting Block", "Comme la lune", "Outro"] },
            { titre: "Logique, Pt. 1", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/limsa_daulnay_logique,_pt_1.jpg", tracks: ["Logique", "Partie 1", "Le début", "La fin", "Le milieu", "Le commencement", "L'origine", "La source"] }
        ]
    },
    {
        id: "furax",
        nom: "Furax Barbarossa",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/furax_barbarossa.webp",
        chiffres: "53k Abonnés",
        bio: "L'ogre.",
        albums: [
            { titre: "Caravelle", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_caravelle.jpg", tracks: ["Intro", "Caravelle", "A l'isolement", "Le poids du monde", "L'encre de nos plumes", "Mauvais œil", "L'ogre"] },
            { titre: "À l'isolement", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_à_lisolement.jpg", tracks: ["Intro", "A l'isolement", "Mauvais œil", "J'ai la haine", "Le meilleur des mondes", "C'est pas grave", "Fin de règne"] },
            { titre: "Testa Nera", annee: "2014", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/furax_barbarossa_testa_nera.jpg", tracks: ["Testa Nera", "La tête noire", "Le visage sombre", "L'âme obscure", "L'esprit ténébreux", "Le cœur noir", "Le sang noir", "La vie noire"] }
        ]
    },
    {
        id: "jazzybazz",
        nom: "Jazzy Bazz",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jazzy_bazz.webp",
        chiffres: "253k Abonnés",
        bio: "L'élégance.",
        albums: [
            { titre: "Memoria", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_memoria.jpg", tracks: ["Memoria", "Cœur de ice", "D.ieu", "Panorama", "Albiceleste", "Nouvelles", "Sablier", "Zone 19"] },
            { titre: "Nuit", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_nuit.jpg", tracks: ["Crépuscule", "El Presidente", "Eternité", "Leticia", "Trompes de Fallope", "Stalker", "Cinquante-cinq", "Sentiments"] },
            { titre: "P-Town", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jazzy_bazz_p-town.jpg", tracks: ["P-Town", "Paris", "La ville", "La capitale", "La cité", "Le quartier", "La rue", "Le bloc"] }
        ]
    },
    {
        id: "georgio",
        nom: "Georgio",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/georgio.webp",
        bio: "Le rap littéraire et rock.",
        albums: [
            { titre: "Héra", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_héra.jpg", tracks: ["L'espoir meurt en dernier", "Du bout de mes doigts", "Héra", "No Future", "Brûle", "Svetlana et Maïakovski", "La terre, je la dévore", "La vue du sang"] },
            { titre: "Sacré", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_sacré.jpg", tracks: ["Soto", "Près du feu", "Full moon", "Vers le haut", "Danse", "Emotions masquées", "A l'abri", "Parallèle"] },
            { titre: "XX5", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/georgio_xx5.jpg", tracks: ["Hier", "Aujourd'hui", "Demain", "Le futur", "Le passé", "Le présent", "L'avenir", "L'histoire"] }
        ]
    },
    {
        id: "zamdane",
        nom: "Zamdane",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/zamdan.webp",
        bio: "La mélancolie solaire.",
        albums: [
            { titre: "Couleur de ma peine", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_couleur_de_ma_peine.jpg", tracks: ["Tout ce qu'il voulait", "Le monde par ma fenêtre", "Incomplet", "Fauve", "Stradivarius", "1,2,3,4", "Naïf", "Boyka"] },
            { titre: "SOLSAD", annee: "2024", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_solsad.jpg", tracks: ["Le grand cirque", "Mélancolie criminel", "Printemps", "Bobo", "Million", "Loin d'ici", "Poussière", "A l'ammoniaque"] },
            { titre: "Chrysalis", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/zamdane_chrysalis.jpg", tracks: ["Chrysalis", "Papillon", "Chenille", "Cocon", "Métamorphose", "Transformation", "Evolution", "Changement"] }
        ]
    },
    {
        id: "lujipeka",
        nom: "Lujipeka",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lujipeka.webp",
        bio: "L'énergie spontanée.",
        albums: [
            { titre: "Montagnes Russes", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_montagnes_russes.jpg", tracks: ["Poupée russe", "Pas à ma place", "0.6", "L'eclipse", "Jusqu'au bout", "Meme", "Ahou", "L'autre côté"] },
            { titre: "L.U.J.I.", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_luji.jpg", tracks: ["L.U.J.I.", "Meme", "Ahou", "Palace", "L'autre côté", "Bientot", "On ira", "Le sum"] },
            { titre: "P.E.K.A", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lujipeka_peka.jpg", tracks: ["P.E.K.A", "Le début", "La fin", "Le milieu", "Le commencement", "L'origine", "La source", "La création"] }
        ]
    },
    {
        id: "100blaze",
        nom: "100 Blaze",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/100_blaze.webp",
        chiffres: "100k Abonnés",
        bio: "Le feu de Marseille.",
        albums: [
            { titre: "Depuis minot", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/100_blaze_depuis_minot.jpg", tracks: ["Depuis minot", "Bine", "Savoir faire", "J'ai pas fini", "Faut que ça brille", "La rue", "Le monde", "Outro"] }
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/404billy.webp",
        chiffres: "40k Abonnés",
        bio: "Sombre et technique.",
        albums: [
            { titre: "Process", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_process.jpg", tracks: ["Process", "RVRE", "Sombre", "404", "Error", "System", "Failure", "Reboot"] },
            { titre: "Supernova", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/404billy_supernova.jpg", tracks: ["Supernova", "Etoile", "Galaxie", "Univers", "Cosmos", "Infini", "Espace", "Temps"] }
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/keeqaid.webp",
        chiffres: "10k Abonnés",
        bio: "Le futur.",
        albums: [
            { titre: "Keeqaid", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Keeqaid", tracks: ["Intro", "Keeqaid", "Futur", "New Wave", "Style", "Flow", "Technique", "Outro"] }
        ]
    },
    {
        id: "diditrix",
        nom: "Didi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/didi_trix.webp",
        chiffres: "20k Abonnés",
        bio: "Le Trix.",
        albums: [
            { titre: "Trix City", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/didi_trix_trix_city.jpg", tracks: ["Trix City", "Intro", "La ville", "Le quartier", "La rue", "Le bloc", "Le hall", "Outro"] }
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jungle_jack.webp",
        chiffres: "5k Abonnés",
        bio: "La jungle urbaine.",
        albums: [
            { titre: "Jungle", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Jungle", tracks: ["Jungle", "Intro", "La forêt", "Les arbres", "Les animaux", "La nature", "La vie", "Outro"] }
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maureen.webp",
        chiffres: "15k Abonnés",
        bio: "La reine de la Trap.",
        albums: [
            { titre: "Reine", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Reine", tracks: ["Reine", "Intro", "Le trône", "La couronne", "Le royaume", "Le pouvoir", "La gloire", "Outro"] }
        ]
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/green_montana.webp",
        chiffres: "80k Abonnés",
        bio: "Froid et mélodique.",
        albums: [
            { titre: "Alaska", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_alaska.jpg", tracks: ["Alaska", "Intro", "Le froid", "La neige", "La glace", "L'hiver", "Le nord", "Outro"] },
            { titre: "Nostalgia+", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/green_montana_nostalgia.jpg", tracks: ["Nostalgia", "Souvenirs", "Mémoire", "Passé", "Présent", "Futur", "Temps", "Epoque"] }
        ]
    },
    {
        id: "larry",
        nom: "Larry",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/larry.webp",
        chiffres: "200k Abonnés",
        bio: "L'énergie de Strasbourg.",
        albums: [
            { titre: "Cité Blanche", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_cité_blanche.jpg", tracks: ["Cité Blanche", "Intro", "La cité", "Le quartier", "La ville", "La rue", "Le bloc", "Outro"] },
            { titre: "Petit Prince", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/larry_petit_prince.jpg", tracks: ["Petit Prince", "Roi", "Reine", "Couronne", "Trône", "Château", "Royaume", "Empire"] }
        ]
    },
    {
        id: "kpri",
        nom: "Kpri",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kpri.webp",
        chiffres: "30k Abonnés",
        bio: "Le K.",
        albums: [
            { titre: "Kpri", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Kpri", tracks: ["Kpri", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "3010",
        nom: "3010",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/3010.webp",
        chiffres: "20k Abonnés",
        bio: "Le futuriste.",
        albums: [
            { titre: "Nemo", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/3010_nemo.jpg", tracks: ["Nemo", "Intro", "Le capitaine", "Le sous-marin", "L'océan", "La mer", "Le voyage", "Outro"] }
        ]
    },
    {
        id: "1d1r",
        nom: "1D1R",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1d1r.webp",
        chiffres: "10k Abonnés",
        bio: "La Drill sombre.",
        albums: [
            { titre: "1D1R", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=1D1R", tracks: ["1D1R", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "63og",
        nom: "63OG",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/63og.webp",
        chiffres: "5k Abonnés",
        bio: "Le 63.",
        albums: [
            { titre: "63OG", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=63OG", tracks: ["63OG", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/8ruki.webp",
        chiffres: "30k Abonnés",
        bio: "Le boss de la Plug.",
        albums: [
            { titre: "8ruki", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=8ruki", tracks: ["8ruki", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "aboudebeing",
        nom: "Abou Debeing",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/abou_debeing.webp",
        chiffres: "100k Abonnés",
        bio: "Le hitmaker.",
        albums: [
            { titre: "Debeing", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/abou_debeing_debeing.jpg", tracks: ["Debeing", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "akhenaton",
        nom: "Akhenaton",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/akhenaton.webp",
        chiffres: "200k Abonnés",
        bio: "Le pharaon.",
        albums: [
            { titre: "Métèque et Mat", annee: "1995", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_métèque_et_mat.jpg", tracks: ["Métèque et Mat", "Bad Boys de Marseille", "La Face B", "Je ne suis pas à plaindre", "Au fin fond d'une contrée", "Eclater un type des Assedic"] },
            { titre: "Sol Invictus", annee: "2001", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_sol_invictus.jpg", tracks: ["Sol Invictus", "AKH", "Entrer dans la légende", "Nid de guêpes", "Une journée chez le diable", "Mes soleils et mes lunes"] }
        ]
    },
    {
        id: "tks2g",
        nom: "TKS 2G",
        chiffres: "10k Abonnés",
        bio: "La mélodie du futur.",
        albums: [
            { titre: "TKS 2G", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=TKS", tracks: ["Intro", "Mélodie", "Futur", "TKS", "2G", "Outro"] }
        ]
    },
    {
        id: "winnterzuko",
        nom: "Winnterzuko",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/winnterzuko.webp",
        chiffres: "65k Abonnés",
        bio: "Hyperpop et sentiments.",
        albums: [
            { titre: "WINNTERMANIA", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/winnterzuko_winntermania.jpg", tracks: ["Winntermania", "Monde", "Faux", "Vrai", "Hyper", "Pop", "Sentiments"] },
            { titre: "VON", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/winnterzuko_von.jpg", tracks: ["Von", "Berlin", "Paris", "Londres", "New York", "Tokyo"] }
        ]
    },
    {
        id: "1plike140",
        nom: "1PLIKÉ140",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1pliké140.webp",
        chiffres: "100k Abonnés",
        bio: "La Drill du 140.",
        albums: [
            { titre: "1PLIKTOI (Vol. 1 & 2)", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_1pliktoi_(vol._1_&_2).jpg", tracks: ["1PLIKTOI", "Lossa", "Dolce Vita", "Dans le bat", "Maïssa", "Ong Bak", "Tranquille", "Cruella"] }
        ]
    },
    {
        id: "alkpote",
        nom: "Alkpote",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/alkpote.webp",
        chiffres: "200k Abonnés",
        bio: "L'Empereur. Sale et drôle.",
        albums: [
            { titre: "L'Empereur", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alkpote_lempereur.jpg", tracks: ["L'Empereur", "Trap", "Sale", "Pute", "Suce", "Salope", "Bâtard", "Enculé"] }
        ]
    },
    {
        id: "as22",
        nom: "Ashe 22",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ashe_22.webp",
        chiffres: "50k Abonnés",
        bio: "Lyon Drill.",
        albums: [
            { titre: "Ashe Tape, Vol. 3", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ashe_22_ashe_tape,_vol._3.jpg", tracks: ["Intro", "Scellé Part.3", "X3", "Croos", "Turquoise", "Sunset", "Bussdown", "Outro"] }
        ]
    },
    {
        id: "bramsito",
        nom: "Bramsito",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/bramsito.webp",
        chiffres: "100k Abonnés",
        bio: "La mélodie du 7.",
        albums: [
            { titre: "Prémices", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/bramsito_prémices.jpg", tracks: ["Prémices", "Sale", "Mains liées", "Rappelle", "Alléluia", "Best Friend", "Paulette", "Problèmes"] }
        ]
    },
    {
        id: "bushi",
        nom: "Bushi",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/bushi.webp",
        chiffres: "40k Abonnés",
        bio: "Saturne.",
        albums: [
            { titre: "Bushi Tape 2", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Bushi", tracks: ["Intro", "Mistral", "Qatari", "Link Up", "Phenomenal", "Booska Bushi", "Outro"] }
        ]
    },
    {
        id: "captaineroshi",
        nom: "Captaine Roshi",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/captaine_roshi.webp",
        chiffres: "50k Abonnés",
        bio: "Attaque II.",
        albums: [
            { titre: "Attaque II", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/captaine_roshi_attaque_ii.jpg", tracks: ["Attaque II", "Molotov", "Pigalle", "Champions", "Déjà fait", "Nouveau", "9 Heures", "Kirikou"] }
        ]
    },
    {
        id: "cavalier",
        nom: "Cavalier",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/cavalier.webp",
        chiffres: "5k Abonnés",
        bio: "Le chevalier noir.",
        albums: [
            { titre: "Cavalier", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Cavalier", tracks: ["Intro", "Chevalier", "Noir", "Epée", "Bouclier", "Armure", "Cheval", "Outro"] }
        ]
    },
    {
        id: "coelho",
        nom: "Coelho",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/coelho.webp",
        chiffres: "10k Abonnés",
        bio: "La plume de Nantes.",
        albums: [
            { titre: "Le soleil ne s'éteint jamais", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/coelho_le_soleil_ne_séteint_jamais.jpg", tracks: ["Intro", "Soleil", "Lumière", "Rayon", "Chaleur", "Brûlure", "Cendre", "Outro"] }
        ]
    },
    {
        id: "dajak",
        nom: "Dajak",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dajak.webp",
        chiffres: "10k Abonnés",
        bio: "Spleen et mélodies.",
        albums: [
            { titre: "Les vies qu'on mène", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dajak", tracks: ["Intro", "Vies", "Mène", "Chemin", "Route", "Voyage", "Destination", "Outro"] }
        ]
    },
    {
        id: "dau",
        nom: "Dau",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dau.webp",
        chiffres: "20k Abonnés",
        bio: "L'énergie.",
        albums: [
            { titre: "Dennis", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dennis", tracks: ["Intro", "Dennis", "Menace", "Danger", "Risque", "Péril", "Sauvage", "Outro"] }
        ]
    },
    {
        id: "disiz",
        nom: "Disiz",
        statut: "legende",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/disiz.webp",
        chiffres: "300k Abonnés",
        bio: "L'amour.",
        albums: [
            { titre: "L'Amour", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/disiz_lamour.jpg", tracks: ["Sublime", "L'Amour", "Beau", "Rencontre", "Poids", "All In", "Klimt", "Dispo"] }
        ]
    },
    {
        id: "djadja_dinaz",
        nom: "Djadja & Dinaz",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/djadja_&_dinaz.webp",
        chiffres: "1M Abonnés",
        bio: "Le duo de Meaux.",
        albums: [
            { titre: "Spleen", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/djadja_&_dinaz_spleen.jpg", tracks: ["Spleen", "Ma zone", "Dans le réseau", "Plein les poches", "Ancolie", "Demain", "Loyal", "BB"] }
        ]
    },
    {
        id: "dosseh",
        nom: "Dosseh",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dosseh.webp",
        chiffres: "300k Abonnés",
        bio: "Yuri.",
        albums: [
            { titre: "Trop tôt pour mourir", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dosseh_trop_tôt_pour_mourir.jpg", tracks: ["Intro", "Trop tôt", "Mourir", "Vivre", "Survivre", "Renaître", "Espérer", "Outro"] }
        ]
    },
    {
        id: "doums",
        nom: "Doums",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/doums.webp",
        chiffres: "100k Abonnés",
        bio: "L'Entourage.",
        albums: [
            { titre: "Pull à capuche et billets mauves", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/doums_pull_à_capuche_et_billets_mauves.jpg", tracks: ["Intro", "Pull", "Capuche", "Billets", "Mauves", "Argent", "Cash", "Outro"] }
        ]
    },
    {
        id: "edge",
        nom: "Edge",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/edge.webp",
        chiffres: "20k Abonnés",
        bio: "Offshore.",
        albums: [
            { titre: "Offshore", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/edge_offshore.jpg", tracks: ["Intro", "Offshore", "Mer", "Vague", "Plage", "Sable", "Soleil", "Outro"] }
        ]
    },
    {
        id: "elgrandetoto",
        nom: "ElGrandeToto",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/elgrandetoto.webp",
        chiffres: "2M Abonnés",
        bio: "Le roi du Maroc.",
        albums: [
            { titre: "Caméléon", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/elgrandetoto_caméléon.jpg", tracks: ["Intro", "Caméléon", "Couleurs", "Change", "Adapt", "Survie", "Nature", "Outro"] }
        ]
    },
    {
        id: "fianso",
        nom: "Fianso",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/fianso.webp",
        chiffres: "1M Abonnés",
        bio: "Sofiane. Le rassembleur.",
        albums: [
            { titre: "Bandit Saleté", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/fianso_bandit_saleté.jpg", tracks: ["Bandit", "Saleté", "Toka", "Mon p'tit loup", "Pégase", "Le cercle", "Bois d'argent", "Parti de rien"] }
        ]
    },
    {
        id: "fresh",
        nom: "Fresh",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/fresh.webp",
        chiffres: "100k Abonnés",
        bio: "Nouvelle École.",
        albums: [
            { titre: "À l'abri", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/fresh_à_labri.jpg", tracks: ["Intro", "À l'abri", "Chop", "Drama", "Allez dehors", "Célèbre", "Mauvais payeur", "Outro"] }
        ]
    },
    {
        id: "gradur",
        nom: "Gradur",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/gradur.webp",
        chiffres: "1M Abonnés",
        bio: "L'homme au bob.",
        albums: [
            { titre: "L'homme au bob", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gradur_lhomme_au_bob.jpg", tracks: ["Terrasser", "Jamais", "Military", "La douille", "Priez pour moi", "Stringer Bell", "Verre de sky", "Secteur"] }
        ]
    },
    {
        id: "guy2bezbar",
        nom: "Guy2Bezbar",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/guy2bezbar.webp",
        chiffres: "300k Abonnés",
        bio: "Coco Jojo.",
        albums: [
            { titre: "Coco Jojo", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/guy2bezbar_coco_jojo.jpg", tracks: ["Intro", "Coco Jojo", "Boy", "Fendi Love", "Full Black", "Beretta", "Ticket", "Outro"] }
        ]
    },
    {
        id: "heusslenfoire",
        nom: "Heuss L'enfoiré",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/heuss_lenfoiré.webp",
        chiffres: "1M Abonnés",
        bio: "La Moula.",
        albums: [
            { titre: "En esprit", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/heuss_lenfoiré_en_esprit.jpg", tracks: ["Khapta", "Les méchants", "L'enfoiré", "Aristocrate", "George Moula", "Hakan Sukur", "Moula", "En esprit"] }
        ]
    },
    {
        id: "jokair",
        nom: "Jok'Air",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jokair.webp",
        chiffres: "300k Abonnés",
        bio: "Big Daddy Jok.",
        albums: [
            { titre: "Jok'Travolta", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jokair_joktravolta.jpg", tracks: ["Intro", "Jok'Travolta", "Club 27", "Las Vegas", "Comme tu es", "Bonbon à la menthe", "Scarla", "Outro"] }
        ]
    },
    {
        id: "kalash",
        nom: "Kalash",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kalash.webp",
        chiffres: "1M Abonnés",
        bio: "Mwaka Moon.",
        albums: [
            { titre: "Mwaka Moon", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kalash_mwaka_moon.jpg", tracks: ["Mwaka Moon", "Koussi Koussa", "God Knows", "I Wanna Be Loved", "Mode Avion", "Yen a vla", "Ivory", "Moments gâchés"] }
        ]
    },
    {
        id: "kalashcriminel",
        nom: "Kalash Criminel",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kalash_criminel.webp",
        chiffres: "500k Abonnés",
        bio: "Le cagoulé le plus connu.",
        albums: [
            { titre: "La fosse aux lions", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kalash_criminel_la_fosse_aux_lions.jpg", tracks: ["La fosse aux lions", "Tête brûlée", "Cougar Gang", "Encore", "Dans la fosse", "Sombre", "Ahou", "Avant que j'parte"] }
        ]
    },
    {
        id: "lacrim",
        nom: "Lacrim",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lacrim.webp",
        chiffres: "1.5M Abonnés",
        bio: "El Tigre.",
        albums: [
            { titre: "Corleone", annee: "2014", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lacrim_corleone.jpg", tracks: ["Corleone", "Mon glock te mettra à genoux", "Oz", "Tout le monde veut des lovés", "Prêt", "On fait pas ça", "Barbade", "A.W.A"] }
        ]
    },
    {
        id: "lefa",
        nom: "Lefa",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lefa.webp",
        chiffres: "300k Abonnés",
        bio: "Monsieur Fall.",
        albums: [
            { titre: "Monsieur Fall", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lefa_monsieur_fall.jpg", tracks: ["Monsieur Fall", "20 ans", "En terrasse", "Quelques minutes", "Rappelle-la", "Masterchef", "Tournée", "Grandest"] }
        ]
    },
    {
        id: "lomepal",
        nom: "Lomepal",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lomepal.webp",
        chiffres: "1M Abonnés",
        bio: "Jeannine.",
        albums: [
            { titre: "Jeannine", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lomepal_jeannine.jpg", tracks: ["Ne me ramène pas", "Mômes", "X-men", "Plus de larmes", "1000°C", "Le vrai moi", "Skate", "Trop beau"] }
        ]
    },
    {
        id: "lorenzo",
        nom: "Lorenzo",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lorenzo.webp",
        chiffres: "1M Abonnés",
        bio: "L'Empereur du sale.",
        albums: [
            { titre: "Rien à branler", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lorenzo_rien_à_branler.jpg", tracks: ["Rien à branler", "Fume à fond", "Carton rouge", "Tu le sais", "Bizarre", "Champagne & Pétou", "Le son qui fait plaiz", "Ce genre"] }
        ]
    },
    {
        id: "maes",
        nom: "Maes",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maes.webp",
        chiffres: "1.5M Abonnés",
        bio: "Les derniers salopards.",
        albums: [
            { titre: "Les derniers salopards", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maes_les_derniers_salopards.jpg", tracks: ["Dragovic", "Billets verts", "Distant", "Blanche", "Les derniers salopards", "Mémoire", "Dybala", "Marco Polo"] }
        ]
    },
    {
        id: "mhd",
        nom: "MHD",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mhd.webp",
        chiffres: "1M Abonnés",
        bio: "Afro Trap.",
        albums: [
            { titre: "MHD", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mhd_mhd.jpg", tracks: ["La Moula", "Roger Milla", "Maman j'ai mal", "A Kele Nta", "Afro Trap Part. 3 (Champions League)", "Afro Trap Part. 7 (La Puissance)", "Ngatie Abedi", "Tout seul"] }
        ]
    },
    {
        id: "misterv",
        nom: "Mister V",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mister_v.webp",
        chiffres: "5M Abonnés",
        bio: "Double V.",
        albums: [
            { titre: "Double V", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mister_v_double_v.jpg", tracks: ["Top Album", "Venice", "Petit déjeuner", "Deutsche Qualité", "Demain", "Nightcall", "Apollo13", "Gville"] }
        ]
    },
    {
        id: "niro",
        nom: "Niro",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/niro.webp",
        chiffres: "500k Abonnés",
        bio: "Paraplégique.",
        albums: [
            { titre: "Paraplégique", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niro_paraplégique.jpg", tracks: ["Intro", "Paraplégique", "Dans ton kwaah", "Père fourra", "J'suis dans le truc", "On s'en remettra", "Ghetto Star", "Outro"] }
        ]
    },
    {
        id: "sch",
        nom: "SCH",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/sch.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.5M Abonnés",
        bio: "Le S. Götze. Mathafack.",
        albums: [
            { titre: "JVLIVS II", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs_ii.jpg", tracks: ["Marché Noir", "Mannschaft", "Mode Akimbo", "Crack", "Loup Noir"] },
            { titre: "JVLIVS", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs.jpg", tracks: ["Intro", "VNTM", "Pharmacie", "Otto", "Skydweller", "Facile", "Prêt à partir", "Mort de rire"] },
            { titre: "A7", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_a7.jpg", tracks: ["A7", "Gomorra", "Liquide", "Champs-Élysées", "J'reviens de loin", "Fusil"] }
        ]
    },
    {
        id: "damso",
        nom: "Damso",
        statut: "tendance",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/damso.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3M Abonnés",
        bio: "Dems. Vie.",
        albums: [
            { titre: "Ipséité", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_ipséité.jpg", tracks: ["Nwaar Is The New Black", "Macarena", "Mosaïque Solitaire", "Signaler", "Kietu", "Gova", "J Respect R"] },
            { titre: "Lithopédion", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_lithopédion.jpg", tracks: ["Introduction", "Festival de rêves", "Baltringue", "Julien", "Silence", "Feu de bois", "Même issue", "Smog"] },
            { titre: "QALF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_qalf.jpg", tracks: ["MEVTR", "LIFE LIFE", "DEUX TOILES DE MER", "COEUR EN MIETTES", "POUR L'ARGENT", "BXL ZOO", "911", "SENTIMENTAL"] }
        ]
    },
    {
        id: "orelsan",
        nom: "Orelsan",
        statut: "legende",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/orelsan.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.5M Abonnés",
        bio: "Le patron de la fête est fini.",
        albums: [
            { titre: "Civilisation", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_civilisation.jpg", tracks: ["La Quête", "Du propre", "Bébéboa", "Rêve mieux", "Seul avec du monde autour", "Manifeste", "L'odeur de l'essence", "Jour meilleur"] },
            { titre: "La fête est finie", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_la_fête_est_finie.jpg", tracks: ["San", "La fête est finie", "Basique", "Tout va bien", "Défaite de famille", "La pluie", "Paradis", "Notes pour trop tard"] },
            { titre: "Le chant des sirènes", annee: "2011", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_le_chant_des_sirènes.jpg", tracks: ["Raelsan", "Le chant des sirènes", "Plus rien ne m'étonne", "Mauvaise idée", "Double vie", "Finir mal", "Si seul", "Suicide social"] }
        ]
    },
    {
        id: "vald",
        nom: "Vald",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/vald.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.5M Abonnés",
        bio: "Le V.",
        albums: [
            { titre: "XEU", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_xeu.jpg", tracks: ["Primitif", "Seum", "Désaccordé", "Gris", "Réflexions basses", "Offshore", "Ne me déteste pas", "Deviens génial"] },
            { titre: "Ce monde est cruel", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_ce_monde_est_cruel.jpg", tracks: ["Pocahontas", "Ce monde est cruel", "Pensionman", "Ma star", "Ignorant", "Halloween", "Dernier retrait", "Rappel"] },
            { titre: "Agartha", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_agartha.jpg", tracks: ["Acacia", "Megadeth", "Si j'arrêtais", "Je t'aime", "Totem", "L.D.S", "Ma meilleure amie", "Vitrine"] }
        ]
    },
    {
        id: "dinos",
        nom: "Dinos",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dinos.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "800k Abonnés",
        bio: "L'Hiver à Paris.",
        albums: [
            { titre: "Stamina, Memento", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_stamina_memento.jpg", tracks: ["Diptyque", "Moins un", "Paranoïaque", "Maman m'aime", "Prends soin de toi", "Je Wanda", "Césaire", "93 mesures"] },
            { titre: "Imany", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_imany.jpg", tracks: ["Iceberg Slim", "Argentique", "Beuh et liqueurs", "Havana & Malibu", "Spleen", "Love", "Magnolia", "Les pleurs du mâle"] },
            { titre: "Hiver à Paris", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_hiver_à_paris.jpg", tracks: ["Rive Droite", "Porte de Paris", "Chrome Hearts", "Modus Vivendi", "Pichichi", "Ma Baby", "Quatre saisons", "L'univers ne nous voit pas danser"] }
        ]
    },
    {
        id: "josman",
        nom: "Josman",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/josman.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "1M Abonnés",
        bio: "J.O.S.",
        albums: [
            { titre: "M.A.N", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_man.jpg", tracks: ["Intro", "Pop", "L'occasion", "Fiesta", "Mort ce soir", "Brunes & Blondes", "Vaccin", "Ma Lady"] },
            { titre: "J.O.$", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_jos.jpg", tracks: ["Fais avec", "L'occasion", "Jeune N****", "Sourcils froncés", "Un zder, un thé", "V&V", "La cage", "XS"] },
            { titre: "Split", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_split.jpg", tracks: ["L'éloignement", "Argent, Drogue & Sexe", "Bambi", "Je sais", "A l'aube", "Mauvaise humeur", "J'allume", "Si tu savais"] }
        ]
    },
    {
        id: "nekfeu",
        nom: "Nekfeu",
        statut: "legende",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/nekfeu.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2M Abonnés",
        bio: "Le Fennec.",
        albums: [
            { titre: "Les Étoiles Vagabondes", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_les_étoiles_vagabondes.jpg", tracks: ["Les étoiles vagabondes", "Alunissons", "Cheum", "Takotsubo", "Menteur menteur", "Ciel noir", "De mes cendres", "Elle pleut"] },
            { titre: "Cyborg", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_cyborg.jpg", tracks: ["Humanoïde", "Mauvaise graine", "Squa", "Réalité augmentée", "Avant tu riais", "Esquimaux", "O.D", "Saturne"] },
            { titre: "Feu", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_feu.jpg", tracks: ["Martin Eden", "Mon âme", "Le horla", "Nique les clones", "Rêve d'avoir des rêves", "Tempête", "Egérie", "On verra"] }
        ]
    },
    {
        id: "freezecorleone",
        nom: "Freeze Corleone",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/freeze_corleone.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "1M Abonnés",
        bio: "Chen Zen. 667.",
        albums: [
            { titre: "LMF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_lmf.jpg", tracks: ["Freeze Raël", "Hors Ligne", "Scellé Part. 2", "Tarkov", "Rap catéchisme", "Stretch 4", "Pas de refrain", "Chen Zen"] },
            { titre: "L'Attaque des Clones", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_lattaque_des_clones.jpg", tracks: ["Mwaka Moon", "Koussi Koussa", "God Knows", "I Wanna Be Loved", "Mode Avion", "Yen a vla", "Ivory", "Moments gâchés"] },
            { titre: "Projet Blue Beam", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_projet_blue_beam.jpg", tracks: ["Intro", "Jeremy Lin", "3 planètes", "Lester", "Fentanyl", "S/O Congo Part. 2", "Bâton rouge", "Sacrifice de masse"] }
        ]
    },
    {
        id: "ziak",
        nom: "Ziak",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ziak.webp",
        certifications: { or: true, platine: true, diamant: false },
        chiffres: "600k Abonnés",
        bio: "Akimbo.",
        albums: [
            { titre: "Akimbo", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_akimbo.jpg", tracks: ["Parasite", "La kiffance", "Akimbo", "Galerie", "Espace", "Vrai", "Rhum & Machette", "Prière"] },
            { titre: "Chrome", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_chrome.jpg", tracks: ["Démon", "Chrome", "Talon d'Achille", "Seul", "Même", "Pour une fois", "Rien", "Pistolero"] }
        ]
    },
    {
        id: "niska",
        nom: "Niska",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/niska.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3M Abonnés",
        bio: "Charo. Méchant.",
        albums: [
            { titre: "Commando", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_commando.jpg", tracks: ["Story X", "Réseaux", "La Wewer", "Ah bon ?", "Medellin", "Salé", "Tuba Life", "Amour X"] },
            { titre: "Mr Sal", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_mr_sal.jpg", tracks: ["Vrai", "Siliconé", "La zone est minée", "Bâtiment", "Mendoza", "Du lundi au lundi", "Tous les couler", "Mr Sal"] },
            { titre: "Le monde est méchant", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_le_monde_est_méchant.jpg", tracks: ["Blue Magic", "44", "Jota", "Paramètre", "Journée", "140G", "T-Rain", "De bon matin"] }
        ]
    }
];
