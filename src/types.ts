export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}