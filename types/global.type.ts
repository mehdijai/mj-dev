export interface SMLink {
  name: string;
  url: string;
  logo: string;
}

export interface ITag {
    id: number,
    title: string;
    bg: string;
    color: string;
}

export interface IProject {
    id: number;
    title: string;
    slug: string;
    publishedAt: string;
    thumbnail: string;
    content: string;
    tags: ITag[]
}