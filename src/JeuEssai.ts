import type { Commune, Role, Utilisateur, Centre, Zone, Incident, Alerte } from "./utils"; // adapte le chemin d'import selon ton projet

// 1. Rôles
export const mockRoles: Role[] = [
    { id: 1, libelle: "CITOYEN", permissions: 1 },
    { id: 2, libelle: "AGENT", permissions: 2 },
    { id: 3, libelle: "ADMIN", permissions: 4 },
];

// 2. Utilisateurs
export const mockUtilisateurs: Utilisateur[] = [
    {
        id: 1,
        nom: "Dupont",
        prenom: "Jean",
        pseudo: "jdupont",
        email: "jean.dupont@amiens.fr",
        tel: "0601020304",
        mdp: "hash_secret_1",
        Role: mockRoles[1], // AGENT
    },
    {
        id: 2,
        nom: "Lefebvre",
        prenom: "Claire",
        pseudo: "clefebvre",
        email: "claire.lefebvre@somme.gouv.fr",
        tel: "0611223344",
        mdp: "hash_secret_2",
        Role: mockRoles[2], // ADMIN
    },
    {
        id: 3,
        nom: "Martin",
        prenom: "Lucas",
        pseudo: "lmartin",
        email: "lucas.martin@gmail.com",
        tel: "0699887766",
        mdp: "hash_secret_3",
        Role: mockRoles[0], // CITOYEN
    },
];

// 3. Communes (Amiens et alentours proches)
export const mockCommunes: Commune[] = [
    {
        id: 1,
        nom: "Amiens",
        code_insee: 80021,
        position: [49.8941708, 2.2956951],
    },
    {
        id: 2,
        nom: "Longueau",
        code_insee: 80489,
        position: [49.8708, 2.3556],
    },
    {
        id: 3,
        nom: "Camon",
        code_insee: 80164,
        position: [49.8906, 2.3486],
    },
    {
        id: 4,
        nom: "Salouël",
        code_insee: 80725,
        position: [49.8697, 2.2433],
    },
];

// 4. Centres d'accueil et d'hébergement
export const mockCentres: Centre[] = [
    {
        id: 1,
        nom: "Gymnase La Paix",
        adresse: "Rue de la Paix",
        commune: mockCommunes[0], // Amiens
        code_postal: 80000,
        position: [49.9052, 2.2985],
        type: "Gymnase municipal",
        responsable: mockUtilisateurs[0],
        capacite_max: 200,
        places_dispo: 65,
        etat: "OUVERT",
        acces_pmr: true,
        accueil_animaux: false,
        sanitaire: true,
        restauration: true,
        date_maj: new Date(Date.now() - 15 * 60 * 1000), // il y a 15 min
    },
    {
        id: 2,
        nom: "Coliseum d'Amiens",
        adresse: "Rue Caumartin",
        commune: mockCommunes[0], // Amiens
        code_postal: 80000,
        position: [49.8972, 2.2891],
        type: "Complexe sportif",
        responsable: mockUtilisateurs[0],
        capacite_max: 450,
        places_dispo: 0,
        etat: "COMPLET",
        acces_pmr: true,
        accueil_animaux: true,
        sanitaire: true,
        restauration: true,
        date_maj: new Date(Date.now() - 45 * 60 * 1000), // il y a 45 min
    },
    {
        id: 3,
        nom: "Salle des Fêtes de Longueau",
        adresse: "Place Louis Prot",
        commune: mockCommunes[1], // Longueau
        code_postal: 80330,
        position: [49.8702, 2.3524],
        type: "Salle des fêtes",
        responsable: mockUtilisateurs[1],
        capacite_max: 120,
        places_dispo: 34,
        etat: "OUVERT",
        acces_pmr: true,
        accueil_animaux: true,
        sanitaire: true,
        restauration: false,
        date_maj: new Date(Date.now() - 120 * 60 * 1000), // il y a 2h
    },
    {
        id: 4,
        nom: "Salle Polyvalente de Camon",
        adresse: "Rue Marius Petit",
        commune: mockCommunes[2], // Camon
        code_postal: 80450,
        position: [49.8918, 2.3512],
        type: "Salle polyvalente",
        responsable: mockUtilisateurs[0],
        capacite_max: 90,
        places_dispo: 0,
        etat: "FERME",
        acces_pmr: false,
        accueil_animaux: false,
        sanitaire: true,
        restauration: false,
        date_maj: new Date(Date.now() - 24 * 60 * 60 * 1000), // hier
    },
    {
        id: 5,
        nom: "Gymnase Universitaire du Bailly",
        adresse: "Avenue des Facultés",
        commune: mockCommunes[3], // Salouël / Amiens Sud
        code_postal: 80480,
        position: [49.8685, 2.2536],
        type: "Gymnase universitaire",
        responsable: mockUtilisateurs[1],
        capacite_max: 180,
        places_dispo: 110,
        etat: "OUVERT",
        acces_pmr: true,
        accueil_animaux: false,
        sanitaire: true,
        restauration: true,
        date_maj: new Date(Date.now() - 10 * 60 * 1000),
    },
];

