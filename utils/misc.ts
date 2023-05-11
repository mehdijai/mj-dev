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

export function extractDescription(html: string): string {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  const paragraphElement = tempElement.querySelector("p");

  if (paragraphElement == null) return "";

  const paragraphContent = paragraphElement.textContent;

  if (paragraphContent == null) return "";

  return paragraphContent;
}
