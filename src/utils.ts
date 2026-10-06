import type {LatLngExpression} from "leaflet";

export enum images {
    alerte = "/src/assets/icones/alerte.svg",
    animaux = "/src/assets/icones/animaux.svg",
    horloge = "src/assets/icones/horloge.svg",
    places = "src/assets/icones/places.svg",
    pmr = "src/assets/icones/pmr.svg",
    position = "src/assets/icones/position.svg",
    restauration = "src/assets/icones/restauration.svg",
    sanitaires = "src/assets/icones/sanitaires.svg",
}

export type Commune = {
    id: number;
    nom: string;
    code_insee: number; // TODO : A voir entre le type number et string
    position: LatLngExpression;
}

export type Role = {
    id: number;
    libelle: string;
    permissions: number;
}

export type Utilisateur = {
    id: number;
    nom: string;
    prenom: string;
    pseudo: string;
    email: string;
    tel: string;
    mdp: string;
    Role: Role;
}

export type Centre = {
    id: number;
    nom: string;
    adresse: string;
    commune: Commune;
    code_postal: number;
    position: LatLngExpression;
    type: string;
    responsable: Utilisateur;
    capacite_max: number;
    places_dispo: number;
    etat: string;
    acces_pmr: boolean;
    accueil_animaux: boolean;
    sanitaire: boolean;
    restauration: boolean;
    date_maj: Date;
}

export type Zone = {
    id: number;
    nom: string;
    perimetre: LatLngExpression[];
    utilisateur: Utilisateur;
}

export type Incident = {
    id: number;
    titre: string;
    type: string;
    description: string;
    date_debut: Date;
    niveau: number;
    etat: string; // TODO : déterminer le bon type à mettre
    agent_createur: Utilisateur;
    zone: Zone;
}

export type Alerte = {
    id: number;
    type: string;
    alerteur: Utilisateur;
    message: string;
    incident: Incident;
    commune: Commune;
    zone: Zone | null;
    date_publication: Date;
    date_expiration: Date;
}

export type Besoin = {
    id: number;
    libelle: string;
}

export type HistoriqueAction = {
    id: number;
    agent: Utilisateur;
    action: string;
    centre: Centre | null;
    incident: Incident | null;
    alerte: Alerte | null;
    utilisateur: Utilisateur | null;
    date: Date;
}