export interface FooterConfig {
  buttons?: {
    text: string;
    class?: string;
    action: () => void;
  }[];
}