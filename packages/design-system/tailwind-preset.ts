import type { Config } from 'tailwindcss';

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        mg: {
          bg: 'var(--mg-bg)',
          surface: 'var(--mg-surface)',
          text: 'var(--mg-text)',
          muted: 'var(--mg-text-muted)',
          primary: 'var(--mg-primary)',
          border: 'var(--mg-border)'
        }
      },
      borderRadius: {
        mg: 'var(--mg-radius-md)'
      },
      maxWidth: {
        container: 'var(--mg-container-max)'
      }
    }
  }
};

export default preset;
