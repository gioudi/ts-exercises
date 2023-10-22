export interface ListCharacters {
    items:     Item[];
    total:     number;
    firstPage: string;
    lastPage:  string;
    nextPage:  string;
}

export interface Item {
    "@id":     string;
    "@type":   Type;
    id:        number;
    firstName: string;
    lastName:  string;
    picture:   string;
    birthdate: Date;
    genre:     Genre;
    blood:     Blood;
    house:     string;
    alive:     boolean;
}

export enum Type {
    Character = "Character",
}

export enum Blood {
    Empty = "",
    HalfBlood = "half-blood",
    Muggleborn = "muggleborn",
    PureBlood = "pure-blood",
}

export enum Genre {
    Female = "female",
    Male = "male",
}
