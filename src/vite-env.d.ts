/// <reference types="vite/client" />

interface OmeletteHost {
  writeFile: (path: string, content: string) => void | Promise<void>;
}

interface Window {
  omelette?: OmeletteHost;
}
