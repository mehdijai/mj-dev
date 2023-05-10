import { marked } from "marked";

export function parseMd(md: string): string {
  const renderer = {
    link(href: string, title: string, text: string) {
      return `<a name="${title}" class="link" href="${href}">${text}</a>`;
    },
  };

  marked.use({ renderer });

  return marked.parse(md);
}
