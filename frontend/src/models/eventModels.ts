export interface ApiResponse{
    events: Event[];
}

export interface Event{
    type: string;
    id: number;
    venue: Venue;
    performers: Performer[];
    datetime_local: string;
    taxonomies: Taxonomies[];
    url: string;
    title: string;
    popularity: number;
    description: string;
}

export interface Venue{
    state: string;
    name_v2: string;
    postal_code: string;
    name: string;
    url: string;
    score: number;
    location: Location;
    address: string;
    country: string;
    has_upcoming_events: boolean;
    num_upcoming_events: number;
    city: string;
    slug: string;
    extended_address: string;
    id: number;
    popularity: number;
    capacity: number;
    display_location: string
}

export  interface Performer{
    type: string;
    name: string;
    image: string;
    taxonomies: Taxonomies[];
    url: string;
    score: number;
}

export interface Taxonomies{
    id: number;
    name: string;
    parent_id: number;
    rank: number;
}