'use client';

import { ReactFlow } from '@xyflow/react';
import Link from 'next/link';

import '@xyflow/react/dist/style.css';

const backendNodes = [
  // Main Backend - Centered and prominent
  { id: 'backend-main', position: { x: 650, y: 40 }, data: { label: 'Senior Node.js Backend Developer', url: 'https://roadmap.sh/backend' }, style: { background: 'linear-gradient(135deg, #68a063, #5a8a56)', color: 'white', fontWeight: 'bold', fontSize: '20px', padding: '15px 30px', borderRadius: '15px', border: '3px solid white', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } },
  
  // STEP 1: FUNDAMENTALS - Essential foundation
  { id: 'fundamentals-header', position: { x: 150, y: 140 }, data: { label: '1️⃣ FUNDAMENTALS' }, style: { background: 'linear-gradient(135deg, #2c3e50, #34495e)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 250, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core JavaScript & Node.js
  { id: 'javascript', position: { x: 50, y: 210 }, data: { label: 'JavaScript ES6+', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }, style: { background: 'linear-gradient(135deg, #f7df1e, #e6c200)', color: 'black', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'typescript', position: { x: 200, y: 190 }, data: { label: 'TypeScript', url: 'https://www.typescriptlang.org/' }, style: { background: 'linear-gradient(135deg, #3178c6, #2c5aa0)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'nodejs-core', position: { x: 350, y: 210 }, data: { label: 'Node.js Core', url: 'https://nodejs.org/' }, style: { background: 'linear-gradient(135deg, #68a063, #5a8a56)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Advanced JS Concepts
  { id: 'async-programming', position: { x: 80, y: 270 }, data: { label: 'Async/Await & Promises', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'event-loop', position: { x: 280, y: 270 }, data: { label: 'Event Loop & Concurrency', url: 'https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 1
  { id: 'arrow-1', position: { x: 640, y: 370 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 2: FRAMEWORKS & ARCHITECTURE
  { id: 'frameworks-header', position: { x: 500, y: 420 }, data: { label: '2️⃣ FRAMEWORKS & ARCHITECTURE' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 350, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core Frameworks
  { id: 'express', position: { x: 100, y: 500 }, data: { label: 'Express.js', url: 'https://expressjs.com/' }, style: { background: 'linear-gradient(135deg, #404040, #303030)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'nestjs', position: { x: 250, y: 480 }, data: { label: 'NestJS', url: 'https://nestjs.com/' }, style: { background: 'linear-gradient(135deg, #e0234e, #c41e3a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'fastify', position: { x: 400, y: 500 }, data: { label: 'Fastify', url: 'https://www.fastify.io/' }, style: { background: 'linear-gradient(135deg, #000000, #1a1a1a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Advanced Framework Features
  { id: 'middleware', position: { x: 550, y: 480 }, data: { label: 'Middleware Design', url: 'https://expressjs.com/en/guide/using-middleware.html' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'dependency-injection', position: { x: 720, y: 500 }, data: { label: 'Dependency Injection', url: 'https://docs.nestjs.com/fundamentals/custom-providers' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Architecture Patterns
  { id: 'clean-architecture', position: { x: 150, y: 570 }, data: { label: 'Clean Architecture', url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'microservices', position: { x: 320, y: 570 }, data: { label: 'Microservices', url: 'https://microservices.io/' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'event-driven', position: { x: 490, y: 570 }, data: { label: 'Event-Driven Architecture', url: 'https://martinfowler.com/articles/201701-event-driven.html' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'domain-driven', position: { x: 700, y: 570 }, data: { label: 'Domain-Driven Design', url: 'https://martinfowler.com/bliki/DomainDrivenDesign.html' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 2
  { id: 'arrow-2', position: { x: 640, y: 650 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 3: APIs & COMMUNICATION
  { id: 'apis-header', position: { x: 550, y: 700 }, data: { label: '3️⃣ APIs & COMMUNICATION' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 300, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // API Technologies
  { id: 'rest-api', position: { x: 200, y: 780 }, data: { label: 'RESTful APIs', url: 'https://restfulapi.net/' }, style: { background: 'linear-gradient(135deg, #0066cc, #004d99)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'graphql', position: { x: 370, y: 760 }, data: { label: 'GraphQL', url: 'https://graphql.org/' }, style: { background: 'linear-gradient(135deg, #e10098, #c7007a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'grpc', position: { x: 520, y: 780 }, data: { label: 'gRPC', url: 'https://grpc.io/' }, style: { background: 'linear-gradient(135deg, #4285f4, #3367d6)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Real-time Communication
  { id: 'websockets', position: { x: 690, y: 760 }, data: { label: 'WebSockets', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' }, style: { background: 'linear-gradient(135deg, #ff6b35, #e55527)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'socketio', position: { x: 850, y: 780 }, data: { label: 'Socket.IO', url: 'https://socket.io/' }, style: { background: 'linear-gradient(135deg, #010101, #25252d)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Advanced API Concepts
  { id: 'api-security', position: { x: 200, y: 840 }, data: { label: 'API Security (JWT)', url: 'https://jwt.io/' }, style: { background: 'linear-gradient(135deg, #c0392b, #a93226)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'oauth2', position: { x: 350, y: 840 }, data: { label: 'OAuth 2.0', url: 'https://oauth.net/2/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'openid', position: { x: 500, y: 840 }, data: { label: 'OpenID Connect', url: 'https://openid.net/connect/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', fontWeight: 'bold', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'saml', position: { x: 680, y: 840 }, data: { label: 'SAML', url: 'https://developers.onelogin.com/saml' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', fontWeight: 'bold', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'rate-limiting', position: { x: 830, y: 840 }, data: { label: 'Rate Limiting', url: 'https://github.com/nfriedly/express-rate-limit' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'api-documentation', position: { x: 1000, y: 840 }, data: { label: 'API Documentation (Swagger)', url: 'https://swagger.io/' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 3
  { id: 'arrow-3', position: { x: 640, y: 920 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 4: DATABASES & DATA MANAGEMENT
  { id: 'databases-header', position: { x: 550, y: 970 }, data: { label: '4️⃣ DATABASES & DATA' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 280, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // SQL Databases
  { id: 'postgresql', position: { x: 150, y: 1050 }, data: { label: 'PostgreSQL', url: 'https://www.postgresql.org/' }, style: { background: 'linear-gradient(135deg, #336791, #295577)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'mysql', position: { x: 300, y: 1030 }, data: { label: 'MySQL', url: 'https://www.mysql.com/' }, style: { background: 'linear-gradient(135deg, #4479a1, #365f7c)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // NoSQL Databases
  { id: 'mongodb', position: { x: 450, y: 1050 }, data: { label: 'MongoDB', url: 'https://www.mongodb.com/' }, style: { background: 'linear-gradient(135deg, #47a248, #3a8239)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'redis', position: { x: 600, y: 1030 }, data: { label: 'Redis', url: 'https://redis.io/' }, style: { background: 'linear-gradient(135deg, #dc382d, #b82e25)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'elasticsearch', position: { x: 750, y: 1050 }, data: { label: 'Elasticsearch', url: 'https://www.elastic.co/' }, style: { background: 'linear-gradient(135deg, #005571, #004459)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'neo4j', position: { x: 900, y: 1030 }, data: { label: 'Neo4j (Graph DB)', url: 'https://neo4j.com/' }, style: { background: 'linear-gradient(135deg, #008cc1, #00759c)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // ORMs & Query Builders
  { id: 'prisma', position: { x: 200, y: 1110 }, data: { label: 'Prisma ORM', url: 'https://www.prisma.io/' }, style: { background: 'linear-gradient(135deg, #2d3748, #1a202c)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'typeorm', position: { x: 350, y: 1110 }, data: { label: 'TypeORM', url: 'https://typeorm.io/' }, style: { background: 'linear-gradient(135deg, #e83524, #c62d42)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'mongoose', position: { x: 500, y: 1110 }, data: { label: 'Mongoose', url: 'https://mongoosejs.com/' }, style: { background: 'linear-gradient(135deg, #800000, #660000)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'knex', position: { x: 650, y: 1110 }, data: { label: 'Knex.js', url: 'https://knexjs.org/' }, style: { background: 'linear-gradient(135deg, #d68910, #b7950b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 4
  { id: 'arrow-4', position: { x: 640, y: 1190 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 5: ADVANCED TOPICS & PRODUCTION
  { id: 'advanced-header', position: { x: 500, y: 1240 }, data: { label: '5️⃣ ADVANCED & PRODUCTION' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 320, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Performance & Optimization
  { id: 'performance', position: { x: 100, y: 1320 }, data: { label: 'Performance Optimization', url: 'https://nodejs.org/en/docs/guides/simple-profiling/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'caching', position: { x: 280, y: 1300 }, data: { label: 'Caching Strategies', url: 'https://redis.io/docs/manual/patterns/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'load-balancing', position: { x: 450, y: 1320 }, data: { label: 'Load Balancing', url: 'https://nginx.org/en/docs/http/load_balancing.html' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // DevOps & Deployment
  { id: 'docker', position: { x: 620, y: 1300 }, data: { label: 'Docker', url: 'https://www.docker.com/' }, style: { background: 'linear-gradient(135deg, #2496ed, #1976d2)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'kubernetes', position: { x: 770, y: 1320 }, data: { label: 'Kubernetes', url: 'https://kubernetes.io/' }, style: { background: 'linear-gradient(135deg, #326ce5, #2456c7)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Monitoring & Testing
  { id: 'testing', position: { x: 150, y: 1380 }, data: { label: 'Testing (Jest, Supertest)', url: 'https://jestjs.io/' }, style: { background: 'linear-gradient(135deg, #c21807, #a91505)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'monitoring', position: { x: 350, y: 1380 }, data: { label: 'Monitoring (Prometheus)', url: 'https://prometheus.io/' }, style: { background: 'linear-gradient(135deg, #e6522c, #d1431f)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'logging', position: { x: 550, y: 1380 }, data: { label: 'Logging (Winston, Morgan)', url: 'https://github.com/winstonjs/winston' }, style: { background: 'linear-gradient(135deg, #17a2b8, #138496)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Cloud & CI/CD
  { id: 'aws', position: { x: 750, y: 1380 }, data: { label: 'AWS/Cloud Services', url: 'https://aws.amazon.com/' }, style: { background: 'linear-gradient(135deg, #ff9900, #e68900)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'cicd', position: { x: 950, y: 1320 }, data: { label: 'CI/CD Pipelines', url: 'https://github.com/features/actions' }, style: { background: 'linear-gradient(135deg, #2188ff, #0969da)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 5
  { id: 'arrow-5', position: { x: 640, y: 1460 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 6: SECURITY & DESIGN PATTERNS
  { id: 'security-patterns-header', position: { x: 450, y: 1540 }, data: { label: '6️⃣ SECURITY & DESIGN PATTERNS' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 380, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Security & Encryption
  { id: 'encryption', position: { x: 100, y: 1620 }, data: { label: 'Encryption (AES, RSA)', url: 'https://nodejs.org/api/crypto.html' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'hashing', position: { x: 280, y: 1600 }, data: { label: 'Hashing (bcrypt, Argon2)', url: 'https://github.com/kelektiv/node.bcrypt.js' }, style: { background: 'linear-gradient(135deg, #c0392b, #a93226)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'ssl-tls', position: { x: 480, y: 1620 }, data: { label: 'SSL/TLS & HTTPS', url: 'https://nodejs.org/api/https.html' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Design Patterns
  { id: 'design-patterns', position: { x: 650, y: 1600 }, data: { label: 'Design Patterns', url: 'https://refactoring.guru/design-patterns' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'solid-principles', position: { x: 820, y: 1620 }, data: { label: 'SOLID Principles', url: 'https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Microservice Patterns
  { id: 'circuit-breaker', position: { x: 150, y: 1700 }, data: { label: 'Circuit Breaker Pattern', url: 'https://martinfowler.com/bliki/CircuitBreaker.html' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'saga-pattern', position: { x: 350, y: 1700 }, data: { label: 'Saga Pattern', url: 'https://microservices.io/patterns/data/saga.html' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'cqrs', position: { x: 520, y: 1700 }, data: { label: 'CQRS', url: 'https://martinfowler.com/bliki/CQRS.html' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'event-sourcing', position: { x: 650, y: 1700 }, data: { label: 'Event Sourcing', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Best Practices
  { id: 'best-practices', position: { x: 400, y: 1780 }, data: { label: 'Node.js Best Practices', url: 'https://github.com/goldbergyoni/nodebestpractices' }, style: { background: 'linear-gradient(135deg, #68a063, #5a8a56)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
];

const backendEdges = [
  // Main timeline flow (vertical progression) - THICKEST LINES (Level 1)
  { id: 'e-main-fundamentals', source: 'backend-main', target: 'fundamentals-header', type: 'straight', style: { strokeWidth: 6, stroke: '#2c3e50' } },
  { id: 'e-fundamentals-arrow1', source: 'fundamentals-header', target: 'arrow-1', type: 'straight', style: { strokeWidth: 6, stroke: '#2c3e50' } },
  { id: 'e-arrow1-frameworks', source: 'arrow-1', target: 'frameworks-header', type: 'straight', style: { strokeWidth: 6, stroke: '#8e44ad' } },
  { id: 'e-frameworks-arrow2', source: 'frameworks-header', target: 'arrow-2', type: 'straight', style: { strokeWidth: 6, stroke: '#8e44ad' } },
  { id: 'e-arrow2-apis', source: 'arrow-2', target: 'apis-header', type: 'straight', style: { strokeWidth: 6, stroke: '#e67e22' } },
  { id: 'e-apis-arrow3', source: 'apis-header', target: 'arrow-3', type: 'straight', style: { strokeWidth: 6, stroke: '#e67e22' } },
  { id: 'e-arrow3-databases', source: 'arrow-3', target: 'databases-header', type: 'straight', style: { strokeWidth: 6, stroke: '#16a085' } },
  { id: 'e-databases-arrow4', source: 'databases-header', target: 'arrow-4', type: 'straight', style: { strokeWidth: 6, stroke: '#16a085' } },
  { id: 'e-arrow4-advanced', source: 'arrow-4', target: 'advanced-header', type: 'straight', style: { strokeWidth: 6, stroke: '#27ae60' } },
  { id: 'e-advanced-arrow5', source: 'advanced-header', target: 'arrow-5', type: 'straight', style: { strokeWidth: 6, stroke: '#27ae60' } },
  { id: 'e-arrow5-security', source: 'arrow-5', target: 'security-patterns-header', type: 'straight', style: { strokeWidth: 6, stroke: '#e74c3c' } },
  
  // Fundamentals connections (Level 2) - THICK LINES
  { id: 'e-fund-js', source: 'fundamentals-header', target: 'javascript', style: { strokeWidth: 4, stroke: '#2c3e50' } },
  { id: 'e-fund-ts', source: 'fundamentals-header', target: 'typescript', style: { strokeWidth: 4, stroke: '#2c3e50' } },
  { id: 'e-fund-nodejs', source: 'fundamentals-header', target: 'nodejs-core', style: { strokeWidth: 4, stroke: '#2c3e50' } },
  { id: 'e-fund-async', source: 'fundamentals-header', target: 'async-programming', style: { strokeWidth: 3, stroke: '#2c3e50' } },
  { id: 'e-fund-event', source: 'fundamentals-header', target: 'event-loop', style: { strokeWidth: 3, stroke: '#2c3e50' } },
  
  // JavaScript progression connections (Level 2) - THICK LINES
  { id: 'e-js-ts', source: 'javascript', target: 'typescript', style: { strokeWidth: 4, stroke: '#f7df1e' } },
  { id: 'e-js-async', source: 'javascript', target: 'async-programming', style: { strokeWidth: 3, stroke: '#f7df1e' } },
  { id: 'e-nodejs-event', source: 'nodejs-core', target: 'event-loop', style: { strokeWidth: 3, stroke: '#68a063' } },
  
  // Framework connections (Level 2) - THICK LINES
  { id: 'e-frame-express', source: 'frameworks-header', target: 'express', style: { strokeWidth: 4, stroke: '#8e44ad' } },
  { id: 'e-frame-nest', source: 'frameworks-header', target: 'nestjs', style: { strokeWidth: 4, stroke: '#8e44ad' } },
  { id: 'e-frame-fastify', source: 'frameworks-header', target: 'fastify', style: { strokeWidth: 4, stroke: '#8e44ad' } },
  { id: 'e-frame-middleware', source: 'frameworks-header', target: 'middleware', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-frame-di', source: 'frameworks-header', target: 'dependency-injection', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  
  // Architecture pattern connections (Level 3) - MEDIUM LINES
  { id: 'e-frame-clean', source: 'frameworks-header', target: 'clean-architecture', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-frame-micro', source: 'frameworks-header', target: 'microservices', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-frame-event', source: 'frameworks-header', target: 'event-driven', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-frame-ddd', source: 'frameworks-header', target: 'domain-driven', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  
  // Framework ecosystem connections (Level 3) - MEDIUM LINES
  { id: 'e-express-middleware', source: 'express', target: 'middleware', style: { strokeWidth: 3, stroke: '#404040' } },
  { id: 'e-nest-di', source: 'nestjs', target: 'dependency-injection', style: { strokeWidth: 3, stroke: '#e0234e' } },
  
  // API connections (Level 2) - THICK LINES
  { id: 'e-api-rest', source: 'apis-header', target: 'rest-api', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-api-graphql', source: 'apis-header', target: 'graphql', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-api-grpc', source: 'apis-header', target: 'grpc', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-ws', source: 'apis-header', target: 'websockets', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-socketio', source: 'apis-header', target: 'socketio', style: { strokeWidth: 3, stroke: '#e67e22' } },
  
  // API security and documentation (Level 3) - MEDIUM LINES
  { id: 'e-api-security', source: 'apis-header', target: 'api-security', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-oauth2', source: 'apis-header', target: 'oauth2', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-openid', source: 'apis-header', target: 'openid', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-saml', source: 'apis-header', target: 'saml', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-api-rate', source: 'apis-header', target: 'rate-limiting', style: { strokeWidth: 2, stroke: '#e67e22' } },
  { id: 'e-api-docs', source: 'apis-header', target: 'api-documentation', style: { strokeWidth: 2, stroke: '#e67e22' } },
  
  // Authentication progression (Level 3) - MEDIUM LINES
  { id: 'e-jwt-oauth2', source: 'api-security', target: 'oauth2', style: { strokeWidth: 3, stroke: '#c0392b' } },
  { id: 'e-oauth2-openid', source: 'oauth2', target: 'openid', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Real-time communication progression (Level 3) - MEDIUM LINES
  { id: 'e-ws-socketio', source: 'websockets', target: 'socketio', style: { strokeWidth: 3, stroke: '#ff6b35' } },
  
  // Database connections (Level 2) - THICK LINES
  { id: 'e-db-postgres', source: 'databases-header', target: 'postgresql', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-db-mysql', source: 'databases-header', target: 'mysql', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-db-mongo', source: 'databases-header', target: 'mongodb', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-db-redis', source: 'databases-header', target: 'redis', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-db-elastic', source: 'databases-header', target: 'elasticsearch', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-db-neo4j', source: 'databases-header', target: 'neo4j', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // ORM connections (Level 3) - MEDIUM LINES
  { id: 'e-db-prisma', source: 'databases-header', target: 'prisma', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-db-typeorm', source: 'databases-header', target: 'typeorm', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-db-mongoose', source: 'databases-header', target: 'mongoose', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-db-knex', source: 'databases-header', target: 'knex', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // Database to ORM connections (Level 3) - MEDIUM LINES
  { id: 'e-postgres-prisma', source: 'postgresql', target: 'prisma', style: { strokeWidth: 3, stroke: '#336791' } },
  { id: 'e-postgres-typeorm', source: 'postgresql', target: 'typeorm', style: { strokeWidth: 2, stroke: '#336791' } },
  { id: 'e-mongo-mongoose', source: 'mongodb', target: 'mongoose', style: { strokeWidth: 3, stroke: '#47a248' } },
  { id: 'e-mysql-knex', source: 'mysql', target: 'knex', style: { strokeWidth: 2, stroke: '#4479a1' } },
  
  // Advanced & Production connections (Level 2) - THICK LINES
  { id: 'e-adv-performance', source: 'advanced-header', target: 'performance', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-adv-caching', source: 'advanced-header', target: 'caching', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-adv-load', source: 'advanced-header', target: 'load-balancing', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-adv-docker', source: 'advanced-header', target: 'docker', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-adv-k8s', source: 'advanced-header', target: 'kubernetes', style: { strokeWidth: 4, stroke: '#27ae60' } },
  
  // Testing & Monitoring connections (Level 3) - MEDIUM LINES
  { id: 'e-adv-testing', source: 'advanced-header', target: 'testing', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-adv-monitoring', source: 'advanced-header', target: 'monitoring', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-adv-logging', source: 'advanced-header', target: 'logging', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-adv-aws', source: 'advanced-header', target: 'aws', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-adv-cicd', source: 'advanced-header', target: 'cicd', style: { strokeWidth: 3, stroke: '#27ae60' } },
  
  // Container orchestration progression (Level 3) - MEDIUM LINES
  { id: 'e-docker-k8s', source: 'docker', target: 'kubernetes', style: { strokeWidth: 3, stroke: '#2496ed' } },
  
  // Performance optimization connections (Level 3) - MEDIUM LINES
  { id: 'e-perf-caching', source: 'performance', target: 'caching', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-redis-caching', source: 'redis', target: 'caching', style: { strokeWidth: 3, stroke: '#dc382d' } },
  
  // Security & Patterns connections (Level 2) - THICK LINES
  { id: 'e-sec-encryption', source: 'security-patterns-header', target: 'encryption', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-sec-hashing', source: 'security-patterns-header', target: 'hashing', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-ssl', source: 'security-patterns-header', target: 'ssl-tls', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-patterns', source: 'security-patterns-header', target: 'design-patterns', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-sec-solid', source: 'security-patterns-header', target: 'solid-principles', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-best', source: 'security-patterns-header', target: 'best-practices', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  
  // Microservice patterns connections (Level 3) - MEDIUM LINES
  { id: 'e-sec-circuit', source: 'security-patterns-header', target: 'circuit-breaker', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-saga', source: 'security-patterns-header', target: 'saga-pattern', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-cqrs', source: 'security-patterns-header', target: 'cqrs', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-sec-event-sourcing', source: 'security-patterns-header', target: 'event-sourcing', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Cross-section connections for microservices
  { id: 'e-microservices-circuit', source: 'microservices', target: 'circuit-breaker', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-microservices-saga', source: 'microservices', target: 'saga-pattern', style: { strokeWidth: 3, stroke: '#8e44ad' } },
  { id: 'e-event-driven-sourcing', source: 'event-driven', target: 'event-sourcing', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-event-driven-cqrs', source: 'event-driven', target: 'cqrs', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Security integration with APIs
  { id: 'e-encryption-ssl', source: 'encryption', target: 'ssl-tls', style: { strokeWidth: 3, stroke: '#8e44ad' } },
];

export default function BackendRoadmap() {
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
          <h1 className="text-3xl font-bold text-[#68a063]">Senior Node.js Backend Developer Roadmap</h1>
          <p className="text-gray-600 mt-2">Complete learning path from fundamentals to production-ready senior skills</p>
        </div>
      </header>
      <div className="flex-1 w-full overflow-auto">
        <div style={{ width: '1400px', height: '1900px', minWidth: '1400px', minHeight: '1900px' }}>
          <ReactFlow 
            nodes={backendNodes} 
            edges={backendEdges} 
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
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                linear-gradient(-45deg, transparent 46%, rgba(255, 255, 255, 0.03) 50%, transparent 54%)
              `
            }}
          />
        </div>
      </div>
    </div>
  );
}
