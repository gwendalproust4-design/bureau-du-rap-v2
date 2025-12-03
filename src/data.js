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
        bio: "Le Duc de Boulogne. Figure incontournable du rap français depuis plus de 20 ans.",
        bioLongue: "Élie Yaffa, dit Booba, est sans doute le rappeur le plus influent de l'histoire du rap français. Membre fondateur de Lunatic avec Ali, il se lance en solo avec 'Temps Mort', un classique absolu. Fondateur du 92i, il a su traverser les époques, adapter son style de la rue au vocoder, et lancer de nombreuses carrières. Business man aguerri, il est aussi connu pour ses clashs et sa longévité exceptionnelle au sommet des charts.",
        albums: [
            {
                titre: "Nwar Mentality", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27399b5628acef9424170697e56",
                category: "single", tracks: ["Nwar Mentality (feat. Roni0block)"]
            },
            {
                titre: "Ororo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732d506639fd5ac57fe235acd8",
                category: "single", tracks: ["Ororo (feat. Aïshé)"]
            },
            {
                titre: "Nougat (Grace Kim Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ceefc152f9d35d6d42c44158",
                category: "project", tracks: ["Nougat - Grace Kim Remix (feat. SubLife, Grace Kim)", "Nougat - Grace Kim Remix Extended (feat. SubLife, Grace Kim)"]
            },
            {
                titre: "Mona Lisa (Ibara Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e7e9d94c74ec60d1e2aeeee8",
                category: "single", tracks: ["Mona Lisa - Ibara Remix (feat. SubLife, Ibara)"]
            },
            {
                titre: "DD", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733ee12087d0139ac26e7cfdfb",
                category: "single", tracks: ["DD (feat. Benash)"]
            },
            {
                titre: "Magic", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e55cba839094d475e99fbd26",
                category: "single", tracks: ["Magic"]
            },
            {
                titre: "Autoroute du Soleil", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27338ec5182e08b1ac785f58e1e",
                category: "single", tracks: ["Autoroute du Soleil (feat. Keman)"]
            },
            {
                titre: "5G Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c6e0407d33ba4aab4a3cf714",
                category: "single", tracks: ["5G Remix (feat. SubLife, Ghenda)"]
            },
            {
                titre: "Kalash Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27330ac6eb48d7e38f35f684f86",
                category: "single", tracks: ["Kalash Remix (feat. SubLife, Koston)"]
            },
            {
                titre: "Ici C'est Paris", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273435f9d2d5ef2f725e7778eec",
                category: "single", tracks: ["Ici C'est Paris (feat. Blessd)"]
            },
            {
                titre: "Bonne Mentale", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730f9e4883daf238e5b5844afa",
                category: "single", tracks: ["Bonne Mentale (feat. Chaax, Keman)"]
            },
            {
                titre: "Repose en paix Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27307da8b93a1e73697f62c4b1a",
                category: "single", tracks: ["Repose en paix Remix (feat. SubLife, Ateph Elidja, Hippie Noir)"]
            },
            {
                titre: "Nautilus Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e308af28cb2971b7fd69f39d",
                category: "single", tracks: ["Nautilus Remix (feat. SubLife, Ghenda, Rama, AKIRA BPM)"]
            },
            {
                titre: "Mové Lang Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bc75dba4f3dea0fe165dbd40",
                category: "single", tracks: ["Mové Lang Remix (feat. Gato, Bridjahting, SubLife, AKIRA BPM, Milan Tavares)"]
            },
            {
                titre: "Friday Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732c2f023aeb136df6e0995c4a",
                category: "single", tracks: ["Friday Remix (feat. SubLife, Ibara)"]
            },
            {
                titre: "92i veyron Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273375be9526e05c4866b4f17af",
                category: "single", tracks: ["92i veyron Remix (feat. SubLife, STER)"]
            },
            {
                titre: "Freestyle CKO (Milan Tavares & Akira BPM & Sublife Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bed1a68f1db850ca7defc592",
                category: "single", tracks: ["Freestyle CKO (Milan Tavares & Akira BPM & Sublife Remix) (feat. SubLife, Milan Tavares, AKIRA BPM)"]
            },
            {
                titre: "Boulbi (Jaykill & Sublife Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ff502b6cc1c831ee2f97979c",
                category: "project", tracks: ["Boulbi (Jaykill & SubLife Remix) (feat. SubLife, Jaykill)", "Boulbi (Jaykill & SubLife Remix) - Radio Edit (feat. SubLife, Jaykill)"]
            },
            {
                titre: "Arc En Ciel (Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273157d395a69b2dd6225ff58aa",
                category: "single", tracks: ["Arc En Ciel (Remix) (feat. SubLife, PAGEZ)"]
            },
            {
                titre: "Këur", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a9e4fd560b4a80ef09f60656",
                category: "single", tracks: ["Këur"]
            },
            {
                titre: "Muay Thaï", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739f89b352806f5c628f8d1f52",
                category: "single", tracks: ["Muay Thaï"]
            },
            {
                titre: "DKR (SubLife x Jaykill Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730ca86454f08482d4dac2fd28",
                category: "single", tracks: ["DKR (SubLife x Jaykill Remix) (feat. SubLife, Jaykill)"]
            },
            {
                titre: "Nautilus (feat Booba & Ghenda)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273167983ffabab80292f8f83d3",
                category: "single", tracks: ["Nautilus (feat Booba & Ghenda) (feat. SubLife, Ghenda)"]
            },
            {
                titre: "Tony Sosa (Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c80d5878f1e16c852cc47c2d",
                category: "single", tracks: ["Tony Sosa - Remix (feat. SubLife, Ghenda, Christopher Ghenda)"]
            },
            {
                titre: "Dolce Camara (Dee Mad x Akalex Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27391f49a07a5d4755156572643",
                category: "single", tracks: ["Dolce Camara - Dee Mad x Akalex Remix (feat. Dee Mad, Akalex)"]
            },
            {
                titre: "Saga (Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fd5b30505c56bdb34c80f1bd",
                category: "single", tracks: ["Saga - Remix (feat. SubLife, Ghenda)"]
            },
            {
                titre: "AD VITAM ÆTERNAM", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27324b6493c8778514c3e275560",
                category: "project", tracks: ["Rebel", "Saga", "Dolce Camara (feat. SDM)", "Sport Billy", "Signé", "6G", "GM (feat. Evil P, Gato)", "Abidal (feat. Sicario)", "Bénigni (feat. USKY)", "CVBSP"]
            },
            {
                titre: "GM", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27305d34da46b1ca25575bd456d",
                category: "single", tracks: ["GM (feat. Evil P, Gato)"]
            },
            {
                titre: "Bénigni", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737d9f24c7ccd68bcb80e8d620",
                category: "single", tracks: ["Bénigni (feat. USKY)"]
            },
            {
                titre: "Abidal", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f220e1500b93ab5c6384c92b",
                category: "single", tracks: ["Abidal (feat. Sicario)"]
            },
            {
                titre: "6G", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273956abe346ceee4468c35bf60",
                category: "single", tracks: ["6G"]
            },
            {
                titre: "Sport Billy", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d634fc3ab1045d1a1bd51087",
                category: "single", tracks: ["Sport Billy"]
            },
            {
                titre: "Cyanure", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ef17087314fc85c78f01aaff",
                category: "single", tracks: ["Cyanure (feat. Sicario)"]
            },
            {
                titre: "Danser", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27322e8888ecb7696a9ee587748",
                category: "single", tracks: ["Danser (feat. KRN)"]
            },
            {
                titre: "Signé", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273191507c1b523504184529a87",
                category: "single", tracks: ["Signé"]
            },
            {
                titre: "3.5.7", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273590f929592e8f376df546e9a",
                category: "single", tracks: ["3.5.7 (feat. USKY)"]
            },
            {
                titre: "Le Code", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273097d348e913ca94a9228309a",
                category: "single", tracks: ["Le Code (feat. Chaax)"]
            },
            {
                titre: "Panenka", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273db86ac74eb3f87f462e1ed2a",
                category: "single", tracks: ["Panenka (feat. Bilton)"]
            },
            {
                titre: "Zénith (feat. Booba)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27318d89ef90b8587364d69fee5",
                category: "feat", tracks: ["Zénith (feat. Booba)"]
            },
            {
                titre: "Iste", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27347316a5db43dee8fcaceefdf",
                category: "single", tracks: ["Iste"]
            },
            {
                titre: "Morocco", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27305b7b999c04471b9425d4654",
                category: "single", tracks: ["Morocco (feat. Gato)"]
            },
            {
                titre: "KOA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27345530477f42056975f055b56",
                category: "single", tracks: ["KOA"]
            },
            {
                titre: "Caméléon", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d2ee15c24f314709ca86a765",
                category: "single", tracks: ["Caméléon (feat. Timal)"]
            },
            {
                titre: "Téléphone", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dead048327b18d12064dc82c",
                category: "single", tracks: ["Téléphone (feat. Sfera Ebbasta)"]
            },
            {
                titre: "Pablo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273910f6dc37a23f5b33ae415e5",
                category: "single", tracks: ["Pablo (feat. Maes)"]
            },
            {
                titre: "Baby", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e4dabe58578142a280799d22",
                category: "single", tracks: ["Baby (feat. Dala)"]
            },
            {
                titre: "Trophée", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b3d128d942cb17b3b2de8399",
                category: "single", tracks: ["Trophée (feat. UZI)"]
            },
            {
                titre: "Fin", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27315ce5d647e48d77187a45643",
                category: "single", tracks: ["Fin (feat. Dala)"]
            },
            {
                titre: "Yamanaka", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d79874381aea8da797cbe0a8",
                category: "single", tracks: ["Yamanaka (feat. Sicario)"]
            },
            {
                titre: "PRT", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273350fe54f19522183a781ee8a",
                category: "single", tracks: ["PRT (feat. Dala, JSX)"]
            },
            {
                titre: "92i", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27377e20d311b4ce90ed8f0e809",
                category: "single", tracks: ["92i (feat. SDM, Green Montana, Bilton, Sicario)"]
            },
            {
                titre: "Platine o Plomo", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b86266d6d00b4213cbf39d3f",
                category: "single", tracks: ["Platine o Plomo (feat. Maes)"]
            },
            {
                titre: "Leo Messi", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d36a96fc094b5c0c89367ca0",
                category: "single", tracks: ["Leo Messi"]
            },
            {
                titre: "Geronimo", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273723608584d1d3a655b286a28",
                category: "single", tracks: ["Geronimo"]
            },
            {
                titre: "VARIANT", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733d5e58cfe099be0f5278e5de",
                category: "single", tracks: ["VARIANT"]
            },
            {
                titre: "Dragon", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bbf64ec3e80c66e2ef9247d4",
                category: "single", tracks: ["Dragon"]
            },
            {
                titre: "GTA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27339f9fc7d75cf1225f6471a40",
                category: "single", tracks: ["GTA (feat. JSX)"]
            },
            {
                titre: "Kayna (Remix)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27375ee09bfc6941a7fb3aa4c32",
                category: "single", tracks: ["Kayna - Remix (feat. Kayna Samet)"]
            },
            {
                titre: "32", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b4212a8910d2faef29a32e0b",
                category: "single", tracks: ["32 (feat. Dala)"]
            },
            {
                titre: "Plaza Athénée", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b83b5650c1837b1812a71c18",
                category: "single", tracks: ["Plaza Athénée"]
            },
            {
                titre: "ULTRA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b7c26131d453d1d9afb81aa0",
                category: "project", tracks: ["GP", "Azerty", "RST", "Bonne journée (feat. SDM)", "Mona Lisa (feat. JSX)", "Je sais", "5G", "Vue sur la mer (feat. Dala)", "L'olivier", "VVV (feat. Maes)", "31 (feat. Gato)", "Ultra", "Grain de sable (feat. Elia)", "Dernière fois (feat. Bramsito)"]
            },
            {
                titre: "Grain de sable", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734714712f87b1544888a73e0c",
                category: "single", tracks: ["Grain de sable (feat. Elia)"]
            },
            {
                titre: "RATPI WORLD", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27378ceec4a5df1a69cf1248504",
                category: "single", tracks: ["RATPI WORLD"]
            },
            {
                titre: "Piccolo", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273273853e481d1dad36335fecc",
                category: "single", tracks: ["Piccolo (feat. Gato, Bramsito)"]
            },
            {
                titre: "Chicha menthe", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730ae419a8f2c2e7bed2991a1d",
                category: "single", tracks: ["Chicha menthe (feat. Bilton)"]
            },
            {
                titre: "AZERTY", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735a327a10ef45fff4f349cbf5",
                category: "single", tracks: ["Azerty"]
            },
            {
                titre: "POMPEII", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273158bf3381a40ac562aee75be",
                category: "single", tracks: ["POMPEII (feat. JSX)"]
            },
            {
                titre: "5G", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732f327b48626dabc1558dd1b2",
                category: "single", tracks: ["5G"]
            },
            {
                titre: "TOUT GACHER", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735833f9b12f8efaf0528ef024",
                category: "single", tracks: ["TOUT GACHER (feat. Green Montana)"]
            },
            {
                titre: "Dolce Vita", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cc9b7ca05e44da204bdbc3db",
                category: "single", tracks: ["Dolce Vita"]
            },
            {
                titre: "JAUNÉ", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27302f65111a4102b35933aa958",
                category: "single", tracks: ["JAUNÉ (feat. Zed)"]
            },
            {
                titre: "CAVALIERO", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273dd439574e58443629786d1e7",
                category: "single", tracks: ["CAVALIERO"]
            },
            {
                titre: "La zone", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739109f04272adf02e43440458",
                category: "feat", tracks: ["La zone feat. Booba (feat. SDM)"]
            },
            {
                titre: "Haï", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273051558b4c513e9b2ed40877a",
                category: "single", tracks: ["Haï (feat Booba) (feat. Gato)"]
            },
            {
                titre: "GLAIVE", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2734c1e9dded3bb5ed8c0992a19",
                category: "single", tracks: ["GLAIVE"]
            },
            {
                titre: "Arc-en-ciel", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27397e52067a4b20d67fa501941",
                category: "single", tracks: ["Arc-en-ciel"]
            },
            {
                titre: "PGP", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2731698e4810310c33fb0f20b33",
                category: "single", tracks: ["PGP"]
            },
            {
                titre: "BB", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273f680a7eecc5eddd7c3be2dd8",
                category: "single", tracks: ["BB"]
            },
            {
                titre: "Gotham", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273fa76b6105312da78a08f66e0",
                category: "single", tracks: ["Gotham"]
            },
            {
                titre: "Trône", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737b56fb8f7a5b37d234d53238",
                category: "project", tracks: ["Centurion", "Friday", "Drapeau noir", "Trône", "Bouyon (feat. Gato)", "Magnifique", "Ça va aller (feat. Niska, Sidiki Diabaté)", "Nougat", "Terrain", "À la folie", "113 (feat. Damso)", "Ridin'", "Petite fille", "DKR - Bonus Track", "E.L.E.P.H.A.N.T - Bonus Track"]
            },
            {
                titre: "Autopsie 0", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737b241e06d7cd749de581a806",
                category: "project", tracks: ["Garcimore", "Le D.U.C", "Tout et tout d'suite", "A3", "Double poney", "La vie en rouge", "Rats des villes", "Foetus", "A4", "Bakel City Gang", "Vaisseau mère", "Scarface", "Pigeons", "Gangster", "Paname", "Felix Eboué", "JDC", "Salside"]
            },
            {
                titre: "Daniel Sam", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273369322dc549a9ad3f9ff86cb",
                category: "single", tracks: ["Daniel Sam"]
            },
            {
                titre: "E.L.E.P.H.A.N.T", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273e0aa5d1fb67b2aa35286ac30",
                category: "single", tracks: ["E.L.E.P.H.A.N.T"]
            },
            {
                titre: "Salside", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b0dfed1cdad15bb8825e31f3",
                category: "single", tracks: ["Salside"]
            },
            {
                titre: "Here (feat. Booba)", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27361a3c01be1a4a4496908d832",
                category: "feat", tracks: ["Here (feat. Booba)"]
            },
            {
                titre: "JDC", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27333db13ec3c6443331f4d5142",
                category: "single", tracks: ["JDC"]
            },
            {
                titre: "Nero nemesis", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273cb1cb32c8f240b91f40b110a",
                category: "project", tracks: ["Walabok", "Talion", "Zer (feat. Siboy, Benash)", "92i veyron", "Validée (feat. Benash)", "Attila", "Charbon", "U2K (feat. twinsmatic)", "Génération assassin", "Pinocchio (feat. Damso, Gato)", "Comme les autres", "Habibi", "4G"]
            },
            {
                titre: "Génération assassin", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2730accc0b72e5aed32461a57cb",
                category: "single", tracks: ["Génération assassin"]
            },
            {
                titre: "Attila", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273ae1adc3ca58ea77e8a0131df",
                category: "single", tracks: ["Attila"]
            },
            {
                titre: "Validée", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273dc1b9fcdbf2617c7b19b6a06",
                category: "single", tracks: ["Validée (feat. Benash)"]
            },
            {
                titre: "D.U.C.", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2738efd123fd4f543f3def3a286",
                category: "project", tracks: ["D.U.C", "Tony Sosa", "Bellucci (feat. Future)", "Loin d’ici", "Caracas", "Mon pays", "All Set (feat. Jeremih)", "Les meilleurs (feat. 40000 Gang)", "Mové lang (feat. Bridjahting, Gato)", "LVMH", "G-Love (feat. Farruko)", "Billets violets", "Ratpis (feat. Mavado)", "Jack Da", "Mr.Kopp", "Temps mort 2.0 (feat. Lino)", "3 G", "La mort leur va si bien", "OKLM"]
            },
            {
                titre: "LVMH", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273406ae9704f96d029e3b8841c",
                category: "single", tracks: ["LVMH"]
            },
            {
                titre: "Caracas", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2735a145858fe7027c873e77a94",
                category: "single", tracks: ["Caracas"]
            },
            {
                titre: "3 G", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273ef1a37fc5787286a1ca8bf50",
                category: "single", tracks: ["3 G"]
            },
            {
                titre: "OKLM", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273f3940e668d15079eff466919",
                category: "single", tracks: ["OKLM"]
            },
            {
                titre: "La Mort Leur Va Si Bien", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2732b969cd9adfb8cedcfb932de",
                category: "single", tracks: ["La Mort Leur Va Si Bien"]
            },
            {
                titre: "Futur 2.0 (Deluxe)", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273045fd867a5b3288e2cedac3c",
                category: "project", tracks: ["G5 - Intro", "Maki Sall Music", "Wesh Morray", "Tombé pour elle", "C'est la vie (feat. 2 Chainz)", "Pirates", "Caramel", "Kalash (feat. Kaaris)", "1.8.7 (feat. Rick Ross)", "O.G (feat. Mala)", "Jimmy", "Maître Yoda", "Rolex (feat. Gato)", "Tout c'que j'ai", "2PAC", "Futur", "2.0", "A.C. Milan", "Turfu", "Une vie", "Parlons peu", "RTC", "Longueur d'avance (feat. GIMS)", "T.L.T", "Billets verts"]
            },
            {
                titre: "Turfu", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2731ac2d666b5d9a835163dc79f",
                category: "single", tracks: ["Turfu"]
            },
            {
                titre: "T.L.T", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273d543db70b06580d19b45e21c",
                category: "single", tracks: ["T.L.T"]
            },
            {
                titre: "RTC", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273c4cf16c3e271284b7cbd6e4d",
                category: "single", tracks: ["RTC"]
            },
            {
                titre: "Parlons Peu", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273014f242af5442ccef7177c5f",
                category: "single", tracks: ["Parlons peu"]
            },
            {
                titre: "A.C. Milan", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2735159ecd4036f116d46ada99c",
                category: "single", tracks: ["A.C. Milan"]
            },
            {
                titre: "Futur", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b2736069fa7ed17b82e3f1c881b8",
                category: "project", tracks: ["G5 - Intro", "Maki Sall Music", "Wesh Morray", "Tombé pour elle", "C'est la vie (feat. 2 Chainz)", "Pirates", "Caramel", "Kalash (feat. Kaaris)", "1.8.7 (feat. Rick Ross)", "O.G (feat. Mala)", "Jimmy", "Maître Yoda", "Rolex (feat. Gato)", "Tout c'que j'ai", "2PAC", "Futur"]
            },
            {
                titre: "Caramel", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273fc6da4073306e7aaffd56145",
                category: "single", tracks: ["Caramel"]
            },
            {
                titre: "Lunatic", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b2738c7fe019230cc8464d39d81e",
                category: "project", tracks: ["Les derniers seront les premiers", "Caesar Palace (feat. Diddy)", "Jimmy deux fois", "Ma couleur", "Abracadabra", "Boss du rap game", "Killer", "Lunatic (feat. Akon)", "Jour de paye", "Si tu savais (feat. 92I)", "Comme une étoile", "Paradis", "45 Scientific (feat. Dosseh)", "Top niveau", "Réel (feat. T-Pain)", "Me-ca (feat. Djé)", "Saddam Hauts-de-Seine", "Fast Life (feat. Ryan Leslie)", "Kojak"]
            },
            {
                titre: "0.9", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273b44bd2f5c3f279e0098cc163",
                category: "project", tracks: ["Intro", "Izi Monnaie", "B2Oba", "Illégal", "Garcimore", "Izi Life (feat. Akon, 92I)", "King (feat. Rock City)", "Salade Tomates Oignons (feat. Djé)", "Bad Boy Street (feat. Demarco)", "Game Over", "Soldats (feat. Naadei)", "R.A.S", "Pourvu Qu'Elles M'Aiment", "Marche Ou Crève", "0.9", "Marche Ou Crève - Busy P Remix"]
            },
            {
                titre: "Izi Monnaie", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b2734d062d997ed457ca20c9907e",
                category: "single", tracks: ["Izi Monnaie"]
            },
            {
                titre: "Illégal", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273226a97983630d181331e7b66",
                category: "single", tracks: ["Illégal"]
            },
            {
                titre: "B20ba", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273b62ce1ff7b6b2f6808728286",
                category: "single", tracks: ["B2Oba"]
            },
            {
                titre: "Ouest Side", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b2730629318fc3855cd75c5664b2",
                category: "project", tracks: ["Mauvais garçon", "Garde la pêche", "Le Duc de Boulogne", "Boîte vocale", "Boulbi", "Ouest Side", "92 izi (feat. Malekal Morte)", "Ouais ouais (feat. Mac Tyer)", "Pitbull", "Je me souviens (feat. Kennedy)", "Le météore", "Au bout des rêves (feat. Trade Union, Mister Rudie)", "Gun In Hand (feat. Akon)", "Au fond de la classe (feat. Intouchable)", "Couleur ébène", "Outro"]
            },
            {
                titre: "Au bout des rêves", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b273adb63cf7b76d93eba5be4295",
                category: "project", tracks: ["Au bout des rêves (feat. Trade Union, Mister Rudie)", "Au bout des rêves - Instrumental (feat. Trade Union, Mister Rudie)"]
            },
            {
                titre: "Panthéon", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b27370b08c12e162911c37e3026d",
                category: "project", tracks: ["Tallac", "Le Mal Par Le Mal", "Commis D'Office (feat. Mala)", "N°10", "Hors-Saison", "R.A.P. (feat. Doum's)", "Baby (feat. Nessbeal)", "La Faucheuse", "Mon Son", "Alter Ego (feat. Wayne Wonder)", "Pazalaza Pour Sazamuser (feat. I2S, Brams)", "Bâtiment C", "Avant De Partir (feat. Leya Masry)"]
            },
            {
                titre: "Avant De Partir (Radio Edit)", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b2734f72ab2c3234294cd9a62658",
                category: "single", tracks: ["Avant De Partir - Radio Edit"]
            },
            {
                titre: "Temps mort", annee: "2002", cover: "https://i.scdn.co/image/ab67616d0000b273de667b23df8eda37dcb6bd96",
                category: "project", tracks: ["Temps mort", "Indépendants", "Ecoute bien", "Ma définition", "Jusqu'ici tout va bien", "Repose en paix", "Le bitume avec une plume", "Animals (feat. Lim, Moussa)", "Sans ratures (feat. Nessbeal)", "Interlude", "100-8 Zoo (feat. Mala, Brams, Doums, Issaka)", "On m'a dit", "Nouvelle école (feat. Mala)", "De mauvaise augure", "Strass & paillettes (feat. Ali)", "Destinée (feat. Kayna Samet)", "Inédit"]
            },
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
        bio: "Les légendes de Marseille, pionniers du rap français avec des textes engagés.",
        bioLongue: "Groupe emblématique de Marseille formé en 1989, IAM a donné ses lettres de noblesse au rap français. Porté par Akhenaton, Shurik'n, Kheops, Imhotep et Kephren, le groupe a marqué l'histoire avec 'L'École du Micro d'Argent', l'album de rap français le plus vendu de tous les temps. Leur style allie samples soul/funk, textes poétiques, références historiques et engagement social.",
        albums: [
            {
                titre: "Monde N.YC", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27332d86ad1e11501ad488d7f1a",
                category: "project", tracks: ["Ça vient de la rue", "La saga", "J'ai pas de face (feat. Akhenaton)", "J'ai vraiment pas de face (feat. Akhenaton)", "Bouger la tête", "Un brin de haine (feat. Akhenaton)", "L'empire du côté obscur"]
            },
            {
                titre: "Monde M.R.S", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d454dfd86238baae12aaee15",
                category: "project", tracks: ["Planète Mars - Homere Mix", "Marseille la nuit", "Elle donne son corps avant son nom", "Oran Marseille (feat. Khaled)", "Le feu - Prodigal Mix", "Les miens (feat. Shurik'n)", "Je viens de Marseille (feat. Faf Larage & Def Bond)", "Belsunce Breakdown (feat. Bouga)", "Je danse le Mia - Le terrible Funk Remix Extended", "Bad Boys de Marseille, Pt. 2 (feat. Shurik'n)", "Petit frère", "Demain, c'est loin"]
            },
            {
                titre: "Monde Cinéma", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27317a3356a0272d9c278e3d358",
                category: "project", tracks: ["Sad Hill (feat. Kheops)", "Pousse au milieu des cactus, ma rancoeur (feat. Kheops, Sentenza)", "Lettre (feat. Shurik'n)", "Offishall", "Mon texte, le savon (Pt. 2) (feat. Akhenaton)", "Le monde est à moi (feat. Akhenaton)", "Un bon son brut pour les truands"]
            },
            {
                titre: "Monde Asie", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731fb94e48e83b4c2f01a9951f",
                category: "project", tracks: ["L'école du micro d'argent", "Benkei et Minamoto", "Mon clan (feat. Faf Larage)", "La garde meurt mais ne se rend pas (feat. Shurik'n, Faf Larage)", "Souris, encore (feat. Akhenaton)", "Samuraï (feat. Shurik'n)", "Celle qui a dit non (feat. Shurik'n)", "L'art de la guerre (feat. Akhenaton, Ärsenik, Pit Baccardi)", "Tam Tam de l'Afrique", "Manifeste (feat. Akhenaton)", "Quand tu allais, on revenait"]
            },
            {
                titre: "Monde Egypte", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27342a45b446f372c73af1e987b",
                category: "project", tracks: ["Independenza", "Nés sous la même étoile", "Monnaie de singe", "Nos heures de gloire", "AKH (feat. Akhenaton)", "Où va la vie? (feat. Moïse)"]
            },
            {
                titre: "HHHistory", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27376a7bba489dc712c01877b2c",
                category: "project", tracks: ["Glorieux", "Sans valeurs", "Pas possible", "Signe des temps", "Ma vie", "Le second c'est le premier des losers", "We Too", "CBR", "Fille de l'air", "Fakerie", "Glorieux - Instrumental", "Fille de l'air - Instrumental"]
            },
            {
                titre: "Sans valeurs", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e59145bebf40d982ce485ff5",
                category: "single", tracks: ["Sans valeurs"]
            },
            {
                titre: "Warrior Tour (Live Studio)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731640eae52f47a60701514bfe",
                category: "project", tracks: ["Omotesando - Live Studio", "Un bon son brut pour les truands - Live Studio", "Rap inconscient - Live Studio", "Feeling - Live Studio", "Bad Boys de Marseille Pt. 2 - Live Studio", "Des mots crasseux - Live Studio", "Nés sous la même étoile - Live Studio", "Vos hommes ont les mains sales - Live Studio", "Samuraï - Live Studio", "Le train de l'argent - Live Studio", "Du rêve dans les veines - Live Studio", "L'empire du côté obscur - Live Studio", "Mirages - Live Studio", "Petit frère - Live Studio", "Elle donne son corps - Live Studio", "Eldorado - Live Studio", "La Saga - Live Studio", "Je danse le mia - Live Studio", "Mosaïque - Live Studio", "Limonade et sirop de menthe - Live Studio", "Quand tu allais on revenait - Live Studio", "N'importe quoi - Live Studio", "Once upon a time - Live Studio (feat. JMK$)", "Demain c'est loin - Live Studio"]
            },
            {
                titre: "Rimes essentielles", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fd502ed6f265cde44fed745f",
                category: "project", tracks: ["Poursuite du bonheur", "Poison d'avril", "Tout ce qu'on est", "Soundbwoi", "Mes étoiles", "Feeling", "Mirages (feat. Allen Akino)", "Trotteuse", "Change (feat. Sly Johnson)", "Rap inconscient", "Du rêve dans les veines", "Rubans noirs", "Au final (feat. Saïd)", "Limonade et sirop de menthe", "Oublie ce qu'on t'a dit", "Des mots crasseux", "Été (feat. Elodie Rama)", "Yeah yeah", "Vos hommes ont les mains sales (feat. Relo)", "Pouvoir au peuple", "Eldorado la continuacion", "Pics et vallées", "N'importe quoi", "Une fleur"]
            },
            {
                titre: "Vos hommes ont les mains sales", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d8156c61f19520551572d3ff",
                category: "single", tracks: ["Vos hommes ont les mains sales (feat. Relo)"]
            },
            {
                titre: "Des mots crasseux", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273741cbc9f89cc9b2065c1c576",
                category: "single", tracks: ["Des mots crasseux"]
            },
            {
                titre: "Rap inconscient", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27347ce9cb1ea74a26c8cabbde1",
                category: "single", tracks: ["Rap inconscient"]
            },
            {
                titre: "Feeling", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731f776ae529265754288fc27a",
                category: "single", tracks: ["Feeling"]
            },
            {
                titre: "All My Life", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273e60d224cdb0ea2b4026c8faf",
                category: "single", tracks: ["All My Life (feat. Ben L'Oncle Soul)"]
            },
            {
                titre: "Yasuke", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ef1c093ae41742f998f52e44",
                category: "project", tracks: ["Omotesando", "Yasuke", "Mosaïque", "Self Made Men (feat. Psy 4 De La Rime)", "Les choses, telles qu'elles paraissent", "On va tous les zinguer", "Eldorado (feat. Kalash)", "Le train de l'argent", "Qui est ?", "Remember (feat. Femi Kuti)", "Rap Warrior", "Good Morning Song (feat. Skyzoo)", "Fin des illusions (feat. Allen Akino, Faf Larage, Relo, Veust, R.E.D.K.)", "Quand est-ce qu'on s'aime?", "MC, tu perds ton sang froid", "Once Upon A Time (feat. JMK$)", "Omotesando - Instrumental", "Yasuke - Instrumental", "Mosaïque - Instrumental", "Self Made Men - Instrumental", "Les choses, telles qu'elles paraissent - Instrumental", "On va tous les zinguer - Instrumental", "Eldorado - Instrumental", "Le train de l'argent - Instrumental", "Qui est ? - Instrumental", "Remember - Instrumental", "Rap Warrior - Instrumental", "Good Morning Song - Instrumental", "Fin des illusions - Instrumental", "Quand est-ce qu'on s'aime? - Instrumental", "MC, tu perds ton sang froid - Instrumental", "Once Upon A Time - Instrumental"]
            },
            {
                titre: "Rap Warrior", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a0bcd699c3d535621963c9d2",
                category: "single", tracks: ["Rap Warrior"]
            },
            {
                titre: "Omotesando", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27302ac9cd62e178fd310478acb",
                category: "single", tracks: ["Omotesando"]
            },
            {
                titre: "Passe passe", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273b57bc4b7e3eac8b3ff61337f",
                category: "single", tracks: ["Passe passe"]
            },
            {
                titre: "Mwa", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273f989b5b63317b3c6ea0c1e2e",
                category: "single", tracks: ["Mwa"]
            },
            {
                titre: "Etranger", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2735d67d05981504956915afa3a",
                category: "single", tracks: ["Etranger"]
            },
            {
                titre: "Rêvolution (Deluxe)", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273a7b740719bc2e28b56bc632c",
                category: "project", tracks: ["Depuis longtemps", "Fiya (feat. Lino)", "Bad Karma", "Danse pour le hood", "Grands rêves, grandes boîtes", "Paix (feat. Saïd)", "Rêvolution", "Orthodoxes", "Chanson d'automne", "Monnaie de singe", "Ils ne savent pas", "Life I Live (feat. Tyler Woods)", "1 Gun, 2 Gunz, 3", "Terre aride (feat. Nuttea)", "La lune c'est le soleil des loups", "Exister", "Rigamortis", "Bien plus beau (feat. Meryem Saci)", "Depuis longtemps - Instrumental", "Fiya - Instrumental", "Bad Karma - Instrumental", "Danse pour le hood - Instrumental", "Grands rêves, grandes boîtes - Instrumental", "Paix - Instrumental", "Rêvolution - Instrumental", "Orthodoxes - Instrumental", "Chanson d'automne - Instrumental", "Monnaie de singe - Instrumental", "Ils ne savent pas - Instrumental", "Life I Live - Instrumental", "1 Gun, 2 Gunz, 3 - Instrumental", "Terre aride - Instrumental", "La lune c'est le soleil des loups - Instrumental", "Exister - Instrumental", "Rigamortis - Instrumental", "Bien plus beau - Instrumental"]
            },
            {
                titre: "Orthodoxes", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27366298ed8f0ae368c287a7a3c",
                category: "single", tracks: ["Orthodoxes"]
            },
            {
                titre: "IAM 2017", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273a93f82d2cafa027f32ca93d1",
                category: "single", tracks: ["IAM 2017"]
            },
            {
                titre: "Ombre est Lumière (Réédition 2014)", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2732815539ccaf939faf4b5d32a",
                category: "project", tracks: ["Le feu", "Cosmos", "Vos dieux ont les mains sales", "La méthode Marsimil", "J'aurais pu croire", "Contrat de conscience", "Le rétor de Malek Sultan", "Un jour tu pleures, un jour tu ris", "Le 7", "Harley Davidson", "La mousse à Riton", "Le Shit Squad", "Une femme seule", "Je danse le Mia", "Alone tout seul Forever", "Fugitif", "L'aimant", "Mars contre-attaque", "Le dragon sommeille", "Attentat II", "Le Slow de lai t'es", "Les Je veux être", "L'échantillon", "Affaire en cours", "Le repos, c'est la santé", "Interview", "Laissez-nous danser", "Transekitchmegatron Hypnokor Space-Rave-Olitecyborg-Ize And Teknomorshit", "Le dernier empereur", "Je lâche la meute", "Achevez-moi", "Achevez-les (feat. Def Bond et Faf Larage)", "Où sont les roses? - Intro", "Où sont les roses?", "Bang Bang", "RXN", "Sachet blanc", "Pharaon reviens", "Ombre est lumière", "Remix Sachet blanc", "Le feu - Prodigal Mix", "La 25ème image (feat. Nuttea)", "Je danse le Mia - Le terrible Funk Remix Extended", "Je fais 1 avec ma musique", "Donne-moi le micro", "Je me gausse", "Guinche le style", "Fizdou", "Reste underground", "La Mort n'est pas une fin", "Le soldat", "Le feu - Fiyah Mix", "L'ultra mia", "Le feu - Instrumental", "Je ne veux plus voir personne en Harley Davidson - Instrumental", "L'Aimant - Instrumental", "Cosmos - Instrumental", "Le Shit Squad - Instrumental", "Une femme seule - Instrumental", "Le dragon sommeille - Instrumental", "Attentat II - Instrumental", "J'aurais pu croire - Instrumental", "Je danse le Mia - Instrumental", "Le Soldat - Instrumental", "Le dernier empereur - Instrumental", "Un jour tu pleures, un jour tu ris - Instrumental", "Sachet blanc - Instrumental", "Affaire en cours - Instrumental", "Vos dieux ont les mains sales - Instrumental", "Je danse le Mia - Le terrible funk remix extended instrumental"]
            },
            {
                titre: "16 classiques", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2738d86496365522b1efd880ec7",
                category: "project", tracks: ["Planète Mars", "Red, Black and Green - Sofa Jazz Mix", "Tam Tam de l'Afrique", "Le feu", "Je danse le Mia - Le terrible Funk Remix Extended", "La saga", "L'empire du côté obscur", "Nés sous la même étoile", "Petit frère", "Independenza", "Demain, c'est loin", "Revoir un printemps", "Noble Art (feat. Method Man & Redman)", "Où va la vie? (feat. Moïse)", "Ça vient de la rue", "Rap de droite"]
            },
            {
                titre: "IAM (Deluxe)", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273a18354629fdb90f4e5ea3629",
                category: "project", tracks: ["Dj Daz présente… - Instrumental (feat. DJ Daz)", "Poudre De Brique Rouge", "Peines profondes", "Ouais C'Est Ca", "Artificielle", "C*A*S*H", "Mister Gentil Et Monsieur Nice", "CQFD", "Si J'Avais 20 Ans", "Médailles", "Fuck Le Refrain", "Musik (feat. Said)", "Géométrie De L'Ennui", "A Nos Boots", "Que Fait La Police", "Renaissance", "Dj Daz présente… - Instrumental (feat. DJ Daz)", "Poudre De Brique Rouge - Instrumental", "Peines Profondes - Instrumental", "Ouais C'Est Ca - Instrumental", "Artificielle - Instrumental", "C*A*S*H - Instrumental", "Mister Gentil Et Monsieur Nice - Instrumental", "CQFD - Instrumental", "Si J'Avais 20 Ans - Instrumental", "Médailles - Instrumental", "Fuck Le Refrain - Instrumental", "Musik - Instrumental (feat. Said)", "Géométrie De L'Ennui - Instrumental", "A Nos Boots - Instrumental", "Que Fait La Police - Instrumental", "Renaissance - Instrumental"]
            },
            {
                titre: "Arts Martiens", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27327b81af682b659940ad15560",
                category: "project", tracks: ["Spartiate Spirit", "Les Raisons De La Colère", "Tous Les Saints De La Terre", "La Part Du Démon", "Benkei Et Minamoto", "4.2.1", "Marvel", "Misère", "L'Amour Qu'On Me Donne", "Habitude (feat. Faf Larage)", "Mon Encre, Si Amère", "Debout Les Braves", "Après La Fête...", "Pain Au Chocolat", "Sombres Manoeuvres / Manoeuvres Sombres", "Notre Dame Veille", "Dernier Coup D'Eclat"]
            },
            {
                titre: "Galaxie", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b2737464094e56c39a8a3f9c2ffa",
                category: "project", tracks: ["Red, Black and Green - Deuxième vague Club Mix", "Planète Mars - Homere Mix", "Je suis vex'", "Je me gausse", "Donne-moi le micro", "L'ultra mia", "Une femme seule", "Reste underground", "Métèque et mat (feat. Akhenaton)", "L'Americano (feat. Akhenaton)", "Bad Boys de Marseille (feat. Akhenaton, Fonky Family)", "Éclater un type des Assedic (feat. Akhenaton)", "Complexe", "La face B - Chill Remix (feat. Akhenaton)", "J'ai pas de face (feat. Akhenaton)", "C'est donc ça nos vies", "Un cri court dans la nuit (feat. Nuttea)", "Si j'avais su (feat. Kheops, Shurik'n)", "Pousse au milieu des cactus, ma rancoeur (feat. Kheops, Sentenza)", "Il faut taper", "La 25ème image (feat. Nuttea) - Remix", "Sans issue", "L'école du micro d'argent", "Nés sous la même étoile", "Demain, c'est loin", "Independenza", "La saga", "L'empire du côté obscur", "Petit frère", "Lettre (feat. Shurik'n)", "Les miens (feat. Shurik'n)", "Samuraï (feat. Shurik'n)", "Où je vis (feat. Shurik'n)", "Manifeste (feat. Akhenaton)", "Paese (feat. Akhenaton)", "Mon texte, le savon (feat. Akhenaton)", "New York City Transit (feat. Akhenaton)", "H (feat. Pit Baccardi, Rohff & Lino) - Version Hostile", "Chaque jour (feat. Akhenaton)", "Quand ça se disperse (feat. Akhenaton)", "Petite apocalypse (feat. Shurik'n)", "Nid de guêpes (feat. Akhenaton)", "La Violence (feat. Soprano)", "Fruits de la rage", "Quand ils rentraient chez eux", "Mur - Remix", "Tiens", "Pause", "21/04", "Hector à Troie", "La Tangente", "Still a War in the East (feat. Imhotep)", "Belsunce Breakdown (feat. Bouga)", "Tous veulent le succès (feat. Def Bond, Ärsenik)", "Mes soleils et mes lunes (feat. Sako)", "Tant De Raisons Où Je Vis - Remix (feat. Shurik'n, MC Janik)", "C'est clair je suis sombre", "Def Bond - Secret Défense Remix (feat. Kheops, Def Bond)", "Mama Lova (feat. Kheops, Oxmo Puccino)", "Le fainéant (feat. Kheops, Faf Larage)", "Si t'es cap d'y aller (feat. Kheops, Hi:Fi)"]
            },
            {
                titre: "Anthologie IAM 2008", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273c70a5843482195a89d9f0a8e",
                category: "project", tracks: ["Pharaon revient", "Planète Mars", "Jazz", "Tam Tam de l'Afrique", "IAM concept", "Crack", "Attentat", "Disco Club", "Le nouveau président", "IAM Bercy", "Non soumis à l'État", "1 peu trop court", "Do the Raï Thing", "Red, Black and Green", "Lève ton slip", "Elvis", "Unité", "Kheops appartient à l'horizon", "Je viens de Marseille (feat. Faf Larage & Def Bond)", "Wake Up", "Crécelle", "La tension monte", "Rapline II", "Stratégie d'un pion", "Nous (feat. Kayna Samet)", "Quand ils rentraient chez eux", "Noble Art (feat. Method Man & Redman)", "Lâches", "Mental de Viêt Cong", "Revoir un printemps", "Armes de distraction massive", "Second souffle", "Visages dans la foule", "Ici ou ailleurs (feat. Syleena Johnson)", "Tiens", "Bienvenue (feat. Beyoncé)", "Pause", "Fruits de la rage", "Murs", "21/04", "Aussi loin que l'horizon", "Live de la base", "La Violence (feat. Soprano)", "40 ans de retour au ghetto", "Noble Art - Instrumental", "Tiens - Instrumental", "Second souffle - Live", "Stratégie d'un pion - Live", "La Mèche et les sens - Live", "Mental de Viêt Cong - Live", "Lâches - Live", "Le Barème - Live", "Nous - Live", "21/04 - Live", "Medley 1 (Nés sous la même étoile / Independenza / Bad Boys de Marseille / L'école du micro d'argent) - Live", "Armes de distraction massive - Live", "Tiens - Live", "IAM (Science de la rime) - Live", "Interstice ''Pour le flow'' - Live", "Murs - Live", "Où va la vie? - Live", "Bienvenue - Live", "Revoir un printemps - Live", "Encore plus de monde - Live", "Medley 2 (L'Empire du côté obscur / Petit frère / Un bon son brut pour les truands / Demain, c'est loin) - Live", "Pause - Live", "Noble Art - Live", "L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "L'enfer (feat. East & Fabe)", "Quand tu allais, on revenait", "Chez le mac", "Un bon son brut pour les truands", "Bouger la tête", "Un cri court dans la nuit (feat. Nuttea)", "Libère mon imagination", "Demain, c'est loin", "Hold-up mental", "Donne-moi le micro", "Complexe", "Il faut taper", "Sans issue", "Sales hypocrites", "Doin' Our Thang (feat. Primo Style & Smooth Lordion)", "La réalité", "C'est clair je suis sombre", "La 25ème image (feat. Nuttea) - Remix", "Le feu", "Cosmos", "Vos dieux ont les mains sales", "La méthode Marsimil", "J'aurais pu croire", "Contrat de conscience", "Le rétor de Malek Sultan", "Un jour tu pleures, un jour tu ris", "Le 7", "Harley Davidson", "La mousse à Riton", "Le Shit Squad", "Une femme seule", "Je danse le Mia", "Alone tout seul Forever", "Fugitif", "L'aimant", "Mars contre-attaque", "Le dragon sommeille", "Attentat II", "Le Slow de lai t'es", "Les Je veux être", "L'échantillon", "Affaire en cours", "Le repos, c'est la santé", "Interview", "Laissez-nous danser", "Transekitchmegatron Hypnokor Space-Rave-Olitecyborg-Ize And Teknomorshit", "Le dernier empereur", "Je lâche la meute", "Achevez-moi", "Achevez-les (feat. Def Bond et Faf Larage)", "Où sont les roses? - Intro", "Où sont les roses?", "Bang Bang", "RXN", "Sachet blanc", "Pharaon reviens", "Hector à Troie", "Encore plus de monde", "Live de la base (feat. Lyricist Mic Forcing) - Remix", "Peur de vivre"]
            },
            {
                titre: "Saison 5", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b273ff5abba8c5794c67107f8f18",
                category: "project", tracks: ["W.W.", "Une autre brique - Edit Version", "Hip hop ville", "Tu le sais part I / tu la sais part II", "Offishall", "Nos heures de gloire", "Ca vient de la rue", "To The World (feat. Jehro)", "Le style de l'homme libre", "Rap de droite", "Si tu m'aimais - Edit Version", "Sur les remparts", "Rien de personnel", "Coupe le cake", "Au quartier - Edit Version", "United - Edit Version", "La fin de leur monde"]
            },
            {
                titre: "Live Retour Aux Pyramides", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b2731142d06525161fd0928ade19",
                category: "project", tracks: ["Intro \"Pharaon Reviens\" - Live Retour Aux Pyramides 14/03/2008", "W.W. - Live Retour Aux Pyramides 14/03/2008", "Une Autre Brique - Live Retour Aux Pyramides 14/03/2008", "Petit Frère - Live Retour Aux Pyramides 14/03/2008", "Rien De Personnel - Live Retour Aux Pyramides 14/03/2008", "Où Va La Vie - Live Retour Aux Pyramides 14/03/2008 (feat. Lofti Bouchnak)", "La Fin De Leur Monde - Live Retour Aux Pyramides 14/03/2008", "Rap De Droite - Live Retour Aux Pyramides 14/03/2008", "L'Ecole Du Micro D'Argent - Live Retour Aux Pyramides 14/03/2008", "Bladi - Live Retour Aux Pyramides 14/03/2008 (feat. Khaled)", "Au Quartier - Live Retour Aux Pyramides 14/03/2008", "Ca Vient De La Rue - Live Retour Aux Pyramides 14/03/2008", "Je Danse Le Mia - Live Retour Aux Pyramides 14/03/2008", "Offishall - Live Retour Aux Pyramides 14/03/2008", "L'Empire Du Côté Obscur (Version Longue) - Live Retour Aux Pyramides 14/03/2008", "Nés Sous La Même Etoile - Live Retour Aux Pyramides 14/03/2008", "Demain C'Est Loin - Live Retour Aux Pyramides 14/03/2008", "Outro \"Pharaon Reviens\" (Version Longue) - Live Retour Aux Pyramides 14/03/2008"]
            },
            {
                titre: "Platinum", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b273e7ff46384fa5b67fce1494ce",
                category: "project", tracks: ["Planète Mars", "Tam Tam de l'Afrique", "Je danse le Mia", "Remix Sachet blanc", "L'empire du côté obscur", "Petit frère", "L'école du micro d'argent (feat. Prodigal Sunn, Hellraiser, Bald Head & Codee) - Version US", "Nés sous la même étoile", "La saga", "Independenza", "Revoir un printemps", "Où va la vie? (feat. Moïse)", "Stratégie d'un pion", "Nous (feat. Kayna Samet)", "Noble Art (feat. Method Man & Redman)", "Une femme seule", "Donne-moi le micro", "Hold-up mental", "Non soumis à l'État", "IAM concept", "L'aimant", "Contrat de conscience", "Harley Davidson", "J'aurais pu croire", "Je lâche la meute", "Achevez-moi", "Achevez-les (feat. Def Bond et Faf Larage)", "La 25ème image (feat. Nuttea)", "Un bon son brut pour les truands", "Demain, c'est loin", "Red, Black and Green", "Dangereux", "La Guerre sainte du rap", "Je fais 1 avec ma musique", "Je suis vex'", "C'est donc ça nos vies", "Un jour comme un lion", "Tempérament Kunta Kinté", "Pourquoi je suis là", "La Tangente", "Feu, flammes, fumées, cendres", "Live de la base (feat. Lyricist Mic Forcing) - Remix", "J'aime pas", "Le Couteau entre les dents (feat. Faf Larage)", "Peur de vivre", "Par envie (feat. Deni Hines)", "Doin' Our Thang (feat. Primo Style & Smooth Lordion)"]
            },
            {
                titre: "La fin de leur monde", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b2736e3faba43a002fd956cf4de4",
                category: "project", tracks: ["La fin de leur monde", "La fin de leur monde - Instrumentale"]
            },
            {
                titre: "Live au Dôme de Marseille", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b273dc74785707061bdbce6a05ba",
                category: "project", tracks: ["Second souffle - Live", "Stratégie d'un pion - Live", "La Mèche et les sens - Live", "Mental de Viêt Cong - Live", "Lâches - Live", "Le Barème - Live", "Nous - Live", "21/04 - Live", "Medley 1 (Nés sous la même étoile / Independenza / Bad Boys de Marseille / L'école du micro d'argent) - Live", "Armes de distraction massive - Live", "Tiens - Live", "IAM (Science de la rime) - Live", "Interstice ''Pour le flow'' - Live", "Murs - Live", "Où va la vie? - Live", "Bienvenue - Live", "Revoir un printemps - Live", "Encore plus de monde - Live", "Medley 2 (L'Empire du côté obscur / Petit frère / Un bon son brut pour les truands / Demain, c'est loin) - Live", "Pause - Live", "Noble Art - Live"]
            },
            {
                titre: "ou va la vie ? (feat. moise)", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b273ee35e4b555162d7962ce1752",
                category: "single", tracks: ["Où va la vie? (feat. Moïse)"]
            },
            {
                titre: "strategie d'un pion", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b273674167324fb5e0c589e18998",
                category: "single", tracks: ["Stratégie d'un pion"]
            },
            {
                titre: "Stratégie D'un Pion", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b2738a6004166d15d7e091233dca",
                category: "project", tracks: ["Stratégie d'un pion", "La Tangente", "Par envie (feat. Deni Hines)", "Mur - Remix"]
            },
            {
                titre: "revoir un printemps", annee: "2003", cover: "https://i.scdn.co/image/ab67616d0000b27344dae155ddaaedb6f3bdd03a",
                category: "single", tracks: ["Revoir un printemps"]
            },
            {
                titre: "Noble Art (feat. Method Man & Redman)", annee: "2003", cover: "https://i.scdn.co/image/ab67616d0000b273f162100c5006e65d55806dc7",
                category: "single", tracks: ["Noble Art (feat. Method Man & Redman)"]
            },
            {
                titre: "Revoir Un Printemps [Bonus Disc]", annee: "2003", cover: "https://i.scdn.co/image/ab67616d0000b273ccfef32bd75a479419ca6274",
                category: "project", tracks: ["Live de la base", "La Violence (feat. Soprano)", "40 ans de retour au ghetto", "Noble Art - Instrumental", "Tiens - Instrumental"]
            },
            {
                titre: "Petit Frère", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b2730075ef937525cb606a50b81b",
                category: "project", tracks: ["Petit frère", "L'école du micro d'argent - Version guerrière"]
            },
            {
                titre: "Independenza", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b27385e5f56549293595af399dd8",
                category: "project", tracks: ["Independenza", "Pourquoi je suis là", "Un bon son brut pour les truands"]
            },
            {
                titre: "L'école du micro d'argent", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b27365716918209ccc6bac2af278",
                category: "project", tracks: ["L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "L'enfer (feat. East & Fabe)", "Quand tu allais, on revenait", "Chez le mac", "Un bon son brut pour les truands", "Bouger la tête", "Un cri court dans la nuit (feat. Nuttea)", "Independenza", "Demain, c'est loin"]
            },
            {
                titre: "Nés Sous La Même Étoile", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b273a091a75cec6678ed29542071",
                category: "project", tracks: ["Nés sous la même étoile", "Tempérament Kunta Kinté", "Fait divers"]
            },
            {
                titre: "La Saga", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b273503e8aa94680a2aeb8ee289a",
                category: "project", tracks: ["La saga", "La saga - Instrumental", "La Saga - A cappella"]
            },
            {
                titre: "L'empire Du Coté Obscur", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b27304fb7bfb7a5e11f214a9f652",
                category: "project", tracks: ["L'empire du côté obscur", "La saga (feat. Timbo King, Dreddy Krueger & Prodigal Sunn) - Soul Remix", "La Saga (feat. Timbo King, Dreddy Krueger & Prodigal Sunn) - Noir Château Remix", "Des sous"]
            },
            {
                titre: "L'ecole Du Micro D'argent", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b27319944da910fca343c6205752",
                category: "project", tracks: ["L'école du micro d'argent", "L'école du micro d'argent (feat. Prodigal Sunn, Hellraiser, Bald Head & Codee) - Version US"]
            },
            {
                titre: "Donne Moi Le Micro", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b273800de208bf5d76e70630b524",
                category: "project", tracks: ["Donne-moi le micro", "Je me gausse", "Guinche le style", "Fizdou"]
            },
            {
                titre: "Demain, c'est loin", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b273015b5c4ddb6db3099fbdeebc",
                category: "project", tracks: ["Demain, c'est loin", "Demain, c'est loin - Instrumental", "Demain, c'est loin - A cappella"]
            },
            {
                titre: "Une Femme Seule/remix Le Sachet Blanc", annee: "1995", cover: "https://i.scdn.co/image/ab67616d0000b2735c26cae4f22dfeaaa49202f4",
                category: "project", tracks: ["Une femme seule (Remix)", "Remix Sachet blanc", "La 25ème image (feat. Nuttea)"]
            },
            {
                titre: "Le Feu", annee: "1994", cover: "https://i.scdn.co/image/ab67616d0000b2731c575e2c21f63e0a0d9c3de6",
                category: "project", tracks: ["Le feu - Prodigal Mix", "Reste underground", "La Mort n'est pas une fin", "Le feu - Fiyah Mix"]
            },
            {
                titre: "Je Danse Le Mia", annee: "1994", cover: "https://i.scdn.co/image/ab67616d0000b27353f32a34fd92654dc8c1ebf6",
                category: "project", tracks: ["Je danse le Mia - Le terrible Funk Remix Extended", "Ombre est lumière", "Je fais 1 avec ma musique", "L'ultra mia"]
            },
            {
                titre: "Ombre Est Lumiere", annee: "1993", cover: "https://i.scdn.co/image/ab67616d0000b2730b27cf07773ad54cfc7deabd",
                category: "project", tracks: ["Ombre est lumière", "Le Feu - Prodigal Edit", "Cosmos", "Le dernier empereur", "Contrat de conscience", "Une femme seule (Remix)", "L'aimant", "Le repos, c'est la santé", "Remix Sachet blanc", "Le Shit Squad", "Le soldat", "Reste underground", "Harley Davidson", "J'aurais pu croire", "Je danse le mia - Le Terrible Funk Remix; Radio Edit"]
            },
            {
                titre: "Planete Mars", annee: "1992", cover: "https://i.scdn.co/image/ab67616d0000b2738804cd66459a0ece0e139408",
                category: "project", tracks: ["Planète Mars - Homere Mix", "Keep on Scratching", "Je suis vex'", "Planète Mars - Mo Bee Remix", "Planète Mars - Black Hole Mix"]
            },
            {
                titre: "...De la planète Mars (Edition Super Deluxe)", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b2732e3543bf691b571e70afe3b4",
                category: "project", tracks: ["Pharaon revient", "Planète Mars", "Jazz", "Tam Tam de l'Afrique", "IAM concept", "Crack", "Attentat", "Disco Club", "Le nouveau président", "IAM Bercy", "Non soumis à l'État", "1 peu trop court", "Do the Raï Thing", "Red, Black and Green", "Lève ton slip", "Elvis", "Unité", "Kheops appartient à l'horizon", "Je viens de Marseille (feat. Faf Larage & Def Bond)", "Wake Up", "Crécelle", "La tension monte", "Rapline II", "Planète Mars - Rough Version", "Unité - Rough Version", "Planète mars - Version instrumentale", "Tam Tam de l'Afrique - Version instrumentale", "IAM Concept - Version instrumentale", "Attentat - Version instrumentale", "Le nouveau président - Version instrumentale", "Non soumis à l'État - Version instrumentale", "1 peu trop court - Version instrumentale", "Red, Black and Green - Version instrumentale", "Elvis - Version instrumentale", "Unité - Version instrumentale", "La tension monte - Version instrumentale"]
            },
            {
                titre: "De La Planete Mars", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b2736fa389bae08a7fc07136d378",
                category: "project", tracks: ["Pharaon revient", "Planète Mars", "Jazz", "Tam Tam de l'Afrique", "IAM concept", "Crack", "Attentat", "Disco Club", "Le nouveau président", "IAM Bercy", "Non soumis à l'État", "1 peu trop court", "Do the Raï Thing", "Red, Black and Green", "Lève ton slip", "Elvis", "Unité", "Kheops appartient à l'horizon", "Je viens de Marseille (feat. Faf Larage & Def Bond)", "Wake Up", "Crécelle", "La tension monte", "Rapline II"]
            },
            {
                titre: "Tam Tam De L'afrique", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b27375c9ff458346d3ea47a30068",
                category: "project", tracks: ["Tam-tam de l'Afrique - Homere Mix", "Tam-tam de l'Afrique - Easy Mo Bee Mix", "Mado", "Le Livre de la jungle", "Fuit L.A.I. - Laids Absolus Irrécupérables", "Je viens de Marseille (feat. Faf Larage & Def Bond)"]
            },
            {
                titre: "Red Black & Green", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b273acfaf88d70adf4aafe4c3240",
                category: "project", tracks: ["Red, Black and Green - Deuxième vague Club Mix", "Red, Black and Green - Rainbow Mix", "Red, Black and Green - Sofa Jazz Mix", "Hold-up mental", "La Guerre sainte du rap"]
            },
        ]
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/suprême_ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "Le duo explosif de Saint-Denis, incarnation de la rage et de la révolte.",
        bioLongue: "Suprême NTM, composé de JoeyStarr et Kool Shen, est le groupe mythique du 93. Connus pour leur énergie scénique dévastatrice et leurs textes bruts dénonçant les inégalités sociales et les violences policières, ils ont marqué les années 90 avec des hymnes comme 'Laisse pas traîner ton fils' ou 'Ma Benz'. Leur séparation a marqué la fin d'une ère, mais leur héritage reste immense.",
        albums: [
            {
                titre: "La der - l'ultime concert à l'Accorhotels Arena (Live)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27316d779847fa9f0b4c733db85",
                category: "project", tracks: ["Intro - Live à l'AccorHotels Arena 2019", "On est encore là - Live à l'AccorHotels Arena 2019", "Qu'est-ce qu'on attend ? - Live à l'AccorHotels Arena 2019", "C'est clair - Live à l'AccorHotels Arena 2019", "Pass pass le oinj - Live à l'AccorHotels Arena 2019", "Tout n'est pas si facile - Live à l'AccorHotels Arena 2019", "Affirmative Action (Saint-Denis Style Remix) - Live à l'AccorHotels Arena 2019", "Come Again (feat. Big Red) - Live à l'AccorHotels Arena 2019", "Aiguisé comme une lame (feat. Raggasonic) - Live à l'AccorHotels Arena 2019", "Pose ton Gun - Live à l'AccorHotels Arena 2019", "Paris sous les bombes - Live à l'AccorHotels Arena 2019", "Seine Saint-Denis Style - Live à l'AccorHotels Arena 2019", "Laisse pas traîner ton fils - Live à l'AccorHotels Arena 2019", "C'est arrivé près d'chez toi (feat. Jaeyez) - Live à l'AccorHotels Arena 2019", "Police - Live à l'AccorHotels Arena 2019", "Ma Benz - Live à l'AccorHotels Arena 2019", "Popopop !! (Freestyle) - Live à l'AccorHotels Arena 2019", "Qui paiera les dégâts ? - Live à l'AccorHotels Arena 2019", "That's My People - Live à l'AccorHotels Arena 2019"]
            },
            {
                titre: "Mosh Pit (feat. Morvilous, DJ Statics, Lord Kossity, JoeyStarr & Kool Shen)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ec50b3a174c4ed6f2352536d",
                category: "project", tracks: ["Mosh Pit (feat. Morvilous, DJ Statics, Lord Kossity, JoeyStarr & Kool Shen)", "Mosh Pit (feat. Morvilous, DJ Statics, Lord Kossity, JoeyStarr & Kool Shen) - Instrumental"]
            },
            {
                titre: "Sur le drapeau (Extrait du projet 93 Empire)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2737cdb01205f98385c662eb302",
                category: "single", tracks: ["Sur le drapeau (feat. Sofiane)"]
            },
            {
                titre: "On est encore là - Bercy 2008 (Live)", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b2737c6a0379e908a01b5eeea8bd",
                category: "project", tracks: ["Intro - Live à Paris-Bercy 2008", "Seine Saint-Denis Style - Live à Paris-Bercy 2008", "On est encore là - Live à Paris-Bercy 2008", "Le monde de demain - Live à Paris-Bercy 2008", "C'est clair - Live à Paris-Bercy 2008", "That's My People - Live à Paris-Bercy 2008", "Punition \"oh mon bateau\" - Live à Paris-Bercy 2008", "Pass pass le oinj - Live à Paris-Bercy 2008", "C'est arrivé près d'chez toi (feat. Jaeyez) - Live à Paris-Bercy 2008", "Two Shouts IV My People (feat. Big Ali & Jeff le Nerf) - Live à Paris-Bercy 2008", "Pose ton Gun 2 (feat. Nathy) - Live à Paris-Bercy 2008", "Tout n'est pas si facile - Live à Paris-Bercy 2008", "Paris sous les bombes - Live à Paris-Bercy 2008", "Popopop !! (Freestyle) - Live à Paris-Bercy 2008", "Qu'est-ce qu'on attend - Live à Paris-Bercy 2008", "Laisse pas traîner ton fils - Live à Paris-Bercy 2008", "Carnival (feat. Nathy) - Live à Paris-Bercy 2008", "Un ange dans le ciel - Live à Paris-Bercy 2008", "Back dans les bacs - Live à Paris-Bercy 2008", "Affirmative Action (Saint-Denis Style Remix) - Live à Paris-Bercy 2008", "La fièvre - Live à Paris-Bercy 2008", "Check the Flow (feat. Lucien \"Papa Lu\") - Live à Paris-Bercy 2008", "Qui paiera les dégâts ? - Live à Paris-Bercy 2008", "Police - Live à Paris-Bercy 2008", "Pose ton Gun - Live à Paris-Bercy 2008"]
            },
            {
                titre: "Le Clash - Round 5 (B.O.S.S. vs. IV My People)", annee: "2001", cover: "https://i.scdn.co/image/ab67616d0000b27392cc08b939718d446021cac1",
                category: "project", tracks: ["C'est arrivé près d'chez toi (feat. Jaeyez) - IV My People Remix", "Seine Saint-Denis Style - B.O.S.S. Remix (feat. DJ James)"]
            },
            {
                titre: "Le Clash - Les singles (B.O.S.S. vs. IV My People)", annee: "2001", cover: "https://i.scdn.co/image/ab67616d0000b2730ab78aee51456f5b618f0b40",
                category: "project", tracks: ["Qui veut la peau de mon Crew ? (feat. Kool Shen & Salif)", "Clasher mon Crew... (t'es fou !) (feat. JoeyStarr & Iron Sy) - Radio Edit"]
            },
            {
                titre: "Le Clash - Round 1 (B.O.S.S. vs. IV My People)", annee: "2000", cover: "https://i.scdn.co/image/ab67616d0000b273ce33387895c0e45f4d4e2806",
                category: "project", tracks: ["Intro: NTM, le Clash - IV My People Mix", "Ma Benz (feat. Lord Kossity) - B.O.S.S. 2000 Remix", "Police - IV My People Remix", "L'argent pourrit les gens - B.O.S.S. Remix (feat. DJ Spank, B.O.S.S.)", "Touche pas à ma musique - That's My People Remix", "Outro: NTM, le Clash - B.O.S.S. Mix"]
            },
            {
                titre: "Live (Du monde de demain à Pose ton Gun)", annee: "2000", cover: "https://i.scdn.co/image/ab67616d0000b2730bc4f3fc38e19b39b15db69e",
                category: "project", tracks: ["Intro - Live au Zénith de Paris 1998", "Seine Saint-Denis Style, Pt. 1 - Live au Zénith de Paris 1998", "On est encore là, Pt. 2 & Pt. 1 - Live au Zénith de Paris 1998", "Pass pass le oinj - Live au Zénith de Paris 1998", "That's My People - Live au Zénith de Paris 1998", "Medley: Check the Flow / Respire - Live au Zénith de Paris 1998", "Je vise juste - Live au Zénith de Paris 1998", "Pose ton Gun - Live au Zénith de Paris 1998", "Seine Saint-Denis Style, Pt. 2 - Live au Zénith de Paris 1998", "Qu'est-ce qu'on attend - Live au Zénith de Paris 1998", "Tout n'est pas si facile - Live au Zénith de Paris 1998", "Ma Benz (feat. Lord Kossity) - Live au Zénith de Paris 1998", "Laisse pas traîner ton fils - Live au Zénith de Paris 1998", "Paris sous les bombes - Live au Zénith de Paris 1998", "Back dans les bacs - Live au Zénith de Paris 1998", "Qui paiera les dégâts ? - Live au Zénith de Paris 1998", "Police - Live au Zénith de Paris 1998", "C'est arrivé près d'chez toi (feat. Jaeyez) - Live au Zénith de Paris 1998", "IV My People (feat. Busta Flex, Lord Kossity & Zoxea) - Live au Zénith de Paris 1998", "Intro - Live au Zénith de Paris 1992", "Authentik - Live au Zénith de Paris 1992", "Le monde de demain - Live au Zénith de Paris 1992", "C'est clair - Live au Bataclan 1995", "Check the Flow - Live au Zénith de Paris 1995", "Plus jamais ça - Live au Bataclan 1995", "Paris sous les bombes - Live au Zénith de Paris 1995", "Pour un nouveau massacre - Live au Bataclan 1995", "Come Again (pour que ça sonne funk) - Live au Zénith de Paris 1995", "La fièvre - Live au Zénith de Paris 1995"]
            },
            {
                titre: "Pose ton Gun", annee: "1999", cover: "https://i.scdn.co/image/ab67616d0000b273be556ad8235214cccb58e56b",
                category: "project", tracks: ["Pose ton Gun", "On est encore là, Pt. 2"]
            },
            {
                titre: "That's My People", annee: "1999", cover: "https://i.scdn.co/image/ab67616d0000b273d92ff0cebe3e0af6013cca21",
                category: "project", tracks: ["That's My People", "Touche pas à ma musique - That's My People Remix", "Je vise juste - Break Dancers Remix"]
            },
            {
                titre: "93 Party (Live)", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273fbf09982397960337172f790",
                category: "project", tracks: ["Intro DJ's - Live", "Seine Saint-Denis Style - Live", "On est encore là, Pt. 1 & Pt. 2 - Live", "Laisse pas traîner ton fils - Live", "Pass pass le oinj - Live", "Check the Flow - Live"]
            },
            {
                titre: "Ma Benz (feat. Lord Kossity)", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273fb5259492ebb234d810ddbbd",
                category: "project", tracks: ["Ma Benz (feat. Lord Kossity)", "Ma Benz (feat. Lord Kossity) - B.O.S.S. Remix"]
            },
            {
                titre: "Laisse pas traîner ton fils", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273ca2d2d8bff0bc1fc54e32b5f",
                category: "project", tracks: ["Laisse pas traîner ton fils", "Seine Saint-Denis Style"]
            },
            {
                titre: "Suprême NTM", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273b0af6c9d26487cf55ba0efd6",
                category: "project", tracks: ["Intro", "Back dans les bacs", "Laisse pas traîner ton fils", "That's My People", "Seine Saint-Denis Style", "Interlude", "Ma Benz (feat. Lord Kossity)", "C'est arrivé près d'chez toi (feat. Jaeyez)", "On est encore là, Pt. 1", "Odeurs de soufre", "Je vise juste", "Pose ton Gun", "Respire", "On est encore là, Pt. 2", "Hardcore sur le Beat", "Outro"]
            },
            {
                titre: "Come Again 2 - Le retour", annee: "1996", cover: "https://i.scdn.co/image/ab67616d0000b27383c7f298b6dd92dfe15a3cb3",
                category: "project", tracks: ["Come Again (feat. Big Red) - Remix", "Come Again (pour que ça sonne funk)", "Come Again (pour que ça sonne funk) - Live au Zénith de Paris 1995", "Come Again - Remix (Instrumental)", "Come Again (feat. Big Red) - Remix (a cappella)"]
            },
            {
                titre: "Paris sous les bombes", annee: "1995", cover: "https://i.scdn.co/image/ab67616d0000b273b7529d768d924491b0695aa6",
                category: "project", tracks: ["Intro", "Plus jamais ça (feat. Gregg Mann, Lucien Papalu)", "Tout n'est pas si facile", "Come Again (pour que ça sonne funk)", "Qu'est-ce qu'on attend", "Nouvelle école", "Le rêve", "Old Skool", "Intro (Paris sous les bombes)", "Paris sous les bombes (feat. Lucien Papalu, Gregg Mann)", "Pass pass le oinj", "Qui paiera les dégâts ? - DJ Clyde Remix (feat. Dj. Clyde)", "Sista B. - Intermède", "Est-ce la vie ou moi", "La fièvre", "Popopop !! (Freestyle)", "Outro", "Come Again (feat. Big Red) - Remix", "Affirmative Action (feat. Suprême NTM) - Saint-Denis Style Remix"]
            },
            {
                titre: "1993 J'appuie sur la gâchette...", annee: "1993", cover: "https://i.scdn.co/image/ab67616d0000b273bcf8779339ac7db239e37718",
                category: "project", tracks: ["Intro", "Pour un nouveau massacre", "Police", "J'appuie sur la gâchette", "Sur 24 pistes - Remix", "En direct de Bujolvik", "Plus rien ne va", "Prisonnier du passé", "De Best", "En direct du Grand Nord", "Qui paiera les dégâts ?", "Juste pour le Fun", "Dans le vent", "93.2 NTMEO radio", "La révolution du son", "C'est clair, Pt. 2", "Nouvelle école"]
            },
            {
                titre: "Authentik (25 ans Deluxe)", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b2737b5e39eda1b2b15b462a1b56",
                category: "project", tracks: ["Test des micros", "Authentik", "L'argent pourrit les gens", "De personne je ne serai la cible", "Big Flap", "Le pouvoir", "Freestyle", "Paix", "Le monde de demain", "Danse", "Quelle gratitude ?", "Soul Soul", "C'est clair", "Blanc et Noir", "Dédicace", "Boogie Man", "Nouvelle attack terroriste sur 24 pistes", "Live au Zénith", "Authentik - Remix (feat. Kirk Yano)", "Soul Soul - New York Mix", "L'argent - Remix", "Le monde de demain - Version longue", "Danse - Instrumental", "Authentik - Remix (Instrumental) (feat. Kirk Yano)", "La cible - Instrumental", "Blanc et Noir - Instrumental", "L'argent pourrit les gens - Version alternative (Instrumental)", "Soul Soul - Version alternative (Instrumental)", "Quelle gratitude ? - Instrumental", "Boogie Man - Instrumental", "C'est clair - Instrumental", "Authentik - A cappella", "L'argent pourrit les gens - B.O.S.S. Remix (a cappella) (feat. Spank)"]
            },
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
        bio: "Le Dozo de Sevran. Il a importé la Trap et changé la face du rap français.",
        bioLongue: "Kaaris, originaire de Sevran, a provoqué un séisme dans le rap français avec la sortie de 'Or Noir' en 2013. Son style brutal, ses punchlines crues et son imagerie sombre ont imposé la Trap en France. Ancien protégé de Booba devenu rival, il a su créer son propre univers et reste une figure majeure du rap hardcore, capable aussi de tubes plus ouverts comme 'Tchoin'.",
        albums: [
            {
                titre: "TONNANO", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d64b0b06d7b2f1eefd1322bd",
                category: "single", tracks: ["TONNANO"]
            },
            {
                titre: "GOAL VOLANT", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27395dcf71a9c830ea0cb649bbb",
                category: "single", tracks: ["GOAL VOLANT"]
            },
            {
                titre: "SEVRAN", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27317d5fa61593c4b6f0093ea96",
                category: "single", tracks: ["SEVRAN (feat. Todiefor)"]
            },
            {
                titre: "D SUR D", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733a202f8b2ed7d11bffcafc49",
                category: "single", tracks: ["D SUR D (feat. TRIANGLE DES BERMUDES)"]
            },
            {
                titre: "C'EST NOUS LES YAYA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e3e7a33940af55db89949e34",
                category: "single", tracks: ["C'EST NOUS LES YAYA (feat. JKSN)"]
            },
            {
                titre: "Bambara Boy", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d74066632d6d429351516437",
                category: "single", tracks: ["Bambara Boy"]
            },
            {
                titre: "Number One", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ec86ad5cd05e8428d5e19431",
                category: "single", tracks: ["Number One (feat. Intouchable, Dry)"]
            },
            {
                titre: "CÔTÉ PASSAGER", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27330589549a333d766d23cb38b",
                category: "single", tracks: ["CÔTÉ PASSAGER (feat. Sneazzy)"]
            },
            {
                titre: "Z.E.R.O", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27392c95d3cc8febc77abcc284e",
                category: "project", tracks: ["Intro Ram Muay", "Houdini", "L'hote funeste", "Bon qu'à ça", "L'œil du mur", "Lourd Lourd", "Le legiste", "Cayman", "Hémophiles", "Un caillou sur la langue", "Super nova"]
            },
            {
                titre: "Rien ne se remplace", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b461ed8afc9d810582a99cbd",
                category: "single", tracks: ["Rien ne se remplace (feat. Ziak)"]
            },
            {
                titre: "REPRÉSAILLES (feat. Kaaris)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27372134c4301f8e16b5fa6b7f8",
                category: "feat", tracks: ["REPRÉSAILLES (feat. Kaaris)"]
            },
            {
                titre: "ENNEMIS D'ETAT ft. Kaaris", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731a1f327267ccd3cb9fbf2967",
                category: "feat", tracks: ["ENNEMIS D'ETAT ft. Kaaris (feat. Sazamyzy)"]
            },
            {
                titre: "Velar", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273603637f5e47956572774f619",
                category: "single", tracks: ["Velar (feat. Sicario78)"]
            },
            {
                titre: "QUÉ LO QUE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734221c9f7ccb4e3f69e03ade4",
                category: "single", tracks: ["QUÉ LO QUE (feat. ElGrandeToto)"]
            },
            {
                titre: "Casamigos", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f5520a71d4ebd45f7b0b6fad",
                category: "single", tracks: ["Casamigos (feat. Jok'air, Ogee)"]
            },
            {
                titre: "Enlève tes pes-sa (feat. JKSN, Kaaris & La Mano 1.9)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f9190b50eb2095e861de1b2c",
                category: "single", tracks: ["Enlève tes pes-sa (feat. JKSN, Kaaris & La Mano 1.9)"]
            },
            {
                titre: "Matata", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27339208aefc283966539cd1e7a",
                category: "single", tracks: ["Matata (feat. Vegedream, Kerchak)"]
            },
            {
                titre: "Clique", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737af774cb1c2304dff0021600",
                category: "single", tracks: ["Clique"]
            },
            {
                titre: "MAUVAIS PAYEUR", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732472cd14b172ef852667d0cc",
                category: "single", tracks: ["MAUVAIS PAYEUR (feat. Fresh)"]
            },
            {
                titre: "Zoo (Rave Edit)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b6e328a40fd6eb8b80aef7c5",
                category: "single", tracks: ["Zoo - Rave Edit (feat. Vladimir Cauchemar, AIROD)"]
            },
            {
                titre: "Day One", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273320e2cbe61937f598b904ec4",
                category: "project", tracks: ["Dans la fusée", "Pangara (feat. Koba LaD)", "Tu parles un peu trop", "Favela", "Hé Bélébé", "Automatic (feat. SCH)", "War", "Le prix de la réussite", "Mirador", "Benef", "Paro", "Celtics", "Gros salaire", "Panama (feat. Hamza)", "Mobalpa", "Fuck la vie d’avant (feat. Kerchak)", "Tête brûlée"]
            },
            {
                titre: "On est prêt", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737b82c4c78b29caa85897baa7",
                category: "single", tracks: ["On est prêt (feat. Vegedream)"]
            },
            {
                titre: "Train d'enfer", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c0bb3420f3a042488c1f8ce5",
                category: "single", tracks: ["Train d'enfer (feat. Du Nord au Sud, Beendo Z)"]
            },
            {
                titre: "Rorschach", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c85e6f1efe25914cae407cba",
                category: "single", tracks: ["Rorschach"]
            },
            {
                titre: "Mobalpa", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27324994232cc98a4af8d5ce89f",
                category: "single", tracks: ["Mobalpa"]
            },
            {
                titre: "Une Autre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739e0392cc81d8ee3f4ed93f0d",
                category: "single", tracks: ["Une Autre (feat. Koba LaD)"]
            },
            {
                titre: "Flex (feat. Kaaris)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273003d6594947d5d2ddedd2f6f",
                category: "feat", tracks: ["Flex (feat. Kaaris)"]
            },
            {
                titre: "Tchernobyl", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27377d28d6c766510ff587317cc",
                category: "single", tracks: ["Tchernobyl (feat. Caballero & JeanJass)"]
            },
            {
                titre: "Faut j'la quitte", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735f13057c25c378831ca8ddbb",
                category: "single", tracks: ["Faut j'la quitte (feat. Tagne)"]
            },
            {
                titre: "BORZ", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ec41ac3b955f1e0a84e9674e",
                category: "single", tracks: ["BORZ"]
            },
            {
                titre: "Pena Duro", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27313166278bd1fcda5f042f067",
                category: "single", tracks: ["Pena Duro"]
            },
            {
                titre: "Le roi des ombres (Extrait de la BO 'Le roi des ombres')", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273eb60c74793033deff769ac00",
                category: "single", tracks: ["Le roi des ombres - Extrait de la BO 'Le roi des ombres'"]
            },
            {
                titre: "Double K", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ee8ff1f819d0d597a7997fbd",
                category: "single", tracks: ["Double K (feat. Kerchak)"]
            },
            {
                titre: "Binks", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c6aa2f8b0edce5043da6dbc9",
                category: "single", tracks: ["Binks (feat. DJ Flextouch)"]
            },
            {
                titre: "VVS", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730b61b19e24e30c9be42334f2",
                category: "single", tracks: ["VVS (feat. Naps, Kalash Criminel)"]
            },
            {
                titre: "SVR", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a5aae82f65dcb67a0126ab55",
                category: "project", tracks: ["C'est nous les O.G (feat. Kalash Criminel)", "Les abymes (feat. Kalash Criminel)", "Tu dois des sous (feat. Kalash Criminel)", "Tchalla (feat. Kalash Criminel)", "Sur le banc (feat. Kalash Criminel)", "Shooter (feat. Kalash Criminel)", "Angle mort (feat. Kalash Criminel)", "Apocalypse (feat. Kalash Criminel, Freeze corleone)", "Goudronné (feat. Kalash Criminel)", "King Von (feat. Kalash Criminel)", "BBL (feat. Kalash Criminel)", "Balistique (feat. Kalash Criminel)", "Tous les jours (feat. Kalash Criminel)", "Barillet (feat. Kalash Criminel)", "Fiché S (feat. Kalash Criminel)"]
            },
            {
                titre: "Apocalypse", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dbeecdbf177c29950bfae8a1",
                category: "single", tracks: ["Apocalypse (feat. Kalash Criminel, Freeze corleone)"]
            },
            {
                titre: "Tu dois des sous", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27356b39abf3d496cd1e6cfd491",
                category: "single", tracks: ["Tu dois des sous (feat. Kalash Criminel)"]
            },
            {
                titre: "Tchalla", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bd8d650bbaa493436b84816a",
                category: "single", tracks: ["Tchalla (feat. Kalash Criminel)"]
            },
            {
                titre: "La fille du marin", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273929cdeaf4fd666f5bf8c79f9",
                category: "single", tracks: ["La fille du marin (feat. H Magnum)"]
            },
            {
                titre: "Les galactiques", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731f084808b96334566ab3e923",
                category: "single", tracks: ["Les galactiques (feat. Rohff, Soso Maness, Jul, Naps, GIMS, Alonzo, Le classico organisé)"]
            },
            {
                titre: "Hallyday", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27332bf7b12b1b24a6c29e47773",
                category: "single", tracks: ["Hallyday"]
            },
            {
                titre: "2.7.0 : Château Noir", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730131d4baaa39b42e106d2148",
                category: "project", tracks: ["Equipage", "Top", "Château noir", "Monte Carlo", "Akrapovic", "SE", "2363", "Rif", "Rosé", "Merci", "Pégase", "Ultra", "Mandalorian", "Goulag", "Sosa", "NRV", "Deux Deux (feat. Bosh)", "Illimité", "Piquée (feat. Dadju)", "Moula Moula", "Tout est prêt (feat. Sid les 3 Élements)", "Guedro", "1er coeur (feat. GIMS)", "Bope", "Valhalla", "Big Riska", "Lumière (feat. Imen Es)", "Réussite", "Freestyle 2.7.0", "IRM (feat. Freeze corleone)", "Five O (feat. Gazo)"]
            },
            {
                titre: "Château Noir", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735bf5bff52492a595d9fc7e82",
                category: "single", tracks: ["Château noir"]
            },
            {
                titre: "soldat tue soldat", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739b17f5ed39f92e7af41fbcc1",
                category: "single", tracks: ["soldat tue soldat (feat. Alpha Wann, Infinit')"]
            },
            {
                titre: "Five O", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27356077c85dee1ce35070f469d",
                category: "single", tracks: ["Five O (feat. Gazo)"]
            },
            {
                titre: "Comme le père à Malcolm (Extrait du projet Art de rue)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f3eba710a43eff0aa769a638",
                category: "single", tracks: ["Comme le père à Malcolm"]
            },
            {
                titre: "2.7.0", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27334f64fb78e146d724b8c09f8",
                category: "project", tracks: ["Ultra", "Mandalorian", "Goulag", "Sosa", "NRV", "Deux Deux (feat. Bosh)", "Illimité", "Piquée (feat. Dadju)", "Moula Moula", "Tout est prêt (feat. Sid les 3 Éléments)", "Guedro", "1er coeur (feat. GIMS)", "Bope", "Valhalla", "Big Riska", "Lumière (feat. Imen Es)", "Réussite", "Freestyle 2.7.0", "IRM (feat. Freeze corleone)", "Five O (feat. Gazo)"]
            },
            {
                titre: "Illimité", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273adb5585253a0822c3a1d191d",
                category: "single", tracks: ["Illimité"]
            },
            {
                titre: "Freestyle 2.7.0", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27316c8a842aac8e8b61edff45e",
                category: "single", tracks: ["Freestyle 2.7.0"]
            },
            {
                titre: "NRV", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27305b966a22eecbd2749729bd9",
                category: "single", tracks: ["NRV"]
            },
            {
                titre: "Goulag", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27339f93403374d1f1cf02cd60d",
                category: "single", tracks: ["Goulag"]
            },
            {
                titre: "Mauvais garçon (Remix)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b70882213cefcefbdb294130",
                category: "single", tracks: ["Mauvais garçon - Remix (feat. Franglish)"]
            },
            {
                titre: "Omega", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27388668e2affd1969c634df7ff",
                category: "single", tracks: ["Omega"]
            },
            {
                titre: "Bla-Bla (Extrait du projet Game Over Volume 2)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273741c99c39f901c7cf15030cf",
                category: "single", tracks: ["Bla-Bla"]
            },
            {
                titre: "Vamos", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ffe9ca15e335f70a3b27bdb0",
                category: "single", tracks: ["Vamos (feat. SKY)"]
            },
            {
                titre: "Or Noir Part 3", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27352b49b3824fe3d24b9dc50ff",
                category: "project", tracks: ["Chien de la casse", "Monsieur météo", "Briganté (feat. Mac Tyer, Sofiane)", "Gun salute", "Golf7 r", "Livraison", "Aieaieouille", "Débrouillard", "Détails", "Ca on la", "Cigarette (feat. SCH)", "Tout était écrit", "Dévalisé", "Douane", "Comme un refrain", "Octogone", "Exo Planète", "Plans", "Tauro", "Key less", "Guzman (feat. DA Uzi)", "Zumba noir (feat. Lartiste)", "After"]
            },
            {
                titre: "Aieaieouille", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27332e807856ac44773ef099daf",
                category: "single", tracks: ["Aieaieouille"]
            },
            {
                titre: "Débrouillard", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e48489c4b829069592420689",
                category: "single", tracks: ["Débrouillard"]
            },
            {
                titre: "Livraison", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273969dace20e431008b488b583",
                category: "single", tracks: ["Livraison"]
            },
            {
                titre: "Empire (Extrait du projet 93 Empire)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273c1cfe438fa97ab3545f23fa9",
                category: "single", tracks: ["Empire (feat. Sofiane)"]
            },
            {
                titre: "Aborigène", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736665bc5995988cc65818401c",
                category: "single", tracks: ["Aborigène"]
            },
            {
                titre: "Diarabi", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273502929c4bb691590705fefb7",
                category: "single", tracks: ["Diarabi - Remix (feat. Fler)"]
            },
            {
                titre: "G.O.K.O.U", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273781c7a35e4e4e8b37c4cc996",
                category: "single", tracks: ["G.O.K.O.U"]
            },
            {
                titre: "Dozo", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273bae4b271924a2d75fa0be594",
                category: "project", tracks: ["Dozo", "Marchand d’ivoire", "Feghouli", "Menace", "Mood", "Je suis gninnin, je suis bien", "Pas idée", "Kébra", "Diarabi", "Végéta", "Oublier", "Être deux", "RPG", "Courez", "Bling Bling (feat. Kalash Criminel, Sofiane)", "Victoire"]
            },
            {
                titre: "Kébra", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273b879c9cc6634277cefd4ea00",
                category: "single", tracks: ["Kébra"]
            },
            {
                titre: "Okou Gnakouri", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b79886172963a2e96b4c6b18",
                category: "project", tracks: ["Le sang", "Blow", "Benz", "Boyz N The Hood", "Jack Uzi", "2 bigos", "Tchoin", "Nador", "Poussière", "Contact", "2.7 Zéro 10. 17 (feat. Gucci Mane)", "T’étais où", "4Matic (feat. Kalash Criminel)", "J'suis perché", "Chaos"]
            },
            {
                titre: "Bambou", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2736e3c43cdd5969e4706c490bd",
                category: "single", tracks: ["Bambou"]
            },
            {
                titre: "Double Fuck", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b27348f1b60220c639cb642ee287",
                category: "project", tracks: ["Sinaloa", "Terrain", "Demarrage Hold Up", "Petit velo", "Briller", "C'est la base (feat. XVBarbar)", "Talsadoum", "Tieks", "H", "Audemard m'a tue", "Gringo (feat. Bakyl)", "Où sont les € (feat. SCH, Worms-T)", "Finition (feat. PSO THUG)", "Recharge", "D.K", "Double Fuck"]
            },
            {
                titre: "Le bruit de mon âme", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273f2477bfbbb4e53e349075a1b",
                category: "project", tracks: ["Kadirov", "Se-vrak", "Four", "80 ZETREI", "El Chapo (feat. Lacrim)", "Zone de transit", "Trap", "Crystal (feat. Future)", "Tripoli", "Magnum", "Vie sauvage (feat. 13 Block)", "Le bruit de mon âme", "Les oiseaux", "Mentalite cailleras", "Comme Gucci Mane", "Voyageur (feat. Blacko)", "Situation (feat. Ixzo, Solo Le Mythe)", "Le temps"]
            },
            {
                titre: "Les mains dans l'dos (Bande originale du film \"FastLife\")", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273e5c51e37119a66cb3b5f5be9",
                category: "single", tracks: ["Les mains dans l'dos"]
            },
            {
                titre: "Or Noir Part 2 (Deluxe)", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2736fc9c7333a46c9ba2ea86326",
                category: "project", tracks: ["Bizon", "Zoo", "Ciroc", "MBM", "Binks", "Je Bibi", "Bouchon De Liège", "Paradis Ou Enfer", "L.E.F (feat. Booba)", "Dès Le Départ", "Pas De Remède", "63", "Bébé", "Plus Rien", "Or Noir", "Tu Me Connais", "2 Et Demi", "Intro", "Sombre", "S.E.V.R.A.N", "Comment Je Fais", "A L'Heure", "Juste", "Chargé", "Pablito", "Killé", "Je Remplis L'Sac", "A La Barrière"]
            },
            {
                titre: "Or Noir", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273da0023a4d04839eb69cf2521",
                category: "project", tracks: ["Bizon", "Zoo", "Ciroc", "MBM", "Binks", "Je Bibi", "Bouchon De Liège", "Paradis Ou Enfer", "L.E.F (feat. Booba)", "Dès Le Départ", "Pas De Remède", "63", "Bébé", "Plus Rien", "Or Noir", "Tu Me Connais", "2 Et Demi", "A La Barrière"]
            },
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
        bio: "Le Padre du Rap Game. Rappeur technique et puissant, fierté du 94.",
        bioLongue: "Rohff, ou Housni Mkouboi, est l'un des piliers du rap français des années 2000. Membre de la Mafia K'1 Fry, il est reconnu pour sa technique irréprochable, sa voix puissante et son flow agressif. Avec des classiques comme 'Le Code de l'Horreur' ou 'La Fierté des Nôtres', il a incarné le rap de rue dans sa forme la plus noble et la plus hardcore.",
        albums: [
            {
                titre: "Noirabe", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27367d574e513c36084dce559c8",
                category: "single", tracks: ["Noirabe"]
            },
            {
                titre: "Madame", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273898c8e02a7e79d69a3696f35",
                category: "single", tracks: ["Madame (feat. Lyna Mahyem)"]
            },
            {
                titre: "Ma nature", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d7483514e7b2d5d0581269cc",
                category: "single", tracks: ["Ma nature"]
            },
            {
                titre: "Tout droit", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fccb0ea9d05fabc8192c0ccc",
                category: "single", tracks: ["Tout droit"]
            },
            {
                titre: "Hima", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736034cbaf93009dbf223da979",
                category: "project", tracks: ["Hima (feat. Soprano, SAF, Says'z, Elams, Patsaou, Goulam, Vincenzo)", "Hima - Version longue (feat. Soprano, SAF, Says'z, Elams, SP, Patsaou, Goulam, Vincenzo, Mombi, La diva samra, Ikbal, Cheikh MC, Naid, Fahar, IKBINKS, Starcé, Lebeey, Said como)"]
            },
            {
                titre: "Sauver le rap", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27379b4d56c592045723d8a9ed5",
                category: "single", tracks: ["Sauver le rap"]
            },
            {
                titre: "Tout éteindre", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fd875b1ee3543bf01b2b6fae",
                category: "single", tracks: ["Tout éteindre"]
            },
            {
                titre: "Despee '98", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27319fe19c0005fa7a5aad24d98",
                category: "single", tracks: ["Despee '98 (feat. DJ Mehdi)"]
            },
            {
                titre: "Fitna", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eacd1961a17914ab7562b133",
                category: "project", tracks: ["Guerrier", "Leader", "Légitime (feat. Le Rat Luciano, Lino (South Korea))", "Walking dead", "Respect", "À ma juste valeur (feat. Lyna Mahyem)", "Mère seule", "Ogee", "Loyauté", "Fraude (feat. Intouchable, AP du 113)", "Mes flammes", "NotoriHous (feat. Big Ali)", "Cardio", "Reste concentré (feat. Chil-p)", "Sorti de la zone", "Stabilise", "Fitna"]
            },
            {
                titre: "À ma juste valeur", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27383b8d31102e66e5e86a2f58e",
                category: "single", tracks: ["À ma juste valeur (feat. Lyna Mahyem)"]
            },
            {
                titre: "Reste concentré", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738487cbcafb84fbedc844d59a",
                category: "single", tracks: ["Reste concentré (feat. Chil-p)"]
            },
            {
                titre: "Légitime", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27321269e9aa02c6dd1c29fcfb3",
                category: "single", tracks: ["Légitime (feat. Le Rat Luciano, Lino)"]
            },
            {
                titre: "Cardio", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27321e043f2bb3a71b8371f3c3e",
                category: "single", tracks: ["Cardio"]
            },
            {
                titre: "Fraude", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f827a02d250891a9e2d157a4",
                category: "single", tracks: ["Fraude (feat. AP du 113, Intouchable)"]
            },
            {
                titre: "Loyauté", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273107c86a280ee0266531e6e1a",
                category: "single", tracks: ["Loyauté"]
            },
            {
                titre: "NotoriHous", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273717afe2b04f54874474addab",
                category: "single", tracks: ["NotoriHous (feat. Big Ali)"]
            },
            {
                titre: "Masterclass", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f8941a1d3f5f555d1e868bb3",
                category: "single", tracks: ["Masterclass"]
            },
            {
                titre: "Life Style", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d8bf373aac111e3a691e8f49",
                category: "single", tracks: ["Life Style"]
            },
            {
                titre: "Dansa", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733652ba34e0413e326a47f493",
                category: "single", tracks: ["Dansa (feat. DJ Hamida, Ricky Rich)"]
            },
            {
                titre: "Je suis l'94", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c11b9568cfb235b27ea873f4",
                category: "single", tracks: ["Je suis l'94 (feat. VAL DE RAP, Fresh laDouille, Alain 2 L'Ombre, Dex)"]
            },
            {
                titre: "Grand Monsieur", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27311a0c55b4e42e093adbb82a8",
                category: "project", tracks: ["GM10", "Classic Man", "Legend (feat. Jul)", "Hall of Fame", "Trop d'histoires", "Chacun son heure", "Apaise ton coeur (feat. Imen Es)", "Fake Love", "Official (feat. Tayc)", "Tout passe", "Ne me juge pas", "Raisonner", "ComoReine (feat. Goulam)", "Génération ROH2F", "Mortier (feat. Guè)", "Flemme", "L'Expérience (feat. GIMS)", "Antibiotique (feat. Naps)", "Poésie du Uzi", "Sécurisé (feat. Dadju)", "Ça bouge pas", "Enemy", "WessWess", "Mandat de dépôt", "Valeur inversée", "Le bilan"]
            },
            {
                titre: "Official", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27373eb5ed7c7143ae545d40fd9",
                category: "single", tracks: ["Official (feat. Tayc)"]
            },
            {
                titre: "Antibiotique", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cdcd48b3c79baf9f72a2e13c",
                category: "single", tracks: ["Antibiotique (feat. Naps)"]
            },
            {
                titre: "Legend", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d17a351fd9999e52c4a29d69",
                category: "single", tracks: ["Legend (feat. Jul)"]
            },
            {
                titre: "Les galactiques", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731f084808b96334566ab3e923",
                category: "single", tracks: ["Les galactiques (feat. Kaaris, Soso Maness, Jul, Naps, GIMS, Alonzo, Le classico organisé)"]
            },
            {
                titre: "Yowa", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27306f1effa917bf310923dbddc",
                category: "single", tracks: ["Yowa (feat. Elams)"]
            },
            {
                titre: "Enemy", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730ccef38565eb4a473d1941a8",
                category: "single", tracks: ["Enemy"]
            },
            {
                titre: "La patrie (feat. Says'z, Elams, Cheikh MC, Goulam, Vincenzo, Fahar, Starcé, Samra)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e7efa23c90c4b30f5b537355",
                category: "single", tracks: ["La patrie (feat. Says'z, Elams, Cheikh MC, Goulam, Vincenzo, Fahar, Starcé, Samra)"]
            },
            {
                titre: "#Douxbail", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733843e0c405f9c82e8a31aef2",
                category: "single", tracks: ["#Douxbail"]
            },
            {
                titre: "Sécurisé", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2734e4a730f5f025198f6912116",
                category: "single", tracks: ["Sécurisé (feat. Dadju)"]
            },
            {
                titre: "Isolé", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a93413edc82e9dedde214ae3",
                category: "single", tracks: ["Isolé (feat. H Magnum)"]
            },
            {
                titre: "GOAT", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739f83b947005153a753127cb7",
                category: "single", tracks: ["GOAT"]
            },
            {
                titre: "Tous à l'abri", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736698cf294edb3921d3d3b866",
                category: "single", tracks: ["Tous à l'abri"]
            },
            {
                titre: "Solo", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735a95518576b34483031aec22",
                category: "single", tracks: ["Solo"]
            },
            {
                titre: "T’as capté", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273395a55b34ba0be60608bd1b1",
                category: "single", tracks: ["T’as capté"]
            },
            {
                titre: "Surnaturel", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273b8b3c91b324c11509275f972",
                category: "project", tracks: ["#SNTL", "#Rohffback", "Persona non Grata (feat. Niro)", "La force", "Français 2.0 (feat. Leck)", "Au max", "Aime moi à l'imparfait", "Fille bien", "Cadeaux de l'éternel", "Toutes les douleurs", "Malsain", "J'ai passé l'âge", "TeamRohff & honneur", "Street crédibilité", "Testament II", "J'arrache tout", "Frérot 2.0", "9+4=13 (feat. Guirri Mafia)", "Meurtrier", "À la zonmai", "Du love (feat. Nassi)", "Combien tu coûtes", "Fin du monde", "Happy", "Ma vie", "Loup solitaire", "Sérieux", "Dr Dre", "Trop de fierté", "Égal à moi-même"]
            },
            {
                titre: "J'arrache tout", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2731842e9a7fc938a07884bf3a8",
                category: "single", tracks: ["J'arrache tout"]
            },
            {
                titre: "La force", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2738905741cea1dcdb1eed41cab",
                category: "single", tracks: ["La force"]
            },
            {
                titre: "Hors de prix", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273eb7ede10e3606bee6de14230",
                category: "single", tracks: ["Hors de prix"]
            },
            {
                titre: "Dans le vrai", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27375d086abf12af1e39d791a66",
                category: "single", tracks: ["Dans le vrai"]
            },
            {
                titre: "Détrôné", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2739d4f1de5cde4fb0463fb4718",
                category: "single", tracks: ["Détrôné (feat. Nej)"]
            },
            {
                titre: "Soldat", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273606cdd5d397a48be2eec8a7b",
                category: "single", tracks: ["Soldat"]
            },
            {
                titre: "Broly", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27343d9015e8d1bee6442be75a1",
                category: "single", tracks: ["Broly"]
            },
            {
                titre: "Saturne", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2739573c5e8d9aaca0fc292800e",
                category: "single", tracks: ["Saturne"]
            },
            {
                titre: "J'te donne même pas l'heure (R1000)", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2735f8739287ff002b2269144df",
                category: "single", tracks: ["J'te donne même pas l'heure (R1000) (feat. I.K, Alain 2 L'Ombre)"]
            },
            {
                titre: "Hors de contrôle", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2732331d21182186d3043cb6782",
                category: "single", tracks: ["Hors de contrôle"]
            },
            {
                titre: "Culture UrbHaine", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27399f4f3fd038c430abfd96954",
                category: "single", tracks: ["Culture UrbHaine"]
            },
            {
                titre: "La monnaie de la pièce", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2737497a6d898c7333a37dfc0e1",
                category: "single", tracks: ["La monnaie de la pièce"]
            },
            {
                titre: "Dans le game", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273ef61855ac217755eb1b3b276",
                category: "single", tracks: ["Dans le game"]
            },
            {
                titre: "Le Rohff Game", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273385d7b9f3d22a60c266a7efc",
                category: "project", tracks: ["Comme en 46", "Rohff Game", "La crème de la crème (feat. Lacrim)", "Vrai reconnait vrai", "Star", "O top", "Ils nous connaissent pas", "Bijou (feat. Awa Imani)", "Bitch n'a pas de coeur", "Trop gang (feat. Lkaiss)", "Vitry Sur Haine", "Les anciens", "My Nigga My Rebeu", "Le coup du siècle (feat. La Hyène, Alain 2 L'Ombre)", "L'appât du gain", "L'argent parle", "AK 47 monologue", "Street Bourgeoisie", "La famille"]
            },
            {
                titre: "Sans forcer", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b27369838b3aed8859c184f39f29",
                category: "single", tracks: ["Sans forcer"]
            },
            {
                titre: "Suge Knight", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273cf45bd6a2bdddd5c6cb71dab",
                category: "single", tracks: ["Suge Knight"]
            },
            {
                titre: "Du sale", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2731447c7d46288c959a3562131",
                category: "single", tracks: ["Du sale"]
            },
            {
                titre: "Soleil (Radio Edit)", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273147a373f180a241eb5bf7cda",
                category: "single", tracks: ["Soleil - Radio Edit"]
            },
            {
                titre: "P.D.R.G. (Pouvoir, Danger, Respect & Game)", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273438e32d475f9326188659d34",
                category: "project", tracks: ["King", "P.D.R.G", "Maudit", "Instable", "Futurs nouveaux amis", "Interlude Tu vois de qui j'parle", "Zlatana", "Ti amo t'es à moi (feat. Amel Bent)", "J'accélère", "L'Oseille", "N double a", "Mon son", "Interlude La Voix du ter-ter", "Embrouille (feat. TLF)", "K-sos Musik", "Rap jeux", "El padre", "Déterminé", "Interlude En mode 1 en mode 2", "En mode 3", "#TeamRohff", "Zga", "Différent", "L'Artiste", "J'assume", "Dounia", "Doggy Style"]
            },
            {
                titre: "Dounia", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2730263704d6ec44e757be411f5",
                category: "single", tracks: ["Dounia"]
            },
            {
                titre: "K-sos Musik", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b27305ff3b89aa2145367bc38bcc",
                category: "single", tracks: ["K-sos Musik"]
            },
            {
                titre: "La cuenta [Edition Deluxe]", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273b75cfa8a1923428bb28391e9",
                category: "project", tracks: ["C'est comment?", "Rien à prouver", "Next Level (feat. Wynter Gordon)", "On va le faire", "Tu pardonneras (feat. Jena Lee)", "Qui veut ma peau? (feat. Nicky B.)", "On fait le taf", "Thug Mariage - feat. Indila (feat. Indila)", "Célibatard (feat. JMi Sissoko)", "Loup 2 la classe", "La cuenta (feat. Lumidee)", "Fais doucement (feat. Zaho)", "Trafiquant 2 classic", "Dans ma werss", "Fais-moi la passe (feat. Karim Benzema)", "On peut pas tout avoir (feat. La Fouine)", "Les Choses simples", "Revers de la médaille", "Rohffvolution", "Machine de guerre", "Anticonformiste", "Dans tes yeux", "Dans ma werss - Version longue", "Animal (feat. Francisco L.Correa)"]
            },
            {
                titre: "La cuenta", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b2737ffd0cef6cd2154079b79929",
                category: "project", tracks: ["C'est comment?", "Rien à prouver", "Next Level (feat. Wynter Gordon)", "On va le faire", "Tu pardonneras (feat. Jena Lee)", "Qui veut ma peau? (feat. Nicky B.)", "On fait le taf", "Thug Mariage - feat. Indila (feat. Indila)", "Célibatard (feat. JMi Sissoko)", "Loup 2 la classe", "La cuenta (feat. Lumidee)", "Fais doucement (feat. Zaho)", "Trafiquant 2 classic", "Dans ma werss", "Fais-moi la passe (feat. Karim Benzema)", "On peut pas tout avoir (feat. La Fouine)", "Les Choses simples", "Revers de la médaille"]
            },
            {
                titre: "Rien à prouver", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b2730d0b3b4e188d06e0ed3ee495",
                category: "single", tracks: ["Rien à prouver"]
            },
            {
                titre: "Dans tes yeux", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b2731d8d8a114d2c355ff152c91e",
                category: "single", tracks: ["Dans tes yeux"]
            },
            {
                titre: "Dans Ma Werss", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273fb12c23a992746970ce27989",
                category: "single", tracks: ["Dans ma werss"]
            },
            {
                titre: "Animal", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273ba20f49f531c47f8f6b820ff",
                category: "single", tracks: ["Animal (feat. Francisco L.Correa)"]
            },
            {
                titre: "Salamoualikoum", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273c5a0d586992d9b12361bb978",
                category: "single", tracks: ["Salamoualikoum"]
            },
            {
                titre: "Magnifique [Remix] (Remix Version)", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b273169336c9c000bdd03ef17386",
                category: "feat", tracks: ["Magnifique - Remix Koudjo (feat. Rohff - (15 Minutes Ago) Cassandra)"]
            },
            {
                titre: "Le Code De L'horreur [Exclu SFR]", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273b297ef237928ae1d8698f356",
                category: "project", tracks: ["Rap Game", "J'arrive", "L'Expression du malaise", "K-Sos for Life", "Repris de justesse", "Sans amour (feat. Speedy)", "Si seul (feat. Rohff - Wallen)", "Hysteric love (feat. Amel Bent)", "La Grande classe", "Que pour les vrais", "Paris", "Sévère", "Rien de spécial", "Progress (feat. Junior Reid)", "Pyromane", "Le Virus", "Testament", "Classique"]
            },
            {
                titre: "Le Code De L'horreur", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b2737173df1afabd5e267cb1e239",
                category: "project", tracks: ["Rap Game", "J'arrive", "L'Expression du malaise", "K-Sos for Life", "Repris de justesse", "Sans amour (feat. Speedy)", "Si seul (feat. Rohff - Wallen)", "Hysteric love (feat. Amel Bent)", "La Grande classe", "Que pour les vrais", "Paris", "Sévère", "Rien de spécial", "Progress (feat. Junior Reid)", "Pyromane", "Le Virus", "Testament", "Mal à la vie"]
            },
            {
                titre: "Rap Game", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b2730e2229a5b906bbe588367a91",
                category: "single", tracks: ["Rap Game"]
            },
            {
                titre: "La Grande Classe", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273c039329a04675fd9aeafca46",
                category: "single", tracks: ["La Grande classe"]
            },
            {
                titre: "Le Cauchemar Du Rap Francais", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b27320091d211100984d43763cf2",
                category: "project", tracks: ["Intro Dj Mosko (feat. DJ Mosko)", "N°1 (feat. DJ Mosko)", "94 mentale (feat. DJ Mosko, Kery James, Dragon Dravy)", "Baise tout (feat. DJ Mosko, I.K (TLF))", "Dirty hous (feat. Big Ali, DJ Mosko)", "Le pouvoir - remix (feat. DJ Mosko)", "Principes (feat. DJ Mosko)", "C'est comme ça (feat. DJ Mosko)", "La violence (feat. DJ Mosko)", "Gère (feat. DJ Mosko, Mze)", "La crise - Bonestyle Big Up (feat. DJ Mosko)", "Frais style radio 1 (feat. DJ Mosko)", "J't'ai pas attendu - remix (feat. DJ Mosko)", "Fumer 1 mec - remix (feat. DJ Mosko)", "Fais ce que j'te dis (feat. DJ Mosko)", "Avec ou sans (feat. DJ Mosko)", "Frais style radio 2 (feat. DJ Mosko)", "Frais style radio 3 (feat. DJ Mosko)", "Frais style radio 4 (feat. DJ Mosko)", "T'es pas comme moi (feat. DJ Mosko)", "Vitryfénomène (feat. DJ Mosko)", "C'est comme ça 2 (feat. DJ Mosko)", "Boycott (feat. DJ Mosko)", "Frais (feat. DJ Mosko)", "La puissance - remix (feat. DJ Mosko)", "Excuse-moi (feat. DJ Mosko)", "Frais style radio 5 (feat. DJ Mosko)", "Frais style radio 6 (feat. DJ Mosko)", "Enculé de ton clash - remix (feat. DJ Mosko)", "Premier sur le ghetto - remix (feat. DJ Mosko)", "On Sait Ki (feat. DJ Mosko, I.K (TLF))"]
            },
            {
                titre: "Dirty Hous'", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b273c4a726b518ed890ed0d188d0",
                category: "feat", tracks: ["Dirty Hous' (Classic) (feat. Rohff - Big Ali)"]
            },
            {
                titre: "La Résurrection", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b2739c1ef6a5bca81b42f98ad213",
                category: "single", tracks: ["La Résurrection"]
            },
            {
                titre: "Au-Delà De Mes Limites", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b273d8fc1ef6993fae9644bae76a",
                category: "project", tracks: ["Le Cauchemar du rap français", "La Puissance", "J'espère que", "Tout se paye", "Avec ou sans", "Dis mon nom (avec Jasmin Lopez)", "Génération Mac Gyver: La Débrouille (avec Ikbal Vockal et Alain 2 l'ombre)", "La Hass - Version 2", "Premier sur le ghetto", "Bol d'air (avec Vitaa , Jasmin Lopez)", "Le Pouvoir", "Le Temps passe", "Arrête ta flûte", "Starfuckeuze", "Relation de merde", "Intro", "Seul contre tous", "En mode 2", "La Violence", "Accepte-moi comme je suis", "Le Club des métaphores", "Trop dangereux", "Bonhomme (avec Ikbal Vockal)", "J't'ai pas attendu (avec Jam)", "Bonne journée", "Toujours", "Enculé de ton clash (avec Soundkail)", "Fumer un mec", "Regretté"]
            },
            {
                titre: "Premier Sur Le Ghetto", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b2730076da1e7e5ef7a8648b995d",
                category: "single", tracks: ["Premier sur le ghetto"]
            },
            {
                titre: "La Puissance", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b273e014358515ab63d63a2eb5fe",
                category: "single", tracks: ["La Puissance"]
            },
            {
                titre: "Charisme", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b2732e9019a58dfb4e6194d64cd5",
                category: "single", tracks: ["Charisme (avec Wallen) (feat. Wallen)"]
            },
            {
                titre: "Zone Internationale", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b27375caac6e8c266fd7cbff1b32",
                category: "single", tracks: ["Zone Internationale (Avec Roldan G. Rivero (Orishas) - Version Radio"]
            },
            {
                titre: "la fierte des notres", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b2733b138bbbce5cbbc9fb12bad7",
                category: "project", tracks: ["Intro - La fierté des nôtres", "Nouveau rap", "Le milieu", "La vie continue (avec Judy) (feat. Judy)", "Ça fait plaisir (avec Intouchable) (feat. Intouchable)", "Dur d'être peace (avec Janice) (feat. Janice)", "Pleure pas", "Pétrole (avec Kayna Samet) (feat. Kayna Samet)", "Trop d'énergie (avec Mohamed Lamine) (feat. Mohamed Lamine)", "Message à la racaille", "Le coeur d'un homme", "Souvenirs", "Charisme (avec Wallen) (feat. Wallen)", "Le son qui tue (avec Natty) (feat. Natty)", "Le son de la Hagra (avec Expression Direkt) (feat. Expression Direkt)", "Mal aimé (avec Kery James) (feat. Kery James)", "Fils à pap", "T'es pas comme moi", "Bling bling (avec Admiral T) (feat. Admiral T)", "Apparences trompeuses", "Sincère", "Toujours ton enfant", "Fiston (avec J Mi Sissoko) (feat. JMI SISSOKO)", "Pervertie", "Bollywood Style", "Zone internationale (avec Roldan G. Rivero) (feat. Roldan G. Rivero)", "94", "Le mot d'ordre", "Code 187 (avec K.Mel L'ancien, Alibi Montana & Sefyu) (feat. K Mel L'Ancien, Alibi Montana, Sefyu)", "Outro - J'rappe mieux que toi"]
            },
            {
                titre: "Le son qui tue (avec Natty)", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b273dc75719ecc9f0b4be5390763",
                category: "single", tracks: ["Le son qui tue (avec Natty) (feat. Natty)"]
            },
            {
                titre: "94", annee: "2004", cover: "https://i.scdn.co/image/ab67616d0000b2735181dbf1917a058ffb226de4",
                category: "single", tracks: ["94"]
            },
            {
                titre: "La vie avant la mort", annee: "2001", cover: "https://i.scdn.co/image/ab67616d0000b27370fdbc319df3b8d901e6a055",
                category: "project", tracks: ["L'Introhff", "Rohff", "Tdsi", "Sensation brave", "Miroir, miroir", "Rap info", "Qui est l'exemple ?", "Creuset 2 voyous", "Parfois... des fois....", "V", "Le Même quartier", "5, 9, 1 (feat. Assia)", "Ssem (feat. Dry - Rohff)", "Jeu 2 la mort", "Le Bitume chante (feat. Mafia K'1 Fry - Rohff - Tiwony)", "Darwah", "Interlude Chinoise"]
            },
            {
                titre: "qui est l'exemple ?", annee: "2001", cover: "https://i.scdn.co/image/ab67616d0000b273a84a360fbebbe74769a37a9b",
                category: "project", tracks: ["Qui est l'exemple ?", "Miroir, miroir", "Creuset 2 voyous", "Qui est l'exemple Instru"]
            },
            {
                titre: "Le code de l'honneur", annee: "1999", cover: "https://i.scdn.co/image/ab67616d0000b27364681a0aab71b6cfc0e83429",
                category: "project", tracks: ["Intro", "Appelle moi Rohff", "Catastrohff", "Rohff vs l'état", "Rohff vs l'état 2 (Opération vendetta)", "Apprends à vivre", "Skyrohff", "Le bal des voyous (feat. 113, OGB, La Sexion)", "Galaxy", "Les nerfs à vif (feat. Doudou Masta)", "Du fond du cœur (feat. Jmi Sissoko)", "Génération sacrifiée", "J'men bats les c... d'être une star", "Manimal (feat. Intouchable, Carlito, Dry)"]
            },
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
        bio: "Le poète du rap. Il a popularisé le genre avec finesse et vocabulaire.",
        bioLongue: "Claude M'Barali, alias MC Solaar, est l'une des premières stars du rap en France. Dès le début des années 90, il se distingue par une écriture littéraire, riche et poétique, loin des clichés du gangsta rap. Avec 'Prose Combat' ou 'Qui sème le vent récolte le tempo', il a prouvé que le rap pouvait être une forme de poésie moderne, touchant un public très large.",
        albums: [
            {
                titre: "Mistral gagnant", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739a796e49db945fdab29013fc",
                category: "single", tracks: ["Mistral gagnant (feat. Waxx)"]
            },
            {
                titre: "Caroline (Live)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27370d20d4396d866c3b9380756",
                category: "single", tracks: ["Caroline - Live (feat. Orchestre Philharmonique de Radio France, Issam Krimi, Hip Hop Symphonique)"]
            },
            {
                titre: "Ne pas m'aimer", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734c9874fbf47fff7b53cb69e1",
                category: "single", tracks: ["Ne pas m'aimer (feat. Oxmo Puccino)"]
            },
            {
                titre: "Nouveau western (Live Hip Hop Symphonique Saison 6)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730912c88e305c2f94f5fe8dff",
                category: "single", tracks: ["Nouveau western - Live Hip Hop Symphonique Saison 6 (feat. Orchestre Philharmonique de Radio France, Issam Krimi, Hip Hop Symphonique)"]
            },
            {
                titre: "Triptyque : Balade astrale", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fb55658b79bb1f46609692be",
                category: "project", tracks: ["Maitre de cérémonie", "Bénédictions (feat. Benjamin Epps)", "James Brown", "Le cœur d'abord (feat. Legendes Industries)", "Révolution (Industrielle)", "IA", "Benjamin B (feat. Jok'air)"]
            },
            {
                titre: "Bénédictions", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27379bfeca5cbc6939d0d4dc806",
                category: "single", tracks: ["Bénédictions (feat. Benjamin Epps)"]
            },
            {
                titre: "Benjamin B", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273103c59090c84756641a6672e",
                category: "single", tracks: ["Benjamin B (feat. Jok'air)"]
            },
            {
                titre: "Le cœur d'abord", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273811ccef64898572ad01c4f16",
                category: "single", tracks: ["Le cœur d'abord (feat. Legendes Industries, KronoMuzik)"]
            },
            {
                titre: "Triptyque: Éclats cosmiques", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734a25ff1f3edea65572011497",
                category: "project", tracks: ["Tout est vrai", "Cinéma", "Okay (feat. Marie-Flore)", "Dingue", "Mytho", "Candyman", "Himalaya"]
            },
            {
                titre: "Okay", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e4f5268faa25596447d09d7e",
                category: "single", tracks: ["Okay (feat. Marie-Flore)"]
            },
            {
                titre: "Triptyque : Lueurs célestes", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733347d6cbffd426700ffdf5fe",
                category: "project", tracks: ["Pierre-feuille", "On court", "Modernidad", "Big Data", "Ils dansent", "Carpe Diem", "Comptine"]
            },
            {
                titre: "Ils dansent", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273082a787ab1238c2a562b2690",
                category: "single", tracks: ["Ils dansent"]
            },
            {
                titre: "Pierre-feuille", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273df41c0ce17c6cd608dd38b7a",
                category: "single", tracks: ["Pierre-feuille"]
            },
            {
                titre: "Le départ", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a7bc1b6c23a94ff022f60b50",
                category: "single", tracks: ["Le départ (feat. Vianney)"]
            },
            {
                titre: "TOUT SE TRANSFORME. (Bande originale du film « Transformers : Rise of the Beasts »)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273633f378aa8b9062827d9c0bd",
                category: "single", tracks: ["TOUT SE TRANSFORME. - Bande originale du film « Transformers : Rise of the Beasts »"]
            },
            {
                titre: "Bons élèves", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273898eb471c0c7b5c415f57063",
                category: "single", tracks: ["Bons élèves (feat. Bigflo & Oli)"]
            },
            {
                titre: "Paradisiaque / Mc Solaar", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736ace20b0dd68a59294cbdb5c",
                category: "project", tracks: ["Intro", "Paradisiaque", "Gangster moderne", "Tournicoti", "Zoom", "Le sens de la vie", "Dakota", "Illico presto", "Les temps changent", "Daydreamin", "Les boys bandent", "Les pensées sont des flowers", "Wonderbra", "Le 11e choc", "Protège-tibia", "Quand le soleil devient froid", "Outro", "Onzième commandement", "Galaktika", "La 5ème saison", "Perfect", "Les songes", "La vie n'est qu'un moment", "Vigipirap", "Message de l'ange", "Nouvelle genèse", "Je me souviens", "L'argent ne fait pas le bonheur"]
            },
            {
                titre: "Géopoétique", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273513998b227320a879fc3085e",
                category: "project", tracks: ["Intronisation", "Sonotone", "L'attrape-nigaud", "Frozen Fire - Осторожно (feat. Julia Brite)", "Jane et Tarzan", "EKSASSAUTE", "La clé", "Les mirabelles", "Mephisto Iblis", "J.A.Z.Z - Kiffez l'âme (feat. Maureen Angot)", "Super Gainsbarre (feat. Maureen Angot)", "I Need Gloves", "Adam & Eve", "On se lève", "Zonmé des zombies (feat. Bambi Cruz)", "AIWA", "Géopoétique", "Pili-pili", "La venue du MC"]
            },
            {
                titre: "Zonmé des zombies", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273314cb10e2055b48bb60b39ae",
                category: "single", tracks: ["Zonmé des zombies (feat. Bambi Cruz)"]
            },
            {
                titre: "L'attrape-nigaud", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273440f05480df26d3282a752ca",
                category: "single", tracks: ["L'attrape-nigaud"]
            },
            {
                titre: "Sonotone", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273029182706e3a5d55dd680933",
                category: "single", tracks: ["Sonotone"]
            },
            {
                titre: "Clic clic", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b27390933554264bb7707520fd6b",
                category: "single", tracks: ["Clic clic - Dancehall Remix (feat. Black Jack)"]
            },
            {
                titre: "Solaar pleure", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b273be1669add26732828c95cb23",
                category: "single", tracks: ["Solaar pleure - Version symphonique"]
            },
            {
                titre: "Marche ou rêve (feat. Tom Fire)", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b2732d5c662065e7b99257682462",
                category: "single", tracks: ["Marche ou rêve (feat. Tom Fire)"]
            },
            {
                titre: "Solaar pleure, part. 2", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b2734a511aecee1e65f3320b2130",
                category: "single", tracks: ["Solaar pleure, part. 2"]
            },
            {
                titre: "Inch'allah", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b27338471f3b642e401e6cf4928a",
                category: "single", tracks: ["Inch'allah"]
            },
            {
                titre: "Magnum 567 (Pack contenant 3 albums de MC Solaar : Cinquième As, Mach 6 et Chapitre 7)", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273e166acf6111472051b407228",
                category: "project", tracks: ["Introdiction", "Solaar pleure", "Lève-toi et rap", "Les colonies", "Hasta la Vista Mi Amor! - Intro", "Hasta la Vista Mi Amor!", "La belle et le bad boy", "Arkansas", "Le cinquième as", "Baby Love", "Dégâts collatéraux", "RMI", "L'aigle ne chasse pas les mouches", "Playmate", "Si je meurs ce soir (feat. Black Jack)", "Solaar pleure - Version symphonique", "Hasta la Vista - Intro", "Hasta la Vista", "Samedi soir", "Introspection", "La vie est belle", "Hijo de Africa", "T'inquiète - Intro", "T'inquiète", "Guérilla", "Jumelles", "Jardin d'Eden", "Au pays de Gandhi", "J'connais mon rôle", "Cash Money", "Today Is a Good Day - Darina", "Souvenir", "Sauvez le monde", "Bling bling", "Ça me hante", "Intreau", "Carpe diem", "Paris samba", "Clic clic", "Da Vinci Claude", "In God We Trust", "Un coup d'œil dans le métro", "Si on t'demande", "Au clair de la Lune", "Non merci", "Sous les palmiers", "Mollah Solaar", "L'auberge du bouleau blanc", "Ben oui !", "Avec les loups", "Merci", "Impact avec le Diable", "Outro"]
            },
            {
                titre: "La Belle Et Le Bad Boy", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b2737b588d606641eabd643f7c90",
                category: "single", tracks: ["La Belle Et Le Bad Boy"]
            },
            {
                titre: "Chapitre 7 inédit", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273295039bd9cadff07b4d28bd5",
                category: "project", tracks: ["Intreau version longue", "Fais du sport"]
            },
            {
                titre: "Le Rabbi Muffin", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b2736003a8abad73aa4db8e6285d",
                category: "single", tracks: ["Le Rabbi Muffin"]
            },
            {
                titre: "Da Vinci Claude", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b2734a3a5e14252776df920a2e65",
                category: "single", tracks: ["Da Vinci Claude"]
            },
            {
                titre: "Chapitre 7", annee: "2007", cover: "https://i.scdn.co/image/ab67616d0000b273254600c2622d27fcc090c4f1",
                category: "project", tracks: ["Intreau", "Carpe Diem", "Paris Samba", "CLIC CLIC", "Da Vinci Claude", "In God We Trust", "Un Coup D'Œil Dans Le MÉtro", "Si On T'demande", "Au Clair De La Lune", "Non Merci", "Sous Les Palmiers", "Mollah Solaar", "L'auberge Du Bouleau Blanc", "Ben Oui !", "Avec Les Loups", "Merci", "Impact Avec Le Diable", "Outro"]
            },
            {
                titre: "Rmi", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b2734358bf9de673c4bc5c5e7bf1",
                category: "single", tracks: ["Rmi"]
            },
            {
                titre: "Mollah Solaar", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b27330f51b1b88117c1713bc5bec",
                category: "single", tracks: ["Mollah Solaar"]
            },
            {
                titre: "Hijo De Africa", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b273020b189052d6263eaeff76bd",
                category: "single", tracks: ["Hijo De Africa"]
            },
            {
                titre: "Hasta La Vista", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b27384ccc03bc6ae4c2fb9696505",
                category: "single", tracks: ["Hasta La Vista"]
            },
            {
                titre: "Au Pays De Gandhi", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b273a9f2de6abb348ad7fb04ed4c",
                category: "single", tracks: ["Au Pays De Gandhi"]
            },
            {
                titre: "Mach 6", annee: "2003", cover: "https://i.scdn.co/image/ab67616d0000b273452d9523db2801a162cb058f",
                category: "project", tracks: ["Introspection", "La vie est belle", "Hijo de Africa", "T'inquiète (Intro)", "T'inquiète", "Guérilla", "Jumelles", "Jardin d'Eden", "Au pays de Gandhi", "J'connais mon rôle", "Cash Money", "Today Is a Good Day - Darina", "Souvenir", "Sauvez le monde", "Bling bling", "Ça me hante"]
            },
            {
                titre: "Cinquième as", annee: "2001", cover: "https://i.scdn.co/image/ab67616d0000b273c1d96c321c15633fe7813893",
                category: "project", tracks: ["Introdiction", "Solaar pleure", "Lève-toi et rap", "Les colonies", "Hasta la Vista - Intro", "Hasta la Vista", "La belle et le bad boy", "Arkansas", "Baby Love", "Dégâts collatéraux", "RMI", "C'est ça que les gens veulent (feat. 9respect)", "L'aigle ne chasse pas les mouches", "Hiphopaloorap (feat. Don Xeré Delavega)", "Le cinquième as", "Playmate", "L'homme qui voulait trois milliards (feat. Bambi Cruz)", "Si je meurs ce soir (feat. Black Jack)"]
            },
            {
                titre: "Le tour de la question", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273e1581372935d71defa0fb164",
                category: "project", tracks: ["Nitro", "Zoom", "Dix de mes disciples", "Onzieme commandement", "La concubine de l'hémoglobine", "Paradisiaque", "Qui sème le vent récolte le tempo", "Tournicoti", "Séquelles", "Caroline", "Obsolète", "Quand le soleil devient froid", "Illico presto", "Gangster moderne", "Nouveau western", "La 5ème saison", "Bouge de là", "Victime de la mode", "Wonderbra", "Les temps changent", "Galaktika", "Dakota", "Les boys bandent", "Protège-tibia", "Les temps changent - Final"]
            },
            {
                titre: "Les temps changent", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b273f5b96822466b1a691c00de66",
                category: "single", tracks: ["Les temps changent"]
            },
            {
                titre: "Prose combat", annee: "1994", cover: "https://i.scdn.co/image/ab67616d0000b2736807044878b1cc7de32b0f99",
                category: "project", tracks: ["Aubade", "Obsolète", "Nouveau western", "À la claire fontaine", "Superstarr (feat. Derin Young)", "La concubine de l'hémoglobine", "Dévotion", "Temps mort", "L'NMIACCd'HTCK72KPDP (feat. Ménélik, Les Sages Poètes de la rue, Mc E Soon)", "Séquelles", "Dieu ait son âme (feat. Derin Young)", "À dix de mes disciples", "La fin justifie les moyens", "Relations humaines (feat. Bambi Cruz)", "Prose combat"]
            },
            {
                titre: "Qui sème le vent récolte le tempo", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b27361c035a6272f99308dadbe87",
                category: "project", tracks: ["Intro", "Qui sème le vent récolte le tempo", "Matière grasse contre matière grise", "Victime de la mode", "L'histoire de l'art", "Armand est mort", "Quartier nord", "Interlude", "À temps partiel", "Caroline", "La musique adoucit les mœurs", "Bouge de là - Part. 1", "Bouge de là - Part. 2", "Ragga Jam", "La devise", "Funky Dreamer"]
            },
            {
                titre: "Bouge de là", annee: "1991", cover: "https://i.scdn.co/image/ab67616d0000b2730c388d48ff0713bf3ec43e5f",
                category: "single", tracks: ["Bouge de là - Part. 1"]
            },
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
        bio: "Le groupe parisien qui a dominé les charts et marqué toute une génération.",
        bioLongue: "Collectif parisien composé de Gims, Lefa, Black M, Maska, Doomams, JR O Crom et Barack Adama, la Sexion d'Assaut a connu une ascension fulgurante au début des années 2010. Avec 'L'École des points vitaux' et surtout 'L'Apogée', ils ont enchaîné les tubes radio, réconciliant rap technique et mélodies pop, avant que ses membres ne se lancent dans des carrières solo à succès.",
        albums: [
            {
                titre: "L'Apogée à Bercy", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273dfd1c99b14c4a31e28d737c0",
                category: "project", tracks: ["Disque d'or - Live à Bercy 2012 (feat. Sexion d'Assaut)", "T'es bête ou quoi ? - Live à Bercy 2012 (feat. Sexion d'Assaut)", "A bout d'souffle - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Balader - Live à Bercy 2012 (feat. Sexion d'Assaut)", "J'ai pas les Loves - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Changement d'ambiance - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Breh - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Africain - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Casquette à l'envers - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Prévenez les haineux (feat. L.I.O Pétrodollars) - Live à Bercy 2012", "J'suis pas dans le Game (feat. Dr. Beriz) - Live à Bercy 2012", "Qui t'a dit - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Plus qu'un son - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Problèmes d'adultes - Live à Bercy 2012 (feat. Sexion d'Assaut)", "J'reste debout - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Paname allons danser - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Paris va bien - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Wati bon son (feat. Dry) - Live à Bercy 2012", "Sahbi - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Assez (feat. Dry) - Live à Bercy 2012", "Wati by Night - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Ma direction - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Désolé - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Wati House - Live à Bercy 2012 (feat. Sexion d'Assaut)", "Avant qu'elle parte - Live à Bercy 2012 (feat. Sexion d'Assaut)"]
            },
            {
                titre: "L'Apogée", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b27381e6951f23e0a64449c9e975",
                category: "project", tracks: ["Mets pas celle-là (feat. Sexion d'Assaut)", "Ma direction (feat. Sexion d'Assaut)", "Disque d'or (feat. Sexion d'Assaut)", "L'endurance (feat. Sexion d'Assaut)", "Melrose Place (feat. L.I.O Pétrodollars)", "Balader (feat. Sexion d'Assaut)", "Africain (feat. Sexion d'Assaut)", "Assez (feat. Dry)", "La tâche (feat. Sexion d'Assaut)", "J'suis pas dans le Game (feat. Dr. Beriz)", "Avant qu'elle parte (feat. Sexion d'Assaut)", "Rien de méchant (feat. H Magnum)", "A coeur ouvert (feat. Sexion d'Assaut)", "Paname allons danser (feat. Sexion d'Assaut)", "Wati House (feat. Sexion d'Assaut)", "- 75 degrés (feat. Sexion d'Assaut)", "J'reste debout (feat. Sexion d'Assaut)", "Cérémonie (feat. Dry)", "Prévenez les haineux (feat. L.I.O Pétrodollars)", "Problèmes d'adultes (feat. Sexion d'Assaut)", "En direct de la lune (feat. Sexion d'Assaut)", "Laissez-moi ivre (feat. Sexion d'Assaut)", "On t'a dit (feat. L.I.O Pétrodollars & L'Institut)"]
            },
            {
                titre: "Disque d'or", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b2736384b574b013ea3a91708e7a",
                category: "feat", tracks: ["Disque d'or (feat. Sexion d'Assaut)"]
            },
            {
                titre: "Avant qu'elle parte", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273a5c932a772ce37b093793bb5",
                category: "feat", tracks: ["Avant qu'elle parte (feat. Sexion d'Assaut)"]
            },
            {
                titre: "Raggamuffin (Sexion d'Assaut Remix)", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b2732f49564b8e7bf1bf3dbd94f7",
                category: "single", tracks: ["Raggamuffin - Sexion d'Assaut Remix (feat. Selah Sue, Sexion d'Assaut)"]
            },
            {
                titre: "Les Chroniques Du 75, En Attendant L'Apogée", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b273bf8b8e846aea2b70bd63eeac",
                category: "project", tracks: ["Paris va bien (feat. Sexion d'Assaut)", "Qui t'a dit (feat. Sexion d'Assaut)", "B.S.S. (feat. Sexion d'Assaut)", "Breh (feat. Sexion d'Assaut)", "Traqué (feat. Sexion d'Assaut)", "Vu la haine que j'ai (feat. Sexion d'Assaut)", "Ra-fall (feat. Sexion d'Assaut)", "Le relais (feat. Sexion d'Assaut)", "A.D. (feat. Sexion d'Assaut)", "A bout d'souffle (feat. Sexion d'Assaut)", "Pas d'chance (feat. Sexion d'Assaut)", "Black Shady, Pt. 2 (feat. Sexion d'Assaut)", "O'Brothers (feat. Sexion d'Assaut)", "Flow d'Killer (feat. Sexion d'Assaut)", "Cramponnez-vous (feat. Sexion d'Assaut)", "Mamadou (feat. Sexion d'Assaut)", "Instinct de survie (feat. Sexion d'Assaut)", "Boy's in the Hood (feat. Sexion d'Assaut)", "Noir (feat. Sexion d'Assaut)", "Plus qu'un son (feat. Sexion d'Assaut)"]
            },
            {
                titre: "Wati by night", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273b63e4e22f360a6aa0f336975",
                category: "feat", tracks: ["Wati by Night (feat. Sexion d'Assaut)"]
            },
            {
                titre: "L'école des points vitaux", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b27399d53d8504478066f858f544",
                category: "project", tracks: ["Intro (en résumé) (feat. Sexion d'Assaut)", "Casquette à l'envers (feat. Sexion d'Assaut)", "Mon gars sûr (feat. Sexion d'Assaut)", "L'école des points vitaux (feat. Sexion d'Assaut)", "Ils appellent ça (feat. Sexion d'Assaut)", "Itinéraire d'un chômeur (feat. Sexion d'Assaut)", "La drogue te donne des ailes (feat. Sexion d'Assaut)", "Tu l'as fait pour elle (feat. Sexion d'Assaut)", "Paname lève-toi (feat. Sexion d'Assaut)", "Tel père tel fils (feat. Sexion d'Assaut)", "Rien n' t'appartient (feat. Sexion d'Assaut)", "Changement d'ambiance (feat. Sexion d'Assaut)", "J'ai pas les Loves (feat. Sexion d'Assaut)", "Ca chuchote (feat. Sexion d'Assaut)", "Wati by Night (feat. Sexion d'Assaut)", "Désolé (feat. Sexion d'Assaut)"]
            },
            {
                titre: "Casquette à l'envers", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b273210e88d0701ac601cca3080a",
                category: "feat", tracks: ["Casquette à l'envers - Radio Edit (feat. Sexion d'Assaut)"]
            },
            {
                titre: "L'écrasement de Tête 2011", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b2733e17f8b7e307386b0cf9ec95",
                category: "project", tracks: ["Intro (feat. Sexion d'Assaut)", "T'es bête ou quoi? (feat. Sexion d'Assaut)", "La douille (feat. Sexion d'Assaut)", "Ca vient de Paname (feat. Sexion d'Assaut)", "Routine (feat. Sexion d'Assaut)", "Propagande (feat. Sexion d'Assaut)", "Tu t'es ficha (feat. Sexion d'Assaut)", "Interlude (feat. Sexion d'Assaut)", "A la mode de chez nous (feat. Sexion d'Assaut)", "Il est temps qu'on Go (feat. Sexion d'Assaut)", "Ca se ressent dans l'écriture (feat. Sexion d'Assaut)", "Cascadé (feat. Sexion d'Assaut)", "Wati-Bon Son (feat. Sexion d'Assaut, Dry)", "Non coupable (feat. Sexion d'Assaut, Dry)"]
            },
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
        bio: "Le chef de la Drill FR. Voix grave et flow sombre.",
        bioLongue: "Gazo, originaire de Saint-Denis, a popularisé la Drill en France avec sa série 'Drill FR'. Sa voix grave caractéristique et ses ad-libs ('La mala est gangx') en ont fait une superstar. Devenu incontournable, il enchaîne les featurings prestigieux et les certifications, imposant son style sombre et énergique au sommet des charts.",
        albums: [
            {
                titre: "Ping Pong - Les Ultimes Marches de l'Empereur #3", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733e4e27d79feae644ca034f25",
                category: "single", tracks: ["Ping Pong - Les Ultimes Marches de l'Empereur #3 (feat. Alkpote)"]
            },
            {
                titre: "Job", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27328bd7b4d0af188d8583e5490",
                category: "single", tracks: ["Job"]
            },
            {
                titre: "TAPER CREER (feat. Gazo)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734e6828dd47892c4f8405e212",
                category: "feat", tracks: ["TAPER CREER (feat. Gazo)"]
            },
            {
                titre: "KAT (feat. La Rvfleuze)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27317dd79f03214e471d49c95aa",
                category: "single", tracks: ["KAT (feat. La Rvfleuze)"]
            },
            {
                titre: "Plus pareil (feat. Gazo)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273aaf840d3282fc950fca35344",
                category: "feat", tracks: ["Plus pareil (feat. Gazo)"]
            },
            {
                titre: "Cuídate", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fa3a1c2bee6f067ea7fc5102",
                category: "single", tracks: ["Cuídate (feat. Morad)"]
            },
            {
                titre: "ENCORE (feat. Gazo)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738ca0e85777ba837afd9d6296",
                category: "feat", tracks: ["ENCORE (feat. Gazo)"]
            },
            {
                titre: "SELEK", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b70bce73b7dd757acfba7d39",
                category: "single", tracks: ["SELEK (feat. DYSTINCT)"]
            },
            {
                titre: "Empire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27372526e6f8b965b7664ef52ef",
                category: "single", tracks: ["Empire (feat. L2B)"]
            },
            {
                titre: "LDC", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27394935d7808e47ef2efaa8cf1",
                category: "single", tracks: ["LDC (feat. No Limit, Vacra)"]
            },
            {
                titre: "HERMES", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736af8c981fd4be965185c1b60",
                category: "single", tracks: ["HERMES"]
            },
            {
                titre: "Toute la Noché", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739330a922483095421b4e7494",
                category: "single", tracks: ["Toute la Noché (feat. Alonzo)"]
            },
            {
                titre: "APOCALYPSE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733f7850233cd4c6da791574b6",
                category: "project", tracks: ["TOKI", "ENCORE PLUS FORT ELLE AIME ÇA", "LA BELLE ET LA BÊTE", "SELELE (feat. Fally Ipupa)", "NANANI NANANA", "PURE CODEI (feat. Yamê)", "WEMBY (feat. Offset)", "BIRTHDAY (feat. Jul)", "PROBATION", "FIESTA (feat. Morad)", "OPTIMALE (feat. Orelsan)", "WAYANS", "SEVICE", "POP (feat. La Mano 1.9)", "iLUV"]
            },
            {
                titre: "WEMBY (feat. Offset)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27391b431a64dfb2e4f1bc618c7",
                category: "single", tracks: ["WEMBY (feat. Offset)"]
            },
            {
                titre: "SELELE (feat. Fally Ipupa)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734ba77675c258bf7fe094ede1",
                category: "single", tracks: ["SELELE (feat. Fally Ipupa)"]
            },
            {
                titre: "PURE CODEI (feat. Yamê)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736edba98842bd35a943b6082a",
                category: "single", tracks: ["PURE CODEI (feat. Yamê)"]
            },
            {
                titre: "OPTIMALE (feat. Orelsan)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738fad4452b32499eb7df335c3",
                category: "single", tracks: ["OPTIMALE (feat. Orelsan)"]
            },
            {
                titre: "FIESTA (feat. Morad)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c20a799c87777dbaf82e213e",
                category: "single", tracks: ["FIESTA (feat. Morad)"]
            },
            {
                titre: "PROBATION", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730c20b2da3e01774435c803f4",
                category: "single", tracks: ["PROBATION"]
            },
            {
                titre: "POP (feat. La Mano 1.9)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273be89e65fdc49ca1b493b0e22",
                category: "single", tracks: ["POP (feat. La Mano 1.9)"]
            },
            {
                titre: "La famine", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273208dff4c98987bb958e53724",
                category: "single", tracks: ["La famine (feat. Werenoi)"]
            },
            {
                titre: "LA MELO EST GANGX", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cc1c81a9111484b340a08ec7",
                category: "project", tracks: ["24/34 (feat. Tiakola)", "SOBAD (feat. Tiakola)", "A.V.S.D (feat. Tiakola, Skread)", "CARTIER (feat. Tiakola)", "NOTRE DAME (feat. Tiakola)", "INTERLUDE (feat. Tiakola)", "AFRIKANBADMAN (feat. Tiakola)", "100K", "200K (feat. Tiakola)", "AMBITIONS (feat. Tiakola, Kore)", "MAMI WATA (feat. Tiakola)", "OUTRO (feat. Tiakola)", "NOTRE DAME (feat. Angèle)"]
            },
            {
                titre: "NOTRE DAME (feat. Angèle)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27397216c26b8c9aacbe3a29bcb",
                category: "single", tracks: ["NOTRE DAME (feat. Angèle)"]
            },
            {
                titre: "CŒUR DE ICE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c802767b4d0635e41eeca23b",
                category: "single", tracks: ["CŒUR DE ICE (feat. Naps)"]
            },
            {
                titre: "Ce soir (feat. Gazo)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738c1b1efd822e9668403ba932",
                category: "feat", tracks: ["Ce soir (feat. Gazo)"]
            },
            {
                titre: "No makeup", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737342ea239ec690a421b79dc6",
                category: "single", tracks: ["No makeup (feat. Kima)"]
            },
            {
                titre: "A l'envers", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c80118cfaf61b3a87a0b2346",
                category: "single", tracks: ["A l'envers (feat. Shay)"]
            },
            {
                titre: "Ça mène à rien", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27322f63401d186eff0d16b9c35",
                category: "single", tracks: ["Ça mène à rien (feat. PLK)"]
            },
            {
                titre: "AMBITIONS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735262eda6add949edfe5f9a36",
                category: "single", tracks: ["AMBITIONS (feat. Tiakola, Kore)"]
            },
            {
                titre: "A.V.S.D", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273632e7bb091b38cb72eadda1d",
                category: "single", tracks: ["A.V.S.D (feat. Tiakola, Skread)"]
            },
            {
                titre: "Terminus", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e04f167394906fb10393e7e2",
                category: "single", tracks: ["Terminus (feat. Sidiki Diabaté)"]
            },
            {
                titre: "Dans le noir", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27335a59ca325c9ca72dafda4c0",
                category: "single", tracks: ["Dans le noir (feat. Leto)"]
            },
            {
                titre: "Flashback", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730c956815f213a20562ccc7d4",
                category: "single", tracks: ["Flashback (feat. Favé)"]
            },
            {
                titre: "Drill Fr 6 (S.M.B)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273192c20b1f901d56e00b36d90",
                category: "single", tracks: ["Drill Fr 6 - S.M.B (feat. LEVELSANTANA)"]
            },
            {
                titre: "Casanova", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735e90edde8fea572f0400c369",
                category: "single", tracks: ["Casanova (feat. Soolking)"]
            },
            {
                titre: "LA RUE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733a98c17a8443e58141a12fe3",
                category: "single", tracks: ["LA RUE (feat. No Limit, Damso)"]
            },
            {
                titre: "Saiyan", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a557147daf896f6c80b79d58",
                category: "single", tracks: ["Saiyan (feat. Heuss L'enfoiré)"]
            },
            {
                titre: "1ère sommation", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273507a0c98bb79cc5cb3393078",
                category: "project", tracks: ["1ère Sommation (feat. Liim’s)", "1ère sommation - Part. 1 (feat. Liim’s)", "1ère sommation - Part. 2 (feat. Liim’s)"]
            },
            {
                titre: "C'est carré le S", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273db8a34537b1d61d5d5a4b562",
                category: "single", tracks: ["C'est carré le S (feat. Naps, Ninho)"]
            },
            {
                titre: "NO LÈCHE 🚫👅 (feat. Favé, Kerchak & Leto)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735b4936a415275bf33d1dd084",
                category: "single", tracks: ["NO LÈCHE (feat. Favé, Kerchak, Leto)"]
            },
            {
                titre: "La Pègre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731bd5122b3138dd4130513e76",
                category: "single", tracks: ["La Pègre (feat. Maes)"]
            },
            {
                titre: "Maybach", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27302a728700ca075238c46a3c3",
                category: "single", tracks: ["Maybach (feat. Landy)"]
            },
            {
                titre: "200 KM/H", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27364855a047df2f42fc45879d3",
                category: "single", tracks: ["200 KM/H (feat. Ronisia)"]
            },
            {
                titre: "R.A.S", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a07e678e06f5c5dd0e2178e7",
                category: "single", tracks: ["R.A.S (feat. Niska)"]
            },
            {
                titre: "KMT", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273727b42d784eb74b9208a227a",
                category: "project", tracks: ["BECTE", "BODIES (feat. Damso)", "LETTRE À UN OPPS", "RAPPEL", "JEUX DANGEREUX", "M.A.L.A (feat. M Huncho)", "GRA GRA BOOM (feat. Skread)", "HENNESSY", "IMPACT", "DIE", "BOSS", "CELINE 3X", "MOLLY", "FLEURS (feat. Tiakola)", "MAUVAIS 2X (feat. Ninho)"]
            },
            {
                titre: "M.A.L.A (feat. M Huncho)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273311f6aea45828c58644a210c",
                category: "single", tracks: ["M.A.L.A (feat. M Huncho)"]
            },
            {
                titre: "GRA GRA BOOM (feat. Skread)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273640e982cd8807c20772aa339",
                category: "single", tracks: ["GRA GRA BOOM (feat. Skread)"]
            },
            {
                titre: "FLEURS (feat. Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27331723a0234544a809b57f364",
                category: "single", tracks: ["FLEURS (feat. Tiakola)"]
            },
            {
                titre: "BODIES (feat. Damso)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27362b66ed093e07d4a2828008a",
                category: "single", tracks: ["BODIES (feat. Damso)"]
            },
            {
                titre: "RAPPEL", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732b28152c7cdc37659c622cfb",
                category: "single", tracks: ["RAPPEL"]
            },
            {
                titre: "22 Carats (recorded at Les Studios de la Seine, Paris)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cf74219c3742a3394726cc1d",
                category: "single", tracks: ["22 Carats (recorded at Les Studios de la Seine, Paris) (feat. Headie One)"]
            },
            {
                titre: "Vamos", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27309e6e8d4d81200b3107b6691",
                category: "single", tracks: ["Vamos (feat. Naps)"]
            },
            {
                titre: "MOLLY - A COLORS SHOW", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27374efefb041aa9f1b14a06edb",
                category: "single", tracks: ["MOLLY - A COLORS SHOW"]
            },
            {
                titre: "Mode AV (feat. Niska & Gazo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273578c0ca51357b36bf05e37cf",
                category: "single", tracks: ["Mode AV (feat. Niska & Gazo)"]
            },
            {
                titre: "CELINE 3X", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b66b12c2edf6b5d478864d56",
                category: "single", tracks: ["CELINE 3X"]
            },
            {
                titre: "Qwer", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27397c8de78724a7976a2047652",
                category: "single", tracks: ["Qwer (feat. Kalash)"]
            },
            {
                titre: "Picsou", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f481d125800d6dfa3058251b",
                category: "single", tracks: ["Picsou (feat. Dadju)"]
            },
            {
                titre: "Big Drip", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27302e164561828dff16029b636",
                category: "single", tracks: ["Big Drip (feat. Franglish)"]
            },
            {
                titre: "La Cour des Grands", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736fbbb2c188fff93e006a0fb9",
                category: "project", tracks: ["Pas prêt (feat. Kima)", "Poto (feat. Kima)", "La cité (feat. Koba LaD)", "Le regard en dit long (feat. Kima)", "Parle moi (feat. Kima)", "Bandit (feat. Kima)", "J'encaisse (feat. Gazo)", "Solo (feat. Kima)", "Oh Baby (feat. Kima)", "Papillon (feat. Kalash)", "Sur moi (feat. Kima)", "Sacrifice (feat. OPINEL 21)", "Naufrage (feat. Kima)"]
            },
            {
                titre: "On se reverra plus (feat. Gazo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bd90c15a3a638df745fd2285",
                category: "feat", tracks: ["On se reverra plus (feat. Gazo)"]
            },
            {
                titre: "100 Mi-Temps (feat. Gazo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273464994edef44160a0530d681",
                category: "feat", tracks: ["100 Mi-Temps (feat. Gazo)"]
            },
            {
                titre: "My Men", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273821cba449d57426a4f636e71",
                category: "single", tracks: ["My Men (feat. Rapi Sati)"]
            },
            {
                titre: "Filtré", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27336249b0306b3f92f8994d1e2",
                category: "single", tracks: ["Filtré (feat. Timal)"]
            },
            {
                titre: "Shoot (feat. Sacky, Gazo, Nko)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b359f653c3634f5ade615130",
                category: "single", tracks: ["Shoot (feat. Sacky, Gazo, Nko)"]
            },
            {
                titre: "Love & Lové", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bdcf2842c23ef767c1a8db26",
                category: "single", tracks: ["Love & Lové (feat. Kim)"]
            },
            {
                titre: "M'en aller", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fd907e7d10f7956e3cbdedd6",
                category: "single", tracks: ["M'en aller (feat. Tiitof)"]
            },
            {
                titre: "MAUVAIS 2X (feat. Ninho)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273dec5428fe794190a2597eefc",
                category: "single", tracks: ["MAUVAIS 2X (feat. Ninho)"]
            },
            {
                titre: "Le classico organisé", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273299eab3452ee52b4616db9d4",
                category: "single", tracks: ["Le classico organisé (feat. Koba LaD, PLK, SCH, Jul, Naps, Guy2Bezbar, Kofs, Soso Maness, Le classico organisé)"]
            },
            {
                titre: "Big Meech", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730bb82ebc0e55e4b8f9cc3954",
                category: "single", tracks: ["Big Meech (feat. Leto)"]
            },
            {
                titre: "GROKUWA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b1375417d72bdfca61af26cd",
                category: "single", tracks: ["GROKUWA"]
            },
            {
                titre: "Validé II", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738adaddcf9dfd042c357176c2",
                category: "single", tracks: ["Validé II (feat. Sam's, Bosh)"]
            },
            {
                titre: "Tu le sais", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273051518ea672fb2f336192d41",
                category: "single", tracks: ["Tu le sais (feat. Kalash)"]
            },
            {
                titre: "Canon", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730a46b68a37449d35352903ee",
                category: "single", tracks: ["Canon (feat. Hache-P)"]
            },
            {
                titre: "DRILL FR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f696625dffd9914c6bb44292",
                category: "project", tracks: ["INTRO", "CACHE COU (feat. Hache-P)", "PARKINSON", "KASSAV (feat. Tiakola)", "TCHIN 2X", "ON A (feat. Luciano)", "GO (feat. Franglish & Landy)", "A$AP", "DRILL FR 5 (feat. Hamza)", "HAINE&SEX", "INHUMAIN", "BSB", "EUPHON", "MON CHER (feat. Unknown T & Pa Salieu)", "MALAGANGX"]
            },
            {
                titre: "ON A (feat. Luciano)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27397a7b0010b3c223292e6fbef",
                category: "single", tracks: ["ON A (feat. Luciano)"]
            },
            {
                titre: "MON CHER (feat. Unknown T & Pa Salieu)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27379fd6be52a1ddd31cc835b18",
                category: "single", tracks: ["MON CHER (feat. Unknown T & Pa Salieu)"]
            },
            {
                titre: "CACHE COU (feat. Hache-P)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b55bede788ea7609124a5230",
                category: "single", tracks: ["CACHE COU (feat. Hache-P)"]
            },
            {
                titre: "A$AP", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c9d91a0c508f68c6289074a9",
                category: "single", tracks: ["A$AP"]
            },
            {
                titre: "BOOSKA POIGNARD", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27373605a67fb170e0d604e8815",
                category: "single", tracks: ["BOOSKA POIGNARD"]
            },
            {
                titre: "AR (Saison 999)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273264ce3c32cbdefdc3807651c",
                category: "single", tracks: ["AR - Saison 999 (feat. S.Pri Noir)"]
            },
            {
                titre: "Sucré Dadi", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738ffdc1e875f17bda3816fa14",
                category: "single", tracks: ["Sucré Dadi (feat. Dadinho)"]
            },
            {
                titre: "KASSAV (feat. Tiakola)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273248ee6b4908f7309661b25c9",
                category: "single", tracks: ["KASSAV (feat. Tiakola)"]
            },
            {
                titre: "TCHIN 2X", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273d6dcdcc130b6558f0a548baa",
                category: "single", tracks: ["TCHIN 2X"]
            },
            {
                titre: "Baby", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27376072147ad4c6d6e7c5d2e7b",
                category: "single", tracks: ["Baby (feat. Ismo Z17, Bendo)"]
            },
            {
                titre: "ORO JACKSON (feat. Gazo)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732dd225e6893f8aefb8085f6f",
                category: "feat", tracks: ["ORO JACKSON (feat. Gazo)"]
            },
            {
                titre: "DRILL FR 5 (feat. Hamza)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273d04c200386afbe36ade66e80",
                category: "single", tracks: ["DRILL FR 5 (feat. Hamza)"]
            },
            {
                titre: "Inceste", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ea9806cab27b75a615335a96",
                category: "single", tracks: ["Inceste"]
            },
            {
                titre: "LSD", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730dd567d61cfa974505492864",
                category: "single", tracks: ["LSD (feat. Jeff, Bendo)"]
            },
            {
                titre: "Drill FR 4", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273730e29bbbe527ac0bd16364d",
                category: "single", tracks: ["Drill FR 4 (feat. Freeze corleone)"]
            },
            {
                titre: "Acte de Burberry", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b55e6724d197199011812f86",
                category: "single", tracks: ["Acte de Burberry"]
            },
            {
                titre: "Drill time", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a05c35fe102391161b029c91",
                category: "single", tracks: ["Drill time"]
            },
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
        bio: "Le prince de la mélo. L'ancien des 4Keus devenu star solo.",
        bioLongue: "Tiakola, ancien membre du groupe 4Keus, s'est imposé comme le maître de la mélodie dans le rap français. Surnommé 'La Mélo', il excelle dans l'art de créer des refrains entêtants et des ambiances dansantes. Son premier album 'Mélo' a confirmé son statut de hitmaker, capable de transformer n'importe quel morceau en tube.",
        albums: [
            {
                titre: "BADMAN GANGSTA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273db8582d51a88b1f54d9fd315",
                category: "single", tracks: ["BADMAN GANGSTA (feat. Asake)"]
            },
            {
                titre: "FARA FARA GANG - BDLM EXTENSION", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d88c1ca61ee90d81a41d5f18",
                category: "project", tracks: ["CODE 187 (feat. Genezio)", "MBIFE (feat. Genezio)", "CATIMINI (feat. Genezio, Landy)", "STATION (feat. Genezio, Nemzzz)", "STELLAR (feat. Genezio)", "T.I.A", "PONA NINI (feat. Genezio, Prototype)", "G.A.N.G (feat. Niska, La Mano 1.9)", "CABREL (feat. Saaro)", "PROTECT (feat. Merveille)", "PSYCHOLOGIQUE", "PLAISIR NOCIF (feat. SDM, Liim’s)", "PING PONG", "MANON B (feat. Ryflo, Oskoow)", "FORMIDABLE", "FAST LIFE & FAMILLE (feat. .H.K, Jolagreen23)", "RESTE-LÀ (feat. RnBoi, Monsieur Nov)", "Y.J (C'EST KO) (feat. Ronisia)", "1h55 (feat. Rsko, Hamza)", "GRAND PRIX (feat. JEY BROWNIE, Sonny Rave)", "DERNIÈRE DANSE (feat. Zed, Cheu-B)", "MANON B (feat. Ryflo, Oskoow & MC Cebezinho) - Brazilian Remix", "NO LIMIT (feat. KLN)"]
            },
            {
                titre: "FARA FARA GANG", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27395adf86bf98bdfd2ba9c07ad",
                category: "project", tracks: ["CODE 187 (feat. Genezio)", "MBIFE (feat. Genezio)", "CATIMINI (feat. Genezio, Landy)", "STATION (feat. Genezio, Nemzzz)", "STELLAR (feat. Genezio)"]
            },
            {
                titre: "STATION", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732c720731d21f591222c1a98a",
                category: "single", tracks: ["STATION (feat. Genezio, Nemzzz)"]
            },
            {
                titre: "Crime ensoleillé", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27387bf67d4544b7cdaf9aca078",
                category: "single", tracks: ["Crime ensoleillé (feat. La Mano 1.9)"]
            },
            {
                titre: "CATIMINI", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731870989163260c3ea413e609",
                category: "single", tracks: ["CATIMINI (feat. Genezio, Landy)"]
            },
            {
                titre: "PSYCHOLOGIQUE (Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734598dcd19789c48e63aad97d",
                category: "single", tracks: ["PSYCHOLOGIQUE (Remix) (feat. RUSH AVENUE)"]
            },
            {
                titre: "STABILITÉ", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739b444de275cdd4762992e7d2",
                category: "single", tracks: ["STABILITÉ (feat. Tarik Azzouz)"]
            },
            {
                titre: "4 Decembre", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f5c670504d5a30b943fe23a2",
                category: "single", tracks: ["4 Decembre (feat. Lyele)"]
            },
            {
                titre: "GAÙCHO", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733137a3340fc0ed0ba3c041cf",
                category: "single", tracks: ["GAÙCHO (feat. Dinos)"]
            },
            {
                titre: "LA MELO EST DANS LA BOUNCE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eaef6c034d755ad23832872c",
                category: "single", tracks: ["LA MELO EST DANS LA BOUNCE (feat. Genezio)"]
            },
            {
                titre: "NO LIMIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fbb7ab50eba8ca590489f5e2",
                category: "single", tracks: ["NO LIMIT (feat. KLN)"]
            },
            {
                titre: "BDLM VOL.1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d10ff5df541f71c69c106a21",
                category: "project", tracks: ["T.I.A", "PONA NINI (feat. Genezio, Prototype)", "G.A.N.G (feat. Niska, La Mano 1.9)", "CABREL (feat. Saaro)", "PROTECT (feat. Merveille)", "PSYCHOLOGIQUE", "PLAISIR NOCIF (feat. SDM, Liim’s)", "PING PONG", "MANON B (feat. Ryflo, Oskoow)", "FORMIDABLE", "FAST LIFE & FAMILLE (feat. .H.K, Jolagreen23)", "RESTE-LÀ (feat. RnBoi, Monsieur Nov)", "Y.J (C'EST KO) (feat. Ronisia)", "1h55 (feat. Rsko, Hamza)", "GRAND PRIX (feat. JEY BROWNIE, Sonny Rave)", "DERNIÈRE DANSE (feat. Zed, Cheu-B)", "MANON B (feat. Ryflo, Oskoow & MC Cebezinho) - Brazilian Remix", "NO LIMIT (feat. KLN)"]
            },
            {
                titre: "Y.J (C'EST KO)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ed5a84ac9a9f846eb9969dce",
                category: "single", tracks: ["Y.J (C'EST KO) (feat. Ronisia)"]
            },
            {
                titre: "RESTE-LÀ", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738e2ebd8334888aa87d6906e7",
                category: "single", tracks: ["RESTE-LÀ (feat. RnBoi, Monsieur Nov)"]
            },
            {
                titre: "PROTECT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733500cee7d40d0b488f8c1549",
                category: "single", tracks: ["PROTECT (feat. Merveille)"]
            },
            {
                titre: "PONA NINI", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732c36582af2945554a57bab1d",
                category: "single", tracks: ["PONA NINI (feat. Genezio, Prototype)"]
            },
            {
                titre: "PLAISIR NOCIF", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d1960d47e28446d1efb5c6d1",
                category: "single", tracks: ["PLAISIR NOCIF (feat. SDM, Liim’s)"]
            },
            {
                titre: "GRAND PRIX", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732dff6c520563fff3b3c18b12",
                category: "single", tracks: ["GRAND PRIX (feat. JEY BROWNIE, Sonny Rave)"]
            },
            {
                titre: "G.A.N.G", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273464498f083d70777da229eef",
                category: "single", tracks: ["G.A.N.G (feat. Niska, La Mano 1.9)"]
            },
            {
                titre: "FAST LIFE & FAMILLE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e70bd0deac92c20d915157da",
                category: "single", tracks: ["FAST LIFE & FAMILLE (feat. .H.K, Jolagreen23)"]
            },
            {
                titre: "DERNIÈRE DANSE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eced9b32de67d068a5d2bd0f",
                category: "single", tracks: ["DERNIÈRE DANSE (feat. Zed, Cheu-B)"]
            },
            {
                titre: "CABREL", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f39d9d2d9da1ece42c192182",
                category: "single", tracks: ["CABREL (feat. Saaro)"]
            },
            {
                titre: "1h55", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ec4d04455ab9e22994633ada",
                category: "single", tracks: ["1h55 (feat. Rsko, Hamza)"]
            },
            {
                titre: "FORMIDABLE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f927e5a6d9e3eb7c747f0831",
                category: "single", tracks: ["FORMIDABLE"]
            },
            {
                titre: "APPEL MANQUÉ", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730af5b6a2a09ffc35c346563e",
                category: "single", tracks: ["APPEL MANQUÉ (feat. Booska-P)"]
            },
            {
                titre: "MANON B", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738696035a206a9309b2305713",
                category: "project", tracks: ["MANON B (feat. Ryflo, Oskoow)", "MANON B (feat. Ryflo, Oskoow & MC Cebezinho) - Brazilian Remix"]
            },
            {
                titre: "MANON B (feat. Ryflo, Oskoow & MC Cebezinho) [Brazilian Remix]", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a06482bd9b6b27d7bbe53360",
                category: "single", tracks: ["MANON B (feat. Ryflo, Oskoow & MC Cebezinho) - Brazilian Remix"]
            },
            {
                titre: "T.I.A - A COLORS SHOW", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273aee0e03f7305ef7458407014",
                category: "single", tracks: ["T.I.A - A COLORS SHOW"]
            },
            {
                titre: "LA MELO EST GANGX", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cc1c81a9111484b340a08ec7",
                category: "project", tracks: ["24/34 (feat. Gazo)", "SOBAD (feat. Gazo)", "A.V.S.D (feat. Gazo, Skread)", "CARTIER (feat. Gazo)", "NOTRE DAME (feat. Gazo)", "INTERLUDE (feat. Gazo)", "AFRIKANBADMAN (feat. Gazo)", "100K (feat. Gazo)", "200K", "AMBITIONS (feat. Gazo, Kore)", "MAMI WATA (feat. Gazo)", "OUTRO (feat. Gazo)", "NOTRE DAME (feat. Angèle)"]
            },
            {
                titre: "NOTRE DAME (feat. Angèle)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27397216c26b8c9aacbe3a29bcb",
                category: "single", tracks: ["NOTRE DAME (feat. Angèle)"]
            },
            {
                titre: "Une histoire", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731fb0655a55dbdedc31f1452e",
                category: "single", tracks: ["Une histoire (feat. Naza)"]
            },
            {
                titre: "CARGO (feat. Tiakola)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ec4ae99dfe4c5542c79cee16",
                category: "feat", tracks: ["CARGO (feat. Tiakola)"]
            },
            {
                titre: "bank", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273afaf2f2c8e77b0fbf9ab3dda",
                category: "single", tracks: ["bank (feat. Green Montana, Josman)"]
            },
            {
                titre: "X", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c925106c31a532b64d6bf5a4",
                category: "project", tracks: ["X", "SOLO (feat. La Fève)", "#BÂTIMENT1", "HUMAN WEAKNESS", "2009'", "P&LOVÉ"]
            },
            {
                titre: "AMBITIONS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735262eda6add949edfe5f9a36",
                category: "single", tracks: ["AMBITIONS (feat. Gazo, Kore)"]
            },
            {
                titre: "A.V.S.D", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273632e7bb091b38cb72eadda1d",
                category: "single", tracks: ["A.V.S.D (feat. Gazo, Skread)"]
            },
            {
                titre: "500", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736541a91bb84b3ad6ee536070",
                category: "single", tracks: ["500 (feat. La Fève)"]
            },
            {
                titre: "Miné sur Paname", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a952ade8daac0a24b09634bb",
                category: "single", tracks: ["Miné sur Paname (feat. Jul)"]
            },
            {
                titre: "Bonsoir Paris (Mama No Cry)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273678c7f31ed8c18a866c4e8a6",
                category: "single", tracks: ["Bonsoir Paris (Mama No Cry) (feat. S.Pri Noir)"]
            },
            {
                titre: "God Bless", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273770145182769847b1addf2ed",
                category: "single", tracks: ["God Bless (feat. Leto, Rsko)"]
            },
            {
                titre: "BALLE DANS LE COEUR", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736b7fa3a4b22436c87ae91476",
                category: "single", tracks: ["BALLE DANS LE COEUR (feat. Ikaz Boi)"]
            },
            {
                titre: "Meridian & Special", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734272d95e66df0e8859cc4952",
                category: "project", tracks: ["Meridian (feat. Dave)", "Special (feat. Dave)"]
            },
            {
                titre: "Délire (feat. Tiakola)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736580c05393a4901d7b146792",
                category: "feat", tracks: ["Délire (feat. Tiakola)"]
            },
            {
                titre: "COMPACT", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ffc0088655b084697c5acbe3",
                category: "single", tracks: ["COMPACT (feat. Prinzly)"]
            },
            {
                titre: "Tout seul", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273894d4219b5805c7767106457",
                category: "single", tracks: ["Tout seul (feat. Werenoi)"]
            },
            {
                titre: "Atasanté Part.2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731eadb0f4013d5f59cd7fd09e",
                category: "single", tracks: ["Atasanté Part.2 (feat. Hamza)"]
            },
            {
                titre: "Cadenacer", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b2bda7d55ef600f0f89073c9",
                category: "single", tracks: ["Cadenacer (feat. JEY BROWNIE, FLEM KGB)"]
            },
            {
                titre: "TOUTE LA JOURNÉE (feat. Tiakola)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739b97a03ae2198cbad76d4053",
                category: "feat", tracks: ["TOUTE LA JOURNÉE (feat. Tiakola)"]
            },
            {
                titre: "Cadeau (feat. Tiakola)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27355ff15ae4728e27f7a572d59",
                category: "feat", tracks: ["Cadeau (feat. Tiakola)"]
            },
            {
                titre: "Bosseur (feat. Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e6b017a152ac27b89618dd52",
                category: "feat", tracks: ["Bosseur (feat. Tiakola)"]
            },
            {
                titre: "Me sauver", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734e57fe5c1c18f01cc7847ca4",
                category: "single", tracks: ["Me sauver (feat. Zed)"]
            },
            {
                titre: "Quand j'y repense", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b92e8e3b4a443da6ce4a3384",
                category: "single", tracks: ["Quand j'y repense (feat. Mig)"]
            },
            {
                titre: "Plus belle la vie, plus belle la mort", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c8b6c2740051642b401ba0ac",
                category: "single", tracks: ["Plus belle la vie, plus belle la mort (feat. Dosseh)"]
            },
            {
                titre: "Sans nouvelle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733eb6b30779e98067c87a5edc",
                category: "single", tracks: ["Sans nouvelle"]
            },
            {
                titre: "Mise en garde", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735ceb81199793db90d5e958df",
                category: "single", tracks: ["Mise en garde"]
            },
            {
                titre: "Mayday", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e5100e293d73d4d8ad0418c7",
                category: "single", tracks: ["Mayday"]
            },
            {
                titre: "Redescends (feat Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273ed7bea82ccf6b2bf0a572ac5",
                category: "single", tracks: ["Redescends (feat Tiakola) (feat. SDM)"]
            },
            {
                titre: "Palavé (feat. Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730795f6f5173c29036d4595a4",
                category: "feat", tracks: ["Palavé (feat. Tiakola)"]
            },
            {
                titre: "Où sont mes amis ? (feat. Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732624e245b92172f29011120c",
                category: "feat", tracks: ["Où sont mes amis ? (feat. Tiakola)"]
            },
            {
                titre: "FLEURS (feat. Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27331723a0234544a809b57f364",
                category: "feat", tracks: ["FLEURS (feat. Tiakola)"]
            },
            {
                titre: "Mélo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c974e02a73a8c30738019a56",
                category: "project", tracks: ["1ntro'p", "#TT", "Arsenik", "Parapluie", "La clé", "Mode AV (feat. Niska & Gazo)", "Si j'savais", "Meuda", "Gasolina (feat. Rsko)", "Soza", "Riri / No camera", "M3lo", "Atasanté (feat. Hamza)", "Roro (feat. SDM)", "Coucher de soleil", "R.I.Peace"]
            },
            {
                titre: "Roro (feat. SDM)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e03c0ca47294c0ff7dc9e8c7",
                category: "single", tracks: ["Roro (feat. SDM)"]
            },
            {
                titre: "Mode AV (feat. Niska & Gazo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273578c0ca51357b36bf05e37cf",
                category: "single", tracks: ["Mode AV (feat. Niska & Gazo)"]
            },
            {
                titre: "Gasolina (feat. Rsko)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dfdd1a83010470d1b8d5981d",
                category: "single", tracks: ["Gasolina (feat. Rsko)"]
            },
            {
                titre: "Atasanté (feat. Hamza)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27377c0c0e1b9cd10a1a8f570fc",
                category: "single", tracks: ["Atasanté (feat. Hamza)"]
            },
            {
                titre: "Coucher de soleil", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27379f694c7b69beb9dcf99deb6",
                category: "single", tracks: ["Coucher de soleil"]
            },
            {
                titre: "Si j'savais", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c8cf1ee793169954f9562d94",
                category: "single", tracks: ["Si j'savais"]
            },
            {
                titre: "M3lo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732394a3b70d901e7f1455b29b",
                category: "single", tracks: ["M3lo"]
            },
            {
                titre: "Capi", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739af3bf85bb0837a1536ee953",
                category: "single", tracks: ["Capi (feat. Cinco, Bné)"]
            },
            {
                titre: "La clé", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732415f4f3ebeb34b5f7e5faf0",
                category: "single", tracks: ["La clé"]
            },
            {
                titre: "Mardi gras", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730e0ea9aca9860ac2cc1798dd",
                category: "single", tracks: ["Mardi gras (feat. Maes, Zed)"]
            },
            {
                titre: "Journée", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736980f526f49472de409210b7",
                category: "single", tracks: ["Journée (feat. Niska)"]
            },
            {
                titre: "Joe Pesci", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2739a0111bf874d2f813b8ee3d6",
                category: "single", tracks: ["Joe Pesci (feat. Niska)"]
            },
            {
                titre: "Comme moi (feat. Tiakola)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734b362ff92703b49399e2e657",
                category: "feat", tracks: ["Comme moi (feat. Tiakola)"]
            },
            {
                titre: "Étincelle (Maradona)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735d4d2b7f86f3cbf86d7e6d32",
                category: "single", tracks: ["Étincelle - Maradona"]
            },
            {
                titre: "Pololo", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e73d238de70e8cecd93458bb",
                category: "single", tracks: ["Pololo (feat. MHD)"]
            },
            {
                titre: "Prends mes lovés", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b64b3f3fed7f5194d108353c",
                category: "single", tracks: ["Prends mes lovés (feat. Dinos)"]
            },
            {
                titre: "Pousse toi", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a57366e7411f5ffa6dddcbcc",
                category: "single", tracks: ["Pousse toi (feat. Booska-P)"]
            },
            {
                titre: "KASSAV (feat. Tiakola)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273248ee6b4908f7309661b25c9",
                category: "feat", tracks: ["KASSAV (feat. Tiakola)"]
            },
            {
                titre: "Bob Marley (feat. Tiakola)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b1643609f5f07f9065fbb198",
                category: "feat", tracks: ["Bob Marley (feat. Tiakola)"]
            },
            {
                titre: "Mood", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ddc3ae9d9928f09c6e9b966a",
                category: "single", tracks: ["Mood (feat. Liim’s)"]
            },
            {
                titre: "Dieu merci", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f8132159c571c24105c5ee43",
                category: "single", tracks: ["Dieu merci (feat. Dadju)"]
            },
            {
                titre: "Biberon", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273244bb215a0ce2f9cbefa50fc",
                category: "single", tracks: ["Biberon (feat. Franglish, Leto)"]
            },
            {
                titre: "Sombre mélodie", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27339cee6cf52cb54db14ea716d",
                category: "single", tracks: ["Sombre mélodie"]
            },
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
        bio: "La machine à hits du 93. Révélation fulgurante et mystérieuse.",
        bioLongue: "Werenoi est le phénomène de ces dernières années. Originaire de Montreuil, il cultive le mystère sur sa personne mais inonde le marché de hits. Son style efficace, ses flows variés et sa productivité impressionnante lui ont permis de décrocher le titre d'album le plus vendu en 2023 avec 'Carré'.",
        albums: [
            {
                titre: "Piano", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737c02e9af90fa282fa149cf99",
                category: "single", tracks: ["Piano (feat. GIMS)"]
            },
            {
                titre: "Diamant Noir", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cf93822043c831857ed3b6b4",
                category: "project", tracks: ["Poney", "Dispense", "First", "Triple V (feat. Damso, Ninho)", "Riri", "Boss (feat. DYSTINCT, No Limit, DJ Milane)", "Embouteillé", "Jalouse (feat. SDM, Vacra)", "Colisée", "Diamant Noir", "Gulfstream (feat. Gunna)", "Faillite", "FTR (feat. Lil Tjay)", "11.04.2025", "Claire de Lune (feat. Kalash)", "Industry Plant", "Titanic", "Piano (feat. GIMS)"]
            },
            {
                titre: "Triple V", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739da29716c060926273a64fc9",
                category: "single", tracks: ["Triple V (feat. Damso, Ninho)"]
            },
            {
                titre: "Saison", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27357f8759ef3167f5d4ce82773",
                category: "single", tracks: ["Saison (feat. HMZ)"]
            },
            {
                titre: "Jalouse", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27367640a3b1eba6fa85215ac80",
                category: "single", tracks: ["Jalouse (feat. SDM, Vacra)"]
            },
            {
                titre: "Gulfstream", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273630d2d13dec8741acd8740cc",
                category: "single", tracks: ["Gulfstream (feat. Gunna)"]
            },
            {
                titre: "FTR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27358c53628dac5deae43f943a2",
                category: "single", tracks: ["FTR (feat. Lil Tjay)"]
            },
            {
                titre: "DRAGONS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739b8773a797e6d313fa791a98",
                category: "single", tracks: ["DRAGONS (feat. Hamza)"]
            },
            {
                titre: "Clair de lune", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734c4438e6a9d96ae01a67f730",
                category: "single", tracks: ["Clair de lune (feat. Kalash)"]
            },
            {
                titre: "BOSS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ee330e88db5de1afee3b2fb8",
                category: "single", tracks: ["BOSS (feat. No Limit, DYSTINCT, DJ Milane)"]
            },
            {
                titre: "11.04.2025", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273363eb51ac8b66c137d14a85e",
                category: "single", tracks: ["11.04.2025"]
            },
            {
                titre: "PERFORMANTE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739962198c43c8a4c9c7ba3160",
                category: "single", tracks: ["PERFORMANTE (feat. Dinos)"]
            },
            {
                titre: "Pyramide 2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735e69d7a9159306d54ee54fd2",
                category: "project", tracks: ["Alpha", "Vermine", "La famine (feat. Gazo)", "C63", "En pétard (feat. PLK)", "Moteur brûlant", "Pétunias", "Emelyne", "Malus", "L'or et la pierre", "Balkans", "5 étoiles", "6 étoiles", "Oméga", "Intro Morphée", "Téléphérique", "Pyramide (feat. Damso)", "Animal", "Dans un verre (feat. SDM)", "Location", "Témoin", "Chaleur (feat. Aya Nakamura)", "Je suis en moto", "Maudit (feat. Hamza)", "FBI", "Casse bélier", "Picasso", "La vie de star (feat. Maes, SCH)", "Faf", "16.02.2024", "Chemin de diamant"]
            },
            {
                titre: "La famine", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273208dff4c98987bb958e53724",
                category: "single", tracks: ["La famine (feat. Gazo)"]
            },
            {
                titre: "En pétard", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735cc1a259e8f569551c4f842c",
                category: "single", tracks: ["En pétard (feat. PLK)"]
            },
            {
                titre: "Pétunias", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f4c677f6dd960874c281e523",
                category: "single", tracks: ["Pétunias"]
            },
            {
                titre: "METALLICA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273876dd81638312a02374dac6d",
                category: "single", tracks: ["METALLICA (feat. SDM)"]
            },
            {
                titre: "CORDILLÈRE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ab9776d245bd3cf3f7ca9e8c",
                category: "single", tracks: ["CORDILLÈRE (feat. Maes)"]
            },
            {
                titre: "Mélanine", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a9d80a3d6b5263a385109d8f",
                category: "single", tracks: ["Mélanine (feat. Heuss L'enfoiré)"]
            },
            {
                titre: "Carré d'as", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732aab174c2e045c89e9147227",
                category: "single", tracks: ["Carré d'as (feat. Rimkus)"]
            },
            {
                titre: "Pyramide", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27315a77fc58cab8c163a1b7509",
                category: "project", tracks: ["Intro Morphée", "Téléphérique", "Pyramide (feat. Damso)", "Animal", "Dans un verre (feat. SDM)", "Location", "Témoin", "Chaleur (feat. Aya Nakamura)", "Je suis en moto", "Maudit (feat. Hamza)", "FBI", "Casse bélier", "Picasso", "La vie de star (feat. Maes, SCH)", "Faf", "16.02.2024", "Chemin de diamant", "Pétunias"]
            },
            {
                titre: "Maudit", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c18101e2eed91411fd168a2f",
                category: "single", tracks: ["Maudit (feat. Hamza)"]
            },
            {
                titre: "La vie de star", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273dac60f7773423b13fa8265a1",
                category: "single", tracks: ["La vie de star (feat. Maes, SCH)"]
            },
            {
                titre: "Dans un verre", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f304932060e9784c8c807f9b",
                category: "single", tracks: ["Dans un verre (feat. SDM)"]
            },
            {
                titre: "Chaleur", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27316f3d73c4c5d7cc23d42b977",
                category: "single", tracks: ["Chaleur (feat. Aya Nakamura)"]
            },
            {
                titre: "16.02.2024", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27343a83ef3d89037edade8c369",
                category: "single", tracks: ["16.02.2024"]
            },
            {
                titre: "PHOTO", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27336517be0e89f0c3d37a30dd7",
                category: "single", tracks: ["PHOTO (feat. Hös Copperfield)"]
            },
            {
                titre: "ON EN REPARLERA", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27369315a6af8bbc3badebe5ba6",
                category: "single", tracks: ["ON EN REPARLERA (feat. Hös Copperfield)"]
            },
            {
                titre: "Telegram 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c52c479e4abc2aa659e9ed88",
                category: "project", tracks: ["Rolls Royce", "Magot (feat. SCH)", "Bang", "CR", "Mauvaise", "Les codes", "Tu connais", "3x filtré"]
            },
            {
                titre: "Magot", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27302ceecb2f720a67dd72fe603",
                category: "single", tracks: ["Magot (feat. SCH)"]
            },
            {
                titre: "Ali", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273808dfd01f16342032a68c407",
                category: "single", tracks: ["Ali (feat. Rimkus, Lacrim, Mac Tyer)"]
            },
            {
                titre: "Carré", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c0b0eba01296859b801a7fcd",
                category: "project", tracks: ["Intro Rolex", "Maison hantée", "Ciao (feat. Ninho)", "Figaro", "Grisaille", "Laboratoire", "Virus", "Tout seul (feat. Tiakola)", "L'ancien", "Vroum Vroum", "Satan 2", "Nos labels c'est du papel (feat. Lacrim)", "Boussole", "Escorte (feat. PLK)", "Salaire", "Rude Boy", "Chemin d'or", "10.03.2023", "Millionnaire"]
            },
            {
                titre: "Tout seul", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273894d4219b5805c7767106457",
                category: "single", tracks: ["Tout seul (feat. Tiakola)"]
            },
            {
                titre: "Nos labels c'est du papel", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27333f6d21834a0cf98910cee78",
                category: "single", tracks: ["Nos labels c'est du papel (feat. Lacrim)"]
            },
            {
                titre: "Escorte", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a407ea0b2ddc7dd5872c4ecb",
                category: "single", tracks: ["Escorte (feat. PLK)"]
            },
            {
                titre: "Ciao", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733697149f5e4f0af7a3f1a1ad",
                category: "single", tracks: ["Ciao (feat. Ninho)"]
            },
            {
                titre: "10.03.2023", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ca90eea10c94052dcf7792e",
                category: "single", tracks: ["10.03.2023"]
            },
            {
                titre: "3 singes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732f78c14ac316b0c72baa2196",
                category: "single", tracks: ["3 singes (feat. Ninho)"]
            },
            {
                titre: "All eyes on me", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731e29bd7f4464d814153cfa6c",
                category: "single", tracks: ["All eyes on me"]
            },
            {
                titre: "Telegram", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27311b232781481f23f659ba798",
                category: "project", tracks: ["Vulgaire", "Jamal", "Crédibilité", "Balmain", "Le sas", "7 vie la", "Ndrangheta", "Sale histoire (feat. Rimkus)", "Déjà vu", "Solitaire", "Selfie (feat. Maes)", "Ordinateur", "All eyes on me", "3 singes (feat. Ninho)"]
            },
            {
                titre: "Ordinateur", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735a2b9d3b52aa006d3296ffe0",
                category: "single", tracks: ["Ordinateur"]
            },
            {
                titre: "La vie de Cesar", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273130f8f6e491b84e8cf2e370f",
                category: "single", tracks: ["La vie de Cesar (feat. Dosseh)"]
            },
            {
                titre: "Selfie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734cd23e43713f3f31bba83923",
                category: "single", tracks: ["Selfie (feat. Maes)"]
            },
            {
                titre: "Solitaire", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273272cb4867f7538c876ce56e4",
                category: "single", tracks: ["Solitaire"]
            },
            {
                titre: "Sale histoire", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273500de15699e97444f823cfbc",
                category: "single", tracks: ["Sale histoire (feat. Rimkus)"]
            },
            {
                titre: "Balmain", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273534f9ce796f345741d7916c7",
                category: "single", tracks: ["Balmain"]
            },
            {
                titre: "Senor de los Gallos", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27366c82ffacbb5136cd87ed1f0",
                category: "single", tracks: ["Senor de los Gallos (feat. Lacrim)"]
            },
            {
                titre: "Criminel", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b1feece49ed22108c1bbc17b",
                category: "single", tracks: ["Criminel"]
            },
            {
                titre: "Scarface", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273eb82ba92c859fdf9e9528b0e",
                category: "single", tracks: ["Scarface"]
            },
            {
                titre: "Derek", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2739059b34d8c359a18066c5f74",
                category: "single", tracks: ["Derek"]
            },
            {
                titre: "Des ténèbres", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27303070649da0d9dd787d2e5ac",
                category: "single", tracks: ["Des ténèbres"]
            },
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
        bio: "Ocho. La voix tonitruante du 92i et du rap français actuel.",
        bioLongue: "SDM, signé sur le label 92i de Booba, s'est imposé par sa voix grave et puissante. Capable de kicker salement comme de chanter, il représente la force tranquille du rap. Ses albums 'Ocho' et 'Liens du 100' ont solidifié sa place parmi les têtes d'affiche, avec des hymnes comme 'Bolide Allemand'.",
        albums: [
            {
                titre: "Soleil levant", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273354461e1ea1d8541c43c1d2c",
                category: "single", tracks: ["Soleil levant (feat. Orelsan)"]
            },
            {
                titre: "Parle moi", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fd16d02fcfc2990320efe396",
                category: "single", tracks: ["Parle moi (feat. Favé)"]
            },
            {
                titre: "Paillettes et strass (feat. SDM)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27388bd3a00d1e1110cf4cd8fe9",
                category: "feat", tracks: ["Paillettes et strass (feat. SDM)"]
            },
            {
                titre: "DEUXIEME BIGO", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731d7897b9953db36dfeaa9030",
                category: "single", tracks: ["DEUXIEME BIGO (feat. BLK 140)"]
            },
            {
                titre: "Catalina", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734cb04ea8a92d883a3de8f025",
                category: "project", tracks: ["Catalina (feat. Cheu-B, Ghost Killer Track)", "Catalina - Speed up (feat. Cheu-B, Ghost Killer Track)"]
            },
            {
                titre: "SWAT", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27320279fe209aa992eefc7c575",
                category: "single", tracks: ["SWAT (feat. La Mano 1.9)"]
            },
            {
                titre: "I.A", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a2296d83cba2707f7fe19bde",
                category: "single", tracks: ["I.A (feat. Sicario)"]
            },
            {
                titre: "David Douillet", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e14e6b4b99834c8b9022640e",
                category: "single", tracks: ["David Douillet (feat. L2B, iDS)"]
            },
            {
                titre: "Tout donner", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273705b267e531b72b269854707",
                category: "single", tracks: ["Tout donner (feat. Naza)"]
            },
            {
                titre: "R.10", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738c4511d929c29e594307ed1c",
                category: "single", tracks: ["R.10 (feat. AMK)"]
            },
            {
                titre: "Rihanna Remix", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273308c5163abddf180108c08ed",
                category: "project", tracks: ["Rihanna Remix (feat. SubLife, DIVIN)", "Rihanna Remix - Extended (feat. SubLife, DIVIN)"]
            },
            {
                titre: "Jalouse", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27367640a3b1eba6fa85215ac80",
                category: "single", tracks: ["Jalouse (feat. Werenoi, Vacra)"]
            },
            {
                titre: "Bolide allemand", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a07b836bcc664c1604bf010b",
                category: "single", tracks: ["Bolide allemand - Jaykill & Sublife Remix (feat. Jaykill, SubLife)"]
            },
            {
                titre: "Hélas", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736daa65eaace95529adc2d0e0",
                category: "single", tracks: ["Hélas (feat. TIF)"]
            },
            {
                titre: "Daytona", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273298270f88ec480295063258b",
                category: "single", tracks: ["Daytona (feat. Timal)"]
            },
            {
                titre: "Run", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d12156e0477ee2057cbfb0df",
                category: "single", tracks: ["Run (feat. Rim'K)"]
            },
            {
                titre: "Boulot", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737cd14da017ce5130216ce88d",
                category: "single", tracks: ["Boulot (feat. KeBlack)"]
            },
            {
                titre: "Only You", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27380dfc756a090535a563a9f6e",
                category: "single", tracks: ["Only You (feat. Soolking)"]
            },
            {
                titre: "A LA VIE A LA MORT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27370f8508745ea2e7fff2f510f",
                category: "project", tracks: ["DRAGO MALEFOY", "PLUS RIEN", "METALLICA (feat. Werenoi)", "POUR ELLE", "JEUX D'ECHECS", "CARTIER SANTOS", "ALVALM", "TOKA (feat. Hamza)", "MERCI", "AFFRANCHIS (feat. Josman)", "MAINTENANT ÇA VA", "J'Y PENSE (feat. Tiakola, Skread)", "SEQUOIA", "DANS LA TÊTE DES GENS"]
            },
            {
                titre: "METALLICA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273876dd81638312a02374dac6d",
                category: "single", tracks: ["METALLICA (feat. Werenoi)"]
            },
            {
                titre: "AFFRANCHIS", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27399046bc359c99440dbc7bf8b",
                category: "single", tracks: ["AFFRANCHIS (feat. Josman)"]
            },
            {
                titre: "PLAISIR NOCIF", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d1960d47e28446d1efb5c6d1",
                category: "single", tracks: ["PLAISIR NOCIF (feat. Tiakola, Liim’s)"]
            },
            {
                titre: "TOKA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737954b372a01dfa4a58af7cd5",
                category: "single", tracks: ["TOKA (feat. Hamza)"]
            },
            {
                titre: "MERCI", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273611a24c6367ea6e8ec63ff25",
                category: "single", tracks: ["MERCI"]
            },
            {
                titre: "TI TI TI", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d1ba96b4e68f2cb3faa1d24a",
                category: "single", tracks: ["TI TI TI (feat. Gradur, Rsko)"]
            },
            {
                titre: "Il pleut des balles", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f034d729d7ad9a75a98ea285",
                category: "single", tracks: ["Il pleut des balles (feat. Jul)"]
            },
            {
                titre: "YOMB", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273486a837f6143310d34ee5d38",
                category: "single", tracks: ["YOMB (feat. RK)"]
            },
            {
                titre: "Solitaire", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739467aa72245e217d81b8b301",
                category: "single", tracks: ["Solitaire (feat. Zed)"]
            },
            {
                titre: "Colisée (feat. SDM)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730ce3d3bfa14e17d29a2e2ce7",
                category: "feat", tracks: ["Colisée (feat. SDM)"]
            },
            {
                titre: "barcelona92", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d07c13829d7ace221cc9dcc5",
                category: "single", tracks: ["barcelona92 (feat. Green Montana)"]
            },
            {
                titre: "Finalement", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273abd07591b5b1d5b3aa203325",
                category: "single", tracks: ["Finalement (feat. Bekar)"]
            },
            {
                titre: "SIM", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27394c90af64de39ed67e5c7bf1",
                category: "single", tracks: ["SIM (feat. Likma 140)"]
            },
            {
                titre: "Dans un verre", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f304932060e9784c8c807f9b",
                category: "single", tracks: ["Dans un verre (feat. Werenoi)"]
            },
            {
                titre: "PANAMA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b86452557a1b5aa870ebc722",
                category: "single", tracks: ["PANAMA (feat. UZI)"]
            },
            {
                titre: "Dolce Camara", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a06535a19caf558bb208f655",
                category: "single", tracks: ["Dolce Camara (feat. Booba)"]
            },
            {
                titre: "J'fais plaisir à la zone", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735eb94486f026d16e93b71021",
                category: "single", tracks: ["J'fais plaisir à la zone (feat. Jul)"]
            },
            {
                titre: "DIS-MOI (feat. SDM)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ac43d033796ffb46d5fb9b28",
                category: "feat", tracks: ["DIS-MOI (feat. SDM)"]
            },
            {
                titre: "Vie", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c364b63ede5444766be9bba4",
                category: "single", tracks: ["Vie (feat. Slkrack)"]
            },
            {
                titre: "Rétina", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27349ab4b90661c793764bd4153",
                category: "single", tracks: ["Rétina (feat. USKY)"]
            },
            {
                titre: "Nous deux", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735c5d0af166043ea21f1a82b7",
                category: "single", tracks: ["Nous deux"]
            },
            {
                titre: "Les filles d'à côté", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273da0b406df3bb6af77646e65f",
                category: "single", tracks: ["Les filles d'à côté (feat. Bilton)"]
            },
            {
                titre: "Daddy", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732c1746c9651fb5f1fb9dd8e2",
                category: "single", tracks: ["Daddy (feat. Aya Nakamura)"]
            },
            {
                titre: "Liens du 100", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c78042f41f8d188f63013123",
                category: "project", tracks: ["Mr. Ocho", "Bolide allemand", "Ragnar", "Nwar sur Nwar (feat. Green Montana)", "Si tu savais", "Cette année-là", "Fame (feat. Niska)", "Dans le club", "Jacque*** Bag", "Franklin Saint (feat. Zed, Slkrack)", "2sang43", "Redescends (feat. Tiakola)", "File de gauche", "Le temps", "Sang40", "Nous deux"]
            },
            {
                titre: "Nwar sur Nwar", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e0ecd6b2b043d9074ad303f5",
                category: "single", tracks: ["Nwar sur Nwar (feat. Green Montana)"]
            },
            {
                titre: "Franklin Saint", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d041250999c5a2fb62dcda84",
                category: "single", tracks: ["Franklin Saint (feat. Zed, Slkrack)"]
            },
            {
                titre: "Ragnar", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273ef23c369795b3904a92492ca",
                category: "single", tracks: ["Ragnar"]
            },
            {
                titre: "Redescends (feat Tiakola)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273ed7bea82ccf6b2bf0a572ac5",
                category: "single", tracks: ["Redescends (feat Tiakola) (feat. Tiakola)"]
            },
            {
                titre: "Gâchette", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273fcd73222164b6e250bb13a08",
                category: "single", tracks: ["Gâchette"]
            },
            {
                titre: "Roro (feat. SDM)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e03c0ca47294c0ff7dc9e8c7",
                category: "feat", tracks: ["Roro (feat. SDM)"]
            },
            {
                titre: "NEYMAR JR", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bad9e6e08cec3a3cb447f752",
                category: "single", tracks: ["NEYMAR JR (feat. Green Montana)"]
            },
            {
                titre: "Ça débite (feat. SDM)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cda0f53f483cb5e178a8a3f6",
                category: "feat", tracks: ["Ça débite (feat. SDM)"]
            },
            {
                titre: "R.A.S.", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c1cccad31979493eca957d5f",
                category: "single", tracks: ["R.A.S. (feat. Landy)"]
            },
            {
                titre: "Bitume", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27383c0bdf62f24cdb489b0ce63",
                category: "single", tracks: ["Bitume (feat. L2B)"]
            },
            {
                titre: "OCHO (Deluxe)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e9df9b5a7df491536c51c922",
                category: "project", tracks: ["#Malentouré", "Passat (feat. Maes)", "Mot Final", "Invictus", "Radio", "La zone (feat. Booba)", "A l'affût", "Titulaires (feat. Koba LaD)", "Prince de la Calle", "92i (feat. Green Montana, Booba, Bilton, Sicario)", "Intro", "Yakalelo", "Rihanna", "Le bruit des applaudissements (feat. PLK)", "Cello", "Van Damme", "Appelez les Pim-Pom", "Daddy (feat. Booba)", "La vie de rêve", "Rentrer", "Keur Nwar", "Droit de véto (feat. Fally Ipupa)", "Love", "Game Over (feat. Bramsito)", "Compte sur moi", "100-OCHO"]
            },
            {
                titre: "Passat", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732eeea4d88020f2855db0ff7f",
                category: "single", tracks: ["Passat (feat. Maes)"]
            },
            {
                titre: "92i", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27377e20d311b4ce90ed8f0e809",
                category: "single", tracks: ["92i (feat. Green Montana, Booba, Bilton, Sicario)"]
            },
            {
                titre: "#Malentouré", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733f2bf75cb6bcfa6ba464515d",
                category: "single", tracks: ["#Malentouré"]
            },
            {
                titre: "En ville", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731654d4ca9fe8aef766165b0a",
                category: "single", tracks: ["En ville (feat. PLK)"]
            },
            {
                titre: "Freestyle 8", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738404393630420d9d974be2e8",
                category: "single", tracks: ["Freestyle 8"]
            },
            {
                titre: "Vie d'Avant", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735b7ff9df85c560c0ed9a7274",
                category: "single", tracks: ["Vie d'Avant (feat. Lazzio)"]
            },
            {
                titre: "Tue ça", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b56487a69d85cc0c45dd3050",
                category: "single", tracks: ["Tue ça (feat. Koba LaD, Guy2Bezbar)"]
            },
            {
                titre: "EVIDEMMENT", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a6bc2e82d2a9c810ab49b525",
                category: "single", tracks: ["EVIDEMMENT (feat. Green Montana)"]
            },
            {
                titre: "Van Damme", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738a7f933872649b5ebc166b11",
                category: "single", tracks: ["Van Damme"]
            },
            {
                titre: "La vie de rêve", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27396b80869d3ededa477589804",
                category: "single", tracks: ["La vie de rêve"]
            },
            {
                titre: "Prince de la Calle", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273bfd35db3beb2f365f0ef5e86",
                category: "single", tracks: ["Prince de la Calle"]
            },
            {
                titre: "Titulaires", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27307032016eeff7ae499405885",
                category: "single", tracks: ["Titulaires (feat. Koba LaD)"]
            },
            {
                titre: "MINIMUM", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2734a3813d95f6d7c84c273abf5",
                category: "single", tracks: ["MINIMUM"]
            },
            {
                titre: "Yakalelo", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736f02669746c27b3e8f439726",
                category: "single", tracks: ["Yakalelo"]
            },
            {
                titre: "A l'affût", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2734c0a97a83ce85c9c9b1f2fff",
                category: "single", tracks: ["A l'affût"]
            },
            {
                titre: "La zone", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739109f04272adf02e43440458",
                category: "single", tracks: ["La zone feat. Booba (feat. Booba)"]
            },
            {
                titre: "Jack Fuego", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273351e4950507132984ca22334",
                category: "single", tracks: ["Jack Fuego (feat. PLK)"]
            },
            {
                titre: "12h", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273e198fbd2ea9c9a1106a66599",
                category: "single", tracks: ["12h"]
            },
            {
                titre: "PremieRôle", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27306220f8d0a715ca95ae1a635",
                category: "single", tracks: ["PremieRôle"]
            },
            {
                titre: "Cala Boca", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273bf6c5bfa6e9f42f139ba85c8",
                category: "single", tracks: ["Cala Boca"]
            },
            {
                titre: "AVLD", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27303206ce646f294838e98c7c1",
                category: "single", tracks: ["AVLD"]
            },
            {
                titre: "Shottas", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273bed41bd41b570d324e036551",
                category: "single", tracks: ["Shottas"]
            },
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
        bio: "Polak. L'efficacité incarnée, entre technique et mélodie.",
        bioLongue: "PLK (Polak), originaire de Clamart, est un rappeur complet. Ancien membre du Panama Bende, il a su construire une carrière solo solide grâce à une technique irréprochable et un sens de la mélodie aiguisé. Certifié à de multiples reprises, il enchaîne les projets à succès comme 'Enna', prouvant sa constance et sa polyvalence.",
        albums: [
            {
                titre: "Astrid", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736256a0962e69639a8b5d821d",
                category: "single", tracks: ["Astrid (feat. JRK 19)"]
            },
            {
                titre: "Les jolies filles", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27308cea51e65368af30f82ecf0",
                category: "single", tracks: ["Les jolies filles (feat. Zamdane)"]
            },
            {
                titre: "ON FAIT LES CHOSES", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27339cdc389eba2971d87f31a76",
                category: "single", tracks: ["ON FAIT LES CHOSES (feat. Niaks)"]
            },
            {
                titre: "ALICANTE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27391390e429f7c886dd9d4c1a8",
                category: "single", tracks: ["ALICANTE (feat. Karmen)"]
            },
            {
                titre: "Tableau de bord", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f2a9341f4d2e3e981e7b4b5e",
                category: "single", tracks: ["Tableau de bord (feat. Alonzo)"]
            },
            {
                titre: "Vieilles Gueules", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27314093de6a6dd1e73769d7163",
                category: "single", tracks: ["Vieilles Gueules (feat. Ormaz)"]
            },
            {
                titre: "Faux Paradis", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731f5eeb5c9fb41a94482b2130",
                category: "single", tracks: ["Faux Paradis (feat. Soprano)"]
            },
            {
                titre: "DEFONCE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cedfbcc9e0a904a94e47d7b9",
                category: "single", tracks: ["DEFONCE (feat. Lisko Peligrosso)"]
            },
            {
                titre: "En pétard", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735cc1a259e8f569551c4f842c",
                category: "single", tracks: ["En pétard (feat. Werenoi)"]
            },
            {
                titre: "Allez (feat. PLK & Naps)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cd4e4ef7068cc5fc6d76143d",
                category: "feat", tracks: ["Allez (feat. PLK & Naps)"]
            },
            {
                titre: "Ledger (feat. PLK)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c7334144f9c21db28c95f3c2",
                category: "feat", tracks: ["Ledger (feat. PLK)"]
            },
            {
                titre: "Confidences", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273926932217b903ec61c4ce2e9",
                category: "single", tracks: ["Confidences (feat. Vacra)"]
            },
            {
                titre: "Chambre 140 (Part.3)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273478b7d68b5755066144886e5",
                category: "project", tracks: ["* * * * *", "Ça fait longtemps", "Onana", "Faut pas (feat. Jul)", "La vraie vie", "Interlude * * * * *", "Chouchou (feat. Vacra)", "1€ / 1Eu", "Mon poto", "Une pêche une patate", "* * *", "Chambre 140", "En mieux (feat. Hamza)", "Dangereux", "Mignon tout plein", "Interlude * * *", "P*tain", "Bikini Bottom", "J'attends", "Avec les miens", "*", "EA7", "Gare du Nord", "Ça mène à rien (feat. Gazo)", "A l'envers", "Interlude *", "Flash", "La nuit (feat. TIF)", "Périph", "Sun", "Il pleut à Paris"]
            },
            {
                titre: "Faut pas", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ba05a869e3e0efe1982eeb7e",
                category: "single", tracks: ["Faut pas (feat. Jul)"]
            },
            {
                titre: "Chouchou", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27316af89796f84ebf719de2680",
                category: "single", tracks: ["Chouchou (feat. Vacra)"]
            },
            {
                titre: "En mieux", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fdc94fbf12c62a47ed361992",
                category: "single", tracks: ["En mieux (feat. Hamza)"]
            },
            {
                titre: "Ça mène à rien", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27322f63401d186eff0d16b9c35",
                category: "single", tracks: ["Ça mène à rien (feat. Gazo)"]
            },
            {
                titre: "La nuit", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738f21c4312e87874b68050c00",
                category: "single", tracks: ["La nuit (feat. TIF)"]
            },
            {
                titre: "Périph", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27315042e5bdc1292bb08385778",
                category: "single", tracks: ["Périph"]
            },
            {
                titre: "Postiché", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273972c75a7bd176ce4318ce36a",
                category: "single", tracks: ["Postiché (feat. Jul)"]
            },
            {
                titre: "Heist (feat. PLK)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27305e435b90c265878a7da8ace",
                category: "feat", tracks: ["Heist (feat. PLK)"]
            },
            {
                titre: "2069'", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273390bfa914f9f7b04582aba5d",
                category: "project", tracks: ["POL-AK", "Demain", "10 minutes (feat. Dinos)", "Nouvelles", "Cash", "7/7 (feat. Kerchak)", "Pas de sentiments", "Pelo", "Panama Bende", "Décembre"]
            },
            {
                titre: "7/7", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273104027fffb432337149b7ae6",
                category: "single", tracks: ["7/7 (feat. Kerchak)"]
            },
            {
                titre: "10 minutes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f82188ce4922b65cf2f78ff4",
                category: "single", tracks: ["10 minutes (feat. Dinos)"]
            },
            {
                titre: "Fisheye", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738b3bfdaf6d4a7b3ee16ff2e5",
                category: "feat", tracks: ["Fisheye (feat. PLK)"]
            },
            {
                titre: "Escorte", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a407ea0b2ddc7dd5872c4ecb",
                category: "single", tracks: ["Escorte (feat. Werenoi)"]
            },
            {
                titre: "Décembre - A COLORS SHOW", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734ee916bc183a97cb3407da21",
                category: "single", tracks: ["Décembre - A COLORS SHOW (feat. COLORS)"]
            },
            {
                titre: "Décembre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273457610849931f294d22463d0",
                category: "single", tracks: ["Décembre"]
            },
            {
                titre: "Quand tout s'enflamme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dd2f47fe98555b70056903eb",
                category: "single", tracks: ["Quand tout s'enflamme (feat. Georgio)"]
            },
            {
                titre: "Cullinan : Gelée Royale (Partie 1)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734228d24cd24761112aaff2d2",
                category: "project", tracks: ["Saigne (feat. Dadju)", "Parle-moi (feat. Dadju)", "Des fois (feat. Dadju)"]
            },
            {
                titre: "Des années", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c164b24e47a41128f9aac0fd",
                category: "single", tracks: ["Des années (feat. Shtar Academy, Ryan, Perkiz)"]
            },
            {
                titre: "Mondeo (feat. PLK)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e7044e1c2a72df76c7c05c22",
                category: "feat", tracks: ["Mondeo (feat. PLK)"]
            },
            {
                titre: "Émotif (Booska 1H) [Club Remix]", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273686c829bb1e3da0d86f4f040",
                category: "single", tracks: ["Émotif (Booska 1H) - Club Remix (feat. Kamil Ghaouti)"]
            },
            {
                titre: "Mauvais dans le fond", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731e315ebf9df60a39acfaaa71",
                category: "single", tracks: ["Mauvais dans le fond (feat. S-Crew, Doums)"]
            },
            {
                titre: "Nuage qui passe", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739f890dccf13257d002fbdee3",
                category: "single", tracks: ["Nuage qui passe (feat. Nessbeal)"]
            },
            {
                titre: "Bordel", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27301e37418f2e8fc701a9b07dd",
                category: "single", tracks: ["Bordel (feat. Tiitof)"]
            },
            {
                titre: "Tour de France", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c4a76323b03b63217ad22a23",
                category: "single", tracks: ["Tour de France (feat. Kabe, Favst, Gibbs)"]
            },
            {
                titre: "Enna Boost", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e7920f048947a2cb6371557a",
                category: "project", tracks: ["Boost", "R.A.F", "En ville (feat. SDM)", "Si ça marche plus", "Attentat (feat. OBOY)", "Hubert et Saïd", "Perdu", "Amérique", "Incontrolables (feat. SCH)", "A la base", "10 Millions", "Bénef", "On sait jamais (feat. Niska)", "Les comptes", "Billet d'20", "Dégaine de bandit", "Dans les clips", "C'est mort", "Pourtant", "Mamie", "Alleluia", "Chandon et Moët (feat. Heuss L'enfoiré)", "Calme", "La vie c'est marrant", "3 en 1", "Toutes générations (feat. Rim'K)", "Au fond d'ma tête", "Pilote (feat. Hamza)", "Terrible"]
            },
            {
                titre: "Incontrolables", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731a66ad1fa6d3d801c9023e00",
                category: "single", tracks: ["Incontrolables (feat. SCH)"]
            },
            {
                titre: "En ville", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731654d4ca9fe8aef766165b0a",
                category: "single", tracks: ["En ville (feat. SDM)"]
            },
            {
                titre: "Attentat", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27324afdaa5a0c7b9978cb69d62",
                category: "single", tracks: ["Attentat (feat. OBOY)"]
            },
            {
                titre: "Le classico organisé", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273299eab3452ee52b4616db9d4",
                category: "single", tracks: ["Le classico organisé (feat. Koba LaD, Gazo, SCH, Jul, Naps, Guy2Bezbar, Kofs, Soso Maness, Le classico organisé)"]
            },
            {
                titre: "BNB", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273436fdaa1fe11f6c664f2d562",
                category: "single", tracks: ["BNB (feat. Enima)"]
            },
            {
                titre: "A la base", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735c419f46bbd4f8cbc984c4af",
                category: "single", tracks: ["A la base"]
            },
            {
                titre: "Petrouchka (feat. PLK & RAF Camora) [Remix]", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730a11b1557b4dc6ad9d25d033",
                category: "feat", tracks: ["Petrouchka (feat. PLK & RAF Camora) - Remix"]
            },
            {
                titre: "Petrouchka (feat. PLK)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273feb98501e9a4f322b781eb83",
                category: "feat", tracks: ["Petrouchka (feat. PLK)"]
            },
            {
                titre: "⁹ Sorry", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e0ff69101a06af4509111869",
                category: "single", tracks: ["⁹ Sorry (feat. Tsew The Kid)"]
            },
            {
                titre: "Fils 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737beaf1223a4eaf13620e79d3",
                category: "single", tracks: ["Fils 2 (feat. Niro)"]
            },
            {
                titre: "Cosmos", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c77ad6ed546840b4b03ae79c",
                category: "single", tracks: ["Cosmos (feat. Rim'K)"]
            },
            {
                titre: "Pas bien (Extrait de la BO de « En Passant Pécho »)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27309a970cdf82d8ec986a3f179",
                category: "single", tracks: ["Pas bien - Extrait de la BO de « En Passant Pécho » (feat. Kore)"]
            },
            {
                titre: "Tu vois comment ?", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731312740ba8652df981093f2b",
                category: "single", tracks: ["Tu vois comment ? (feat. Zkr)"]
            },
            {
                titre: "Enna", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ab779f2adb1007f0321ecab8",
                category: "project", tracks: ["Bénef", "On sait jamais (feat. Niska)", "Les comptes", "Billet d'20", "Dégaine de bandit", "Dans les clips", "C'est mort", "Pourtant", "Mamie", "Alleluia", "Chandon et Moët (feat. Heuss l'Enfoiré)", "Calme", "La vie c'est marrant", "3 en 1", "Toutes générations (feat. Rim'K)", "Au fond d'ma tête", "Pilote (feat. Hamza)", "Terrible"]
            },
            {
                titre: "Grosses Sommes", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27369933aa55e17415e63b13fbd",
                category: "single", tracks: ["Grosses Sommes (feat. Matou)"]
            },
            {
                titre: "Tous les jours (Bizi'N the Hood #5)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273905e81ae0ef53923e462122c",
                category: "single", tracks: ["Tous les jours (Bizi'N the Hood #5) (feat. Phénomène Bizness)"]
            },
            {
                titre: "Mental", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273fb231919866fc73ec12d145f",
                category: "project", tracks: ["Intr100000", "Un peu de haine", "Arai", "Toute l'année (feat. Timal)", "Hola", "Travailler", "Nana", "Meilleur cauchemar", "Tout recommencer (feat. Tessa B)", "V2V", "Corazon (feat. Aladin 135)", "Le P", "Ma génération", "Mental", "Problèmes", "Cartelo (feat. Maes)", "RS3", "TT", "Temps perdu"]
            },
            {
                titre: "Polak", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2739ee288482ec17f1d091ffad2",
                category: "project", tracks: ["Intro", "Le sel", "Waow (feat. Nekfeu)", "Séparer", "250", "Idiote", "Polak", "Gozier (feat. Paluch)", "Bunkoeur", "Monégasque", "Hier (feat. SCH)", "Ils nous comprennent pas", "Olcho Gvng", "Weed", "Enfant du hall", "Dingue", "Sans suite", "Émotif (Booska 1H)"]
            },
            {
                titre: "Platinum", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273d34da31b55f52c4c06a12dff",
                category: "project", tracks: ["Pas besoin", "Mentalité", "Izé", "A A A", "La rue", "Pas les mêmes", "Homies", "Colis piégés (feat. Lefa)", "Platinum", "260", "Copine", "High", "Niveau", "Dis-moi oui", "Go (feat. Krisy)", "C'est grave", "Flamenco - Bonus Track"]
            },
            {
                titre: "Règlement Freestyle #17", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736c69e96a32912f7ae31698c6",
                category: "single", tracks: ["Règlement Freestyle #17"]
            },
            {
                titre: "Ténébreux", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273ffaaa8781a98f21af5817119",
                category: "project", tracks: ["Amigo", "Ténébreux", "Fin de mois", "Faut croire", "Pas ce soir (feat. Krisy)", "Casino", "All Night", "Avec moi", "Aimer", "Yeux", "Du mal"]
            },
            {
                titre: "Du mal - Single", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27337076342f4bbe3096df90038",
                category: "single", tracks: ["Du mal"]
            },
            {
                titre: "Dedans", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27366d52d3cc918c5951ac2ccbe",
                category: "project", tracks: ["Plata O Plomo", "Shérif", "Juste Un Petit Peu", "Skuu (feat. Krisy)", "Hall"]
            },
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
        bio: "L'OVNI marseillais. Le plus gros vendeur de l'histoire du rap français.",
        bioLongue: "Jul est un phénomène unique. Avec son signe de mains emblématique et sa productivité hallucinante (plusieurs albums par an), il a créé son propre style musical, la 'Team Jul'. Détesté par les puristes à ses débuts, il a fini par conquérir tout le pays et devenir le plus gros vendeur de disques de l'histoire du rap français, réunissant toutes les générations.",
        albums: [
            {
                titre: "Tu tenenew", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730b633fabfed5fcd962245d92",
                category: "single", tracks: ["Tu tenenew"]
            },
            {
                titre: "Nostalgique", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732854101e47036e1d3c4ae6a7",
                category: "single", tracks: ["Nostalgique"]
            },
            {
                titre: "Album gratuit, vol. 8", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273dc67dcc2381611970d419e07",
                category: "project", tracks: ["On a pas peur", "Les pauvres", "Faut que je mette les voiles", "Je suis sous les étoiles", "Fausse", "Je les monte en l'air", "Hijo de puta", "Dérapage", "Oulala", "Le verre de trop (feat. Houari)", "Y a les poulets", "La capucha", "La vie (feat. Le Rat Luciano)", "King", "Gros dégun"]
            },
            {
                titre: "Gros dégun", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d19ce65e7478d3aa5f8c01bd",
                category: "single", tracks: ["Gros dégun"]
            },
            {
                titre: "King", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732d8dfc1286c1af8c8b32bfad",
                category: "single", tracks: ["King"]
            },
            {
                titre: "La vie", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273194013d2af5577d62dac8829",
                category: "single", tracks: ["La vie (feat. Le Rat Luciano)"]
            },
            {
                titre: "La capucha", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a22f9fe5774bb405cc2a60ff",
                category: "single", tracks: ["La capucha"]
            },
            {
                titre: "Y a les poulets", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733f3750d7f987eca8cecf36c3",
                category: "single", tracks: ["Y a les poulets"]
            },
            {
                titre: "Le verre de trop", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27389d7b9c4dc70c76bd9b91cad",
                category: "single", tracks: ["Le verre de trop (feat. Houari)"]
            },
            {
                titre: "Oulala", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730c7cf55215fc446217b134e7",
                category: "single", tracks: ["Oulala"]
            },
            {
                titre: "Dérapage", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730e950261e3db5a3cf1a2f45c",
                category: "single", tracks: ["Dérapage"]
            },
            {
                titre: "Hijo de puta", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a4afdaebde4f9c6a0e79341e",
                category: "single", tracks: ["Hijo de puta"]
            },
            {
                titre: "Je les monte en l'air", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fadd8edde456378ba0fda350",
                category: "single", tracks: ["Je les monte en l'air"]
            },
            {
                titre: "Fausse", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273048bfe5eb62d9285f51749a2",
                category: "single", tracks: ["Fausse"]
            },
            {
                titre: "Je suis sous les étoiles", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734bc3e4e8ae66b86f77743c4b",
                category: "single", tracks: ["Je suis sous les étoiles"]
            },
            {
                titre: "Faut que je mette les voiles", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733d10a5b045976fd774d65b42",
                category: "single", tracks: ["Faut que je mette les voiles"]
            },
            {
                titre: "Alo Alo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732671c24eea3bc9d2cb139bd5",
                category: "single", tracks: ["Alo Alo (feat. Haaland936)"]
            },
            {
                titre: "Les pauvres", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e94bf4542f9f16c12b430aad",
                category: "single", tracks: ["Les pauvres"]
            },
            {
                titre: "On a pas peur", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ce616584f07d47ec629fd20a",
                category: "single", tracks: ["On a pas peur"]
            },
            {
                titre: "Ma Bella", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733cd3d7a74ade02fa0405d88f",
                category: "single", tracks: ["Ma Bella (feat. MC Menor JP, The Ironix)"]
            },
            {
                titre: "Moto noire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f72f971358cf8de246734b6b",
                category: "single", tracks: ["Moto noire"]
            },
            {
                titre: "Ma vie", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27324aa200e4d4547975150ccc4",
                category: "single", tracks: ["Ma vie"]
            },
            {
                titre: "Loin de moi", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273dc4d48385cf97364dcccb1e1",
                category: "single", tracks: ["Loin de moi"]
            },
            {
                titre: "Survet D&P", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b046861bd6902007a9bd8111",
                category: "single", tracks: ["Survet D&P (feat. Haaland936)"]
            },
            {
                titre: "Lunettes quartier", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27389016aa9cc6ed85e048b6c99",
                category: "single", tracks: ["Lunettes quartier"]
            },
            {
                titre: "Toi et moi", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273701fe846693fc4fcaef860c8",
                category: "single", tracks: ["Toi et moi"]
            },
            {
                titre: "Où on va ?", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d7926b12c020d2f53c62cdc9",
                category: "single", tracks: ["Où on va ?"]
            },
            {
                titre: "Corazon", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730a3864af90fc297a6a511cf6",
                category: "single", tracks: ["Corazon (feat. GIMS)"]
            },
            {
                titre: "Tana", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f05ded9a21e3b62a4b47d89b",
                category: "single", tracks: ["Tana (feat. Houari)"]
            },
            {
                titre: "D&P à vie", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737bc2e0b265c5034dbe7cf47e",
                category: "project", tracks: ["Wouaw", "Phénoménal", "Sous l'eau", "Cache ta Rolex", "Bentayga", "Love et haine (feat. Le Rat Luciano)", "Mimi", "Je t'aime pour la vie", "Ma puce", "Tu sais d'où je viens", "2 coups d'avance", "D&P à vie", "Après l'apéro", "Comme tu fais on te fera", "J'ai besoin d'air", "Ils le savent", "4 4 2", "Que des promesses", "Je veux plus te voir", "Corazon (feat. GIMS)", "Où on va ?", "Toi et moi", "Lunettes quartier", "Survet D&P (feat. Haaland936)", "Loin de moi", "Ma vie", "Moto noire"]
            },
            {
                titre: "Love et haine", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738732ba9c7ed679239e7b8eb7",
                category: "single", tracks: ["Love et haine (feat. Le Rat Luciano)"]
            },
            {
                titre: "2 coups d'avance", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735b2db0d74c588bf570bc4488",
                category: "single", tracks: ["2 coups d'avance"]
            },
            {
                titre: "Phénoménal", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f5435647b16b9402f7113eaa",
                category: "single", tracks: ["Phénoménal"]
            },
            {
                titre: "Scanné", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273354de7f67ff6a8f1a6dfb693",
                category: "single", tracks: ["Scanné (feat. Alonzo)"]
            },
            {
                titre: "Inarrêtable", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27384fcb225fcd2a8fb7d7b26c5",
                category: "project", tracks: ["Y'a plus de reconnaissance", "Je m'habille pas en Versace", "Un jour, je l'aurai", "Arrête tes manières", "Je veux que toi", "C'est ça les collègues ?", "Maille (feat. Bad Gyal)", "Capata (feat. FRANCÈ ZITO)", "Montblanc", "Plus de pitié", "Coeur en or", "Un heureux, un déçu", "Partire (feat. Baby Gang)", "Ma douce", "Boucle dorée", "La vie me blesse", "Wesh alors le deum", "C'est pas la peine", "Je suis fait pour...", "Fugati", "Un point c'est tout", "Toujours la même", "Rare comme un diamant"]
            },
            {
                titre: "Maille", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732c4713662f57250946205110",
                category: "single", tracks: ["Maille (feat. Bad Gyal)"]
            },
            {
                titre: "Capata", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738ce5f013ea12b269a68e71f4",
                category: "single", tracks: ["Capata (feat. FRANCÈ ZITO)"]
            },
            {
                titre: "Un jour, je l'aurai", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273edf3b8872ea84a42248c76b6",
                category: "single", tracks: ["Un jour, je l'aurai"]
            },
            {
                titre: "Freestyle Inarrêtable", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eef3f6cb61f244095b363caa",
                category: "single", tracks: ["Freestyle Inarrêtable"]
            },
            {
                titre: "Respectés dans le monde", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734a0bbbf1b5528158202a87e9",
                category: "single", tracks: ["Respectés dans le monde (feat. Akhenaton, Shuriken, 13 Organisé, DJ Djel, Alonzo, Le Rat Luciano, Soprano, L'Algérino, Sat)"]
            },
            {
                titre: "Mental 13", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273dcc9f94fc181d42033b4fe60",
                category: "single", tracks: ["Mental 13 (feat. 13 Organisé, So La Zone, TK, YL, Missan, Soso Maness, Kamikaz, Elams)"]
            },
            {
                titre: "Sous le soleil", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730494e891bdface1e0b6a2902",
                category: "single", tracks: ["Sous le soleil (feat. 13 Organisé, L'Algérino, Sat, Fahar, Alonzo, Le Rat Luciano, Menzo, Don Choa, As, Vincenzo, Soprano)"]
            },
            {
                titre: "Bande organisée 2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737cfde48c236b512980c813df",
                category: "single", tracks: ["Bande organisée 2 (feat. 13 Organisé, Alonzo, SCH, Kofs, Soso Maness, Houari, Elams, Solda, Naps)"]
            },
            {
                titre: "Mise à jour", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739610f139a88a082130c731af",
                category: "project", tracks: ["Mafiosa", "Me prends pas la tête", "Tié fou", "Je change pas", "Le couz du 12", "Holà que tal ?", "Vrai sancho", "GTA", "Dans l'RS3", "Il pleut des balles (feat. SDM)", "No remords", "Vida loca (feat. Morad)", "I'm sorry", "Non-stop (feat. A-Deal, Moubarak, Zbig)", "Ça tire (feat. Houari, Kamikaz)", "Plein de manies", "BB", "J'ai pris le mic", "C'est ce que je voulais", "L'alien", "Visage masqué", "La Chabrand"]
            },
            {
                titre: "Ça tire", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273721e3d6d519c5aad6678919c",
                category: "single", tracks: ["Ça tire (feat. Houari, Kamikaz)"]
            },
            {
                titre: "Vanillée", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739bf787d88149ab09dbbf26d2",
                category: "single", tracks: ["Vanillée (feat. Houari)"]
            },
            {
                titre: "Non-stop", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fe31949fb099cfa473f5d3e4",
                category: "single", tracks: ["Non-stop (feat. A-Deal, Moubarak, Zbig)"]
            },
            {
                titre: "Il pleut des balles", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f034d729d7ad9a75a98ea285",
                category: "single", tracks: ["Il pleut des balles (feat. SDM)"]
            },
            {
                titre: "J'ai pris le mic", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a6adb1d7477a23115207f208",
                category: "single", tracks: ["J'ai pris le mic"]
            },
            {
                titre: "Piccolo", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f0f24605d04db6bb7f980aab",
                category: "single", tracks: ["Piccolo (feat. Morad, SativaMusic)"]
            },
            {
                titre: "Dolce Vita", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273437292371241e2660458ee05",
                category: "single", tracks: ["Dolce Vita (feat. Moubarak)"]
            },
            {
                titre: "Faut pas", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ba05a869e3e0efe1982eeb7e",
                category: "single", tracks: ["Faut pas (feat. PLK)"]
            },
            {
                titre: "Décennie", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273735f5c18f82a88d3e65abd61",
                category: "project", tracks: ["Siège chauffant", "D'or et de diamant", "Je salue", "Avec tonton (feat. Rim'K)", "Vacancia", "C'est pas grandiose", "TP dans le froid (feat. Zkr, Le Rat Luciano)", "Love de toi", "Blocco (feat. Baby Gang)", "Le trio ternura (feat. Alonzo, SCH)", "Tout ce qu'il faut", "Power", "Pitchi Mamore", "Oh qu'elle est belle (feat. DYSTINCT)", "Mon top model", "Ne me fais plus coucou", "On sent pas les coups (feat. KVRA)", "Cramoutch", "Découpage", "Incognito", "Couz", "Sicario (feat. Houari)", "Corps griffé (feat. Moubarak)"]
            },
            {
                titre: "TP dans le froid", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737e9c21e0f26a815fd2417a37",
                category: "single", tracks: ["TP dans le froid (feat. Le Rat Luciano, Zkr)"]
            },
            {
                titre: "On sent pas les coups", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27343c72cc045108283370ba111",
                category: "single", tracks: ["On sent pas les coups (feat. KVRA)"]
            },
            {
                titre: "Oh qu'elle est belle", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735b14d5624949bad0fc5041ff",
                category: "single", tracks: ["Oh qu'elle est belle (feat. DYSTINCT)"]
            },
            {
                titre: "Love de toi", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731de20027da16fe2de19f9219",
                category: "single", tracks: ["Love de toi"]
            },
            {
                titre: "Le trio ternura", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27327a03248acc41f431452deed",
                category: "single", tracks: ["Le trio ternura (feat. Alonzo, SCH)"]
            },
            {
                titre: "Blocco", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736cfb6b5e25db6c35ffed7f1c",
                category: "single", tracks: ["Blocco (feat. Baby Gang)"]
            },
            {
                titre: "Avec tonton", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27363555e88d414a55a8b9852ce",
                category: "single", tracks: ["Avec tonton (feat. Rim'K)"]
            },
            {
                titre: "La route est longue", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734967a6d7e47e5da99c4c2400",
                category: "project", tracks: ["Le rappeur à 3 lettres", "La máquina", "Dans ma mama", "La fusion (feat. Alonzo)", "Miné sur Paname (feat. Tiakola)", "Luffy", "C'est pas facile", "J'suis pas devin", "J'fais plaisir à la zone (feat. SDM)", "Y'a plus de raison", "Sensations", "Au-dessus de l'Atlas", "Postiché (feat. PLK)", "La route est longue", "Sali", "Juste un bisou (feat. Naza)", "Battistu", "J'fais que danser", "Sherbet", "Y'a pas d'âge pour pleurer", "Beuh d'Hollande", "En revenant d'Alicante", "Business"]
            },
            {
                titre: "Postiché", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273972c75a7bd176ce4318ce36a",
                category: "single", tracks: ["Postiché (feat. PLK)"]
            },
            {
                titre: "La fusion", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c546ff92becfb5888a210815",
                category: "single", tracks: ["La fusion (feat. Alonzo)"]
            },
            {
                titre: "Juste un bisou", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739b1294bd963b9d6907c73a89",
                category: "single", tracks: ["Juste un bisou (feat. Naza)"]
            },
            {
                titre: "J'fais plaisir à la zone", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735eb94486f026d16e93b71021",
                category: "single", tracks: ["J'fais plaisir à la zone (feat. SDM)"]
            },
            {
                titre: "Miné sur Paname", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a952ade8daac0a24b09634bb",
                category: "single", tracks: ["Miné sur Paname (feat. Tiakola)"]
            },
            {
                titre: "Sensations", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27330de7be1af2969f56d1523d4",
                category: "single", tracks: ["Sensations"]
            },
            {
                titre: "J'fais que danser", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b360d9251e1aa9ffe96903bb",
                category: "single", tracks: ["J'fais que danser"]
            },
            {
                titre: "Ha ha ha", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27384e9a1c008980308c0b992ce",
                category: "single", tracks: ["Ha ha ha"]
            },
            {
                titre: "C'est quand qu'il s'éteint ?", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735a5a16ac8fe5ac8514ef436a",
                category: "project", tracks: ["La faille", "Entraînement", "Chagriné", "Alcantara", "Courtois", "Range ton égo", "Mazé", "Coco (feat. Vacra)", "DP sur le maillot", "Ragnar", "Faut s'enfuir", "Montana", "À la vue", "Je m'en fous de tout (feat. Dabeull)", "Mon sucre d'amour (feat. DJ Sozé)", "Uwa Ni Lé (feat. Obilisa, Medi Meyz)", "Opérationnel", "Droit au but", "Ma gentillesse", "Sentimental", "Cœur démoli (feat. Nia)", "Tropical", "C'est quand qu'il s'éteint ?", "Le cœur avant tout", "Buakaw", "En roue libre (feat. Moubarak, Houari)"]
            },
            {
                titre: "En roue libre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730bff2eeed50f0133efa3eb99",
                category: "single", tracks: ["En roue libre (feat. Moubarak, Houari)"]
            },
            {
                titre: "Coco", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27321e986bee4f0aca59c0d3b79",
                category: "single", tracks: ["Coco (feat. Vacra)"]
            },
            {
                titre: "Uwa Ni Lé", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d6109a545ee3437c7702b8d2",
                category: "single", tracks: ["Uwa Ni Lé (feat. Obilisa, Medi Meyz)"]
            },
            {
                titre: "Mon sucre d'amour", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e2eff98d4f141f4561a18d53",
                category: "single", tracks: ["Mon sucre d'amour (feat. DJ Sozé)"]
            },
            {
                titre: "Cœur démoli", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731025aa8902f8781bd19c9494",
                category: "single", tracks: ["Cœur démoli (feat. Nia)"]
            },
            {
                titre: "Entraînement", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730b25800bfcf8e10e1c6dc0bb",
                category: "single", tracks: ["Entraînement"]
            },
            {
                titre: "Ragnar", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27308f5c1530fc4689aa493aa7a",
                category: "single", tracks: ["Ragnar"]
            },
            {
                titre: "La faille", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273bd27d89f43436a6487849fb3",
                category: "single", tracks: ["La faille"]
            },
            {
                titre: "À FORCE DE VIVRE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c1594f508952c3876f621b4a",
                category: "single", tracks: ["À FORCE DE VIVRE (feat. KLS, Le Rat Luciano)"]
            },
            {
                titre: "Album gratuit, vol. 7", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a7b73b7a19b6ec6f402e18ae",
                category: "project", tracks: ["Keyzer Söze", "Bobo au corazon", "Tu me connais moi", "Électrique", "Ca va chérie ça va", "Ounanana", "Monstro", "Kusher kush", "Petit cœur", "Scar et Mufasa", "Mes affaires", "Messes basses", "Paranoïaque", "Je kiff ma life"]
            },
            {
                titre: "Je kiff ma life", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273708e8d4b68b69166baf5f73d",
                category: "single", tracks: ["Je kiff ma life"]
            },
            {
                titre: "Paranoïaque", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273048ee6f2b294b10c68ec1c4a",
                category: "single", tracks: ["Paranoïaque"]
            },
            {
                titre: "Messes basses", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f44808d4251a28e7a8b409e1",
                category: "single", tracks: ["Messes basses"]
            },
            {
                titre: "Mes affaires", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27302e54a86a708d7626e7d1138",
                category: "single", tracks: ["Mes affaires"]
            },
            {
                titre: "Scar et Mufasa", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f137fd9d9ac192e9c971dd31",
                category: "single", tracks: ["Scar et Mufasa"]
            },
            {
                titre: "Petit cœur", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c87cbd79cb8dcad79dde2973",
                category: "single", tracks: ["Petit cœur"]
            },
            {
                titre: "Kusher Kush", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732df8ff417c095d1e5dc05161",
                category: "single", tracks: ["Kusher Kush"]
            },
            {
                titre: "Monstro", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e31e86840f9fbca541ff28b4",
                category: "single", tracks: ["Monstro"]
            },
            {
                titre: "Ounanana", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cc30c136d53518368ada0c63",
                category: "single", tracks: ["Ounanana"]
            },
            {
                titre: "Ça va chérie ça va", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ff8e23fda13bbcbe833e59a6",
                category: "single", tracks: ["Ça va chérie ça va"]
            },
            {
                titre: "Électrique", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273bdc867e17e2d2bd9d0e31050",
                category: "single", tracks: ["Électrique"]
            },
            {
                titre: "Tu me connais moi", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273721481da50b973c973c9c427",
                category: "single", tracks: ["Tu me connais moi"]
            },
            {
                titre: "Bobo au corazon", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d32e8f63fe4ca30108f4cce0",
                category: "single", tracks: ["Bobo au corazon"]
            },
            {
                titre: "Keyser Söze", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27348c48fbf346e2a884a6f0ccd",
                category: "single", tracks: ["Keyser Söze"]
            },
            {
                titre: "Cœur blanc", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738037419171d29425684cb7de",
                category: "project", tracks: ["Namek (feat. Omah Lay)", "Le 100 le 100", "Canette dans les mains", "Chocolata (feat. Elai)", "Forbidden", "Konami", "Grazie la zone (feat. Rhove)", "Eh ça va Guy", "Héros", "Pistolet 45 (feat. M Huncho)", "Cœur blanc", "Camouflage (feat. 3robi)", "Le Rrrin", "C'est pas la mairie (feat. KVRA)", "Beuh à la noix de coco", "Europa (feat. Elai, Rhove, Morad)", "Perché", "Sous tension (feat. Samara, Didine Canon 16)", "La vie de rêve (feat. Mula B)", "L'âme abimée (feat. Moubarak)", "Je le savais (feat. Morad)", "Ils m'ont fait mal", "U pistulettu", "Bé (feat. ANNA)", "J'ai fait le tri", "Jhota ou mero", "Je deviens loco", "Mon cœur pour toi (feat. Any González)", "N'importe quoi", "Aqua dans la Mercedes (feat. Paky)", "Ma rue", "Néo", "Au bord de la mer", "Potion (feat. FEDUK)", "A.C.C.C", "Numéro ten", "J'ai vidé le magnum (feat. Jimmy Sax)", "Sur la selle (feat. Abduh)", "J'fais comme je peux (feat. Houari)"]
            },
            {
                titre: "Sur la selle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27354fb70557d8e88eed86eda0e",
                category: "single", tracks: ["Sur la selle (feat. Abduh)"]
            },
            {
                titre: "Sous tension", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27399701f733ad3337283f64491",
                category: "single", tracks: ["Sous tension (feat. Samara, Didine Canon 16)"]
            },
            {
                titre: "Potion", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cebfbe176af6bc40cca32bdd",
                category: "single", tracks: ["Potion (feat. FEDUK)"]
            },
            {
                titre: "Pistolet 45", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c118bfb856e996906d78ea27",
                category: "single", tracks: ["Pistolet 45 (feat. M Huncho)"]
            },
            {
                titre: "Mon cœur pour toi", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736ed841beb5b0dcf7fc31d7d5",
                category: "single", tracks: ["Mon cœur pour toi (feat. Any González)"]
            },
            {
                titre: "La vie de rêve", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734e12077e90e6e845cd1a4edf",
                category: "single", tracks: ["La vie de rêve (feat. Mula B)"]
            },
            {
                titre: "Je le savais", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734bb010dd15351d7ed81e4cc6",
                category: "single", tracks: ["Je le savais (feat. Morad)"]
            },
            {
                titre: "J'ai vidé le magnum", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736fc496b06aa9e17581409056",
                category: "single", tracks: ["J'ai vidé le magnum (feat. Jimmy Sax)"]
            },
            {
                titre: "Grazie la zone", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730138b9b3ff27e588ec641d96",
                category: "single", tracks: ["Grazie la zone (feat. Rhove)"]
            },
            {
                titre: "Chocolata", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732a23f8dd4471d78270969661",
                category: "single", tracks: ["Chocolata (feat. Elai)"]
            },
            {
                titre: "Camouflage", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a4d98d47e7a1794c454e0a1e",
                category: "single", tracks: ["Camouflage (feat. 3robi)"]
            },
            {
                titre: "C'est pas la mairie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c86997203e980e73f4024fe6",
                category: "single", tracks: ["C'est pas la mairie (feat. KVRA)"]
            },
            {
                titre: "Bé", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731bb9a1615c1a28a07a9f93ca",
                category: "single", tracks: ["Bé (feat. ANNA)"]
            },
            {
                titre: "Aqua dans la Mercedes", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27369447d88564af137b0b62129",
                category: "single", tracks: ["Aqua dans la Mercedes (feat. Paky)"]
            },
            {
                titre: "Europa", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27368fafff47fd46e59b523fd3f",
                category: "single", tracks: ["Europa (feat. Morad, Rhove, Elai)"]
            },
            {
                titre: "Namek", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27394729e62e4a3e5c18c8b064e",
                category: "single", tracks: ["Namek (feat. Omah Lay)"]
            },
            {
                titre: "Baïla", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c5da66f59df81d9a7334c062",
                category: "single", tracks: ["Baïla"]
            },
            {
                titre: "Ma belle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27390dceda200d34ac1962b1449",
                category: "single", tracks: ["Ma belle"]
            },
            {
                titre: "Extraterrestre (Édition Vélodrome)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bc8106fd45185f99fcf412d1",
                category: "project", tracks: ["Ça tourne dans ma tête", "J'ai tout su", "J'éteins mon téléphone", "Ténébreux", "Sur la Costa del Sol", "Faut pas (Extraterrestre)", "J'ai le démon", "Gigi", "Sous la Simond", "Ma drogue", "Cœur blessé", "Flouz", "Comme au bon vieux temps", "Superstar", "Je te veux toi", "Courtoisie", "Avec José", "1 fois mais pas 2 (feat. Houari, Moubarak)", "En two two bé", "Dans la loge", "Frozen", "Pas de panique", "La Dragon", "4 Juin 2022 (feat. Team Jul)"]
            },
            {
                titre: "4 Juin 2022", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27384c853b63999cac0eb8a27d5",
                category: "single", tracks: ["4 Juin 2022 (feat. Team Jul)"]
            },
            {
                titre: "Live au Vélodrome", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b62092f6a01f227b1e1be4a6",
                category: "project", tracks: ["Intro - Live au Vélodrome, Marseille", "En Y - Live au Vélodrome, Marseille", "JCVD - Live au Vélodrome, Marseille", "Wesh alors - Live au Vélodrome, Marseille", "Ibiza - Live au Vélodrome, Marseille (feat. Jimmy Sax)", "Bwo - Live au Vélodrome, Marseille", "Ma jolie - Live au Vélodrome, Marseille", "La classe - Live au Vélodrome, Marseille", "C'est pas des LOL - Live au Vélodrome, Marseille (feat. Jimmy Sax)", "Ma Casio - Live au Vélodrome, Marseille", "Mon bijou - Live au Vélodrome, Marseille", "La miss - Live au Vélodrome, Marseille", "Sous la lune - Live au Vélodrome, Marseille", "Comme les gens d'ici - Live au Vélodrome, Marseille", "Je suis pas fou - Live au Vélodrome, Marseille", "Mama - Live au Vélodrome, Marseille", "Superstar - Live au Vélodrome, Marseille", "Jeu avec le public - Live au Vélodrome, Marseille", "Dis moi pourquoi - Live au Vélodrome, Marseille (feat. Moubarak)", "Combien - Live au Vélodrome, Marseille (feat. Moubarak)", "Génération nique tout - Live au Vélodrome, Marseille (feat. Houari)", "Medley - Live au Vélodrome, Marseille", "Instru en live - Live au Vélodrome, Marseille", "Professor - Live au Vélodrome, Marseille", "Salvatrucha - Live au Vélodrome, Marseille", "Italia - Live au Vélodrome, Marseille", "Tchikita - Live au Vélodrome, Marseille", "Pic et pic, alcool et drame - Live au Vélodrome, Marseille", "Asalto - Live au Vélodrome, Marseille", "On m'appelle l'Ovni - Live au Vélodrome, Marseille", "Normal - Live au Vélodrome, Marseille (feat. Alonzo)", "Comme d'hab - Live au Vélodrome, Marseille (feat. Alonzo)", "La Seleçao - Live au Vélodrome, Marseille (feat. Alonzo, Naps)", "Intro Bande Organisée - Live au Vélodrome, Marseille (feat. 13 Organisé, Houari, Solda, Elams, Soso Maness, Kofs, Naps, SCH)", "Bande Organisée - Live au Vélodrome, Marseille (feat. 13 Organisé, Houari, Solda, Elams, Soso Maness, Kofs, Naps, SCH)", "J'oublie tout - Live au Vélodrome, Marseille"]
            },
            {
                titre: "1 fois mais pas 2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27386249c34e8c98840e3816bdc",
                category: "single", tracks: ["1 fois mais pas 2 (feat. Houari, Moubarak)"]
            },
            {
                titre: "Superstar", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b1fcea8d4db8bdbfa15356e7",
                category: "single", tracks: ["Superstar"]
            },
            {
                titre: "Ça tourne dans ma tête", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273804f78fa9ee1c39ebf9394c0",
                category: "single", tracks: ["Ça tourne dans ma tête"]
            },
            {
                titre: "Papier rose", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273508142405e3c6cc17abd2490",
                category: "single", tracks: ["Papier rose (feat. 100 Blaze, Naps)"]
            },
            {
                titre: "La recette", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e14bea4184c19589d5b74f31",
                category: "single", tracks: ["La recette"]
            },
            {
                titre: "À la Russe", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27314888b8940c673edbe44f685",
                category: "single", tracks: ["À la Russe"]
            },
            {
                titre: "Indépendance", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e3c64c1a9d807663f8def1ad",
                category: "project", tracks: ["Aghju capitu", "Le charbon c'est le casino", "Beuh à la framboise", "Toda la noche (feat. Naps, Morad)", "Love de moi", "Rallumer le toupew", "Que ça se mêle", "Flow mitraillette", "La miss", "Que la vérité", "La street (feat. Morad)", "Je calcule personne", "Cette fois", "La Sacem à Madonna", "La frappe de Tanger (feat. Gips, Moubarak, Houari)", "Maison Margiela", "N'oublie pas tes métaux", "Nine", "Dans la zon", "Boulevard des problèmes", "Dans la cour", "Chemin de Morgiou", "Ma Casio"]
            },
            {
                titre: "Toda la noche", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cf22dfcbb4ef7831955bb7fe",
                category: "single", tracks: ["Toda la noche (feat. Naps, Morad)"]
            },
            {
                titre: "La frappe de Tanger", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736370fac8f4f1d0c84d7e77c1",
                category: "single", tracks: ["La frappe de Tanger (feat. Moubarak, Houari, Gips)"]
            },
            {
                titre: "La street", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27353c5cd2f6a45eedc04aac1da",
                category: "single", tracks: ["La street (feat. Morad)"]
            },
            {
                titre: "Ma Casio", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e9c0d5270cdf5140ae7cfa56",
                category: "single", tracks: ["Ma Casio"]
            },
            {
                titre: "Légendaire", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738e2bf95c19f6bb1802b3f179",
                category: "single", tracks: ["Légendaire (feat. SCH, Soprano, Oxmo Puccino, Rim'K, Lino, R.E.D.K., Calbo, Le classico organisé)"]
            },
            {
                titre: "John", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27305825f975c3f63ba17ef6f0a",
                category: "single", tracks: ["John"]
            },
            {
                titre: "Demain ça ira", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f979ede7cdc1861e14dce2b5",
                category: "project", tracks: ["Alors la zone", "Assassinat", "Le bouton", "Je kill au mic", "Pic et pic, alcool et drame", "Je n'ai pas que des potes", "Rosé jetski playa", "Tragique", "Transporteur", "Tereza", "Je m'endors mal luné (feat. NORDO)", "Limitless", "G-shock", "C'est la cité (feat. Naps)", "Tchyco", "Mental d'or et de platine", "Cassage de nuques, pt. 4", "Finito", "John"]
            },
            {
                titre: "Le bouton", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273df90949147b3da4cb4b158ab",
                category: "single", tracks: ["Le bouton"]
            },
            {
                titre: "Je n'ai pas que des potes", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730066bb51e0b69c95f9fb84b3",
                category: "single", tracks: ["Je n'ai pas que des potes"]
            },
            {
                titre: "Alors la zone", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732ddee8131b5843b1d328d78c",
                category: "single", tracks: ["Alors la zone"]
            },
            {
                titre: "Irréversible", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273df8ea7c7ebfd6a3fb9006bc5",
                category: "single", tracks: ["Irréversible"]
            },
            {
                titre: "Album gratuit, vol. 6", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2739db4d4e3550dd76488583195",
                category: "project", tracks: ["Moi", "Carré d'as", "Ça me guintch", "Le crémeux", "En chair et en or", "C'est ça la vie", "Burberry", "Ovni présent", "A coup de crick", "A l'impro", "Faut faire des choix (feat. Moubarak, Houari, Gips)", "Fou d'elle", "Bandit", "Vite faistre"]
            },
            {
                titre: "Faut faire des choix", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27380062913cfec455c1132007c",
                category: "single", tracks: ["Faut faire des choix (feat. Gips, Houari, Moubarak)"]
            },
            {
                titre: "Loin du monde", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27346979245cb77fe4b5f689c43",
                category: "project", tracks: ["La pharmacie", "Brouncha", "Mother Fuck (feat. SCH)", "La passat", "Un autre monde", "Sous terre", "Son ex", "Guytoune (feat. Naps)", "Comme un voyou (feat. Le Rat Luciano)", "S.U.V", "Dors on te piétine (feat. Gazo)", "Hold-Up (feat. Alonzo, L'Algérino)", "Guadalajara", "Loin de tout (feat. Wejdene)", "Je vais pas redonner", "Les gens (feat. Houari, Moubarak, Gips)", "Mauvais garçon", "Feux (feat. Poupie)"]
            },
            {
                titre: "Loin de tout", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273847784f6ff3a2dcb038cbe23",
                category: "single", tracks: ["Loin de tout (feat. Wejdene)"]
            },
            {
                titre: "Guytoune", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730192bd86e09421189e1f5045",
                category: "single", tracks: ["Guytoune (feat. Naps)"]
            },
            {
                titre: "Feux", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731ecaf15d5906ddbcaf134ad3",
                category: "single", tracks: ["Feux (feat. Poupie)"]
            },
            {
                titre: "Comme un voyou", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273e02362c35af6c45e8eb5c8c5",
                category: "single", tracks: ["Comme un voyou (feat. Le Rat Luciano)"]
            },
            {
                titre: "Mother Fuck", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ca9a167a67729b4b15884d93",
                category: "single", tracks: ["Mother Fuck (feat. SCH)"]
            },
            {
                titre: "Crush", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27333048b8a5bc4159b634599ba",
                category: "single", tracks: ["Crush (feat. TK)"]
            },
            {
                titre: "Je suis Marseille", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737261ba894bf6517890c78382",
                category: "single", tracks: ["Je suis Marseille (feat. Akhenaton, Shurik'n, L'Algérino, Alonzo, Fahar, SCH, Le Rat Luciano)"]
            },
            {
                titre: "Bando (feat. Jul) [Remix]", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27319b8197ba3d5eefd4d971a11",
                category: "feat", tracks: ["Bando (feat. Jul) - Remix"]
            },
            {
                titre: "Ferme ta gueule", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731a23a0d823c6febb2058ca4d",
                category: "single", tracks: ["Ferme ta gueule (feat. Gips)"]
            },
            {
                titre: "La machine", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273e8bfa118111223daf1b7341b",
                category: "project", tracks: ["Folie", "Italia", "Ça sent bon", "Pour la street", "Rentrez pas dans ma tête (feat. Nessbeal)", "Eh ouais fils", "J'suis pas parti", "Toi-même tu sais (feat. Doria)", "Je suis pas ton pote", "Bravo", "Veste Quechua", "Toute la nuit (feat. Jimmy Sax)", "Laisse-moi là seul (feat. Moubarak)", "Grande", "Fait d'or", "Sousou", "C'est un bonbon", "Confinement", "Toute la ligne", "Que ça dure (feat. Bigflo & Oli)", "Davai Davai", "Vatos Locos (feat. Morad)", "J'ai tout essayé", "En cas de...", "Fais tes comptes (feat. Ghetto Phénomène, Kamikaz, Moubarak)", "Ce soir", "Pas méchant", "Pourquoi tu mens ?", "Zubrowska", "MacBook"]
            },
            {
                titre: "Vatos Locos", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273feec17d203af3ab2c1236f45",
                category: "single", tracks: ["Vatos Locos (feat. Morad)"]
            },
            {
                titre: "Rentrez pas dans ma tête", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c657401538d5657c7e82ad12",
                category: "single", tracks: ["Rentrez pas dans ma tête (feat. Nessbeal)"]
            },
            {
                titre: "Que ça dure", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2738304033e42240ea88fb628a9",
                category: "single", tracks: ["Que ça dure (feat. Bigflo & Oli)"]
            },
            {
                titre: "Folie", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27377de3aef79e4221ea8848898",
                category: "single", tracks: ["Folie"]
            },
            {
                titre: "Fait d'or", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273defc2c20a235114627382f72",
                category: "single", tracks: ["Fait d'or"]
            },
            {
                titre: "Sousou", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273795d5a2847b65ef7fa1f79cc",
                category: "single", tracks: ["Sousou"]
            },
            {
                titre: "C'est pas des LOL", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a6fa48d12eea7e21d9f46373",
                category: "project", tracks: ["6.35", "Ibiza (feat. Jimmy Sax)", "Mexico", "Mon bébé d'amour", "Oh maman", "Cremosso", "Faut que je me tire de là", "Dans le club", "Bouge-moi de là (feat. Gips, Houari GP, Le k, Gambi, TK, Moubarak, Miklo, A-Deal, Kamikaz)", "Ça tombe pas du ciel", "Santchelita", "Tant pis pour toi", "Pow pow", "Y'a la police (feat. Gips, Moubarak, TK)", "Fréquenter", "Un casse", "Ça mange la barre", "C'est pas des LOL", "Cassage de nuques, pt. 3", "Collé au mic", "Au péage", "La doudoune", "Beuh magique", "Flu", "Crocodile", "J'm'en bats les couilles", "Nia", "Ça a tiré", "Je mets le way (feat. Vladimir Cauchemar)", "T'es un gonflé", "Le combat", "J'ai passé l'âge", "Emmenez-moi", "Cartel de platine (feat. Gips, TK, Moubarak)", "Tout seul (feat. Moubarak)", "Kish kush kash (feat. TK)", "Touloutoutou", "Ibiza - Edit (feat. Jimmy Sax)"]
            },
            {
                titre: "Ibiza", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273158bd49d7566672972bff06e",
                category: "project", tracks: ["Ibiza (feat. Jimmy Sax)", "Ibiza - Edit (feat. Jimmy Sax)"]
            },
            {
                titre: "Rien 100 Rien (Réédition)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273fc02e4dd0fa3ad2721c08328",
                category: "project", tracks: ["La bandite", "JCVD", "Salvatrucha", "Tokyo", "Sous la lune", "Tel Me (feat. Ninho)", "BDG", "Pas de love (feat. TK)", "Je parle pas chinois", "Hey", "GTA (feat. Heuss L'enfoiré)", "Professor", "Mademoiselle", "Faux poto", "Sakakini", "Bagarre", "J'suis loin (feat. Vald)", "Fatigué (feat. Moubarak)", "Papa Maman", "Ratata (feat. Mula B)", "La folie du ter ter (feat. La Famax)", "Je fais mon tour", "La machine", "Le loup", "Rien100Rien - Instru concours", "Africa Twin", "C'est pas des LOL", "J'ai tout donné", "Like Ya (feat. Nyanda)", "T'as tout perdu", "Quoi que je fasse", "Bruce Lee"]
            },
            {
                titre: "Rien100Rien (Instru concours)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730aa2b8e1823634981f21d855",
                category: "single", tracks: ["Rien100Rien - Instru concours"]
            },
            {
                titre: "DPC - Casque arai", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273be2285dafa6b65f954ed6e40",
                category: "single", tracks: ["DPC - Casque arai"]
            },
            {
                titre: "Je reste à la maison", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733653e967086d8bade33bbccd",
                category: "single", tracks: ["Je reste à la maison"]
            },
            {
                titre: "A la Vida a la Muerte", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733fd7c0842ce1efd2ac8644ed",
                category: "single", tracks: ["A la Vida a la Muerte (feat. Moubarak, Imen Es)"]
            },
            {
                titre: "J'ai le boubou", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2737148a59f9338990334f6346c",
                category: "single", tracks: ["J'ai le boubou"]
            },
            {
                titre: "On se régale", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273c30d1775f10eec2520b3cc93",
                category: "single", tracks: ["On se régale (feat. Bengous)"]
            },
            {
                titre: "Ghettoïser", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273b21ec600f950ae633dbeb113",
                category: "single", tracks: ["Ghettoïser"]
            },
            {
                titre: "Je me prends trop la tête", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736f63ed26c00a84132d328970",
                category: "single", tracks: ["Je me prends trop la tête"]
            },
            {
                titre: "Numéro ten", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27317fb88a3a350d879af5a9236",
                category: "single", tracks: ["Numéro ten"]
            },
            {
                titre: "Plus rien ne m'arrête", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27383a51b2d93ee847dc268ff61",
                category: "single", tracks: ["Plus rien ne m'arrête"]
            },
            {
                titre: "Gilera", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ce21e365a7376cba15d4be67",
                category: "single", tracks: ["Gilera (feat. Heuss L'enfoiré)"]
            },
            {
                titre: "Je serre", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273829622ae7850b7e0df35072c",
                category: "single", tracks: ["Je serre"]
            },
            {
                titre: "Je ne suis pas un client", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273b768d1815575237614cbb540",
                category: "single", tracks: ["Je ne suis pas un client"]
            },
            {
                titre: "Ca va péter", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27395bb934fbef81ef4a36d78c2",
                category: "single", tracks: ["Ca va péter"]
            },
            {
                titre: "No Tengo", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730ba02b55da7ca1eb5477f793",
                category: "single", tracks: ["No Tengo"]
            },
            {
                titre: "Vatos", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273afe02f506d40fa4c0a9fa1bf",
                category: "single", tracks: ["Vatos"]
            },
            {
                titre: "Ne me dis pas bonjour", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27322783d0a1407865667222589",
                category: "single", tracks: ["Ne me dis pas bonjour"]
            },
            {
                titre: "Pocahontas", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733744aa5ed442e60a65abbd96",
                category: "single", tracks: ["Pocahontas"]
            },
            {
                titre: "La zone en personne", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273160968e91c16801cf89f2275",
                category: "project", tracks: ["La zone en personne", "Poussette", "Je vais tout casser", "La vie est faite comme ça", "T'as tout gagné", "Hallelujah", "Oh fou (feat. Alonzo)", "Pablito", "Ma che beauté", "Come vai (feat. Soolking)", "Chiron", "Le deum", "Sur pépé", "Si tu savais (feat. Landy)", "Sangoten", "VNTM (feat. Gambino, Zackmess, Metah, Oscar, Miklo, Moubarak, TK)", "Qu'est ce que je t'ai fait ? (feat. Djena Della)", "Amore", "Je vais danser", "Dors petit dors", "Asalto", "Je suis pas solo", "Ma chérie (feat. GIMS)", "Avant GTR", "Qu'est ce que tu me dis ?", "On m'a tourné le dos (feat. Loredana)", "Tu vois je veux dire", "Ya foye", "Et je deviens fou (feat. Ninho)", "J'ai la mort", "Dans tes yeux", "J'ai des images", "Je réponds plus (feat. Moubarak)", "Chez moi", "Avec la chapka", "Le jeune", "Je dirais plus je t'aime", "Je t'aimais bien", "Pour un violet", "En quarantaine"]
            },
            {
                titre: "Ma che beauté", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2731e720d63328a20c48bcc1868",
                category: "single", tracks: ["Ma che beauté"]
            },
            {
                titre: "Poussette", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736fcaeaffeb681768b05066ab",
                category: "single", tracks: ["Poussette"]
            },
            {
                titre: "Pour pas win", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273f470e55b44c39d26a19e4b01",
                category: "single", tracks: ["Pour pas win"]
            },
            {
                titre: "Inspi d'ailleurs", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273f3e8990652f0a336ae55f26a",
                category: "project", tracks: ["Inspi d'ailleurs", "Bientôt je me taille", "Je pilote", "Fais moi la passe", "Quelqu'un d'autre t'aimera (feat. Alonzo)", "Bwo", "Mélancolie du soir", "Je fais mes bails", "TKT (feat. Soprano)", "Coup de genoux", "Toto et Ninetta", "Petit frère", "Pim pom (feat. Shay)", "Au pire", "Tout grailler (feat. Fianso)", "Pekenio", "Les temps changent comme les gens", "Mauvaises tentations (feat. Moubarak)", "Dans sa bulle", "Loca", "La rue dans le Cayenne (feat. Aymane Serhani)", "En attendant"]
            },
            {
                titre: "Fais moi la passe", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273bfba1c544451ed693a93da35",
                category: "single", tracks: ["Fais moi la passe"]
            },
            {
                titre: "La tête dans les nuages", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2738b338ebef11d4d944a743793",
                category: "project", tracks: ["Amigo", "Henrico", "Délicieuse", "Tu mentiras", "La tête dans les nuages", "Ou lalala", "Je vais t'oublier (feat. Marwa Loud)", "Je traîne seul", "Comme les gens d'ici", "Fratellu", "Madame (feat. Le Rat Luciano)", "Le jaloux", "Je ne vous oublie pas", "Je ne veux pas partir", "Samantha (feat. Hors Ligne, Ger, Moubarak, Norey Fz)", "Facilement", "Comme un fou", "Mauvaise journée", "Temps d'avant"]
            },
            {
                titre: "Henrico", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273c1ffef595f7324d314765976",
                category: "single", tracks: ["Henrico"]
            },
            {
                titre: "Mauvaise journée", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273ff3b7c5980e60aff82e03ed3",
                category: "single", tracks: ["Mauvaise journée"]
            },
            {
                titre: "Fier 13terter", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273191514001ed5f872d951522c",
                category: "single", tracks: ["Fier 13terter"]
            },
            {
                titre: "C'est pas facile", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273e274d536b57b67599f8f6127",
                category: "single", tracks: ["C'est pas facile"]
            },
            {
                titre: "Aujourd'hui", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2735d0597d39ee3596556afd87d",
                category: "single", tracks: ["Aujourd'hui"]
            },
            {
                titre: "Équipe énervée", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273bdd1d8eb02eeae9aa6e75414",
                category: "single", tracks: ["Équipe énervée (feat. Norey Fz, Moubarak, Hors Ligne)"]
            },
            {
                titre: "Dans la voiture à Batman", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27396825af23e9f367ad6a63a99",
                category: "single", tracks: ["Dans la voiture à Batman"]
            },
            {
                titre: "Tu m'emboucanes", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273b83b97db4702fc61555bea54",
                category: "single", tracks: ["Tu m'emboucanes"]
            },
            {
                titre: "Parfum quartier", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27343c8b89de39bc66cf21c4674",
                category: "single", tracks: ["Parfum quartier"]
            },
            {
                titre: "Drôle de dame", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27318260dfae50297106d8c9e47",
                category: "single", tracks: ["Drôle de dame"]
            },
            {
                titre: "Tu fais le voyou", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273e3c0046890ad614246a6fde7",
                category: "single", tracks: ["Tu fais le voyou"]
            },
            {
                titre: "Le ghetto", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273a7ac0e5b0cb1408be3f83a81",
                category: "single", tracks: ["Le ghetto"]
            },
            {
                titre: "4 heure du mat", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2734115c5e08e86d8d2434887ed",
                category: "single", tracks: ["4 heure du mat"]
            },
            {
                titre: "Alcoolisé", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273933a89e97aa76f27597d292b",
                category: "single", tracks: ["Alcoolisé"]
            },
            {
                titre: "En crabe", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737683a39d292eb82bfa8fc6a4",
                category: "single", tracks: ["En crabe"]
            },
            {
                titre: "Comme à l'époque", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27371a08ef1ce1aeddb28e7dc16",
                category: "single", tracks: ["Comme à l'époque"]
            },
            {
                titre: "Je lève la moto", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27378f35a1fe32761e378bdd234",
                category: "single", tracks: ["Je lève la moto"]
            },
            {
                titre: "Cassage de nuques, pt. 2", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273ad01e30f6269a3a04361fb5f",
                category: "single", tracks: ["Cassage de nuques, pt. 2"]
            },
            {
                titre: "Cassage de nuques, pt. 1", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27333b93fa6d54f27765d34cc4c",
                category: "single", tracks: ["Cassage de nuques, pt. 1"]
            },
            {
                titre: "Je ne me vois pas briller", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273554900f75e6e959bdfa49f74",
                category: "project", tracks: ["Qui sait", "Je ne me vois pas briller", "Saoûlé", "Va te faire foutre", "Beely", "C'est pas ma faute", "Full Option (feat. Le Rat Luciano)", "Ça rêve", "Ma jolie", "Je suis resté le même", "Le 46 de Rossi", "À la cité", "Monde violent", "Survêt du Milan (feat. Moubarak)", "Mon tiek ti amo (feat. Norey Fz)", "Y'a plus de doute", "Comment te dire", "Cagoulé (feat. Kalash Criminel)", "Vendetta", "La zone (feat. Hors Ligne)", "Je ne joue pas les thugs", "Flêcheur fou", "Quand on est pas là (feat. Ger)", "Tout va bene"]
            },
            {
                titre: "Beely", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2736af680d7290de4322380a5d1",
                category: "single", tracks: ["Beely"]
            },
            {
                titre: "Personne n'est parfait", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273a995dfe9c8ed4bac3089b0a4",
                category: "single", tracks: ["Personne n'est parfait"]
            },
            {
                titre: "La Guardia", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273cde02b298ffb1015884f209f",
                category: "single", tracks: ["La Guardia"]
            },
            {
                titre: "Vie de bâtard", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27346384aa9644a9348fff0be53",
                category: "single", tracks: ["Vie de bâtard"]
            },
            {
                titre: "Que ça me chauffe", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273c1c7f2123c52c45f3c0d7312",
                category: "single", tracks: ["Que ça me chauffe"]
            },
            {
                titre: "En douceur", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273be1d2a155aac3bdd70093333",
                category: "single", tracks: ["En douceur"]
            },
            {
                titre: "Salivé", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2734d023d99bb8b34241a6fa3f7",
                category: "single", tracks: ["Salivé"]
            },
            {
                titre: "Coup de foudre", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27342f95e2c13f078c8db81e638",
                category: "single", tracks: ["Coup de foudre"]
            },
            {
                titre: "Yamaha debout", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273a7ae89d117aedc40fe840995",
                category: "single", tracks: ["Yamaha debout"]
            },
            {
                titre: "Borussia", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273e5d493cdd166eda59d8ede21",
                category: "single", tracks: ["Borussia"]
            },
            {
                titre: "Drôle de vie", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273209fe3ae7e04ddd4e8b97e03",
                category: "single", tracks: ["Drôle de vie"]
            },
            {
                titre: "Avec mes gars", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27303aac7da2d3aa846238806b0",
                category: "single", tracks: ["Avec mes gars"]
            },
            {
                titre: "Lacrizeotiek", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273af79c714da4e523b60573b21",
                category: "single", tracks: ["Lacrizeotiek"]
            },
            {
                titre: "Oh la ils ont mis...", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273941572fffbd7184fd43e6eb9",
                category: "single", tracks: ["Oh la ils ont mis..."]
            },
            {
                titre: "Imagine", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27398b9d599f7b3d9008eeb89d1",
                category: "single", tracks: ["Imagine"]
            },
            {
                titre: "Je suis comme toi", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737d2ede2cb952f07f5d3c5696",
                category: "single", tracks: ["Je suis comme toi"]
            },
            {
                titre: "Je dis ce que je pense", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2734699e556a082a2e048cec501",
                category: "single", tracks: ["Je dis ce que je pense"]
            },
            {
                titre: "L'ovni", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2739bc3e80d5e9fb9bde9df0e71",
                category: "project", tracks: ["On m'appelle l'ovni", "C'est le son de la gratte", "C'est ça", "Je m'en fous de ta nana", "Qui a dit ?", "Je dis rien, je vois tout, j'entends", "E.T.", "Je fais le sourd", "Elle et l'autre", "Y'a pas de stress", "J'ai dit...", "Ah c'est comme ça ! (feat. Ghetto Phénomène, Axèle)", "Jusqu'ici tout va bien", "J'ai fumé ma ganja", "Je te voyais comme... (feat. Moubarak)", "Je sais ce que je vaux", "Peu m'importe", "¿ Qué Pasa ?", "¿ Cómo Te Llamas ?", "Je suis pas fou", "Carnalito", "Mais qu'est-ce qu'on s'en bat les couilles !", "Tchikita"]
            },
            {
                titre: "C'est le son de la gratte", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273e92c3db204e191d91871d3d2",
                category: "single", tracks: ["C'est le son de la gratte"]
            },
            {
                titre: "Agis ou ferme tgl", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273d631d291a348c9937537418c",
                category: "single", tracks: ["Agis ou ferme tgl"]
            },
            {
                titre: "500 chevaux", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2730646ae75fd04f3d014f4430c",
                category: "single", tracks: ["500 chevaux"]
            },
            {
                titre: "Charbon", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2738244194dd10804945e357dab",
                category: "single", tracks: ["Charbon"]
            },
            {
                titre: "Chapeau de paille", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a68330c928531a94cb25099c",
                category: "single", tracks: ["Chapeau de paille (feat. Moubarak)"]
            },
            {
                titre: "Et ouais", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273bf8e0f125190eb9fa0a41702",
                category: "single", tracks: ["Et ouais"]
            },
            {
                titre: "Si seulement", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2735e51d64817321e3f1e2bea7c",
                category: "single", tracks: ["Si seulement (feat. Houari)"]
            },
            {
                titre: "J'ai pensé", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2731d01e00f6787c278e92e8f27",
                category: "single", tracks: ["J'ai pensé"]
            },
            {
                titre: "Les jaloux m'écoutent", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273ee2b4abf755501b69640e95c",
                category: "single", tracks: ["Les jaloux m'écoutent"]
            },
            {
                titre: "Léwé", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273c30f0a93f130d2aec4d7cc3b",
                category: "single", tracks: ["Léwé (feat. Ghetto Phénomène)"]
            },
            {
                titre: "Dans le gamos", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2733f59661617b4baf9c16b0257",
                category: "single", tracks: ["Dans le gamos"]
            },
            {
                titre: "Askip", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27390d210a26033311fbb8f0990",
                category: "single", tracks: ["Askip"]
            },
            {
                titre: "Tchikita", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a3b9be4fa99f4693cf5d9be1",
                category: "single", tracks: ["Tchikita"]
            },
            {
                titre: "On détale", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27356c9993165de5df97499686a",
                category: "single", tracks: ["On détale"]
            },
            {
                titre: "Tu fais l'idiot", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273eec64cc5387686261fde1af3",
                category: "single", tracks: ["Tu fais l'idiot"]
            },
            {
                titre: "J'aime", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27377c65edf7b9475b873f2b650",
                category: "single", tracks: ["J'aime"]
            },
            {
                titre: "Wesh fils de", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27369ec8e5c197ccb16d8857d3c",
                category: "single", tracks: ["Wesh fils de"]
            },
            {
                titre: "Mon amour", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273366cb8c2efa9b89118003300",
                category: "single", tracks: ["Mon amour"]
            },
            {
                titre: "Émotions", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273828907874e13a0994b87785b",
                category: "project", tracks: ["Je trace ma route", "Allez le sang", "Je pense à eux", "J'attends", "Rien à cirer", "Emotions", "Mon bijou", "Je picole", "Mon poto", "La classe", "Fusiller", "Mon petit", "Ciro", "On est trop (feat. Ghetto Phénomène)", "Vivre mes rêves", "Toujours la dalle", "C'est rien", "Traître (feat. Wanted)", "C'est pas beau", "Où je vais"]
            },
            {
                titre: "Allez le sang", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b5b6c3fe5ee701f57f17ca36",
                category: "single", tracks: ["Allez le sang"]
            },
            {
                titre: "Emotions", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b32bb07272142fc4aab596e1",
                category: "single", tracks: ["Emotions"]
            },
            {
                titre: "J'fais ce que j'veux de ma life", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27370ba38faeeb6c30b588fd684",
                category: "single", tracks: ["J'fais ce que j'veux de ma life (feat. Bimbim, RecordMusic)"]
            },
            {
                titre: "Album gratuit", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2738f7e21674af4e279c71c87db",
                category: "project", tracks: ["Cousine", "Je vide mon sac", "Crapuleux", "Ce que je vois", "MC", "Etat d'âme", "Dans une autre planète", "Ils chantent tous", "La haine (feat. Dime)", "Chargé", "Je me promène", "Je suis faché", "J'ai beau crier", "Team D&P (feat. Les Moustiques)", "On nique tout (feat. Alonzo)", "Je regarde le monde", "Très loin (feat. Moubarak)", "Gingst", "Je ne te reconnais pas", "Cogno", "Ne pleure pas", "Ça ne change pas (feat. Soprano)", "Elle veut", "Un couplet", "Toujours", "Ces temps-ci", "Je sais que tu ne m'aimes pas", "Par là", "Rolala", "Avant la douane"]
            },
            {
                titre: "ça les dérange", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273e773f22dadeba392dc7df7fb",
                category: "single", tracks: ["ça les dérange (feat. Vitaa)"]
            },
            {
                titre: "My World (Edition collector)", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2739619db1287681309e4afdeb0",
                category: "project", tracks: ["Coucou", "Ils m'ignorent", "Mama", "Dans le futur", "My World", "Encore des paroles (feat. Julie Gonzalez)", "Ne m'en voulez pas", "Lova", "Amnésia", "Wesh alors", "Ghost Rider", "Mamasita", "Elle te balade", "Il me faut des billets", "Dans l'appart", "C’est chaud", "Dans la légende", "Pour les taulards", "Du jour au lendemain", "En Y", "Comme d'hab (feat. Alonzo)", "En place (feat. A-Deal)", "Le patron", "La gâchette (feat. Houari)", "Mercé (feat. Benjamin Mendy, Mehdi)", "C'est réel", "Pour les vaillants", "En Y (Version instrumentale)", "Wesh Alors (Version instrumentale)"]
            },
            {
                titre: "Wesh alors", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273b788450bfaf7524a3606cf56",
                category: "single", tracks: ["Wesh alors"]
            },
            {
                titre: "En Y", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b27338ae74d9a9dc8fa6256a0ce6",
                category: "single", tracks: ["En Y"]
            },
            {
                titre: "Fais le Moonwalk (Double Face 2015)", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273b549fb62de62f3b28ff79a91",
                category: "single", tracks: ["Fais le Moonwalk - Double Face 2015 (feat. DJ Abdel, Soprano)"]
            },
            {
                titre: "Je tourne en rond", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2732a49917c09eab39404a115f4",
                category: "project", tracks: ["Ça vient de là", "Dans ma cité", "Je tourne en rond", "Vis mon malheur", "Gros", "1er dans la bataille", "Je peux pas", "Hors la loi", "Plus de respect", "Mon rêve", "Ça…", "Lady", "Goodbye", "C’est ça que je te reproche", "Je suis comme un autre", "Tout droit", "J'ai fini seul", "Terter", "Ils sont jaloux (feat. Liga One, Friz, Kamikaz, Bilk, Houari, Veazy)", "Perdu"]
            },
            {
                titre: "Jul", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b2733178e98b5ceb5f552da06524",
                category: "project", tracks: ["J'ai pas que ça à faire", "Frangin", "Dur dur", "Là où la vie me mène", "A bout de nerfs", "Oubliez-moi", "On s'en bat les... (feat. Houari)", "Je vise le sommet", "Phénomène du ghetto (feat. Ghetto Phénomène)", "Je t'avais dit de l'oublier", "Le temps passe", "Je me jette à l'eau", "Respecte", "Jack Miel", "On veut le million (feat. Kamikaz)"]
            },
            {
                titre: "Y’a beaucoup d’absents", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273bc1fa54489d5e6c4f3c2fb01",
                category: "single", tracks: ["Y’a beaucoup d’absents"]
            },
            {
                titre: "J'suis là", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2739190bbf982c62fc31c0cabd2",
                category: "single", tracks: ["J'suis là"]
            },
            {
                titre: "Je trouve pas le sommeil", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2735dfbf810bc891f4e4d640adb",
                category: "project", tracks: ["Message aux rageux", "J’m’évade", "Ma Life", "Arrête de parler", "Je trouve pas le sommeil", "Señora", "Le regard des gens (feat. Cheb Khalass)", "La fusée", "Marseille - Paris (feat. Mister You)", "Nique-le", "Seul au monde", "Dans l’game", "Mets les en I (feat. Le Rat Luciano)", "Qu’ils me laissent", "Lacrizeomic", "Poto où t’es (feat. Simo)", "T’as le boule", "Trop de vice", "Pourquoi tu me fais le gros (feat. Liga One, Houari, Bilk, Kamikaz, Friz, Soso Maness, Veazy, Kalif)", "Vida Loca"]
            },
            {
                titre: "Nique-le", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273cd7cf409f22a717229f8a5ef",
                category: "single", tracks: ["Nique-le"]
            },
            {
                titre: "Putain de life", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2738a9ee19acbdfdd5470e707f3",
                category: "single", tracks: ["Putain de life"]
            },
            {
                titre: "Qu'est-ce que je serai dans dix ans", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273457c18aec8eb9ea22aa72322",
                category: "single", tracks: ["Qu'est ce que je serai dans dix ans"]
            },
            {
                titre: "Señora", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b27336706e0f6221cafddc6de45b",
                category: "single", tracks: ["Señora"]
            },
            {
                titre: "Magique", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2732e084d25657ca34acdd2d0a7",
                category: "single", tracks: ["Magique"]
            },
            {
                titre: "Lacrizeomic", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273a8e7bc939bd4d879abb98cb4",
                category: "project", tracks: ["Anti BDH", "Ça veut ton cash", "Briganté", "Je profite", "Loin (feat. GP)", "L'histoire", "N'imite pas", "On survit (feat. Houari)", "Posé à la place 2 (feat. Saiah)", "Pour un rien", "Regardes pas de travers", "Ça me dégoûte", "Sens interdit", "T'as coulé", "Terter (feat. Font-Vert)", "Au top (feat. Kalif)", "On squatte le béton (feat. Kamikaz)", "Neymar (feat. Soso Maness)"]
            },
            {
                titre: "Briganté", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273adc546969ffcb5ee4917d8fa",
                category: "single", tracks: ["Briganté"]
            },
            {
                titre: "Ça me dégoûte", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2736c731446bb7f16774c962fab",
                category: "single", tracks: ["Ça me dégoûte"]
            },
            {
                titre: "Dans ma paranoïa", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b27385d9fb2e7833cb239769c02d",
                category: "project", tracks: ["Winners", "Malade (feat. Kalif Hardcore)", "Dans mon del", "Grillé", "J'oublie tout", "Au quartier", "Jeune de cité (feat. Soso Maness)", "Sort le cross volé", "N'importe quoi", "Dans ma paranoïa", "Tu la love", "T'es pas le seul (feat. Kamikaze)", "C'est trop", "Audi volée (feat. Kalif Hardcore)", "Tout seul", "Le sang", "Mon son vient d'ailleurs"]
            },
            {
                titre: "Dans mon del", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27344c956a6a205cacba63e2b05",
                category: "single", tracks: ["Dans mon del"]
            },
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
        bio: "Jefe. Le recordman des certifications en France.",
        bioLongue: "Ninho est le rappeur de tous les records. Avec un nombre incalculable de singles d'or, de platine et de diamant, il domine le streaming depuis des années. Son talent pour le kickage comme pour la mélodie, et sa capacité à raconter la rue avec authenticité, en font le 'Jefe' incontesté de sa génération.",
        albums: [
            {
                titre: "+971", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273acd2a3c1a81f346b47e0c99d",
                category: "single", tracks: ["+971"]
            },
            {
                titre: "Skywalker Haze - A COLORS SHOW", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b5f3c09461c9701467609fcf",
                category: "single", tracks: ["Skywalker Haze - A COLORS SHOW (feat. COLORS)"]
            },
            {
                titre: "Para", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737f69ea05c067ab5a39383cce",
                category: "single", tracks: ["Para (feat. XVI, Davido)"]
            },
            {
                titre: "Treillis", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27350e0760fc547003bbc2443a7",
                category: "single", tracks: ["Treillis (feat. Boîte noire)"]
            },
            {
                titre: "Brouncha", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735ed787d7f506c052c5926aa9",
                category: "single", tracks: ["Brouncha (feat. Graya, Alonzo)"]
            },
            {
                titre: "DANS LE DOS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27367343b012a2162aa7a27b563",
                category: "single", tracks: ["DANS LE DOS (feat. NO PAIN NO GAIN, Himra)"]
            },
            {
                titre: "Cole Palmer", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27339aa697646bce9a33b18f9a3",
                category: "single", tracks: ["Cole Palmer (feat. 3robi, YassineBeats)"]
            },
            {
                titre: "SALE ÉTAT", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737218226cfcc36ce034560fb7",
                category: "single", tracks: ["SALE ÉTAT (feat. RK)"]
            },
            {
                titre: "5 bleus", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732eeb508036f112d28df8a0ab",
                category: "single", tracks: ["5 bleus"]
            },
            {
                titre: "X-ADV", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273539e9602ea95484ad7d9bca0",
                category: "single", tracks: ["X-ADV (feat. Lamatrix, Leto)"]
            },
            {
                titre: "Comme Avant", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736d1997ee12f452aeb84c2ac2",
                category: "single", tracks: ["Comme Avant (feat. David Carreira, MC Cabelinho)"]
            },
            {
                titre: "Roof", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f4d76d13700f3716fe874b8b",
                category: "single", tracks: ["Roof (feat. Vibzz)"]
            },
            {
                titre: "COMME ÇA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273601f403eb9e139a9b8eb52fa",
                category: "single", tracks: ["COMME ÇA (feat. SAF)"]
            },
            {
                titre: "C'est Fort", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738c89b9c815853709acc40ea9",
                category: "single", tracks: ["C'est Fort (feat. Soolking)"]
            },
            {
                titre: "VIDA (feat. Ninho & Morad)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273196e3cd12ebf7ba579a2b097",
                category: "feat", tracks: ["VIDA (feat. Ninho & Morad)"]
            },
            {
                titre: "Requin", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738c21b259b309e2d6b380a4e5",
                category: "single", tracks: ["Requin (feat. Gianni)"]
            },
            {
                titre: "Boîte noire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731d2fa1dc3e6e2bd7c256f6ae",
                category: "single", tracks: ["Boîte noire (feat. Boîte noire)"]
            },
            {
                titre: "Triple V", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739da29716c060926273a64fc9",
                category: "single", tracks: ["Triple V (feat. Werenoi, Damso)"]
            },
            {
                titre: "Etat des lieux", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733df6856393d2f45574f0f63b",
                category: "project", tracks: ["Etat des lieux - Part 1 (feat. La Fouine)", "Etat des lieux - Part 2 (feat. La Fouine)"]
            },
            {
                titre: "FREE CONGO", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ce3e7292c8438257fec4d804",
                category: "single", tracks: ["FREE CONGO (feat. Gradur, Damso, Josman, Youssoupha, Kalash Criminel)"]
            },
            {
                titre: "Camp Nou", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273418863d0ab67e10509314be4",
                category: "single", tracks: ["Camp Nou (feat. 77 degrés)"]
            },
            {
                titre: "OTF", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d1cf098ce3da765f9a063c42",
                category: "single", tracks: ["OTF (feat. DA Uzi)"]
            },
            {
                titre: "GOAT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d30660d949dfac1116226d0f",
                category: "project", tracks: ["Boucherie (feat. Niska)", "Jungle (feat. Niska)", "Malsain (feat. Niska)", "Guitare (feat. Niska)", "Coco (feat. Niska)", "Du Sal (feat. Niska)", "Broly (feat. Niska)", "Ghetto Star (feat. Niska)", "HAQ (feat. Niska)", "Collabo (feat. Niska)", "Opinel 12 (feat. Niska)", "Waribana (feat. Niska)", "911 (feat. Niska, Koba LaD)", "Loin d'eux (feat. Niska)", "Authentique (feat. Niska)"]
            },
            {
                titre: "UnRappeurÇaRap #3", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273bff39e1deb144963ad5513ca",
                category: "single", tracks: ["UnRappeurÇaRap #3 (feat. Niska)"]
            },
            {
                titre: "UnRappeurÇaRap #2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27393909ed90c9ba39d4b41f249",
                category: "single", tracks: ["UnRappeurÇaRap #2 (feat. Niska)"]
            },
            {
                titre: "UnRappeurÇaRap #1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735c2e3472bb012b26a56edd91",
                category: "single", tracks: ["UnRappeurÇaRap #1 (feat. Niska)"]
            },
            {
                titre: "911", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d036e5709cce7b2661bf0053",
                category: "single", tracks: ["911 (feat. Niska, Koba LaD)"]
            },
            {
                titre: "Coco", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739e83be831b2bbf4ac189d2c1",
                category: "single", tracks: ["Coco (feat. Niska)"]
            },
            {
                titre: "SURVIE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27310195a3a69d46b2d26fd150c",
                category: "single", tracks: ["SURVIE (feat. Maes)"]
            },
            {
                titre: "Sens interdit (feat. Ninho)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b8ae52ddd07d595732eb3bbd",
                category: "feat", tracks: ["Sens interdit (feat. Ninho)"]
            },
            {
                titre: "Quillé", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27357e532275835801f8fc4e148",
                category: "single", tracks: ["Quillé (feat. Naza)"]
            },
            {
                titre: "Danger", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27385bf0548ad7a06f8ec93611c",
                category: "single", tracks: ["Danger (feat. Rimkus)"]
            },
            {
                titre: "3 MAI 2025", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27308d10b7e41341b3fe4effaca",
                category: "single", tracks: ["3 MAI 2025"]
            },
            {
                titre: "Karma", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732a3f980058a8065ebda9c12f",
                category: "single", tracks: ["Karma (feat. Negrito)"]
            },
            {
                titre: "Bectance", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27398455157f7ab8cd9782abca6",
                category: "single", tracks: ["Bectance (feat. Mayo)"]
            },
            {
                titre: "Les étoiles", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733cb377f455d8a2cfb320d12a",
                category: "single", tracks: ["Les étoiles (feat. Yaro)"]
            },
            {
                titre: "Fallin’", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732c54bb8b98c574d2f94696b1",
                category: "single", tracks: ["Fallin' (feat. Yaro, Layzee Ella)"]
            },
            {
                titre: "Blue", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273570cda537badbddcfe7e7480",
                category: "single", tracks: ["Blue (feat. Kaneki, Naps)"]
            },
            {
                titre: "NI (Extension)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d415a2c798ac514419d6bfeb",
                category: "project", tracks: ["La vie de Johnny", "Yo moko oyebi", "Rich Porter", "Blue story (feat. Lil Baby)", "Edouard Nahum", "25 G", "Respect", "Branché sur snap", "Bad (feat. Omah Lay)", "Dans la peau", "No love (feat. Ayra Starr)", "Eurostar (feat. Central Cee)", "Chiraq", "Plus qu’eux", "Bon qu’à ça", "Grands ensembles", "Griot", "Mode S Plus", "Vinicius", "Signes de gang", "Christopher Wallace"]
            },
            {
                titre: "No love", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27302cbd205f568336a7994c85a",
                category: "single", tracks: ["No love (feat. Ayra Starr)"]
            },
            {
                titre: "Bad", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737694d0acd853a3055b317772",
                category: "single", tracks: ["Bad (feat. Omah Lay)"]
            },
            {
                titre: "Binks to Binks 8", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a5981e0476311aa0ab9bb9c0",
                category: "single", tracks: ["Binks to Binks 8"]
            },
            {
                titre: "25 G", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273317dd270afbcdec456fa3ad1",
                category: "single", tracks: ["25 G"]
            },
            {
                titre: "Freestyle LVL UP 3", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738e733d61872c68263a014c0a",
                category: "single", tracks: ["Freestyle LVL UP 3"]
            },
            {
                titre: "Freestyle LVL UP 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27351f1cbc3fed8aeb3583ae1ee",
                category: "single", tracks: ["Freestyle LVL UP 2"]
            },
            {
                titre: "Freestyle LVL UP 1", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273fbe613b1c15b681dc3e84dfe",
                category: "single", tracks: ["Freestyle LVL UP 1"]
            },
            {
                titre: "C'est carré le S", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273db8a34537b1d61d5d5a4b562",
                category: "single", tracks: ["C'est carré le S (feat. Naps, Gazo)"]
            },
            {
                titre: "Acolyte (feat. Dadju & Ninho)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738663fdad4d8b2be7d6564736",
                category: "single", tracks: ["Acolyte (feat. Dadju & Ninho)"]
            },
            {
                titre: "Ciao", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733697149f5e4f0af7a3f1a1ad",
                category: "single", tracks: ["Ciao (feat. Werenoi)"]
            },
            {
                titre: "À L'AUBE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273da557111397b4f7eca9de939",
                category: "single", tracks: ["À L'AUBE (feat. Hös Copperfield)"]
            },
            {
                titre: "3 singes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732f78c14ac316b0c72baa2196",
                category: "single", tracks: ["3 singes (feat. Werenoi)"]
            },
            {
                titre: "Jolie (feat. Ninho)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736e71d91817476ff46153012c",
                category: "feat", tracks: ["Jolie (feat. Ninho)"]
            },
            {
                titre: "Tennessee", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e0e6ee7ffa6c523209605cd2",
                category: "single", tracks: ["Tennessee (feat. Kalash)"]
            },
            {
                titre: "Coucou", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736eda8a678290e271de5abbf7",
                category: "single", tracks: ["Coucou (feat. Graya)"]
            },
            {
                titre: "La Marseillaise", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273101759eb2115fe09a30633fe",
                category: "single", tracks: ["La Marseillaise (feat. Heuss L'enfoiré)"]
            },
            {
                titre: "Portes Suicide", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dff2990ba4167c13713b8089",
                category: "single", tracks: ["Portes Suicide (feat. Dinos)"]
            },
            {
                titre: "Sécu", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733e4d98428003c0c78468cfbd",
                category: "single", tracks: ["Sécu (feat. Franglish)"]
            },
            {
                titre: "Carolina", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27347e2936e1fce8f4441447ac0",
                category: "single", tracks: ["Carolina (feat. REDVOLUTION)"]
            },
            {
                titre: "Dernier Etage", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27382246cf27f459f099080996b",
                category: "single", tracks: ["Dernier Etage (feat. Yaro)"]
            },
            {
                titre: "11H (feat. Ninho)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737a72f6d745040fc96ee4bda6",
                category: "feat", tracks: ["11H (feat. Ninho)"]
            },
            {
                titre: "Jefe", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273df4862f641044c61c4abe602",
                category: "project", tracks: ["Intro", "Jefe", "VVS", "Sky Priority", "OG", "Arme de poing", "Vérité", "No Life", "RER D", "YSL", "Aïcha", "Mood", "Athéna", "La maison que je voulais", "Outro"]
            },
            {
                titre: "Binks to Binks 7", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27372bfea65bc52f9e7a6cf0a6b",
                category: "single", tracks: ["Binks to Binks 7"]
            },
            {
                titre: "N.I", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fa302c0ce01c73ef0296b212",
                category: "single", tracks: ["N.I (feat. Niska)"]
            },
            {
                titre: "Hercule", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733b56157caccfec943304c3ca",
                category: "single", tracks: ["Hercule (feat. Koffi Olomide)"]
            },
            {
                titre: "Millions", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27395440dda68c4784ab18400d1",
                category: "single", tracks: ["Millions (feat. No Limit, Orelsan)"]
            },
            {
                titre: "Elle m'a dit", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c86d639244e947239bbab7b5",
                category: "single", tracks: ["Elle m'a dit (feat. Dj Quick, Hamza)"]
            },
            {
                titre: "Champion", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b8cbef4eab57784b2a7a33a5",
                category: "single", tracks: ["Champion (feat. Serge Ibaka)"]
            },
            {
                titre: "La vie du binks (feat. Hornet La Frappe, Leto, Sadek, Soprano)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27343f776ae84392c29e7000488",
                category: "single", tracks: ["La vie du binks (feat. Hornet La Frappe, Leto, Sadek, Soprano)"]
            },
            {
                titre: "Je fais ma vie", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27337d0a34913740aedd6012dd4",
                category: "single", tracks: ["Je fais ma vie (feat. KeBlack)"]
            },
            {
                titre: "Likolo (feat. Ninho)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732364af4c61393230840f6e9c",
                category: "feat", tracks: ["Likolo (feat. Ninho)"]
            },
            {
                titre: "M.I.L.S 3 (Réédition)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f5cdcd0491e495a848fb8bb6",
                category: "project", tracks: ["Problèmes du matin", "Toutes les couleurs", "Kitchen", "Tout en Gucci", "Privilège", "Mac 11", "Intro", "M.I.L.S 3", "Zipette", "Gros vendeurs", "Promo (feat. Damso)", "Mauvais Djo", "La puerta", "En chien", "Centre commercial (feat. Heuss L'enfoiré)", "Tu sais qu'on est gang (feat. Hös Copperfield)", "C'était le rap", "Lettre à une femme", "Every day (feat. Griff)", "Le jeu (feat. Yaro)", "Bali", "Millésimes", "Filon"]
            },
            {
                titre: "Sur paname (Extrait du projet Art de rue)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735097b9a3b4034fe0f61f8ab9",
                category: "single", tracks: ["Sur paname"]
            },
            {
                titre: "Problèmes du matin", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2733bb463639786cbefcc00a14e",
                category: "single", tracks: ["Problèmes du matin"]
            },
            {
                titre: "La zone", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27320c7661916f19d2da9235cc3",
                category: "single", tracks: ["La zone (feat. 91 All Stars)"]
            },
            {
                titre: "Carbozo 2.0", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27376641e1561fc73602e9c6a78",
                category: "single", tracks: ["Carbozo 2.0 (feat. Carbozo)"]
            },
            {
                titre: "Moto", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27362186515547ec63b44a04225",
                category: "single", tracks: ["Moto (feat. Mac Tyer)"]
            },
            {
                titre: "Grand bain", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27365ff47ee1c5d0620a8fe4796",
                category: "single", tracks: ["Grand bain (feat. Dadju)"]
            },
            {
                titre: "Pirate", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273489ab44f1a478da6170eb387",
                category: "single", tracks: ["Pirate (feat. Hös Copperfield)"]
            },
            {
                titre: "Ma guapa", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273e32d9c30b972d3e36623b4d5",
                category: "single", tracks: ["Ma guapa (feat. Hös Copperfield)"]
            },
            {
                titre: "Bucci Night (Punjabi Remix)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730bf8317f7eeb459d5ebfb24e",
                category: "single", tracks: ["Bucci Night (Punjabi Remix) (feat. Byro, Yaro)"]
            },
            {
                titre: "Gaine D 2.0", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273dfd8c57ddf88c23b6d37ea50",
                category: "single", tracks: ["Gaine D 2.0 (feat. Kingzer, Leto)"]
            },
            {
                titre: "Kim Jong-il (Extrait du projet Game Over Volume 2)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736f8a9d17b7b1c6b205ca9435",
                category: "single", tracks: ["Kim Jong-il (feat. Niro)"]
            },
            {
                titre: "Destin", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27349f298c896b4e4237e2a614e",
                category: "project", tracks: ["Sans peine", "La vie qu'on mène", "Goutte d'eau", "Paris c'est magique", "Jeune Lossa", "Tokarev", "La vivance (feat. Koba LaD)", "Big Pac", "NI", "Maman ne le sait pas (feat. Niska)", "L'ancien", "Jamais (feat. Dadju)", "Jusqu'à minuit (feat. JuL)", "Putana", "À Kinshasa (feat. Fally Ipupa)", "Zéro paluche (feat. Tito)", "Money (feat. Faouzia)", "Outro"]
            },
            {
                titre: "Binks to Binks 6", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27375e43b68e1ba398ca9cd979b",
                category: "single", tracks: ["Binks to Binks 6"]
            },
            {
                titre: "Mauvais", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273698c4a79de3dda7e3b26abd6",
                category: "single", tracks: ["Mauvais (feat. GLK)"]
            },
            {
                titre: "Ma 6t a craqué (feat. Ninho)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2738e8c9b403dbd20149d2e9dab",
                category: "feat", tracks: ["Ma 6t a craqué (feat. Ninho)"]
            },
            {
                titre: "Air Max", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273bd964902f350754244095b08",
                category: "single", tracks: ["Air Max (feat. Rim'K)"]
            },
            {
                titre: "M.I.L.S 2.0", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273b2b45ba815670e92164581c5",
                category: "project", tracks: ["M.I.L.S 2.0", "Fendi", "PGP", "Toutes options (feat. Blasko)", "Mama No Cry", "Pavé", "Un Poco", "44 (feat. Yaro)", "Bavard", "Chacun son tour", "Coffrer", "Vrais", "Violet", "Bob"]
            },
            {
                titre: "Coffrer", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273cb73e60a9f3220e514d49ba3",
                category: "single", tracks: ["Coffrer"]
            },
            {
                titre: "Bénéfice", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273a4decd84c1bc92d0523d84c3",
                category: "single", tracks: ["Bénéfice (feat. MHD)"]
            },
            {
                titre: "Comme prévu", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2730637dfd1aab81b5a9a0246fb",
                category: "project", tracks: ["Comme prévu", "Chino", "Mamacita", "Laisse pas traîner ton fils (feat. Sofiane)", "Roro", "HLM ou Palace", "Rose", "De l'autre côté (feat. Nekfeu)", "Elle m'a eu", "Ce soir (feat. Alonzo)", "Dita (feat. Hös)", "Pourquoi", "Lové (feat. Gradur)", "Carbozo"]
            },
            {
                titre: "Chino", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273bc51f539b4f61399715078c9",
                category: "single", tracks: ["Chino"]
            },
            {
                titre: "Mamacita", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273827b5b70c22ab611349cbe59",
                category: "single", tracks: ["Mamacita"]
            },
            {
                titre: "Roro", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2730d521d27a35734e17eba7e83",
                category: "single", tracks: ["Roro"]
            },
            {
                titre: "Leon & Friends", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273e309d76dcffa67c8000d8239",
                category: "project", tracks: ["Blending - Original Mix (feat. LEON (Italy), Artslaves)", "We Feel - Original Mix (feat. LEON (Italy))", "Two Visions - Original Mix (feat. LEON (Italy), Simone Liberali)"]
            },
            {
                titre: "My Face", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2731bde7a5e9aec49f574e3095d",
                category: "project", tracks: ["My Face - Original Mix", "Loose - Original Mix"]
            },
            {
                titre: "Binks To Binks 4", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273539451bf3e69812d1f21f898",
                category: "single", tracks: ["Binks to Binks 4"]
            },
            {
                titre: "M.I.L.S", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273775d5bf4358f40d20471fafe",
                category: "project", tracks: ["M.I.L.S", "Soleil", "Sourire", "Pour nous", "Crésus (feat. Leto)", "Monotonie", "Dis-moi que tu m'aimes", "La Roma (feat. Sadek)", "Elle a mal (feat. Niska)", "Bitch Dab", "Somnambule", "Tout ira mieux", "Malcolm", "TTR"]
            },
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
        bio: "Sauce God. Le roi du drip et des ambiances américaines.",
        bioLongue: "Hamza, le rappeur belge, a apporté une touche de fraîcheur au rap francophone. Fortement influencé par le rap américain et le RnB, il a développé un style unique, le 'H', fait de flows chantés, de productions soignées et d'une esthétique léchée. Il est devenu une référence incontournable pour les amateurs de sonorités nouvelles.",
        albums: [
            {
                titre: "SLOPPY TOPPY (feat. Hamza)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273591f2be1fd19033eccaa63d1",
                category: "feat", tracks: ["SLOPPY TOPPY (feat. Hamza)"]
            },
            {
                titre: "DMX", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27337d03f1bece2f255b685f55f",
                category: "single", tracks: ["DMX (feat. Dinos)"]
            },
            {
                titre: "BIG TIME", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736a480ba0e3e3e9c97c7035f9",
                category: "project", tracks: ["BIG TIME (feat. Frenna)", "ZAAZAA (feat. Frenna, Shallipopi)", "CHAMPION FLOW (feat. Frenna)", "in love with us (feat. Frenna, Yade Lauren)", "hopi amor (feat. Frenna)", "KiLELE (feat. Frenna)"]
            },
            {
                titre: "MANIA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f8b4468c45641ce340de31d1",
                category: "project", tracks: ["ENCORE UNE NUIT", "KYKY2BONDY", "DRAGONS (feat. Werenoi)", "SLOVAKIA", "COME & SEE ME", "SMOKIN & DRINKIN", "LOCATION (feat. Byron Messia)", "OSCAR DE LA HOYA", "BOTTEGA VENETA", "TOXIC (feat. Rema)", "MEGAN", "AFRI", "YESTERDAY", "DESTINY", "FOREVER"]
            },
            {
                titre: "TOXIC", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a55da6bed11bf8d7c9d4b9e5",
                category: "single", tracks: ["TOXIC (feat. Rema)"]
            },
            {
                titre: "LOCATION", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f82f012390b316ae51d1a576",
                category: "single", tracks: ["LOCATION (feat. Byron Messia)"]
            },
            {
                titre: "KYKY2BONDY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e9d952add726d65db9e77e37",
                category: "single", tracks: ["KYKY2BONDY"]
            },
            {
                titre: "DRAGONS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739b8773a797e6d313fa791a98",
                category: "single", tracks: ["DRAGONS (feat. Werenoi)"]
            },
            {
                titre: "RODEO DRIVE (feat. Hamza)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273640621fdfc6ee1a2d4395001",
                category: "feat", tracks: ["RODEO DRIVE (feat. Hamza)"]
            },
            {
                titre: "BIG BODY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731bf1e58f6d611bc654c23de7",
                category: "single", tracks: ["BIG BODY (feat. Tarik Azzouz, La Fève)"]
            },
            {
                titre: "MISS LILY'S", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273460fb464681c3c7152ed72e7",
                category: "single", tracks: ["MISS LILY'S (feat. Dinos)"]
            },
            {
                titre: "Diana (with Hamza)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738fd2b363125a3e79b4bcdd0a",
                category: "single", tracks: ["Diana (with Hamza) (feat. DJ Snake)"]
            },
            {
                titre: "1h55", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ec4d04455ab9e22994633ada",
                category: "single", tracks: ["1h55 (feat. Tiakola, Rsko)"]
            },
            {
                titre: "TOKA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737954b372a01dfa4a58af7cd5",
                category: "single", tracks: ["TOKA (feat. SDM)"]
            },
            {
                titre: "Tentation (feat. Hamza)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273482da83562d410e06c09d5f7",
                category: "feat", tracks: ["Tentation (feat. Hamza)"]
            },
            {
                titre: "Mes Lovés", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273631943a1b3bcf56d40297554",
                category: "single", tracks: ["Mes Lovés (feat. Ponko)"]
            },
            {
                titre: "Lalla (feat. Hamza)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27310b13e41c96451e7af63236e",
                category: "feat", tracks: ["Lalla (feat. Hamza)"]
            },
            {
                titre: "PENNY", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735f8b4df12e882d4a6c96e57a",
                category: "single", tracks: ["PENNY (feat. reezy)"]
            },
            {
                titre: "Maudit", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c18101e2eed91411fd168a2f",
                category: "single", tracks: ["Maudit (feat. Werenoi)"]
            },
            {
                titre: "En mieux", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fdc94fbf12c62a47ed361992",
                category: "single", tracks: ["En mieux (feat. PLK)"]
            },
            {
                titre: "Drifté", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734ac01fbe0d1e664aad26b070",
                category: "project", tracks: ["Drifté", "Drifté - Extended", "Drifté - Sped Up", "Drifté - Slowed Down", "Drifté - Instrumental", "Drifté - Acapella", "Drifté - Radio Edit"]
            },
            {
                titre: "Sincèrement", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737db8828819494cf6d0b79fc4",
                category: "project", tracks: ["Introduction", "Free YSL", "Ma Réalité", "Au Bout De La Nuit", "Only U", "Sadio (feat. Offset)", "Tsunami", "Atasanté Part.2 (feat. Tiakola)", "Codéine 19", "Nasa", "WWE", "Cocoro (feat. CKay)", "Murder", "Nocif (feat. Damso)", "Plus Jamais La Même", "I Love U", "Sincèrement", "Drifté"]
            },
            {
                titre: "SORRY (feat. Hamza & Guy2bezbar)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cb85e0ddefee973345ea02a7",
                category: "feat", tracks: ["SORRY (feat. Hamza & Guy2bezbar)"]
            },
            {
                titre: "DELLALI (feat. Hamza)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cf4000bec7e708e907816fbd",
                category: "feat", tracks: ["DELLALI (feat. Hamza)"]
            },
            {
                titre: "Mon BB", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ea4554512f28365bfca8fab",
                category: "single", tracks: ["Mon BB (feat. Gradur)"]
            },
            {
                titre: "Djo", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b0ef2334176ea5407343b7b3",
                category: "single", tracks: ["Djo (feat. Franglish, Aya Nakamura)"]
            },
            {
                titre: "Sadio (feat. Offset) [Remix]", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739232f5086711c0df27f405e8",
                category: "single", tracks: ["Sadio (feat. Offset) - Remix"]
            },
            {
                titre: "Elastiqué X Somebody", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a3ecf2bcfa0aa044473b35c0",
                category: "project", tracks: ["Elastiqué (feat. HD La R)", "Somebody (feat. HD La R)"]
            },
            {
                titre: "SOLITAIRE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736608fe6c3a6b03b30e29b291",
                category: "single", tracks: ["SOLITAIRE (feat. Prinzly)"]
            },
            {
                titre: "Sadio (feat. Offset)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a5aa098f69694fd9d8fa6b75",
                category: "single", tracks: ["Sadio (feat. Offset)"]
            },
            {
                titre: "Nocif", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27347a25ea07ef29065f9bd7329",
                category: "single", tracks: ["Nocif (feat. Damso)"]
            },
            {
                titre: "Cocoro", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27344595ad7cbd631d7581bdb1d",
                category: "single", tracks: ["Cocoro (feat. CKay)"]
            },
            {
                titre: "Atasanté Part.2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731eadb0f4013d5f59cd7fd09e",
                category: "single", tracks: ["Atasanté Part.2 (feat. Tiakola)"]
            },
            {
                titre: "Lakehouse", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27396759ec330d9f00bdc66b6f4",
                category: "single", tracks: ["Lakehouse (feat. Kekra)"]
            },
            {
                titre: "Introduction", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27313f51bce234a3d7db3171fcc",
                category: "single", tracks: ["Introduction"]
            },
            {
                titre: "Baby (feat. Ashanti & Hamza) [Hamza Remix]", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273202254e92311c0570959ed9c",
                category: "project", tracks: ["Baby (feat. Ashanti & Hamza) - Hamza Remix", "Baby (feat. Ashanti)"]
            },
            {
                titre: "I Got You", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27372f27af28741657b9cd8d4d5",
                category: "single", tracks: ["I Got You (feat. Headie One)"]
            },
            {
                titre: "Chrome Hearts", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273121ca55e8bb28067f85e1bbf",
                category: "single", tracks: ["Chrome Hearts (feat. Dinos)"]
            },
            {
                titre: "Milli", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27375cdc5ab36974173198749c6",
                category: "single", tracks: ["Milli (feat. ASHE 22)"]
            },
            {
                titre: "ZOUM!", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e82f69a98834354c58faf953",
                category: "single", tracks: ["ZOUM! (feat. Prinzly)"]
            },
            {
                titre: "FADE UP", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730568d301dec4dcf2ba9cc1b7",
                category: "single", tracks: ["FADE UP (feat. ZEG P, SCH)"]
            },
            {
                titre: "Laisse moi te dire", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c8c244b8feb901e1354c8ef3",
                category: "single", tracks: ["Laisse moi te dire (feat. No Limit, Tayc)"]
            },
            {
                titre: "Atasanté (feat. Hamza)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27377c0c0e1b9cd10a1a8f570fc",
                category: "feat", tracks: ["Atasanté (feat. Hamza)"]
            },
            {
                titre: "Safari", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730be8018d46e5951d78f0ac33",
                category: "single", tracks: ["Safari (feat. Dadju)"]
            },
            {
                titre: "Van noir", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731992b92dcac86dd7148e37b1",
                category: "single", tracks: ["Van noir (feat. Kalash)"]
            },
            {
                titre: "R8", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27334935c4563847ab956e6fd36",
                category: "single", tracks: ["R8 (feat. 4.4.2, Alonzo)"]
            },
            {
                titre: "Mastic", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a98984ee53388b1067572632",
                category: "single", tracks: ["Mastic (feat. Guy2Bezbar)"]
            },
            {
                titre: "Fendi love", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273010a3f17597ce9516ee64583",
                category: "single", tracks: ["Fendi love (feat. Guy2Bezbar)"]
            },
            {
                titre: "Jota", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27313d2c9b44e427c15c203b2fc",
                category: "single", tracks: ["Jota (feat. Niska)"]
            },
            {
                titre: "Slide", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737ea1d8b16c88d9029c81d715",
                category: "single", tracks: ["Slide (feat. Franglish)"]
            },
            {
                titre: "Elle m'a dit", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c86d639244e947239bbab7b5",
                category: "single", tracks: ["Elle m'a dit (feat. Dj Quick, Ninho)"]
            },
            {
                titre: "Evilous Freestyle", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732b1d3622feb18ae5d367aebd",
                category: "single", tracks: ["Evilous Freestyle"]
            },
            {
                titre: "Benzo", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bb72dbd00a1800a0b8ed5947",
                category: "single", tracks: ["Benzo (feat. Rim'K, Leto)"]
            },
            {
                titre: "140 BPM 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27367c883da80c8b6fe9b5e2671",
                category: "project", tracks: ["PTSD", "Keke", "Réel (feat. Zed)", "Cheikh", "Don’t Tell (feat. Headie One)", "Fake Friends", "Torino", "Spaghetti (feat. Gazo & Guy2Bezbar)", "Spider", "AMG Technology", "Hara-Kiri (feat. Kaaris)", "Jalousie", "Gang Activity"]
            },
            {
                titre: "Réel (feat. Zed)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273097451995a2b146116aca8f3",
                category: "single", tracks: ["Réel (feat. Zed)"]
            },
            {
                titre: "DRILL FR 5 (feat. Hamza)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273d04c200386afbe36ade66e80",
                category: "feat", tracks: ["DRILL FR 5 (feat. Hamza)"]
            },
            {
                titre: "140 BPM", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ece4e42d3aaff75b8ec8a43d",
                category: "project", tracks: ["Netflix", "Henny Pop", "Nobu"]
            },
            {
                titre: "SIX", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b86a221ef70938d5656adcb6",
                category: "single", tracks: ["SIX (feat. CYPH3R)"]
            },
            {
                titre: "Santa Sauce 2", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27385fcb68a2a6ff6c78ce2839d",
                category: "project", tracks: ["Belek", "God Bless (feat. Damso)", "G's Up Hoes Down", "Go Back", "Benzo (feat. Young ADZ)", "Sans Signes", "Oseille", "Late Nights", "Gasolina (feat. Gambi)", "Embourgeoisé", "Jon Snow", "Bac +12 (feat. Koba LaD)", "Por La Vida"]
            },
            {
                titre: "Paradise (Deluxe)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2735f4798d148bedcff1cc7b376",
                category: "project", tracks: ["Le Même Sort", "Paradise", "Validé", "HS (feat. SCH)", "Sometimes", "Audemars Shit", "Dale x Love Therapy (feat. Aya Nakamura)", "Deep Inside", "Addiction", "Henny Me Noie", "50x", "Blue Crystal", "Mac & Cheese", "Gynéco", "Galerie", "Meilleur", "Minuit 13 (feat. Christine and the Queens & Oxmo Puccino)", "Snakes", "Clic Clac (feat. 13 Block)", "Céline", "Stick", "Aquafina", "Goat", "Madonna (feat. A.CHAL)", "Yin Yang"]
            },
            {
                titre: "Maghreb Gang (feat. French Montana, Khaled & HAMZA) [Saucegod Remix]", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2731163ffe6a4fe8b8b6e67f2d8",
                category: "single", tracks: ["Maghreb Gang (feat. French Montana, Khaled & HAMZA) - Saucegod Remix"]
            },
            {
                titre: "Designer", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2735ad464aaad072c5c0e86345d",
                category: "single", tracks: ["Designer"]
            },
            {
                titre: "Love Break", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273a6191850ed073794662fba43",
                category: "single", tracks: ["Love Break (feat. The Magician)"]
            },
            {
                titre: "1994", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273377ecc10e28ccafdf6893101",
                category: "project", tracks: ["Life", "Juste une Minute", "Vibes", "Pas de Remords", "Mucho Love", "Cash Time", "Godzilla", "Jodeci Mob", "Silicone", "Mi Gyal", "Pasadena", "Monopoly", "Destiny's Child", "1994"]
            },
            {
                titre: "Vibes", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273ddbc8da3e8889dcfbe083f7b",
                category: "single", tracks: ["Vibes"]
            },
            {
                titre: "Destiny's Child", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273b3b2bf9a0c4fb19c8bd9dc15",
                category: "single", tracks: ["Destiny's Child"]
            },
            {
                titre: "Godzilla", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27350c9b2df6ad2fade8418b96f",
                category: "single", tracks: ["Godzilla"]
            },
            {
                titre: "Santa Sauce", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27307f7fa23f2e59b5b43cbac67",
                category: "project", tracks: ["Suave", "Anh Yeah", "Broccoli (feat. Dolfa)", "Vraiment", "Sans Fin", "La Nuit Est À Nous", "Confessions, pt. 1", "Ouais C'est Ban", "Wow", "Shine", "Vvs", "Habibi"]
            },
            {
                titre: "Ghetto", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2738de7d3ea726cb6c0ee85efa8",
                category: "single", tracks: ["Ghetto"]
            },
            {
                titre: "Zombie Life", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273d6e409950e056b3727cbc1e6",
                category: "project", tracks: ["Lever Du Soleil", "Zombie Life", "La Clef", "Tu Me Donne Des Idées", "Rari (feat. Joke)", "Mes Entrailles", "Mercedes", "Pardonne-Moi", "Rendez-Vous", "Slowdown", "House (feat. B La B)", "Cuba", "Zeus", "Jamais Trop Jeune", "Hennessy", "Slow", "Au Top", "Marley", "Rolling Stone", "Nuit de Folie"]
            },
            {
                titre: "One One", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27362636c645df5d32502158cca",
                category: "single", tracks: ["One One"]
            },
            {
                titre: "H-24", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273bfc097b95157d7f35560b8c1",
                category: "project", tracks: ["Bibi Boy Swag", "Minimum", "La Sauce", "Danse Pour Moi", "Ennemis", "Mula", "Police Ass N****", "JOB", "Love", "Non Stop", "Gang", "Molly Molly", "Design", "C'est pas cher", "45", "Respect", "By The Way", "Feu", "Cette maille", "Mi Amor", "Yeah Shit", "Nuages", "COB", "Riche"]
            },
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
        bio: "La révélation franco-camerounaise. Une voix unique entre rap et jazz.",
        bioLongue: "Yamê a explosé aux yeux du monde avec son titre 'Bécane'. Artiste hybride, il mêle rap, jazz, soul et musiques africaines. Sa voix haut perchée et sa technique vocale impressionnante, couplées à des textes introspectifs, en font l'une des promesses les plus excitantes de la scène actuelle.",
        albums: [
            {
                titre: "Encore une fois", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b235f4215e8e7ac1489356c6",
                category: "single", tracks: ["Encore une fois (feat. Orelsan)"]
            },
            {
                titre: "Le mur", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c749041e3429825226b138bf",
                category: "single", tracks: ["Le mur (feat. GP Explorer, Clara Luciani, Sofiane Pamart)"]
            },
            {
                titre: "ÉBĒM", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273019fee09a26694d361d6d44e",
                category: "project", tracks: ["Intro", "Solo", "Shoot", "Supporter", "Moto", "Bizarre", "Problèmes", "Insensé", "Méprise", "Le Roi", "Céline", "Comme on le vit à deux", "Happy End", "Dans 10 ans"]
            },
            {
                titre: "Solo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731fe9d7b37e78fab4897c33c1",
                category: "single", tracks: ["Solo"]
            },
            {
                titre: "Insensé", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273071b08b139466d8327a7ff60",
                category: "single", tracks: ["Insensé"]
            },
            {
                titre: "Shoot", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b03eef5d2b920cbc25d2f0de",
                category: "single", tracks: ["Shoot"]
            },
            {
                titre: "Totem", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f2b765b7b46a308b86c81414",
                category: "single", tracks: ["Totem (feat. Lamomali, -M-, Fatoumata Diawara, Toumani Diabaté, Balla Diabaté)"]
            },
            {
                titre: "Panorama", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273673e9b46dd1c1eaa8e7301ec",
                category: "single", tracks: ["Panorama (feat. Caballero & JeanJass)"]
            },
            {
                titre: "PURE CODEI (feat. Yamê)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736edba98842bd35a943b6082a",
                category: "feat", tracks: ["PURE CODEI (feat. Yamê)"]
            },
            {
                titre: "Bécane (Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27331b78bc01dcfe48c790c4ed7",
                category: "single", tracks: ["Bécane (Remix) (feat. Trinix)"]
            },
            {
                titre: "ELOWI C&$", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273bcd4f5d60f87fa777b602749",
                category: "project", tracks: ["· AYO MBA (feat. Ocho)", "MON BAIL (feat. Ocho)", "CALL OF VALHALLA (feat. Ocho)", "LOWKEY (feat. Ocho)", "BAHWAI (feat. Ocho)", "DETER (feat. Ocho)", "BECANE (feat. Ocho)", "BUSINESS (feat. Ocho)", "QUÊTE (feat. Ocho)"]
            },
            {
                titre: "Mbenda", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735823f26cc49b3715d5494b0c",
                category: "single", tracks: ["Mbenda (feat. Blick Bassy)"]
            },
            {
                titre: "ELOWI", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ee8076d0797475a39aa846ea",
                category: "project", tracks: ["Ayo Mba", "Mon bail", "Call of Valhalla", "Lowkey", "Bahwai", "Déter", "Bécane", "Business", "Quête"]
            },
            {
                titre: "Kodjo (version acoustique)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738d4295601fe4c21168f0556b",
                category: "single", tracks: ["Kodjo - version acoustique"]
            },
            {
                titre: "Bécane - A COLORS SHOW", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27309a3f2c50cb84cd243941e18",
                category: "single", tracks: ["Bécane - A COLORS SHOW (feat. COLORS)"]
            },
            {
                titre: "Call of Valhalla", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ff4d5883acd380b1e3fb92f6",
                category: "single", tracks: ["Call of Valhalla"]
            },
            {
                titre: "BB Démarre", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734cf6ddd5cc7941eac78a864f",
                category: "single", tracks: ["BB Démarre"]
            },
            {
                titre: "B.4.6", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273210cd7f7cdcdeda32c660ac7",
                category: "single", tracks: ["B.4.6"]
            },
            {
                titre: "Agent 237", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732de5d68844e0be4fddadd3ba",
                category: "project", tracks: ["Intro - La lettre", "Nubie", "Carré d'as", "La maille", "Tracktopelle", "Il est tard", "RQPLM", "Plaines"]
            },
            {
                titre: "Carré d'As", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730d302e31b9fd4bca7c328da2",
                category: "single", tracks: ["Carré d'As"]
            },
            {
                titre: "Gimme a ride", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f01ac9c8bec6ab77a710e0c7",
                category: "single", tracks: ["Gimme a ride"]
            },
            {
                titre: "Bantu Mixtape, Vol. 2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737115b11675a5169c941522eb",
                category: "project", tracks: ["Tesla", "Fly", "Caraibos", "Believe", "40 degrés", "Carton jaune"]
            },
            {
                titre: "Mouf", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a30568ea5c1a87d798e65314",
                category: "single", tracks: ["Mouf"]
            },
            {
                titre: "Bantu Mixtape, Vol. 1", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ca51cca6510a9c2e0e04dadb",
                category: "project", tracks: ["Sentiments", "Incomparables", "Sales idées", "Soum soum"]
            },
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
        bio: "L'énergie Jersey Drill. Une ascension fulgurante.",
        bioLongue: "Favé est l'étoile montante du 95. Il a su capter l'énergie de la Jersey Drill pour en faire des tubes viraux. Avec des morceaux comme 'Urus', il a conquis un public jeune grâce à son dynamisme et ses refrains efficaces, s'imposant rapidement comme une nouvelle tête d'affiche.",
        albums: [
            {
                titre: "Pleins Phares", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733e114c564664615a5f7f7696",
                category: "project", tracks: ["Eastpak", "Mc Laren", "No Plan B", "Parle moi (feat. SDM)", "Douloureux", "5 Etoiles", "Money Maker", "Tsunami (feat. Timar)", "Dernière Etoile", "500K Interlude", "Etranger", "BPM (feat. Genezio)", "Tout Donner", "Jeu", "Bonbon", "Le bonheur s\'achète (feat. Jolagreen23)", "Pleins Phares"]
            },
            {
                titre: "Tsunami", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273137067d917068d9ae99a7148",
                category: "single", tracks: ["Tsunami (feat. Timar)"]
            },
            {
                titre: "Parle moi", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fd16d02fcfc2990320efe396",
                category: "single", tracks: ["Parle moi (feat. SDM)"]
            },
            {
                titre: "Le bonheur s\'achète", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d0c5818549fc5eab446ec5d2",
                category: "single", tracks: ["Le bonheur s\'achète (feat. Jolagreen23)"]
            },
            {
                titre: "Mc Laren", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733c203ae67674573c4c1741f6",
                category: "single", tracks: ["Mc Laren"]
            },
            {
                titre: "BPM", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273613e87df68515eeed54da4b8",
                category: "single", tracks: ["BPM (feat. Genezio)"]
            },
            {
                titre: "Freestyle P.P #3", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273eda33ec2ad6567be2880e330",
                category: "single", tracks: ["Freestyle P.P #3"]
            },
            {
                titre: "Freestyle P.P #2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730decba447a5a4d1055f32302",
                category: "single", tracks: ["Freestyle P.P #2"]
            },
            {
                titre: "Freestyle P.P #1", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734ec7ffe15d272ebce5016d6f",
                category: "single", tracks: ["Freestyle P.P #1"]
            },
            {
                titre: "Le Gain (feat. Favé)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b644223be6f94515f1dfffee",
                category: "feat", tracks: ["Le Gain (feat. Favé)"]
            },
            {
                titre: "Money Maker", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a0225fbe1e697d3e86597cd7",
                category: "single", tracks: ["Money Maker"]
            },
            {
                titre: "Saturday", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a969050ec41c23e6932f796a",
                category: "single", tracks: ["Saturday"]
            },
            {
                titre: "No stress", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27334f00d8167a4be0f6c937af2",
                category: "single", tracks: ["No stress (feat. DVM, La Mano 1.9)"]
            },
            {
                titre: "IL LE FALLAIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273aad662c95c5cb4ca64c9c950",
                category: "project", tracks: ["IL LE FALLAIT", "MOMENTS DE GALERE", "INVISIBLE", "NUAGES", "FLASHBACK (feat. Gazo)", "VIBES", "DERNIERE CHANCE", "SUPER FAVE 3D", "EN VRAI", "GMAIL", "FAVELA (feat. So La Lune)", "C.F.M.", "D\'APRES TOI", "MEME CHOSE", "ENSEMBLE CROCO", "NO LACK", "TEMPS", "TOSEINA (feat. Mougli)"]
            },
            {
                titre: "TOSEINA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739e6be358bf168bf6732999c6",
                category: "single", tracks: ["TOSEINA (feat. Mougli)"]
            },
            {
                titre: "Time", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273efe8325f22baee2ca10d99af",
                category: "single", tracks: ["Time (feat. ArrDee)"]
            },
            {
                titre: "Pas les mots", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a4b208a840cce5acaea213b6",
                category: "single", tracks: ["Pas les mots (feat. Raplume, HOUDI)"]
            },
            {
                titre: "Encore", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273294e8e6319d06c4e2ffbce0b",
                category: "single", tracks: ["Encore (feat. Booska-P)"]
            },
            {
                titre: "FAVELA", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273eeddbd0c942cb53d1f16fa7f",
                category: "single", tracks: ["FAVELA (feat. So La Lune)"]
            },
            {
                titre: "Flashback", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730c956815f213a20562ccc7d4",
                category: "single", tracks: ["Flashback (feat. Gazo)"]
            },
            {
                titre: "Vibes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273050758af48d43b25b2eef208",
                category: "single", tracks: ["Vibes"]
            },
            {
                titre: "J\'aime pas perdre #Freestyle", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736d4b21b2aabce0b67f0b02c8",
                category: "single", tracks: ["J\'aime pas perdre #Freestyle"]
            },
            {
                titre: "NO LÈCHE 🚫👅 (feat. Favé, Kerchak & Leto)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735b4936a415275bf33d1dd084",
                category: "single", tracks: ["NO LÈCHE (feat. Gazo, Kerchak, Leto)"]
            },
            {
                titre: "F4", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731ff58f8b70c797fac0d0221e",
                category: "project", tracks: ["Urus", "Toxic", "Mes raisons", "+ de sous (feat. Guy2Bezbar)", "00h"]
            },
            {
                titre: "Toxic", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27340d4edf12a9b725036a0fa66",
                category: "single", tracks: ["Toxic"]
            },
            {
                titre: "+ de sous", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27358b34bdce8046042e3eaf5a7",
                category: "single", tracks: ["+ de sous (feat. Guy2Bezbar)"]
            },
            {
                titre: "Génération Miracle (feat. Favé)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27348ff12f0370090d219aa7bbc",
                category: "feat", tracks: ["Génération Miracle (feat. Favé)"]
            },
            {
                titre: "Urus", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273583586e9318379d1add68cfe",
                category: "single", tracks: ["Urus"]
            },
            {
                titre: "Mode Avion", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27337873b4e2951e8f737f5ad3f",
                category: "single", tracks: ["Mode Avion"]
            },
            {
                titre: "Mercedes", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27357161e237f018b97a0ea699f",
                category: "single", tracks: ["Mercedes"]
            },
            {
                titre: "cote passager", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734d84268ec3f1debbf0da2fa2",
                category: "single", tracks: ["cote passager"]
            },
            {
                titre: "Sommet", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27370e7734b3a32dda09babd5e3",
                category: "single", tracks: ["Sommet"]
            },
        ]
    },
    {
        id: "houdi",
        nom: "Houdi",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/houdi.webp",
        chiffres: "121k Abonnés",
        bio: "Le rappeur masqué du 77. Productivité et polyvalence.",
        bioLongue: "Houdi, originaire de Seine-et-Marne, cultive le mystère avec sa cagoule de ski. Très productif, il enchaîne les projets (EPs, mixtapes) à un rythme effréné. Son style oscille entre kickage technique et mélodies planantes, faisant de lui l'un des rookies les plus prometteurs de sa génération.",
        albums: [
            {
                titre: "SIROCCO", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27320d84617cc3781797b08c03d",
                category: "project", tracks: ["ENSEMBLE", "CANDIDAT", "SUNSEX", "AILLEURS", "GRANDES AFFAIRES", "DIAMOND", "PLATA", "LE TOUR DE LA PLANÈTE", "TU VERRAS"]
            },
            {
                titre: "AILLEURS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e6621c61eb2bd18467ed2014",
                category: "single", tracks: ["AILLEURS"]
            },
            {
                titre: "SUNSEX", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732d5bc9ea7c57c95a96b29b24",
                category: "single", tracks: ["SUNSEX"]
            },
            {
                titre: "LÉLÉA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273591747d3e1778e4a4b0f62cb",
                category: "single", tracks: ["LÉLÉA (feat. Karmen)"]
            },
            {
                titre: "RIBÉRY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27358d6ea43c2da6d748c8c9764",
                category: "single", tracks: ["RIBÉRY"]
            },
            {
                titre: "En pétard", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27322d282570289cef6275cf23f",
                category: "single", tracks: ["En pétard (feat. 77 degrés)"]
            },
            {
                titre: "INTÉRIEUR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b31ab96f3dde1c2eb6fc8036",
                category: "single", tracks: ["INTÉRIEUR"]
            },
            {
                titre: "Wadup!?", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273307c0a56cfbfe36557262064",
                category: "single", tracks: ["Wadup!? (feat. Caballero & JeanJass)"]
            },
            {
                titre: "LE DERNIER RAYON DE SOLEIL", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732eb5664841e93029aee8cc59",
                category: "project", tracks: ["PAPILLON", "CONTRE LA GALERE", "AVEC OU SANS TOI", "TOTALLY SPIES", "UNE PLAQUETTE A MARBELLA", "RAP CONSCIENT", "BARA", "LE DERNIER RAYON DE SOLEIL", "PETITE SOEUR", "DALIDA (feat. So La Lune)", "BANLIEUE DE PARIS", "JE T’AIME", "LAISSE MOI"]
            },
            {
                titre: "DALIDA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736c5c7dcc41524d52da8bf62d",
                category: "single", tracks: ["DALIDA (feat. So La Lune)"]
            },
            {
                titre: "Négocie pas", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d5c99b1746b88e5ae5ed6685",
                category: "single", tracks: ["Négocie pas (feat. Sto)"]
            },
            {
                titre: "CONTRE LA GALERE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27327b405aadc1edfae420c82e5",
                category: "single", tracks: ["CONTRE LA GALERE"]
            },
            {
                titre: "TOTALLY SPIES", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273149188804854624eec8cd7a1",
                category: "single", tracks: ["TOTALLY SPIES"]
            },
            {
                titre: "RAP CONSCIENT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27372eb657338bb35032f71dcbe",
                category: "single", tracks: ["RAP CONSCIENT"]
            },
            {
                titre: "HOOD VOLUME.1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ab923937f4bcbedbdd4136ef",
                category: "project", tracks: ["HLM PARASOL", "100 (feat. Guy2Bezbar)", "PEINE", "MODE HARDCORE (feat. Ziak)", "HOOD", "DÉRAPAGES (feat. Lesram)", "OP", "NUAGES (feat. winnterzuko)", "BABYLONE", "À PERTE (feat. Dosseh)", "BELLE CHANSON", "BONUS INQUIÉTANT"]
            },
            {
                titre: "À PERTE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734b06173cc43323c6d3ff5410",
                category: "single", tracks: ["À PERTE (feat. Dosseh)"]
            },
            {
                titre: "NUAGES", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730808ef1fd7d1d9d5e05f74d5",
                category: "single", tracks: ["NUAGES (feat. winnterzuko)"]
            },
            {
                titre: "MODE HARDCORE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27395d2468953a702a2e774cfe8",
                category: "single", tracks: ["MODE HARDCORE (feat. Ziak)"]
            },
            {
                titre: "DÉRAPAGES", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f331b68ac6adb1a7c961f626",
                category: "single", tracks: ["DÉRAPAGES (feat. Lesram)"]
            },
            {
                titre: "BELLE CHANSON", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ad8ddfd295e5176aaa054d97",
                category: "single", tracks: ["BELLE CHANSON"]
            },
            {
                titre: "Pas les mots", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a4b208a840cce5acaea213b6",
                category: "single", tracks: ["Pas les mots (feat. Raplume, Favé)"]
            },
            {
                titre: "Nuketown", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27392e79e8f2558c5957b9fc9e4",
                category: "single", tracks: ["Nuketown (feat. Le Règlement)"]
            },
            {
                titre: "100", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732b3aadf277abdec9da480784",
                category: "single", tracks: ["100 (feat. Guy2Bezbar)"]
            },
            {
                titre: "Lumière noire", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27319e0618d82e86bed2182852a",
                category: "single", tracks: ["Lumière noire (feat. Georgio)"]
            },
            {
                titre: "SUN7", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e0949fb221d2d8dbcc3b53d1",
                category: "project", tracks: ["SENSATION", "MÉDICALE", "M\'EFFACER", "AVANT TOI", "SCOOTER", "RAPPEL", "SUN7", "SORCIÈRE", "HOUTRO"]
            },
            {
                titre: "MÉDICALE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27331d05a36df870ab72ac88d3a",
                category: "single", tracks: ["MÉDICALE"]
            },
            {
                titre: "AVANT LES YEUX", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e2a801bacfaab9a2a6dc84d6",
                category: "project", tracks: ["INTRO (feat. Stony Stone)", "PAS NORMAL (feat. Stony Stone)", "HNINA (feat. Ghost Killer Track)", "CALCULS (feat. Stony Stone)", "MILLION (feat. Stony Stone)", "LE TEMPS (feat. Stony Stone)", "BRUME (feat. Stony Stone)", "AQUA (feat. Stony Stone)", "AUTRE PART (feat. Stony Stone)"]
            },
            {
                titre: "HNINA (feat. Ghost Killer Track)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731ff5ac6a2fc369dc99d8a72d",
                category: "single", tracks: ["HNINA (feat. Ghost Killer Track)"]
            },
            {
                titre: "LA FOLIE DES GRANDEURS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d93ab7dac95ec7322fbc7249",
                category: "project", tracks: ["LA FOLIE DES GRANDEURS", "MUSIQUE GROSSE QUANTITÉ", "20 ANS (feat. 34murphy)", "CALMOS", "CIEL", "MONACO", "SOUS LE MANTEAU", "LA SEULE JOIE"]
            },
            {
                titre: "GRV PAS LE TEMPS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c87affcaeefa1459cf2a706f",
                category: "single", tracks: ["GRV PAS LE TEMPS (feat. PUSH & GIO)"]
            },
            {
                titre: "LE 12 ÈME", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c652da07b9d720bb4f786565",
                category: "single", tracks: ["LE 12 ÈME"]
            },
            {
                titre: "TOMBÉ DU CIEL (Giovanni x PushK x HOUDI) - COOTB vol.2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737557486170b6b77e8a13c682",
                category: "single", tracks: ["TOMBÉ DU CIEL (Giovanni x PushK x HOUDI) - COOTB vol.2 (feat. Label Blue Sky)"]
            },
            {
                titre: "LE TEMPS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730eccdca3d95d1437db09dcb9",
                category: "single", tracks: ["LE TEMPS (feat. Skary, Wysko)"]
            },
            {
                titre: "GRHÜNT", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27354a01689b24d27a1bff4139a",
                category: "project", tracks: ["GRHÜNT #77", "PILE OU FACE", "TRANQUILLEMENT", "77ÈME ÉTAGE"]
            },
            {
                titre: "CRACK", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cf90ddb7faf4680712e78884",
                category: "single", tracks: ["CRACK (feat. La Pépite)"]
            },
            {
                titre: "EN DIDI (Freestyle)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a765afc7dbacf32b61d65cd5",
                category: "single", tracks: ["EN DIDI - Freestyle (feat. Raplume)"]
            },
            {
                titre: "CALMITO", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273bff3ad2f41f148c0a75d2d07",
                category: "single", tracks: ["CALMITO"]
            },
            {
                titre: "LA BÊTE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e5968b186ca0926b5984c574",
                category: "project", tracks: ["TÉNÉBREUX", "RIP", "FLEUR", "B&B", "LA BÊTE (interlude)", "TRABAJAW", "JEUNE MATRIXÉ", "BONUS EFFRAYANT"]
            },
            {
                titre: "CHOUCHOU DES MADAMES", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733257a85486e61f772a17b225",
                category: "single", tracks: ["CHOUCHOU DES MADAMES"]
            },
            {
                titre: "SOCIOPATHE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735b3814621f4e5a3096dec297",
                category: "single", tracks: ["SOCIOPATHE"]
            },
            {
                titre: "MAUVAIS RÊVE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e815129374b26e9379b4932c",
                category: "single", tracks: ["MAUVAIS RÊVE"]
            },
            {
                titre: "DISPARAÎTRE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273276c0b7ef44718022a5e75e5",
                category: "single", tracks: ["DISPARAÎTRE"]
            },
            {
                titre: "DANS ÇA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e57b1aeed998fac05ecafc3e",
                category: "single", tracks: ["DANS ÇA"]
            },
            {
                titre: "CALMADA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c7c773a7527fc2c071b6b141",
                category: "single", tracks: ["CALMADA"]
            },
            {
                titre: "WOKA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a7cb2911594f449a61824d4b",
                category: "project", tracks: ["TROUBLE FÊTE", "BLEU", "CHERRY", "WOKA"]
            },
            {
                titre: "RÜDIGER", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273002af80beb7ec41524946c06",
                category: "single", tracks: ["RÜDIGER"]
            },
            {
                titre: "NEW JERSEY", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dc0ea3933586e92f32d56618",
                category: "single", tracks: ["NEW JERSEY"]
            },
            {
                titre: "CORRECTION", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730b6af1679af62e628ee9a25b",
                category: "single", tracks: ["CORRECTION"]
            },
            {
                titre: "FPH#3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273fef4b17dffb2b4f0443974a8",
                category: "single", tracks: ["FPH#3"]
            },
            {
                titre: "FPH #2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273aa710a403fdbfa07879d6812",
                category: "single", tracks: ["FPH #2"]
            },
            {
                titre: "FPH #1", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735849ab530a40b60529fefd58",
                category: "single", tracks: ["FPH #1"]
            },
            {
                titre: "FPH #0", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a83c36340f01a3bf6d342601",
                category: "single", tracks: ["FPH #0"]
            },
            {
                titre: "ENCHANTÉ", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27393c71bfe41bd932aaac204d9",
                category: "single", tracks: ["ENCHANTÉ"]
            },
            {
                titre: "CAUCHEMAR 3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732640c2800c6ca08e57f2b2a7",
                category: "single", tracks: ["CAUCHEMAR 3"]
            },
            {
                titre: "CALMÉ", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273263b4ed0c2caf923c914a9e9",
                category: "single", tracks: ["CALMÉ"]
            },
        ]
    },
    {
        id: "la_mano_19",
        nom: "La Mano 1.9",
        statut: "tendance",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/la_mano_19.webp",
        chiffres: "749k Abonnés",
        bio: "La terreur du 19ème. Énergie brute et authenticité.",
        bioLongue: "La Mano 1.9 est l'incarnation du rap de rue parisien actuel. Originaire du 19ème arrondissement, il livre un rap agressif, sans concession, qui raconte la réalité de son quartier. Son énergie débordante et son authenticité lui ont permis de se faire un nom rapidement sur la scène Drill/Trap.",
        albums: [
            {
                titre: "Omerta 19", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b2a564c974cdcce923975e99",
                category: "single", tracks: ["Omerta 19 (feat. JRK 19)"]
            },
            {
                titre: "R.A.T #2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734ae33a64998b428d5cf96edb",
                category: "single", tracks: ["R.A.T #2"]
            },
            {
                titre: "R.A.T", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c558d1f93bda3ae3808c6b0c",
                category: "project", tracks: ["R.A.T #2", "Adrénaline / Maradona", "Encore", "Handek", "I\'m Sorry", "4K", "Crime ensoleillé (feat. Tiakola)", "Mailler", "City", "27.06.25 (Magie)", "Businessman", "Bomberman", "Fourmi (feat. Vacra)", "Célibataire", "Sexy Woman", "No pain, No Gain", "LVL UP", "SWAT (feat. SDM)", "Génération", "Kilo"]
            },
            {
                titre: "ZOMBIE M\'APPELLE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27382b4f77910220f6f01794089",
                category: "single", tracks: ["ZOMBIE M\'APPELLE (feat. Leto)"]
            },
            {
                titre: "Adrénaline / Maradona", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273087fc97c8e89e106ad16e2a0",
                category: "single", tracks: ["Adrénaline / Maradona"]
            },
            {
                titre: "Thunes", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ba84dd97a6ca80185a65fae4",
                category: "single", tracks: ["Thunes (feat. GP Explorer, ElGrandeToto, Zed)"]
            },
            {
                titre: "Oyaya (feat. La Mano 1.9)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b2c6f53f4fbf55056e3c4f48",
                category: "feat", tracks: ["Oyaya (feat. La Mano 1.9)"]
            },
            {
                titre: "Djandjou", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c981b68eefdabf82255b7644",
                category: "single", tracks: ["Djandjou (feat. Bolémvn)"]
            },
            {
                titre: "Un monde à l\'autre", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273387935d4b38e2ad48c64916d",
                category: "single", tracks: ["Un monde à l\'autre (feat. GP Explorer, GIMS, SCH)"]
            },
            {
                titre: "OK K (feat. Abra Cadabra & La Mano 1.9)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bff793482fcec8c22bbf4f6f",
                category: "single", tracks: ["OK K (feat. Abra Cadabra & La Mano 1.9)"]
            },
            {
                titre: "PARISIENNE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27393db7b33b63de6dc99a131ee",
                category: "single", tracks: ["PARISIENNE (feat. GIMS)"]
            },
            {
                titre: "Mia Khalifa", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273522444111e04119b08cb9af7",
                category: "single", tracks: ["Mia Khalifa (feat. DJ Milane)"]
            },
            {
                titre: "SWAT", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27320279fe209aa992eefc7c575",
                category: "single", tracks: ["SWAT (feat. SDM)"]
            },
            {
                titre: "Fourmi", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733cc2f4ea9ed2f229fc8c776f",
                category: "single", tracks: ["Fourmi (feat. Vacra)"]
            },
            {
                titre: "Crime ensoleillé", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27387bf67d4544b7cdaf9aca078",
                category: "single", tracks: ["Crime ensoleillé (feat. Tiakola)"]
            },
            {
                titre: "Célibataire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27319ad1ed71e7afef9e6d295e7",
                category: "single", tracks: ["Célibataire"]
            },
            {
                titre: "27.06.25 (Magie)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ac0fcffdbb2a1f8bbbf7400f",
                category: "single", tracks: ["27.06.25 (Magie)"]
            },
            {
                titre: "Jump", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e9297af53ea308ae06f5e63b",
                category: "single", tracks: ["Jump (feat. L2B, iDS)"]
            },
            {
                titre: "BUSINESSMAN", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731b109124d18305ebc2bc3ed0",
                category: "single", tracks: ["Businessman"]
            },
            {
                titre: "Kat Sa N\'Dey", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c6f9ea279dfe31a852abe845",
                category: "single", tracks: ["Kat Sa N\'Dey (feat. Franglish)"]
            },
            {
                titre: "Fake", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bd778c404541c05799eed824",
                category: "single", tracks: ["Fake"]
            },
            {
                titre: "FAKE - A COLORS SHOW", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27352ef328f83e2891177e34bfe",
                category: "single", tracks: ["FAKE - A COLORS SHOW (feat. COLORS)"]
            },
            {
                titre: "J\'AIME", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d07ce532ddcf4d12510009e9",
                category: "single", tracks: ["J\'AIME (feat. Genezio, Leto)"]
            },
            {
                titre: "Jerrican (feat. La Mano 1.9)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733e88c7f7d7b496b233fe9d96",
                category: "feat", tracks: ["Jerrican (feat. La Mano 1.9)"]
            },
            {
                titre: "No stress", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27334f00d8167a4be0f6c937af2",
                category: "single", tracks: ["No stress (feat. DVM, Favé)"]
            },
            {
                titre: "Sexy Woman", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273191ea5e949e260efe52fc6f6",
                category: "single", tracks: ["Sexy Woman"]
            },
            {
                titre: "Hockey", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733d4e52594b50c677d0b29771",
                category: "single", tracks: ["Hockey (feat. Zed)"]
            },
            {
                titre: "D BLOCK AFRIQUE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737f28711195b43fcbf2f082f8",
                category: "single", tracks: ["D BLOCK AFRIQUE (feat. Dinos, Jolagreen23)"]
            },
            {
                titre: "LE PLAN", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731346aae61738f41230e1043e",
                category: "single", tracks: ["LE PLAN (feat. JRK 19)"]
            },
            {
                titre: "TYPE SHIT (feat. La Mano 1.9)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739572e29b5895465225aa27b7",
                category: "feat", tracks: ["TYPE SHIT (feat. La Mano 1.9)"]
            },
            {
                titre: "POP (feat. La Mano 1.9)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273be89e65fdc49ca1b493b0e22",
                category: "feat", tracks: ["POP (feat. La Mano 1.9)"]
            },
            {
                titre: "I\'M SORRY", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731cdb019a5ba20446d828b700",
                category: "single", tracks: ["I\'m Sorry"]
            },
            {
                titre: "G.A.N.G", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273464498f083d70777da229eef",
                category: "single", tracks: ["G.A.N.G (feat. Tiakola, Niska)"]
            },
            {
                titre: "ON TAPE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cfcb5c4eaf37339e481aaa95",
                category: "single", tracks: ["ON TAPE (feat. Booska-P)"]
            },
            {
                titre: "STEPHANIE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27329d79681076f04911ee5b95e",
                category: "single", tracks: ["STEPHANIE (feat. La Hasba22, Nono La Grinta)"]
            },
            {
                titre: "EL GEMANO", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273205ce6fb2d8b06e755e427b9",
                category: "single", tracks: ["EL GEMANO (feat. Genezio)"]
            },
            {
                titre: "Tout y est", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27313d3f8937e920e11fae0e4a4",
                category: "single", tracks: ["Tout y est (feat. OBOY, Jozii)"]
            },
            {
                titre: "CANON (FEAT NISKA)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27308b5ae7a2d4140979a2d5c72",
                category: "project", tracks: ["Canon (feat. Niska)", "Canon"]
            },
            {
                titre: "Block 51", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737a924606c0bad35a67a02e57",
                category: "single", tracks: ["Block 51"]
            },
            {
                titre: "J\'coupe tout", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273caf51eb963083f9fb8141c7b",
                category: "single", tracks: ["J\'coupe tout (feat. Musto)"]
            },
            {
                titre: "LA QUOI ? (Basstrick Remix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273445488dfb4bafa199a4c424b",
                category: "single", tracks: ["LA QUOI ? - Basstrick Remix (feat. Basstrick, Nono La Grinta)"]
            },
            {
                titre: "La Mano dans la mallette", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273faeabee4a3796ced4733adfa",
                category: "single", tracks: ["La Mano dans la mallette (feat. Raplume, DVGZ)"]
            },
            {
                titre: "P.A.M.P", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ba9e5ba241a8cf27e409e1dc",
                category: "single", tracks: ["P.A.M.P (feat. Liim’s)"]
            },
            {
                titre: "Hors la loi", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c7e8a1537566fc0f456a5f0f",
                category: "single", tracks: ["Hors la loi (feat. L2B)"]
            },
            {
                titre: "Freestyle Sponge S2-E6", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273708ed20675c989742e31ed1f",
                category: "single", tracks: ["Freestyle Sponge S2-E6 (feat. Sponge Productions)"]
            },
        ]
    },
    {
        id: "kerchak",
        nom: "Kerchak",
        statut: "tendance",
        style: "Jersey",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kerchak.webp",
        chiffres: "743k Abonnés",
        bio: "Le prince de la Jersey Drill en France.",
        bioLongue: "Kerchak a été l'un des premiers à importer massivement la Jersey Drill en France. Avec son hit 'Sabor', il a imposé ce style rythmé et dansant. Son personnage masqué (à ses débuts) et son énergie communicative en font une figure centrale de la nouvelle vague du rap français.",
        albums: [
            {
                titre: "Alicia Ariana", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735e0060d9d55a5e491cac862e",
                category: "single", tracks: ["Alicia Ariana (feat. FRANKLIN)"]
            },
            {
                titre: "D", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a2f58287b84ece1f8d6ccfda",
                category: "single", tracks: ["D"]
            },
            {
                titre: "Nirvana", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a81e12a0972e9680d6982180",
                category: "single", tracks: ["Nirvana (feat. L2B)"]
            },
            {
                titre: "Himalaya", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273aea282761b058319c8d7315c",
                category: "single", tracks: ["Himalaya (feat. Doria)"]
            },
            {
                titre: "En mode", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a260e71730d99e7dd918c2e0",
                category: "single", tracks: ["En mode (feat. Vibzz)"]
            },
            {
                titre: "Sale idée", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27323a0ee4f83cf07363c43c1fb",
                category: "single", tracks: ["Sale Idée (feat. Tagne)"]
            },
            {
                titre: "Pas Jalouse", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731b8ad6b3b3d950b7beef7c2a",
                category: "single", tracks: ["Pas Jalouse (feat. Bamby)"]
            },
            {
                titre: "G3N3RATION N3RF (feat. Kerchak)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27390c2ee22d8452740a501f196",
                category: "feat", tracks: ["G3N3RATION N3RF (feat. Kerchak)"]
            },
            {
                titre: "Derbouka", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d63c0856dd4f2b28ca65201c",
                category: "single", tracks: ["Derbouka (feat. Caballero & JeanJass, Stony Stone)"]
            },
            {
                titre: "FAKE x CAM", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ae9ad36237874fb70746bc86",
                category: "project", tracks: ["FAKE", "CAM"]
            },
            {
                titre: "MAP", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730ba697ac4113fec3a014fb14",
                category: "single", tracks: ["MAP (feat. Kwengface)"]
            },
            {
                titre: "Cocaïna", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737c3d340acf09bba430987e9e",
                category: "single", tracks: ["Cocaïna"]
            },
            {
                titre: "Jimi Hendrix", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27389735eb76514f4df7d88c6f2",
                category: "single", tracks: ["Jimi Hendrix (feat. LeoStayTrill)"]
            },
            {
                titre: "Play", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273af1d7e5716ac0abcf0809c69",
                category: "single", tracks: ["Play"]
            },
            {
                titre: "Sentiments", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273acf0fb0a47d7756db9fababd",
                category: "single", tracks: ["Sentiments"]
            },
            {
                titre: "Matata", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27339208aefc283966539cd1e7a",
                category: "single", tracks: ["Matata (feat. Vegedream, Kaaris)"]
            },
            {
                titre: "Bois-Colombes (feat. Jolagreen23, MITCH, Kabbsky, Buu & Ydasevic)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d5b6c886e594ebf4773aa45c",
                category: "single", tracks: ["Bois-Colombes (feat. Jolagreen23, MITCH, Kabbsky, Buu & Ydasevic)"]
            },
            {
                titre: "Stadium", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27395f0986a392246d16c47180a",
                category: "single", tracks: ["Stadium (feat. Le Règlement)"]
            },
            {
                titre: "Saison 2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735a5e7a76693dec2ea592798f",
                category: "project", tracks: ["Go", "Beugeu", "T\'aimerais (feat. Ziak)", "J\'vise", "Coupé (feat. Dinos)", "Junior", "2006 - Opps qui court", "BigKerch", "Mi-Temps (feat. RnBoi)", "Papel", "Cagoule (feat. HOUDI)", "Roule un autre", "Ferrero (feat. Gambi)", "Fame", "Saison 2", "Chargeur"]
            },
            {
                titre: "Mi-Temps (feat. RnBoi)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a602d44193ca7a842bf7515e",
                category: "single", tracks: ["Mi-Temps (feat. RnBoi)"]
            },
            {
                titre: "Ferrero (feat. Gambi)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736de6ec2e8e291ddfdc15d9a6",
                category: "single", tracks: ["Ferrero (feat. Gambi)"]
            },
            {
                titre: "Coupé (feat. Dinos)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273926d98cee8069eedc09725b8",
                category: "single", tracks: ["Coupé (feat. Dinos)"]
            },
            {
                titre: "2006 (Opps qui court)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733096033826e10adfba6c4115",
                category: "single", tracks: ["2006 - Opps qui court"]
            },
            {
                titre: "Roule un autre (feat. Puri) [Remix]", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735d6280fb6dc65113ed43828f",
                category: "single", tracks: ["Roule un autre (feat. Puri) - Remix"]
            },
            {
                titre: "Ice Ice", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dec8821b48cfb60309575b92",
                category: "single", tracks: ["Ice Ice (feat. Larry, LEVELSANTANA)"]
            },
            {
                titre: "T\'aimerais (feat. Ziak)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739c727fdf6b688e7a4e7efddd",
                category: "single", tracks: ["T\'aimerais (feat. Ziak)"]
            },
            {
                titre: "En attendant Saison 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732de67265e972497d883d0b65",
                category: "project", tracks: ["Albufeira", "Marrakech", "Kamala"]
            },
            {
                titre: "Jersey", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730a14c2bc770d77f5ae741c86",
                category: "single", tracks: ["Jersey (feat. TIITO)"]
            },
            {
                titre: "Zlatan", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27370ea4ca9406997d6d0ef7453",
                category: "single", tracks: ["Zlatan (feat. Keuchei, Mig)"]
            },
            {
                titre: "Roule un autre (A COLORS SHOW)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738a5cc0dc46cdd46e9ea3f1ff",
                category: "single", tracks: ["Roule un autre - A COLORS SHOW"]
            },
            {
                titre: "Minaj", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ecbe88b3c4e42e9e79943c93",
                category: "single", tracks: ["Minaj (feat. Mougli)"]
            },
            {
                titre: "Femmes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738a87b5347387da286464d603",
                category: "single", tracks: ["Femmes"]
            },
            {
                titre: "Glock 17", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273feb26116a95e0d0fb9f962cf",
                category: "single", tracks: ["Glock 17 (feat. Du Nord au Sud, RK)"]
            },
            {
                titre: "Salement", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c48237f2ef857c558cd325cd",
                category: "single", tracks: ["Salement (feat. Alonzo)"]
            },
            {
                titre: "Chez Moi", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ae75d495a528f2b07148b7e8",
                category: "single", tracks: ["Chez Moi (feat. Ibepds)"]
            },
            {
                titre: "7/7", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273104027fffb432337149b7ae6",
                category: "single", tracks: ["7/7 (feat. PLK)"]
            },
            {
                titre: "JFLM JMR", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27359293ecc3b734f0bbcd33ee5",
                category: "single", tracks: ["JFLM JMR"]
            },
            {
                titre: "Nouvelle ère", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735ea64504aabe09caf86efe3a",
                category: "single", tracks: ["Nouvelle ère (feat. Beendo Z)"]
            },
            {
                titre: "Double K", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ee8ff1f819d0d597a7997fbd",
                category: "single", tracks: ["Double K (feat. Kaaris)"]
            },
            {
                titre: "Vie de Bandit", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27340bf85c3870a8eb87457e916",
                category: "single", tracks: ["Vie de Bandit (feat. SLK)"]
            },
            {
                titre: "Match", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c1121719d51bc32ec64337e4",
                category: "single", tracks: ["Match (feat. Mister V)"]
            },
            {
                titre: "TN", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735fd9bf55ba15802d51794353",
                category: "single", tracks: ["TN (feat. MALTY 2BZ)"]
            },
            {
                titre: "Eclipse (feat. Kerchak)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273fd16a32173557337af1015d8",
                category: "feat", tracks: ["Eclipse (feat. Kerchak)"]
            },
            {
                titre: "Confiance", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cf6be51b8cd01b53dbe81730",
                category: "project", tracks: ["Flynt et Mungo", "DF2", "Génération Miracle (feat. Favé)", "Confiance", "Position", "Peur (feat. Ziak)", "Allo", "Snap", "Toc Toc", "Scène", "Calme", "Tarzan", "Percer (feat. Bandmanrill)", "Temps"]
            },
            {
                titre: "Percer (feat. Bandmanrill)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730b150c61296ebaa58454c80c",
                category: "single", tracks: ["Percer (feat. Bandmanrill)"]
            },
            {
                titre: "Génération Miracle (feat. Favé)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27348ff12f0370090d219aa7bbc",
                category: "single", tracks: ["Génération Miracle (feat. Favé)"]
            },
            {
                titre: "Métal", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736353d6f9bd0bf269ea2a1c6c",
                category: "single", tracks: ["Métal"]
            },
            {
                titre: "9", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735d841d9a0832defbe3e5208d",
                category: "single", tracks: ["9 (feat. Raplume)"]
            },
            {
                titre: "Next Up France - S1-E3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273057036d3810f271b039c3758",
                category: "single", tracks: ["Next Up France - S1-E3"]
            },
            {
                titre: "Peur (feat. Ziak)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731b6717903e4323a467e7f4fd",
                category: "single", tracks: ["Peur (feat. Ziak)"]
            },
            {
                titre: "SHOOTER", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bab9bbdae664675424697b57",
                category: "single", tracks: ["SHOOTER (feat. Carbozo)"]
            },
            {
                titre: "Knife", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dc5469095e0bb0277084b790",
                category: "single", tracks: ["Knife"]
            },
            {
                titre: "GTA #29", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739dba7c598250aa989a91d192",
                category: "single", tracks: ["GTA #29 (feat. Guette L\'ascension)"]
            },
            {
                titre: "HB Freestyle (Season 4)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c076d2b18c222408a6817c4b",
                category: "single", tracks: ["HB Freestyle (Season 4) (feat. Hardest Bars)"]
            },
            {
                titre: "Calme toi", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b4f73fb5c5ea299c7ebfbf60",
                category: "single", tracks: ["Calme toi"]
            },
            {
                titre: "Beuh R", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273246bbfc95add655ce8e9aaa6",
                category: "single", tracks: ["Beuh R"]
            },
            {
                titre: "Blue", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cc4e66af40292c9d92146909",
                category: "single", tracks: ["Blue"]
            },
            {
                titre: "McFlurry || 808CLUB", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735d6c7a9fe48fa841c83d531d",
                category: "single", tracks: ["McFlurry || 808CLUB (feat. Shaz, Alex Grox)"]
            },
            {
                titre: "Kerchak", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736403efbfb636ef4bc455363c",
                category: "single", tracks: ["Kerchak"]
            },
            {
                titre: "Tarzan", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f5769c7ef1817245dcbafb80",
                category: "single", tracks: ["Tarzan"]
            },
            {
                titre: "Jane", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273de2b6c9cde992f46b16b08c2",
                category: "single", tracks: ["Jane"]
            },
            {
                titre: "Tantor", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27388b041c8580809b9f96e79a9",
                category: "single", tracks: ["Tantor"]
            },
            {
                titre: "Sabor", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c8aa05e54004027add4712e0",
                category: "single", tracks: ["Sabor"]
            },
            {
                titre: "NH #2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273504cfc6a9449173a508f7397",
                category: "single", tracks: ["NH #2"]
            },
            {
                titre: "NH", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732650fea95c0606405ddc3274",
                category: "single", tracks: ["NH"]
            },
            {
                titre: "9b #2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27306a1cb49051369ee59df7f14",
                category: "single", tracks: ["9b #2"]
            },
            {
                titre: "Kala", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d35d6f0b105e30bcdd4bc034",
                category: "single", tracks: ["Kala"]
            },
            {
                titre: "Roi des gorilles", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273996fe98e519ac3c919d4653a",
                category: "single", tracks: ["Roi des gorilles"]
            },
        ]
    },
    {
        id: "timal",
        nom: "Timal",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/timal.webp",
        chiffres: "1.4M Abonnés",
        bio: "Trop chaud. Le kickeur agressif du 77.",
        bioLongue: "Timal s'est fait connaître avec sa série de freestyles 'Rapport'. Son style est caractérisé par une agressivité vocale unique et un débit rapide. Il raconte la rue avec une énergie brute qui ne laisse personne indifférent, enchaînant les certifications avec ses albums 'Trop Chaud' et 'Caliente'.",
        albums: [
            {
                titre: "Business Plan", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273437c06f23ed7640938b75e06",
                category: "single", tracks: ["Business Plan"]
            },
            {
                titre: "Mode Sport", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273259e0539ae734ad68b7cb4ba",
                category: "single", tracks: ["Mode Sport (feat. La Fouine)"]
            },
            {
                titre: "RS6", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737750b6632437e00bf17816fb",
                category: "single", tracks: ["RS6 (feat. Benab, Zkr)"]
            },
            {
                titre: "ULTIMATUM BOOST", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e5dc720226391f3b6ddc22c5",
                category: "project", tracks: ["Pétard neuf", "45", "Bourbier (feat. Naza)", "Quitter le jeu", "Tout doucement", "Océan de billets", "10 ans d’âge (feat. Leto, Gradur)", "Fuis-moi", "2x comme Jimmy", "Ultimatum", "Daytona (feat. SDM)", "P.I.B", "Melodia Del Strade", "Le Temps", "Il le fallait (feat. Soolking)", "Scientifiques", "Money on Bag (feat. NSG)", "Déterminé", "Tout Gâcher", "Staya", "Solide", "Rapport 7", "Bonita", "77420 (feat. Boumso, Badjer)", "Coup de vent", "Boussole", "J\'suis Bien", "Phare Éteint", "J\'envoie", "Bord de Mer", "Ça Va Aller (feat. Landy)", "Mini Cooper", "Benef", "Beluga", "Derrick Rose"]
            },
            {
                titre: "ULTIMATUM", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273228e8658cb186548979580d8",
                category: "project", tracks: ["Pétard neuf", "45", "Bourbier (feat. Naza)", "Quitter le jeu", "Tout doucement", "Océan de billets", "10 ans d’âge (feat. Leto, Gradur)", "Fuis-moi", "2x comme Jimmy", "Ultimatum", "Daytona (feat. SDM)", "P.I.B", "Melodia Del Strade", "Le Temps", "Il le fallait (feat. Soolking)", "Scientifiques", "Money on Bag (feat. NSG)", "Déterminé", "Tout Gâcher", "Staya", "Solide", "Rapport 7", "Bonita", "77420 (feat. Boumso, Badjer)", "Coup de vent", "Beluga"]
            },
            {
                titre: "Peaky Blinders (feat. Guy2Bezbar)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d28636d4c90358cfb2b41730",
                category: "single", tracks: ["Peaky Blinders (feat. Guy2Bezbar)"]
            },
            {
                titre: "Beluga", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27382cf0995b06da72e33b027d6",
                category: "single", tracks: ["Beluga"]
            },
            {
                titre: "Waze", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a8339bfc8882f1cab0e1631e",
                category: "single", tracks: ["Waze (feat. Mig)"]
            },
            {
                titre: "77420", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ec5c4a1e54c99444b114270e",
                category: "single", tracks: ["77420 (feat. Boumso, Badjer)"]
            },
            {
                titre: "Money on Bag", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27378b5493275836797d3825d3f",
                category: "single", tracks: ["Money on Bag (feat. NSG)"]
            },
            {
                titre: "Daytona", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273298270f88ec480295063258b",
                category: "single", tracks: ["Daytona (feat. SDM)"]
            },
            {
                titre: "Bourbier", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273eaa46515a7a14c071ca5c567",
                category: "single", tracks: ["Bourbier (feat. Naza)"]
            },
            {
                titre: "Pétard neuf", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27332d9dd426da47ed0a2ae7c1e",
                category: "single", tracks: ["Pétard neuf"]
            },
            {
                titre: "10 ans d\'âge", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d012a633d0880e843e1dfe81",
                category: "single", tracks: ["10 ans d’âge (feat. Leto, Gradur)"]
            },
            {
                titre: "Absent", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733b54221d9711817a82415035",
                category: "single", tracks: ["Absent"]
            },
            {
                titre: "★ Madre Mia", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27351e34c86dbad70dbc68b2bc6",
                category: "single", tracks: ["★ Madre Mia (feat. Emkal)"]
            },
            {
                titre: "CDA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27341a8ff8a38ca9516559ea452",
                category: "single", tracks: ["CDA (feat. M87)"]
            },
            {
                titre: "La 17", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736892b7f77f54b22f0904a5f5",
                category: "single", tracks: ["La 17"]
            },
            {
                titre: "DBP", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273901a8e2cb145d70f88f948e7",
                category: "single", tracks: ["DBP (feat. Mayo)"]
            },
            {
                titre: "Bandito", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733cfbcff884e20b57e83dc53b",
                category: "single", tracks: ["Bandito (feat. Sasso)"]
            },
            {
                titre: "Près du binks", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cc1710309bf666d079845472",
                category: "single", tracks: ["Près du binks (feat. 77 degrés)"]
            },
            {
                titre: "Darvaza", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eb509750eafc0318d76ef465",
                category: "project", tracks: ["RR Phantom", "Glock 9", "Paris", "Enzo", "Ounahi", "Piste brouillée"]
            },
            {
                titre: "RR Phantom", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d81e50456c8a72bcca077f04",
                category: "single", tracks: ["RR Phantom"]
            },
            {
                titre: "Sur écoute", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27381497dd3615c252ea6370987",
                category: "single", tracks: ["Sur écoute (feat. Zed)"]
            },
            {
                titre: "La 16", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27379f217628205a423e806eafa",
                category: "single", tracks: ["La 16"]
            },
            {
                titre: "Freestyle T.R.O.P", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732f4b3f028bdc66bcff96dcaf",
                category: "single", tracks: ["Freestyle T.R.O.P"]
            },
            {
                titre: "760", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273da18d6550db22b3dafbbbb9d",
                category: "single", tracks: ["760"]
            },
            {
                titre: "Roly", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273023a52fdfa68a5056c2c333c",
                category: "single", tracks: ["Roly"]
            },
            {
                titre: "RS5", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cc1258c5b347d5287c82ab4e",
                category: "single", tracks: ["RS5 (feat. Benab)"]
            },
            {
                titre: "Safari", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27367a1a94e4d95474ed8792230",
                category: "single", tracks: ["Safari (feat. Zkr)"]
            },
            {
                titre: "Chacal", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27344753f0616a6f434e43020b3",
                category: "single", tracks: ["Chacal (feat. REDVOLUTION)"]
            },
            {
                titre: "Caméléon", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d2ee15c24f314709ca86a765",
                category: "single", tracks: ["Caméléon (feat. Booba)"]
            },
            {
                titre: "Arès", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739338ef1b2cf557aea581ac8a",
                category: "project", tracks: ["One Shot", "Fuego", "Jeunes et ambitieux", "Sales idées", "Petit bateau", "La beu beu (feat. Jul)", "Interlude", "Le son de ma rue", "Notif", "Nos vies (feat. Morad)", "YSL", "Roulette russe", "Bruce Wayne (feat. Heuss L\'enfoiré)", "La 14", "La popo", "Navré", "Filtré (feat. Gazo)", "La 15 (GSXR)", "Caméléon (feat. Booba)"]
            },
            {
                titre: "Frenches", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27319102c168712000479b21d31",
                category: "single", tracks: ["Frenches (feat. Digga D, Art de rue)"]
            },
            {
                titre: "Laisse tomber", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733db48d43cd8e4a8b72011bad",
                category: "single", tracks: ["Laisse tomber (feat. ISK)"]
            },
            {
                titre: "La 15 (GSXR)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273543d6aaaf8a7087c17a87a43",
                category: "single", tracks: ["La 15 (GSXR)"]
            },
            {
                titre: "Fast Life", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27328a187e3f989c7979fb67ddd",
                category: "single", tracks: ["Fast Life (feat. Roshi)"]
            },
            {
                titre: "T\'abuses", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732b490f6766c67fbbb294847c",
                category: "single", tracks: ["T\'abuses (feat. UZI, ISK)"]
            },
            {
                titre: "Jolie poupée", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730fa294368cf085eca71691b2",
                category: "single", tracks: ["Jolie poupée (feat. AM La Scampia)"]
            },
            {
                titre: "Filtré", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27336249b0306b3f92f8994d1e2",
                category: "single", tracks: ["Filtré (feat. Gazo)"]
            },
            {
                titre: "Freestyle Tarmac", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d834399499e4d4c93a892e98",
                category: "single", tracks: ["Freestyle Tarmac"]
            },
            {
                titre: "À la rue marié", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27326d1d74db6299279c40d9f4f",
                category: "single", tracks: ["À la rue marié (feat. Rim\'K, Solda, PLK, Jul, Houari, L\'Algérino, Hornet La Frappe, Le classico organisé)"]
            },
            {
                titre: "Ouuw", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273632a572e3d4ca127b86376b0",
                category: "single", tracks: ["Ouuw (feat. Tiitof)"]
            },
            {
                titre: "One Shot", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fb0565cc3a1561879b32ecff",
                category: "single", tracks: ["One Shot"]
            },
            {
                titre: "Fuego", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730083c0286a29ce371296295d",
                category: "single", tracks: ["Fuego"]
            },
            {
                titre: "Full Option (Extrait de la BO de \"Or Noir\")", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273dfe046975123e913bd960ec5",
                category: "project", tracks: ["Full Option - Extrait de la BO de \"Or Noir\" (feat. Or Noir)"]
            },
            {
                titre: "La 14", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27324a56dfc5b4fed2b25f92d7f",
                category: "single", tracks: ["La 14"]
            },
            {
                titre: "RS4", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730cc9bf6f09e8ffcc079be0b8",
                category: "single", tracks: ["RS4 (feat. Benab, Kofs)"]
            },
            {
                titre: "Baltimore", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b8b22aede5d6e2969b0a928e",
                category: "single", tracks: ["Baltimore (feat. Dj Quick, 100 Blaze)"]
            },
            {
                titre: "Bresom (Extrait du projet Art de Rue)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730d8627b02ba29cbd77f1fb85",
                category: "single", tracks: ["Bresom"]
            },
            {
                titre: "Whine It", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273aecd82b30d8489968bee35ab",
                category: "single", tracks: ["Whine It (feat. Jahyanai)"]
            },
            {
                titre: "Danger", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27396dbd54420ff9f258cc5ca71",
                category: "single", tracks: ["Danger (feat. Boumso)"]
            },
            {
                titre: "Tir du Brazil (Extrait du projet Carbozo Vol. 1)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2734982dc08e4dda551fe051a52",
                category: "single", tracks: ["Tir du Brazil - Extrait du projet Carbozo Vol. 1"]
            },
            {
                titre: "Trop Caliente", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273fb37ed4404e80c459f110e57",
                category: "project", tracks: ["Gang", "Comme Pablo", "Refait", "Muerte (feat. Marwa Loud)", "Si vite", "Tous les jours", "Semaine", "C\'est la rue (feat. SDM)", "Bouteille", "Amis ou ennemis", "R.A.S", "Ailleurs remix (feat. Oliver Ryon)", "Caliente", "Disponible", "Ailleurs (feat. Maes)", "Le temps passe", "Routine", "Promis (feat. PLK)", "Jour de paye", "Copilote", "Souvenirs", "Vida", "TBA", "La maille", "La 13", "Week-end (feat. Leto)", "Cavaler", "Tu me connais", "Sale", "Smile", "T\'es où ?", "Charbonner", "Allo", "Banal"]
            },
            {
                titre: "Gang", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731a88de50ff07f9d7cfacdd70",
                category: "single", tracks: ["Gang"]
            },
            {
                titre: "Tard la Night (feat. Timal)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737be79282ae2b063a8c22ee76",
                category: "feat", tracks: ["Tard la Night (feat. Timal)"]
            },
            {
                titre: "RS3", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f426617230b3b881cba1c4eb",
                category: "single", tracks: ["RS3 (feat. Benab)"]
            },
            {
                titre: "Caliente (Bonus Version)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27364e697e333aeaf53eaccbade",
                category: "project", tracks: ["Caliente", "Disponible", "Ailleurs (feat. Maes)", "Le temps passe", "Routine", "Promis (feat. PLK)", "Jour de paye", "Copilote", "Souvenirs", "Vida", "TBA", "La maille", "La 13", "Week-end (feat. Leto)", "Cavaler", "Tu me connais", "Sale", "Smile", "T\'es où ?", "Charbonner", "Allo", "Banal"]
            },
            {
                titre: "Week-end (feat. Leto)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273375c7faf3738f6e7963f2a7b",
                category: "single", tracks: ["Week-end (feat. Leto)"]
            },
            {
                titre: "Routine", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735e5045f0140cdad8ccb2c577",
                category: "single", tracks: ["Routine"]
            },
            {
                titre: "Nuit", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273544043eb274bf741638f1d39",
                category: "single", tracks: ["Nuit (feat. Boumso)"]
            },
            {
                titre: "La 12", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273821c2cd64fe5f02944a23248",
                category: "single", tracks: ["La 12"]
            },
            {
                titre: "Cavaler", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273657c23f6320efcba6977e2ba",
                category: "single", tracks: ["Cavaler"]
            },
            {
                titre: "La 11", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a9aac5ada8e48cafe861dc0b",
                category: "single", tracks: ["La 11"]
            },
            {
                titre: "Story", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2737d982af73cabbc8a72eca4dc",
                category: "single", tracks: ["Story"]
            },
            {
                titre: "La 10", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e2f6e7985684297e7b936c14",
                category: "single", tracks: ["La 10"]
            },
            {
                titre: "Flics & stups", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2733213e52dddfaa32079d9ff7f",
                category: "single", tracks: ["Flics & stups"]
            },
            {
                titre: "Trop chaud", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273581469f9cefbaccd650888b5",
                category: "project", tracks: ["Timal", "Dans la ville", "Arrivant", "Lyca", "Rien de nouveau", "Du rire aux larmes", "Maria", "Magma - Interlude", "La 9 - Ruinart", "Cartel (feat. Meryl)", "Pirate", "La zone", "Je sais", "Suarez", "Trop chaud"]
            },
            {
                titre: "Dans la ville", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27300b0199959f9cf149eabba40",
                category: "single", tracks: ["Dans la ville"]
            },
            {
                titre: "Arrivant", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273773b4d6f79b73ce9fc73d9d8",
                category: "single", tracks: ["Arrivant"]
            },
            {
                titre: "La 8 (Chivas)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273a3c045a81979012c73600ee1",
                category: "single", tracks: ["La 8 - Chivas"]
            },
            {
                titre: "La 7 (Jack Dani)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273bfe3853431b2932d1effabfb",
                category: "single", tracks: ["La 7 - Jack Dani"]
            },
            {
                titre: "6ème rapport", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2734b501b73b167718912cedda8",
                category: "single", tracks: ["6ème rapport"]
            },
            {
                titre: "La 6", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737bf20932e6fcc2fb2c641171",
                category: "single", tracks: ["La 6"]
            },
            {
                titre: "Vatos", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2731905b8d418d9848430a35c0f",
                category: "single", tracks: ["Vatos"]
            },
            {
                titre: "La 5", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2732ede2f731dcb7bbdb13f8cc5",
                category: "single", tracks: ["La 5"]
            },
            {
                titre: "5ème rapport", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737a1c9fe227f85d09dfb091e1",
                category: "single", tracks: ["5ème rapport"]
            },
            {
                titre: "La 4 (Freestyle)", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273549a3f5d869f0b97e90ba532",
                category: "single", tracks: ["La 4 - Freestyle"]
            },
            {
                titre: "La 3 (Freestyle)", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273307a0e394295e1d63509181f",
                category: "single", tracks: ["La 3 - Freestyle"]
            },
            {
                titre: "La 2 (Freestyle)", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b43d6ae25c653d9a42a3b229",
                category: "single", tracks: ["La 2 - Freestyle"]
            },
            {
                titre: "Omar", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2731457eabeb104f0bf7b6aa3b3",
                category: "single", tracks: ["Omar"]
            },
            {
                titre: "La 1", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273d3d5181718e7e460e0c0ccbb",
                category: "single", tracks: ["La 1"]
            },
            {
                titre: "4ème rapport", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273ffe47eeaefb8894073409e34",
                category: "single", tracks: ["4ème rapport"]
            },
            {
                titre: "3ème rapport (Ils finiront dans les ravins)", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273ef1ae2f52414abdd71cec3ee",
                category: "single", tracks: ["3ème rapport - Ils finiront dans les ravins"]
            },
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
        bio: "Attitude rockstar et passion motos. Le prodige d'Évry.",
        bioLongue: "Zola est l'une des têtes d'affiche de la nouvelle génération. Passionné de bécanes et de mode, il a su créer une imagerie forte autour de sa musique. Son flow nonchalant mais précis, sur des productions Trap soignées, lui a permis de conquérir un large public avec des albums comme 'Cicatrices' et 'Survie'.",
        albums: [
            {
                titre: "Süle", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27368540f40c5b7f4458c3e1515",
                category: "single", tracks: ["Süle (feat. Zed, Kore)"]
            },
            {
                titre: "Frères Ennemis", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ad0f1a9a5275afde85cd1ae2",
                category: "project", tracks: ["Aller sans retour (feat. Koba LaD)", "Amiri jeans (feat. Koba LaD)", "Temps en temps (feat. Koba LaD)", "C\'est non (feat. Koba LaD)", "Parano (feat. Koba LaD)", "Synthèse (feat. Koba LaD)", "Mexicana", "Un billet (feat. Koba LaD)", "Roulette russe (feat. Koba LaD)", "Dans la nuit (feat. Koba LaD)", "Frères ennemis (feat. Koba LaD)", "Café", "Tic-Tac (feat. Koba LaD)", "La Main dans le Sac", "Toujours là (feat. Koba LaD)"]
            },
            {
                titre: "Temps en temps", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273df9f305f6746911b00c2f98d",
                category: "single", tracks: ["Temps en temps (feat. Koba LaD)"]
            },
            {
                titre: "Aller sans retour", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ab270c9bda505bb1ece31f21",
                category: "single", tracks: ["Aller sans retour (feat. Koba LaD)"]
            },
            {
                titre: "La guitare suit la mélo", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b5255a8504ad35a9e13937e7",
                category: "single", tracks: ["La guitare suit la mélo (feat. Dadju)"]
            },
            {
                titre: "DIAMANT DU BLED", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27372397921165a97ee43bba844",
                category: "project", tracks: ["NOCHEY", "AMBER", "COEUR DE ICE (feat. Damso & PRINC€)", "L\'ARMOIRE", "FROSTIES", "ZAZA (feat. PRINC€)", "BRÛLURES INDIENNES", "TOUTE LA JOURNÉE (feat. Tiakola)", "CARTIER PANTHÈRE (feat. PRINC€)", "ENVIE7VIE", "GORGÉE POUR LES MORTS (feat. PRINC€)", "ELECTRO", "MAKE UP (feat. PRINC€)", "CÔTÉ HUBLOT", "LA LUMIÈRE", "FINISH HIM (feat. Ateyaba)", "CAUCHEMAR - FREESTYLE MIEUX REVENIR", "GAS (feat. PRINC€) - FREESTYLE SKYROCK", "NIKE AIR (feat. PRINC€) - FREESTYLE SKYROCK", "ADERALL - FREESTYLE SKYROCK", "BALLAS", "URGENCE", "SKU", "SLIME", "DÈS LE MATIN (feat. PRINC€)"]
            },
            {
                titre: "FINISH HIM (feat. Ateyaba)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f2343460fd2c5ba1f7c2af9f",
                category: "single", tracks: ["FINISH HIM (feat. Ateyaba)"]
            },
            {
                titre: "COEUR DE ICE (feat. Damso & PRINC€)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273bc0721f63de4dd6c3b398107",
                category: "single", tracks: ["COEUR DE ICE (feat. Damso & PRINC€)"]
            },
            {
                titre: "TOUTE LA JOURNÉE (feat. Tiakola)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739b97a03ae2198cbad76d4053",
                category: "single", tracks: ["TOUTE LA JOURNÉE (feat. Tiakola)"]
            },
            {
                titre: "CARTIER PANTHÈRE (feat. PRINC€)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27391a2a8d2268e2bafd7ed7a4d",
                category: "single", tracks: ["CARTIER PANTHÈRE (feat. PRINC€)"]
            },
            {
                titre: "AMBER", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27399d1f8c72f0799dff1ef8b7e",
                category: "single", tracks: ["AMBER"]
            },
            {
                titre: "Gants", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f2e643a7155309d992045ce8",
                category: "single", tracks: ["Gants (feat. 91 All Stars)"]
            },
            {
                titre: "PAPEL", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27380a2a10f8487262423c29774",
                category: "single", tracks: ["PAPEL"]
            },
            {
                titre: "Survie", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27362f07175768f95e22709892e",
                category: "project", tracks: ["Le sauveur", "Pistou", "Papillon", "Ma jolie (feat. Leto)", "TLMA", "Wow", "Madame", "Pollos Hermanos", "9 1 1 3 (feat. SCH)", "Bro Bro", "Mula", "Money Train", "Tu connais l\'gang", "Cache Cash", "Les puristes", "Sanchez", "Vista", "Bad Bi", "Mauvais choix"]
            },
            {
                titre: "Booska\'Sten", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736f9adc14c13a6d28854ddd17",
                category: "single", tracks: ["Booska\'Sten"]
            },
            {
                titre: "Wow", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737780d265c7e3bbd105682e5a",
                category: "single", tracks: ["Wow"]
            },
            {
                titre: "Bro Bro", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730a0b181859daa4a39eb85555",
                category: "single", tracks: ["Bro Bro"]
            },
            {
                titre: "Cicatrices", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a368216ac157a8629178b500",
                category: "project", tracks: ["Baby Boy", "Fuckboi", "Mojo", "Ouais ouais", "Jamais", "Club", "Papers (feat. Ninho)", "Extasy", "Kinshasa", "Astroboy", "Zolabeille", "7.65", "Alloicizolaski4 (feat. No Name & Key Largo)", "L1 L2", "Cicatrices", "B.A.L"]
            },
            {
                titre: "Zolabeille", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2739d32b00deeec1e687141db28",
                category: "single", tracks: ["Zolabeille"]
            },
            {
                titre: "Booska Rocket", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2737ba0aa3d60f1e1daa082d26d",
                category: "single", tracks: ["Booska Rocket"]
            },
            {
                titre: "Spiderman (Freestyle OKLM)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2739ef43cb86ee76a06f107c215",
                category: "single", tracks: ["Spiderman (Freestyle OKLM)"]
            },
            {
                titre: "Ouais ouais", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736b1ea569d146addf361b6c81",
                category: "single", tracks: ["Ouais ouais"]
            },
            {
                titre: "Scarface", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273201f0fa236d6481936dc1919",
                category: "single", tracks: ["Scarface"]
            },
            {
                titre: "Bernard Tapie", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273cf4001b712901ae914436d9b",
                category: "single", tracks: ["Bernard Tapie"]
            },
            {
                titre: "California Girl (Extrait de la BOF de \"Taxi 5\")", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27391732b205c32cc1df08593b1",
                category: "single", tracks: ["California Girl"]
            },
            {
                titre: "Extasy", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273fd50d70d333ca10b01fc1efe",
                category: "single", tracks: ["Extasy"]
            },
            {
                titre: "Honey", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273cc0290a4bce8105258938777",
                category: "single", tracks: ["Honey"]
            },
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
        bio: "Le chef de file de la New Wave. Un style unique et précurseur.",
        bioLongue: "La Fève est considéré comme le fer de lance de la 'New Wave' du rap français. Avec sa mixtape 'ERRR', il a imposé un style nouveau, fait de flows décontractés, de productions futuristes et d'une esthétique soignée. Il inspire toute une nouvelle génération d'artistes et de beatmakers.",
        albums: [
            {
                titre: "BIG PLANE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27310c0df8d940d38f97c382d13",
                category: "single", tracks: ["BIG PLANE (feat. Cinco)"]
            },
            {
                titre: "Yes 2 fois", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cb1eea1e1392493d20f40eb6",
                category: "feat", tracks: ["Yes 2 fois (feat. Roshi)"]
            },
            {
                titre: "Monogramme", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27357106e2be257e980ab1c8f46",
                category: "feat", tracks: ["Monogramme (feat. Steban)"]
            },
            {
                titre: "#BG (feat. La Fève)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273692e5054e92be5deb45b151a",
                category: "feat", tracks: ["#BG (feat. La Fève)"]
            },
            {
                titre: "Prada", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739cfd819ebab35c4a5658d2fd",
                category: "single", tracks: ["Prada (feat. Beendo Z)"]
            },
            {
                titre: "0.9", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731e2aa7d0df204f1e1673d139",
                category: "single", tracks: ["0.9 (feat. JRK 19)"]
            },
            {
                titre: "T’EN DIS QUOI?", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730224b92d22f4989ee7a6543c",
                category: "single", tracks: ["T’EN DIS QUOI? (feat. Tarik Azzouz)"]
            },
            {
                titre: "TROPHÉE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730780078cb3082a23f876d0f8",
                category: "single", tracks: ["TROPHÉE (feat. Tarik Azzouz)"]
            },
            {
                titre: "BIG BODY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731bf1e58f6d611bc654c23de7",
                category: "single", tracks: ["BIG BODY (feat. Tarik Azzouz, Hamza)"]
            },
            {
                titre: "T\'es bête ou quoi", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735af20914daee7ba5b1e83fa7",
                category: "single", tracks: ["T\'es bête ou quoi (feat. La Fouine)"]
            },
            {
                titre: "Re Up", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739be4c6a8fbb431f2ebe9dbc2",
                category: "single", tracks: ["Re Up (feat. Lyele, ManMan Savage)"]
            },
            {
                titre: "Pas Ready", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b20e04867c1504796c918f58",
                category: "single", tracks: ["Pas Ready (feat. Lyele, Keeqaid)"]
            },
            {
                titre: "Ailé/Ma Ville", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273eef48d03d4361e5566e9e4ae",
                category: "single", tracks: ["Ailé/Ma Ville (feat. Lyele)"]
            },
            {
                titre: "Laid Back", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e74df56a84f781845a28d782",
                category: "single", tracks: ["Laid Back (feat. Lyele)"]
            },
            {
                titre: "Eolienne", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273842bc5acb747e90f937e3b8e",
                category: "single", tracks: ["Eolienne (feat. La Fouine)"]
            },
            {
                titre: "BIGLAF", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273344199cce668c387b1d59aed",
                category: "project", tracks: ["BIGLAF", "ETC", "PASSPORT", "DANS MA TÊTE", "CLAIREMENT", "TARIK INTERLUDE", "SANS PLUG", "PATIN", "BALENCIAGA", "RIEN D\'ORIGINAL", "G-CODE", "25", "DISQUE D\'OR"]
            },
            {
                titre: "AVERTISSEMENT DE BAVARDAGE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27341af6e7f27315820614610ca",
                category: "feat", tracks: ["AVERTISSEMENT DE BAVARDAGE (feat. Kalash Criminel)"]
            },
            {
                titre: "Sexyy Red (feat. La Fève)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27354a90b8ff7e39c01b212cfa2",
                category: "feat", tracks: ["Sexyy Red (feat. La Fève)"]
            },
            {
                titre: "24", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a33d29964a9a8d7119bd73b6",
                category: "project", tracks: ["ZAY INTRO", "7W", "ZAZA PART. 2", "RIP KEED", "TYPE SHIT (feat. Yung L.A.)", "24", "NOSTALGIE INTERLUDE", "MA CHIENNE DE TRAPLIFE", "HOMESTUDIO", "QUI ? (feat. Knucks)", "SUITE", "LOYAL", "500 (feat. Tiakola)", "NAVRÉ", "OUVRE LA PORTE!", "RIP DOLPH (feat. Zequin)", "DJ", "OUTRO", "SHAWTY - BONUS", "SAMESHIT - BONUS"]
            },
            {
                titre: "TYPE SHIT", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738b4414565d49584ce347e714",
                category: "single", tracks: ["TYPE SHIT (feat. Yung L.A.)"]
            },
            {
                titre: "RIP DOLPH", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ff07ce8318a201c71c8727b",
                category: "single", tracks: ["RIP DOLPH (feat. Zequin)"]
            },
            {
                titre: "QUI ?", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273aa9008ec815ec30679a84c48",
                category: "single", tracks: ["QUI ? (feat. Knucks)"]
            },
            {
                titre: "500", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736541a91bb84b3ad6ee536070",
                category: "single", tracks: ["500 (feat. Tiakola)"]
            },
            {
                titre: "LOYAL", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273722e584dd4a489552391afb4",
                category: "single", tracks: ["LOYAL"]
            },
            {
                titre: "ERRR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730574e330a70e8d2426bcdaf7",
                category: "project", tracks: ["BELEK", "OTW", "L\'APPEL", "CASTRO", "NO HOOK", "SAOULÉ", "CRENSHAW", "RAT INTERLUDE", "ZAZA", "MAUVAIS PAYEUR", "VOIR AILLEURS (feat. Zamdane)", "BOXE INTERLUDE", "LONERRR", "VOITURE SPORTIVE", "ZOMBIE", "VVS (feat. S-Téban)", "KANYE WEST", "LYELE OUTRO"]
            },
            {
                titre: "MAUVAIS PAYEUR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273188445c562f0c4834eeb4d11",
                category: "single", tracks: ["MAUVAIS PAYEUR"]
            },
            {
                titre: "KOLAF", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736d59695e16cdf5e16d423e63",
                category: "project", tracks: ["DIEZ (feat. Kosei)", "SNITCH (feat. Kosei)", "DSMJ (feat. Kosei)", "BELLE SOMME (feat. Kosei)", "JEUNE INTERLUDE (feat. Kosei)", "ALCHIMIE (feat. Kosei)", "VILAIN (feat. Kosei, Khali)", "LA FOUDRE (feat. Kosei)", "LA BRUME (feat. Kosei)"]
            },
            {
                titre: "LADY D", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27317e9c2ed295cccb1aae6e623",
                category: "single", tracks: ["LADY D"]
            },
            {
                titre: "L\'AFFAMÉ", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ece7e0cb6a8803fde0d4a6ca",
                category: "single", tracks: ["L\'AFFAMÉ"]
            },
            {
                titre: "300E LA PLAQUETTE", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273acbecbdda54679a76eabcbfc",
                category: "single", tracks: ["300E LA PLAQUETTE"]
            },
        ]
    },
    {
        id: "alphawann",
        nom: "Alpha Wann",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/alpha_wann.webp",
        chiffres: "506k Abonnés",
        bio: "Le Don. La référence technique et le rappeur préféré de tes rappeurs.",
        bioLongue: "Alpha Wann, membre de l'Entourage et fondateur de Don Dada, est salué unanimement pour sa technique d'écriture chirurgicale. Ses rimes complexes, ses placements rythmiques et son exigence artistique en font un rappeur à part. Son album 'UMLA' est considéré comme un classique moderne du rap français.",
        albums: [
            {
                titre: "TROIS SOLEILS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273369a01fa5e737d4e91def636",
                category: "single", tracks: ["TROIS SOLEILS (feat. Huntrill, Veust)"]
            },
            {
                titre: "SOLO AU RESTAURANT PT.2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733b6b83b56590334d8a2618e9",
                category: "single", tracks: ["SOLO AU RESTAURANT PT.2 (feat. Hologram Lo\', Jungle Jack)"]
            },
            {
                titre: "INTÉRIEUR CUIR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cabdd11719ef7b4472c11c5c",
                category: "single", tracks: ["INTÉRIEUR CUIR (feat. Infinit\')"]
            },
            {
                titre: "ISUZU", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730bbf502857029a0e4b0be018",
                category: "single", tracks: ["ISUZU (feat. TH)"]
            },
            {
                titre: "Bolo Yeung", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27301d5d72a067dd84d28e2f297",
                category: "single", tracks: ["Bolo Yeung (feat. Osirus Jack)"]
            },
            {
                titre: "Trap House", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ea1ed609745da347b28cc537",
                category: "single", tracks: ["Trap House (feat. Rim\'K)"]
            },
            {
                titre: "Mc Gregor", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273afe2c5d2985f6fe63a197acc",
                category: "single", tracks: ["Mc Gregor (feat. Infinit\', Rim\'K)"]
            },
            {
                titre: "CDG", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273910e3ab70fb116bb5f24f0c9",
                category: "single", tracks: ["CDG (feat. Richie Beats)"]
            },
            {
                titre: "tu sais", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273431fb1009c0ba135334550e7",
                category: "single", tracks: ["tu sais (feat. Krisy)"]
            },
            {
                titre: "50 euros (feat. Alpha Wann)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ab0f36ba0f60df14b6853b0",
                category: "feat", tracks: ["50 euros (feat. Alpha Wann)"]
            },
            {
                titre: "Ingé son", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730f9415df2b1fe70c4aea8258",
                category: "single", tracks: ["Ingé son (feat. Kekra, La Fève)"]
            },
            {
                titre: "Formule 1 (feat. Alpha Wann)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733306098d2e1a72f03a329fef",
                category: "feat", tracks: ["Formule 1 (feat. Alpha Wann)"]
            },
            {
                titre: "CAC 40", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27391b4c496f1b6081d048ac9d2",
                category: "single", tracks: ["CAC 40 (feat. Saboteur, Ratu$, Veust)"]
            },
            {
                titre: "DonZoo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733b850c224e79fa2e57250e0a",
                category: "single", tracks: ["DonZoo (feat. S-Crew)"]
            },
            {
                titre: "99 en peuf", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736be75c0f2e2b03d9295ca55c",
                category: "single", tracks: ["99 en peuf (feat. Kyo Itachi)"]
            },
            {
                titre: "Rotation (feat. Alpha Wann)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b3b62bce687d3ab1a6def049",
                category: "feat", tracks: ["Rotation (feat. Alpha Wann)"]
            },
            {
                titre: "Double Dose", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731445e902676768d248f0ab59",
                category: "single", tracks: ["Double Dose (feat. KR Malsain)"]
            },
            {
                titre: "Phoenix", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273391dcae82637191283693eab",
                category: "single", tracks: ["Phoenix (feat. Norsacce Berlusconi)"]
            },
            {
                titre: "Panorama", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27309f6fe677227f105354582e4",
                category: "single", tracks: ["Panorama (feat. Jazzy Bazz)"]
            },
            {
                titre: "20.000 (feat. Alpha Wann)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a932405f58c7d79dc263e578",
                category: "feat", tracks: ["20.000 (feat. Alpha Wann)"]
            },
            {
                titre: "Devil May Cry", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27398a688317c631b6623cb879c",
                category: "single", tracks: ["Devil May Cry (feat. Rowjay)"]
            },
            {
                titre: "don dada mixtape vol 1", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a49c00c7843b0232207f92a3",
                category: "project", tracks: ["mitsubishi", "philly flingo", "soldat tue soldat (feat. Kaaris, Infinit\')", "ny à fond (feat. Freeze corleone)", "san andreas (feat. Lesram, Nekfeu)", "trapchat (feat. Veust)", "velux (feat. Ratu$)", "fahrenheit 451", "apdl (feat. K.S.A)", "super swishstyle 2 (feat. K.S.A)", "aaa (feat. Nekfeu)", "dirty dancing (feat. Deen Burbigo, Infinit\')", "pistons vs pacers (feat. Kalash Criminel)", "malevil (feat. Nekfeu)", "carrelage italien", "3095 pt2 (feat. 3010, Nekfeu)", "la lune attire la mer"]
            },
            {
                titre: "trapchat", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732c189ae9b837c130080d2005",
                category: "single", tracks: ["trapchat (feat. Veust)"]
            },
            {
                titre: "soldat tue soldat", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739b17f5ed39f92e7af41fbcc1",
                category: "single", tracks: ["soldat tue soldat (feat. Kaaris, Infinit\')"]
            },
            {
                titre: "pistons vs pacers", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2738ef99317f754e37f2b9494ee",
                category: "single", tracks: ["pistons vs pacers (feat. Kalash Criminel)"]
            },
            {
                titre: "ny à fond", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273474c759ad5243bdb9ca6da2c",
                category: "single", tracks: ["ny à fond (feat. Freeze corleone)"]
            },
            {
                titre: "dirty dancing", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f6adf2e47bec15dead08a702",
                category: "single", tracks: ["dirty dancing (feat. Deen Burbigo, Infinit\')"]
            },
            {
                titre: "aaa", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732508a19a01f72f954d578e1e",
                category: "single", tracks: ["aaa (feat. Nekfeu)"]
            },
            {
                titre: "3095 pt2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731842b52996d6423f2dcfcc26",
                category: "single", tracks: ["3095 pt2 (feat. 3010, Nekfeu)"]
            },
            {
                titre: "IMMUNITÉ DIPLOMATIQUE", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cec3625ea5440c95b6c064f1",
                category: "single", tracks: ["IMMUNITÉ DIPLOMATIQUE (feat. Deen Burbigo)"]
            },
            {
                titre: "T\'as capté", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27300cf9fec0c337633d2995342",
                category: "single", tracks: ["T\'as capté (feat. S.Pri Noir, Sneazzy)"]
            },
            {
                titre: "Pistolet Rose 2 - A COLORS SHOW", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2735e28a8a218c3fa99dfa67d85",
                category: "single", tracks: ["Pistolet Rose 2 - A COLORS SHOW"]
            },
            {
                titre: "PPP", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273b6f8e3e6958f293f0fa57b97",
                category: "project", tracks: ["PISTOLET ROSE", "PISTOLET ROSE 2", "PLAYOFFS"]
            },
            {
                titre: "UNE MAIN LAVE L\'AUTRE", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273842b2c6c258fbaa254ff3b2c",
                category: "project", tracks: ["LE PIÈGE", "STARSKY & HUTCH", "STUPÉFIANT ET NOIR", "FLAMME OLYMPIQUE", "LE TOUR (feat. Infinit\')", "CASCADE - Remix", "PARACHUTE CHANEL (feat. Sneazzy)", "LANGAGE CRYPTÉ", "POUR CELLES", "OLIVE & TOM", "1500 (feat. OG L\'enf)", "ÇA VA ENSEMBLE", "CONTREX", "LA LUMIÈRE DANS LE NOIR (feat. Doums)", "FUGEES (feat. Diabi)", "UNE MAIN LAVE L\'AUTRE", "MACRO"]
            },
            {
                titre: "ÇA VA ENSEMBLE", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2731e6a569d4b92d1d746a87ce4",
                category: "single", tracks: ["ÇA VA ENSEMBLE"]
            },
            {
                titre: "STUPÉFIANT ET NOIR", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273052078f1a7e392b1d9d97738",
                category: "single", tracks: ["STUPÉFIANT ET NOIR"]
            },
            {
                titre: "Alph Lauren 3", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e08371d7196b3a7919af61f9",
                category: "project", tracks: ["Paire de Prada", "R5 et Murcielago", "Courchevel (feat. K.S.A)", "Louvre", "Saint-Domingue", "Kim K (feat. Doums)", "Turban", "Shanghai"]
            },
            {
                titre: "Screwed Lauren 2 (C&S Ocho Remix)", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2737194f3b9886a1d2956ce2ab3",
                category: "project", tracks: ["Protocole - C&S Ocho Remix (feat. Ocho)", "1,2,3 - C&S Ocho Remix (feat. Ocho)", "Sous marin - C&S Ocho Remix (feat. Ocho)", "À deux pas - C&S Ocho Remix (feat. Nekfeu, Ocho)", "Barcelone - C&S Ocho Remix (feat. Ocho)", "Lunettes noires - C&S Ocho Remix (feat. S.Pri Noir, Ocho)", "Vortex - C&S Ocho Remix (feat. Ocho)", "Alph Lauren - C&S Ocho Remix (feat. Ocho)"]
            },
            {
                titre: "National Syli", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273b3323d808ed084dc16b03d23",
                category: "single", tracks: ["National Syli"]
            },
            {
                titre: "Alph Lauren 2", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273757c47be7338c71f6c8b7cc7",
                category: "project", tracks: ["Protocole", "1,2,3", "Sous marin", "À deux pas (feat. Nekfeu)", "Barcelone", "Lunettes noires (feat. S.Pri Noir)", "Vortex", "Alph Lauren"]
            },
            {
                titre: "1,2,3", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273059bd6cd804afc386b62bddb",
                category: "single", tracks: ["1,2,3"]
            },
            {
                titre: "Alph Lauren", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273048a9023975d0995f0f87910",
                category: "project", tracks: ["Flingtro", "Double P Majuscule", "L\'histoire d\'un type bien", "Hydroponie", "Quand on chausse les crampons (feat. Monsieur Nov)", "Steven Seagal", "Bustour", "Parle moi de benef\' (feat. Infinit\')"]
            },
        ]
    },
    {
        id: "laylow",
        nom: "Laylow",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/laylow.webp",
        chiffres: "876k Abonnés",
        bio: "Mr Anderson. Visionnaire digital et narrateur hors pair.",
        bioLongue: "Laylow est un artiste conceptuel qui repousse les limites du rap français. Son univers digital, inspiré de la science-fiction et du cinéma, est unique. Ses albums 'Trinity' et 'L'Étrange Histoire de Mr. Anderson' sont de véritables œuvres narratives, mêlant rap, chant et storytelling avec une production sonore immersive.",
        albums: [
            {
                titre: "Experience (Disco Symphony Version)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733ff9661c7a6886a7111e3625",
                category: "project", tracks: ["Experience - Disco Symphony Version (feat. Cerrone)", "Experience - Disco Symphony Version Edit (feat. Cerrone)", "Experience - Disco Symphony Instrumental (feat. Cerrone)", "Experience (feat. Cerrone)"]
            },
            {
                titre: "DOGZ (In the Studio)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273aa66061d154ad3747dd75630",
                category: "single", tracks: ["DOGZ (In the Studio)"]
            },
            {
                titre: "Ice", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739739a80a310c5555acd95894",
                category: "single", tracks: ["Ice (feat. Zed)"]
            },
            {
                titre: "Kawasaki", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273633b02ad5ba1f6724560a677",
                category: "single", tracks: ["Kawasaki (feat. S.Pri Noir)"]
            },
            {
                titre: "911", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738eef7b288d7ffbba7a259d72",
                category: "single", tracks: ["911 (feat. Ikaz Boi)"]
            },
            {
                titre: "Train De Vie (feat. Laylow)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731b3f9333d602fc9726b86e76",
                category: "feat", tracks: ["Train De Vie (feat. Laylow)"]
            },
            {
                titre: "Vive le gang", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a8e421e4717bf269fef7a205",
                category: "single", tracks: ["Vive le gang (feat. Jok\'air)"]
            },
            {
                titre: "Tour en ville", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c54aa05146d37417dd4a40c4",
                category: "single", tracks: ["Tour en ville (feat. Jok\'air)"]
            },
            {
                titre: "STATION II - DIGITAL EMOTIONS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27330551b23e8f42f013db43193",
                category: "single", tracks: ["STATION II - DIGITAL EMOTIONS (feat. Prinzly)"]
            },
            {
                titre: "Triste Anniversaire", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273347623f982403cc14874c5de",
                category: "single", tracks: ["Triste Anniversaire (feat. Dinos)"]
            },
            {
                titre: "Pichichi Anderson", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27333e86013c33e8c014016543a",
                category: "single", tracks: ["Pichichi Anderson (feat. Dinos)"]
            },
            {
                titre: "Dennis Rodman (feat. Laylow)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27369d27ca8b8d877dd267ecdf0",
                category: "feat", tracks: ["Dennis Rodman (feat. Laylow)"]
            },
            {
                titre: "Stars (feat. Laylow)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27396989ff70065a9dee3bed178",
                category: "feat", tracks: ["Stars (feat. Laylow)"]
            },
            {
                titre: "Chicha Ski Nautique", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27354c282fd1dac4c4bcfd62fe3",
                category: "single", tracks: ["Chicha Ski Nautique (feat. Walk in Paris, ISHA)"]
            },
            {
                titre: "L\'Étrange Histoire de Mr.Anderson", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735a3d26f61815307b18786a30",
                category: "project", tracks: ["UN RÊVE ÉTRANGE", "Bonsoir Mon Vieil Ami", "IVERSON", "WINDOW SHOPPER PART. 1", "Tu Veux Déjà Me Dire Aurevoir ?", "R9R-LINE (feat. Damso)", "Ça Va Pas Être Possible...", "WINDOW SHOPPER PART. 2 (feat. Hamza)", "STUNTMEN (feat. Alpha Wann & Wit.)", "NightShop BlaBla", "VOIR LE MONDE BRÛLER", "QUE LA PLUIE", "+ De Pluie...", "SPECIAL (feat. Nekfeu & Fousheé)", "LOST FOREST", "C\'est Eux Contre Nous", "HELP !!!", "Tu Comprends Maintenant ?", "FALLEN ANGELS (feat. slowthai)", "UNE HISTOIRE ÉTRANGE"]
            },
            {
                titre: "STUNTMEN (feat. Alpha Wann & Wit.)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736c5623b29f119d0a85fe8ef8",
                category: "single", tracks: ["STUNTMEN (feat. Alpha Wann & Wit.) - version single"]
            },
            {
                titre: "Playmate", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ba7d81e4bbe63f929ca7f67d",
                category: "single", tracks: ["Playmate (feat. Coyote Jo Bastard)"]
            },
            {
                titre: "Clic clac bang bang", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737fa56d094a035728a202e760",
                category: "single", tracks: ["Clic clac bang bang (feat. Jok\'air)"]
            },
            {
                titre: "TRINITY", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cf9726b68163ea79514a3435",
                category: "project", tracks: ["Initialisation", "MEGATRON", "DEHORS DANS LA NIGHT", "HILLZ (feat. S.Pri Noir)", "PLUG (feat. Jok\'air)", "Menu principal", "PIRANHA BABY", "TRINITYVILLE", "Mieux vaut pas regarder, Pt. 1", "VAMONOS (feat. Alpha Wann)", "AKANIZER", "BURNING MAN (feat. Lomepal)", "Il était une fois sous l\'eau", "LONGUE VIE...", "Mieux vaut pas regarder, Pt. 2", "...DE BATARD (feat. Wit.)", "Tentative de reconnexion", "POIZON", "NAKRé", "MILLION FLOWERZ", "Manuel d\'utilisation", "LOGICIEL TRISTE"]
            },
            {
                titre: "POIZON", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273921f6da2707e87eb1d3d576b",
                category: "single", tracks: ["POIZON"]
            },
            {
                titre: "TRINITYVILLE", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273bb923c3b8effb73e78330b30",
                category: "single", tracks: ["TRINITYVILLE"]
            },
            {
                titre: "Vroum Vroum", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27341323b48ad13b43c7e50f233",
                category: "single", tracks: ["Vroum Vroum (feat. Les Alchimistes)"]
            },
            {
                titre: "MEGATRON", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27359ce61b2bb7426e5661ecf97",
                category: "single", tracks: ["MEGATRON"]
            },
            {
                titre: ".RAW-Z", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273cf62b87ffde24bdeb39ce231",
                category: "project", tracks: ["Hello .RAW-Z", "Z-machine (feat. Wit.)", "Maladresse", "Prince de sang-mêlé", "Visa (feat. Madd)", "Amy", "Bruit de couloir", "I Don\'t : Need U / Know", "Vent de l\'est", "Swish"]
            },
            {
                titre: "Maladresse", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27339ee414995537d03b6a2b30f",
                category: "single", tracks: ["Maladresse"]
            },
            {
                titre: ".RAW", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2734cbf0da6d442fe732a16479a",
                category: "project", tracks: [".RAW", "Ciudad", "Elephant", "Pk tu m\'intéresse", "Médaille", "Action Men (feat. Wit.)", "Y2", "Draxter", "Hi-Fi", "Avenue"]
            },
            {
                titre: "Avenue", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27308878c1411ed4f1802940c08",
                category: "single", tracks: ["Avenue"]
            },
            {
                titre: "Y2", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2733fa8870f603f08d4175731ef",
                category: "single", tracks: ["Y2"]
            },
            {
                titre: "Ciudad", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e7566657e990bbef1984e48c",
                category: "single", tracks: ["Ciudad"]
            },
            {
                titre: "Digitalova", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27371e815ea02dc903e41902c21",
                category: "project", tracks: ["Bionic", "Ignore", "Gogo (feat. Jok\'air)", "Villa sur la côte", "Enlève le shirt (Interlude) (feat. Sirklo)", "Digitalova", "Bad Romance", "Digital Vice City", "Wavy", "Malentendu"]
            },
            {
                titre: "Gogo", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2738dd67478f414db3b2a2f08b0",
                category: "single", tracks: ["Gogo (feat. Jok\'air)"]
            },
            {
                titre: "Mercy", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273f7a60a83a0ba41fee7979b6e",
                category: "project", tracks: ["Mercy", "Oto", "Amor (feat. Di-Meh)", "Division rouge", "Toyotarola", "No Love [Oh Na] (feat. Sneazzy)", "Lime", "Promi (feat. Wit.)", "Gtmotors (feat. Wit., Aladin 135)", "10\'"]
            },
        ]
    },
    {
        id: "luther",
        nom: "Luther",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/luther.webp",
        chiffres: "245k Abonnés",
        bio: "Le mystère d'Avignon. Une plume sensible sur des prods actuelles.",
        bioLongue: "Luther, jeune rappeur d'Avignon, cultive la discrétion (visage souvent caché) pour laisser parler sa musique. Ses textes introspectifs, teintés de mélancolie et de lucidité sur sa génération, touchent un public grandissant. Il représente cette nouvelle vague d'artistes qui privilégient l'émotion et la sincérité.",
        albums: [
            {
                titre: "fantom", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27380061208f0bc3bcf840ebe8f",
                category: "single", tracks: ["fantom (feat. Rounhaa)"]
            },
            {
                titre: "EXIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f612c3e18ac2f5af57a52128",
                category: "project", tracks: ["PABO", "ROUGE GORON", "MOSSY COBBLESTONE", "T3", "JOURNAL DE QUÊTES", "SEUIL", "uSQUAD", "CHÂTEAU FORT", "LOOK", "ALED"]
            },
            {
                titre: "MOSSY COBBLESTONE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730cec3f2b1dc66a364b523073",
                category: "single", tracks: ["MOSSY COBBLESTONE"]
            },
            {
                titre: "ROUGE GORON", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27356602a10fd851deff618f7fd",
                category: "single", tracks: ["ROUGE GORON"]
            },
            {
                titre: "GARÇON + AMI", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e3bd7cbf827ea3aafbc00e07",
                category: "project", tracks: ["PK TU M\'APL ?", "ALAKAZAM", "BLAKE & MORTIMER", "MA VIE D\'AVANT", "LESSGUI", "LE SANG", "TORIEL - VENI VIDI VIDE", "GARÇON", "inaudible (feat. LUCASV)", "uet (feat. amne)", "virage (feat. amne)"]
            },
            {
                titre: "AMI", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27362df7bd442c6d60fc912b274",
                category: "project", tracks: ["inaudible (feat. LUCASV)", "uet (feat. amne)", "virage (feat. amne)"]
            },
            {
                titre: "inaudible", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735db3530d549f4dffd5861f4d",
                category: "single", tracks: ["inaudible (feat. LUCASV)"]
            },
            {
                titre: "baume", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d7bd5a06268bff6929a7055d",
                category: "single", tracks: ["baume (feat. Sublime, Rounhaa, LUCASV)"]
            },
            {
                titre: "GARÇON", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e1761695fe96a8698651ee75",
                category: "project", tracks: ["PK TU M\'APL ?", "ALAKAZAM", "BLAKE & MORTIMER", "MA VIE D\'AVANT", "LESSGUI", "LE SANG", "TORIEL - VENI VIDI VIDE", "GARÇON"]
            },
            {
                titre: "LESSGUI", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27345e231b48d6e603eb9ccb824",
                category: "single", tracks: ["LESSGUI"]
            },
            {
                titre: "ALAKAZAM + BLAKE & MORTIMER", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c6c97cb67f64824226ca3e92",
                category: "project", tracks: ["ALAKAZAM", "BLAKE & MORTIMER"]
            },
            {
                titre: "Câlins", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27357f2b0a1213dbed1838429ae",
                category: "single", tracks: ["Câlins (feat. 1863)"]
            },
            {
                titre: "ALAKAZAM", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735d9c4a35de27406ba10264d3",
                category: "single", tracks: ["ALAKAZAM"]
            },
            {
                titre: "TR4PST4R", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732f4dc20356db2f39da13ff97",
                category: "single", tracks: ["TR4PST4R"]
            },
            {
                titre: "IDD", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735905b9e438b2dadf345cad1c",
                category: "project", tracks: ["Intro", "Yuto & Yugi", "20 Mach/s (interlude)", "Finesse", "Baume à lèvres", "Chrysant3mes"]
            },
            {
                titre: "Montrer les dents", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735cc6cd7c38c27e05789ac3c7",
                category: "single", tracks: ["Montrer les dents (feat. 14Mirage, Ousbel)"]
            },
            {
                titre: "Trame", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cdca339aaf59b08fdc41329c",
                category: "project", tracks: ["Maille", "Hégemon", "Dinar (feat. Bu$hi)", "Le faire", "Savane", "VVS", "Kamado", "Trame (Outro)"]
            },
        ]
    },
    {
        id: "h_jeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/h_jeunecrack.webp",
        chiffres: "46k Abonnés",
        bio: "Le roi du DIY. Rappeur et beatmaker prolifique.",
        bioLongue: "H JeuneCrack est un artiste complet : il rappe, produit ses instrumentales et réalise ses clips. Son style 'Do It Yourself', brut et spontané, séduit par son authenticité. Il enchaîne les projets courts (les 'Cycles') où il expérimente des sonorités variées, toujours avec une plume aiguisée et un humour pince-sans-rire.",
        albums: [
            {
                titre: "SNIPER DÉCAPOTABLE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cd09e31f3e44173729037fa5",
                category: "single", tracks: ["SNIPER DÉCAPOTABLE (feat. BLOODY$ANJI, Idée Noire.)"]
            },
            {
                titre: "1er Mouvement", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f3a9a3aff39a42f100be73e3",
                category: "project", tracks: ["Kaboul Kitchen", "Sade", "Le beau geste", "Le gros caillou", "Manita", "Hustleuse", "Deuxième peau", "Kassded"]
            },
            {
                titre: "Hustleuse", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a20aadce80a4303301afb02d",
                category: "single", tracks: ["Hustleuse"]
            },
            {
                titre: "Freestyle 1er Mouvement", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273337e24adc92b9bf8c05568da",
                category: "single", tracks: ["Freestyle 1er Mouvement"]
            },
            {
                titre: "La taupe", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c11b1ab6482caa674b4d8a25",
                category: "single", tracks: ["La taupe"]
            },
            {
                titre: "La solution", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e8fc0c95a04a17caf24373f5",
                category: "project", tracks: ["Catenaccio (feat. Mairo)", "Fast Learner (feat. Mairo)", "L\'acide et la base (feat. Mairo)"]
            },
            {
                titre: "La pieuvre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cf81fc7c042aa1b627b800ea",
                category: "project", tracks: ["La preuve (feat. Hologram Lo\')", "Bah oui (feat. Hologram Lo\')", "Joue la comme (feat. Hologram Lo\', Infinit\')"]
            },
            {
                titre: "Joue la comme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27348778b841c430b0d3faaee68",
                category: "single", tracks: ["Joue la comme (feat. Hologram Lo\', Infinit\')"]
            },
            {
                titre: "MATIÈRE PREMIÈRE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a54c23c9aeeac4ae26b3f08c",
                category: "project", tracks: ["Comment ça s\'passe ?", "Aquarelle", "Présidentiel flow", "Gamberge FM", "Au max", "Dièses", "Wazinc", "Les cristaux", "Pshiitt...", "Opale Système (feat. Nocif, Yalna, BabyBoo, $knny & esone)", "Google Maps"]
            },
            {
                titre: "merci bonne journée", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f3c7ffe63f64d11d7d5bf272",
                category: "single", tracks: ["merci bonne journée (feat. Mairo)"]
            },
            {
                titre: "Présidentiel flow", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27307a07d60956bc685528742ae",
                category: "single", tracks: ["Présidentiel flow"]
            },
            {
                titre: "La vigne (feat. Mairo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735dfdde96e6f60cb71729a72d",
                category: "single", tracks: ["La vigne (feat. Mairo)"]
            },
            {
                titre: "3ème Cycle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f16862e7d10f265fcf354322",
                category: "project", tracks: ["La Trinité", "Musée", "3 Meufs", "Vrai Crack", "La Cantine", "L\'éther", "Le joueur le plus précieux", "Mr le Prouveur (fin alternative)"]
            },
            {
                titre: "Vrai Crack", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27346fc9158972dbf76e190762c",
                category: "single", tracks: ["Vrai Crack"]
            },
            {
                titre: "Big Lebowski", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c334278afd1348478b15b1c0",
                category: "single", tracks: ["Big Lebowski (feat. abel31)"]
            },
            {
                titre: "Emploi fictif", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a92a4ed01953d6325c44ff2d",
                category: "single", tracks: ["Emploi fictif (feat. 1863, TaeminTekken)"]
            },
            {
                titre: "Mauvaise Musique", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735bbf2d0f86216a4e9cfadb70",
                category: "project", tracks: ["Mauvaise Musique (feat. Beamer)", "Dérapages (feat. Beamer)", "Freestyle Disco (feat. Beamer)", "Julian Assange (feat. Beamer)", "Demi Tour (feat. Beamer)"]
            },
            {
                titre: "2ème Cycle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734a61a62f65fcb25d452e54ed",
                category: "project", tracks: ["Bienvenue à Gattaca", "Intelligent", "Dromadaire", "Métaphysique", "L\'eau chaude", "Chambre 8344", "Parle vrai"]
            },
            {
                titre: "Puzzle mus1que", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f0e02790af7c71539d39f987",
                category: "project", tracks: ["Grand Manitou", "Vendetta", "Le large"]
            },
            {
                titre: "Crabe", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cf68504304312296ccdf5f00",
                category: "single", tracks: ["Crabe"]
            },
            {
                titre: "1er Cycle", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735165cfc395ad8483487b4bf4",
                category: "project", tracks: ["Fausse cocaïne (feat. H)", "Νεφέλαι (feat. H, Nyluu)", "Le sucre (feat. H)", "Premier porno (feat. H)", "Shéhérazade (feat. H)", "Couleurs froides (fin alternative) (feat. H)"]
            },
        ]
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mairo.webp",
        chiffres: "52k Abonnés",
        bio: "La technique suisse. Précision et flow millimétré.",
        bioLongue: "Mairo est un rappeur suisse qui impressionne par sa technique. Membre du collectif SuperWak Clique, il se distingue par un flow chirurgical, des rimes multisyllabiques et une aisance déconcertante sur tout type de production. Il est l'un des fers de lance de la scène helvétique qui s'exporte en France.",
        albums: [
            {
                titre: "ANTIOXYDANT", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730538c33df4351db96fe196bc",
                category: "single", tracks: ["ANTIOXYDANT (feat. neophron)"]
            },
            {
                titre: "CHF", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273870dbdb98d8f2a7fb1541247",
                category: "single", tracks: ["CHF (feat. AAMO, Kenzy)"]
            },
            {
                titre: "LA FIEV", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fd7a7cdf9190314d3f238389",
                category: "project", tracks: ["nitro LA FIEV (feat. Hopital)", "dope (feat. Hopital)", "i.think (feat. Hopital)", "fight4GE (feat. Hopital)", "paramount (feat. Hopital)", "minuit (feat. Hopital, Niels Schack)", "radio skit (feat. Hopital)", "blccd tears (feat. Hopital)", "antidote ou venin (feat. Hopital)", "la patte brisée (feat. Hopital, Ike Ortiz)", "température (feat. Hopital)", "la tortue et le liev (feat. Hopital)", "45% (feat. Hopital)"]
            },
            {
                titre: "minuit", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b8d2a80bffb4f9a291bf2938",
                category: "single", tracks: ["minuit (feat. Hopital, Niels Schack)"]
            },
            {
                titre: "la patte brisée", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d70510a3121b14676cc816db",
                category: "single", tracks: ["la patte brisée (feat. Hopital, Ike Ortiz)"]
            },
            {
                titre: "dope", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731ff0fd614630dbe9992eca97",
                category: "single", tracks: ["dope (feat. Hopital)"]
            },
            {
                titre: "45 et rouge", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d0a1bfe2efd6d2c2ab196465",
                category: "project", tracks: ["45", "rouge"]
            },
            {
                titre: "La solution", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e8fc0c95a04a17caf24373f5",
                category: "project", tracks: ["Catenaccio (feat. H JeuneCrack)", "Fast Learner (feat. H JeuneCrack)", "L\'acide et la base (feat. H JeuneCrack)"]
            },
            {
                titre: "Warehouse", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27391c004ccb3f5dddbe0296156",
                category: "single", tracks: ["Warehouse (feat. Le Règlement)"]
            },
            {
                titre: "Déjeuner en paix", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732826035e9b8d9658e768aa61",
                category: "project", tracks: ["Belly Ratchet (feat. JeanJass)", "Obsèques (feat. JeanJass)", "Cléopâtre (feat. JeanJass, Haile Supreme)", "Coiffure afro (feat. JeanJass)", "Déjeuner en guerre (feat. JeanJass, Caballero)"]
            },
            {
                titre: "Déjeuner en guerre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d356bed9daef1df581cb5e3a",
                category: "single", tracks: ["Déjeuner en guerre (feat. JeanJass, Caballero)"]
            },
            {
                titre: "Cléopâtre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27366d67279abddc360e516f354",
                category: "single", tracks: ["Cléopâtre (feat. JeanJass, Haile Supreme)"]
            },
            {
                titre: "omar chappier freestyle", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27320df6c7b2cc99828702875b4",
                category: "single", tracks: ["omar chappier freestyle (feat. Raplume)"]
            },
            {
                titre: "DEREVO", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273112a6b5803c6dde2038bae4b",
                category: "single", tracks: ["DEREVO (feat. $CO)"]
            },
            {
                titre: "le vent (feat. Mairo)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273283a63cbc03a4771ed08d47c",
                category: "feat", tracks: ["le vent (feat. Mairo)"]
            },
            {
                titre: "omar chappier", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735d9ae06e84346711dc45988b",
                category: "project", tracks: ["la mouche", "crack crack", "2 jackets (feat. Implaccable)", "nouvelle écriture", "dope sound", "merci bonne journée (feat. H JeuneCrack)", "larousse (feat. NeS & Wallace Cleaver)", "pov 2023"]
            },
            {
                titre: "merci bonne journée", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f3c7ffe63f64d11d7d5bf272",
                category: "single", tracks: ["merci bonne journée (feat. H JeuneCrack)"]
            },
            {
                titre: "2 jackets", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737052f05d44fe113e92557f1d",
                category: "single", tracks: ["2 jackets (feat. Implaccable)"]
            },
            {
                titre: "nouvelle écriture", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737759b1a5d51ac7036240b8bb",
                category: "single", tracks: ["nouvelle écriture"]
            },
            {
                titre: "QUI A VOLÉ LE SOLEIL ?", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731649629d809d4a1b895871a6",
                category: "project", tracks: ["Zepe & Zada (feat. Slimka)", "8AM (feat. Slimka)", "Pegasus (feat. Slimka)"]
            },
            {
                titre: "La vigne (feat. Mairo)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735dfdde96e6f60cb71729a72d",
                category: "feat", tracks: ["La vigne (feat. Mairo)"]
            },
            {
                titre: "Rap Mag", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273584967f66f40126c34223565",
                category: "single", tracks: ["Rap Mag"]
            },
            {
                titre: "Touch it", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a02d7ff6e60fd32c158766bd",
                category: "single", tracks: ["Touch it (feat. NNNurah, Hopital)"]
            },
            {
                titre: "Nonante-huit", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b25e6ca5d8a7ddc8ef61c49e",
                category: "single", tracks: ["Nonante-huit (feat. Di-Meh, Pandrezz, Epektase)"]
            },
            {
                titre: "M.A.I.R", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738212ccee05b6406059c45718",
                category: "single", tracks: ["M.A.I.R"]
            },
            {
                titre: "95ml Freestyle (Nayuno Sessions)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27387068f223ad45318914d307c",
                category: "single", tracks: ["95ml Freestyle (Nayuno Sessions)"]
            },
            {
                titre: "Rougemort", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735cf180340c0ee8b22c9bd420",
                category: "project", tracks: ["astral (feat. Hopital)", "coupe gorge (feat. Hopital)", "attentat uzi (feat. Hopital)", "eritriste (feat. Hopital)", "rougemort vengeance (feat. Hopital)", "blccd (feat. Hopital)", "jamais (feat. Hopital)", "life (feat. Hopital)"]
            },
            {
                titre: "Attentat uzi - A COLORS SHOW", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737c0caf4716d3b1531ad22d19",
                category: "single", tracks: ["Attentat uzi - A COLORS SHOW"]
            },
            {
                titre: "95 monde libre", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273dd0a92b8b8f0e937a7c36757",
                category: "project", tracks: ["kill bill (feat. Hopital)", "donne (feat. Hopital)", "eritv (feat. Hopital)", "madras (feat. Hopital)", "(357) the what (feat. Hopital, Makala)", "adi genu (feat. Hopital)", "show.business (feat. Hopital)", "gdid (feat. Hopital)", "la danse des indiens (feat. Hopital)", "sisi mababy (feat. Hopital)"]
            },
            {
                titre: "Tribe", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2731139a9594c15b01f21d4a627",
                category: "single", tracks: ["Tribe (feat. Hopital)"]
            },
            {
                titre: "I-D", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ad03deffdca3d7f30e7ccce5",
                category: "single", tracks: ["I-D (feat. Slimka)"]
            },
            {
                titre: "Fudge à Colombus", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273067af893804e4ace3e656fb1",
                category: "single", tracks: ["Fudge à Colombus (feat. Hopital)"]
            },
            {
                titre: "Senay et Aman", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27310fceb9f6c58b1233e8a87b0",
                category: "single", tracks: ["Senay et Aman (feat. Hopital)"]
            },
            {
                titre: "Bachay", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273c6369321f879e02b84548b6e",
                category: "single", tracks: ["Bachay (feat. Hopital)"]
            },
        ]
    },
    {
        id: "khali",
        nom: "Khali",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/khali.webp",
        chiffres: "68k Abonnés",
        bio: "L'émotion nasillarde. Une voix unique et touchante.",
        bioLongue: "Khali possède l'une des voix les plus reconnaissables du rap français. Son timbre nasillard et ses intonations particulières servent des textes chargés d'émotion et de mélancolie. Il raconte ses doutes et ses peines avec une sincérité désarmante, sur des productions souvent minimalistes et planantes.",
        albums: [
            {
                titre: "PLM DEATHROW", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27362f61469988fd488812e8c9e",
                category: "project", tracks: ["PLM DEATHROW", "FOREVER", "KHALI IL SAIT", "FREE"]
            },
            {
                titre: "FOREVER", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e55129739dbc88c9e942668d",
                category: "project", tracks: ["FOREVER", "KHALI IL SAIT", "FREE"]
            },
            {
                titre: "KHALI IL SAIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cf9daaae68c186f132bbb79b",
                category: "project", tracks: ["KHALI IL SAIT", "FREE"]
            },
            {
                titre: "FREE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ef111bba8f6ca85379093ebb",
                category: "single", tracks: ["FREE"]
            },
            {
                titre: "23 -", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737bc6b587c6fb4abc45453486",
                category: "project", tracks: ["LE TEMPS PASSE TU SAIS", "PATEK", "BOTTEGA", "LONDON", "TREMBLEMENT DE TERRE", "OMG", "RIEN NE VA ME SUFFIRE", "SILENCE"]
            },
            {
                titre: "IL ME RESSEMBLE PAS NON PLUS", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27399e424755457e30efc104a7f",
                category: "project", tracks: ["JE M\'EN MOQUE EFFECTIVEMENT", "EN VRAI", "808", "JAMAIS COMME ILS VONT", "LE MONDE EST À TOI", "KOLAF INTERLUDE", "LA FLÈCHE", "ON T\'A PROMIS QUOI?", "NO PSY", "PAS DE ZGA INTERLUDE", "PEPELE", "G LE SEUL", "BLOODY PLM", "ENTRE PALMER ET PARIS ZOO", "UMBRELLA", "JE FERAI DE MON MIEUX"]
            },
            {
                titre: "LE MONDE EST À TOI", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273819285169e976cc86f146bf3",
                category: "single", tracks: ["LE MONDE EST À TOI"]
            },
            {
                titre: "21 -", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737bc6c75d85ad46cf59af080e",
                category: "project", tracks: ["PEzZZ", "NO PHOTO"]
            },
            {
                titre: "LAÏLA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b84cca122af032b1e97ab97b",
                category: "project", tracks: ["COULEURS", "BIENVENUE", "D&G", "SIRÈNES (feat. Chanceko)", "TIRE (INTERLUDE)", "LA TOILE", "BONBON", "YEAH YEAH", "ME3ZA", "FRANCE", "LAÏLA BAÏDA"]
            },
            {
                titre: "LA TOILE", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2739ad56b8dc5c323acada31634",
                category: "single", tracks: ["LA TOILE"]
            },
            {
                titre: "20 -", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27302949b72cf4e37470317bd88",
                category: "single", tracks: ["20 -"]
            },
            {
                titre: "Le tournesol", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273d1349bd15874b0a20e10c2dd",
                category: "project", tracks: ["Anéantie", "Sans peur", "Buy nothing", "Fleurs"]
            },
            {
                titre: "Demain", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c56bc08668b54265bd53384e",
                category: "single", tracks: ["Demain"]
            },
            {
                titre: "Pas méchant", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730edfadd3d0e6919eae32ed70",
                category: "single", tracks: ["Pas méchant"]
            },
            {
                titre: "Bulletproof", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273abeb968bd6cbd3918521ce8d",
                category: "single", tracks: ["Bulletproof (feat. Loveni)"]
            },
            {
                titre: "Valentine", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b94bd869deae29993555b286",
                category: "single", tracks: ["Valentine"]
            },
            {
                titre: "Palmer wild story", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736c191608db3e8bd6ef798c79",
                category: "project", tracks: ["Piège", "Rappel", "Ninetynine", "Nouvelle", "Mille raisons", "Palmer wild story", "Je m\'en vais"]
            },
        ]
    },
    {
        id: "solalune",
        nom: "So La Lune",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/so_la_lune.webp",
        chiffres: "123k Abonnés",
        bio: "La voix qui divise et fascine. Mélancolie pure.",
        bioLongue: "So La Lune est un ovni. Sa voix aiguë, presque criarde, peut diviser, mais elle véhicule une émotion brute rare. Très productif, il enchaîne les morceaux où il chante sa douleur et son mal-être, créant un univers sombre et poétique qui a su fidéliser une fan base très engagée.",
        albums: [
            {
                titre: "Nuit", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27300b4ec9d8e07931c9829dac7",
                category: "single", tracks: ["Nuit (feat. Cheu-B, Ghost Killer Track)"]
            },
            {
                titre: "En attendant Offshore, Vol. 1", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273776fefccb35bdec6de734a41",
                category: "project", tracks: ["Mauvais opps", "Gitarka", "Nemo", "Maison hantée", "Psychiatrie"]
            },
            {
                titre: "MAL AIMÉS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273fc2d5f3e5900868f4f86e755",
                category: "single", tracks: ["MAL AIMÉS (feat. Yvnnis)"]
            },
            {
                titre: "Dernier bolide", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737d09afc9f41591e058b5fa2c",
                category: "single", tracks: ["Dernier bolide (feat. GP Explorer, JEY BROWNIE, Yorssy)"]
            },
            {
                titre: "plus ou moins", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732cfb82339fecaf7056e75591",
                category: "single", tracks: ["plus ou moins (feat. Amine Farsi)"]
            },
            {
                titre: "LEAKA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27393f2b5321d465540a4c2e783",
                category: "project", tracks: ["Syndrome Titan - Exclu olympia", "Béton ADN - Exclu twitter", "Paris Zombie - Exclu insta", "Zelef - Exclu insta", "Lili et Koda - Exclu pop up", "ATPDLM - Exclu insta"]
            },
            {
                titre: "Rollie (feat. So La Lune)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c42770307a92ee38f15d41e5",
                category: "feat", tracks: ["Rollie (feat. So La Lune)"]
            },
            {
                titre: "Nouveau Produit", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f1b2a948a7ba3177a2e0cc4a",
                category: "project", tracks: ["C-11", "30 secondes", "Ça ira (feat. UZI)", "Motor", "Odéon", "Isolé", "Tout le temps (feat. Rim\'K, Soprano)", "STDM", "Bendo Toute La Nuit (feat. Jolagreen23)", "Albator II", "Full Piège (feat. Guizmo)", "Journal", "Nouveau Produit", "Luc Besson (feat. Lujipeka)", "Le Masque"]
            },
            {
                titre: "Ça ira", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733b999d04d7489730bba48e52",
                category: "single", tracks: ["Ça ira (feat. UZI)"]
            },
            {
                titre: "Tout le temps", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738b0f341f41a8e97b371f8dce",
                category: "single", tracks: ["Tout le temps (feat. Rim\'K, Soprano)"]
            },
            {
                titre: "Luc Besson", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cfb1ad1457e6a317c8974adc",
                category: "single", tracks: ["Luc Besson (feat. Lujipeka)"]
            },
            {
                titre: "Full Piège", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ba17afe1b2214492c7fd0d7a",
                category: "single", tracks: ["Full Piège (feat. Guizmo)"]
            },
            {
                titre: "Bendo Toute La Nuit", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739badddfad06f7cf971531016",
                category: "single", tracks: ["Bendo Toute La Nuit (feat. Jolagreen23)"]
            },
            {
                titre: "30 secondes/Motor", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27380d4d44f9e6bd2eb05ac358e",
                category: "project", tracks: ["30 secondes", "Motor"]
            },
            {
                titre: "Tout recommencer (feat. So La Lune)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c8f12df7aa5c9aa8ee77296f",
                category: "feat", tracks: ["Tout recommencer (feat. So La Lune)"]
            },
            {
                titre: "REBEL MOON ft. So La Lune, Osirus Jack", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fa67fcd06dc248539608ccb7",
                category: "feat", tracks: ["REBEL MOON ft. So La Lune, Osirus Jack (feat. Sazamyzy, Osirus Jack)"]
            },
            {
                titre: "Plage Vendôme", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ff89d6de489ffa65c5ee89c2",
                category: "single", tracks: ["Plage Vendôme (feat. Moha MMZ)"]
            },
            {
                titre: "DALIDA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736c5c7dcc41524d52da8bf62d",
                category: "single", tracks: ["DALIDA (feat. HOUDI)"]
            },
            {
                titre: "NUMERO 11", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737b5c7a310030bbcc7a2b0bac",
                category: "project", tracks: ["3 FOIS X OU SANTANA", "TITULAIRE", "MAL DE MER", "A DIX COULEURS", "SA TEILLE SON J"]
            },
            {
                titre: "Jardin", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ae3e13682e7921460658649b",
                category: "single", tracks: ["Jardin (feat. Elh Kmer)"]
            },
            {
                titre: "Boboalam", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e9f7a7bd0cfc91429bc80821",
                category: "single", tracks: ["Boboalam (feat. Zamdane)"]
            },
            {
                titre: "Vision", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27349df43d941e441cd476d2b2e",
                category: "single", tracks: ["Vision (feat. Saamou)"]
            },
            {
                titre: "L\'enfant de la pluie", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ce63dcfcd57154183cb59c97",
                category: "project", tracks: ["Opening", "Remontada", "99 avenue", "Bloqué", "Un jour d\'été", "Perte de temps (feat. Khali)", "L\'Allemande", "10 Hummers", "Bip bip", "Sali", "Interlude : Froide l\'averse", "Suspects (feat. SCH)", "OP", "Le dernier maître de l\'eau", "Les toits de la ville", "Triste temps", "Au BPM", "Sales images", "Parfum automne (Bonus)"]
            },
            {
                titre: "Triste temps", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b9a81a10c51f8974a5b0aae0",
                category: "project", tracks: ["Triste temps", "Au BPM"]
            },
            {
                titre: "Au BPM", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27307d7f62593a73232372744dc",
                category: "single", tracks: ["Au BPM"]
            },
            {
                titre: "Freestyle 12TSUKI8NICHI", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d4f36bf3584fe431bc529a9b",
                category: "single", tracks: ["Freestyle 12TSUKI8NICHI"]
            },
            {
                titre: "FAVELA", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273eeddbd0c942cb53d1f16fa7f",
                category: "single", tracks: ["FAVELA (feat. Favé)"]
            },
            {
                titre: "SOS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d69fc7fae387e0a5f10c0f81",
                category: "single", tracks: ["SOS"]
            },
            {
                titre: "Allons faire la fête on va mourir", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730ee2ab8de5686daa56860313",
                category: "single", tracks: ["Allons faire la fête on va mourir (feat. Jok\'air)"]
            },
            {
                titre: "SOLIDE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737b34aea91ba6a3285ed34e06",
                category: "single", tracks: ["SOLIDE (feat. PUSH & GIO)"]
            },
            {
                titre: "Le nom du film", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b26e2dd36ce42dda7548747c",
                category: "single", tracks: ["Le nom du film (feat. YUNG POOR ALO)"]
            },
            {
                titre: "TsuSky", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734f43922b0ccb69295b6dc588",
                category: "single", tracks: ["TsuSky (feat. Cheu-B)"]
            },
            {
                titre: "LA RUCHE (feat. Realo & So La Lune)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735997307809264e9d1d0ac9ba",
                category: "single", tracks: ["LA RUCHE (feat. Realo & So La Lune)"]
            },
            {
                titre: "Kiri Village", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a3611257ffc9664124273b44",
                category: "single", tracks: ["Kiri Village (feat. Rvzmo)"]
            },
            {
                titre: "Loup", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27302a64f3e59de1006be5b43cb",
                category: "single", tracks: ["Loup (feat. Roshi)"]
            },
            {
                titre: "BERGER", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27326cb78fd5a6d20cb3bc3d9a3",
                category: "single", tracks: ["BERGER (feat. Megalasphere, Au6i)"]
            },
            {
                titre: "BakaTsuki (feat. So La Lune)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737f61e8f349a4dc13b4ae51b1",
                category: "feat", tracks: ["BakaTsuki (feat. So La Lune)"]
            },
            {
                titre: "LUNE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d85910d8a0902a7fcd707228",
                category: "single", tracks: ["LUNE (feat. 8ruki, Binks Beatz)"]
            },
            {
                titre: "BILLET DE 5", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736873325a4a2f8b752a83a43f",
                category: "single", tracks: ["BILLET DE 5 (feat. Leone)"]
            },
            {
                titre: "Béatrice", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273439ac9666c7b91f5a36acb82",
                category: "single", tracks: ["Béatrice (feat. Caballero & JeanJass)"]
            },
            {
                titre: "Pandémie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e3ec4a8047f7ac849071f96e",
                category: "single", tracks: ["Pandémie (feat. Amine Farsi, Zed)"]
            },
            {
                titre: "Nomades", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273144f4c96b3a2de4b14d34e89",
                category: "project", tracks: ["Sérum (feat. Amine Farsi)", "Retour de Flamme (feat. Amine Farsi)", "Pandémie (feat. Amine Farsi, Zed)", "Le Film (feat. Amine Farsi)", "Sourire Fantôme (feat. Amine Farsi)"]
            },
            {
                titre: "Retour de Flamme", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273aa77943681521da6045d4f33",
                category: "single", tracks: ["Retour de Flamme (feat. Amine Farsi)"]
            },
            {
                titre: "Bougie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27350505861e478f5ea173dcdb3",
                category: "single", tracks: ["Bougie (feat. Aketo)"]
            },
            {
                titre: "Smile:( (feat. So La Lune)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273732bea297619af7a41c56fab",
                category: "feat", tracks: ["Smile:( (feat. So La Lune)"]
            },
            {
                titre: "Wilma", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730644ce5f981e64b82b1d14e2",
                category: "project", tracks: ["Océan", "La pierre", "L\'âme", "Arkham", "Numéro 11"]
            },
            {
                titre: "Si ça compte", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273df5305186ac37d21f1fe29ee",
                category: "single", tracks: ["Si ça compte (feat. Green Montana)"]
            },
            {
                titre: "Kenna", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734f98a2f09a23c4e24db35e28",
                category: "project", tracks: ["L\'averse", "Si ça compte (feat. Green Montana)", "Vie d\'avant", "Un peu de moi", "Gepetto"]
            },
            {
                titre: "Titanic", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733725377fb982c7d5b6168e4f",
                category: "single", tracks: ["Titanic (feat. Raplume, Beendo Z)"]
            },
            {
                titre: "sport + métaux", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e10f84b20b6931050089374c",
                category: "single", tracks: ["sport + métaux (feat. Sely, VRSA)"]
            },
            {
                titre: "Sous le ciel (feat. So La Lune)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f4705c24dcc98623a84c7778",
                category: "feat", tracks: ["Sous le ciel (feat. So La Lune)"]
            },
            {
                titre: "Fissure de vie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27323f8ca2a1d3e6a434e52b0fe",
                category: "project", tracks: ["Soleil mourant", "Fin heureuse", "Medellín", "Range Ro", "Guérison", "En bas (feat. DA Uzi)", "Vide", "Dona", "Eternelle 2", "Déconnecté", "2 i", "Nouveaux pirates (feat. Roshi)", "Nicki", "Péché", "Interlune", "Outrône"]
            },
            {
                titre: "Nouveaux pirates", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a392f1dc71f5c425237713ce",
                category: "single", tracks: ["Nouveaux pirates (feat. Roshi)"]
            },
            {
                titre: "Freestyle Raplune", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27305e7d7f4d1e8131cab6fafbb",
                category: "single", tracks: ["Freestyle Raplune (feat. Raplume)"]
            },
            {
                titre: "En bas", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273886724d778c2fed567e99f67",
                category: "single", tracks: ["En bas (feat. DA Uzi)"]
            },
            {
                titre: "Fin heureuse", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735e4fb69b3cf829dc18b26210",
                category: "single", tracks: ["Fin heureuse"]
            },
            {
                titre: "27/05/22", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273abb79fc58a2534e2adf175ad",
                category: "project", tracks: ["Sébastien & Kader", "Dernier remord", "Elvira"]
            },
            {
                titre: "Céline", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cde6d53b156f6ead4184a27f",
                category: "single", tracks: ["Céline (feat. Elh Kmer)"]
            },
            {
                titre: "3ème Faille (San Andreas)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738dda3de5eb2ccbc526a1772d",
                category: "project", tracks: ["CM2", "Pacifique", "Santé", "Gina", "Kitsu"]
            },
            {
                titre: "2ème faille (Silfra)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27355f1d6a8bc1c383d511e299b",
                category: "project", tracks: ["Tsukithèse", "Éternelle", "Copine", "Rob Lucci", "Sortilège"]
            },
            {
                titre: "Freestyle 2ème faille", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27362ccaece6ae19c113cc4a739",
                category: "single", tracks: ["Freestyle 2ème faille"]
            },
            {
                titre: "1ère Faille (L\'Afar)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730b5b71a0966236461bb9b895",
                category: "project", tracks: ["Biberon", "Afar", "Promesse", "Montana", "Outro Miroir"]
            },
            {
                titre: "Freestyle 1ère faille", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ca06a0359acb3fb359e246e8",
                category: "single", tracks: ["Freestyle 1ère faille"]
            },
            {
                titre: "Apollo 11", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273674f9309ed5d7e6c629a9d26",
                category: "project", tracks: ["Au bélier", "Keh lanta", "Tsukito (feat. Aketo)", "Séquelles", "Maitre nageur"]
            },
            {
                titre: "Freestyle Apollo 11", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cf1a85a883298a2c4fb859a9",
                category: "single", tracks: ["Freestyle Apollo 11"]
            },
            {
                titre: "Orbite", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c8d4468fc000b49a52a71091",
                category: "project", tracks: ["Bonhomme de neige", "Rodé", "Mission", "Goût vanille (feat. Rouge Carmin)", "Saga tome 1"]
            },
            {
                titre: "Satellite naturel", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738e23143b603db4df2f0e0676",
                category: "project", tracks: ["Diagnostic", "Bonheur", "Malade", "CLM", "Sorcier"]
            },
            {
                titre: "Théia", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c0a990681b8938b638b28d98",
                category: "project", tracks: ["Cout d\'éclat", "Lune city", "Seven Up", "I8", "Podium"]
            },
            {
                titre: "Freestyle Theia", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2739840dd0bc24a503badacc239",
                category: "single", tracks: ["Freestyle Theia"]
            },
            {
                titre: "Lune city", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733ed4086ca5951410710d9eef",
                category: "single", tracks: ["Lune city"]
            },
            {
                titre: "Tsuki", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739ac6fab9784a4c63dfea3df6",
                category: "project", tracks: ["Balade", "Shinobi", "6 sens", "Oulalala", "Deux vies (feat. Rouge Carmin)", "La bête", "Envieux", "Quotidien", "Alicante (feat. Elh Kmer)", "Raptus", "Seigneur"]
            },
            {
                titre: "Un tour", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730dc3a4121f3e50ab9079f2eb",
                category: "single", tracks: ["Un tour"]
            },
            {
                titre: "Billy", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273f1d6e6d8fdca1d9525ef4130",
                category: "single", tracks: ["Billy"]
            },
            {
                titre: "Sirène 18", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2734ce43eab718719496147d763",
                category: "single", tracks: ["Sirène 18 (feat. Rouge Carmin)"]
            },
            {
                titre: "Abeille 20", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273d094b37d0ee580199454aee3",
                category: "single", tracks: ["Abeille 20"]
            },
            {
                titre: "Aqua 15", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27345091cc75756a0174913861d",
                category: "single", tracks: ["Aqua 15"]
            },
            {
                titre: "Fissure de vie 23", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273e36af62b6d6060a8d395ed66",
                category: "single", tracks: ["Fissure de vie 23"]
            },
        ]
    },
    {
        id: "princewaly",
        nom: "Prince Waly",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/prince_waly.webp",
        chiffres: "52k Abonnés",
        bio: "Le style incarné. Storytelling et esthétique cinéma.",
        bioLongue: "Prince Waly est l'élégance faite rappeur. Fortement influencé par le cinéma et la culture hip-hop des années 90, il soigne autant son image que ses textes. Après une pause forcée pour des raisons de santé, il est revenu plus fort avec l'album 'Moussa', confirmant son statut de conteur hors pair.",
        albums: [
            {
                titre: "Rapstar", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736cbc0823c312623bfb465a8e",
                category: "single", tracks: ["Rapstar (feat. Dosseh)"]
            },
            {
                titre: "ROCKY & NAST", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f0cb182ee7da595a5e9b17b3",
                category: "single", tracks: ["ROCKY & NAST (feat. Baby Neelou)"]
            },
            {
                titre: "Rudeboy", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27349759ba2d26c726137ea1858",
                category: "single", tracks: ["Rudeboy (feat. Tha Trickaz)"]
            },
            {
                titre: "93 COMME LE GÉNÉRAL", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d42b713d06a2254a94f22eb8",
                category: "single", tracks: ["93 COMME LE GÉNÉRAL (feat. Tarik Azzouz, Sonny Rave)"]
            },
            {
                titre: "Onze (feat. Prince Waly)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273db5a8fbed1640f8c3df8c638",
                category: "feat", tracks: ["Onze (feat. Prince Waly)"]
            },
            {
                titre: "Âme soeur (feat. Enchantée Julia)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27318ab0ff3cf440a8c0fad3b2a",
                category: "single", tracks: ["Âme soeur (feat. Enchantée Julia)"]
            },
            {
                titre: "Belly (feat. Dinos)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ee987ef1c600af3c13e0bbb",
                category: "single", tracks: ["Belly (feat. Dinos)"]
            },
            {
                titre: "Charm el-Cheikh", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731e5cad22a64946c0f27b861b",
                category: "single", tracks: ["Charm el-Cheikh"]
            },
            {
                titre: "UN SEUL CIEL", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2731d313a23457a58992c947b78",
                category: "single", tracks: ["UN SEUL CIEL (feat. Swing)"]
            },
            {
                titre: "Eleanor", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733babe758a77fa204b4e59d14",
                category: "single", tracks: ["Eleanor (feat. Jewel Usain)"]
            },
            {
                titre: "Moussa", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c3439cd8965f67e2ed3ffb2d",
                category: "project", tracks: ["Bleu (feat. Feu! Chatterton)", "Walygator", "Avertisseurs (Part II)", "Rottweiler (feat. Ali)", "Balotelli (feat. Freeze Corleone)", "Messe", "Movie", "Moussa (Part II) - Interlude", "Cra$h (feat. Enchantée Julia & Jazzy Bazz)", "Problème (feat. Luidji & Makala)", "BBF", "Broke", "Miroir", "Mercy"]
            },
            {
                titre: "Problème (feat. Luidji & Makala)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a6ad4df2fbf96da79a76efc7",
                category: "single", tracks: ["Problème (feat. Luidji & Makala)"]
            },
            {
                titre: "Cra$h (feat. Enchantée Julia & Jazzy Bazz)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730ac0cff6d5c23fca2880a693",
                category: "single", tracks: ["Cra$h (feat. Enchantée Julia & Jazzy Bazz)"]
            },
            {
                titre: "Bleu (feat. Feu! Chatterton)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27319121ce33b8a67001766b03f",
                category: "single", tracks: ["Bleu (feat. Feu! Chatterton)"]
            },
            {
                titre: "Balotelli (feat. Freeze Corleone)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737fda29ad5677b624215b8ae5",
                category: "single", tracks: ["Balotelli (feat. Freeze Corleone)"]
            },
            {
                titre: "Broke / Miroir - A COLORS SHOW", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f472ada0e9e69409b28e6168",
                category: "project", tracks: ["Broke", "Miroir", "Broke / Miroir - A COLORS SHOW"]
            },
            {
                titre: "Avertisseurs (Part II)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27359ced4a958a8dd1e6a94b2ae",
                category: "single", tracks: ["Avertisseurs (Part II)"]
            },
            {
                titre: "Walygator", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273832ad24a3eae0542fe02e0bd",
                category: "single", tracks: ["Walygator"]
            },
            {
                titre: "BO Y Z", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273050ed60199bfbbb99ed530b9",
                category: "project", tracks: ["Marsellus Wallace", "YZ (feat. Triplego)", "Rain Man (feat. Tengo John)", "Smoke (feat. Loveni)", "Ma chaussure", "Plan (feat. Alpha Wann)", "Girl (feat. Enchantée Julia)", "Doggy Bag", "BO Y Z (feat. Feu! Chatterton)"]
            },
            {
                titre: "Rain Man (feat. Tengo John)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2732cd8b2182b55a413ab350c9e",
                category: "single", tracks: ["Rain Man (feat. Tengo John)"]
            },
            {
                titre: "Marsellus Wallace", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273c063fe6986eca5800886c87f",
                category: "single", tracks: ["Marsellus Wallace"]
            },
            {
                titre: "Junior", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a50936ec77c551a777452520",
                category: "project", tracks: ["Junior", "Cherry", "Soudoyer le Maire", "Vinewood (feat. Loveni)", "Ginger (feat. Ada)", "Zero (feat. Ichon)", "Rally"]
            },
        ]
    },
    {
        id: "benjaminepps",
        nom: "Benjamin Epps",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/benjamin_epps.webp",
        chiffres: "51k Abonnés",
        bio: "La voix de crécelle. Le renouveau du Boom Bap.",
        bioLongue: "Benjamin Epps a remis le Boom Bap au goût du jour. Avec sa voix haut perchée rappelant parfois Westside Gunn, il livre un rap technique, arrogant et référencé. Il prouve que le rap à l'ancienne peut être moderne et percutant, s'imposant comme l'un des meilleurs kickeurs de sa génération.",
        albums: [
            {
                titre: "APRÈS LE SACRE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733b8cc2f13b882b8bc89fad88",
                category: "project", tracks: ["UN EURO", "ADIEU L\'ÉTÉ", "QUELLE HEURE IL EST", "TOUT SE PAIE"]
            },
            {
                titre: "Napoli", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27332cc50bfa6a9325d83310ff1",
                category: "single", tracks: ["Napoli (feat. Bazbaz)"]
            },
            {
                titre: "L\'Enfant Sacré De Belle Vue, Pt 2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273da863255419ec3caf49ae968",
                category: "project", tracks: ["Boom Chakalaka", "ANTI", "Mon Son", "Le Sauveur (feat. Lous and The Yakuza)", "Ma Main", "Ma Lesse (feat. Dip Doundou Guiss)", "La Machette Sous Le Lit", "Unfuckwithable (feat. Le Chiller)", "Reminescence (feat. Ibrahim Maalouf & Noemie Marian Richards)", "Champion Du Monde (feat. Dany Dan)", "Let Go (feat. Jah Lil)", "Golden Child"]
            },
            {
                titre: "Unfuckwithable (feat. Le Chiller)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c62c94f5a47c7ef30661bc31",
                category: "single", tracks: ["Unfuckwithable (feat. Le Chiller)"]
            },
            {
                titre: "Reminescence (feat. Ibrahim Maalouf & Noemie Marian Richards)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273144874bb0e47c3bc4961f162",
                category: "single", tracks: ["Reminescence (feat. Ibrahim Maalouf & Noemie Marian Richards)"]
            },
            {
                titre: "Let Go (feat. Jah Lil)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273534022724e764d1562aa2bcd",
                category: "single", tracks: ["Let Go (feat. Jah Lil)"]
            },
            {
                titre: "Le Sauveur (feat. Lous and The Yakuza)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27360e5e8708da5e8b0f9af2b0a",
                category: "single", tracks: ["Le Sauveur (feat. Lous and The Yakuza)"]
            },
            {
                titre: "Champion Du Monde (feat. Dany Dan)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f42dc7047724f9481f9f29c3",
                category: "single", tracks: ["Champion Du Monde (feat. Dany Dan)"]
            },
            {
                titre: "ANTI", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736c4e78f90a1781d1a2b9d283",
                category: "single", tracks: ["ANTI"]
            },
            {
                titre: "Fire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732b837ee35e5d82af2a048bea",
                category: "single", tracks: ["Fire (feat. PeaceMaker)"]
            },
            {
                titre: "L\'Enfant Sacré De Bellevue", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a579c0b585e5ae2ba3e527d9",
                category: "project", tracks: ["L\'Enfant Sacré De Bellevue (feat. Abd Al Malik)", "Le Message", "Bibang Et Les Allers Retours", "375", "Charlie Interlude", "Shoe Box (feat. Conway the Machine)", "Le Jeune Moi", "La Fayette", "Rose Des Vents", "Nakata Interlude", "Le Dernier Garçon", "Spect\'"]
            },
            {
                titre: "Le Message", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736d6d77bcc220b75ca202da7e",
                category: "single", tracks: ["Le Message"]
            },
            {
                titre: "375", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a3ef0fddf1a7c8f26bb45068",
                category: "single", tracks: ["375"]
            },
            {
                titre: "Bénédictions", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27379bfeca5cbc6939d0d4dc806",
                category: "single", tracks: ["Bénédictions (feat. MC Solaar)"]
            },
            {
                titre: "LES AUTRES", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731cabb4f186419ba403fc67d0",
                category: "single", tracks: ["LES AUTRES"]
            },
            {
                titre: "JOHN Q", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d9621edf5d6d741233ae411f",
                category: "single", tracks: ["JOHN Q"]
            },
            {
                titre: "ZORRO (feat. Benjamin Epps)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273dbf5ffdd36f451c59e63e870",
                category: "feat", tracks: ["ZORRO (feat. Benjamin Epps)"]
            },
            {
                titre: "Facts (Duo Version)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739225c472af64f1c64ee6a842",
                category: "single", tracks: ["Facts - Duo version (feat. Vicky R)"]
            },
            {
                titre: "Respect", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cebe54636fd3139ef36796ec",
                category: "single", tracks: ["Respect (feat. Ulysse, DJ Robert Smith, Kevoe West)"]
            },
            {
                titre: "RESTE DANS TA MERDE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d70336b6b3cea251ddac8915",
                category: "single", tracks: ["RESTE DANS TA MERDE"]
            },
            {
                titre: "READY FOR WAR", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736919a309789497a4431ab4ea",
                category: "project", tracks: ["FIRST BLOOD", "SPIDER", "BON VOYAGE", "CONTINENTAL", "BUTTER SCOTCH", "PICASSO", "DANS LA STREET", "BELLE RAGE"]
            },
            {
                titre: "Capitaine Flamme (Remix)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cba3ec50f4180e219bce4fdf",
                category: "single", tracks: ["Capitaine Flamme - Remix (feat. Le Juiice, VEERUS, Vicky R)"]
            },
            {
                titre: "Tu peux me haïr maintenant", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27301a97c32a346bfe5e0900d61",
                category: "single", tracks: ["Tu peux me haïr maintenant (feat. EMPRS)"]
            },
            {
                titre: "La grande désillusion (version deluxe)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27343820cc0f644bc4835310ef3",
                category: "project", tracks: ["la grande désillusion", "capitaine flamme", "bienvenue à b\'hell-vue", "la tension", "vivre", "no ennemy (feat. Styles P)", "police à ma porte", "libre (feat. MC Solaar)", "mes rois dorment", "la pression", "très tard le soir (feat. Josman)", "dans nos murs (feat. Angélique Kidjo)", "grisby", "intellectuelle violence (feat. Lino)"]
            },
            {
                titre: "intellectuelle violence (feat. Lino)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c76f0bd0d8e367aecd7fdd0b",
                category: "single", tracks: ["intellectuelle violence (feat. Lino)"]
            },
            {
                titre: "no ennemy (feat. Styles P)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c76c0b706292d211a89eafba",
                category: "single", tracks: ["no ennemy (feat. Styles P)"]
            },
            {
                titre: "dans nos murs (feat. Angélique Kidjo)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273fab478200c2fb67195bbc550",
                category: "single", tracks: ["dans nos murs (feat. Angélique Kidjo)"]
            },
            {
                titre: "vivre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f192e93f5f4f271cd50c385d",
                category: "single", tracks: ["vivre"]
            },
            {
                titre: "police à ma porte", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736227b40ed0dec801b4ff34b9",
                category: "single", tracks: ["police à ma porte"]
            },
            {
                titre: "RELATIF", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27396ebe1e9e5a0784d0c92ee0b",
                category: "single", tracks: ["RELATIF - Français (feat. Rocca, DJ Duke)"]
            },
            {
                titre: "Stop", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273aeda9bb539797557cda6be19",
                category: "single", tracks: ["Stop (feat. Lous and The Yakuza)"]
            },
            {
                titre: "JEUNE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732f878a41ca79910e58b5582e",
                category: "single", tracks: ["JEUNE"]
            },
            {
                titre: "Top tweet", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273816f01fdc271d47a5a159aa9",
                category: "single", tracks: ["Top tweet (feat. Di-Meh)"]
            },
            {
                titre: "Last poètes", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27365429ec7691095bf7e6b9108",
                category: "single", tracks: ["Last poètes (feat. Seth Gueko)"]
            },
            {
                titre: "LONGO MAÏ", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273ea9c100f9fa09ac4ec8a74a1",
                category: "single", tracks: ["LONGO MAÏ (feat. Enchantée Julia)"]
            },
            {
                titre: "DESSALINES FLOW", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b946e7f1ab14b7271c7e7635",
                category: "single", tracks: ["DESSALINES FLOW (feat. Youssoupha, Lino)"]
            },
            {
                titre: "Me confonds pas", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27359b6b1bfd8f9e21ce3276038",
                category: "single", tracks: ["Me confonds pas (feat. A2h)"]
            },
            {
                titre: "VOUS ÊTES PAS CONTENTS ? TRIPLÉ !", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e8ff2467ea5df9b94babbfaf",
                category: "project", tracks: ["BMW BOYZ", "DRILLMATIC", "ENCORE", "TOUT DROIT DE LA BANQUE", "DANS LE WAY", "MARATHON", "VOUS N\'ETES PAS CONTENTS ? C\'EST PAREIL", "CE QUE LE PIPS DEMANDE"]
            },
            {
                titre: "CE QUE LE PIPS DEMANDE - A COLORS SHOW", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27303e44060188ce614ea34f9a0",
                category: "single", tracks: ["CE QUE LE PIPS DEMANDE - A COLORS SHOW"]
            },
            {
                titre: "BMW BOYZ", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735b7e03c258fe86b972984d46",
                category: "single", tracks: ["BMW BOYZ"]
            },
            {
                titre: "Hurray", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732ac9e85165f896fa660265ed",
                category: "single", tracks: ["Hurray (feat. Selah Sue)"]
            },
            {
                titre: "T\'as pas la réf", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ffeaf665d9beedf633a01378",
                category: "single", tracks: ["T\'as pas la réf (feat. Sam\'s)"]
            },
            {
                titre: "Walther PP", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f31f2d5940b01a5200399236",
                category: "single", tracks: ["Walther PP (feat. Dinos)"]
            },
            {
                titre: "Zidane en 2006", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273367cfa157b85a6c00a7df86c",
                category: "single", tracks: ["Zidane en 2006"]
            },
            {
                titre: "Blizzard", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731737376267637dea17ecfbfe",
                category: "single", tracks: ["Blizzard (feat. Vladimir Cauchemar)"]
            },
            {
                titre: "Fantôme avec chauffeur", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27380ace09bea04b394aed79159",
                category: "project", tracks: ["Notorious (feat. Le chroniqueur sale)", "J\'ai leur attention (feat. Le chroniqueur sale)", "Relax, Part I (feat. Le chroniqueur sale)", "Goom (feat. Le chroniqueur sale)", "Lingots, Part II (feat. Le chroniqueur sale)", "Dieu bénisse les enfants (feat. Le chroniqueur sale)", "Le plus grand (feat. Le chroniqueur sale)"]
            },
            {
                titre: "Le futur", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732b41a70596bd002073edc144",
                category: "project", tracks: ["Plié en 5", "Samba les couilles", "Kennedy en 2005", "La nation", "Le pips", "Tard le soir"]
            },
        ]
    },
    {
        id: "hugotsr",
        nom: "Hugo TSR",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/hugo_tsr.webp",
        chiffres: "319k Abonnés",
        bio: "Le fantôme du 18ème. Rap indépendant et sans concession.",
        bioLongue: "Hugo TSR est une figure emblématique du rap indépendant. Membre du TSR Crew, il décrit le quotidien gris et morose des quartiers nord de Paris avec un flow linéaire et hypnotique. Refusant le star system et les médias, il remplit pourtant des salles entières grâce à un public fidèle qui se reconnaît dans son authenticité.",
        albums: [
            {
                titre: "La Pluie", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27335d340cf6ade777699e67732",
                category: "project", tracks: ["Tombé du ciel (intro)", "Aviator", "Mauvais endroit", "Lake City", "La Pluie", "A Balle", "En Altitude", "L\'Épicentre (interlude)", "Gris foncé", "Solution Piranha", "6 Enterrements 0 mariage", "Onoda", "Mille feuilles", "On Recommence"]
            },
            {
                titre: "Jeudi", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734b621569ee0da33aa6c8186d",
                category: "project", tracks: ["Intro", "Jeudi", "Cockpit", "Les Rails", "Valises", "Mise à l\'amende (feat. Loko)", "Tourbillon", "Gare fantôme (feat. Jazzy Bazz)", "Outro (feat. Sofiane Pamart)"]
            },
            {
                titre: "Outro", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f685c1efb8221a2cfea2b7ef",
                category: "single", tracks: ["Outro (feat. Sofiane Pamart)"]
            },
            {
                titre: "Gare fantôme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739a9a6463572d3bfaa91728d1",
                category: "single", tracks: ["Gare fantôme (feat. Jazzy Bazz)"]
            },
            {
                titre: "Une vie et quelques", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f033d410b585b8d7577a6af9",
                category: "project", tracks: ["Senseï", "Périmètre", "Des voix résonnent", "Plaisirs tristes", "2222 (Interlude)", "Coloc à terre (feat. Tragik)", "Cœur brave", "Oubliettes", "Les mains devant les yeux", "A la nôtre"]
            },
            {
                titre: "Senseï", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27345e072d4b8a79b40ac1b05d5",
                category: "single", tracks: ["Senseï"]
            },
            {
                titre: "Périmètre", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273da721bd3559d59e4c6d9575f",
                category: "single", tracks: ["Périmètre"]
            },
            {
                titre: "Tant qu\'on est là", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2738597441fd03488bf52cd6fcb",
                category: "project", tracks: ["Rei", "Exercice", "Iceberg", "Tant qu\'on est là", "La cage", "En marge", "Interlude", "Les vieux de mon âge", "Autour de moi", "Là-haut", "Pauvre roi", "Couleur miroir"]
            },
            {
                titre: "Là-Haut", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2730d9ebe305b9be5bb6b91eb6a",
                category: "single", tracks: ["Là-Haut"]
            },
            {
                titre: "Fenêtre Sur Rue", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273132c7d39c1cd73bfae023790",
                category: "project", tracks: ["Point De Départ", "Ugotrip", "Alors Dites Pas", "Coma Artificiel", "Fenêtre Sur Rue", "Eldorado", "Interlude", "Dojo", "Piège à Loup (feat. Al\'Tarba)", "Intact (feat. Rager, Anraye)", "Dégradation", "Old Boy", "Point Final"]
            },
            {
                titre: "La Salle D\'attente", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b2732e7e923aefcf265da5577937",
                category: "project", tracks: ["Intro Expérimentale", "Qui Sera Sur Le Trône ?", "Maniement Du Mic", "Jungle Urbaine", "Je Suis Pas D\'humeur", "Faut Pas S\'en Faire", "Un Pavé Dans La Marre", "Fair Play Prod", "Interlude", "Pas Le Temps D\'attendre", "Freestyle D\'attente", "L\'habitude De La Biture", "Les 7 Péchés", "On Paiera Pas Pour Pera", "L\'effet Boule De Nerfs", "Pays De Mon Enfance", "Le Cœur Y Est", "Punchliners"]
            },
            {
                titre: "Piège à loup", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b273f608b02c2415f860375b3f94",
                category: "project", tracks: ["Ugotrip", "Piège à loup"]
            },
            {
                titre: "Flaque De Samples", annee: "2008", cover: "https://i.scdn.co/image/ab67616d0000b273892d3de145bed4de87ac2879",
                category: "project", tracks: ["2 Minutes Pour Convaincre", "Objectif Lune", "Tu Crois Savoir", "Le Cul Fermé Et Les Oreilles Ouvertes", "Jamais Au Point Mort", "Interlude", "Pas D\'paradis", "Sélection Naturelle", "Cendrier Plein Et Stylo Vide", "Génération Shit Et Grecs Frites", "2 Minutes Pour Conclure"]
            },
            {
                titre: "La bombe h", annee: "2005", cover: "https://i.scdn.co/image/ab67616d0000b2737f05930021bcc8e2ba1d82e1",
                category: "project", tracks: ["Intro", "La bombe", "L\'étendard brûle", "J\'pisse dans la soupe", "Mots de tête", "Criminels au mic", "Interlude", "Tu croyais quoi?", "Un saut dans le vice", "J\'veux pas grandir"]
            },
        ]
    },
    {
        id: "demiportion",
        nom: "Demi Portion",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/demi_portion.webp",
        chiffres: "98k Abonnés",
        bio: "L'artisan de Sète. Rap sincère et généreux.",
        bioLongue: "Demi Portion, originaire de Sète, est l'un des rappeurs les plus respectés pour ses valeurs humaines. Organisateur du Demi Festival, il défend un rap de partage, loin du bling-bling. Sa plume simple mais touchante et son flow old school font de lui un artiste attachant et incontournable de la scène indépendante.",
        albums: [
            {
                titre: "On n\'oublie pas, pt. 2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732b79b5aae254e57913808f36",
                category: "single", tracks: ["On n\'oublie pas, pt. 2 (feat. Mehsah)"]
            },
            {
                titre: "On n’oublie pas", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273969286be5ba752b7889b3639",
                category: "single", tracks: ["On n’oublie pas"]
            },
            {
                titre: "ÇA AURAIT PU NOUS ARRIVER", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b3820a0ec2388fdf17ab6091",
                category: "single", tracks: ["ÇA AURAIT PU NOUS ARRIVER (feat. Mister You, Marvelous)"]
            },
            {
                titre: "Ça parle de", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273100f07811da3a394690c4267",
                category: "single", tracks: ["Ça parle de"]
            },
            {
                titre: "DEMI PORTION x SPRINTER x HEMS x TUPAN - 2nd Round", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273771f475aed73e7231713d08d",
                category: "project", tracks: ["DEMI PORTION x SPRINTER x HEMS x TUPAN - 2nd Round (feat. Crown, Sprinter, HEMS AUTHENTIC, Tupan)", "DEMI PORTION x SPRINTER x HEMS x TUPAN - 2nd Round - Instrumental (feat. Crown)"]
            },
            {
                titre: "Les monstres", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f5126cd4edda502f46271d6b",
                category: "single", tracks: ["Les monstres (feat. Dooz Kawa)"]
            },
            {
                titre: "Viser le top", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732017070e75c46346c0745141",
                category: "single", tracks: ["Viser le top"]
            },
            {
                titre: "Poids plume", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e79f7b7ec8488238d2e7810a",
                category: "project", tracks: ["Bonjour (feat. DJ Rolxx)", "One peace (feat. Mkash)", "Mon dico royal", "Dans mon délire (feat. Mkash)", "Horizon (feat. DJ Rolxx)", "Adrénaline (feat. DJ Rolxx)", "Gangstarr (feat. Souffrance, Itam)", "16 mesures (feat. DJ Rolxx)", "Poids plume (feat. Beep Beep)", "TMTC (feat. DJ Rolxx)", "Mémoire (feat. Furax Barbarossa, Mehsah)", "Ménélik (feat. Itam)", "Normal (feat. Rim\'K, DJ Rolxx)", "4 couleurs (feat. Mehsah)", "Merci (feat. DJ Rolxx)"]
            },
            {
                titre: "Gangstarr", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273798c616da78aad3a6f7fb77e",
                category: "single", tracks: ["Gangstarr (feat. Souffrance, Itam)"]
            },
            {
                titre: "Mémoire", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739b7992e9dc10e017738c33d9",
                category: "single", tracks: ["Mémoire (feat. Furax Barbarossa, Mehsah)"]
            },
            {
                titre: "Normal", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c97239b7009cc7650fb46d61",
                category: "single", tracks: ["Normal (feat. Rim\'K, DJ Rolxx)"]
            },
            {
                titre: "Adrénaline", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730c40909c4d3dd5ad67feb385",
                category: "single", tracks: ["Adrénaline (feat. DJ Rolxx)"]
            },
            {
                titre: "Mon dico royal", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c9555bce913a612f96c38e3e",
                category: "single", tracks: ["Mon dico royal"]
            },
            {
                titre: "Microphone", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273df41960c74ef509e9bf545c4",
                category: "single", tracks: ["Microphone (feat. Deadi, DJ Rolxx)"]
            },
            {
                titre: "Tourner", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737f88d47f3a15b70733a17bda",
                category: "single", tracks: ["Tourner (feat. Le 3ème Oeil)"]
            },
            {
                titre: "Mots croisés", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27341ad01a986e813bac27579cf",
                category: "project", tracks: ["Visa", "VHS", "Poto", "Symphonie du globe", "Petit prince", "Sous les ponts", "Casablanca (feat. ElGrandeToto)", "Légendaire", "Mots croisés", "Pas de problème", "Épilogue", "Les mêmes", "Passeport (feat. DJ Rolxx)", "Comme d\'habitude"]
            },
            {
                titre: "Casablanca", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27374ad85bb08fbb7a6f7232248",
                category: "single", tracks: ["Casablanca (feat. ElGrandeToto)"]
            },
            {
                titre: "Petit prince", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738f01fe88adf16a440ccccdc0",
                category: "single", tracks: ["Petit prince"]
            },
            {
                titre: "Donne-moi", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e6dc78c9ea3f12f1aca3ade6",
                category: "single", tracks: ["Donne-moi (feat. Brav)"]
            },
            {
                titre: "VHS", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273916f3a5045bf87eca73562c8",
                category: "single", tracks: ["VHS"]
            },
            {
                titre: "Rêveur", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273aa1fc43472654bc3857e4431",
                category: "single", tracks: ["Rêveur (feat. Bakar)"]
            },
            {
                titre: "Ninja", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731056e8c7349cb76785ca2389",
                category: "single", tracks: ["Ninja (feat. Moro)"]
            },
            {
                titre: "1990", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c8f4731b3a16b77058cedd35",
                category: "project", tracks: ["1990", "Trophée", "Sans commentaire", "Phénoménal", "Faire mieux", "Le choix (feat. Mokless)", "Ne lâche pas", "J\'ai vu", "La vie"]
            },
            {
                titre: "La bonne école", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2739fa8f1abb3f40ed1cf2281da",
                category: "project", tracks: ["7 sur sète", "La bonne école", "Tour du monde (feat. Féfé)", "Mon dico, vol. 5", "Une vie particulière, vol. 2", "Ce qu\'il nous reste (feat. Bigflo & Oli)", "Poignée de punchlines, vol. 3", "La lettre (feat. Furax Barbarossa)", "Motivé - Inter-récréation", "Non stop (feat. Davodka)", "Les hommes", "L\'addition (feat. Grand Corps Malade)", "Rétro", "Gorilles (feat. Scylla)", "Alerte", "Lyricistes (feat. Rocé)", "Flashback"]
            },
            {
                titre: "J\'ferai pas", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27398ebe1b51dabb6af83a57c5b",
                category: "single", tracks: ["J\'ferai pas (feat. Lyms)"]
            },
            {
                titre: "Rétro", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730d6de49560af2d1d1bc71ad4",
                category: "single", tracks: ["Rétro"]
            },
            {
                titre: "Super héros", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273f7b247350a363ba9539369cd",
                category: "project", tracks: ["Toute ma vie", "Super héros", "La sirène", "Retour aux sources", "Arrête", "L\'industrie du risque", "Comme un prince (feat. IAM)", "Bloqué", "Poignée de punchlines v2", "Salam", "Get Up", "Sérieux", "Une toupie", "Toujours"]
            },
            {
                titre: "Salam", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736ffcc14bb5df15fdc95ce1f9",
                category: "single", tracks: ["Salam"]
            },
            {
                titre: "La sirène", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2737d8f1eb445da355a188564d1",
                category: "single", tracks: ["La sirène"]
            },
            {
                titre: "2 chez moi", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273f0553e9883c30d1adec4a40a",
                category: "project", tracks: ["Souvenir", "2 chez moi", "Demi Pablo", "Pardonner (feat. Kery James)", "Mon dico IV", "Un long voyage", "Magnifique (feat. Oxmo Puccino)", "Ici la terre", "Interlutte", "Besoin d\'air (feat. Sprinter, Monotof)", "La vie de rêve", "Un jour viendra (feat. Furax Barbarossa)", "Autopsie", "Planète Rash (feat. Scylla, Davodka, Youssef Swatt\'s, Sprinter, Jeff Le Nerf, Swift Guad, JP Manova, Hexaler, Monotof, Dooz Kawa)", "Danse avec les loups", "Fonky Freestyle", "Au coin de ma rue", "Une fin heureuse"]
            },
            {
                titre: "Dragon Rash", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273e3c81a0149ad0439f1fb1d5e",
                category: "project", tracks: ["De ma planète", "Dragon Rash", "Demi-parrain", "Est-ce que ?", "Loin de toi (feat. Blata)", "Je n\'ai pas voulu", "Une chaise pour deux (feat. Oxmo Puccino)", "Poignée de punchlines", "Interfusion", "Les nôtres (feat. Sprinter)", "Le dernier chevalier", "On rap fort (feat. Jeff Le Nerf, Neka)", "Parti de rien", "Mon dico - Remix Clan (feat. disiz, Ol Zico, Imed, R.E.D.K., Mehdiathèque, Mokless, Koma, Sprinter, Taieb, Swift Guad, Volts Face, Aketo)", "Jusqu\'ici tout va bien", "Demi paix", "Laisse pas tomber", "Peur"]
            },
            {
                titre: "Les histoires", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27375370e44b61466dcbd17c8c5",
                category: "project", tracks: ["Real Hip Hop", "Doucement", "Jusqu\'à quand", "La grande vie", "Coupable", "Mauvais garçon (feat. Kacem Wapalek)", "Avec plaisir", "Mourir pour ses idées", "Demi and Clyde", "Encore (feat. Sprinter)", "Si Dieu veut", "100 personnes (feat. DJ Rolex)", "Le smile", "Comme un rash", "Les histoires"]
            },
            {
                titre: "Petit bonhomme", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273964f20d6766b80227b94943c",
                category: "project", tracks: ["Petit bonhomme", "Lyrics sur mesure(s) (feat. Monotof, Sprinter, Mehdi)", "Mon dico pt.3", "On en revient au même", "Rien d\'plus (feat. Imed, Azoie La Race)", "On dort", "Ils voudront savoir (feat. Sprinter)", "Continue d\'y croire"]
            },
            {
                titre: "Sous le choc, vol. 2", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273980cf46a364cae77a449c45a",
                category: "project", tracks: ["Hip hop", "Laisse moi V2 (feat. Mystik, Sprinter)", "Ne t\'inquiète pas (feat. R.CAN)", "Juste avant les histoires...", "Dans la légende (feat. Koma)"]
            },
            {
                titre: "Artisan du Bic", annee: "2011", cover: "https://i.scdn.co/image/ab67616d0000b2731726c7f09c4f3923c883b480",
                category: "project", tracks: ["Artisan du Bic", "Mon Dico Chapitre 2", "On m\'a dit", "Le Droit de Tuer", "Entre Dedans et Dehors", "Toujours Ensemble (feat. Sprinter)", "Interlude", "Ma Chaîne Mosaïque", "Rêve de Gosse", "Besoin d\'Aide", "Une Vie Particulière", "De la Place pour Elle", "Pour Une Fois", "L\'Image", "Mes Outils"]
            },
            {
                titre: "Sous le choc", annee: "2010", cover: "https://i.scdn.co/image/ab67616d0000b2738354bc5249047470273680a3",
                category: "project", tracks: ["Laisse moi", "Sous le choc", "Déblocage (feat. Mehdi)", "Une vie particulière", "En restant vrais (feat. R.E.D.K.)", "La vérité", "Non merci"]
            },
            {
                titre: "8 titres et demi", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b273b284d02843b70e0e8cf30b32",
                category: "project", tracks: ["Mon dico", "Tu veux savoir", "Sincèrement", "Marre", "J\'ai du mal à vivre (feat. Le Vrai Ben de Puzzle)", "Un point parmi les autres", "La route est longue", "Sauve qui peut (feat. Chinois)", "Live 1997-1998"]
            },
            {
                titre: "8 titres et demi, vol. 2", annee: "2009", cover: "https://i.scdn.co/image/ab67616d0000b27345a17fcd6cf202bf72545ebb",
                category: "project", tracks: ["Mon A.B.C", "Arrêter de dire", "Le ghetto humanitaire", "Ouvrir les yeux", "Ça sert à quoi", "Chacun sa vie", "J\'ai vu (feat. Utopie)", "Passe le relai, vol.1 (feat. Sprinter, Les Grandes Gueules)", "L\'attitude - Bonus"]
            },
        ]
    },
    {
        id: "souffrance",
        nom: "Souffrance",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/souffrance.webp",
        chiffres: "32k Abonnés",
        bio: "Le kickeur de Montreuil. La réalité crue sans filtre.",
        bioLongue: "Souffrance, membre du groupe L'Uzine, est un puriste du rap. Il raconte la réalité crue de la rue et du travail précaire avec une précision chirurgicale. Son flow posé et ses textes sans artifice frappent par leur justesse, faisant de lui l'un des meilleurs narrateurs du quotidien en banlieue.",
        albums: [
            {
                titre: "HIVER AUTOMNE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735902f5d919c079ef2cadeeac",
                category: "project", tracks: ["HIVER AUTOMNE", "MIROIR DÉFORMANT", "BIZON (feat. Chilly Gonzales)", "MEILLEUR (feat. ISHA)", "PUISSANCE EN BARS", "COMPTE DOUBLE (feat. Soprano)", "LES MOYENS", "TANGO", "BARBECUE EN HIVER (feat. Chilly Gonzales)", "MILLIARDAIRE EN EUROS", "KING SIZE", "À PLUS TARD (feat. Jewel Usain)", "LE REPOS DES BRAVES"]
            },
            {
                titre: "À PLUS TARD", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27399e47caae7ad1944bb3033dd",
                category: "single", tracks: ["À PLUS TARD (feat. Jewel Usain)"]
            },
            {
                titre: "COMPTE DOUBLE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27363a216942271884d0ff99f20",
                category: "single", tracks: ["COMPTE DOUBLE (feat. Soprano)"]
            },
            {
                titre: "BARBECUE EN HIVER", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739eb346372c6d2ab6d0d89768",
                category: "single", tracks: ["BARBECUE EN HIVER (feat. Chilly Gonzales)"]
            },
            {
                titre: "MEILLEUR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27389b40d285ce5e893dde01f1d",
                category: "single", tracks: ["MEILLEUR (feat. ISHA)"]
            },
            {
                titre: "BIZON", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273483f794fab27368e7b7a9af1",
                category: "single", tracks: ["BIZON (feat. Chilly Gonzales)"]
            },
            {
                titre: "Poussez vous 5", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273691bf95137d3c19db149011f",
                category: "single", tracks: ["Poussez vous 5 (feat. Lacraps, Limsa d\'Aulnay)"]
            },
            {
                titre: "ÉLÉPHANT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730291ce0af2adaef993c1957b",
                category: "project", tracks: ["Death Metal", "Ganondorf", "Lambada"]
            },
            {
                titre: "Death Metal", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730b2684d180f3369a60035dd5",
                category: "single", tracks: ["Death Metal"]
            },
            {
                titre: "Gangstarr", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273798c616da78aad3a6f7fb77e",
                category: "single", tracks: ["Gangstarr (feat. Demi Portion, Itam)"]
            },
            {
                titre: "Eau de source", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27322e2eba9f3f5066cce5a636d",
                category: "project", tracks: ["Eau de source", "Authentique", "Khalass", "Appuie-tête (feat. Zkr)", "Score", "Tempête", "Be water (Interlude) (feat. Soul Intellect)", "Rats des villes (feat. Oxmo Puccino)", "Louvre", "Métro", "Voraces (feat. Vald)", "Ciel gris kebab grill", "Pendu"]
            },
            {
                titre: "Voraces", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27313b026d654a50f380444ef01",
                category: "single", tracks: ["Voraces (feat. Vald)"]
            },
            {
                titre: "Rats des villes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736599f3defc7bb1a54d2c0817",
                category: "single", tracks: ["Rats des villes (feat. Oxmo Puccino)"]
            },
            {
                titre: "Appuie-tête", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ae82a7fcc7ef3cb2e7729c54",
                category: "single", tracks: ["Appuie-tête (feat. Zkr)"]
            },
            {
                titre: "Khalass", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273611cf2fd13a2dc2bb6d1e6a0",
                category: "single", tracks: ["Khalass"]
            },
            {
                titre: "Représente", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27301873cc45748fcfd6070eed3",
                category: "single", tracks: ["Représente (feat. Ol Kainry)"]
            },
            {
                titre: "La bac et les moeurs", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f3aefeb481c5fd3d9dc182a9",
                category: "single", tracks: ["La bac et les moeurs (feat. A2h)"]
            },
            {
                titre: "GOAT (feat. Souffrance)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27364eede389671bedc62a2d04a",
                category: "feat", tracks: ["GOAT (feat. Souffrance)"]
            },
            {
                titre: "Tour de magie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27328e7be6ee112f511bea1204c",
                category: "project", tracks: ["J\'ouvre le feu", "Tour de magie", "Singe savant", "Solide", "Matrice (feat. Cenza, Prince Waly)", "Playback", "Comme en 2009", "Rive", "Vendredi 17 juin 2005", "Hall 26", "Sourire (feat. Spectacular)", "Bipolaire", "Plan annulé", "Kill them", "Symphonie (feat. Limsa d\'Aulnay, MAXKDCH)", "Au milieu des ombres"]
            },
            {
                titre: "Symphonie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27379e5dba437561c31d20c99b4",
                category: "single", tracks: ["Symphonie (feat. Limsa d\'Aulnay, MAXKDCH)"]
            },
            {
                titre: "Sourire", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273748e35bcdba9d85cc94c9f96",
                category: "single", tracks: ["Sourire (feat. Spectacular)"]
            },
            {
                titre: "Matrice", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c1ad343b4a9bbe812c550f36",
                category: "single", tracks: ["Matrice (feat. Cenza, Prince Waly)"]
            },
            {
                titre: "Kill them", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730e93467326b311ca9b06edd8",
                category: "single", tracks: ["Kill them"]
            },
            {
                titre: "Baba Cool", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e09aeadab2c391dce4f75dca",
                category: "single", tracks: ["Baba Cool (feat. Zikri)"]
            },
            {
                titre: "Hall 26", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273519939a02def9407e2557398",
                category: "single", tracks: ["Hall 26"]
            },
            {
                titre: "J\'ouvre le feu", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738928073c199dfa83aef16aa4",
                category: "single", tracks: ["J\'ouvre le feu"]
            },
            {
                titre: "Singe savant", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d52eac1430d6c04188132836",
                category: "single", tracks: ["Singe savant"]
            },
            {
                titre: "Nouvelle géné", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27341f61916a16d64d647df7752",
                category: "single", tracks: ["Nouvelle géné (feat. Seth Gueko)"]
            },
            {
                titre: "Top Ten", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732aec062e13ac1693f249dfaa",
                category: "single", tracks: ["Top Ten (feat. James Digger, Cenza)"]
            },
            {
                titre: "Mash Up", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273dd0f0bf804d49b89bb5fbbb4",
                category: "single", tracks: ["Mash Up (feat. Rocca, DJ Duke)"]
            },
            {
                titre: "Faut qu\'on s\'en aille", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e60650d904dc61de2b9f85ac",
                category: "single", tracks: ["Faut qu\'on s\'en aille (feat. Keny Arkana, Ivory, Oscar, El Kid, 2Bang, Jul, KLS, Zak, Diego, Le classico organisé)"]
            },
            {
                titre: "Tranche de vie", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b031ceefb12f96c145fc7524",
                category: "project", tracks: ["Intro", "Périphérique", "Étoiles filantes", "Van Damme", "Café", "Mauvaises nouvelles", "Meurtre", "Lossa", "A.M.D", "93Ème zone", "Danny Glover", "Bruce Wayne", "Jeanne d\'Arc", "Simba", "Mathématiques", "Rap assassin brut", "Racialiste", "Bicraveur Blues", "Dernier texte", "Outro"]
            },
            {
                titre: "Racialiste", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273506d1ea56947b16f25958349",
                category: "single", tracks: ["Racialiste"]
            },
            {
                titre: "Etoiles filantes", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f302eec3e7b4f98609bab489",
                category: "single", tracks: ["Étoiles filantes"]
            },
            {
                titre: "Noctambus", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f8bd699d0104697e05f91046",
                category: "project", tracks: ["Aveuglés ( Intro ) - [ 2016 ]", "Montreuil States of Mind - ( 2016 )", "Freestyle 2007 + Impro Hall26 ( 2005 )", "Poisson pané ( 2014 )", "L\'improbable ( 2014 )", "Customers ( 2016 )", "Sudiste ( 2020 )", "Anamnèse ( 2020 ) [ Prod Misère Record ]", "Culture ( 2020 ) X Les avaries d\'une vie [ 2008 ]", "Pirate ( 2020 )", "Dans mon élément ( 2011 )", "#31# ( 2015 )", "Ça fait ( 2019 )", "32 Mesures de guerrier ( 2019 )", "Rafale de Crack ( 2014 )", "Pangolin ( 2020 )", "Freestyle 2007 Part II", "Grenazzik ( 2010 )", "Freestyle 2007 Part III", "Souffrance VS Pookie ( 2020 )", "Wesh narvalo ( 2015 )", "€ ( 2017 )", "Jamais Assez ( 2020 )", "Matin ( 2020 )", "Peau de banane ( 2020 )", "Freestyle 2007 Part IV X Freestyle 2006", "Double Kiss ( 2020 )", "J\'prends la vie comme elle est ( 2014 )", "Opération dragon"]
            },
            {
                titre: "Opération dragon", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27315881eaba8f951986acc5f28",
                category: "single", tracks: ["Opération Dragon ( 2020 )"]
            },
            {
                titre: "Vers quotidiens", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273be5f29e0dfa57174688de623",
                category: "single", tracks: ["Vers quotidiens (feat. Jungle Jack)"]
            },
            {
                titre: "Cités d\'or", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273bf928b1d7ad69fe29d992a3f",
                category: "project", tracks: ["Cités d\'or", "Ntm", "Messe"]
            },
            {
                titre: "Pangolin", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c54fad7d5313789981d09d55",
                category: "single", tracks: ["Pangolin"]
            },
            {
                titre: "Customers", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2733ec92485f73c1818d04f977b",
                category: "single", tracks: ["Customers"]
            },
            {
                titre: "Peau de banane", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27309826726e095be49d033ca53",
                category: "single", tracks: ["Peau de banane"]
            },
            {
                titre: "Sudiste", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735f0f39636219346c892cbbbe",
                category: "single", tracks: ["Sudiste"]
            },
            {
                titre: "Le peuple a faim", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273213b62928ae4f9c8e91226d1",
                category: "project", tracks: ["Intro (feat. DJ Keshkoon)", "Ça fait longtemps", "Sous les pavés", "Platinium", "Chaque fois que j\'pose", "Paire de 2"]
            },
        ]
    },
    {
        id: "isha",
        nom: "Isha",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/isha.webp",
        chiffres: "3k Abonnés",
        bio: "Le sage belge. Une plume mature et introspective.",
        bioLongue: "Isha est un vétéran de la scène belge qui a connu une seconde jeunesse. Son rap est empreint de maturité, racontant les épreuves de la vie avec recul et sagesse. La série 'La Vie Augmente' a révélé un artiste complet, capable d'allier technique, émotion et réflexion sur la société.",
        albums: [
            {
                titre: "Berlingo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735688687c93f529d8b1ecaac9",
                category: "single", tracks: ["Berlingo (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "Fin de ce monde", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b143cdef9141aa0d3ed0d914",
                category: "single", tracks: ["Fin de ce monde (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "Drôle d\'oiseau", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f30703081cf6f4ddd672198a",
                category: "project", tracks: ["Capitaine flam", "La vie à Brenda (feat. Dinos)", "Caravane Pt. 2", "Un dernier café à Cergy", "Raz de marée (feat. Green Montana)", "Caesars palace", "F*ck le mainstream", "Benzo blanche", "Drôle d\'oiseau"]
            },
            {
                titre: "Raz de marée (feat. Green Montana)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731d519d0af99dbdde9c2c3863",
                category: "single", tracks: ["Raz de marée (feat. Green Montana)"]
            },
            {
                titre: "La vie à Brenda (feat. Dinos)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735ce1caa31773d1b40d8f5a66",
                category: "single", tracks: ["La vie à Brenda (feat. Dinos)"]
            },
            {
                titre: "thalys", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738207cf9e5603c6bc151b3fbc",
                category: "single", tracks: ["thalys (feat. Médine)"]
            },
            {
                titre: "MURDER INC", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273be4dc9484ec2cdd125cd9991",
                category: "single", tracks: ["MURDER INC (feat. Tedax Max, Ismayyyel)"]
            },
            {
                titre: "MEILLEUR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27389b40d285ce5e893dde01f1d",
                category: "single", tracks: ["MEILLEUR (feat. Souffrance)"]
            },
            {
                titre: "Bande Originale (feat. ISHA)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b709a522701ff2f1f1c90781",
                category: "feat", tracks: ["Bande Originale (feat. ISHA)"]
            },
            {
                titre: "Bitume Caviar (vol.1)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733b8e38ff6078b668620ec1d0",
                category: "project", tracks: ["Clio 4 (feat. Limsa d\'Aulnay)", "Le chant des cigales (feat. Limsa d\'Aulnay)", "Inna di Club (feat. Limsa d\'Aulnay)", "Lotissement (feat. Limsa d\'Aulnay)", "Le plan A (feat. Limsa d\'Aulnay)", "Le plan B (feat. Limsa d\'Aulnay)", "Tard le soir (feat. Limsa d\'Aulnay)", "Jimmy Fallon (feat. Limsa d\'Aulnay)", "A mes yeux (feat. Limsa d\'Aulnay)", "Flûtes recyclables (feat. Limsa d\'Aulnay, Caballero & JeanJass)", "SRSD (feat. Limsa d\'Aulnay)", "But en or (feat. Limsa d\'Aulnay)", "Je viens de là (feat. Limsa d\'Aulnay)", "Dans la tête - Bonus Track (feat. Limsa d\'Aulnay)", "CR600 - Bonus Track"]
            },
            {
                titre: "dashboard", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d922ee2eb42e7f6fbe7a2b35",
                category: "single", tracks: ["dashboard (feat. Green Montana)"]
            },
            {
                titre: "HAUT LES MAINS (feat. ISHA)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739086c2e0353feac3fdc5ca29",
                category: "feat", tracks: ["HAUT LES MAINS (feat. ISHA)"]
            },
            {
                titre: "Flûtes recyclables", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732164933ed1ec2eb940cb7348",
                category: "single", tracks: ["Flûtes recyclables (feat. Limsa d\'Aulnay, Caballero & JeanJass)"]
            },
            {
                titre: "Inna di Club", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27352bbb224b03ec04a786b98e3",
                category: "single", tracks: ["Inna di Club (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "Scanner", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b6a07b0efe3729af4136b5b3",
                category: "single", tracks: ["Scanner (feat. Esso Luxueux)"]
            },
            {
                titre: "Gangsta Shit", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27343a9f84b5a103cbc0b341717",
                category: "single", tracks: ["Gangsta Shit (feat. Aketo)"]
            },
            {
                titre: "Entretien avec un OG", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737ec623cd05ccb5b104ed7fdf",
                category: "single", tracks: ["Entretien avec un OG (feat. A2h)"]
            },
            {
                titre: "Père Noël", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734cb77bf3f6c3baeb776aaf23",
                category: "single", tracks: ["Père Noël (feat. Georgio, Chanje, CDL)"]
            },
            {
                titre: "Si tu savais", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27351cf07f3cd2651e7f89a0458",
                category: "single", tracks: ["Si tu savais (feat. Walk in Paris, Gracy Hopkins)"]
            },
            {
                titre: "Chicha Ski Nautique", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27354c282fd1dac4c4bcfd62fe3",
                category: "single", tracks: ["Chicha Ski Nautique (feat. Walk in Paris, Laylow)"]
            },
            {
                titre: "Fourmilière", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737b9eb08b5419ac3e17fb2dfa",
                category: "single", tracks: ["Fourmilière (feat. Primero)"]
            },
            {
                titre: "Labrador bleu", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27358e6dafc4dfe8d38306b4308",
                category: "project", tracks: ["Intro", "Tueur de dragon (Vent)", "Étage (feat. OG GOLD)", "Modou (Feu) [feat. Limsa d’Aulnay]", "La familia", "On sourit pas sur les photos", "À plat ventre", "FIFA", "La réincarnation de Biggie", "Royauté (Eau)", "Gros spectacle", "Meilleur karaté (feat. Caballero et JeanJass)", "Balle dans la tête (Terre)", "Outro", "Labrador bleu"]
            },
            {
                titre: "On sourit pas sur les photos", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730d462a2fa63a6bb2dceceea2",
                category: "single", tracks: ["On sourit pas sur les photos"]
            },
            {
                titre: "La réincarnation de Biggie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b42a6c24b35f3ddfc5bf9df9",
                category: "single", tracks: ["La réincarnation de Biggie"]
            },
            {
                titre: "Gambinos", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273163e32775f0439a6e78fe8b9",
                category: "single", tracks: ["Gambinos (feat. Caballero & JeanJass)"]
            },
            {
                titre: "FAITES PAS CHIER J\'PREPARE UN ALBUM", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e1cb00ca10736eda34da44a4",
                category: "project", tracks: ["RECHARGER", "T’ES PAS LE SEUL", "L’ENTERREMENT D’UN VOYOU", "BLAZI BLAZA", "MAUDIT", "ENCORE ET TOUJOURS", "J’DORS BIEN (feat. Hatik)", "OUTRO"]
            },
            {
                titre: "Gimmick", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b6d9f4d8fcd50a8b06ae9e04",
                category: "single", tracks: ["Gimmick (feat. La Miellerie, Nixon)"]
            },
            {
                titre: "Drippin", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273445999faac91f9b9496cc30f",
                category: "single", tracks: ["Drippin (feat. Golgoth)"]
            },
            {
                titre: "Fout la merde", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c8b5fad3472abc39d7ff8f5d",
                category: "single", tracks: ["Fout la merde (feat. Zesau, Djalito)"]
            },
            {
                titre: "Une maman qui pleure (feat. Jok\'Air & Key Largo)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273fb730778eab929c220ec34b4",
                category: "single", tracks: ["Une maman qui pleure (feat. Jok\'Air & Key Largo)"]
            },
            {
                titre: "Quand même", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27396f66d92f2f418376f4887f6",
                category: "single", tracks: ["Quand même (feat. Caballero & JeanJass)"]
            },
            {
                titre: "Ailleurs (feat. Isha)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273765c169284b8e162eeb8c483",
                category: "feat", tracks: ["Ailleurs (feat. Isha)"]
            },
            {
                titre: "La vie augmente, Vol.3", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731670ddf236cd50f995b0ce9e",
                category: "project", tracks: ["Durag", "Bad Boy (feat. Green Montana)", "Tradition (feat. PLK)", "Les magiciens", "Magma", "Chaud devant", "Idole (feat. Dinos)", "Boulot/Baobab", "Coco", "Décorer les murs (feat. Sofiane Pamart)"]
            },
            {
                titre: "Magma", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b467fe9231497b0a03730103",
                category: "single", tracks: ["Magma"]
            },
            {
                titre: "FREESTYLE BOOSKA-POGO", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273eb5edd6d1b4ca232a2d5c087",
                category: "single", tracks: ["FREESTYLE BOOSKA-POGO"]
            },
            {
                titre: "Idole", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ad3c67661c07b9d8eb458c4c",
                category: "single", tracks: ["Idole (feat. Dinos)"]
            },
            {
                titre: "Durag", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733887232a6e7bbed547bfac73",
                category: "single", tracks: ["Durag"]
            },
            {
                titre: "Clope sur la lune", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273eb3615f5988d8c89dc011b50",
                category: "single", tracks: ["Clope sur la lune (feat. Scylla, Sofiane Pamart)"]
            },
            {
                titre: "La vie augmente, Vol. 2", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2731d3f20d0a9be55b758c816a9",
                category: "project", tracks: ["Justifié", "Au grand jamais", "Tosma (feat. Caballero & JeanJass)", "243 Mafia (feat. Makala)", "Mp2m", "L\'augmentation - Pt. 2", "Domamamaï", "Caravane (feat. Zwangere Guy)", "Rien", "La maladie mangeuse de chair"]
            },
            {
                titre: "Définition d\'un OG", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27321ccdc44ace85e364246aeb7",
                category: "single", tracks: ["Définition d\'un OG"]
            },
        ]
    },
    {
        id: "limsa",
        nom: "Limsa d'Aulnay",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/limsa_daulnay.webp",
        chiffres: "53k Abonnés",
        bio: "La fluidité incarnée. Le rappeur le plus cool du 93.",
        bioLongue: "Limsa d'Aulnay est apprécié pour son naturel et son flow décontracté. Proche de l'entourage de Georgio ou Nekfeu, il a pris son temps pour éclore en solo. Ses projets 'Logique' montrent un rappeur technique mais accessible, qui raconte des histoires de quartier avec humour et finesse.",
        albums: [
            {
                titre: "Berlingo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735688687c93f529d8b1ecaac9",
                category: "single", tracks: ["Berlingo (feat. ISHA, Limsa d\'Aulnay)"]
            },
            {
                titre: "Fin de ce monde", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b143cdef9141aa0d3ed0d914",
                category: "single", tracks: ["Fin de ce monde (feat. ISHA, Limsa d\'Aulnay)"]
            },
            {
                titre: "AUSTIN POWERS (feat. Limsa d\'Aulnay)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27398c13e45fb63d19c34aa9bf3",
                category: "feat", tracks: ["AUSTIN POWERS (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "20M³", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273142e0f44e2b8e05589716627",
                category: "single", tracks: ["20M³ (feat. Infinit\', Limsa d\'Aulnay)"]
            },
            {
                titre: "Bitume Caviar (vol.1)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733b8e38ff6078b668620ec1d0",
                category: "project", tracks: ["Clio 4 (feat. ISHA, Limsa d\'Aulnay)", "Le chant des cigales (feat. ISHA, Limsa d\'Aulnay)", "Inna di Club (feat. ISHA, Limsa d\'Aulnay)", "Lotissement (feat. ISHA, Limsa d\'Aulnay)", "Le plan A (feat. ISHA, Limsa d\'Aulnay)", "Le plan B (feat. ISHA, Limsa d\'Aulnay)", "Tard le soir (feat. ISHA, Limsa d\'Aulnay)", "Jimmy Fallon (feat. ISHA, Limsa d\'Aulnay)", "A mes yeux (feat. ISHA, Limsa d\'Aulnay)", "Flûtes recyclables (feat. ISHA, Limsa d\'Aulnay, Caballero & JeanJass)", "SRSD (feat. ISHA, Limsa d\'Aulnay)", "But en or (feat. ISHA, Limsa d\'Aulnay)", "Je viens de là (feat. ISHA, Limsa d\'Aulnay)", "Dans la tête - Bonus Track (feat. Limsa d\'Aulnay)", "CR600 - Bonus Track (feat. ISHA)"]
            },
            {
                titre: "Poussez vous 5", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273691bf95137d3c19db149011f",
                category: "single", tracks: ["Poussez vous 5 (feat. Lacraps, Limsa d\'Aulnay, Souffrance)"]
            },
            {
                titre: "Si tu savais", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27380ee1e3351b2d172357ea9fe",
                category: "single", tracks: ["Si tu savais (feat. Soprano, Limsa d\'Aulnay)"]
            },
            {
                titre: "TACOS", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d2cd6bae7e794f717cac8fa1",
                category: "single", tracks: ["TACOS (feat. Le Juiice, Limsa d\'Aulnay)"]
            },
            {
                titre: "93° FAHRENHEIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a78780f3c25d19541639521f",
                category: "single", tracks: ["93° FAHRENHEIT (feat. Skary, Wysko, Limsa d\'Aulnay)"]
            },
            {
                titre: "Strass", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738aa4572b7ae8487d21699de7",
                category: "single", tracks: ["Strass (feat. Raplume, Tuerie, Limsa d\'Aulnay)"]
            },
            {
                titre: "Flûtes recyclables", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2732164933ed1ec2eb940cb7348",
                category: "single", tracks: ["Flûtes recyclables (feat. ISHA, Limsa d\'Aulnay, Caballero & JeanJass)"]
            },
            {
                titre: "Islam Slimani", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737ec3343c869fb9adf1cf553d",
                category: "single", tracks: ["Islam Slimani (feat. okis, Mani Deïz, Limsa d\'Aulnay)"]
            },
            {
                titre: "P. Diddy", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dc927d78383ad0170cef1597",
                category: "single", tracks: ["P. Diddy (feat. Matou, Limsa d\'Aulnay)"]
            },
            {
                titre: "Inna di Club", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27352bbb224b03ec04a786b98e3",
                category: "single", tracks: ["Inna di Club (feat. ISHA, Limsa d\'Aulnay)"]
            },
            {
                titre: "DOMAINE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736a8ec95130ff25331c7f088b",
                category: "single", tracks: ["DOMAINE (feat. Deen Burbigo, Limsa d\'Aulnay)"]
            },
            {
                titre: "Tout Simplement", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730c059fb163d621f0c31d0ee0",
                category: "feat", tracks: ["Tout Simplement (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "S.D.E (El Sombrero Remix)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f3e60bb960c3e5f5dac15b03",
                category: "feat", tracks: ["S.D.E - El Sombrero Remix (feat. Limsa d\'Aulnay, El Sombrero)"]
            },
            {
                titre: "Trucs sentimentaux", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739dc12239fc5ff9859a5de66b",
                category: "single", tracks: ["Trucs sentimentaux (feat. BEN plg, Limsa d\'Aulnay)"]
            },
            {
                titre: "Taxi 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735174d1454a30f7142ffd3a1f",
                category: "single", tracks: ["Taxi 2 (feat. Keroué, Limsa d\'Aulnay)"]
            },
            {
                titre: "Bougies", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730eb902dd7f9eddbd9c5013bd",
                category: "single", tracks: ["Bougies (feat. ABSOLEM, Limsa d\'Aulnay)"]
            },
            {
                titre: "Design cauchemardesque", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739234ae85a008e0100aa9ea44",
                category: "single", tracks: ["Design cauchemardesque (feat. Alkpote, Ouss Wayne, Limsa d\'Aulnay)"]
            },
            {
                titre: "Tornado", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27394a82ba1821a09be387eaca1",
                category: "single", tracks: ["Tornado (feat. Caballero & JeanJass, Enima, Limsa d\'Aulnay)"]
            },
            {
                titre: "Régal", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b53f384bb98b27b09ab43d89",
                category: "single", tracks: ["Régal (feat. Aketo, Limsa d\'Aulnay)"]
            },
            {
                titre: "Répondeur", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a160fd5444f4305a836cf366",
                category: "single", tracks: ["Répondeur (feat. Jeune Mort, Limsa d\'Aulnay)"]
            },
            {
                titre: "Symphonie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27379e5dba437561c31d20c99b4",
                category: "single", tracks: ["Symphonie (feat. Souffrance, Limsa d\'Aulnay, MAXKDCH)"]
            },
            {
                titre: "Logique, Pt. 3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273275bb6c7f912e6640e215ea4",
                category: "project", tracks: ["Faux Départ (feat. Limsa d\'Aulnay)", "J\'me sens Fou ce Soir (feat. Limsa d\'Aulnay)", "Paradis Vide (feat. Limsa d\'Aulnay)", "Footballeur (feat. Limsa d\'Aulnay)", "Comme la Lune (feat. Limsa d\'Aulnay)", "Black Room - Bonus Track (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "Wu-Tang", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b36b2c9b2eccc0156871eba3",
                category: "single", tracks: ["Wu-Tang (feat. VEERUS, Limsa d\'Aulnay)"]
            },
            {
                titre: "Gunners", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b67fd62af6def0b6d074175f",
                category: "single", tracks: ["Gunners (feat. Mani Deïz, Flynt, Limsa d\'Aulnay, Ol Zico)"]
            },
            {
                titre: "Adriano", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bd6bf9ad92bf77b780fc48c7",
                category: "single", tracks: ["Adriano (feat. Caballero & JeanJass, Limsa d\'Aulnay)"]
            },
            {
                titre: "Mercedes rose", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731c5304b477bc9696ad3cff9b",
                category: "single", tracks: ["Mercedes rose (feat. Butter Bullets, Limsa d\'Aulnay)"]
            },
            {
                titre: "C\'est chaud (Remix)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a0ddf3221f5f8643b503e6d0",
                category: "single", tracks: ["C\'est chaud - Remix (feat. 6rano, Sopico, Limsa d\'Aulnay, shut, Rozo, Nadji Dinero, John Dess, Double Zulu, B.e.LaBeu)"]
            },
            {
                titre: "Logique, Pt. 2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27351283670359a2e7ddb61906b",
                category: "project", tracks: ["Seul Two (feat. Limsa d\'Aulnay)", "ASB (feat. Limsa d\'Aulnay)", "Starting Block (feat. Limsa d\'Aulnay, ISHA)", "Ca M\'arrange (feat. Limsa d\'Aulnay, JeanJass)", "Le Ptit Limsa (feat. Limsa d\'Aulnay)"]
            },
            {
                titre: "Logique, Pt. 1", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273bbe2c603d23373e34079fc1f",
                category: "project", tracks: ["4 Décembre (feat. Limsa d\'Aulnay)", "Attiré Par La Night (feat. Limsa d\'Aulnay)", "Lost Highway (feat. Limsa d\'Aulnay)", "Avec Moi (feat. Limsa d\'Aulnay)", "Duper (feat. Limsa d\'Aulnay)"]
            },
        ]
    },
    {
        id: "furax",
        nom: "Furax Barbarossa",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/furax_barbarossa.webp",
        chiffres: "53k Abonnés",
        bio: "L'ogre toulousain. Une voix rocailleuse et des textes sombres.",
        bioLongue: "Furax Barbarossa est une légende de l'underground. Reconnaissable à sa voix rauque et puissante, il dépeint un univers sombre et torturé. Ses rimes multisyllabiques et son flow technique servent des textes d'une grande richesse littéraire, faisant de lui l'un des piliers du rap indépendant français.",
        albums: [
            {
                titre: "Portes du désert", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c7a831c80f8b15c6a8523922",
                category: "project", tracks: ["10 jours, 10 nuits (feat. Scylla)", "Portes du désert (feat. Scylla)", "Gardiens pt.1 (feat. Scylla)", "Nouveau monde (feat. Scylla)", "La reine des ombres (feat. Scylla)", "Memphis (feat. Scylla)", "Lettre au Roi (feat. Scylla)", "Verre de sable (feat. Scylla)", "Mirages (feat. Scylla)", "Terre brûlée (feat. Scylla)", "Interlude tkeh tkeh (feat. Scylla)", "Caravanes (feat. Scylla)", "Loin (feat. Scylla)", "Gardiens pt.2 (feat. Scylla)", "Promesses (feat. Scylla)", "Lions - Bonus Track (feat. Scylla)", "Tempêtes - Bonus Track (feat. Scylla)"]
            },
            {
                titre: "Nouveau Monde", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738e742e120bfb3fbcb000a8e9",
                category: "single", tracks: ["Nouveau monde (feat. Scylla)"]
            },
            {
                titre: "10 jours, 10 nuits", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736e4cf8606e50859dbc00ee38",
                category: "single", tracks: ["10 jours, 10 nuits (feat. Scylla)"]
            },
            {
                titre: "Mauvaise augure", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273dc390acd1f568dc1d6462ae2",
                category: "project", tracks: ["Mauvaise augure (feat. Grim Reaperz, 10vers, Abrazif, Bastard Prod)", "Mauvaise augure - Instrumental (feat. Grim Reaperz)"]
            },
            {
                titre: "3 lettres", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273815513c5122a8a3360c52a36",
                category: "project", tracks: ["Ensemble (feat. Mehsah)", "3 lettres (feat. Will LCK, Kanaye, Mehsah)", "3 lettres - Instrumental (feat. Mehsah)"]
            },
            {
                titre: "FURAX BARBAROSSA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732974a400b07a87014f7b04b6",
                category: "single", tracks: ["FURAX BARBAROSSA (feat. Tha Manz, SLD Prod)"]
            },
            {
                titre: "Mémoire", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739b7992e9dc10e017738c33d9",
                category: "single", tracks: ["Mémoire (feat. Demi Portion, Mehsah)"]
            },
            {
                titre: "Libérable", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27324c3ecfb7a81c7b66c4d3e05",
                category: "project", tracks: ["79.04", "Parabellum", "Sans pitié", "Shadow", "Tourette", "Lunatique", "Révérence", "Ferrara", "Mac leod", "Survivant", "Protocole commotion", "Dragon (feat. R.E.D.K.)", "8eme passager", "2023", "Valtteri", "Ali", "Bomayé", "Gloire à la reine"]
            },
            {
                titre: "Comme si c\'était le premier", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273513c8c7a4193af04d130bcc2",
                category: "single", tracks: ["Comme si c\'était le premier (feat. Scylla)"]
            },
            {
                titre: "Caravelle (Réédition)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27376660e2f6f357fc0e7fd06da",
                category: "project", tracks: ["Dallas", "Pavillon Noir", "Impitoyable", "Ça m\'fait pas marrer 3", "Milliard", "Elvira & Tonio", "26 degrés 5", "Uragano", "Fumée blanche", "Brise de mer", "Un sol inadapté", "Calypso I", "A l\'amiable (feat. Scylla)", "Porcelaine (feat. Sofiane Pamart)", "Lvdi", "Coliseum", "Caravelle", "Sous la grêle", "Dites au revoir à Printemps", "Sovrano", "Calypso II", "Itinéraire bis (feat. L\'Hexaler)", "Gelati"]
            },
            {
                titre: "Porcelaine", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27358d0a407ba41687d0aa6b91e",
                category: "single", tracks: ["Porcelaine (feat. Sofiane Pamart)"]
            },
            {
                titre: "Meurs tout bas (Remix)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27390fdcfdc3918a5b675a26aaf",
                category: "project", tracks: ["Meurs tout bas - Remix (feat. Seth Gueko, Youssoupha)", "Meurs tout bas (feat. Seth Gueko, Youssoupha)"]
            },
            {
                titre: "Itinéraire bis", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cb1318921346f317cedd608e",
                category: "single", tracks: ["Itinéraire bis (feat. L\'Hexaler)"]
            },
            {
                titre: "A l\'amiable", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a61c4052b6be5bef8f0722b6",
                category: "single", tracks: ["A l\'amiable (feat. Scylla)"]
            },
            {
                titre: "Brise de mer", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c83894b6f0b44bffcbd6d0fd",
                category: "single", tracks: ["Brise de mer"]
            },
            {
                titre: "Uragano", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f70d9c6712aa3c40b9dfd098",
                category: "project", tracks: ["26 degrés 5", "Uragano"]
            },
            {
                titre: "Cha O Ha", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736f9ae753577cb573336face1",
                category: "project", tracks: ["Intro", "Long fleuve tranquille", "Crazy horse", "Flat line", "Marionnettiste"]
            },
            {
                titre: "A l\'isolement (Mixé par DJ Soon)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732a6b4b6307c5e7c6b8500afc",
                category: "project", tracks: ["Intro", "A l\'isolement", "Échec et mat", "En sucette", "Presse mécanique", "Ça va l\'faire", "Sauvagerie", "Combattant", "Résigné", "En balade", "Libérable", "Outro", "Bonus 1 - Le rideau", "Bonus 2 - La compagnie"]
            },
            {
                titre: "Sales mômes", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273ed051c58895c579d9503340a",
                category: "single", tracks: ["Sales mômes (feat. Scylla)"]
            },
            {
                titre: "Mona Lisa", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273756222bf42b9bae55bb8ee21",
                category: "single", tracks: ["Mona Lisa"]
            },
            {
                titre: "Dernier manuscrit", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273f4244b4015e29a77d38778e3",
                category: "project", tracks: ["Légendaire (feat. Jeff Le Nerf)", "Duel (feat. Jeff Le Nerf)", "Conte de fée (feat. Jeff Le Nerf)", "Le mal par le mal (feat. Jeff Le Nerf)", "Virus (feat. Jeff Le Nerf)", "Le préau te cause 3 (feat. Jeff Le Nerf)", "5 majeur (feat. Jeff Le Nerf)", "J\'écris pas pour vivre (feat. Jeff Le Nerf)", "Océans de couleuvres (feat. Jeff Le Nerf)", "Overdose (feat. Jeff Le Nerf)", "La prunelle de nos yeux (feat. Jeff Le Nerf)", "L\'encre de nos veines (feat. Jeff Le Nerf)", "Guérir (feat. Jeff Le Nerf)"]
            },
            {
                titre: "Etat des lieux", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273045730c610692303151aee93",
                category: "project", tracks: ["Intro", "Droit d\'expression", "Ca m\'fait pas marrer", "Toulouse Eldorado", "Fausse mèche", "Clebard sans collier", "La flambe", "Demain c\'est là", "Sans foi ni voie", "J\'lâcherai rien", "Je sais qui sont mes frères", "Zapping", "A boire", "Belzebuth", "On va dans l\'mur", "Equipé", "Ma théorie", "Envie de rien ce soir", "36 mesures pour une misère", "Anonyme mort - Remix"]
            },
            {
                titre: "En bas de l\'échelle (Réédition arrangée)", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273ac707bb9f2569b01d273a7d6",
                category: "project", tracks: ["Intro (feat. DJ Slice)", "Barbarossa", "Rodéo", "Qu\'est ce que tu croyais (feat. Sendo)", "Ca m\'fait pas marrer, pt. 2", "Ni départ..", "Ma profession", "Innocentes victimes et démons", "Le même tarif", "Croisades", "Haute qualité", "Fin 2006", "J\'accepte", "Courrier", "Play off (feat. L\'Hexaler)", "Sous la lune", "...Ni arrivée", "Du rap d\'en bas (feat. DJ Slice)", "Sans regrets (feat. Sendo)"]
            },
            {
                titre: "Jour de deuil", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273330c2d8eac5d851bb755b121",
                category: "project", tracks: ["Bouch\'rie (feat. Reda)", "Jour de deuil (feat. Reda)", "A l\'aube de l\'enfer (feat. Reda)", "La pire des races (feat. Reda)", "Vu d\'ici (feat. Reda)", "Consequence (feat. Reda)", "J\'avoue (feat. Reda)", "Une canette un joint de plus (feat. Reda)", "Juste pour les notres (feat. Reda)", "Le meme pedigré (feat. Reda)", "En bas de l\'echelle (feat. Reda)", "Hymne de guerrier (feat. Reda)", "C\'est ça l\'rap? (feat. Reda)", "Le 11éme jour (feat. Reda)", "La machine (feat. Reda)", "Troupeau de buffles (feat. Reda)", "C\'est que l\'début (feat. Reda)", "Dernier rempart (feat. Reda)", "Stratégie (feat. Reda)", "Troupau d\'buffles (Remix) (feat. Reda)"]
            },
            {
                titre: "Testa Nera", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273bb6d9c0ef112e3e6643783dd",
                category: "project", tracks: ["Les 3 murs de ma chambre", "Le poids du mal", "Entre temps (feat. Sendo)", "L\'étoile noire", "Les yeux fermés (feat. L\'Hexaler, Scylla)", "De haine et d\'eau tiède", "Oubliez-moi", "Le chant des hommes saouls (feat. Sendo)", "Mauvais vent", "Les poissons morts (feat. Scylla)", "La France sans maquillage (feat. Sendo)", "Qui m\'demande ?", "La rime galère à sourire (feat. Jeff Le Nerf)", "L\'exécuteur", "Places assises (feat. Abrazif)", "Un autre jour au pied du miracle", "Fin 2012"]
            },
            {
                titre: "Black Album", annee: "2006", cover: "https://i.scdn.co/image/ab67616d0000b273d4a71345ecfe4ac0b45b5209",
                category: "project", tracks: ["1 d\'trop", "Frôler l\'paradis", "La boucle", "Pas d\'mythos", "Le voisin de Mr tout l\'monde", "El pirata", "Sensation (feat. Reda La pire des races, Sendo, Ko Mar)", "J\'oublierais pas", "La punition", "Le commander", "Course (feat. Sendo, Ko Mar, MnC)", "Donne ta voix (feat. Reda La pire des races, Sendo, Ko Mar, MnC)"]
            },
        ]
    },
    {
        id: "jazzybazz",
        nom: "Jazzy Bazz",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jazzy_bazz.webp",
        chiffres: "253k Abonnés",
        bio: "L'élégance parisienne. Technique et musicalité.",
        bioLongue: "Jazzy Bazz, membre de l'Entourage, allie la technique du rap à une grande musicalité. Ses textes soignés, souvent mélancoliques, se posent sur des productions variées, allant du Boom Bap au jazz. Il incarne un rap parisien élégant et réfléchi, capable de toucher un large public sans perdre son âme.",
        albums: [
            {
                titre: "NIRVANA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735f8605bc371edf3bf3cd56ee",
                category: "project", tracks: ["Gizeh", "Night City", "Vertigo", "T\'oublier", "Soledad", "Paris, TX (feat. Esso Luxueux)", "Interlude", "Nirvana", "Death Row", "C\'était demain", "Michel-Ange", "Skit 2034", "Souviens-toi (feat. Tuerie)"]
            },
            {
                titre: "Gare fantôme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739a9a6463572d3bfaa91728d1",
                category: "single", tracks: ["Gare fantôme (feat. Hugo TSR)"]
            },
            {
                titre: "État second PART. 2 - Ébullition", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27303390046438f61a97472719a",
                category: "single", tracks: ["État second PART. 2 - Ébullition (feat. Chanceko)"]
            },
            {
                titre: "Cra$h (feat. Enchantée Julia & Jazzy Bazz)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730ac0cff6d5c23fca2880a693",
                category: "single", tracks: ["Cra$h (feat. Enchantée Julia & Jazzy Bazz)"]
            },
            {
                titre: "FAUX G", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736a65efdc02deb60cedcf3f34",
                category: "single", tracks: ["FAUX G (feat. Saboteur, Deen Burbigo, La Fève)"]
            },
            {
                titre: "Truman Show", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2733a5aa70d00cd3e54d9db312e",
                category: "single", tracks: ["Truman Show (feat. JeanJass)"]
            },
            {
                titre: "Fauves", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730691ff0e72d70a3f28a21536",
                category: "single", tracks: ["Fauves (feat. Zamdane)"]
            },
            {
                titre: "Memoria", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27342f98f4eab8b0b38a4877831",
                category: "project", tracks: ["Memoria", "Coeur, Conscience", "Panorama (feat. Alpha Wann)", "Albiceleste (feat. Josman)", "Nouvelle 3.14", "Zone 19 (feat. EDGE)", "Élément 115 (feat. Nekfeu)", "D.ieu", "P-Town Blues", "Interlude", "Sablier", "Arkham Anthem", "Dark City (feat. EDGE)", "Mental (feat. rob)", "Memento Mori", ".RAW Spleen (feat. Laylow)", "Destinée"]
            },
            {
                titre: "Élément 115", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736c5483badf946100230392bd",
                category: "single", tracks: ["Élément 115 (feat. Nekfeu)"]
            },
            {
                titre: "Mental", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736abe34e6b75cd77fc494ba26",
                category: "single", tracks: ["Mental (feat. rob)"]
            },
            {
                titre: "Dark City", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732a21aec2b56d3051fda4516a",
                category: "single", tracks: ["Dark City (feat. EDGE)"]
            },
            {
                titre: "Albiceleste", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273343be9405de0293e34b74f71",
                category: "single", tracks: ["Albiceleste (feat. Josman)"]
            },
            {
                titre: "Panorama", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27309f6fe677227f105354582e4",
                category: "single", tracks: ["Panorama (feat. Alpha Wann)"]
            },
            {
                titre: "D.ieu", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b4ccd7ce275b26f87ec74e5a",
                category: "single", tracks: ["D.ieu"]
            },
            {
                titre: "Zone 19", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733cafa81e8d2c25cffc3519ae",
                category: "single", tracks: ["Zone 19 (feat. EDGE)"]
            },
            {
                titre: "P-Town Blues - A COLORS SHOW", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273129a0bb6955ac5aff7038998",
                category: "single", tracks: ["P-Town Blues - A COLORS SHOW"]
            },
            {
                titre: "Private Club", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27338015bae2059be66a69183f7",
                category: "project", tracks: ["Montecristo (feat. EDGE, Esso Luxueux)", "Non-Stop (feat. EDGE, Esso Luxueux)", "Fascinant (feat. EDGE, Esso Luxueux)", "Private Club (feat. EDGE, Esso Luxueux)", "Innocent (feat. EDGE, Esso Luxueux)", "Interlude (feat. EDGE, Esso Luxueux)", "Mauvais (feat. EDGE, Esso Luxueux)", "Fortuné (feat. EDGE, Esso Luxueux)", "Certifié (feat. EDGE, Esso Luxueux)", "Magma (feat. EDGE, Esso Luxueux)", "Hier Encore (feat. EDGE, Esso Luxueux)"]
            },
            {
                titre: "MEMENTO III", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273dc8008035cd70b98b6a302a1",
                category: "project", tracks: ["Arkham", "Apocalypse Now"]
            },
            {
                titre: "MEMENTO II", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737f904f3762a2b1309b777964",
                category: "project", tracks: ["Mob (feat. EDGE, Zed Yun Pavarotti, Tortoz, Gros Mo)", "La haine (feat. Jarod, Infinit\', Heskis)"]
            },
            {
                titre: "MEMENTO", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273edab000aeaa6979cab12bf6b",
                category: "project", tracks: ["Pyromane (feat. EDGE)", "Assaillant"]
            },
            {
                titre: "Benny Blanco", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730ad264e2009559a714982178",
                category: "single", tracks: ["Benny Blanco"]
            },
            {
                titre: "Hijo (feat. Gros Mo, Jazzy Bazz)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273e89540d0c2f72946b27f3b71",
                category: "single", tracks: ["Hijo (feat. Gros Mo, Jazzy Bazz)"]
            },
            {
                titre: "Nuit", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273c72ba2038f906d600a3289ce",
                category: "project", tracks: ["Crépuscule", "El Presidente", "Éternité (feat. Nekfeu)", "Leticia", "Buenos Aires - Paris", "Minuit (feat. Sabrina Bellaouel)", "Sentiments (feat. Lonely Band)", "Stalker (feat. Nekfeu, Bonnie Banane)", "Insomnie (feat. Esso Luxueux, Alpha Wann)", "Parfum", "Rue du soleil (feat. Monomite)", "Cinq heures du matin"]
            },
            {
                titre: "Règlement Space #1", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27353d21153c3875ac33d152df6",
                category: "single", tracks: ["Règlement Space #1"]
            },
            {
                titre: "Rouler la nuit", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273d1f5e4a53eac0f93373c4893",
                category: "single", tracks: ["Rouler la nuit (feat. Sabrina Bellaouel)"]
            },
            {
                titre: "P-Town", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2733b00b2b3ca0d1469d3b39423",
                category: "project", tracks: ["P-Town", "Les chemins", "Joker", "Lay Back (feat. Freddie Gibbs)", "3h33", "Ultra Parisien", "3.14 Boogie (feat. Esso Luxueux)", "Le syndrome", "Visions (feat. Bonnie Banane)", "Adrénaline", "Le roseau", "Trompes de Fallope", "3.14 Attitude", "Amen", "Fluctuat Nec Mergitur"]
            },
            {
                titre: "Sur la Route du 3.14", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b2737ba337716d04779e3d4853f0",
                category: "project", tracks: ["Ce putain de jazz", "Dans ma tête", "3.14 Connexion", "La vie est un jeu", "Un truc qui cloche", "64 mesures de spleen", "Perfect Match", "Seul", "Outro"]
            },
        ]
    },
    {
        id: "georgio",
        nom: "Georgio",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/georgio.webp",
        bio: "Le rap littéraire et rock. Une énergie scénique folle.",
        bioLongue: "Georgio est un rappeur à part, puisant ses influences autant dans le rap que dans la chanson française ou le rock. Ses textes introspectifs et poétiques parlent des tourments de la jeunesse. Sur scène, il déploie une énergie rock qui a conquis un public très fidèle au fil des années.",
        albums: [
            {
                titre: "Gloria", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273da17deb517c41cc2628341a7",
                category: "project", tracks: ["Le temps n\'emporte rien", "Vendredi 13", "Etoile (feat. Vacra)", "Loin de tout", "Jusqu\'à la folie", "Sincèrement (feat. Zamdane)", "Sans surprise", "Oasis (feat. Bekar)", "La musique pour soigner mes maux", "Voloco", "Sans toi", "Fleurs (feat. Nemir)", "Smile (feat. Chilly Gonzales)", "Grillz", "Aucun drapeau blanc"]
            },
            {
                titre: "Etoile", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ee7ebd04c8538b3854ac1a97",
                category: "single", tracks: ["Etoile (feat. Vacra)"]
            },
            {
                titre: "Sincèrement", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273140ef9d26f02dd00369245f2",
                category: "single", tracks: ["Sincèrement (feat. Zamdane)"]
            },
            {
                titre: "Oasis", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ed723c9db584c81ede09cba2",
                category: "single", tracks: ["Oasis (feat. Bekar)"]
            },
            {
                titre: "Smile", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273167804d99518c65d49d37e8a",
                category: "single", tracks: ["Smile (feat. Chilly Gonzales)"]
            },
            {
                titre: "Loin de tout", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27355d81ad20f61dfa0cba783f9",
                category: "single", tracks: ["Loin de tout"]
            },
            {
                titre: "Vendredi 13", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735d20fb3d1967b607af300d9f",
                category: "single", tracks: ["Vendredi 13"]
            },
            {
                titre: "Hatem", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27315b53d63ac34d1cc342fe42c",
                category: "single", tracks: ["Hatem (feat. Bekar)"]
            },
            {
                titre: "Fleurs", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27361113851ae9582356dae38de",
                category: "single", tracks: ["Fleurs (feat. Nemir)"]
            },
            {
                titre: "Sans surprise", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27361f064eedc1713eeeb96d2de",
                category: "single", tracks: ["Sans surprise"]
            },
            {
                titre: "Glitch", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e081ce859ad1572474b01bb4",
                category: "single", tracks: ["Glitch (feat. Gringe)"]
            },
            {
                titre: "Années Sauvages Part. 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27324e18d9f28c0bd9ac48c7e60",
                category: "project", tracks: ["Verseau", "Silence / Solitude", "Basquiat (feat. Bekar)", "Sur la glace (feat. Zeina)", "Mauvais élèves", "Montréal - 15/06/23", "Les Alizés (feat. Patrick Watson)", "Avec les nuages", "Je regarde le ciel pleurer", "Lumière noire (feat. HOUDI)", "Crystal", "Ola (feat. Meryl)", "Le chemin (Grünt d\'Or)", "Hôtel 5 étoiles", "Quand tout s\'enflamme (feat. PLK)", "Esprit libre", "Posthume", "Or Acrylique", "Diamant v2 (feat. Yoa)", "Froid (feat. Josman)", "Être", "Enfants Sauvages / AUDIO-2022-09-21", "Quand le soleil tombe", "Craquer", "Feu d\'artifice", "Jamaïque", "7 fois", "Infini", "Avant l\'été"]
            },
            {
                titre: "Colorier des HLM", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735baec13ef1cefbf694dab8fe",
                category: "single", tracks: ["Colorier des HLM (feat. BEN plg)"]
            },
            {
                titre: "Sur la glace", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273783b7f627c121d4ba4d055bd",
                category: "single", tracks: ["Sur la glace (feat. Zeina)"]
            },
            {
                titre: "Ola", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c0d50afbf264cbca282a0444",
                category: "single", tracks: ["Ola (feat. Meryl)"]
            },
            {
                titre: "Lumière noire", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27319e0618d82e86bed2182852a",
                category: "single", tracks: ["Lumière noire (feat. HOUDI)"]
            },
            {
                titre: "Basquiat", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737b066f2341dedaf31e94593a",
                category: "single", tracks: ["Basquiat (feat. Bekar)"]
            },
            {
                titre: "Silence / Solitude", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27333f05ccc826f74ef88355560",
                category: "single", tracks: ["Silence / Solitude"]
            },
            {
                titre: "Les Alizés", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737079ccba26a327cac4f52b06",
                category: "project", tracks: ["Les Alizés (feat. Patrick Watson)", "Montréal - 15/06/23"]
            },
            {
                titre: "Années Sauvages", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b19f3a2ae9bfd72c2a3437e2",
                category: "project", tracks: ["Hôtel 5 étoiles", "Quand tout s\'enflamme (feat. PLK)", "Esprit libre", "Posthume", "Or Acrylique", "Diamant v2 (feat. Yoa)", "Froid (feat. Josman)", "Être", "Enfants Sauvages / AUDIO-2022-09-21", "Quand le soleil tombe", "Craquer", "Feu d\'artifice", "Jamaïque", "7 fois", "Infini", "Avant l\'été"]
            },
            {
                titre: "TERMINAL 2 (feat. Georgio & Adé)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27352deacd06c692cac526856dc",
                category: "feat", tracks: ["TERMINAL 2 (feat. Georgio & Adé)"]
            },
            {
                titre: "Quand tout s\'enflamme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dd2f47fe98555b70056903eb",
                category: "single", tracks: ["Quand tout s\'enflamme (feat. PLK)"]
            },
            {
                titre: "Froid", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273da4383b4c8ff77c8803efd7c",
                category: "single", tracks: ["Froid (feat. Josman)"]
            },
            {
                titre: "Diamant v2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d4f1a38f6db32525b0f1acc0",
                category: "single", tracks: ["Diamant v2 (feat. Yoa)"]
            },
            {
                titre: "Remède", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b7addf1a843773677c0b0cd0",
                category: "single", tracks: ["Remède (feat. DJ Pone, Gringe)"]
            },
            {
                titre: "Père Noël", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734cb77bf3f6c3baeb776aaf23",
                category: "single", tracks: ["Père Noël (feat. ISHA, Chanje, CDL)"]
            },
            {
                titre: "AU CLAIR DE LA LUNE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730eebc56004ecf800d29ffc53",
                category: "single", tracks: ["AU CLAIR DE LA LUNE (feat. Youssoupha)"]
            },
            {
                titre: "Les Yeux", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b9357e40888497cb33229b1a",
                category: "single", tracks: ["Les Yeux (feat. Yaro)"]
            },
            {
                titre: "Ciel enflammé - Sacré", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732f00ebd91b915530b2384cc9",
                category: "project", tracks: ["Couronne", "Pas de monde imaginaire", "Concept flou (feat. Cœur De Pirate)", "Unique (feat. Doums)", "Célébrer", "Long courrier", "Spirituel", "Près du feu (feat. Mister V)", "NOONNNN", "Joy Division", "Issue de secours (feat. Luv Resval)", "Quelques amis ça suffit (feat. Sofiane Pamart)", "Miraculé", "Vers le haut", "Soto", "Full Moon (feat. S.Pri Noir)", "Je te dirai tout", "Petit prince", "Danse", "Emotions masquées (feat. Kalash Criminel)", "A ma place", "On se connait pas (feat. Sanka)", "Plus peur de vivre", "Parallèle (feat. Zikxo)", "Kamikaze", "Les anges dans des robes rouges", "3:00 PM", "Equilibre", "Les laisser parler", "Sacré"]
            },
            {
                titre: "Unique", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27368686658fa7ddd6a772eb34c",
                category: "single", tracks: ["Unique (feat. Doums)"]
            },
            {
                titre: "Quelques amis ça suffit", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27395191ea267e6928f5d7a2d56",
                category: "single", tracks: ["Quelques amis ça suffit (feat. Sofiane Pamart)"]
            },
            {
                titre: "Près du feu", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27355674cfee4795b80d029bee5",
                category: "single", tracks: ["Près du feu (feat. Mister V)"]
            },
            {
                titre: "Issue de secours", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27302e5fb68d7f378c00f9139f1",
                category: "single", tracks: ["Issue de secours (feat. Luv Resval)"]
            },
            {
                titre: "Couronne", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a3f77a66b41250aaaa561885",
                category: "single", tracks: ["Couronne"]
            },
            {
                titre: "2 gouttes d\'eau", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2732fa16b3265cae8360ea90f4a",
                category: "single", tracks: ["2 gouttes d\'eau (feat. Bekar)"]
            },
            {
                titre: "Sacré", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d3f8aaf68c7c055a6a27bbb3",
                category: "project", tracks: ["Miraculé", "Vers le haut", "Soto", "Full moon (feat. S.Pri Noir)", "Je te dirai tout", "Petit prince", "Danse", "Emotions masquées (feat. Kalash Criminel)", "A ma place", "On se connait pas (feat. Sanka)", "Plus peur de vivre", "Parallèle (feat. Zikxo)", "Kamikaze", "Les anges dans des robes rouges", "3:00 PM", "Equilibre", "Les laisser parler", "Sacré"]
            },
            {
                titre: "Parallèle", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731c80b2f82ae684e6209c75f8",
                category: "single", tracks: ["Parallèle (feat. Zikxo)"]
            },
            {
                titre: "Emotions masquées", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273badc4e12f90ca5118b97e161",
                category: "single", tracks: ["Emotions masquées (feat. Kalash Criminel)"]
            },
            {
                titre: "Full moon", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27318bf8763ba8c713e3bbb011d",
                category: "single", tracks: ["Full moon (feat. S.Pri Noir)"]
            },
            {
                titre: "Danse", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c3828d6b3877f4f4b82d593c",
                category: "single", tracks: ["Danse"]
            },
            {
                titre: "Noir Paradis", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b9a359ffcd24d0329199318c",
                category: "single", tracks: ["Noir Paradis"]
            },
            {
                titre: "En Or", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273beebb81a27ea9d0a4afb16aa",
                category: "single", tracks: ["En Or (feat. Zesau)"]
            },
            {
                titre: "Les anges dans des robes rouges", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273102b64d965d2362a7ed28efc",
                category: "single", tracks: ["Les anges dans des robes rouges"]
            },
            {
                titre: "XX5", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273c392703514d0c95f18072d21",
                category: "project", tracks: ["Hier", "Miroir", "Aujourd\'hui", "Dans mon élément (feat. ISHA)", "J\'en sais rien", "Coup pour coup", "Monnaie", "J\'roule", "Akira", "Seul", "Ca bouge pas", "Barbara (feat. Vald)", "J\'me couche", "Haute Couture", "Prisonnier", "31 Janvier (feat. Victor Solf)", "Les yeux en face des trous", "100 % [Bonus Track]"]
            },
            {
                titre: "Miroir", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2735b88c1d2627e27f3bd22e0bf",
                category: "single", tracks: ["Miroir"]
            },
            {
                titre: "J\'en sais rien / Hier - Single", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2731bec09169653f9b0f679791e",
                category: "project", tracks: ["J\'en sais rien", "Hier"]
            },
            {
                titre: "Ἥρα (Héra réédition)", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273338cce77ad5a8e0be4071bf0",
                category: "project", tracks: ["L\'espoir meurt en dernier", "Du bout de mes dix doigts", "Héra", "No future", "Brûle", "Svetlana et Maïakovski", "La terre, je la dévore", "La vue du sang", "Promis j\'arrête", "Mama Rita", "L\'or de sa vapeur rouge", "Ici-bas", "On rêvait tous de s\'envoler", "Liberté invisible", "Paris - London", "À nos démons (version jour)", "À quoi bon courir ?", "Peu importe l\'avenir", "Pearl", "Une pluie d\'or et de lumière", "C\'est pas fini", "À nos démons (version nuit)"]
            },
            {
                titre: "Peu importe l\'avenir - Single", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b27334a760f66969a523b1b44075",
                category: "single", tracks: ["Peu importe l\'avenir"]
            },
            {
                titre: "Héra", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2737a244aadd50c45757b2f72bc",
                category: "project", tracks: ["L\'espoir meurt en dernier", "Du bout de mes dix doigts", "Héra", "No future", "Brûle", "Svetlana et Maïakovski", "La terre, je la dévore", "La vue du sang", "Promis j\'arrête", "Mama Rita", "L\'or de sa vapeur rouge", "Ici-bas", "On rêvait tous de s\'envoler"]
            },
            {
                titre: "L\'espoir meurt en dernier - Single", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273d099f87547d30277bcae3c78",
                category: "single", tracks: ["L\'espoir meurt en dernier"]
            },
            {
                titre: "La terre, je la dévore - Single", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b27306412d252a0c4cb052f9d5cf",
                category: "single", tracks: ["La terre, je la dévore"]
            },
            {
                titre: "Héra - Single", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273970c2368e60167e4c71d547f",
                category: "single", tracks: ["Héra"]
            },
            {
                titre: "Bleu noir", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273edd3fc158488bd6733a1f22b",
                category: "project", tracks: ["Jeudi gris", "Bercé par le vent", "Les anges déchus, les gens déçus", "Dépression", "Rêveur - Pour Anatole", "Héros", "Appel à la revolte (feat. Iron Sy)", "Malik", "Bleu noir", "6 avril 93 (feat. Sanka)", "Faut tenir", "Rose noire (feat. Elisa JO)", "La Celle Saint Cloud", "Des mots durs sur des bouts de papier - Lettre à Salomé"]
            },
            {
                titre: "A l\'abri", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b2735df75f4d60e0ef549d709e0e",
                category: "project", tracks: ["A l\'abri", "Blackjack", "T\'as pas d\'sosie", "Le poing levé, les yeux bandés", "Énigme", "Le gardien", "La tour de Babel", "Rope a dope"]
            },
            {
                titre: "Soleil d\'hiver", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2730634e6c97ad869e80c644a39",
                category: "project", tracks: ["Où est mon Dieu (feat. Hologram Lo\')", "Chaque jour (feat. Hologram Lo\')", "À l\'ombre du Zénith (feat. Hologram Lo\')", "Sex, Drug & Rock\'n\'roll (feat. Vald, Lomepal, Alpha Wann, Hologram Lo\')", "Hassan sabbah (feat. Hologram Lo\')", "Paris North Face (feat. Koma, C.Sen, Hologram Lo\')", "Saleté de rap (feat. Hologram Lo\')", "Pensées pour moi-même (feat. Hologram Lo\')", "Soleil d\'hiver (pour les miens) (feat. Hologram Lo\')"]
            },
        ]
    },
    {
        id: "zamdane",
        nom: "Zamdane",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/zamdan.webp",
        bio: "La mélancolie solaire. Une voix touchante venue de Marseille.",
        bioLongue: "Zamdane, originaire du Maroc et installé à Marseille, a su toucher le cœur du public avec sa sincérité. Il raconte son parcours d'exil et ses doutes avec une mélancolie lumineuse. Sa musique, à la fois triste et pleine d'espoir, est portée par une voix singulière et des mélodies imparables.",
        albums: [
            {
                titre: "Khamsa", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734121d5638ca7c164adb37acf",
                category: "single", tracks: ["Khamsa (feat. USKY)"]
            },
            {
                titre: "Dali (feat. Zamdane)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e2aff11db9cc4a6fdf6d36fa",
                category: "feat", tracks: ["Dali (feat. Zamdane)"]
            },
            {
                titre: "Sincèrement", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273140ef9d26f02dd00369245f2",
                category: "single", tracks: ["Sincèrement (feat. Georgio)"]
            },
            {
                titre: "En boucle", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ab89927ab06a76ea77a09beb",
                category: "single", tracks: ["En boucle (feat. GP Explorer, Adèle Castillon)"]
            },
            {
                titre: "OBSESSED", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734d8d7c373080bf63b04e519e",
                category: "single", tracks: ["OBSESSED (feat. Najm)"]
            },
            {
                titre: "Moral (feat. Zamdane)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c00059d5ea00e697e11e6f83",
                category: "feat", tracks: ["Moral (feat. Zamdane)"]
            },
            {
                titre: "RAHMA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273447a3908a9eb78e3dfce85b3",
                category: "project", tracks: ["Mais à quel prix ?", "Beretta", "L\'endroit où je suis né", "Une balle qui touche le ciel", "La vie est belle (feat. La Fève)", "Les jolies filles (feat. PLK)", "Magicien", "Déviant", "Dernière pluie", "Tu me verras (feat. Solann)", "Le poison (feat. SCH)", "Bleu demain", "Je t\'aime", "Désolé Mama", "Hero", "Rahma"]
            },
            {
                titre: "Tu me verras", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730a1b85758ab8e20d51aa3fe2",
                category: "single", tracks: ["Tu me verras (feat. Solann)"]
            },
            {
                titre: "Les jolies filles", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27308cea51e65368af30f82ecf0",
                category: "single", tracks: ["Les jolies filles (feat. PLK)"]
            },
            {
                titre: "Le poison", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732d3146049e5e918b5d0d25ea",
                category: "single", tracks: ["Le poison (feat. SCH)"]
            },
            {
                titre: "BOOSKA RAHMA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737aee6f2100f539e4254e00f3",
                category: "single", tracks: ["BOOSKA RAHMA (feat. Booska-P)"]
            },
            {
                titre: "Hero", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731ee7a23846e52fe399ced94b",
                category: "single", tracks: ["Hero"]
            },
            {
                titre: "Coup d\'État", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739ef19175235e6418056c8735",
                category: "single", tracks: ["Coup d\'État (feat. Steban)"]
            },
            {
                titre: "Dernière pluie", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d8de48e1a6ed9b3745c98a4e",
                category: "single", tracks: ["Dernière pluie"]
            },
            {
                titre: "Maîtriser mes pensées", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27385e2a9fc632574af3ad39117",
                category: "single", tracks: ["Maîtriser mes pensées (feat. kezo)"]
            },
            {
                titre: "Chanel", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738347b96fe7354fce8f17317e",
                category: "single", tracks: ["Chanel"]
            },
            {
                titre: "INSECURE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273208131236c05f4b68b5e25c5",
                category: "single", tracks: ["INSECURE (feat. Dinos)"]
            },
            {
                titre: "Locked Up (feat. Zamdane)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273bae1d23edc7b830498fad595",
                category: "feat", tracks: ["Locked Up (feat. Zamdane)"]
            },
            {
                titre: "Vingt ans (feat. Zamdane)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27366098295beb82e47f941c2dd",
                category: "feat", tracks: ["Vingt ans (feat. Zamdane)"]
            },
            {
                titre: "Casa Marseille", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f0caa2f6ebfac0033407dfc8",
                category: "single", tracks: ["Casa Marseille (feat. OUENZA)"]
            },
            {
                titre: "Les zhommes", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27314bfefce5e2fc8261c6e598e",
                category: "single", tracks: ["Les zhommes (feat. Danyl)"]
            },
            {
                titre: "Faya", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731e7e0f9cc5435228f9ec045c",
                category: "single", tracks: ["Faya (feat. FAYV, Badjoe, 13 Organisé, Seven G, Jul, Panther, Bino, Eska)"]
            },
            {
                titre: "DOUTE (feat. Zamdane)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27376e8ce0476fe5d43197a9c10",
                category: "feat", tracks: ["DOUTE (feat. Zamdane)"]
            },
            {
                titre: "Pilotes (feat. Zamdane)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738f1619740fe50372941fab53",
                category: "feat", tracks: ["Pilotes (feat. Zamdane)"]
            },
            {
                titre: "Absorber les larmes", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273af60abece79cae66d78cc5e4",
                category: "single", tracks: ["Absorber les larmes (feat. JEY BROWNIE)"]
            },
            {
                titre: "PAYSAGISTE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736996d352b4177fd2724263da",
                category: "single", tracks: ["PAYSAGISTE (feat. Skary, Wysko)"]
            },
            {
                titre: "SOLSAD", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27351d23467d88dac343e30d52d",
                category: "project", tracks: ["Mouchkila", "À ma guise", "Le grand cirque (feat. Pomme)", "Million", "Printemps", "Alouette (feat. Josman)", "Boboalam (feat. So La Lune)", "Un peu de moi", "Youm wara youm (feat. Kekra)", "Infini", "Stylo magique", "Loin d\'ici (feat. Niska)", "Mélancolie criminelle (feat. Sofiane Pamart)", "Lalalala", "Audi GT", "Fleurs", "Si on s\'aimait (feat. Zaho)", "Noum (feat. TIF)", "Étoiles dans les yeux", "Monstres"]
            },
            {
                titre: "Si on s\'aimait", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ceb9533b3a8e18edd709431d",
                category: "single", tracks: ["Si on s\'aimait (feat. Zaho)"]
            },
            {
                titre: "Noum", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c383350af929ce44b4a76da4",
                category: "single", tracks: ["Noum (feat. TIF)"]
            },
            {
                titre: "Mélancolie criminelle", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b0b1907bfeb980915dc94f82",
                category: "single", tracks: ["Mélancolie criminelle (feat. Sofiane Pamart)"]
            },
            {
                titre: "Loin d\'ici", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27330ba629b9a297837c843a25c",
                category: "single", tracks: ["Loin d\'ici (feat. Niska)"]
            },
            {
                titre: "DÎNER", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a884ec31ae2b5b1702df47dd",
                category: "single", tracks: ["DÎNER (feat. mademoiselle lou)"]
            },
            {
                titre: "Youm wara youm", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b16fb1860dde5a1c84af83ed",
                category: "single", tracks: ["Youm wara youm (feat. Kekra)"]
            },
            {
                titre: "Le grand cirque", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27329622561b64e94cbd318949f",
                category: "single", tracks: ["Le grand cirque (feat. Pomme)"]
            },
            {
                titre: "Boboalam", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e9f7a7bd0cfc91429bc80821",
                category: "single", tracks: ["Boboalam (feat. So La Lune)"]
            },
            {
                titre: "Alouette", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732f1ef28f75d5baa74429742d",
                category: "single", tracks: ["Alouette (feat. Josman)"]
            },
            {
                titre: "Mélancolie criminelle - A COLORS SHOW", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273413495e16c103c4031160fbd",
                category: "single", tracks: ["Mélancolie criminelle - A COLORS SHOW (feat. Sofiane Pamart)"]
            },
            {
                titre: "Une éternité ne suffit pas (Affamé #22)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273449980c8c393150e2ee950ff",
                category: "single", tracks: ["Une éternité ne suffit pas (Affamé #22)"]
            },
            {
                titre: "Pièces manquantes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735c42eeed8d2d27ee5963f805",
                category: "single", tracks: ["Pièces manquantes (feat. Caballero & JeanJass)"]
            },
            {
                titre: "MÉTÉORITE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27362af9943b76e16d18ec9d36b",
                category: "single", tracks: ["MÉTÉORITE (feat. Malo)"]
            },
            {
                titre: "Cicatrice", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27320412dbe6721371321717b5c",
                category: "single", tracks: ["Cicatrice (feat. Rim\'K)"]
            },
            {
                titre: "Formidable (Affamé #21)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e5ef7fdf79c7726896d3ef86",
                category: "single", tracks: ["Formidable (Affamé #21) (feat. Booska-P)"]
            },
            {
                titre: "MOB (Affamé #20)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273073282a6dd07f4e63046aab3",
                category: "single", tracks: ["MOB (Affamé #20)"]
            },
            {
                titre: "BALLAD", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738802a820a45539a036e003dc",
                category: "single", tracks: ["BALLAD (feat. PUSH & GIO)"]
            },
            {
                titre: "Ma réalité (Affamé #19)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27374bf313e3203c57210fd5fc5",
                category: "single", tracks: ["Ma réalité (Affamé #19)"]
            },
            {
                titre: "Bataille (Affamé #18)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273721e51f103943bf89612ef15",
                category: "single", tracks: ["Bataille (Affamé #18)"]
            },
            {
                titre: "Angels (Affamé #17)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738525a88f476d45f3c54f5722",
                category: "single", tracks: ["Angels (Affamé #17)"]
            },
            {
                titre: "Triste mais elle aime ça (Affamé #16)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736aeb5eceb18eeea7cb667169",
                category: "single", tracks: ["Triste mais elle aime ça (Affamé #16)"]
            },
            {
                titre: "Conditionnés à décevoir (Affamé #15)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273567708d6158063f37087fe9a",
                category: "single", tracks: ["Conditionnés à décevoir (Affamé #15)"]
            },
            {
                titre: "Poussière (Affamé #14)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273437f360aff5f2c086d65d186",
                category: "single", tracks: ["Poussière (Affamé #14)"]
            },
            {
                titre: "J\'arrête", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27312e7ab8ce413b3080a3de1c5",
                category: "single", tracks: ["J\'arrête (feat. Kekra)"]
            },
            {
                titre: "Un jour (feat. Zamdane)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739b04907e214871026549ebfa",
                category: "feat", tracks: ["Un jour (feat. Zamdane)"]
            },
            {
                titre: "Sahara", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e94d8a7ac4a1f3e22513d0f2",
                category: "single", tracks: ["Sahara (feat. Norsacce Berlusconi)"]
            },
            {
                titre: "Soleil de ma vie", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273643f905600036f75b6a30afc",
                category: "single", tracks: ["Soleil de ma vie (feat. Raplume)"]
            },
            {
                titre: "P. Diddy (feat. Zamdane)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737d8f51c1ba8bd9ef68e1b1b3",
                category: "feat", tracks: ["P. Diddy (feat. Zamdane)"]
            },
            {
                titre: "Next Up France - S1-E1", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27321748ba74bbabb285e37b5a1",
                category: "single", tracks: ["Next Up France - S1-E1 (feat. Mixtape Madness)"]
            },
            {
                titre: "Avant la fin (feat. Zamdane)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273fc096f07fe0437de8b19809e",
                category: "feat", tracks: ["Avant la fin (feat. Zamdane)"]
            },
            {
                titre: "Sans toi", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27383127c320463cc68d9dde3a3",
                category: "single", tracks: ["Sans toi (feat. J9ueve)"]
            },
            {
                titre: "Zenith", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273762016971da2894fabd8739e",
                category: "single", tracks: ["Zenith (feat. Coyote Jo Bastard)"]
            },
            {
                titre: "PARADOXE (feat. Zamdane)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738b5a6c13eda24d06e183b32b",
                category: "feat", tracks: ["PARADOXE (feat. Zamdane)"]
            },
            {
                titre: "Couleur de ma peine", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27363295426613ca48a50e434a9",
                category: "project", tracks: ["Tout ce qu\'il voulait", "Le monde par ma fenêtre", "Incomplet comme février", "Boyka (feat. Dinos)", "1,2,3,4", "Stradivarius", "Naïf", "Fauves (feat. Jazzy Bazz)", "Même à distance on est proches", "Lettre à mon dieu", "Foust L\'Bando", "Bonne année (feat. Soso Maness)", "C18", "Zhar", "Groupie love", "Flouka", "Libre comme une colombe", "Vide quand t\'es pas là"]
            },
            {
                titre: "Flouka", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273558e93fe7bad32414dd6851d",
                category: "single", tracks: ["Flouka"]
            },
            {
                titre: "Fauves", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730691ff0e72d70a3f28a21536",
                category: "single", tracks: ["Fauves (feat. Jazzy Bazz)"]
            },
            {
                titre: "Bonne année", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739edf804bc43e3e457bc46ad9",
                category: "single", tracks: ["Bonne année (feat. Soso Maness)"]
            },
            {
                titre: "Incomplet comme février", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734463ee47620f8d52df000593",
                category: "single", tracks: ["Incomplet comme février"]
            },
            {
                titre: "Le monde par ma fenêtre", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738b856b57b1b3c0f16988f008",
                category: "single", tracks: ["Le monde par ma fenêtre"]
            },
            {
                titre: "Boyka", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731b4f9ad41db196cd9576747f",
                category: "single", tracks: ["Boyka (feat. Dinos)"]
            },
            {
                titre: "Zhar", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27376fabd956eead0dacffd5876",
                category: "single", tracks: ["Zhar"]
            },
            {
                titre: "Décollage (Extrait de la BO de \"Or Noir\")", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731b526117bc4a86c80d982884",
                category: "project", tracks: ["Décollage - Extrait de la BO de \"Or Noir\" (feat. Or Noir)"]
            },
            {
                titre: "Comme un aimant", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27320e2f9b61ad32c17d2bf6f80",
                category: "single", tracks: ["Comme un aimant (feat. Steban)"]
            },
            {
                titre: "Niya", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273aa29c58be5ca86e283da27d9",
                category: "single", tracks: ["Niya (feat. Tawsen)"]
            },
            {
                titre: "Affamé #13 - Marseille", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e62d7e0fa4e5ddd952a46aa3",
                category: "single", tracks: ["Affamé #13 - Marseille"]
            },
            {
                titre: "Affamé - Saison 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fe19b90ba3c22419f8d2b893",
                category: "project", tracks: ["Affamé #6 - Vital", "Affamé #7 - Histoires de la vraie vie", "Affamé #8 - Hayati", "Affamé #9 - GRRR", "Affamé #10 - Athéna", "Affamé #11 – Photogénique (Boosk’Affamé)", "Affamé #12 - Sentimental", "Affamé #13 - Marseille"]
            },
            {
                titre: "MRS", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cad3a78ac5a255e0670ebba0",
                category: "single", tracks: ["MRS (feat. JMK$)"]
            },
            {
                titre: "Affamé #12 - Sentimental", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731915b8ea456297680a94fbd1",
                category: "single", tracks: ["Affamé #12 - Sentimental"]
            },
            {
                titre: "Affamé #11 – Photogénique (Boosk’Affamé)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735d4d551e56a85f43f35d3cfb",
                category: "single", tracks: ["Affamé #11 – Photogénique (Boosk’Affamé)"]
            },
            {
                titre: "Affamé #10 - Athéna", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273861fab87cdca4bf5d4fbe54c",
                category: "single", tracks: ["Affamé #10 - Athéna"]
            },
            {
                titre: "Affamé #9 - GRRR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733d842c7906ff76858e7570ef",
                category: "single", tracks: ["Affamé #9 - GRRR"]
            },
            {
                titre: "Affamé #8 - Hayati", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27369c45268635fda1ff4f2723d",
                category: "single", tracks: ["Affamé #8 - Hayati"]
            },
            {
                titre: "Affamé #7 - Histoires de la vraie vie", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e6f900f4f1defdf45d74204d",
                category: "single", tracks: ["Affamé #7 - Histoires de la vraie vie"]
            },
            {
                titre: "Affamé #6 - Vital", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f72bdd4635cf5c86f9694743",
                category: "single", tracks: ["Affamé #6 - Vital"]
            },
            {
                titre: "La fête", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27365befbcbbad2a33f5338745b",
                category: "single", tracks: ["La fête (feat. Hatik)"]
            },
            {
                titre: "Chrysalis - DLC", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27345ece38e551da3fc0e24f9cb",
                category: "project", tracks: ["Médusa", "Ça y est, ça y est", "Salopard", "Cage dorée", "Favélas (feat. Di-Meh)", "NTM", "Zéro", "Classe S", "Padmé", "Paradis"]
            },
            {
                titre: "Chrysalis", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c796c724ed2a73e0728c5802",
                category: "project", tracks: ["NTM", "Zéro", "Classe S", "Padmé", "Paradis"]
            },
            {
                titre: "Potentiel (OM SESSIONS)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273e0acbc6c19fad569a8545dd7",
                category: "single", tracks: ["Potentiel (OM SESSIONS)"]
            },
            {
                titre: "Low", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27347d81bfd41e10b4a71743099",
                category: "single", tracks: ["Low"]
            },
            {
                titre: "Z", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273953b0b6a7d4dbe3e429e4928",
                category: "project", tracks: ["Bulle", "Recommence", "Dans le noir", "Mémoire", "Pour mourir", "PP", "7", "Ronaldinho", "Sablier", "Demain"]
            },
            {
                titre: "Demain", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a29a2a5eb0a8a91ce9983e61",
                category: "single", tracks: ["Demain"]
            },
            {
                titre: "Recommence", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736aa49295692371aba9d4e230",
                category: "single", tracks: ["Recommence"]
            },
            {
                titre: "Affamé", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27341031d7defda6c725237f48a",
                category: "project", tracks: ["Affamé #1 - Shook", "Affamé #2 - 21", "Affamé #3 - No Party", "Affamé #4 - Survivant", "Affamé #5 - Seul"]
            },
            {
                titre: "20\'s", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273d19b6943e9734fa1df1f5b7b",
                category: "project", tracks: ["Deadstar", "Green", "Disaster", "Fallait", "Rolling Up (feat. AVE, WAVY)", "Nil", "Mektoub (feat. BLISS)", "Quand j\'fume", "Synchtene", "Oh Mama"]
            },
            {
                titre: "Quand j\'fume", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e1d0fa04be87461620c7e4df",
                category: "single", tracks: ["Quand j\'fume"]
            },
            {
                titre: "Green", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27368b9e240d073b429054e24a9",
                category: "single", tracks: ["Green"]
            },
            {
                titre: "Disaster", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2732fc0ceb4e6c6911c9be232b5",
                category: "single", tracks: ["Disaster"]
            },
            {
                titre: "Yung D / C", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273554611c626efc05bd9dfdcc4",
                category: "project", tracks: ["Passe à l\'appart", "Dans L\'mal"]
            },
            {
                titre: "Tjpc", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2735f7dd0069e3bfb36d878fa6a",
                category: "single", tracks: ["Tjpc"]
            },
            {
                titre: "Règlement Freestyle #6", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2734c4730fc9d542049f60f9efd",
                category: "single", tracks: ["Règlement Freestyle #6"]
            },
            {
                titre: "Favaro", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273af8e0df1a24893ab63bfe69f",
                category: "single", tracks: ["Favaro"]
            },
        ]
    },
    {
        id: "lujipeka",
        nom: "Lujipeka",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lujipeka.webp",
        bio: "L'énergie spontanée. L'ancien de Columbine en solo.",
        bioLongue: "Lujipeka, membre du collectif Columbine, a réussi sa transition en solo avec brio. Son style spontané, presque adolescent, parle des angoisses et des joies de sa génération. Avec des morceaux énergiques et des refrains accrocheurs, il a su créer un univers coloré et attachant.",
        albums: [
            {
                titre: "BRULER PARIS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b7c0c3170baa4b06ad3c7b03",
                category: "project", tracks: ["Grande musique", "La vie d\'Antonio", "Bruler Paris", "Super riche kid", "Plan échoué", "10x plus", "Paulise", "Puzzle", "Boys don\'t cry", "La clim", "Saut périlleux", "Moribond", "L\'eau et le feu"]
            },
            {
                titre: "La vie d\'Antonio", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738601e065affb2bd4ebdbf043",
                category: "single", tracks: ["La vie d\'Antonio"]
            },
            {
                titre: "PAULISE + PUZZLE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273150ac38b3e3a482d22ab9f5f",
                category: "project", tracks: ["Paulise", "Puzzle"]
            },
            {
                titre: "Luc Besson", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cfb1ad1457e6a317c8974adc",
                category: "single", tracks: ["Luc Besson (feat. So La Lune)"]
            },
            {
                titre: "Weekend à Marseille", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273afca91c859dbd87cc05298de",
                category: "project", tracks: ["Weekend à Marseille", "Ligue des Champions", "Petite Étoile (feat. Stony Stone)", "Zaza", "Drive By", "Omega (feat. ACHIM)", "Extendito", "GoPro", "Métallurgie (feat. Metah)", "Interlude tk (feat. TK)", "Albator (feat. Missan)", "Toutou", "Elon", "Jusqu’à la folie (feat. Soprano)", "Time (feat. BEN.C)", "Ciel Étoilé"]
            },
            {
                titre: "LUJRADIO (Vol. 1)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273b69e0743da5a85659b9e7874",
                category: "project", tracks: ["Epilogue (feat. Luv Resval)", "Mon Poto (feat. Coyote Jo Bastard)", "Blizzard (feat. Chanceko)", "Rythme infernal (feat. Captaine Roshi)", "HSBC (feat. TK)", "S.O.S. (feat. DMS)"]
            },
            {
                titre: "Pas à ma place", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273070d27ffb7c33d6b88c10bcf",
                category: "project", tracks: ["Pas à ma place (feat. Lil Tooom)", "Pas à ma place"]
            },
            {
                titre: "Montagnes Russes", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273810cdb1eb70e04d2ddf8a1be",
                category: "project", tracks: ["Poupée Russe", "Pas à ma place", "0.6", "Bordel", "L\'autre univers", "Hollywood", "Plus jamais ça", "Mempapeur - Interlude", "On ira (feat. Cerrone)", "Putain d\'époque", "Juno", "Le seum", "2 âmes", "Éclipse", "Avant de dormir", "Oublier", "Metaverse", "Lala (feat. So La Lune)", "Will Smith", "J\'ai perdu mon temps", "BBRY (feat. Guy2bezbar)", "VDA", "Iverson", "Netflix (feat. Mayo)", "Pour toujours", "Et alors"]
            },
            {
                titre: "Poupée Russe", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273bd729b2afb48f8383c85c3b1",
                category: "single", tracks: ["Poupée Russe"]
            },
            {
                titre: "Putain d\'époque (feat. S.Pri Noir)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c4e4b47e0cb6730f32360679",
                category: "single", tracks: ["Putain d\'époque (feat. S.Pri Noir)"]
            },
            {
                titre: "L.U.J.I + P.E.K.A", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27320e6438cab7abb3792bad17c",
                category: "project", tracks: ["Le Soleil", "Dans la Ciudad", "Palapalaba", "Ahou", "Contaminé", "Rampalampam", "Lâche-moi la Main (feat. Yro, Chaman Et Sully, Veskki, Chaps)", "Meme", "Refrain", "La Lune", "Die", "Roxanne", "De Quoi Tu Parles ?", "Août 2008", "Booska Ozone"]
            },
            {
                titre: "Palapalaba", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f21fda101cba894f7eee93b7",
                category: "single", tracks: ["Palapalaba"]
            },
            {
                titre: "Ahou", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273fd23590fef9b6f540b87ee6f",
                category: "single", tracks: ["Ahou"]
            },
        ]
    },
    {
        id: "100blaze",
        nom: "100 Blaze",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/100_blaze.webp",
        chiffres: "100k Abonnés",
        bio: "Le feu de Marseille. Un flow mitraillette impressionnant.",
        bioLongue: "100 Blaze a marqué les esprits avec son flow ultra-rapide et technique. Repéré très jeune, il a apporté une énergie nouvelle à la scène marseillaise. Capable de kicker à une vitesse folle tout en restant intelligible, il est l'un des techniciens les plus doués de sa génération.",
        albums: [
            {
                titre: "Marseille légendaire", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27353bf7de8bcd5ef39de1d5da3",
                category: "single", tracks: ["Marseille légendaire (feat. KYZI, Bengous, Kalash l\'Afro, Fahar, DRIME)"]
            },
            {
                titre: "CHIRAQ", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273375d39e2a0472b753967b7d7",
                category: "single", tracks: ["CHIRAQ (feat. Young Slash)"]
            },
            {
                titre: "Ghini", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273853d2eb9d8822d661eb36a98",
                category: "single", tracks: ["Ghini (feat. credo357)"]
            },
            {
                titre: "Cali au soleil", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2739e4d93ce06734bac45c676fc",
                category: "single", tracks: ["Cali au soleil (feat. Metah, Dika, 13 Organisé, Jul, Makiavel, TK, Messao, Kilam Salman)"]
            },
            {
                titre: "LUCIFUCK", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733ddab532d9c45b800a3f5300",
                category: "single", tracks: ["LUCIFUCK (feat. BeneFils)"]
            },
            {
                titre: "COLLAB", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c755ed0552ce27ea98089b0c",
                category: "single", tracks: ["COLLAB (feat. Serabeu)"]
            },
            {
                titre: "PAS DE BLAZE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27344d7816782b5b572f2479c6d",
                category: "single", tracks: ["PAS DE BLAZE"]
            },
            {
                titre: "Papier rose", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273508142405e3c6cc17abd2490",
                category: "single", tracks: ["Papier rose (feat. Jul, Naps)"]
            },
            {
                titre: "Blow", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a489a788b8acacb83e1bb1a8",
                category: "project", tracks: ["A la vôtre", "ASKIP", "Blow", "Fucked Up (feat Diddi Trix) (feat. Diddi Trix)", "Drogba", "Phenomenal (feat Lacrim) (feat. Lacrim)", "Wesh gros", "Pack M", "Papier rose (feat Jul & Naps) (feat. Jul, Naps)", "Coco", "Blazedog", "Zéro (feat Drasko) (feat. Drasko)", "Black Or White", "T\'étais où (feat Larry) (feat. Larry)", "Winner"]
            },
            {
                titre: "Zéro", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735206416ae4fc1f796d4664f1",
                category: "single", tracks: ["Zéro (feat. Drasko)"]
            },
            {
                titre: "T\'étais où", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27302288243dcd3af1c01070aff",
                category: "single", tracks: ["T\'étais où (feat. Larry)"]
            },
            {
                titre: "Fucked Up", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27368be535f83233320ff0add88",
                category: "single", tracks: ["Fucked Up (feat. Diddi Trix)"]
            },
            {
                titre: "Coco", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737f525bfea5a0b95b263a2d05",
                category: "single", tracks: ["Coco"]
            },
            {
                titre: "Phenomenal", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273568c7983a06451f97b8f42f6",
                category: "single", tracks: ["Phenomenal (feat. Lacrim)"]
            },
            {
                titre: "D.S.C.P", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732f7d126b28ec859df2863a99",
                category: "single", tracks: ["D.S.C.P"]
            },
            {
                titre: "Leonidas", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27340f5925dd4dc95c487a57f76",
                category: "single", tracks: ["Leonidas"]
            },
            {
                titre: "Youleuh 8", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273205ba63803262e4fbdd0d7e6",
                category: "single", tracks: ["Youleuh 8 (feat. Dika, Fresh laDouille, ZeGuerre, SAF, GOULAG)"]
            },
            {
                titre: "Baltimore", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b8b22aede5d6e2969b0a928e",
                category: "single", tracks: ["Baltimore (feat. Dj Quick, Timal)"]
            },
            {
                titre: "Ganja", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731ba9e2d97ee6039dfa0264d4",
                category: "single", tracks: ["Ganja (feat. 4Keus)"]
            },
            {
                titre: "Heat", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a8f19ebcc04d88b587cf5d56",
                category: "single", tracks: ["Heat (feat. Keny Arkana, Graya, Jul, Sauzer, Elams, Sat, Banguiz)"]
            },
            {
                titre: "Dans le club", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736ceb9048b3cd0c2cab166bf8",
                category: "single", tracks: ["Dans le club"]
            },
            {
                titre: "Depuis minot", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730c144d5ad6ec951b6897ef82",
                category: "project", tracks: ["Ce qu\'il se passe dehors", "Grossiste (feat. Alonzo)", "Tout le temps", "Ma place", "En insomnie", "Diamant", "Binks (feat. Koba LaD)", "Elle danse", "Comet", "Minot", "Balec", "Leave", "Shoot", "Ouh Hey (feat. RK)", "Untitled", "Panthéon", "Là-haut", "Pour ma team"]
            },
            {
                titre: "Ouh Hey", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733a3c25f43a50e6aa636bbcc0",
                category: "single", tracks: ["Ouh Hey (feat. RK)"]
            },
            {
                titre: "Binks", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730012a4fbcf3ae1371952db04",
                category: "single", tracks: ["Binks (feat. Koba LaD)"]
            },
            {
                titre: "Là-haut", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273c2a4a63d2a618ca7b646d380",
                category: "single", tracks: ["Là-haut"]
            },
            {
                titre: "Tout le cash", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2734de2d23ea123ecb63cf68608",
                category: "single", tracks: ["Tout le cash"]
            },
            {
                titre: "Sensationnel", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730c2a0c70a818cf2ba2a0e142",
                category: "single", tracks: ["Sensationnel"]
            },
            {
                titre: "Brolik", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273ce329629a72ed37491c5872c",
                category: "single", tracks: ["Brolik"]
            },
            {
                titre: "Freestyle Champagne", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273bb1590375c2f25ebe115df64",
                category: "single", tracks: ["Freestyle Champagne"]
            },
            {
                titre: "Kroos Toni", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273fe2bddf26853511f119b5f69",
                category: "single", tracks: ["Kroos Toni"]
            },
            {
                titre: "Sec", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273f9230796a70bdaa609527b34",
                category: "single", tracks: ["Sec"]
            },
            {
                titre: "Freestyle Japon", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273585809a61c82d28f35a38259",
                category: "single", tracks: ["Freestyle Japon"]
            },
            {
                titre: "Freestyle 100 Milles", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736d91f3f53f88fc4779cad6f3",
                category: "single", tracks: ["Freestyle 100 Milles"]
            },
            {
                titre: "Manchester", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273120438629777d3562d93a91c",
                category: "single", tracks: ["Manchester"]
            },
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/404billy.webp",
        chiffres: "40k Abonnés",
        bio: "Sombre et technique. Un univers noir et sans concession.",
        bioLongue: "404Billy propose un rap sombre, froid et chirurgical. Ses textes, souvent cyniques et désabusés, sont servis par une technique irréprochable. Il refuse les codes du rap commercial pour livrer une musique brute et authentique, qui séduit les amateurs de rap noir.",
        albums: [
            {
                titre: "Nouvelle Erreur", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bb4cd74622262812b53d29ee",
                category: "single", tracks: ["Nouvelle Erreur (feat. Tha Trickaz)"]
            },
            {
                titre: "archives.404", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ad6937596bbc5c95acec8b31",
                category: "project", tracks: ["MICHAEL MYERS 14.10.2021", "BIG MOVE 17.02.2022"]
            },
            {
                titre: "SAMO.", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27311cc828faff0314dde37c2d6",
                category: "project", tracks: ["Samo Era", "U. Paix & Amour", "N. B1jam1", "D. Extremist", "E. Musique Noire", "R. JeanJass Speech", "G. Cracovie", "R. Monsieur X", "O. Arthur Morgan", "U. Petit Billy", "N. Leviathan", "D. Occidental Psycho", "K. Crenshaw", "I. Haussmanien", "N. Boogeyman", "G. Don King"]
            },
            {
                titre: "NAZI IS REAL!", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273de6200095c80454f017a315a",
                category: "single", tracks: ["NAZI IS REAL!"]
            },
            {
                titre: "PINOCCHIO EPEMBIA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733f06aa5638386ef1376d6668",
                category: "single", tracks: ["PINOCCHIO EPEMBIA"]
            },
            {
                titre: "GDAY", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c1835bcd7626c018c227e26a",
                category: "project", tracks: ["BLACK KKK", "BROUILLARD"]
            },
            {
                titre: "La Plus Grande Des Illusions", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734d63a5eacef16ccfcadccadc",
                category: "single", tracks: ["La Plus Grande Des Illusions"]
            },
            {
                titre: "BLKKKK VAN GOGH 3", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e621aff2aba9b670e142e706",
                category: "project", tracks: ["Rutt\'s", "Amin Dada", "Bumpy", "Gengis Khan", "Le meilleur des mondes"]
            },
            {
                titre: "Mr.AAA", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2733056d8754b3e73fc3f91fb4c",
                category: "project", tracks: ["authenticité.", "créativité.", "rareté."]
            },
            {
                titre: "Title Shot", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737cbfb7d4feb944bc354245aa",
                category: "single", tracks: ["Title Shot"]
            },
            {
                titre: "Enfant Éternel", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739840a9ed997c9ee53c464d3b",
                category: "single", tracks: ["Enfant Éternel"]
            },
            {
                titre: "Sociologue & Sociopathe", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a7c691cd88c8a6034282452b",
                category: "single", tracks: ["Sociologue & Sociopathe"]
            },
            {
                titre: "VVS (feat. 404Billy)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27335549343eaa99d1b6110e0cb",
                category: "feat", tracks: ["VVS (feat. 404Billy)"]
            },
            {
                titre: "BLKKKK VAN GOGH 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27362b0dfb99b87a324df7530e3",
                category: "project", tracks: ["Big Bro", "Flop!", "Strictement Business", "6 Pierres"]
            },
            {
                titre: "Cassius", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ddc13bf8ccbe0f602bb66308",
                category: "single", tracks: ["Cassius"]
            },
            {
                titre: "Mouton Noir", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738f555b11b8a2cbf24971ef6f",
                category: "single", tracks: ["Mouton Noir"]
            },
            {
                titre: "Crack", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734ceb4a34f22fe1f219ed86d9",
                category: "single", tracks: ["Crack"]
            },
            {
                titre: "Docteur Vérité", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734ddca631743c35831590d087",
                category: "single", tracks: ["Docteur Vérité"]
            },
            {
                titre: "BLKKKK VAN GOGH", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27399c8c7f7ed5569e17ee39f40",
                category: "project", tracks: ["Anti Élite", "J\'fais le bilan calmement", "Scream", "Kidvillain"]
            },
            {
                titre: "100", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27390c3ecc09d51797894766c23",
                category: "project", tracks: ["Ammu Nation", "Antipodes", "Orphelin", "PAO", "C\'est pas interdit", "De temps en temps", "Mauvais", "Encore", "404Savage", "Cadenas", "Siège passager", "Même drapeau", "Silence"]
            },
            {
                titre: "404Savage", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b0ec590f0efb6c09263112db",
                category: "single", tracks: ["404Savage"]
            },
            {
                titre: "99% (Génocide)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d439f8bba6d3f56d2a864278",
                category: "single", tracks: ["99% (Génocide)"]
            },
            {
                titre: "88% (Window) (feat. Benjamin Epps)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734066d8c8cf419f83af34dc5f",
                category: "single", tracks: ["88% (Window) (feat. Benjamin Epps)"]
            },
            {
                titre: "77% (SOS) (feat. Guy2Bezbar)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27351dc93aee5b40ef93d9cd5e5",
                category: "single", tracks: ["77% (SOS) (feat. Guy2Bezbar)"]
            },
            {
                titre: "66% (X1000)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c834bb2595cc765b33d95a14",
                category: "single", tracks: ["66% (X1000)"]
            },
            {
                titre: "55% (Mauvais présage)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738ce38744abd667a43efb581c",
                category: "single", tracks: ["55% (Mauvais présage)"]
            },
            {
                titre: "44% (Oh shit)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736a759d83049ce3edfff968da",
                category: "single", tracks: ["44% (Oh shit)"]
            },
            {
                titre: "33% (Chargeur Vide) (feat. Frenetik)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273daa73810aa50d0b7f2499e90",
                category: "single", tracks: ["33% (Chargeur Vide) (feat. Frenetik)"]
            },
            {
                titre: "22% (Oligarchie)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738df9c5cef58d6dd3f2e56f7e",
                category: "single", tracks: ["22% (Oligarchie)"]
            },
            {
                titre: "11% (Nation)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e96ba7ed4732e8bd314db811",
                category: "single", tracks: ["11% (Nation)"]
            },
            {
                titre: "0% (Terrain glissant)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b1febe453121bc28ef9fb7d1",
                category: "single", tracks: ["0% (Terrain glissant)"]
            },
            {
                titre: "21Visions", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27344da9b50e77b016681cf315b",
                category: "project", tracks: ["Intuition", "Pas de geste", "Illico", "Karma (feat. Aszul)"]
            },
            {
                titre: "Supernova", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2732d8e481b11bbd7eaa90345e5",
                category: "project", tracks: ["Hors de prix", "Colonel", "Pearl Harbor", "Grillz", "Cœur fermé", "Oubliez-nous", "€", "Anti", "Fauve", "10 (feat. PLK)", "Temps"]
            },
            {
                titre: "Pearl Harbor", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736c3b01112d956427e64fd7b7",
                category: "single", tracks: ["Pearl Harbor"]
            },
            {
                titre: "Stop", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a14e6c532ad4d3788ea18088",
                category: "single", tracks: ["Stop"]
            },
            {
                titre: "Anti", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27394b75431477b77390d80c48e",
                category: "single", tracks: ["Anti"]
            },
            {
                titre: "T’es pas du gang", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736a2cfe4286b2c03e39aba95a",
                category: "single", tracks: ["T’es pas du gang (feat. DA Uzi)"]
            },
            {
                titre: "Rolex", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273974aa51b8e606235f32a3790",
                category: "single", tracks: ["Rolex"]
            },
            {
                titre: "A.P", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ebf5028dfd3672d3716e7580",
                category: "single", tracks: ["A.P"]
            },
            {
                titre: "Process", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a05bf3bb45b52541a5e5f4ef",
                category: "project", tracks: ["Vécu", "RVRE (feat. Damso)", "Rouler", "Espèce", "404 Freestyle (feat. Blaz Pit)", "Rageux", "Preuve", "Jour de guerre", "Célèbre", "Réel", "Sombre fan - Bonus"]
            },
            {
                titre: "Espèce", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27361e38ab02f1aecfe5aee6039",
                category: "single", tracks: ["Espèce"]
            },
            {
                titre: "Sombre fan", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27355ca0d388ae4ab3e4a5687d2",
                category: "single", tracks: ["Sombre fan"]
            },
            {
                titre: "RVRE", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27383c8cebc46e3dabe318d6b2e",
                category: "single", tracks: ["RVRE (feat. Damso)"]
            },
            {
                titre: "Hostile", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273b9d22e8c6a128ff61653832b",
                category: "project", tracks: ["404", "Azerty", "Zouin", "Error #4", "Dissidence", "M.I.P - Interlude", "Switch", "Demain", "Fuck le monde", "Demande à ton père"]
            },
            {
                titre: "T.P.L.C.", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27384e3ccef7c21a8a4dfa4e906",
                category: "single", tracks: ["T.P.L.C."]
            },
            {
                titre: "Error #1", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273727879de1fc05bc064df9d7f",
                category: "single", tracks: ["Error #1"]
            },
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/keeqaid.webp",
        chiffres: "10k Abonnés",
        bio: "Le futur de la New Wave. Des sonorités expérimentales.",
        bioLongue: "Keeqaid est un explorateur sonore. Il n'hésite pas à mélanger les genres et à utiliser sa voix comme un instrument. Ses morceaux, souvent courts et intenses, sont des concentrés d'énergie et de créativité qui préfigurent peut-être le rap de demain.",
        albums: [
            {
                titre: "PATRON", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273601a057041cfc0da1c9c4159",
                category: "project", tracks: ["Patron", "Cinéma", "Normal", "Tana", "Parano", "Tache", "Instablegram", "Location (feat. Genezio)", "Pardon my bad", "I know", "Barzante", "Bébé", "Supporter", "Foumasse", "Bénéfices (feat. Josman)", "Pression (feat. Lesky)", "J\'recommence", "Montre", "Tasty Crousty", "Je m\'en fou", "Tu veux nous ralentir"]
            },
            {
                titre: "Pression", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732ac82d8e48b620383b05f508",
                category: "single", tracks: ["Pression (feat. Lesky)"]
            },
            {
                titre: "Bénéfices", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735b34c308812a36d4454be380",
                category: "single", tracks: ["Bénéfices (feat. Josman)"]
            },
            {
                titre: "Location", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27393da9d0a0006b77488bac09f",
                category: "single", tracks: ["Location (feat. Genezio)"]
            },
            {
                titre: "Parano", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733ef27e45228ed5f26b731725",
                category: "single", tracks: ["Parano"]
            },
            {
                titre: "I know", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734470e91ba08adbf83d60e660",
                category: "single", tracks: ["I know"]
            },
            {
                titre: "AVANT PATRON", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739d697aa6af9a2a4873e5b96a",
                category: "project", tracks: ["Démon", "Bails", "Un verre", "Monsieur", "Saignant"]
            },
            {
                titre: "Keeqaid dans la mallette", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27322769fcfec2fdf45a64fad88",
                category: "single", tracks: ["Keeqaid dans la mallette (feat. Raplume, DVGZ)"]
            },
            {
                titre: "Tunnel", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27306a16d1affa2a6cad40b9dee",
                category: "single", tracks: ["Tunnel (feat. JRK 19)"]
            },
            {
                titre: "Putana", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27372f1275548152bfa7d399a7e",
                category: "single", tracks: ["Putana"]
            },
            {
                titre: "Arranger", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738a3790ec18704899ee7a5b0f",
                category: "single", tracks: ["Arranger"]
            },
            {
                titre: "Courage", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27352b494515e96d43c239ffb50",
                category: "single", tracks: ["Courage"]
            },
            {
                titre: "TATASS MUSIC 3", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e195eae7585533dec32d7ac4",
                category: "project", tracks: ["Mougouli (feat. ATLP, R100R, KAADiR, Djvck)", "Babyboo (feat. ATLP, R100R, KAADiR, Djvck)", "2 Mi-temps (feat. ATLP, R100R, KAADiR, Djvck)", "Porc (feat. ATLP, R100R, KAADiR, Djvck)"]
            },
            {
                titre: "Mougouli", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d7b4404411144573ad677bb9",
                category: "single", tracks: ["Mougouli (feat. ATLP, R100R, KAADiR, Djvck)"]
            },
            {
                titre: "Mangue", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739dd1a823ec5c8c33100961ac",
                category: "single", tracks: ["Mangue"]
            },
            {
                titre: "TENERIFE (feat. Keeqaid)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273734e7427ea553d33554dbedd",
                category: "feat", tracks: ["TENERIFE (feat. Keeqaid)"]
            },
            {
                titre: "INDECIS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273407dad1bfe1127aece589045",
                category: "single", tracks: ["INDECIS (feat. Skuna)"]
            },
            {
                titre: "TATASS MUSIC 9", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273eaf813ac885de1a6af8c2c02",
                category: "project", tracks: ["Le Crew (feat. ATLP, R100R, Djvck, KAADiR)", "Goulag (feat. ATLP, R100R, Djvck, KAADiR)", "Chipeur (feat. ATLP, R100R, Djvck, KAADiR)", "SahBabii (feat. ATLP, Scotty NL, R100R, Djvck, KAADiR)"]
            },
            {
                titre: "SahBabii", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734c4d48f3d1e80b951cd0b276",
                category: "single", tracks: ["SahBabii (feat. ATLP, R100R, Kadir, Djvck, Scotty NL)"]
            },
            {
                titre: "si simple", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273441f5566340bd4fbd7c46c09",
                category: "single", tracks: ["si simple (feat. 63KLUF)"]
            },
            {
                titre: "DANS LA VILLE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27365e561afdb00ff8125f17f4d",
                category: "single", tracks: ["DANS LA VILLE (feat. SAKI225)"]
            },
            {
                titre: "Voilà", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c3566cc8a2e68be2c75edf70",
                category: "single", tracks: ["Voilà"]
            },
            {
                titre: "Terminus", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273caafa2771d59635d27983dc5",
                category: "single", tracks: ["Terminus"]
            },
            {
                titre: "Rémunère (feat. Keeqaid)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f64a3c1dbedf944a65f1d1a6",
                category: "feat", tracks: ["Rémunère (feat. Keeqaid)"]
            },
            {
                titre: "Évoluer", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2730ec537d5eaed16ea1319d4f2",
                category: "single", tracks: ["Évoluer"]
            },
            {
                titre: "Pika", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736bbc8ba77f01829b9fa05f55",
                category: "single", tracks: ["Pika"]
            },
            {
                titre: "Tequila", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737bdbb23b56663e274bfb3b96",
                category: "single", tracks: ["Tequila"]
            },
            {
                titre: "Maison Mère", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27332d22c93e2583c30d1e00fbc",
                category: "single", tracks: ["Maison Mère"]
            },
            {
                titre: "Batard", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27306b09aece51515de77e80515",
                category: "single", tracks: ["Batard"]
            },
            {
                titre: "J\'ai le seum", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734dc7b85e08a8cd6d1b67e98d",
                category: "single", tracks: ["J\'ai le seum"]
            },
            {
                titre: "BENJAMIN (feat. Keeqaid)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ec8f3436642b6f410e4f0f95",
                category: "feat", tracks: ["BENJAMIN (feat. Keeqaid)"]
            },
            {
                titre: "QUALITÉ (feat. Keeqaid)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736b3e0ab9acb595e5ba203785",
                category: "feat", tracks: ["QUALITÉ (feat. Keeqaid)"]
            },
            {
                titre: "PILI PILI", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731972db64eaabc2bcef4cd122",
                category: "single", tracks: ["PILI PILI (feat. Booska-P)"]
            },
            {
                titre: "PARTOUT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ed4bdf7d4d605171160c488d",
                category: "single", tracks: ["PARTOUT (feat. Coyote Jo Bastard)"]
            },
            {
                titre: "Pas Ready", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b20e04867c1504796c918f58",
                category: "single", tracks: ["Pas Ready (feat. Lyele, La Fève)"]
            },
            {
                titre: "PURIZÉ", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736cf3384e94ae6626e145e3d3",
                category: "project", tracks: ["GANG (feat. Dafliky)", "PRISE ÉLECTRIQUE (feat. Dafliky)", "MERCEDES (feat. Dafliky)", "BOOM (feat. Dafliky)", "OUH OUH (feat. Dafliky)", "MENTEUR (feat. Dafliky)", "EH (feat. Dafliky)", "PARTY (feat. Dafliky)", "SHAWTY (feat. Dafliky)", "KEEFLIKY (feat. Dafliky)", "MARGINAL (feat. Dafliky)"]
            },
            {
                titre: "DIFFERENT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c2231d53d86056a9e0a36cd1",
                category: "single", tracks: ["DIFFERENT (feat. Ikaz Boi)"]
            },
            {
                titre: "BLABLABLA", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27322198bdb313f5779bed72070",
                category: "single", tracks: ["BLABLABLA (feat. Dafliky)"]
            },
            {
                titre: "GOSSES", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273774627097a926930a3f1dbba",
                category: "single", tracks: ["GOSSES (feat. Dafliky)"]
            },
            {
                titre: "CASH", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27392f93b335f72c4e5deca7c35",
                category: "single", tracks: ["CASH (feat. Myth Syzer)"]
            },
            {
                titre: "PARTICIPE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273078f65ce6760032b650bcf90",
                category: "project", tracks: ["ATLP flow", "Mixé", "Ohlala", "Bronx (feat. gapman)", "GTA", "Too much", "J\'brille (feat. La Fève)", "Bien (feat. La Fève)", "Baoulé", "MSJP", "OffWhite", "Coachella (feat. Sherifflazone)", "T\'exagère", "Piano"]
            },
            {
                titre: "OffWhite", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2732e8d1491fd006d833bb891b1",
                category: "single", tracks: ["OffWhite"]
            },
            {
                titre: "Chose", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b466d8ef394afd0592528552",
                category: "single", tracks: ["Chose"]
            },
            {
                titre: "Slide!", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273bef46d9861b04143b1543710",
                category: "single", tracks: ["Slide! (feat. Oskoow)"]
            },
            {
                titre: "Pics", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b0323f92cfc4b9c2514b842b",
                category: "single", tracks: ["Pics"]
            },
            {
                titre: "Treize", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e612e9fcb31db7f22d56dba8",
                category: "single", tracks: ["Treize"]
            },
            {
                titre: "GENRE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273418a70449a26a5290268a225",
                category: "project", tracks: ["FOCUS", "SNITCHS", "FLAMMES FLEMME", "TUE OU PAS - Penthouse (feat. R100R)", "OH NO"]
            },
            {
                titre: "ANTICIPE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736e76bffd1d41e06d7c8932f9",
                category: "project", tracks: ["Mars 12", "Mele (feat. yanKee bigbamba)", "C1Rat (feat. R100R)", "ThatsARat (feat. R100R)", "Peine des rues", "Tech", "Bah ouai", "Javel"]
            },
            {
                titre: "Freestyle Sponge S2-E4", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736ed3e91bf35b94794ce598a4",
                category: "single", tracks: ["Freestyle Sponge S2-E4 (feat. Sponge Productions)"]
            },
            {
                titre: "MicMac", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737768b1cc0a7f61900dffb61d",
                category: "single", tracks: ["MicMac"]
            },
            {
                titre: "Rizla", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f13999d9a52e6fd0b5e5bb46",
                category: "single", tracks: ["Rizla"]
            },
            {
                titre: "Face à moi", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27365d00ebafc12d52ea15971c7",
                category: "single", tracks: ["Face à moi"]
            },
            {
                titre: "Mon Sac", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273506865f97831c63f5be42581",
                category: "single", tracks: ["Mon Sac"]
            },
            {
                titre: "Camila Cabello", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e090a42d7ff927249fda8a55",
                category: "single", tracks: ["Camila Cabello"]
            },
            {
                titre: "J\'suis en mode", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736af8a8ca8bc83978e1a14fe6",
                category: "single", tracks: ["J\'suis en mode"]
            },
            {
                titre: "Monkey", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2739ac48c3ba922d57c7f0b3c89",
                category: "single", tracks: ["Monkey"]
            },
            {
                titre: "Dumb", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27343d290574bee461ccd99bcac",
                category: "single", tracks: ["Dumb"]
            },
            {
                titre: "Téléphone X", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c28b07b15d2d2ea219f879bc",
                category: "single", tracks: ["Téléphone X"]
            },
            {
                titre: "10+7", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27378f83580439a4e6c1511d6d7",
                category: "single", tracks: ["10+7"]
            },
            {
                titre: "Freestyle signature", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e7bfa2edcc4307c36c5580c4",
                category: "single", tracks: ["Freestyle signature"]
            },
            {
                titre: "Qui est Kee", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27386d0009be493fd848e4b38fc",
                category: "project", tracks: ["Cru la rue", "Milli", "Fais les sous", "L\'échec (feat. Kadir)", "Ils le savent", "Héro Zéro", "Louis V", "Qui est Kee", "Cette authenticité", "Balade 2", "Là-bas", "Dior (feat. R100R)", "Askip"]
            },
            {
                titre: "L\'échec", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273660d730cf31a37eed55ee4d2",
                category: "single", tracks: ["L\'échec (feat. Kadir)"]
            },
            {
                titre: "Freestyle x2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735ecb0becf5cca8364798b5e3",
                category: "single", tracks: ["Freestyle x2"]
            },
            {
                titre: "Freestyle x1", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27346c37c22659628987ab58734",
                category: "single", tracks: ["Freestyle x1"]
            },
            {
                titre: "Variété", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2736afd84ef84c059145a28d6c9",
                category: "single", tracks: ["Variété"]
            },
            {
                titre: "Repose en paix drill", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ac0e7e89e21e201d1e3aedf8",
                category: "single", tracks: ["Repose en paix drill (feat. La Nstra)"]
            },
            {
                titre: "Sous ma TN", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27397549efc3e634b3127580407",
                category: "single", tracks: ["Sous ma TN"]
            },
            {
                titre: "Chelou", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2734e3d6955185a6d961f4ef485",
                category: "single", tracks: ["Chelou"]
            },
            {
                titre: "Français", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273696346ba94549c7b64c9ea05",
                category: "single", tracks: ["Français"]
            },
        ]
    },
    {
        id: "diditrix",
        nom: "Didi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/didi_trix.webp",
        chiffres: "20k Abonnés",
        bio: "Le Trix. Un style décalé et une attitude unique.",
        bioLongue: "Didi Trix est un personnage à part. Avec son argot personnel et son attitude nonchalante, il a créé un style inimitable. Ses morceaux, souvent teintés d'humour et de second degré, sont portés par des flows originaux qui ne ressemblent à rien de connu.",
        albums: [
            {
                titre: "À L\'affût", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f6aa5479b64ab2019a763870",
                category: "single", tracks: ["À L\'affût (feat. Diddi Trix)"]
            },
            {
                titre: "Deep House", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e1baec91fa380eb7cfcc8bd4",
                category: "single", tracks: ["Deep House (feat. Diddi Trix)"]
            },
            {
                titre: "The Wire City", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736e8e6777ed484f0a8453abcf",
                category: "single", tracks: ["The Wire City (feat. Diddi Trix)"]
            },
            {
                titre: "FUNKY SOUL", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733c216172f26022198c395182",
                category: "single", tracks: ["FUNKY SOUL (feat. Diddi Trix)"]
            },
            {
                titre: "DOPE MUSIC, Vol. 2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27328efef9e424dfd90d807d83c",
                category: "project", tracks: ["WHAT CAN I DO (feat. Diddi Trix)", "RUE FONTAINE (feat. Diddi Trix)", "CRACK (feat. Diddi Trix)", "PAS PRÊT DE CESSER (feat. Diddi Trix)", "PLUS D\'VOIX (feat. Diddi Trix)"]
            },
            {
                titre: "Elle aimerait (feat. Diddi Trix)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731350ca3a08e9089262803fa0",
                category: "single", tracks: ["Elle aimerait (feat. Diddi Trix)"]
            },
            {
                titre: "DOPE MUSIC", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731f7d7169746abf65935ed66f",
                category: "project", tracks: ["MOVIE (feat. Diddi Trix)", "LES AFFAIRES (feat. Diddi Trix)", "FARDEAUX (feat. Diddi Trix)", "À CHAQUE FOIS (feat. Diddi Trix)", "PLUS ENVIE (feat. Diddi Trix)"]
            },
            {
                titre: "Les Affaires", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273cac194cb1269531d79be9479",
                category: "single", tracks: ["Les Affaires (feat. Diddi Trix)"]
            },
            {
                titre: "BAH OUAIS (FREESTYLE)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27334015c64b900697173834c15",
                category: "single", tracks: ["BAH OUAIS (FREESTYLE) (feat. Diddi Trix)"]
            },
            {
                titre: "Salle du temps #3 SevenTrix", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f9dff11f6a0ce24f499c9e03",
                category: "single", tracks: ["Salle du temps #3 SevenTrix (feat. Dinero, Diddi Trix)"]
            },
            {
                titre: "La Zip & La Zik", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735a894329e9497b21dbde73df",
                category: "single", tracks: ["La Zip & La Zik (feat. 3arbi, Diddi Trix)"]
            },
            {
                titre: "Trix City 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ff32827efb25248cd37819e1",
                category: "project", tracks: ["En #TT (INTRO) (feat. Diddi Trix)", "Ma voix (feat. Diddi Trix)", "Fondu (feat. Diddi Trix)", "Kaylatrix (feat. Diddi Trix, Kay The Prodigy)", "Dans tous les cas (feat. Diddi Trix)", "Trix Interlude (feat. Diddi Trix)", "THC (feat. Diddi Trix, TH)", "Tous les mois (feat. Diddi Trix)", "Le Benef (feat. Diddi Trix)", "Distant (feat. Diddi Trix)", "Enfants du Bitume (feat. Diddi Trix, La Bourse)", "Shanté (OUTRO) (feat. Diddi Trix)"]
            },
            {
                titre: "La Pente", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dedfba7e4f3c7cd8a484cda2",
                category: "single", tracks: ["La Pente (feat. Diddi Trix)"]
            },
            {
                titre: "Tomber pour mieux se relever", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a1c5d858c72c0192ecb87dc5",
                category: "single", tracks: ["Tomber pour mieux se relever (feat. Diddi Trix)"]
            },
            {
                titre: "Même pas", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a49ce3359f8bc6468fa5369e",
                category: "single", tracks: ["Même pas (feat. DECIMO, Diddi Trix)"]
            },
            {
                titre: "Trix Interlude", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273240510f8d550a8b7a82c3292",
                category: "single", tracks: ["Trix Interlude (feat. Diddi Trix)"]
            },
            {
                titre: "Fondu", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273636c64ec628b8dae1de044ca",
                category: "single", tracks: ["Fondu (feat. Diddi Trix)"]
            },
            {
                titre: "R.A.V", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738b407e235d072188bc49a4f9",
                category: "single", tracks: ["R.A.V (feat. La Bourse, Diddi Trix)"]
            },
            {
                titre: "100 ans", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2731e07bf46e3a971734a8f8583",
                category: "single", tracks: ["100 ans (feat. Diddi Trix)"]
            },
            {
                titre: "100 fautes", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bef1815a5fe473889440ce6e",
                category: "single", tracks: ["100 fautes (feat. Diddi Trix)"]
            },
            {
                titre: "Pussy", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273559ef7efd631e9fb95f5a5d9",
                category: "single", tracks: ["Pussy (feat. Diddi Trix)"]
            },
            {
                titre: "Ça m\'intéresse", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273da91cd288eeb56600221fac7",
                category: "single", tracks: ["Ça m\'intéresse (feat. Diddi Trix)"]
            },
            {
                titre: "Comme 2Pac", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c7d6e361da183271e9a2d279",
                category: "single", tracks: ["Comme 2Pac (feat. Diddi Trix)"]
            },
            {
                titre: "Fucked Up", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27368be535f83233320ff0add88",
                category: "single", tracks: ["Fucked Up (feat. 100 Blaze, Diddi Trix)"]
            },
            {
                titre: "BMF", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273502167c853003b036082c58d",
                category: "single", tracks: ["BMF (feat. Black D, Diddi Trix)"]
            },
            {
                titre: "Dope Boyz", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e766cf41b60ced60b8eafda8",
                category: "project", tracks: ["Baby (feat. Diddi Trix)", "Menace (feat. Diddi Trix)", "Bad (feat. Shiki Flex, 88KVLY & $olo)", "Pac Man (feat. Diddi Trix)", "Frosties (feat. Diddi Trix)"]
            },
            {
                titre: "90\'s", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27375c0d34f5da9e57f48a0f2ba",
                category: "single", tracks: ["90\'s (feat. BRAMO, Diddi Trix)"]
            },
            {
                titre: "Ici ça vend", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273846e17692537bc12457d6a1a",
                category: "single", tracks: ["Ici ça vend (feat. Diddi Trix)"]
            },
            {
                titre: "Crânes & Ossements (feat. Nahir, Diddi Trix, 88KVLY & Ouss Wayne)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d885e09b6018e41989489492",
                category: "single", tracks: ["Crânes & Ossements (feat. Nahir, Diddi Trix, 88KVLY & Ouss Wayne)"]
            },
            {
                titre: "Toujours", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cad04f909e430915fc239d21",
                category: "single", tracks: ["Toujours (feat. Diddi Trix)"]
            },
            {
                titre: "Quoi d\'neuf", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273c2e86e8939b44808c016c387",
                category: "single", tracks: ["Quoi d\'neuf (feat. Diddi Trix)"]
            },
            {
                titre: "La cité", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a6d29dbe2930aac870b3274d",
                category: "single", tracks: ["La cité (feat. Diddi Trix)"]
            },
            {
                titre: "C\'est nous", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730377947bd6ee0053f483a51a",
                category: "single", tracks: ["C\'est nous (feat. Diddi Trix)"]
            },
            {
                titre: "Détail", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2738f9cc3d17a0214efa6fa9692",
                category: "single", tracks: ["Détail (feat. Diddi Trix)"]
            },
            {
                titre: "Trix City", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2737626f2488b5aa77469066c24",
                category: "project", tracks: ["Bizz (feat. Diddi Trix)", "Dans la caisse (feat. Diddi Trix)", "Bédo (feat. Diddi Trix)", "Wow (feat. Diddi Trix)", "Périmètre (feat. Bramo)", "Compton (feat. Diddi Trix)", "Yo Diddi (feat. Diddi Trix)", "Chien d\'la casse (feat. Diddi Trix)", "Nine (feat. Noname & Laskiiz)", "Trix City (feat. Diddi Trix)", "La maille (feat. Diddi Trix)", "La touche (feat. Diddi Trix)", "Dans l\'block (feat. Diddi Trix)"]
            },
            {
                titre: "Pétou (Freestyle Rapelite)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2734b3cb56326c2b3e20a3e7c3e",
                category: "single", tracks: ["Pétou - Freestyle Rapelite (feat. Diddi Trix)"]
            },
            {
                titre: "Malabar", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2736d760c3205ed235070857c49",
                category: "single", tracks: ["Malabar (feat. Diddi Trix)"]
            },
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jungle_jack.webp",
        chiffres: "5k Abonnés",
        bio: "La jungle urbaine. Un rap imagé et percutant.",
        bioLongue: "Jungle Jack développe un univers visuel et sonore très fort. Ses textes sont remplis de métaphores et d'images frappantes. Il décrit la jungle urbaine avec un regard acéré, sur des productions qui mêlent sonorités modernes et influences plus classiques.",
        albums: [
            {
                titre: "Logo Doré", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cf2593aab7158b5acd5355ea",
                category: "single", tracks: ["Logo Doré (feat. Keroué)"]
            },
            {
                titre: "G des 90s", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273210ffd1eee14af425c4e3054",
                category: "single", tracks: ["G des 90s (feat. Jeune LC)"]
            },
            {
                titre: "CREAMLAND", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b9533ef5566e08216c397e3a",
                category: "project", tracks: ["CARTE GRAPHIQUE (feat. Hologram Lo\')", "PUNK RECORDS (feat. Hologram Lo\')", "DREAMCAST (feat. Hologram Lo\')", "ARNAQUES CRÈME ET BOTANIQUES (feat. Hologram Lo\')", "SCOOBYSNAXX (feat. Hologram Lo\', Nucky Thompson)", "LA CRÈME DE LA CRÈME (feat. Hologram Lo\')", "HUSTLE HARD (feat. Hologram Lo\', Lesram)", "L\'ÉCOLE DE L\'EST (feat. Hologram Lo\')", "SOLO AU RESTAURANT PT.2 (feat. Hologram Lo\', Alpha Wann)", "VENDEUR D\'ART (feat. Hologram Lo\')", "R.E.P. BIG POKEY (feat. Hologram Lo\', Huntrill)", "STUNTMAN JACK (feat. Hologram Lo\')", "LA GRANDE ÉVASION (feat. Hologram Lo\')"]
            },
            {
                titre: "SOLO AU RESTAURANT PT.2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733b6b83b56590334d8a2618e9",
                category: "single", tracks: ["SOLO AU RESTAURANT PT.2 (feat. Hologram Lo\', Alpha Wann)"]
            },
            {
                titre: "SCOOBYSNAXX", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273cde06b9e1f8c785349dd4b63",
                category: "single", tracks: ["SCOOBYSNAXX (feat. Hologram Lo\', Nucky Thompson)"]
            },
            {
                titre: "R.E.P. BIG POKEY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a900d966303037edcd52cb02",
                category: "single", tracks: ["R.E.P. BIG POKEY (feat. Hologram Lo\', Huntrill)"]
            },
            {
                titre: "HUSTLE HARD", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731ab995b8de96658fb37179d5",
                category: "single", tracks: ["HUSTLE HARD (feat. Hologram Lo\', Lesram)"]
            },
            {
                titre: "Jack Martin", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27342b76b1cc2dfc041067fd90b",
                category: "single", tracks: ["Jack Martin (feat. Martin Gal)"]
            },
            {
                titre: "Cognacs & Cigarettes", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273555bfdf6dd67fd3ab34befe4",
                category: "project", tracks: ["Dyonysos (feat. JeanJass)", "Dictons égyptiens (feat. JeanJass)", "Châteldon (feat. JeanJass)", "Rougon-Macquart (feat. JeanJass)", "Miyazaki (feat. JeanJass)", "Huile de mort (Interlude) (feat. JeanJass)", "Champagne violet (feat. JeanJass)", "Göbekli Tepe (feat. JeanJass)", "Le bruit et l\'odeur (feat. JeanJass)", "L\'ère du Verseau (feat. JeanJass, Caballero)", "Peintures rupestres (feat. JeanJass)"]
            },
            {
                titre: "L\'ère du Verseau", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d33a0c23ee38d6a5407f960f",
                category: "single", tracks: ["L\'ère du Verseau (feat. JeanJass, Caballero)"]
            },
            {
                titre: "Châteldon", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738cc5f1c9d1c7e370cbde7b4b",
                category: "single", tracks: ["Châteldon (feat. JeanJass)"]
            },
            {
                titre: "Amy", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ba56d00c49db32fd58c58949",
                category: "single", tracks: ["Amy (feat. Caballero & JeanJass, NDO Runway)"]
            },
            {
                titre: "Dyonysos", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735bda69e7b91431929a9078d8",
                category: "single", tracks: ["Dyonysos (feat. JeanJass)"]
            },
            {
                titre: "FABRICS (feat. Jungle Jack)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e030c1f0435471213c141037",
                category: "feat", tracks: ["FABRICS (feat. Jungle Jack)"]
            },
            {
                titre: "JUNGLE DES ILLUSIONS VOL 2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273af73f776b92d4614152fb141",
                category: "project", tracks: ["CHARBON ET DEVOUEMENT", "KABUKI", "SYSTÈME D", "L\'ÉQUILIBRISTE", "VUE IMPRENABLE SUR LA JUNGLE", "QUARTIERS EST (feat. Souffrance)", "L\'HOMME AU PLAN", "CAMP D\'ENTRAÎNEMENT (feat. Mairo)", "AVEC LE TEMPS", "XX FILES (feat. Alpha Wann)", "LE CHEMIN", "MENIL ET UNE NUIT", "DRAGONS AQUATIQUES (feat. Nucky Thompson)", "LA GRAINE", "SOLEILS DE L\'AMOUR (feat. Bloop-hä, G High DJo)", "BOURG PALETTE"]
            },
            {
                titre: "L\'homme des tavernes", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273191e8d714b4340b9150a0073",
                category: "single", tracks: ["L\'homme des tavernes (feat. GrandBazaar)"]
            },
            {
                titre: "Son calme", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27376984099eda13046c1207203",
                category: "single", tracks: ["Son calme (feat. rob)"]
            },
            {
                titre: "JUNGLE DES ILLUSIONS VOL 1", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27390fec704a65cffc55371b230",
                category: "project", tracks: ["JUNGLE PACK", "LA DÉCOUVERTE DU FEU", "DOOMSCROLL", "VPN", "VEGAPUNK", "JUNGLE JACK", "LA COLLINE DE L\'EST"]
            },
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maureen.webp",
        chiffres: "15k Abonnés",
        bio: "La reine de la Trap antillaise. Une énergie débordante.",
        bioLongue: "Maureen est l'une des figures majeures de la scène Shatta/Trap en Martinique. Son énergie explosive et son flow percutant ont conquis les clubs et les festivals. Elle représente avec fierté la nouvelle génération d'artistes antillais qui s'exportent à l'international.",
        albums: [
            {
                titre: "Queen", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a45aac90a544aa9fc2d333ed",
                category: "project", tracks: ["Welcome To Shattaland (feat. Walshy Fire)", "Emoji Pêche (feat. Konshens)", "Malalade (feat. Dj Glad)", "Kilimanjaro", "Cochoni", "Ensemble", "Thing for yuh (feat. Maroon Riddimz)", "Inside (feat. Jungeli, Shaz)", "Allo (feat. Naza)", "War Queen (feat. Mafio House)", "Dem mi to (feat. Yemi Alade, JD&JDS)", "Automatic", "Mon C ne t\'appartient pas", "Vanité"]
            },
            {
                titre: "Inside", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27387c23fb29e1d6910ea53a13d",
                category: "single", tracks: ["Inside (feat. Jungeli, Shaz)"]
            },
            {
                titre: "Welcome To Shattaland", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735399f4b4ca46467932369f4d",
                category: "single", tracks: ["Welcome To Shattaland (feat. Walshy Fire)"]
            },
            {
                titre: "War Queen", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273632f8954912a7cbcde9c8d37",
                category: "single", tracks: ["War Queen (feat. Mafio House)"]
            },
            {
                titre: "Thing for yuh", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736280806f1b0844cfcd3bad5a",
                category: "single", tracks: ["Thing for yuh (feat. Maroon Riddimz)"]
            },
            {
                titre: "Malalade", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273239a3060be7d0a579420c1d5",
                category: "single", tracks: ["Malalade (feat. Dj Glad)"]
            },
            {
                titre: "Emoji Pêche", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2737c771883e5fa1d40f174b2fc",
                category: "single", tracks: ["Emoji Pêche (feat. Konshens)"]
            },
            {
                titre: "Dem mi to", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ab6aa40db93a39daf1254b8b",
                category: "single", tracks: ["Dem mi to (feat. Yemi Alade, JD&JDS)"]
            },
            {
                titre: "Allo", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bf96fd4ff64e7b3934f1f6d9",
                category: "single", tracks: ["Allo (feat. Naza)"]
            },
            {
                titre: "Paddle", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27344fe120a35f8c71ec7b64775",
                category: "single", tracks: ["Paddle (feat. TKS 2G)"]
            },
            {
                titre: "4 SAISONS", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738e409d1db7e9ab6e95e06727",
                category: "single", tracks: ["4 SAISONS (feat. Kima)"]
            },
            {
                titre: "Chill (feat. Maureen) [Remix]", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273bb73406eb7cec3ebcebca4f9",
                category: "project", tracks: ["Chill - Remix (feat. Youka)", "Chill (feat. Maureen) - Bouyon remix", "Chill (feat. Youka)"]
            },
            {
                titre: "Bend Your Back - A COLORS SHOW", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732f9d71b21d094dacfedf5b5a",
                category: "single", tracks: ["Bend Your Back - A COLORS SHOW (feat. COLORS)"]
            },
            {
                titre: "Bend Your Back", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ea87de90ba5cbb5a1189d3f1",
                category: "single", tracks: ["Bend Your Back"]
            },
            {
                titre: "Shake It To The Max (FLY) (Kalash & Maureen Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734661c47c97ca13f467ef0872",
                category: "single", tracks: ["Shake It To The Max (FLY) - Kalash & Maureen Remix (feat. MOLIY, Silent Addy, Kalash)"]
            },
            {
                titre: "Daddy", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273daf5b577198adff1c804c758",
                category: "single", tracks: ["Daddy"]
            },
            {
                titre: "Cvni", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273faf512c5a2310349b1a2fd17",
                category: "single", tracks: ["Cvni (feat. Shaydee\'s, Mikado)"]
            },
            {
                titre: "Lass Palé", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273dd066824e23bd81adac792bb",
                category: "single", tracks: ["Lass Palé"]
            },
            {
                titre: "CHIC", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d9ffb8cb3cca15b4a2d55502",
                category: "single", tracks: ["CHIC (feat. Bamby)"]
            },
            {
                titre: "Money Pull Up", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2735b27eb9cecb78812936db7b9",
                category: "single", tracks: ["Money Pull Up (feat. Blaiz Fayah, Dj Glad)"]
            },
            {
                titre: "TOC", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737b275b81395fb3d698cda0b6",
                category: "single", tracks: ["TOC (feat. JYEUHAIR)"]
            },
            {
                titre: "Matos", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273693ec213455816b9b2a91438",
                category: "single", tracks: ["Matos (feat. Dj Quick)"]
            },
            {
                titre: "BAD QUEEN", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273ef998b6b56628197f74e6c9e",
                category: "project", tracks: ["Jiggle", "Kompet", "C\'est quoi ça", "Ding Dong (feat. Shanika)", "Pum Fat", "Kompet x Jiggle (feat. DJ Whyne)"]
            },
            {
                titre: "TKT PAS", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a3ef3517e21a329f65d7176f",
                category: "single", tracks: ["TKT PAS (feat. Mik L)"]
            },
            {
                titre: "Pum Fat", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734155619792041130da0c8c2d",
                category: "single", tracks: ["Pum Fat"]
            },
            {
                titre: "On n\'est pas potes", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e2e5e4be4b7cbc285c797982",
                category: "single", tracks: ["On n\'est pas potes"]
            },
            {
                titre: "Tell Me Who", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273072e0220b02669835d50ae09",
                category: "single", tracks: ["Tell Me Who (feat. N I K O)"]
            },
            {
                titre: "Sa Piti", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738c2b932d8373774f055ecb64",
                category: "single", tracks: ["Sa Piti (feat. Shaz)"]
            },
            {
                titre: "Pon Di Thing", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27354d03685a80573910c538134",
                category: "single", tracks: ["Pon Di Thing (feat. DJ Kawest, ROYALTY)"]
            },
            {
                titre: "Ding Dong (feat. Maureen & Natoxie)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273de810aa3af2416a0bb6c30a4",
                category: "feat", tracks: ["Ding Dong (feat. Maureen & Natoxie)"]
            },
            {
                titre: "Auto", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273accbce5971921aa04f5317b2",
                category: "single", tracks: ["Auto (feat. MadeInParis)"]
            },
            {
                titre: "Bend down", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c5def696c7c55d1efd851185",
                category: "single", tracks: ["Bend down (feat. Mikado)"]
            },
            {
                titre: "Whine it up", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738b09570742d7802a01fabc99",
                category: "single", tracks: ["Whine it up (feat. Staniski, Mr. Vegas)"]
            },
            {
                titre: "Bomba", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c371c8e088dbf8ef64ec58fb",
                category: "single", tracks: ["Bomba"]
            },
            {
                titre: "Kleenex - Loxymore One Shot", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735b9ec687d034c9a2f1c95691",
                category: "single", tracks: ["Kleenex - Loxymore One Shot"]
            },
            {
                titre: "La base", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273720a93f4c832393f245a6cc2",
                category: "single", tracks: ["La base"]
            },
            {
                titre: "La Maureen", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c6e708afe0aad9bc05ea0a99",
                category: "single", tracks: ["La Maureen"]
            },
            {
                titre: "Tic", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273b001b45e4b5b56b160ae5da4",
                category: "single", tracks: ["Tic"]
            },
            {
                titre: "Diss", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27350f5795cbc3b370eb275d85f",
                category: "single", tracks: ["Diss"]
            },
            {
                titre: "Flex", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273ebfd1bb55e87b8186b986bd0",
                category: "single", tracks: ["Flex"]
            },
            {
                titre: "Joke", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27336ab578350dc363a05a60f55",
                category: "single", tracks: ["Joke"]
            },
        ]
    },
    {
        id: "greenmontana",
        nom: "Green Montana",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/green_montana.webp",
        chiffres: "80k Abonnés",
        bio: "Le froid du Nord. Mélodies glaciales et envoûtantes.",
        bioLongue: "Green Montana, signé sur le label 92i, a développé un univers sonore unique, froid et mélancolique. Ses mélodies autotunées et ses productions planantes créent une atmosphère envoûtante, presque hypnotique. Il est l'un des artistes les plus singuliers de la scène belge.",
        albums: [
            {
                titre: "DIE YOUNG", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273aa7ad318876bb9b8e32eb8c9",
                category: "single", tracks: ["DIE YOUNG (feat. HD La R)"]
            },
            {
                titre: "Confort", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2738ffc369234ab537b3a462d42",
                category: "single", tracks: ["Confort (feat. Roshi)"]
            },
            {
                titre: "Raz de marée (feat. Green Montana)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2731d519d0af99dbdde9c2c3863",
                category: "feat", tracks: ["Raz de marée (feat. Green Montana)"]
            },
            {
                titre: "M4RTINMARGIELA (feat. Green Montana)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2735b97ea7cc623b58dab738c7c",
                category: "feat", tracks: ["M4RTINMARGIELA (feat. Green Montana)"]
            },
            {
                titre: "TDV", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27350624dc0c9ef39b7d2dd0f68",
                category: "single", tracks: ["TDV (feat. BU$HI)"]
            },
            {
                titre: "Nouvelle R (Green Remix)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732f26e4fabd050c6d24387f95",
                category: "single", tracks: ["Nouvelle R - Green Remix (feat. Guy2Bezbar, Jolagreen23)"]
            },
            {
                titre: "MAYA JAMA (feat. Green Montana)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273b9bc381d0a24a5aa31919d4c",
                category: "feat", tracks: ["MAYA JAMA (feat. Green Montana)"]
            },
            {
                titre: "Fame", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273f2e1a5ed32dcbf4496fa6b99",
                category: "single", tracks: ["Fame (feat. Zed)"]
            },
            {
                titre: "LONGLIFE NICKY LARSON (feat. Green Montana)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27321ded7f3a4a610d1e24ba419",
                category: "feat", tracks: ["LONGLIFE NICKY LARSON (feat. Green Montana)"]
            },
            {
                titre: "Aaliyah", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27309d9c41b8ee3e6b1fc122435",
                category: "single", tracks: ["Aaliyah (feat. USKY)"]
            },
            {
                titre: "SHE LIT", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c31308b84bc18dfee843d45f",
                category: "single", tracks: ["SHE LIT (feat. J9ueve)"]
            },
            {
                titre: "SAUDADE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273344403ed94dcda43160ad0f3",
                category: "project", tracks: ["phileas fogg", "ishtar", "bissap", "bank (feat. Josman, Tiakola)", "inspecteur gadget", "beverly hills 90210", "dashboard (feat. ISHA)", "oseille mon amour", "saudade", "la brique et la drogue", "ekenge", "alfred borden", "riche nouveau monde", "barcelona92 (feat. SDM)", "mc laren & likelemba", "la haine", "paire de celine", "finalement riche (feat. Theodorepourdevrai)"]
            },
            {
                titre: "finalement riche", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e36eeaf4b669107e87b16b2a",
                category: "single", tracks: ["finalement riche (feat. Theodorepourdevrai)"]
            },
            {
                titre: "dashboard", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d922ee2eb42e7f6fbe7a2b35",
                category: "single", tracks: ["dashboard (feat. ISHA)"]
            },
            {
                titre: "barcelona92", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d07c13829d7ace221cc9dcc5",
                category: "single", tracks: ["barcelona92 (feat. SDM)"]
            },
            {
                titre: "bank", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273afaf2f2c8e77b0fbf9ab3dda",
                category: "single", tracks: ["bank (feat. Josman, Tiakola)"]
            },
            {
                titre: "ishtar", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273614b32408a9be1a90e37adcc",
                category: "single", tracks: ["ishtar"]
            },
            {
                titre: "phileas fogg", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2731a2d389858eab109fa51c8b7",
                category: "single", tracks: ["phileas fogg"]
            },
            {
                titre: "ROUGE NÉON", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273079589b90b2937d8d16de884",
                category: "project", tracks: ["GINGER MC KENNA", "92i MAYBACH"]
            },
            {
                titre: "N.I.A (feat. Green Montana)", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27373a8b9315ec00befa1a51f0e",
                category: "feat", tracks: ["N.I.A (feat. Green Montana)"]
            },
            {
                titre: "Nwar sur Nwar", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e0ecd6b2b043d9074ad303f5",
                category: "single", tracks: ["Nwar sur Nwar (feat. SDM)"]
            },
            {
                titre: "Si ça compte", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273df5305186ac37d21f1fe29ee",
                category: "single", tracks: ["Si ça compte (feat. So La Lune)"]
            },
            {
                titre: "DĀD", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d9deff745dde71521559ac99",
                category: "single", tracks: ["DĀD (feat. Raplume)"]
            },
            {
                titre: "NOSTALGIA+", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2737e9db700d98fd2d9a487df67",
                category: "project", tracks: ["PAPIERS", "WALDORF ASTORIA", "BEZOS-PINAULT-BOLLORE", "DIAMANT", "NEYMAR JR (feat. SDM)", "CHAQUE JOUR DE LA SEMAINE", "PARFUM", "MPIAKA (feat. Guy2Bezbar)", "LA OU LE VENT NOUS MENE", "SUPER HEROS", "BUGATTI BOYS", "CAMERA", "COMME TIME BOMB", "COCAINE COWBOY", "ADN", "ULTRAMAX400", "VEHICULE ALLEMAND", "LE ZEN ET LES SEINS"]
            },
            {
                titre: "NEYMAR JR", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bad9e6e08cec3a3cb447f752",
                category: "single", tracks: ["NEYMAR JR (feat. SDM)"]
            },
            {
                titre: "MPIAKA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27330b6141e690fb12df3085d79",
                category: "single", tracks: ["MPIAKA (feat. Guy2Bezbar)"]
            },
            {
                titre: "MONEYTIME (feat. Green Montana)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273fcd5271f44c76e29973e09fe",
                category: "feat", tracks: ["MONEYTIME (feat. Green Montana)"]
            },
            {
                titre: "PARFUM", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273861bfbdf5ac18427998ef4c1",
                category: "single", tracks: ["PARFUM"]
            },
            {
                titre: "WALDORF ASTORIA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732dd5510458f620bb3561e420",
                category: "single", tracks: ["WALDORF ASTORIA"]
            },
            {
                titre: "92i", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27377e20d311b4ce90ed8f0e809",
                category: "single", tracks: ["92i (feat. SDM, Booba, Bilton, Sicario)"]
            },
            {
                titre: "MELANCHOLIA 999", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27314abf407f1d62493d9641654",
                category: "project", tracks: ["PJP NMR", "EVIDEMMENT (feat. SDM)", "FUM22 NOCIVE", "EYELINER", "NOUVEAU MONDE", "BB PART.3", "COMME UN AIMANT", "CALIFORNIA", "MAGIC CITY 999", "4RM"]
            },
            {
                titre: "4RM", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27354e4150b92f80e5e1028514f",
                category: "single", tracks: ["4RM"]
            },
            {
                titre: "EVIDEMMENT", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a6bc2e82d2a9c810ab49b525",
                category: "single", tracks: ["EVIDEMMENT (feat. SDM)"]
            },
            {
                titre: "BB Part.3", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273e7875fcce83512c31bc9610e",
                category: "single", tracks: ["BB PART.3"]
            },
            {
                titre: "ALASKA", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735a03e9b8c7ac2f2f7f70e9c0",
                category: "project", tracks: ["TROUBLE", "MEFIANT", "LES ENNUIS", "GANJA", "BB PART. 2", "SEQUELLES", "MEDAILLE", "RISQUES", "J\'ROULE", "BILLIE JEAN", "DUCCI 3", "REVES MAGIQUES", "SALE TCHOIN", "TOUT GACHER (feat. Booba)", "PALM ANGELS", "LICEPO"]
            },
            {
                titre: "TOUT GACHER", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735833f9b12f8efaf0528ef024",
                category: "single", tracks: ["TOUT GACHER (feat. Booba)"]
            },
            {
                titre: "Sale tchoin", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735ed22b9e3b62e581018d2ced",
                category: "single", tracks: ["SALE TCHOIN"]
            },
            {
                titre: "Les ennuis", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27375daba9c06d52cfd3f508e53",
                category: "single", tracks: ["LES ENNUIS"]
            },
            {
                titre: "Séquelles", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273bbd2f7862d69331296b78e7d",
                category: "single", tracks: ["SEQUELLES"]
            },
            {
                titre: "6AM", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273d861ed5716b11b6ab8125627",
                category: "single", tracks: ["6AM"]
            },
            {
                titre: "Ça recommence", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273325a459a088e43489b778519",
                category: "single", tracks: ["Ça recommence"]
            },
            {
                titre: "Risques", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27322f425c22c90f97182505169",
                category: "single", tracks: ["RISQUES"]
            },
            {
                titre: "Juste un moment", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273951e4a1661741e9866fac4cd",
                category: "single", tracks: ["Juste un moment"]
            },
            {
                titre: "Orange Métallique", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2735a87e1189800e07a1a80280b",
                category: "project", tracks: ["Amsterdam", "Rester Dîner"]
            },
            {
                titre: "Bleu Nuit", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2737a2e99077505563f46a2f20e",
                category: "project", tracks: ["Briquet", "Maman Le Sait"]
            },
        ]
    },
    {
        id: "larry",
        nom: "Larry",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/larry.webp",
        chiffres: "200k Abonnés",
        bio: "L'enfant terrible de Strasbourg. Flow rapide et énergique.",
        bioLongue: "Larry s'est fait connaître avec sa série de freestyles 'Freeberiz'. Son flow rapide, saccadé et énergique est sa marque de fabrique. Il raconte la vie de quartier avec une fougue et une insolence qui ont séduit un large public, faisant de lui la fierté de Strasbourg.",
        albums: [
            {
                titre: "SIGNAL #3", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d9602f70f30b556739cc3ed6",
                category: "single", tracks: ["SIGNAL #3"]
            },
            {
                titre: "Obligé", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273c8cc7ce72aaf2be34e7aca9e",
                category: "single", tracks: ["Obligé (feat. Dollypran)"]
            },
            {
                titre: "SIGNAL#2", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f4386211018b382c651b1fa5",
                category: "single", tracks: ["SIGNAL#2"]
            },
            {
                titre: "SIGNAL#1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e0bf5a2e84c75171e3ba0322",
                category: "single", tracks: ["SIGNAL#1"]
            },
            {
                titre: "NCE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2737649c719ebb3aba7f8aa439b",
                category: "project", tracks: ["CDS", "JACTE", "MALSAIN (feat. Stavo)", "1 POUR TOUS (feat. Sofiane)", "ROSE", "PRADA", "BATMAN", "BRILLER", "HÉ HÉ", "NO BACK", "911", "OKOCHA", "THANKS", "BENTAYGA", "GO", "TOUR DU MONDE", "POUKI POUKAVE", "CANIGRR"]
            },
            {
                titre: "MALSAIN (feat. Stavo)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e20b2118c2ca9124e8806a72",
                category: "single", tracks: ["MALSAIN (feat. Stavo)"]
            },
            {
                titre: "1 POUR TOUS (feat. Sofiane)", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27379969c3e43a512d87c7a71df",
                category: "single", tracks: ["1 POUR TOUS (feat. Sofiane)"]
            },
            {
                titre: "BATMAN", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730c415f7eac9c886ecd822df5",
                category: "single", tracks: ["BATMAN"]
            },
            {
                titre: "Ice Ice", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273dec8821b48cfb60309575b92",
                category: "single", tracks: ["Ice Ice (feat. Kerchak, LEVELSANTANA)"]
            },
            {
                titre: "SAPE NWAR", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273db30a46dfe07eab1b94c345c",
                category: "single", tracks: ["SAPE NWAR"]
            },
            {
                titre: "COEUR CRADE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734be6f6e418ee8898d2a60677",
                category: "single", tracks: ["COEUR CRADE"]
            },
            {
                titre: "3PRL", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c90ed8dc44c64e06b5c40dd1",
                category: "single", tracks: ["3PRL"]
            },
            {
                titre: "FULL VIRGULE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736095dfd2253713b4abce1ef7",
                category: "single", tracks: ["FULL VIRGULE (feat. Negrito)"]
            },
            {
                titre: "EN PÉPÉ 5", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273b53ee1460560e40e916e0885",
                category: "single", tracks: ["EN PÉPÉ 5"]
            },
            {
                titre: "INDICA", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735664e0f36ae12638b7e6b319",
                category: "single", tracks: ["INDICA"]
            },
            {
                titre: "TCMV", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cb96f90a9c5321c6169dedaa",
                category: "single", tracks: ["TCMV"]
            },
            {
                titre: "NOHALAL", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2730a791fa09860164319dbf015",
                category: "single", tracks: ["NOHALAL"]
            },
            {
                titre: "EN PÉPÉ 4", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f7c5eaf29b9ec14da4da8788",
                category: "single", tracks: ["EN PÉPÉ 4"]
            },
            {
                titre: "Elle s\'appelle Maria (feat. Larry)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27316736d8bb0671bc256462ead",
                category: "feat", tracks: ["Elle s\'appelle Maria (feat. Larry)"]
            },
            {
                titre: "BEEP BIP", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273193cf4585d165a3d96bfd8f3",
                category: "single", tracks: ["BEEP BIP"]
            },
            {
                titre: "ROSE", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273237680fb14c7dca2cdf692ad",
                category: "single", tracks: ["ROSE"]
            },
            {
                titre: "T\'étais où", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27302288243dcd3af1c01070aff",
                category: "single", tracks: ["T\'étais où (feat. 100 Blaze)"]
            },
            {
                titre: "EN PÉPÉ 3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27320abc24e762900a59ea60e4f",
                category: "single", tracks: ["EN PÉPÉ 3"]
            },
            {
                titre: "Charcle (feat. Larry)", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27353ecafefab2946335bfff3b0",
                category: "feat", tracks: ["Charcle (feat. Larry)"]
            },
            {
                titre: "EN PÉPÉ 2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2739f35318b37b7ec94e1bb77f8",
                category: "single", tracks: ["EN PÉPÉ 2"]
            },
            {
                titre: "EN PÉPÉ 1", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d65db8094ce3f5a1d2e4872b",
                category: "single", tracks: ["EN PÉPÉ 1"]
            },
            {
                titre: "Petit Prince", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27362ffa8c62b6ea6938065e77c",
                category: "project", tracks: ["Intro (Gothvm)", "Moonwalk", "Off White", "Sirène", "Colis (feat. Maes)", "VNTM", "Goosebumps (feat. Hamza)", "Noblabla", "Double L (feat. Leto)", "Zig Zag", "Baby", "Barode", "Crackfood", "Voeux", "6T"]
            },
            {
                titre: "Double L (feat. Leto)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a43a6beb2aae4baf67713324",
                category: "single", tracks: ["Double L (feat. Leto)"]
            },
            {
                titre: "Ca part en chasse (Extrait de la BO de \"Or Noir\")", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735a94e46eb6213ca5d006cd15",
                category: "project", tracks: ["Ca part en chasse - Extrait de la BO de \"Or Noir\" (feat. Or Noir)"]
            },
            {
                titre: "Noblabla", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27384749679025d94ac23d2645f",
                category: "single", tracks: ["Noblabla"]
            },
            {
                titre: "Sirène", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273136efbca07a383a132916432",
                category: "single", tracks: ["Sirène"]
            },
            {
                titre: "Booster", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c3a957e93cc7b578a20940c7",
                category: "single", tracks: ["Booster"]
            },
            {
                titre: "Paye (Extrait du projet Art de rue)", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2732dfefa7475c4dde251929711",
                category: "single", tracks: ["Paye"]
            },
            {
                titre: "CITY OF ANGELS (feat. Larry) [Larry Remix]", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a4d27fa92098e4b44cac34ec",
                category: "feat", tracks: ["CITY OF ANGELS (feat. Larry) - Larry Remix"]
            },
            {
                titre: "Routine", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273404c3ef94741c6af631ff320",
                category: "single", tracks: ["Routine"]
            },
            {
                titre: "Freeberiz 2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736d84302ea8ab3c932b26ccea",
                category: "single", tracks: ["Freeberiz 2"]
            },
            {
                titre: "Medellin", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273427e3318674846c3f1b5e860",
                category: "single", tracks: ["Medellin (feat. Ashafar)"]
            },
            {
                titre: "Cité blanche", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273572b61ddae5fcfffd94c6104",
                category: "project", tracks: ["En bas", "Tieks", "Cité blanche", "Woin Woin (feat. RK)", "Question réponse", "Cocaina", "Enfant compliqué", "Sacoche", "Maman me disait", "187 (feat. Zed)", "Hey Boy", "Gun", "Amstramgram", "Drugs", "C\'est mort", "Rachet", "Jamais", "Freeberiz5", "Tuba"]
            },
            {
                titre: "Question réponse", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273241014b15c3a3b5a0fafab01",
                category: "single", tracks: ["Question réponse"]
            },
            {
                titre: "Block", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273d5104007f8921e84f2712866",
                category: "single", tracks: ["Block"]
            },
            {
                titre: "Woin Woin (feat. RK)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27304b7b6567d5e48da60a4021a",
                category: "single", tracks: ["Woin Woin (feat. RK)"]
            },
            {
                titre: "Gamme", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273401370bfdffe38dea2ce01c5",
                category: "single", tracks: ["Gamme"]
            },
            {
                titre: "Beatles", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2739b2202b0164e94d2d0ad3545",
                category: "single", tracks: ["Beatles"]
            },
            {
                titre: "Gaz", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a332f74443ff3e8832d62218",
                category: "single", tracks: ["Gaz"]
            },
            {
                titre: "Booska Beriz", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2739fc1756ec873500ae95a79cc",
                category: "single", tracks: ["Booska Beriz"]
            },
            {
                titre: "Sacoche", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2730e7317c9e5a4f9765220d9f3",
                category: "single", tracks: ["Sacoche"]
            },
            {
                titre: "HOOD", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273706ae64d8f95cb49a7f3eaf0",
                category: "single", tracks: ["HOOD"]
            },
            {
                titre: "Larry", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273b2ebdd586d5328f8cb0eca1d",
                category: "project", tracks: ["Cocker Spaniel", "Wah", "Sea Of Ringo Starrs", "Marco", "Pushing", "Doggo", "Fako", "Liar", "Deeper"]
            },
            {
                titre: "Pasta", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2732df1f6b9ea52fd12d109b35c",
                category: "single", tracks: ["Pasta"]
            },
            {
                titre: "Abattue (Hors-série)", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273c3969540a1c10e2a2083c6d8",
                category: "single", tracks: ["Abattue (Hors-série)"]
            },
            {
                titre: "Bling", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2730c62fc4e034907be9fe9ab86",
                category: "single", tracks: ["Bling (feat. Bendo)"]
            },
            {
                titre: "Freeberiz 4", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27329024f3a0acb73b7cc2ea344",
                category: "single", tracks: ["Freeberiz 4"]
            },
            {
                titre: "Cible (Hors-Série)", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2739077bebc9c1b44be289c74e0",
                category: "single", tracks: ["Cible (Hors-Série)"]
            },
            {
                titre: "Freeberiz 3", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b27322d6aeeba225be38b6e70230",
                category: "single", tracks: ["Freeberiz 3"]
            },
            {
                titre: "FREEBERIZ 1", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b2739aa8d1e158c285aaa3bb19cd",
                category: "single", tracks: ["FREEBERIZ 1"]
            },
        ]
    },
    {
        id: "kpri",
        nom: "Kpri",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kpri.webp",
        chiffres: "30k Abonnés",
        bio: "Le K. Technique et authenticité lyonnaise.",
        bioLongue: "Kpri, ancien membre du groupe Lyonzon, poursuit sa route en solo. Il a su conserver l'énergie brute et sombre de la Drill lyonnaise tout en développant son propre style. Ses textes crus et son flow percutant en font l'un des rappeurs les plus respectés de la scène underground.",
        albums: [
            {
                titre: "Kpri Tape, vol. 4", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27321f6a230468bfa62efe65ff0",
                category: "project", tracks: ["Penthouse", "Malagueta", "2 Violets", "FR", "Interlude", "Van Cleef", "A7", "Ma Leugeu"]
            },
            {
                titre: "FR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739558eff09d647658b6c69719",
                category: "single", tracks: ["FR"]
            },
            {
                titre: "A7", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f1c9f9216bf7256c97b7e0b6",
                category: "single", tracks: ["A7"]
            },
            {
                titre: "FROZEN SIFT (feat. Kpri)", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e8d111b2b325addd75d16599",
                category: "feat", tracks: ["FROZEN SIFT (feat. Kpri)"]
            },
            {
                titre: "Mon Beurre", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e880fb57dd7e908f4e9ee3e6",
                category: "single", tracks: ["Mon Beurre (feat. Mini RTTCLAN, Gouap RTTCLAN)"]
            },
            {
                titre: "Malagueta", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27381813b41c7b0e18799eb0468",
                category: "single", tracks: ["Malagueta"]
            },
            {
                titre: "2002", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27378dbb9a2be0c9529cfe4d9f7",
                category: "project", tracks: ["RENTABLE", "MACRO", "L.C.E", "TEXTILE", "MAGNUM", "INTERLUDE", "TROPHÉES", "QUE DICES", "CUISINE", "SEMBLABLE", "AFFILIÉ", "PAPIER"]
            },
            {
                titre: "L.C.E", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c1b5fc673ef77d89cd57a729",
                category: "single", tracks: ["L.C.E"]
            },
            {
                titre: "Affilié", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730f2cc10d9e2e143f05c2ad6d",
                category: "single", tracks: ["Affilié"]
            },
            {
                titre: "Telegram", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e616f9a58261594321d5e8ff",
                category: "single", tracks: ["Telegram (feat. Dwen)"]
            },
            {
                titre: "Kpri Tape, vol. 3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273cf617cdcf1dadcd3d8ea1c85",
                category: "project", tracks: ["Intro", "Volant", "Maybach Phantom (feat. Freeze corleone)", "Automatique", "Business", "Interlude", "À la base", "Frappe 3 (feat. ASHE 22)", "24/7", "Basket", "Hôtel", "Outro"]
            },
            {
                titre: "Maybach Phantom", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d6ee2379e8d78137c50dd711",
                category: "single", tracks: ["Maybach Phantom (feat. Freeze corleone)"]
            },
            {
                titre: "Frappe 3", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c6df09c1115e85bc3ceaa381",
                category: "single", tracks: ["Frappe 3 (feat. ASHE 22)"]
            },
            {
                titre: "Volant", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273680ebc23bbfd1e2b7b64186d",
                category: "single", tracks: ["Volant"]
            },
            {
                titre: "Business", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27390f5f037101a6965b06b145a",
                category: "single", tracks: ["Business"]
            },
            {
                titre: "Booskpri", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273652a87d71739eeda28d22f78",
                category: "single", tracks: ["Booskpri"]
            },
            {
                titre: "Tous les jours (Extrait du projet Bendo X Vol. 2)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ca350253df083df1e7d58735",
                category: "single", tracks: ["Tous les jours (feat. MONKEY D, Bendo)"]
            },
            {
                titre: "Où est la nina ?", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27379c494608a092fd6cc0f8e34",
                category: "single", tracks: ["Où est la nina ? (feat. Gouap RTTCLAN)"]
            },
            {
                titre: "Kpri Tape, Vol. 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731f50f53035dd676384d5a111",
                category: "project", tracks: ["Philly", "Mossos", "Freestyle Impeccable", "Barceloneta", "Frappe 2 (feat. ASHE 22)", "Interlude", "Sarin", "Routine (feat. Rtt clan)", "Délocalisé", "Flash", "Climatisé"]
            },
            {
                titre: "Kpri Tape, Vol. 1", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2736d3b22b08d08b0e428ae8bff",
                category: "project", tracks: ["Boisson", "Mérité", "Méthode", "Interlude", "Ticket", "Revé", "Bracelet"]
            },
        ]
    },
    {
        id: "3010",
        nom: "3010",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/3010.webp",
        chiffres: "20k Abonnés",
        bio: "Le visionnaire. Un artiste complet et avant-gardiste.",
        bioLongue: "3010 est un artiste complet : rappeur, producteur, réalisateur. Toujours en avance sur son temps, il expérimente de nouvelles sonorités et de nouveaux flows. Son univers futuriste et sa technique irréprochable font de lui une référence pour les amateurs de rap pointu.",
        albums: [
            {
                titre: "BARAKA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273a0affc1e52c6383dbfbbebee",
                category: "project", tracks: ["mon nom", "images en optique", "seul", "manifeste", "pour tendre la main", "la réponse (feat. jean-charles de castelbajac)", "mains froissées", "pas de nom", "baraka", "petit je", "suprême disco (feat. jean-charles de castelbajac)", "mon cœur"]
            },
            {
                titre: "Mathématiques", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2734ae4befa0b7e84edb367cd75",
                category: "single", tracks: ["Mathématiques (feat. Infinit\')"]
            },
            {
                titre: "Focus", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2738efe40d52c1a0072f7279e24",
                category: "single", tracks: ["Focus (feat. Sheldon, Epektase)"]
            },
            {
                titre: "33010", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2736837ed9af09f2eda53cf08cc",
                category: "single", tracks: ["33010 (feat. 8ruki)"]
            },
            {
                titre: "07 06", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273296ac6666e345efb77a1cd00",
                category: "single", tracks: ["07 06 (feat. Gros Mo)"]
            },
            {
                titre: "Mission Impossible", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d489dab67a98856653eee214",
                category: "single", tracks: ["Mission Impossible"]
            },
            {
                titre: "Palais", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273db65df9c3b430c1c13566161",
                category: "single", tracks: ["Palais"]
            },
            {
                titre: "Génie Civil", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737b9f6529e5983537a87278d6",
                category: "single", tracks: ["Génie Civil"]
            },
            {
                titre: "Bon Port", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273a03bfd963e4f9600a50f6fb1",
                category: "single", tracks: ["Bon Port"]
            },
            {
                titre: "Toute Musique Parle Toute Seule", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273d27785680b88328689845f4a",
                category: "single", tracks: ["Toute Musique Parle Toute Seule"]
            },
            {
                titre: "Playlist", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2731580119c2d6048df8f6a0dd0",
                category: "single", tracks: ["Playlist"]
            },
            {
                titre: "Histoire Totalement Précise", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737fa06d9e13379700701ce1ae",
                category: "single", tracks: ["Histoire Totalement Précise"]
            },
            {
                titre: "Comme Par Hasard", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cd5f80443e2b590ca74c1042",
                category: "single", tracks: ["Comme Par Hasard"]
            },
            {
                titre: "Dans Le Complexe", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273c1536e3eeec53d6a55c11bf1",
                category: "single", tracks: ["Dans Le Complexe"]
            },
            {
                titre: "Ice", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273aaeca000a9f2a97cf105377d",
                category: "single", tracks: ["Ice"]
            },
            {
                titre: "Confédération Des Planètes", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738682708b58acd65966e80f8c",
                category: "single", tracks: ["Confédération Des Planètes"]
            },
            {
                titre: "Halls d\'Amenti", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27360160ad81ae323c613eff459",
                category: "single", tracks: ["Halls d\'Amenti"]
            },
            {
                titre: "Parifornie Leg", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f906afae69dfed5ff5124f26",
                category: "single", tracks: ["Parifornie Leg"]
            },
            {
                titre: "Crystal", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ba24fdb207e9d232c9c197a5",
                category: "single", tracks: ["Crystal"]
            },
            {
                titre: "JUSTE UN MYTHE (VOIS CMT JSAYIN)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27382598d41829a806346e8f2f4",
                category: "single", tracks: ["JUSTE UN MYTHE (VOIS CMT JSAYIN)"]
            },
            {
                titre: "A RVL", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273dbeb335be8d4111456e0f23d",
                category: "single", tracks: ["A RVL"]
            },
            {
                titre: "ATLAS", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2733da24e0eea1c3d952404d2c8",
                category: "single", tracks: ["ATLAS"]
            },
            {
                titre: "SOCIAL", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27314a8a6a752f0bd047a0d2c80",
                category: "single", tracks: ["SOCIAL"]
            },
            {
                titre: "À CHAQUE NIVEAU", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273620ad42cea69265ae027a326",
                category: "single", tracks: ["À CHAQUE NIVEAU"]
            },
            {
                titre: "BAHOE", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27393fa65f4b271a377eaddc901",
                category: "single", tracks: ["BAHOE"]
            },
            {
                titre: "PARADISE NOT HELL", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27384956f4a38ebbaf8568cfa3c",
                category: "single", tracks: ["PARADISE NOT HELL"]
            },
            {
                titre: "VOXPOPULI", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2737657ec6212ff4a7fa3cf216f",
                category: "single", tracks: ["VOXPOPULI"]
            },
            {
                titre: "PRETTY LADY", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2738df4cfb61d69227760302271",
                category: "single", tracks: ["PRETTY LADY"]
            },
            {
                titre: "PREMIÈRE HEURE", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273874cedd6b784e2d5f621e033",
                category: "single", tracks: ["PREMIÈRE HEURE"]
            },
            {
                titre: "SYMBOLIQUE", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273cc593d0d927e54410b5e30f8",
                category: "single", tracks: ["SYMBOLIQUE"]
            },
            {
                titre: "3095 pt2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2731842b52996d6423f2dcfcc26",
                category: "single", tracks: ["3095 pt2 (feat. Alpha Wann, Nekfeu)"]
            },
            {
                titre: "FORME FINALE", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737c6bdda0554f76cde40f3494",
                category: "project", tracks: ["Real Time", "Paname - Bethléem", "M. Bachirou (Interlude)", "S Class", "Montée", "Touche Légère", "Correct", "Tesla", "Outro", "Justesse", "Trop Décalé", "Né La Nuit", "Runaway Freestyle", "La Voie Lactée", "Alto"]
            },
            {
                titre: "Eddie", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273adb017f848f6c4defef458c8",
                category: "project", tracks: ["Bruce Wayne (feat. Rayansy)", "Mieux En Vrai", "Comme Il Le Fallait (feat. Pesoa, OG L\'enf, KSA)", "Nouveau", "Tellement", "Hardware (feat. OG L\'enf)", "Back Dans La Ville", "Still Ill (feat. Teddy Redd)", "Lourd"]
            },
            {
                titre: "Simon Emoes", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736c4c57de76a808bf9e9f010e",
                category: "project", tracks: ["Faites Entrer L\'accusé", "Trésor", "On Est (feat. MV, KSA, Pesoa)", "Non", "Trankil Trankil - Chopped Up Not Slopped Up", "Mince", "Tah Les Oufs", "J\'ai Le Temps", "Mets La Caméra (feat. MV)"]
            },
            {
                titre: "M!crophone", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2738c551491e35956d2e344dec2",
                category: "project", tracks: ["Surf", "Mania", "Dans Les Airs", "Yebü Interlude", "Flex (feat. MV, HoussBad, OG L\'enf, Kalvo, KSA)", "Danger (feat. KSA, OG L\'enf, Don Chapo, MV, HoussBad)", "OG L\'Enf 3K 1", "Payet", "Studio (feat. Original G)"]
            },
            {
                titre: "Benny Blaxxtars", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2738a138403cc92745b524134d5",
                category: "project", tracks: ["Waw", "BA$$ (feat. Rayansy)", "Temps De Grâce", "Bête De Chaleur (feat. KSA)", "Boules Quies (feat. KSA)", "En Bas", "Untitled 001 (feat. May Hi)", "One Shot (feat. Rayansy)", "Warning"]
            },
            {
                titre: "Manny", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736219eb1b03fe100253fd5574",
                category: "project", tracks: ["Hypocrite", "Fusion (feat. MV, Pesoa, KSA)", "Nul Besoin De Dire Mot", "La Même", "JM1", "J\'lui Manque (feat. Rayansy, Teddy Redd)", "Tête Haute", "Billet D\'entrée"]
            },
            {
                titre: "Ben", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2730c21f35a69d80a4a7ee5d9a1",
                category: "project", tracks: ["Poivre d\'Arvor (feat. MV)", "C\'est Pas Moi", "Tempête (feat. Rayansy, OG L\'enf)", "Boom", "Comme Ça (feat. Teddy Redd)", "Force", "Percocet (feat. MV)", "Balcon (Interlude)", "Ame Aux Manies"]
            },
            {
                titre: "N2MO", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273794e1a08c4a1193e51d4e62c",
                category: "project", tracks: ["N2MO", "Nuageux (feat. Take a Mic)", "Paranoia", "Fantôme", "Pas De Limites (feat. Rayansy)", "Changerait", "Hier Et Aujourd\'hui", "Conversations", "Dans Le Noir", "Ma Planète", "Promesse", "Tout Ce Que J\'vais Dire"]
            },
            {
                titre: "En Bas", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27373cd696989f0f4d77ec6961c",
                category: "single", tracks: ["En Bas"]
            },
            {
                titre: "Un", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273af169bbf87acf41b978e47c5",
                category: "project", tracks: ["Amen 3", "Pas De Terme", "Ciel Étoilé", "Letsgo! (feat. Slimka)", "Mannequins", "Pas Le Seul (feat. Di-Meh)", "Vaste (feat. MV)", "Débrouillardise", "RVL Shxt (Instrumentale) - Instrumental", "Temps", "Entre"]
            },
            {
                titre: "Épisode 0", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273463e0ac5601b44be0b56edb1",
                category: "project", tracks: ["Scellé (feat. Lord Mexico, MV)", "23", "Méfie Bien", "Présent", "Dans Cette Merde", "En Dehors Du Temps", "Nécessaire", "Sas", "Estime", "Rien D\'intéressant"]
            },
            {
                titre: "8D", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27357798b0828fbd6ffc0dad7c0",
                category: "project", tracks: ["L\'Ange", "Mille Hommes", "Normal", "On Vit Ce Truc", "Pour Moi", "Quand Ca Se Lève", "RAFLE", "Shang Tsung", "St. Tropez", "Trop Different"]
            },
            {
                titre: "GROOVE", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273e827b69696066e4058a1c296",
                category: "project", tracks: ["Flow", "Gangster", "Les Enfoirés", "Low", "Merco Benz"]
            },
            {
                titre: "PRISTINE", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2733259b6ee9e23e3a202bb0142",
                category: "project", tracks: ["Sans Ceder", "Already", "Vibre", "Pas D\'la Compet (Instrumentale) - Instrumental", "808", "Belmondo", "Diamants & Décimales"]
            },
            {
                titre: "Compliments", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2734acb7d41c439918e05661a92",
                category: "project", tracks: ["Chanmé", "Back", "Roll Up", "Au-Delà", "Rider", "Zone", "Chaque Nuit", "Détendre", "Gauche / Droite", "Everybody Know", "Monopole", "Sans Titre / Bête De Chaleur", "Barbe Bleue", "Méchant"]
            },
            {
                titre: "Renaissance", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27365586ee9f6163056235d41a1",
                category: "project", tracks: ["Renaissance", "Cmt Jvis", "Regular", "Censé Le Faire", "Ferrari Ali", "Sans Rappel", "J\'entends", "Fenêtres", "Perdu Patience", "Cette Vue", "Comme Quand Mon Bord Sing", "00h", "F Ça", "Fast Life Blues", "J\'ride"]
            },
            {
                titre: "PHŒNIX", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2732f3496f8d7601191cddadd52",
                category: "project", tracks: ["PHŒNIX", "RVL", "Check", "Sous Clé (feat. Maïck Mendy)", "Diamonds", "I Been On", "J\'aime Ça", "Tant Qu\'elle Met Le Player", "OTW", "Méo (Instrumentale) - Instrumental", "Interlude 2", "Fin (Instrumentale) - Instrumental", "Yamoussoukro (feat. OG L\'enf, Ratu$)", "Dans Un Rêve Interlude", "Charmed", "Eau Froide"]
            },
            {
                titre: "Gauche / Droite", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273f70dbddfc88d22172d25c7e7",
                category: "single", tracks: ["Gauche / Droite"]
            },
            {
                titre: "Nemo-Tape", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273c2654bf43a3a4d62df60f027",
                category: "project", tracks: ["Emotion IV (intro)", "Stéréo rêve", "Vénus", "Aero Life (feat. Pesoa, Beeby P)", "T-shirt interlude", "Hype", "Admets (Rockstar, nous) (feat. Pesoa)", "Laser (feat. Os)", "Cool interlude", "Justice", "Mon bord et moi", "Tv", "Hard", "Qui me demande (Bonus Track)"]
            },
            {
                titre: "Heat Wave +", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273ae28820df3147e5fb323deb5",
                category: "project", tracks: ["Intro", "Lost", "Jusqu\'à ce qu\'on devienne riche", "Pas en club , nous", "Parles money", "Video vixen", "Extraordinaire"]
            },
            {
                titre: "Heat Wave", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2739951efb916d20cf26659aa21",
                category: "project", tracks: ["Intro", "Killer 2", "Ils mentent", "D.O.A.", "I wanna rock freestyle (feat. Pops, Rogiz, Tony Karino)", "Pas le même que l\'homme (feat. Pesoa, Ol\'Steel)", "Ozeille, Tiz et Pessa (feat. Tony Karino, Ol\'Steel)", "Toute seule", "Mon bord & moi", "Et un autre jour (feat. Pesoa)", "What happened to that boy freestyle", "Caché dans nos rêves", "Power", "O let\'s do it freestyle", "Trop (feat. Pesoa, Ol\'Steel)", "Cherches pas (feat. Ol\'Steel)", "Assalam aleikoum (feat. Pesoa)", "Qui m\'demande Part.2"]
            },
            {
                titre: "Zones", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2731aa55f21a440d88b7db87603",
                category: "project", tracks: ["Statement (feat. Béne l\'enflure, Take a Mic, Teddy Redd)", "Quoi d\'autre", "Sur terre", "La lumière manque", "Reviens (feat. Teddy Redd)"]
            },
            {
                titre: "Monstre", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b2739dcc285d4f2ea309793ba255",
                category: "project", tracks: ["Monstre", "Ça tue", "Interne interlude", "100 fois", "Pareil", "Intra"]
            },
            {
                titre: "Nemo", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273f0c499476c223d18dbfebbc2",
                category: "project", tracks: ["NEMO", "Chozquel (feat. K-Reen)", "Dors plus", "Là-haut", "Addict (feat. Pesoa)", "Z", "Un rien", "Space (feat. Sneazzy)", "Organique interlude", "Attendant le ciel", "Bye Bye", "Interlude", "Rolling Stones", "Étranger (feat. Charles-Henri Nanor)", "HLM Music (feat. Eddie Hyde)", "Adios, Pt. II", "Scred"]
            },
            {
                titre: "Premium, vol. 1 (Mixtape)", annee: "2014", cover: "https://i.scdn.co/image/ab67616d0000b273789d29c1c541f8fcce3746ae",
                category: "project", tracks: ["8h45 (feat. DJ Battle)", "Aller retour - Intro (feat. DJ Battle)", "Premium (feat. DJ Battle)", "6\'7\" Freestyle (feat. DJ Battle, Sneazzy West)", "3095 (feat. DJ Battle, Alpha Wann)", "Mega (feat. DJ Battle, David Jeune)", "Interlude (feat. DJ Battle)", "Transpire (feat. DJ Battle, MV)", "Look at Me Now (feat. DJ Battle)", "C\'est pas la même - Remix (feat. DJ Battle, La Fouine, Still Fresh)", "Photogénique (feat. DJ Battle, Pesoa)", "Stratosphère (feat. DJ Battle)", "Interlude, pt. 2 (feat. DJ Battle)", "Je suis une légende (feat. DJ Battle)"]
            },
            {
                titre: "Pavanance invisible", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27363792c02efccd0d9b9fbf950",
                category: "single", tracks: ["Pavanance invisible"]
            },
            {
                titre: "Program", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b2739c11ef9a9f78167e6a271092",
                category: "project", tracks: ["Intro", "Mon Sol", "Destin", "La Base", "Ma Paire (feat. Pesoa)", "Mélodrame", "Différentes Vues", "Vois Comment J\'Veux T\'Dire", "Jeunes Francs"]
            },
            {
                titre: "La Base (Prod. 3010)", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27345a432f6fbbf28054bc7e4f1",
                category: "single", tracks: ["La Base - Prod. 3010 (feat. disiz)"]
            },
            {
                titre: "Premium III", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273bb0559467d5604022d4e54c9",
                category: "project", tracks: ["Intro (feat. Oxmo Puccino)", "Mes deuils (feat. Pesoa)", "Parifornie", "Chasseurs de rêves", "Salaam", "Lamborghini Twingo", "Flashy", "Différentes vues", "Sans fleurs", "Poursuivre", "Le meilleur jeu", "Toujours dessus", "Le suivant", "Karma - Outro", "Lamborghini Twingo - Remix (Hosted by Dj Battle) (feat. Pesoa, MV, Teddy Redd, KSA, Take a Mic, Houssam)", "Killer 4 - Bonus inédit"]
            },
            {
                titre: "Différentes Vues", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273f4729893fbf44d19e60a43e6",
                category: "single", tracks: ["Différentes vues"]
            },
            {
                titre: "Le suivant", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273b0b34b7392d3e46039aa15d2",
                category: "single", tracks: ["Le suivant"]
            },
            {
                titre: "Lamborghini Twingo", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b2736c94cc625beca77648ece942",
                category: "single", tracks: ["Lamborghini Twingo"]
            },
            {
                titre: "Parifornie", annee: "2012", cover: "https://i.scdn.co/image/ab67616d0000b273d9f08c61a9a7096feecd3578",
                category: "single", tracks: ["Parifornie"]
            },
        ]
    },
    {
        id: "1d1r",
        nom: "1D1R",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1d1r.webp",
        chiffres: "10k Abonnés",
        bio: "La Drill sombre et mélancolique du 91.",
        bioLongue: "1D1R est un jeune rappeur du 91 qui s'est fait remarquer par son style sombre et mélancolique. Sur des productions Drill ou Trap, il raconte ses peines et ses espoirs avec une voix grave et touchante. Il incarne la relève du rap de rue, authentique et sans filtre.",
        albums: [
            {
                titre: "Sama Love", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273410cd5beda65969e7f967ab1",
                category: "single", tracks: ["Sama Love"]
            },
            {
                titre: "Dopamine", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27302c56796bff9d5611b848190",
                category: "single", tracks: ["Dopamine"]
            },
            {
                titre: "Mentale", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736a83eac383234d2a30fbdec2",
                category: "single", tracks: ["Mentale"]
            },
            {
                titre: "ROSALIA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27336c7d860ca73653470b97fb9",
                category: "single", tracks: ["ROSALIA"]
            },
            {
                titre: "Couci-couça", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2732bbbe65f683237d30dacaa2b",
                category: "single", tracks: ["Couci-couça"]
            },
            {
                titre: "Meraki", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27325f0bdf33de30b1010adb5e3",
                category: "project", tracks: ["Couci-couça", "Sodade", "Obsessionnel", "Balade (feat. Vacra)", "Loca", "Vahina", "Gazoline", "10x10 (feat. Dertay)", "Galactique (feat. Ghost Killer Track)", "All eyes on me", "Béni (feat. Ike Ortiz)"]
            },
            {
                titre: "Galactique", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2733df57523f031031f958986f6",
                category: "single", tracks: ["Galactique (feat. Ghost Killer Track)"]
            },
            {
                titre: "Béni", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273e4fe3108370bc2aeb42027d2",
                category: "single", tracks: ["Béni (feat. Ike Ortiz)"]
            },
            {
                titre: "10x10", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273dc241d4f7946215a15b9113c",
                category: "single", tracks: ["10x10 (feat. Dertay)"]
            },
            {
                titre: "Vahina", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2739552abe639591a3a484f9610",
                category: "single", tracks: ["Vahina"]
            },
            {
                titre: "Balade", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273da37985a7dc6d37b9feec1e5",
                category: "single", tracks: ["Balade (feat. Vacra)"]
            },
            {
                titre: "Gazoline", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273d5bbb1f9cbf7d4c65884463d",
                category: "single", tracks: ["Gazoline"]
            },
            {
                titre: "Davy Jones", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d1b44c5e3df7395ccff39df6",
                category: "single", tracks: ["Davy Jones (feat. Raplume)"]
            },
            {
                titre: "Amoul Solo", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27355dad54e701faf0084c5d28d",
                category: "single", tracks: ["Amoul Solo"]
            },
            {
                titre: "Neti Neti", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273642cfcd1ea8b923904c32ab3",
                category: "single", tracks: ["Neti Neti"]
            },
            {
                titre: "Caroline", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273aece94b10021bd3a9f27f31d",
                category: "single", tracks: ["Caroline"]
            },
            {
                titre: "Mona Lisa", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a459e5d3a21f4caf3bfd0d2e",
                category: "single", tracks: ["Mona Lisa"]
            },
            {
                titre: "Hors série", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730b5b0aca60e10abf6f8fe090",
                category: "single", tracks: ["Hors série"]
            },
            {
                titre: "Le corner", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273b3e788f51bbb6a79a4b694dc",
                category: "single", tracks: ["Le corner"]
            },
            {
                titre: "Le parking", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27335d8415a5bd8c0e4b477e2c9",
                category: "single", tracks: ["Le parking"]
            },
            {
                titre: "L\'épicerie", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273fb2cb17224b66e6dab119031",
                category: "single", tracks: ["L\'épicerie"]
            },
            {
                titre: "Playground", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734e81a42ee93af90229edc52b",
                category: "single", tracks: ["Playground"]
            },
            {
                titre: "L\'aérodrome", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273c669b275a6a24174000a74b6",
                category: "single", tracks: ["L\'aérodrome"]
            },
            {
                titre: "Au 8ème", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273df36dc95efd0fb65d453f72a",
                category: "single", tracks: ["Au 8ème"]
            },
            {
                titre: "Prisonnier", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273fadab672db4e9f9a69f7d40b",
                category: "single", tracks: ["Prisonnier"]
            },
            {
                titre: "Liaisons", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2737b31d42eb5706fe09236928e",
                category: "single", tracks: ["Liaisons"]
            },
            {
                titre: "Maquis", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2730647f3b0b48fe9ac8c3490e5",
                category: "single", tracks: ["Maquis"]
            },
            {
                titre: "Impasse", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273d731cff2d12955e03c04eed9",
                category: "single", tracks: ["Impasse"]
            },
            {
                titre: "Tard la night", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27370f6683bca705baffaae7424",
                category: "single", tracks: ["Tard la night"]
            },
            {
                titre: "Beldia", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273d99a3949e777327d0d8e6ef0",
                category: "single", tracks: ["Beldia"]
            },
            {
                titre: "Mélodrill 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27351e93b53897c8acf727bda89",
                category: "single", tracks: ["Mélodrill 2"]
            },
            {
                titre: "Un two", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27375f3df7e8127ccf629df64c0",
                category: "project", tracks: ["J\'vais l\'faire", "Au dessus du vide", "Drift", "Déter", "Hola oh !", "Life", "Oh Shit !", "Qlf qlm", "Last Not Least"]
            },
        ]
    },
    {
        id: "63og",
        nom: "63OG",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/63og.webp",
        chiffres: "5k Abonnés",
        bio: "La voix du 63. Un rap brut et sans concession.",
        bioLongue: "63OG représente le département du Puy-de-Dôme sur la carte du rap français. Avec un style brut et direct, il raconte la réalité de la province, loin des clichés parisiens. Son énergie et sa détermination lui permettent de se faire une place sur la scène nationale.",
        albums: [
            { titre: "63OG", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=63OG", category: "project", tracks: ["63OG", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/8ruki.webp",
        chiffres: "30k Abonnés",
        bio: "Le boss de la Plug. Un style unique et décalé.",
        bioLongue: "8ruki est le pionnier de la Plug Music en France. Avec son label 888, il a créé un mouvement à part entière. Son flow nonchalant, ses ad-libs omniprésents et ses productions planantes créent une ambiance unique, à la fois relaxante et hypnotique.",
        albums: [
            { titre: "8ruki", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=8ruki", category: "project", tracks: ["8ruki", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "aboudebeing",
        nom: "Abou Debeing",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/abou_debeing.webp",
        chiffres: "100k Abonnés",
        bio: "Le hitmaker. Des mélodies qui restent en tête.",
        bioLongue: "Abou Debeing, ancien membre du Wati B, est un faiseur de tubes. Il a collaboré avec les plus grands (Dadju, Aya Nakamura) et a su imposer son style en solo. Ses morceaux, mêlant pop urbaine et sonorités afro, sont taillés pour les radios et les clubs.",
        albums: [
            { titre: "Debeing", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/abou_debeing_debeing.jpg", category: "project", tracks: ["Debeing", "Intro", "Le début", "Le commencement", "L'origine", "La naissance", "La création", "Outro"] }
        ]
    },
    {
        id: "akhenaton",
        nom: "Akhenaton",
        statut: "legende",
        style: "Boom Bap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/akhenaton.webp",
        chiffres: "200k Abonnés",
        bio: "Le pharaon du rap français. Une légende vivante.",
        bioLongue: "Akhenaton, leader du groupe IAM, est l'une des figures les plus respectées du rap français. Rappeur, producteur, réalisateur, il a une carrière immense. Ses textes, empreints de spiritualité, de philosophie et de références historiques, ont élevé le niveau d'écriture du rap en France.",
        albums: [
            { titre: "Métèque et Mat", annee: "1995", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_métèque_et_mat.jpg", category: "project", tracks: ["Métèque et Mat", "Bad Boys de Marseille", "La Face B", "Je ne suis pas à plaindre", "Au fin fond d'une contrée", "Eclater un type des Assedic"] },
            { titre: "Sol Invictus", annee: "2001", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/akhenaton_sol_invictus.jpg", category: "project", tracks: ["Sol Invictus", "AKH", "Entrer dans la légende", "Nid de guêpes", "Une journée chez le diable", "Mes soleils et mes lunes"] }
        ]
    },
    {
        id: "tks2g",
        nom: "TKS 2G",
        chiffres: "10k Abonnés",
        bio: "La mélodie du futur. Un style avant-gardiste.",
        bioLongue: "TKS est un jeune artiste qui expérimente de nouvelles sonorités. Mêlant rap et mélodies futuristes, il crée un univers sonore unique. Ses textes, souvent abstraits, laissent une grande place à l'interprétation et à l'émotion.",
        albums: [
            { titre: "TKS 2G", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=TKS", category: "project", tracks: ["Intro", "Mélodie", "Futur", "TKS", "2G", "Outro"] }
        ]
    },
    {
        id: "winnterzuko",
        nom: "Winnterzuko",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/winnterzuko.webp",
        chiffres: "65k Abonnés",
        bio: "Hyperpop et sentiments. Le renouveau de la scène.",
        bioLongue: "Winnterzuko est l'un des pionniers de l'hyperpop en France. Ses morceaux, rapides et énergiques, parlent d'amour et de jeux vidéo avec une nostalgie touchante. Il représente une nouvelle génération d'artistes qui n'a pas peur de briser les codes.",
        albums: [
            { titre: "WINNTERMANIA", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/winnterzuko_winntermania.jpg", category: "project", tracks: ["Winntermania", "Monde", "Faux", "Vrai", "Hyper", "Pop", "Sentiments"] },
            { titre: "VON", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/winnterzuko_von.jpg", category: "project", tracks: ["Von", "Berlin", "Paris", "Londres", "New York", "Tokyo"] }
        ]
    },
    {
        id: "1plike140",
        nom: "1PLIKÉ140",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/1pliké140.webp",
        chiffres: "100k Abonnés",
        bio: "La Drill du 140. Une énergie sombre et brute.",
        bioLongue: "1PLIKÉ140 est l'une des figures de proue de la Drill française. Originaire de Clamart, il livre un rap sombre et sans concession. Son flow nonchalant et ses textes crus racontent la réalité de son quartier avec une authenticité glaçante.",
        albums: [
            { titre: "1PLIKTOI (Vol. 1 & 2)", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/1pliké140_1pliktoi_(vol._1_&_2).jpg", category: "project", tracks: ["1PLIKTOI", "Lossa", "Dolce Vita", "Dans le bat", "Maïssa", "Ong Bak", "Tranquille", "Cruella"] }
        ]
    },
    {
        id: "alkpote",
        nom: "Alkpote",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/alkpote.webp",
        chiffres: "200k Abonnés",
        bio: "L'Empereur. Sale et drôle, une légende vivante.",
        bioLongue: "Alkpote est un personnage culte du rap français. Connu pour ses rimes multisyllabiques complexes et son univers 'sale', il a influencé toute une génération. Derrière la provocation et l'humour, se cache un technicien hors pair qui a su traverser les époques.",
        albums: [
            { titre: "L'Empereur", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/alkpote_lempereur.jpg", category: "project", tracks: ["L'Empereur", "Trap", "Sale", "Pute", "Suce", "Salope", "Bâtard", "Enculé"] }
        ]
    },
    {
        id: "as22",
        nom: "Ashe 22",
        statut: "pepite",
        style: "Drill",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/ashe_22.webp",
        chiffres: "50k Abonnés",
        bio: "Lyon Drill. Le patron de la 667.",
        bioLongue: "Ashe 22, membre du collectif 667, est le représentant de la Drill à Lyon. Sa voix grave et son flow lent créent une atmosphère oppressante et unique. Il a su imposer son style sombre et minimaliste, devenant une référence incontournable du genre.",
        albums: [
            { titre: "Ashe Tape, Vol. 3", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ashe_22_ashe_tape,_vol._3.jpg", category: "project", tracks: ["Intro", "Scellé Part.3", "X3", "Croos", "Turquoise", "Sunset", "Bussdown", "Outro"] }
        ]
    },
    {
        id: "bramsito",
        nom: "Bramsito",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/bramsito.webp",
        chiffres: "100k Abonnés",
        bio: "La mélodie du 7. Des tubes pour danser.",
        bioLongue: "Bramsito est un faiseur de tubes. Signé par Booba, il a su se faire un nom grâce à ses mélodies imparables et ses refrains entêtants. Il mêle rap et sonorités afro-pop pour créer une musique solaire et dansante.",
        albums: [
            { titre: "Prémices", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/bramsito_prémices.jpg", category: "project", tracks: ["Prémices", "Sale", "Mains liées", "Rappelle", "Alléluia", "Best Friend", "Paulette", "Problèmes"] }
        ]
    },
    {
        id: "bushi",
        nom: "Bushi",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/bushi.webp",
        chiffres: "40k Abonnés",
        bio: "Saturne. Un univers planant et unique.",
        bioLongue: "Bushi, membre du collectif Saturne, propose un rap aérien et mélodique. Ses morceaux sont des voyages sonores, portés par des productions soignées et un flow chantant. Il invite l'auditeur à entrer dans son univers onirique et coloré.",
        albums: [
            { titre: "Bushi Tape 2", annee: "2022", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Bushi", category: "project", tracks: ["Intro", "Mistral", "Qatari", "Link Up", "Phenomenal", "Booska Bushi", "Outro"] }
        ]
    },
    {
        id: "captaineroshi",
        nom: "Captaine Roshi",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/captaine_roshi.webp",
        chiffres: "50k Abonnés",
        bio: "Attaque II. Une voix cassée et une énergie folle.",
        bioLongue: "Captaine Roshi est reconnaissable à sa voix cassée et son énergie débordante. Surnommé 'Le Serpent', il livre un rap technique et agressif. Ses textes racontent son parcours difficile avec une rage de vaincre qui force le respect.",
        albums: [
            { titre: "Attaque II", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/captaine_roshi_attaque_ii.jpg", category: "project", tracks: ["Attaque II", "Molotov", "Pigalle", "Champions", "Déjà fait", "Nouveau", "9 Heures", "Kirikou"] }
        ]
    },
    {
        id: "cavalier",
        nom: "Cavalier",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/cavalier.webp",
        chiffres: "5k Abonnés",
        bio: "Le chevalier noir. Un style sombre et médiéval.",
        bioLongue: "Cavalier développe un univers singulier, mêlant imagerie médiévale et rap sombre. Ses textes sont des épopées modernes, racontées avec un flow précis et théâtral. Il est l'un des artistes les plus originaux de la scène actuelle.",
        albums: [
            { titre: "Cavalier", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Cavalier", category: "project", tracks: ["Intro", "Chevalier", "Noir", "Epée", "Bouclier", "Armure", "Cheval", "Outro"] }
        ]
    },
    {
        id: "coelho",
        nom: "Coelho",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/coelho.webp",
        chiffres: "10k Abonnés",
        bio: "La plume de Nantes. Technique et sincérité.",
        bioLongue: "Coelho est un rappeur nantais qui mise tout sur l'écriture. Ses textes sont travaillés, remplis de jeux de mots et de réflexions sur la vie. Il prouve que le rap à texte a encore de beaux jours devant lui, avec une modernité dans le flow et les productions.",
        albums: [
            { titre: "Le soleil ne s'éteint jamais", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/coelho_le_soleil_ne_séteint_jamais.jpg", category: "project", tracks: ["Intro", "Soleil", "Lumière", "Rayon", "Chaleur", "Brûlure", "Cendre", "Outro"] }
        ]
    },
    {
        id: "dajak",
        nom: "Dajak",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dajak.webp",
        chiffres: "10k Abonnés",
        bio: "Spleen et mélodies. Un voyage introspectif.",
        bioLongue: "Dajak est un artiste complet qui mêle rap, chant et guitare. Sa musique est une invitation au voyage, entre mélancolie et espoir. Ses textes introspectifs et ses mélodies planantes touchent directement l'âme.",
        albums: [
            { titre: "Les vies qu'on mène", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dajak", category: "project", tracks: ["Intro", "Vies", "Mène", "Chemin", "Route", "Voyage", "Destination", "Outro"] }
        ]
    },
    {
        id: "dau",
        nom: "Dau",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dau.webp",
        chiffres: "20k Abonnés",
        bio: "L'énergie. Un rap puissant et sans filtre.",
        bioLongue: "Dau est une boule d'énergie. Son rap est puissant, direct et sans concession. Il dégage une rage de vivre communicative, sur des productions qui tapent fort. Il est l'un des espoirs les plus prometteurs de la nouvelle génération.",
        albums: [
            { titre: "Dennis", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dennis", category: "project", tracks: ["Intro", "Dennis", "Menace", "Danger", "Risque", "Péril", "Sauvage", "Outro"] }
        ]
    },
    {
        id: "disiz",
        nom: "Disiz",
        statut: "legende",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/disiz.webp",
        chiffres: "300k Abonnés",
        bio: "L'amour. Une carrière riche et une évolution constante.",
        bioLongue: "Disiz, anciennement Disiz la Peste, a traversé les époques en se réinventant sans cesse. Du rap humoristique de ses débuts à la pop mélancolique de 'L'Amour', il a toujours su rester pertinent. Il est l'exemple même de l'artiste qui n'a pas peur de prendre des risques.",
        albums: [
            { titre: "L'Amour", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/disiz_lamour.jpg", category: "project", tracks: ["Sublime", "L'Amour", "Beau", "Rencontre", "Poids", "All In", "Klimt", "Dispo"] }
        ]
    },
    {
        id: "djadja_dinaz",
        nom: "Djadja & Dinaz",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/djadja_&_dinaz.webp",
        chiffres: "1M Abonnés",
        bio: "Le duo de Meaux. Les rois de l'été.",
        bioLongue: "Djadja & Dinaz sont inséparables. Le duo de Meaux enchaîne les tubes et les albums de platine avec une régularité impressionnante. Leur recette : des mélodies autotunées, des textes sur la vie de quartier et une authenticité qui parle à toute une génération.",
        albums: [
            { titre: "Spleen", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/djadja_&_dinaz_spleen.jpg", category: "project", tracks: ["Spleen", "Ma zone", "Dans le réseau", "Plein les poches", "Ancolie", "Demain", "Loyal", "BB"] }
        ]
    },
    {
        id: "dosseh",
        nom: "Dosseh",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/dosseh.webp",
        chiffres: "300k Abonnés",
        bio: "Yuri. La plume et la rue.",
        bioLongue: "Dosseh est un rappeur complet, alliant la crédibilité de la rue à une plume de grande qualité. Ses textes sont profonds, bien écrits et souvent touchants. Il a su s'imposer comme une valeur sûre du rap français, respecté par ses pairs et par le public.",
        albums: [
            { titre: "Trop tôt pour mourir", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dosseh_trop_tôt_pour_mourir.jpg", category: "project", tracks: ["Intro", "Trop tôt", "Mourir", "Vivre", "Survivre", "Renaître", "Espérer", "Outro"] }
        ]
    },
    {
        id: "doums",
        nom: "Doums",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/doums.webp",
        chiffres: "100k Abonnés",
        bio: "L'Entourage. Technique et flow tout terrain.",
        bioLongue: "Doums, membre de l'Entourage, est un technicien hors pair. Son flow tout terrain lui permet de s'adapter à n'importe quelle production. Longtemps dans l'ombre, il a su briller en solo avec des projets de qualité, prouvant qu'il est l'un des meilleurs rappeurs de sa génération.",
        albums: [
            { titre: "Pull à capuche et billets mauves", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/doums_pull_à_capuche_et_billets_mauves.jpg", category: "project", tracks: ["Intro", "Pull", "Capuche", "Billets", "Mauves", "Argent", "Cash", "Outro"] }
        ]
    },
    {
        id: "edge",
        nom: "Edge",
        statut: "pepite",
        style: "New Wave",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/edge.webp",
        chiffres: "20k Abonnés",
        bio: "Offshore. Un rap planant et nocturne.",
        bioLongue: "Edge propose un rap nocturne et introspectif. Ses morceaux sont des balades dans Paris la nuit, entre doutes et espoirs. Son univers sonore, soigné et cohérent, séduit ceux qui cherchent une musique d'ambiance, à écouter au casque.",
        albums: [
            { titre: "Offshore", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/edge_offshore.jpg", category: "project", tracks: ["Intro", "Offshore", "Mer", "Vague", "Plage", "Sable", "Soleil", "Outro"] }
        ]
    },
    {
        id: "elgrandetoto",
        nom: "ElGrandeToto",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/elgrandetoto.webp",
        chiffres: "2M Abonnés",
        bio: "Le roi du Maroc. Une star internationale.",
        bioLongue: "ElGrandeToto est la plus grande star du rap marocain et l'un des artistes les plus écoutés dans le monde arabe. Il mêle darija, français et anglais avec une aisance déconcertante. Son flow mélodique et son charisme ont fait de lui une icône au-delà des frontières.",
        albums: [
            { titre: "Caméléon", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/elgrandetoto_caméléon.jpg", category: "project", tracks: ["Intro", "Caméléon", "Couleurs", "Change", "Adapt", "Survie", "Nature", "Outro"] }
        ]
    },
    {
        id: "fianso",
        nom: "Fianso",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/fianso.webp",
        chiffres: "1M Abonnés",
        bio: "Sofiane. Le rassembleur et le patron.",
        bioLongue: "Fianso est bien plus qu'un rappeur, c'est un patron. Avec son émission 'Rentre dans le Cercle', il a mis en lumière des centaines d'artistes. Musicalement, il est connu pour son énergie débordante et ses morceaux fédérateurs qui font bouger les foules.",
        albums: [
            { titre: "Bandit Saleté", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/fianso_bandit_saleté.jpg", category: "project", tracks: ["Bandit", "Saleté", "Toka", "Mon p'tit loup", "Pégase", "Le cercle", "Bois d'argent", "Parti de rien"] }
        ]
    },
    {
        id: "fresh",
        nom: "Fresh",
        statut: "pepite",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/fresh.webp",
        chiffres: "100k Abonnés",
        bio: "Nouvelle École. Le gagnant qui confirme.",
        bioLongue: "Fresh a été révélé au grand public en remportant la première saison de 'Nouvelle École'. Depuis, il a su prouver qu'il n'était pas qu'un phénomène télévisuel. Son rap efficace et ses refrains accrocheurs lui ont permis de se faire une place durable dans le paysage rap.",
        albums: [
            { titre: "À l'abri", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/fresh_à_labri.jpg", category: "project", tracks: ["Intro", "À l'abri", "Chop", "Drama", "Allez dehors", "Célèbre", "Mauvais payeur", "Outro"] }
        ]
    },
    {
        id: "gradur",
        nom: "Gradur",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/gradur.webp",
        chiffres: "1M Abonnés",
        bio: "L'homme au bob. Le roi de la Trap 2015.",
        bioLongue: "Gradur a marqué l'année 2015 avec son style explosif et ses 'Sheguey'. Il a popularisé la Trap et les bobs militaires. Même s'il se fait plus rare aujourd'hui, il reste une figure emblématique de cette époque dorée du rap français.",
        albums: [
            { titre: "L'homme au bob", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/gradur_lhomme_au_bob.jpg", category: "project", tracks: ["Terrasser", "Jamais", "Military", "La douille", "Priez pour moi", "Stringer Bell", "Verre de sky", "Secteur"] }
        ]
    },
    {
        id: "guy2bezbar",
        nom: "Guy2Bezbar",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/guy2bezbar.webp",
        chiffres: "300k Abonnés",
        bio: "Coco Jojo. Le footballeur devenu rappeur star.",
        bioLongue: "Guy2Bezbar apporte une énergie folle et une bonne humeur communicative. Ancien footballeur, il a gardé l'esprit d'équipe et la discipline. Son style, fait de gimmicks et de flows dansants, est irrésistible. Il est le capitaine de la fête.",
        albums: [
            { titre: "Coco Jojo", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/guy2bezbar_coco_jojo.jpg", category: "project", tracks: ["Intro", "Coco Jojo", "Boy", "Fendi Love", "Full Black", "Beretta", "Ticket", "Outro"] }
        ]
    },
    {
        id: "heusslenfoire",
        nom: "Heuss L'enfoiré",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/heuss_lenfoiré.webp",
        chiffres: "1M Abonnés",
        bio: "La Moula. L'inventeur de la Moulaga.",
        bioLongue: "Heuss L'enfoiré est un personnage unique. Il a inventé son propre langage et son propre style. Capable de rapper sur de la House comme sur de la Trap, il est l'auteur de tubes immenses comme 'Khapta' ou 'Moulaga'. C'est l'ambianceur numéro 1.",
        albums: [
            { titre: "En esprit", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/heuss_lenfoiré_en_esprit.jpg", category: "project", tracks: ["Khapta", "Les méchants", "L'enfoiré", "Aristocrate", "George Moula", "Hakan Sukur", "Moula", "En esprit"] }
        ]
    },
    {
        id: "jokair",
        nom: "Jok'Air",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/jokair.webp",
        chiffres: "300k Abonnés",
        bio: "Big Daddy Jok. Le crooner du rap français.",
        bioLongue: "Jok'Air, ancien de la MZ, est le lover du rap français. Sa voix suave et ses mélodies RnB font fondre les cœurs. Il chante l'amour et le désir avec une sensualité assumée, tout en gardant une crédibilité rap intacte.",
        albums: [
            { titre: "Jok'Travolta", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/jokair_joktravolta.jpg", category: "project", tracks: ["Intro", "Jok'Travolta", "Club 27", "Las Vegas", "Comme tu es", "Bonbon à la menthe", "Scarla", "Outro"] }
        ]
    },
    {
        id: "kalash",
        nom: "Kalash",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kalash.webp",
        chiffres: "1M Abonnés",
        bio: "Mwaka Moon. La star des Antilles.",
        bioLongue: "Kalash est l'ambassadeur du rap antillais. Il mêle avec brio rap et dancehall. Son tube 'Mwaka Moon' avec Damso a fait le tour du monde. Il est la preuve que la musique n'a pas de frontières et que le créole peut résonner partout.",
        albums: [
            { titre: "Mwaka Moon", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kalash_mwaka_moon.jpg", category: "project", tracks: ["Mwaka Moon", "Koussi Koussa", "God Knows", "I Wanna Be Loved", "Mode Avion", "Yen a vla", "Ivory", "Moments gâchés"] }
        ]
    },
    {
        id: "kalashcriminel",
        nom: "Kalash Criminel",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/kalash_criminel.webp",
        chiffres: "500k Abonnés",
        bio: "Le cagoulé le plus connu. Sauvagerie et engagement.",
        bioLongue: "Kalash Criminel est reconnaissable entre mille avec sa cagoule. Albinos et fier de l'être, il dénonce les discriminations et les injustices avec une violence verbale inouïe. Son cri 'Sauvagerie' est devenu un hymne de ralliement.",
        albums: [
            { titre: "La fosse aux lions", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/kalash_criminel_la_fosse_aux_lions.jpg", category: "project", tracks: ["La fosse aux lions", "Tête brûlée", "Cougar Gang", "Encore", "Dans la fosse", "Sombre", "Ahou", "Avant que j'parte"] }
        ]
    },
    {
        id: "lacrim",
        nom: "Lacrim",
        statut: "legende",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lacrim.webp",
        chiffres: "1.5M Abonnés",
        bio: "El Tigre. La voix rauque de la rue.",
        bioLongue: "Lacrim a une voix qui ne trompe pas. Rauque, éraillée, elle porte le vécu d'un homme qui a connu la prison et la cavale. Son rap est brut, sincère et touchant. Il est l'un des rares à pouvoir raconter la voyoucratie avec autant d'authenticité.",
        albums: [
            { titre: "Corleone", annee: "2014", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lacrim_corleone.jpg", category: "project", tracks: ["Corleone", "Mon glock te mettra à genoux", "Oz", "Tout le monde veut des lovés", "Prêt", "On fait pas ça", "Barbade", "A.W.A"] }
        ]
    },
    {
        id: "lefa",
        nom: "Lefa",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lefa.webp",
        chiffres: "300k Abonnés",
        bio: "Monsieur Fall. La technique au service du sens.",
        bioLongue: "Lefa, membre de la Sexion d'Assaut, est un technicien hors pair. En solo, il a su développer un univers plus personnel et introspectif. Ses clips sont souvent des œuvres d'art et ses textes poussent à la réflexion. Il est l'un des artistes les plus complets de sa génération.",
        albums: [
            { titre: "Monsieur Fall", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lefa_monsieur_fall.jpg", category: "project", tracks: ["Monsieur Fall", "20 ans", "En terrasse", "Quelques minutes", "Rappelle-la", "Masterchef", "Tournée", "Grandest"] }
        ]
    },
    {
        id: "lomepal",
        nom: "Lomepal",
        statut: "confirmé",
        style: "Technique / Lyriciste",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lomepal.webp",
        chiffres: "1M Abonnés",
        bio: "Jeannine. Le skateur devenu poète.",
        bioLongue: "Lomepal a cassé les codes du rap. Skateur, sensible, il chante ses failles et ses doutes. Ses albums 'Flip' et 'Jeannine' ont touché un public bien au-delà du rap, réconciliant la chanson française et les musiques urbaines.",
        albums: [
            { titre: "Jeannine", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lomepal_jeannine.jpg", category: "project", tracks: ["Ne me ramène pas", "Mômes", "X-men", "Plus de larmes", "1000°C", "Le vrai moi", "Skate", "Trop beau"] }
        ]
    },
    {
        id: "lorenzo",
        nom: "Lorenzo",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/lorenzo.webp",
        chiffres: "1M Abonnés",
        bio: "L'Empereur du sale. Le troll de génie.",
        bioLongue: "Lorenzo est un personnage haut en couleur. Avec son bob et ses lunettes, il joue le rôle du bouseux un peu simplet mais génial. Ses morceaux sont drôles, décalés et souvent très bien produits. Il est la preuve qu'on peut faire du rap sans se prendre au sérieux.",
        albums: [
            { titre: "Rien à branler", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/lorenzo_rien_à_branler.jpg", category: "project", tracks: ["Rien à branler", "Fume à fond", "Carton rouge", "Tu le sais", "Bizarre", "Champagne & Pétou", "Le son qui fait plaiz", "Ce genre"] }
        ]
    },
    {
        id: "maes",
        nom: "Maes",
        statut: "tendance",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/maes.webp",
        chiffres: "1.5M Abonnés",
        bio: "Les derniers salopards. La mélodie de Sevran.",
        bioLongue: "Maes est le protégé de Booba devenu grand. Originaire de Sevran, il a su imposer son style mélodieux et mélancolique. Ses refrains sont des tubes instantanés et ses couplets racontent la rue avec une justesse désarmante.",
        albums: [
            { titre: "Les derniers salopards", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/maes_les_derniers_salopards.jpg", category: "project", tracks: ["Dragovic", "Billets verts", "Distant", "Blanche", "Les derniers salopards", "Mémoire", "Dybala", "Marco Polo"] }
        ]
    },
    {
        id: "mhd",
        nom: "MHD",
        statut: "confirmé",
        style: "Mélo / Club",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mhd.webp",
        chiffres: "1M Abonnés",
        bio: "Afro Trap. Le prince de l'Afro.",
        bioLongue: "MHD a inventé l'Afro Trap. En mélangeant les sonorités africaines et la Trap, il a créé un genre musical qui a conquis le monde. Devenu une star internationale, il a ouvert la voie à toute une génération d'artistes.",
        albums: [
            { titre: "MHD", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mhd_mhd.jpg", category: "project", tracks: ["La Moula", "Roger Milla", "Maman j'ai mal", "A Kele Nta", "Afro Trap Part. 3 (Champions League)", "Afro Trap Part. 7 (La Puissance)", "Ngatie Abedi", "Tout seul"] }
        ]
    },
    {
        id: "misterv",
        nom: "Mister V",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/mister_v.webp",
        chiffres: "5M Abonnés",
        bio: "Double V. Le youtubeur devenu rappeur crédible.",
        bioLongue: "Mister V a réussi l'impossible : passer de Youtubeur humoriste à rappeur respecté. Son album 'Double V' a prouvé qu'il avait le flow et la technique pour rivaliser avec les meilleurs. Il a su gagner sa légitimité à la force du micro.",
        albums: [
            { titre: "Double V", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/mister_v_double_v.jpg", category: "project", tracks: ["Top Album", "Venice", "Petit déjeuner", "Deutsche Qualité", "Demain", "Nightcall", "Apollo13", "Gville"] }
        ]
    },
    {
        id: "niro",
        nom: "Niro",
        statut: "confirmé",
        style: "Trap",
        image: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/rappeurs/niro.webp",
        chiffres: "500k Abonnés",
        bio: "Paraplégique. La plume et la technique.",
        bioLongue: "Niro est un monstre de technique. Ses flows sont rapides, précis et percutants. Il gère sa carrière en indépendant avec une main de maître, sortant projet sur projet sans jamais baisser en qualité. C'est un exemple de longévité et d'intégrité.",
        albums: [
            { titre: "Paraplégique", annee: "2012", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niro_paraplégique.jpg", category: "project", tracks: ["Intro", "Paraplégique", "Dans ton kwaah", "Père fourra", "J'suis dans le truc", "On s'en remettra", "Ghetto Star", "Outro"] }
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
        bio: "Le S. Götze. Mathafack. L'esthète du rap.",
        bioLongue: "SCH est un personnage de film. Avec son look soigné et sa voix grave, il a créé un univers mafieux fascinant. Sa trilogie 'JVLIVS' est un chef-d'œuvre de storytelling. Il est l'un des artistes les plus charismatiques et les plus talentueux de sa génération.",
        albums: [
            { titre: "JVLIVS II", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs_ii.jpg", category: "project", tracks: ["Marché Noir", "Mannschaft", "Mode Akimbo", "Crack", "Loup Noir"] },
            { titre: "JVLIVS", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_jvlivs.jpg", category: "project", tracks: ["Intro", "VNTM", "Pharmacie", "Otto", "Skydweller", "Facile", "Prêt à partir", "Mort de rire"] },
            { titre: "A7", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/sch_a7.jpg", category: "project", tracks: ["A7", "Gomorra", "Liquide", "Champs-Élysées", "J'reviens de loin", "Fusil"] }
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
        bio: "Dems. Vie. Le poète sombre.",
        bioLongue: "Damso est un génie torturé. Ses textes sont d'une noirceur abyssale mais d'une beauté rare. Il explore les tréfonds de l'âme humaine avec une honnêteté brutale. Ses albums sont des classiques instantanés qui ont marqué l'histoire du rap francophone.",
        albums: [
            { titre: "Ipséité", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_ipséité.jpg", category: "project", tracks: ["Nwaar Is The New Black", "Macarena", "Mosaïque Solitaire", "Signaler", "Kietu", "Gova", "J Respect R"] },
            { titre: "Lithopédion", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_lithopédion.jpg", category: "project", tracks: ["Introduction", "Festival de rêves", "Baltringue", "Julien", "Silence", "Feu de bois", "Même issue", "Smog"] },
            { titre: "QALF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/damso_qalf.jpg", category: "project", tracks: ["MEVTR", "LIFE LIFE", "DEUX TOILES DE MER", "COEUR EN MIETTES", "POUR L'ARGENT", "BXL ZOO", "911", "SENTIMENTAL"] }
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
        bio: "Le patron de la fête est fini. La voix de la classe moyenne.",
        bioLongue: "Orelsan est le porte-parole d'une génération. Il raconte la vie des gens normaux, l'ennui, les rêves brisés et l'espoir. Ses textes simples mais percutants touchent tout le monde. Il est l'un des artistes les plus populaires et les plus aimés de France.",
        albums: [
            { titre: "Civilisation", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_civilisation.jpg", category: "project", tracks: ["La Quête", "Du propre", "Bébéboa", "Rêve mieux", "Seul avec du monde autour", "Manifeste", "L'odeur de l'essence", "Jour meilleur"] },
            { titre: "La fête est finie", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_la_fête_est_finie.jpg", category: "project", tracks: ["San", "La fête est finie", "Basique", "Tout va bien", "Défaite de famille", "La pluie", "Paradis", "Notes pour trop tard"] },
            { titre: "Le chant des sirènes", annee: "2011", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/orelsan_le_chant_des_sirènes.jpg", category: "project", tracks: ["Raelsan", "Le chant des sirènes", "Plus rien ne m'étonne", "Mauvaise idée", "Double vie", "Finir mal", "Si seul", "Suicide social"] }
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
        bio: "Le V. L'absurde et le génie.",
        bioLongue: "Vald est un ovni. Son rap est absurde, drôle, mais aussi très technique et réfléchi. Il dénonce les travers de la société avec un humour noir décapant. C'est un artiste inclassable qui ne cesse de surprendre.",
        albums: [
            { titre: "XEU", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_xeu.jpg", category: "project", tracks: ["Primitif", "Seum", "Désaccordé", "Gris", "Réflexions basses", "Offshore", "Ne me déteste pas", "Deviens génial"] },
            { titre: "Ce monde est cruel", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_ce_monde_est_cruel.jpg", category: "project", tracks: ["Pocahontas", "Ce monde est cruel", "Pensionman", "Ma star", "Ignorant", "Halloween", "Dernier retrait", "Rappel"] },
            { titre: "Agartha", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/vald_agartha.jpg", category: "project", tracks: ["Acacia", "Megadeth", "Si j'arrêtais", "Je t'aime", "Totem", "L.D.S", "Ma meilleure amie", "Vitrine"] }
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
        bio: "L'Hiver à Paris. Le spleen urbain.",
        bioLongue: "Dinos est le roi du spleen. Ses textes sont d'une mélancolie magnifique. Il raconte Paris la nuit, les amours déçus et la quête de sens. Sa plume est l'une des plus belles du rap français actuel.",
        albums: [
            { titre: "Stamina, Memento", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_stamina_memento.jpg", category: "project", tracks: ["Diptyque", "Moins un", "Paranoïaque", "Maman m'aime", "Prends soin de toi", "Je Wanda", "Césaire", "93 mesures"] },
            { titre: "Imany", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_imany.jpg", category: "project", tracks: ["Iceberg Slim", "Argentique", "Beuh et liqueurs", "Havana & Malibu", "Spleen", "Love", "Magnolia", "Les pleurs du mâle"] },
            { titre: "Hiver à Paris", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/dinos_hiver_à_paris.jpg", category: "project", tracks: ["Rive Droite", "Porte de Paris", "Chrome Hearts", "Modus Vivendi", "Pichichi", "Ma Baby", "Quatre saisons", "L'univers ne nous voit pas danser"] }
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
        bio: "J.O.S. Le flow et la vibe.",
        bioLongue: "Josman est un artiste complet. Il produit, rappe et chante. Son style est cool, posé et mélodieux. Il a su construire une carrière solide en indépendant, fidélisant un public qui grandit à chaque projet.",
        albums: [
            { titre: "M.A.N", annee: "2022", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_man.jpg", category: "project", tracks: ["Intro", "Pop", "L'occasion", "Fiesta", "Mort ce soir", "Brunes & Blondes", "Vaccin", "Ma Lady"] },
            { titre: "J.O.$", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_jos.jpg", category: "project", tracks: ["Fais avec", "L'occasion", "Jeune N****", "Sourcils froncés", "Un zder, un thé", "V&V", "La cage", "XS"] },
            { titre: "Split", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/josman_split.jpg", category: "project", tracks: ["L'éloignement", "Argent, Drogue & Sexe", "Bambi", "Je sais", "A l'aube", "Mauvaise humeur", "J'allume", "Si tu savais"] }
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
        bio: "Le Fennec. La technique et l'engagement.",
        bioLongue: "Nekfeu est une icône. Membre de 1995 et du S-Crew, il a tout cassé en solo. Ses textes sont techniques, littéraires et engagés. Il a su réunir le public rap et le grand public. Aujourd'hui discret, il reste une légende.",
        albums: [
            { titre: "Les Étoiles Vagabondes", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_les_étoiles_vagabondes.jpg", category: "project", tracks: ["Les étoiles vagabondes", "Alunissons", "Cheum", "Takotsubo", "Menteur menteur", "Ciel noir", "De mes cendres", "Elle pleut (feat. Nemir)"] },
            { titre: "Cyborg", annee: "2016", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_cyborg.jpg", category: "project", tracks: ["Humanoïde", "Mauvaise graine", "Squa", "Réalité augmentée", "Avant tu riais", "Esquimaux", "O.D", "Saturne"] },
            { titre: "Feu", annee: "2015", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/nekfeu_feu.jpg", category: "project", tracks: ["Martin Eden", "Mon âme", "Le horla", "Nique les clones", "Rêve d'avoir des rêves", "Tempête", "Egérie", "On verra"] }
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
        bio: "Chen Zen. 667. Le complotisme et la technique.",
        bioLongue: "Freeze Corleone est le rappeur le plus controversé. Ses textes sont remplis de références complotistes et de punchlines chocs. Mais c'est aussi un technicien hors pair qui a révolutionné le rap français avec son flow unique et ses rimes en 'ek'.",
        albums: [
            { titre: "LMF", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_lmf.jpg", category: "project", tracks: ["Freeze Raël", "Hors Ligne", "Scellé Part. 2 (feat. Ashe 22)", "Tarkov", "Rap catéchisme (feat. Alpha Wann)", "Stretch 4", "Pas de refrain", "Chen Zen"] },
            { titre: "L'Attaque des Clones", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_lattaque_des_clones.jpg", category: "project", tracks: ["Bill Clinton", "Voldemort", "Kpop", "L'attaque des clones", "Amérique du Sud", "Jour de plus", "Isshin Ashina", "Tsubasa"] },
            { titre: "Projet Blue Beam", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/freeze_corleone_projet_blue_beam.jpg", category: "project", tracks: ["Intro", "Jeremy Lin", "3 planètes", "Lester", "Fentanyl", "S/O Congo Part. 2", "Bâton rouge", "Sacrifice de masse"] }
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
        bio: "Akimbo. La Drill masquée.",
        bioLongue: "Ziak est le visage (masqué) de la Drill en France. Son univers est sombre, violent et fascinant. Il manie les codes de la Drill UK avec une maîtrise impressionnante. C'est un phénomène qui a su s'imposer sans jamais montrer son visage.",
        albums: [
            { titre: "Akimbo", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_akimbo.jpg", category: "project", tracks: ["Parasite", "La kiffance", "Akimbo", "Galerie", "Espace", "Vrai", "Rhum & Machette", "Prière"] },
            { titre: "Chrome", annee: "2023", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/ziak_chrome.jpg", category: "project", tracks: ["Démon", "Chrome", "Talon d'Achille", "Seul", "Même", "Pour une fois", "Rien", "Pistolero"] }
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
        bio: "Charo. Méchant. Le roi des gimmicks.",
        bioLongue: "Niska est une machine à tubes. Son énergie est inépuisable. Il a inventé un style, une danse, une attitude. C'est l'un des rappeurs les plus influents de la décennie.",
        albums: [
            { titre: "Commando", annee: "2017", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_commando.jpg", category: "project", tracks: ["Story X", "Réseaux", "La Wewer", "Ah bon ?", "Medellin", "Salé", "Tuba Life (feat. Booba)", "Amour X"] },
            { titre: "Mr Sal", annee: "2019", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_mr_sal.jpg", category: "project", tracks: ["Vrai", "Siliconé", "La zone est minée", "Bâtiment", "Mendoza", "Du lundi au lundi", "Tous les couler", "Mr Sal"] },
            { titre: "Le monde est méchant", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/niska_le_monde_est_méchant.jpg", category: "project", tracks: ["Blue Magic (feat. Maes)", "44", "Jota", "Paramètre", "Journée", "140G", "T-Rain", "De bon matin"] }
        ]
    },


    {
        id: "jsx",
        nom: "JSX",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=JSX",
        bio: "Jeune rappeur signé sur le label de Booba.",
        bioLongue: "JSX est un artiste prometteur du 92i, connu pour son featuring 'Mona Lisa' avec Booba.",
        albums: []
    },

    {
        id: "elia",
        nom: "Elia",
        statut: "pepite",
        style: "Variété / Rap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Elia",
        bio: "La touche féminine du 92i.",
        bioLongue: "Elia apporte une touche de douceur et de poésie dans le monde brut du rap.",
        albums: []
    },
    {
        id: "dala",
        nom: "Dala",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dala",
        bio: "Rappeur du 92i à la plume acérée.",
        bioLongue: "Dala est un rappeur technique qui monte en puissance au sein du label 92i.",
        albums: []
    },

    {
        id: "kofs",
        nom: "Kofs",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Kofs",
        bio: "La voix la plus grave de Marseille.",
        bioLongue: "Kofs est un rappeur et acteur marseillais. Sa voix caverneuse et son physique imposant en font un personnage marquant.",
        albums: []
    },
    {
        id: "naps",
        nom: "Naps",
        statut: "tendance",
        style: "Mélo / Club",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Naps",
        bio: "La Kiffance. L'ambianceur de Marseille.",
        bioLongue: "Naps est le roi de la fête. Ses tubes comme 'La Kiffance' ont fait danser la France entière.",
        albums: [
            { titre: "Les mains faites pour l'or", annee: "2021", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/naps_les_mains_faites_pour_lor.jpg", category: "project", tracks: ["La Kiffance", "La Danse des bandits", "Sans limites", "Vovo", "Best Life"] }
        ]
    },
    {
        id: "soso_maness",
        nom: "Soso Maness",
        statut: "tendance",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Soso",
        bio: "Le zumba cafew. L'authenticité marseillaise.",
        bioLongue: "Soso Maness est un conteur de rue. Il raconte son passé avec humour et sincérité.",
        albums: [
            { titre: "Mistral", annee: "2020", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/soso_maness_mistral.jpg", category: "project", tracks: ["Mistral", "Zumba Cafew", "Balance", "Dans le block", "So Maness", "Boussole (feat. Alonzo)", "Interlude", "Tout pour la FM"] }
        ]
    },
    {
        id: "elams",
        nom: "Elams",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Elams",
        bio: "L'énergie pure de Marseille.",
        bioLongue: "Elams est un rappeur énergique qui met le feu à chaque apparition.",
        albums: []
    },
    {
        id: "solda",
        nom: "Solda",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Solda",
        bio: "Rappeur marseillais authentique.",
        bioLongue: "Solda est un rappeur respecté à Marseille pour son authenticité.",
        albums: []
    },
    {
        id: "houari",
        nom: "Houari",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Houari",
        bio: "Le flow technique de Marseille.",
        bioLongue: "Houari est un rappeur technique qui a su se faire une place dans le paysage marseillais.",
        albums: []
    },
    {
        id: "lord_kossity",
        nom: "Lord Kossity",
        statut: "legende",
        style: "Dancehall / Rap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Lord",
        bio: "Le roi du Dancehall en France.",
        bioLongue: "Lord Kossity a marqué l'histoire avec son tube 'Ma Benz' avec NTM.",
        albums: []
    },
    {
        id: "rsko",
        nom: "Rsko",
        statut: "pepite",
        style: "Mélo",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Rsko",
        bio: "La nouvelle voix de la mélo.",
        bioLongue: "Rsko est un jeune artiste qui monte, connu pour ses mélodies touchantes.",
        albums: []
    },
    {
        id: "aya_nakamura",
        nom: "Aya Nakamura",
        statut: "legende",
        style: "Pop Urbaine",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Aya",
        bio: "La reine de France. Star internationale.",
        bioLongue: "Aya Nakamura est l'artiste française la plus écoutée dans le monde. Ses tubes comme 'Djadja' sont des classiques.",
        albums: [
            { titre: "NAKAMURA", annee: "2018", cover: "https://res.cloudinary.com/dtc457mbb/image/upload/v1763848125/bureau_du_rap/covers/aya_nakamura_nakamura.jpg", category: "project", tracks: ["Djadja", "Pookie", "Copines", "La dot", "Sucette"] }
        ]
    },
    {
        id: "nemir",
        nom: "Nemir",
        statut: "pepite",
        style: "Variété / Rap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Nemir",
        bio: "La voix de velours de Perpignan.",
        bioLongue: "Nemir est un chanteur et rappeur au style unique, mélangeant flamenco et rap.",
        albums: []
    },
    {
        id: "13block",
        nom: "13 Block",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=13Block",
        bio: "Groupe de Sevran. Trap sombre et énergique.",
        bioLongue: "13 Block est un groupe originaire de Sevran, connu pour sa Trap sombre et ses refrains efficaces.",
        albums: []
    },
    {
        id: "blacko",
        nom: "Blacko",
        statut: "confirmé",
        style: "Rap / Reggae",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Blacko",
        bio: "Membre de Sniper. Voix unique entre rap et reggae.",
        bioLongue: "Blacko, ancien membre du groupe Sniper, mélange rap et reggae avec une voix puissante et reconnaissable.",
        albums: []
    },
    {
        id: "alonzo",
        nom: "Alonzo",
        statut: "confirmé",
        style: "Trap / Club",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Alonzo",
        bio: "Le Capo. Pilier du rap marseillais.",
        bioLongue: "Alonzo, membre des Psy 4 de la Rime, a su traverser les époques avec brio. De ses débuts techniques à ses hits club actuels, il reste une figure incontournable de Marseille, capable de se renouveler sans cesse.",
        albums: []
    },
    {
        id: "ashe_22",
        nom: "Ashe 22",
        statut: "pepite",
        style: "Drill",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Ashe22",
        bio: "La Drill sombre de Lyon. Lyonzon.",
        bioLongue: "Ashe 22 est l'une des figures de proue de la Drill en France. Membre du collectif Lyonzon, il impose une ambiance sombre, presque cinématographique, avec une voix grave et des productions menaçantes.",
        albums: []
    },
    {
        id: "hornet_la_frappe",
        nom: "Hornet La Frappe",
        statut: "confirmé",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Hornet",
        bio: "La Peuf. Le kickeur du 93.",
        bioLongue: "Hornet La Frappe s'est imposé comme une valeur sûre du 93. Alliant technique, mélodie et énergie, il enchaîne les projets solides et les certifications, représentant fièrement son quartier d'Épinay-sur-Seine.",
        albums: []
    }
];
