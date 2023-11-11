export const styles = {
  openai: {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "#1C2B44",
    color: "#FCFFB6",
    padding: "2px 0",
  },
  huggingface_local: {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "#314128",
    color: "#B5F7D9",
    padding: "2px 0",
  },
  cohere: {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "#272154",
    padding: "2px 0",
  },
  huggingface: {
    transition: "background-color 0.2s ease-in-out",
    backgroundColor: "#4F2728",
    color: "#B5F7D9",
    padding: "2px 0",
  },
  forefront: {
    backgroundColor: "#BCCAE8",
    padding: "2px 0",
  },
  anthropic: {
    backgroundColor: "#cc785c80",
    padding: "2px 0",
  },
  aleph_alpha: {
    backgroundColor: "#272727",
    padding: "2px 0",
  },
  default: {
    backgroundColor: "transparent",
    transition: "background-color 0.2s ease-in-out",
    padding: "2px 0",
  },
}

export function getDecoratedStyle(provider: string, showHighlights: boolean) {
  if (showHighlights === false) return styles.default
  switch (provider) {
    case "openai":
      return styles.openai
    case "huggingface-local":
      return styles.huggingface_local
    case "cohere":
      return styles.cohere
    case "huggingface":
      return styles.huggingface
    case "forefront":
      return styles.forefront
    case "anthropic":
      return styles.anthropic
    case "aleph-alpha":
      return styles.aleph_alpha

    default:
      return styles.default
  }
}
