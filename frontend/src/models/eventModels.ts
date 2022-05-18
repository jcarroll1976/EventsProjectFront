export interface ApiResponse{
    events: Event[];
}

export interface Event{
    type: string;
    id: number;
    datetime_Utc: string;
    venue: Venue;
    datetime_tbd: boolean;
    performers: Performer[];
    is_open: boolean;
    datetime_local: string;
    timeTbd: boolean;
    short_title: string;
    visible_until_utc: string;
    taxonomies: Taxonomies[];
    url: string;
    score: number;
    announce_date: string;
    created_at: string;
    date_tbd: boolean;
    title: string;
    popularity: number;
    description: string;
    status: string;
}

export interface Venue{
    state: string;
    name_v2: string;
    postal_code: string;
    name: string;
    timezone: string;
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
    metro_code: number;
    capacity: number;
    display_location: string
}

export interface Performer{
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