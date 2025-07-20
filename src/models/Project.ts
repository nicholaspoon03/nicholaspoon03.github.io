import { ReactNode } from "react";

export interface Project {
    name: string,
    duration: string,
    tags: string[],
    hyperlinks: Record<string, string>[],
    description: ReactNode,
}
