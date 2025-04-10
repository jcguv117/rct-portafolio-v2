export interface Project {
    title:       string;
    subtitle:    string;
    description: string;
    image?:      null | string;
    website:     null | string;
    github:      null | string;
    tools:       string[];
}