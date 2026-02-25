import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Vite plugin to handle inline "figma:asset/..." src attributes in JSX/TSX.
 * Transforms them into proper import statements so Vite can process the assets.
 */
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-inline',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.(tsx|jsx)$/.test(id)) return null;
      // Match src="figma:asset/..." or src={'figma:asset/...'}
      const regex = /src=["']figma:asset\/([^"']+)["']/g;
      if (!regex.test(code)) return null;
      regex.lastIndex = 0;

      const imports: string[] = [];
      let counter = 0;
      let transformed = code;

      let match;
      while ((match = regex.exec(code)) !== null) {
        const assetFile = match[1];
        const varName = `__figmaInlineAsset${counter++}`;
        imports.push(`import ${varName} from "@/assets/${assetFile}";`);
        transformed = transformed.replace(match[0], `src={${varName}}`);
      }

      if (imports.length === 0) return null;

      return {
        code: imports.join('\n') + '\n' + transformed,
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Resolve figma:asset imports to the src/assets directory
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
})
