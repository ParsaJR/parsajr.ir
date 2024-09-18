export interface BlogPost {
    title: string,
    date: string,
    description: string,
    image: string,
    image_alt: string, 
    tags: string[],
    draft: boolean
}