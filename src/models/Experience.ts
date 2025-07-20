import { ReactNode } from "react";

export interface Experience {
    company: string;
    positionToDuration: Record<string, string>;
    location: string,
    tags: string[],
    description: ReactNode,
}
