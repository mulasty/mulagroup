import type { Config } from 'tailwindcss';
import preset from '@mulagroup/design-system/tailwind-preset';

const config: Config = {
  presets: [preset],
  content: ['./app/**/*.{ts,tsx}']
};

export default config;