// 5. Zone d'incident (Périmètre polygonal)
export const mockZones: Zone[] = [
    {
        id: 1,
        nom: "Périmètre d'exclusion - Bois de Frémontiers / Sud Amiens",
        perimetre: [
            [49.880, 2.270],
            [49.885, 2.300],
            [49.870, 2.310],
            [49.865, 2.275],
        ],
        utilisateur: mockUtilisateurs[0],
    },
    {
        id: 2,
        nom: "Périmètre d'alerte - Hortillonnages & Vallée de la Somme",
        perimetre: [
            [49.905, 2.315],
            [49.912, 2.348],
            [49.898, 2.362],
            [49.891, 2.328],
        ],
        utilisateur: mockUtilisateurs[0],
    },
    {
        id: 3,
        nom: "Périmètre de sécurité - Espace Industriel Nord",
        perimetre: [
            [49.925, 2.260],
            [49.938, 2.285],
            [49.922, 2.310],
            [49.910, 2.280],
        ],
        utilisateur: mockUtilisateurs[0],
    },
];

// 6. Incident en cours
export const mockIncidents: Incident[] = [
    {
        id: 1,
        titre: "INC-2026-001 - Incendie de végétation Sud-Amiénois",
        type: "Feu de végétation périurbain",
        description: "Important feu de broussailles poussé par les vents vers le sud de la rocade. Évacuation préventive ordonnée.",
        date_debut: new Date(Date.now() - 3 * 3600 * 1000),
        niveau: 3, // Critique
        etat: "EN_COURS",
        agent_createur: mockUtilisateurs[0],
        zone: mockZones[0],
    },
];

// 7. Alertes associées
export const mockAlertes: Alerte[] = [
    {
        id: 1,
        type: "ALERTE",
        alerteur: mockUtilisateurs[0],
        message: "Fumées denses et propagation rapide secteur Sud. Dirigez-vous vers le Gymnase Universitaire du Bailly ou la Salle de Longueau.",
        incident: mockIncidents[0],
        commune: mockCommunes[0],
        zone: mockZones[0],
        date_publication: new Date(Date.now() - 2 * 3600 * 1000),
        date_expiration: new Date(Date.now() + 12 * 3600 * 1000),
    },
    {
        id: 2,
        type: "CONSIGNE_OFFICIELLE",
        alerteur: mockUtilisateurs[1],
        message: "Ne bloquez pas les accès réservés aux véhicules de secours (SDIS 80). Restez à l'écoute des consignes officielles.",
        incident: mockIncidents[0],
        commune: mockCommunes[1],
        zone: null,
        date_publication: new Date(Date.now() - 3600 * 1000),
        date_expiration: new Date(Date.now() + 6 * 3600 * 1000),
    },
];