'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ReactFlow } from '@xyflow/react';
import { useRouter } from 'next/navigation';

import '@xyflow/react/dist/style.css';

const initialNodes = [
  // Core Categories
  { id: 'algorithm', position: { x: 600, y: 50 }, data: { label: 'Algorithm & DS', url: 'https://www.geeksforgeeks.org/data-structures/' }, style: { background: '#ff6b6b', color: 'white', fontWeight: 'bold' } },
  { id: 'frontend', position: { x: 200, y: 300 }, data: { label: 'Frontend', url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer' }, style: { background: '#4ecdc4', color: 'white', fontWeight: 'bold' } },
  { id: 'backend', position: { x: 1000, y: 300 }, data: { label: 'Backend', url: 'https://roadmap.sh/backend' }, style: { background: '#45b7d1', color: 'white', fontWeight: 'bold' } },
  { id: 'devops', position: { x: 600, y: 750 }, data: { label: 'DevOps & Infrastructure', url: 'https://roadmap.sh/devops' }, style: { background: '#96ceb4', color: 'white', fontWeight: 'bold' } },
  { id: 'system-design', position: { x: 600, y: 1050 }, data: { label: 'System Design', url: 'https://github.com/donnemartin/system-design-primer' }, style: { background: '#feca57', color: 'white', fontWeight: 'bold' } },
  
  // Algorithm & Data Structures
  { id: 'sorting', position: { x: 350, y: 150 }, data: { label: 'Sorting Algorithms', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' } },
  { id: 'search', position: { x: 600, y: 150 }, data: { label: 'Search Algorithms', url: 'https://www.geeksforgeeks.org/searching-algorithms/' } },
  { id: 'graph', position: { x: 850, y: 150 }, data: { label: 'Graph Algorithms', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' } },
  { id: 'dynamic-programming', position: { x: 475, y: 200 }, data: { label: 'Dynamic Programming', url: 'https://www.geeksforgeeks.org/dynamic-programming/' } },
  
  // Frontend Technologies
  { id: 'react', position: { x: 50, y: 450 }, data: { label: 'React/Next.js', url: 'https://react.dev/' } },
  { id: 'vue', position: { x: 200, y: 450 }, data: { label: 'Vue.js', url: 'https://vuejs.org/' } },
  { id: 'angular', position: { x: 350, y: 450 }, data: { label: 'Angular', url: 'https://angular.dev/' } },
  { id: 'typescript', position: { x: 125, y: 550 }, data: { label: 'TypeScript', url: 'https://www.typescriptlang.org/' } },
  { id: 'css-frameworks', position: { x: 275, y: 550 }, data: { label: 'CSS/Tailwind', url: 'https://tailwindcss.com/' } },
  { id: 'state-management', position: { x: 200, y: 650 }, data: { label: 'State Management', url: 'https://redux.js.org/' } },
  
  // Backend Technologies
  { id: 'nodejs', position: { x: 850, y: 450 }, data: { label: 'Node.js', url: 'https://nodejs.org/' } },
  { id: 'python', position: { x: 1000, y: 450 }, data: { label: 'Python/Django', url: 'https://www.djangoproject.com/' } },
  { id: 'java', position: { x: 1150, y: 450 }, data: { label: 'Java/Spring', url: 'https://spring.io/' } },
  { id: 'databases', position: { x: 925, y: 550 }, data: { label: 'Databases', url: 'https://www.postgresql.org/' } },
  { id: 'apis', position: { x: 1075, y: 550 }, data: { label: 'APIs/GraphQL', url: 'https://graphql.org/' } },
  { id: 'microservices', position: { x: 1000, y: 650 }, data: { label: 'Microservices', url: 'https://microservices.io/' } },
  
  // DevOps & Infrastructure
  { id: 'docker', position: { x: 350, y: 900 }, data: { label: 'Docker', url: 'https://docs.docker.com/' } },
  { id: 'kubernetes', position: { x: 500, y: 900 }, data: { label: 'Kubernetes', url: 'https://kubernetes.io/' } },
  { id: 'ci-cd', position: { x: 700, y: 900 }, data: { label: 'CI/CD', url: 'https://docs.github.com/en/actions' } },
  { id: 'cloud', position: { x: 850, y: 900 }, data: { label: 'Cloud (AWS/GCP)', url: 'https://aws.amazon.com/getting-started/' } },
  { id: 'monitoring', position: { x: 600, y: 600 }, data: { label: 'Monitoring', url: 'https://prometheus.io/' } },
  
  // System Design Components
  { id: 'scalability', position: { x: 400, y: 1200 }, data: { label: 'Scalability', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' } },
  { id: 'reliability', position: { x: 600, y: 1200 }, data: { label: 'Reliability', url: 'https://sre.google/sre-book/introduction/' } },
  { id: 'availability', position: { x: 800, y: 1200 }, data: { label: 'Availability', url: 'https://sre.google/sre-book/availability-table/' } },
  { id: 'caching', position: { x: 500, y: 1300 }, data: { label: 'Caching Strategies', url: 'https://redis.io/docs/' } },
  { id: 'load-balancing', position: { x: 700, y: 1300 }, data: { label: 'Load Balancing', url: 'https://www.nginx.com/resources/glossary/load-balancing/' } },
];

const initialEdges = [
  // Main category connections (showing learning progression)
  { id: 'e-algorithm-frontend', source: 'algorithm', target: 'frontend', style: { stroke: '#ff6b6b', strokeWidth: 3 } },
  { id: 'e-algorithm-backend', source: 'algorithm', target: 'backend', style: { stroke: '#ff6b6b', strokeWidth: 3 } },
  { id: 'e-frontend-devops', source: 'frontend', target: 'devops', style: { stroke: '#4ecdc4', strokeWidth: 3 } },
  { id: 'e-backend-devops', source: 'backend', target: 'devops', style: { stroke: '#45b7d1', strokeWidth: 3 } },
  { id: 'e-devops-system-design', source: 'devops', target: 'system-design', style: { stroke: '#96ceb4', strokeWidth: 3 } },
  
  // Algorithm subcategories
  { id: 'e-algorithm-sorting', source: 'algorithm', target: 'sorting' },
  { id: 'e-algorithm-search', source: 'algorithm', target: 'search' },
  { id: 'e-algorithm-graph', source: 'algorithm', target: 'graph' },
  { id: 'e-algorithm-dp', source: 'algorithm', target: 'dynamic-programming' },
  
  // Frontend subcategories
  { id: 'e-frontend-react', source: 'frontend', target: 'react' },
  { id: 'e-frontend-vue', source: 'frontend', target: 'vue' },
  { id: 'e-frontend-angular', source: 'frontend', target: 'angular' },
  { id: 'e-frontend-ts', source: 'frontend', target: 'typescript' },
  { id: 'e-frontend-css', source: 'frontend', target: 'css-frameworks' },
  { id: 'e-frontend-state', source: 'frontend', target: 'state-management' },
  
  // Backend subcategories
  { id: 'e-backend-nodejs', source: 'backend', target: 'nodejs' },
  { id: 'e-backend-python', source: 'backend', target: 'python' },
  { id: 'e-backend-java', source: 'backend', target: 'java' },
  { id: 'e-backend-db', source: 'backend', target: 'databases' },
  { id: 'e-backend-apis', source: 'backend', target: 'apis' },
  { id: 'e-backend-microservices', source: 'backend', target: 'microservices' },
  
  // DevOps subcategories
  { id: 'e-devops-docker', source: 'devops', target: 'docker' },
  { id: 'e-devops-k8s', source: 'devops', target: 'kubernetes' },
  { id: 'e-devops-cicd', source: 'devops', target: 'ci-cd' },
  { id: 'e-devops-cloud', source: 'devops', target: 'cloud' },
  { id: 'e-devops-monitoring', source: 'devops', target: 'monitoring' },
  
  // System Design subcategories
  { id: 'e-system-scalability', source: 'system-design', target: 'scalability' },
  { id: 'e-system-reliability', source: 'system-design', target: 'reliability' },
  { id: 'e-system-availability', source: 'system-design', target: 'availability' },
  { id: 'e-system-caching', source: 'system-design', target: 'caching' },
  { id: 'e-system-load-balancing', source: 'system-design', target: 'load-balancing' },
  
  // Cross-category connections (showing how technologies relate)
  { id: 'e-typescript-backends', source: 'typescript', target: 'nodejs', style: { stroke: '#95a5a6', strokeDasharray: '5,5' } },
  { id: 'e-docker-microservices', source: 'docker', target: 'microservices', style: { stroke: '#95a5a6', strokeDasharray: '5,5' } },
  { id: 'e-monitoring-reliability', source: 'monitoring', target: 'reliability', style: { stroke: '#95a5a6', strokeDasharray: '5,5' } },
  { id: 'e-cloud-scalability', source: 'cloud', target: 'scalability', style: { stroke: '#95a5a6', strokeDasharray: '5,5' } },
];


export default function HomePage() {
  const t = useTranslations('Home');
  const router = useRouter();

  const onNodeClick = (event: React.MouseEvent, node: { id: string; data: { label: string; url?: string } }) => {
    // Special handling for Frontend and Backend nodes - navigate to detailed roadmaps
    if (node.id === 'frontend') {
      router.push('/en/roadmap/frontend');
      return;
    }
    
    if (node.id === 'backend') {
      router.push('/en/roadmap/backend');
      return;
    }
    
    if (node.id === 'devops') {
      router.push('/en/roadmap/devops');
      return;
    }
    
    // For all other nodes, open documentation URL
    if (node.data.url) {
      window.open(node.data.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
   <div className="min-h-screen flex flex-col px-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:px-20">
      <header className="flex items-center justify-between w-full py-4">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
      </header>
      <div className="flex-1 w-full overflow-auto">
        <div style={{ width: '1400px', height: '1500px', minWidth: '1400px', minHeight: '1500px' }}>
          <ReactFlow 
            nodes={initialNodes} 
            edges={initialEdges} 
            zoomOnPinch={false} 
            zoomOnScroll={false}
            onNodeClick={onNodeClick}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            fitView={false}
            defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
            zoomOnDoubleClick={false}
            panOnDrag={true}
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.3) 0%, transparent 50%)
              `
            }}
          />
        </div>
      </div>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
