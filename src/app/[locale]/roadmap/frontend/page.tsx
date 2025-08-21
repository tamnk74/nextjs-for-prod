'use client';

import { ReactFlow } from '@xyflow/react';
import Link from 'next/link';

import '@xyflow/react/dist/style.css';

const frontendNodes = [
  // Main Frontend - Centered and prominent
  { id: 'frontend-main', position: { x: 650, y: 40 }, data: { label: 'Senior Frontend Developer', url: 'https://roadmap.sh/frontend' }, style: { background: 'linear-gradient(135deg, #4ecdc4, #44a08d)', color: 'white', fontWeight: 'bold', fontSize: '20px', padding: '15px 30px', borderRadius: '15px', border: '3px solid white', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } },
  
  // STEP 1: FUNDAMENTALS - Essential foundation
  { id: 'fundamentals-header', position: { x: 150, y: 140 }, data: { label: '1️⃣ FUNDAMENTALS' }, style: { background: 'linear-gradient(135deg, #2c3e50, #34495e)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 250, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core Web Technologies
  { id: 'html', position: { x: 50, y: 210 }, data: { label: 'HTML5 & Semantics', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' }, style: { background: 'linear-gradient(135deg, #e34c26, #d73502)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'css', position: { x: 200, y: 190 }, data: { label: 'CSS3 & Layout', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }, style: { background: 'linear-gradient(135deg, #1572b6, #0f5a9e)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'javascript', position: { x: 350, y: 210 }, data: { label: 'JavaScript ES6+', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }, style: { background: 'linear-gradient(135deg, #f7df1e, #e6c200)', color: 'black', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Advanced Web Concepts
  { id: 'typescript', position: { x: 80, y: 270 }, data: { label: 'TypeScript', url: 'https://www.typescriptlang.org/' }, style: { background: 'linear-gradient(135deg, #3178c6, #2c5aa0)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'dom-apis', position: { x: 230, y: 270 }, data: { label: 'DOM & Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/API' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'responsive-design', position: { x: 380, y: 270 }, data: { label: 'Responsive Design', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 1
  { id: 'arrow-1', position: { x: 640, y: 370 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 2: CSS FRAMEWORKS & TOOLS
  { id: 'css-frameworks-header', position: { x: 500, y: 420 }, data: { label: '2️⃣ CSS FRAMEWORKS & TOOLS' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 320, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Modern CSS Frameworks
  { id: 'tailwind', position: { x: 100, y: 500 }, data: { label: 'Tailwind CSS', url: 'https://tailwindcss.com/' }, style: { background: 'linear-gradient(135deg, #06b6d4, #0891b2)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'styled-components', position: { x: 280, y: 480 }, data: { label: 'Styled Components', url: 'https://styled-components.com/' }, style: { background: 'linear-gradient(135deg, #db7093, #c1637a)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'emotion', position: { x: 450, y: 500 }, data: { label: 'Emotion', url: 'https://emotion.sh/' }, style: { background: 'linear-gradient(135deg, #d63384, #b02a5b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // CSS Preprocessors & Architecture
  { id: 'sass', position: { x: 620, y: 480 }, data: { label: 'Sass/SCSS', url: 'https://sass-lang.com/' }, style: { background: 'linear-gradient(135deg, #cf649a, #b8578a)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'css-modules', position: { x: 780, y: 500 }, data: { label: 'CSS Modules', url: 'https://github.com/css-modules/css-modules' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'postcss', position: { x: 920, y: 480 }, data: { label: 'PostCSS', url: 'https://postcss.org/' }, style: { background: 'linear-gradient(135deg, #dd3a0a, #c73407)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // CSS Grid & Flexbox
  { id: 'flexbox', position: { x: 200, y: 560 }, data: { label: 'Flexbox Mastery', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'css-grid', position: { x: 380, y: 560 }, data: { label: 'CSS Grid', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'css-animations', position: { x: 520, y: 560 }, data: { label: 'CSS Animations', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 2
  { id: 'arrow-2', position: { x: 640, y: 620 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 3: JAVASCRIPT FRAMEWORKS & LIBRARIES
  { id: 'frameworks-header', position: { x: 500, y: 670 }, data: { label: '3️⃣ JAVASCRIPT FRAMEWORKS' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 300, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core Frameworks
  { id: 'react', position: { x: 100, y: 750 }, data: { label: 'React', url: 'https://react.dev/' }, style: { background: 'linear-gradient(135deg, #61dafb, #21d4fd)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'vue', position: { x: 250, y: 730 }, data: { label: 'Vue.js', url: 'https://vuejs.org/' }, style: { background: 'linear-gradient(135deg, #4fc08d, #42b883)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'angular', position: { x: 400, y: 750 }, data: { label: 'Angular', url: 'https://angular.dev/' }, style: { background: 'linear-gradient(135deg, #dd0031, #c5002a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'svelte', position: { x: 550, y: 730 }, data: { label: 'Svelte', url: 'https://svelte.dev/' }, style: { background: 'linear-gradient(135deg, #ff3e00, #e6380a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // React Ecosystem & Meta-frameworks
  { id: 'nextjs', position: { x: 700, y: 750 }, data: { label: 'Next.js', url: 'https://nextjs.org/' }, style: { background: 'linear-gradient(135deg, #000000, #1a1a1a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'remix', position: { x: 850, y: 730 }, data: { label: 'Remix', url: 'https://remix.run/' }, style: { background: 'linear-gradient(135deg, #3992ff, #1e7ed2)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'gatsby', position: { x: 950, y: 750 }, data: { label: 'Gatsby', url: 'https://www.gatsbyjs.com/' }, style: { background: 'linear-gradient(135deg, #663399, #5a2d7a)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Modern JavaScript Features
  { id: 'async-js', position: { x: 150, y: 810 }, data: { label: 'Async/Await & Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'modules', position: { x: 370, y: 810 }, data: { label: 'ES6+ Modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'fetch-api', position: { x: 520, y: 810 }, data: { label: 'Fetch API & HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' }, style: { background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 3
  { id: 'arrow-3', position: { x: 640, y: 870 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 4: STATE MANAGEMENT & DATA FLOW
  { id: 'state-header', position: { x: 450, y: 920 }, data: { label: '4️⃣ STATE MANAGEMENT & DATA' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 340, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // State Management Solutions
  { id: 'redux', position: { x: 100, y: 1000 }, data: { label: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' }, style: { background: 'linear-gradient(135deg, #764abc, #6a3fb8)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'zustand', position: { x: 280, y: 980 }, data: { label: 'Zustand', url: 'https://zustand-demo.pmnd.rs/' }, style: { background: 'linear-gradient(135deg, #ffa726, #ff9800)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'context-api', position: { x: 420, y: 1000 }, data: { label: 'React Context', url: 'https://react.dev/reference/react/useContext' }, style: { background: 'linear-gradient(135deg, #42a5f5, #2196f3)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'mobx', position: { x: 560, y: 980 }, data: { label: 'MobX', url: 'https://mobx.js.org/' }, style: { background: 'linear-gradient(135deg, #ff6d00, #f57c00)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Data Fetching & API Integration
  { id: 'react-query', position: { x: 700, y: 1000 }, data: { label: 'TanStack Query', url: 'https://tanstack.com/query' }, style: { background: 'linear-gradient(135deg, #ff4154, #e53935)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'swr', position: { x: 880, y: 980 }, data: { label: 'SWR', url: 'https://swr.vercel.app/' }, style: { background: 'linear-gradient(135deg, #000000, #1a1a1a)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'apollo', position: { x: 980, y: 1000 }, data: { label: 'Apollo Client', url: 'https://www.apollographql.com/docs/react/' }, style: { background: 'linear-gradient(135deg, #311c87, #2a1a6b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Advanced State Patterns
  { id: 'state-machines', position: { x: 200, y: 1060 }, data: { label: 'State Machines (XState)', url: 'https://xstate.js.org/' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'recoil', position: { x: 420, y: 1060 }, data: { label: 'Recoil', url: 'https://recoiljs.org/' }, style: { background: 'linear-gradient(135deg, #3578e5, #2c5282)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'jotai', position: { x: 540, y: 1060 }, data: { label: 'Jotai', url: 'https://jotai.org/' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 4
  { id: 'arrow-4', position: { x: 640, y: 1140 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 5: BUILD TOOLS & DEVELOPMENT WORKFLOW
  { id: 'build-tools-header', position: { x: 500, y: 1190 }, data: { label: '5️⃣ BUILD TOOLS & WORKFLOW' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 320, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Modern Build Tools
  { id: 'vite', position: { x: 100, y: 1270 }, data: { label: 'Vite', url: 'https://vitejs.dev/' }, style: { background: 'linear-gradient(135deg, #646cff, #535bf2)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'webpack', position: { x: 250, y: 1250 }, data: { label: 'Webpack', url: 'https://webpack.js.org/' }, style: { background: 'linear-gradient(135deg, #8dd6f9, #76c7c0)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'esbuild', position: { x: 400, y: 1270 }, data: { label: 'esbuild', url: 'https://esbuild.github.io/' }, style: { background: 'linear-gradient(135deg, #ffcf00, #fab005)', color: 'black', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'rollup', position: { x: 550, y: 1250 }, data: { label: 'Rollup', url: 'https://rollupjs.org/' }, style: { background: 'linear-gradient(135deg, #ec4a3f, #d73527)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'parcel', position: { x: 700, y: 1270 }, data: { label: 'Parcel', url: 'https://parceljs.org/' }, style: { background: 'linear-gradient(135deg, #e1a95f, #d4941e)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Development Tools
  { id: 'babel', position: { x: 150, y: 1330 }, data: { label: 'Babel', url: 'https://babeljs.io/' }, style: { background: 'linear-gradient(135deg, #f9dc3e, #f7ca18)', color: 'black', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'eslint', position: { x: 280, y: 1330 }, data: { label: 'ESLint', url: 'https://eslint.org/' }, style: { background: 'linear-gradient(135deg, #4b32c3, #3c2a9d)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'prettier', position: { x: 420, y: 1330 }, data: { label: 'Prettier', url: 'https://prettier.io/' }, style: { background: 'linear-gradient(135deg, #f7b93e, #f5a623)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'husky', position: { x: 560, y: 1330 }, data: { label: 'Husky & Git Hooks', url: 'https://typicode.github.io/husky/' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Package Managers & Monorepos
  { id: 'npm', position: { x: 850, y: 1270 }, data: { label: 'npm/pnpm/yarn', url: 'https://www.npmjs.com/' }, style: { background: 'linear-gradient(135deg, #cb3837, #b8312f)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2parparcel2px 6px rgba(0,0,0,0.1)' } },
  { id: 'monorepos', position: { x: 700, y: 1330 }, data: { label: 'Monorepos (Nx, Lerna)', url: 'https://nx.dev/' }, style: { background: 'linear-gradient(135deg, #143055, #0f2a4a)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 5
  { id: 'arrow-5', position: { x: 640, y: 1410 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 6: TESTING & QUALITY ASSURANCE
  { id: 'testing-header', position: { x: 450, y: 1460 }, data: { label: '6️⃣ TESTING & QUALITY ASSURANCE' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 380, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Testing Frameworks
  { id: 'jest', position: { x: 100, y: 1540 }, data: { label: 'Jest', url: 'https://jestjs.io/' }, style: { background: 'linear-gradient(135deg, #c21807, #a91505)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'vitest', position: { x: 250, y: 1520 }, data: { label: 'Vitest', url: 'https://vitest.dev/' }, style: { background: 'linear-gradient(135deg, #729b1a, #6b8e23)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'testing-library', position: { x: 400, y: 1540 }, data: { label: 'Testing Library', url: 'https://testing-library.com/' }, style: { background: 'linear-gradient(135deg, #e33e3e, #d42c2c)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // E2E & Integration Testing
  { id: 'cypress', position: { x: 580, y: 1520 }, data: { label: 'Cypress', url: 'https://www.cypress.io/' }, style: { background: 'linear-gradient(135deg, #17202c, #0d1117)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'playwright', position: { x: 730, y: 1540 }, data: { label: 'Playwright', url: 'https://playwright.dev/' }, style: { background: 'linear-gradient(135deg, #2d8a3e, #28a745)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'storybook', position: { x: 880, y: 1520 }, data: { label: 'Storybook', url: 'https://storybook.js.org/' }, style: { background: 'linear-gradient(135deg, #ff4785, #fd366e)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Advanced Testing Concepts
  { id: 'tdd', position: { x: 200, y: 1600 }, data: { label: 'TDD/BDD', url: 'https://en.wikipedia.org/wiki/Test-driven_development' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'code-coverage', position: { x: 350, y: 1600 }, data: { label: 'Code Coverage', url: 'https://istanbul.js.org/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'performance-testing', position: { x: 520, y: 1600 }, data: { label: 'Performance Testing', url: 'https://web.dev/performance/' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'accessibility-testing', position: { x: 720, y: 1600 }, data: { label: 'Accessibility Testing', url: 'https://www.deque.com/axe/' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 6
  { id: 'arrow-6', position: { x: 640, y: 1680 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 7: PERFORMANCE & OPTIMIZATION
  { id: 'performance-header', position: { x: 450, y: 1730 }, data: { label: '7️⃣ PERFORMANCE & OPTIMIZATION' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 380, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core Web Vitals & Metrics
  { id: 'core-web-vitals', position: { x: 100, y: 1810 }, data: { label: 'Core Web Vitals', url: 'https://web.dev/vitals/' }, style: { background: 'linear-gradient(135deg, #4285f4, #3367d6)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'lighthouse', position: { x: 280, y: 1790 }, data: { label: 'Lighthouse', url: 'https://developers.google.com/web/tools/lighthouse' }, style: { background: 'linear-gradient(135deg, #ff6d01, #ff5722)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'web-performance-api', position: { x: 450, y: 1810 }, data: { label: 'Performance API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Optimization Techniques
  { id: 'code-splitting', position: { x: 620, y: 1790 }, data: { label: 'Code Splitting', url: 'https://webpack.js.org/guides/code-splitting/' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'lazy-loading', position: { x: 780, y: 1810 }, data: { label: 'Lazy Loading', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'tree-shaking', position: { x: 940, y: 1790 }, data: { label: 'Tree Shaking', url: 'https://webpack.js.org/guides/tree-shaking/' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Advanced Performance
  { id: 'service-workers', position: { x: 200, y: 1870 }, data: { label: 'Service Workers & PWA', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'web-workers', position: { x: 420, y: 1870 }, data: { label: 'Web Workers', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' }, style: { background: 'linear-gradient(135deg, #34495e, #2c3e50)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'caching-strategies', position: { x: 580, y: 1870 }, data: { label: 'Caching Strategies', url: 'https://web.dev/http-cache/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'image-optimization', position: { x: 750, y: 1870 }, data: { label: 'Image Optimization', url: 'https://web.dev/fast/#optimize-your-images' }, style: { background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Senior Best Practices
  { id: 'senior-best-practices', position: { x: 400, y: 1950 }, data: { label: 'Senior Frontend Best Practices', url: 'https://github.com/elsewhencode/project-guidelines' }, style: { background: 'linear-gradient(135deg, #4ecdc4, #44a08d)', color: 'white', fontWeight: 'bold', fontSize: '14px', borderRadius: '8px', padding: '10px 20px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', border: '2px solid rgba(255,255,255,0.3)' } },
];

const frontendEdges = [
  // Main connections from frontend-main (Level 1) - THICKEST LINES
  { id: 'e-main-fundamentals', source: 'frontend-main', target: 'fundamentals-header', style: { strokeWidth: 6, stroke: '#4ecdc4' } },
  
  // Section progression arrows (Level 1) - THICKEST LINES  
  { id: 'e-fund-to-css', source: 'fundamentals-header', target: 'css-frameworks-header', style: { strokeWidth: 6, stroke: '#34495e' } },
  { id: 'e-css-to-js', source: 'css-frameworks-header', target: 'frameworks-header', style: { strokeWidth: 6, stroke: '#8e44ad' } },
  { id: 'e-js-to-state', source: 'frameworks-header', target: 'state-header', style: { strokeWidth: 6, stroke: '#e67e22' } },
  { id: 'e-state-to-build', source: 'state-header', target: 'build-tools-header', style: { strokeWidth: 6, stroke: '#16a085' } },
  { id: 'e-build-to-test', source: 'build-tools-header', target: 'testing-header', style: { strokeWidth: 6, stroke: '#27ae60' } },
  { id: 'e-test-to-perf', source: 'testing-header', target: 'performance-header', style: { strokeWidth: 6, stroke: '#e74c3c' } },
  
  // Fundamentals connections (Level 2) - THICK LINES
  { id: 'e-fund-html', source: 'fundamentals-header', target: 'html', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-css', source: 'fundamentals-header', target: 'css', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-js', source: 'fundamentals-header', target: 'javascript', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-ts', source: 'fundamentals-header', target: 'typescript', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-dom', source: 'fundamentals-header', target: 'dom-apis', style: { strokeWidth: 3, stroke: '#34495e' } },
  { id: 'e-fund-responsive', source: 'fundamentals-header', target: 'responsive-design', style: { strokeWidth: 3, stroke: '#34495e' } },
  
  // CSS Framework connections (Level 2) - THICK LINES
  { id: 'e-css-tailwind', source: 'css-frameworks-header', target: 'tailwind', style: { strokeWidth: 4, stroke: '#8e44ad' } },
  { id: 'e-css-styled', source: 'css-frameworks-header', target: 'styled-components', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-emotion', source: 'css-frameworks-header', target: 'emotion', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-sass', source: 'css-frameworks-header', target: 'sass', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-modules', source: 'css-frameworks-header', target: 'css-modules', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-postcss', source: 'css-frameworks-header', target: 'postcss', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  
  // Layout mastery connections (Level 3) - MEDIUM LINES
  { id: 'e-css-flexbox', source: 'css-frameworks-header', target: 'flexbox', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-grid', source: 'css-frameworks-header', target: 'css-grid', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-css-animations', source: 'css-frameworks-header', target: 'css-animations', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  
  // Framework connections (Level 2) - THICK LINES
  { id: 'e-frame-react', source: 'frameworks-header', target: 'react', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-frame-vue', source: 'frameworks-header', target: 'vue', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-frame-angular', source: 'frameworks-header', target: 'angular', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-frame-svelte', source: 'frameworks-header', target: 'svelte', style: { strokeWidth: 4, stroke: '#e67e22' } },
  
  // Meta-framework connections (Level 3) - MEDIUM LINES
  { id: 'e-frame-nextjs', source: 'frameworks-header', target: 'nextjs', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-frame-remix', source: 'frameworks-header', target: 'remix', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-frame-gatsby', source: 'frameworks-header', target: 'gatsby', style: { strokeWidth: 3, stroke: '#e67e22' } },
  
  // React ecosystem connections (Level 3) - MEDIUM LINES
  { id: 'e-react-nextjs', source: 'react', target: 'nextjs', style: { strokeWidth: 3, stroke: '#61dafb' } },
  { id: 'e-react-remix', source: 'react', target: 'remix', style: { strokeWidth: 2, stroke: '#61dafb' } },
  { id: 'e-react-gatsby', source: 'react', target: 'gatsby', style: { strokeWidth: 2, stroke: '#61dafb' } },
  
  // Modern JS features connections (Level 3) - MEDIUM LINES
  { id: 'e-frame-async', source: 'frameworks-header', target: 'async-js', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-frame-modules', source: 'frameworks-header', target: 'modules', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-frame-fetch', source: 'frameworks-header', target: 'fetch-api', style: { strokeWidth: 3, stroke: '#e67e22' } },
  
  // State Management connections (Level 2) - THICK LINES
  { id: 'e-state-redux', source: 'state-header', target: 'redux', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-state-zustand', source: 'state-header', target: 'zustand', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-state-context', source: 'state-header', target: 'context-api', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-state-mobx', source: 'state-header', target: 'mobx', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // Data fetching connections (Level 2) - THICK LINES
  { id: 'e-state-query', source: 'state-header', target: 'react-query', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-state-swr', source: 'state-header', target: 'swr', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-state-apollo', source: 'state-header', target: 'apollo', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // Advanced state patterns (Level 3) - MEDIUM LINES
  { id: 'e-state-machines', source: 'state-header', target: 'state-machines', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-state-recoil', source: 'state-header', target: 'recoil', style: { strokeWidth: 2, stroke: '#16a085' } },
  { id: 'e-state-jotai', source: 'state-header', target: 'jotai', style: { strokeWidth: 2, stroke: '#16a085' } },
  
  // Build Tools connections (Level 2) - THICK LINES
  { id: 'e-build-vite', source: 'build-tools-header', target: 'vite', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-build-webpack', source: 'build-tools-header', target: 'webpack', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-build-esbuild', source: 'build-tools-header', target: 'esbuild', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-rollup', source: 'build-tools-header', target: 'rollup', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-parcel', source: 'build-tools-header', target: 'parcel', style: { strokeWidth: 3, stroke: '#27ae60' } },
  
  // Development workflow connections (Level 3) - MEDIUM LINES
  { id: 'e-build-babel', source: 'build-tools-header', target: 'babel', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-eslint', source: 'build-tools-header', target: 'eslint', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-prettier', source: 'build-tools-header', target: 'prettier', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-husky', source: 'build-tools-header', target: 'husky', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-npm', source: 'build-tools-header', target: 'npm', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-build-monorepos', source: 'build-tools-header', target: 'monorepos', style: { strokeWidth: 3, stroke: '#27ae60' } },
  
  // Testing connections (Level 2) - THICK LINES
  { id: 'e-test-jest', source: 'testing-header', target: 'jest', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-test-vitest', source: 'testing-header', target: 'vitest', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-test-library', source: 'testing-header', target: 'testing-library', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-test-cypress', source: 'testing-header', target: 'cypress', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-test-playwright', source: 'testing-header', target: 'playwright', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-test-storybook', source: 'testing-header', target: 'storybook', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Advanced testing concepts (Level 3) - MEDIUM LINES
  { id: 'e-test-tdd', source: 'testing-header', target: 'tdd', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-test-coverage', source: 'testing-header', target: 'code-coverage', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-test-perf-testing', source: 'testing-header', target: 'performance-testing', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-test-a11y', source: 'testing-header', target: 'accessibility-testing', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Performance connections (Level 2) - THICK LINES
  { id: 'e-perf-vitals', source: 'performance-header', target: 'core-web-vitals', style: { strokeWidth: 4, stroke: '#f39c12' } },
  { id: 'e-perf-lighthouse', source: 'performance-header', target: 'lighthouse', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-api', source: 'performance-header', target: 'web-performance-api', style: { strokeWidth: 3, stroke: '#f39c12' } },
  
  // Optimization techniques (Level 3) - MEDIUM LINES
  { id: 'e-perf-splitting', source: 'performance-header', target: 'code-splitting', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-lazy', source: 'performance-header', target: 'lazy-loading', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-tree', source: 'performance-header', target: 'tree-shaking', style: { strokeWidth: 3, stroke: '#f39c12' } },
  
  // Advanced performance (Level 3) - MEDIUM LINES
  { id: 'e-perf-sw', source: 'performance-header', target: 'service-workers', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-workers', source: 'performance-header', target: 'web-workers', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-caching', source: 'performance-header', target: 'caching-strategies', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-perf-images', source: 'performance-header', target: 'image-optimization', style: { strokeWidth: 3, stroke: '#f39c12' } },
  
  // Senior best practices connection (Level 1) - THICKEST LINE
  { id: 'e-perf-best', source: 'performance-header', target: 'senior-best-practices', style: { strokeWidth: 6, stroke: '#f39c12' } },
  
  // Cross-section integrations
  { id: 'e-nextjs-build', source: 'nextjs', target: 'webpack', style: { strokeWidth: 2, stroke: '#000000' } },
  { id: 'e-vite-build', source: 'vite', target: 'esbuild', style: { strokeWidth: 2, stroke: '#646cff' } },
  { id: 'e-react-testing', source: 'react', target: 'testing-library', style: { strokeWidth: 2, stroke: '#61dafb' } },
];

export default function FrontendRoadmap() {
  const onNodeClick = (event: React.MouseEvent, node: { id: string; data: { label: string; url?: string } }) => {
    if (node.data.url) {
      window.open(node.data.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:px-20">
      <header className="flex items-center justify-between w-full py-4">
        <div>
          <Link href="/en" className="text-blue-500 hover:underline mb-2 inline-block">← Back to Main Roadmap</Link>
          <h1 className="text-3xl font-bold text-[#4ecdc4]">Senior Frontend Developer Roadmap</h1>
          <p className="text-gray-600 mt-2">Complete learning path from fundamentals to production-ready senior skills</p>
        </div>
      </header>
      <div className="flex-1 w-full overflow-auto">
        <div style={{ width: '1400px', height: '2100px', minWidth: '1400px', minHeight: '2100px' }}>
          <ReactFlow 
            nodes={frontendNodes} 
            edges={frontendEdges} 
            zoomOnPinch={false} 
            zoomOnScroll={false}
            onNodeClick={onNodeClick}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            fitView={false}
            defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
            zoomOnDoubleClick={false}
            panOnDrag={true}
            style={{ 
              background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
                linear-gradient(-45deg, transparent 46%, rgba(255, 255, 255, 0.03) 50%, transparent 54%)
              `
            }}
          />
        </div>
      </div>
    </div>
  );
}
