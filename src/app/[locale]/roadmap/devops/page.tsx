'use client';

import { ReactFlow } from '@xyflow/react';
import Link from 'next/link';

import '@xyflow/react/dist/style.css';

const devopsNodes = [
  // Main DevOps - Centered and prominent
  { id: 'devops-main', position: { x: 650, y: 40 }, data: { label: 'Senior DevOps Engineer', url: 'https://roadmap.sh/devops' }, style: { background: 'linear-gradient(135deg, #96ceb4, #85c1a5)', color: 'white', fontWeight: 'bold', fontSize: '20px', padding: '15px 30px', borderRadius: '15px', border: '3px solid white', boxShadow: '0 6px 20px rgba(0,0,0,0.3)' } },
  
  // STEP 1: FUNDAMENTALS - Essential foundation
  { id: 'fundamentals-header', position: { x: 150, y: 140 }, data: { label: '1️⃣ FUNDAMENTALS' }, style: { background: 'linear-gradient(135deg, #2c3e50, #34495e)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 250, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Core System Administration
  { id: 'linux', position: { x: 50, y: 210 }, data: { label: 'Linux Administration', url: 'https://www.linux.org/pages/download/' }, style: { background: 'linear-gradient(135deg, #fcc468, #f7b42c)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'networking', position: { x: 200, y: 190 }, data: { label: 'Networking & TCP/IP', url: 'https://www.cloudflare.com/learning/network-layer/internet-protocol/' }, style: { background: 'linear-gradient(135deg, #4ecdc4, #44a08d)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'security', position: { x: 350, y: 210 }, data: { label: 'Security Basics', url: 'https://owasp.org/www-project-top-ten/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Scripting & Automation
  { id: 'bash', position: { x: 80, y: 270 }, data: { label: 'Bash Scripting', url: 'https://www.gnu.org/software/bash/' }, style: { background: 'linear-gradient(135deg, #95a5a6, #7f8c8d)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'python-devops', position: { x: 230, y: 270 }, data: { label: 'Python for DevOps', url: 'https://www.python.org/' }, style: { background: 'linear-gradient(135deg, #3776ab, #2d5aa0)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'powershell', position: { x: 380, y: 270 }, data: { label: 'PowerShell', url: 'https://docs.microsoft.com/en-us/powershell/' }, style: { background: 'linear-gradient(135deg, #012456, #001a3e)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 1
  { id: 'arrow-1', position: { x: 640, y: 370 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 2: CONTAINERIZATION & ORCHESTRATION
  { id: 'containers-header', position: { x: 500, y: 420 }, data: { label: '2️⃣ CONTAINERS & ORCHESTRATION' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 350, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Container Technologies
  { id: 'docker', position: { x: 100, y: 500 }, data: { label: 'Docker', url: 'https://www.docker.com/' }, style: { background: 'linear-gradient(135deg, #2496ed, #1976d2)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'docker-compose', position: { x: 280, y: 480 }, data: { label: 'Docker Compose', url: 'https://docs.docker.com/compose/' }, style: { background: 'linear-gradient(135deg, #0db7ed, #0995c7)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'podman', position: { x: 450, y: 500 }, data: { label: 'Podman', url: 'https://podman.io/' }, style: { background: 'linear-gradient(135deg, #892ca0, #7a2590)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Orchestration Platforms
  { id: 'kubernetes', position: { x: 620, y: 480 }, data: { label: 'Kubernetes', url: 'https://kubernetes.io/' }, style: { background: 'linear-gradient(135deg, #326ce5, #2456c7)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'helm', position: { x: 780, y: 500 }, data: { label: 'Helm', url: 'https://helm.sh/' }, style: { background: 'linear-gradient(135deg, #0f1689, #0c1362)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'openshift', position: { x: 920, y: 480 }, data: { label: 'OpenShift', url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift' }, style: { background: 'linear-gradient(135deg, #ee0000, #cc0000)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Container Security & Best Practices
  { id: 'container-security', position: { x: 200, y: 560 }, data: { label: 'Container Security', url: 'https://kubernetes.io/docs/concepts/security/' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'service-mesh', position: { x: 380, y: 560 }, data: { label: 'Service Mesh (Istio)', url: 'https://istio.io/' }, style: { background: 'linear-gradient(135deg, #466bb0, #3c5d9e)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'k8s-operators', position: { x: 560, y: 560 }, data: { label: 'K8s Operators', url: 'https://operatorhub.io/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 2
  { id: 'arrow-2', position: { x: 640, y: 620 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 3: CI/CD & AUTOMATION
  { id: 'cicd-header', position: { x: 500, y: 670 }, data: { label: '3️⃣ CI/CD & AUTOMATION' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 290, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // CI/CD Platforms
  { id: 'jenkins', position: { x: 100, y: 750 }, data: { label: 'Jenkins', url: 'https://www.jenkins.io/' }, style: { background: 'linear-gradient(135deg, #d33833, #b73127)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'github-actions', position: { x: 250, y: 730 }, data: { label: 'GitHub Actions', url: 'https://github.com/features/actions' }, style: { background: 'linear-gradient(135deg, #2188ff, #0969da)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'gitlab-ci', position: { x: 400, y: 750 }, data: { label: 'GitLab CI', url: 'https://docs.gitlab.com/ee/ci/' }, style: { background: 'linear-gradient(135deg, #fc6d26, #e24329)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'azure-devops', position: { x: 550, y: 730 }, data: { label: 'Azure DevOps', url: 'https://azure.microsoft.com/en-us/services/devops/' }, style: { background: 'linear-gradient(135deg, #0078d4, #005a9e)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Automation Tools
  { id: 'ansible', position: { x: 700, y: 750 }, data: { label: 'Ansible', url: 'https://www.ansible.com/' }, style: { background: 'linear-gradient(135deg, #ee0000, #cc0000)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'puppet', position: { x: 850, y: 730 }, data: { label: 'Puppet', url: 'https://puppet.com/' }, style: { background: 'linear-gradient(135deg, #ffae1a, #ff9500)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'chef', position: { x: 950, y: 750 }, data: { label: 'Chef', url: 'https://www.chef.io/' }, style: { background: 'linear-gradient(135deg, #f09820, #e8890b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Version Control & GitOps
  { id: 'git-advanced', position: { x: 150, y: 810 }, data: { label: 'Advanced Git', url: 'https://git-scm.com/' }, style: { background: 'linear-gradient(135deg, #f14e32, #e73c24)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'gitops', position: { x: 320, y: 810 }, data: { label: 'GitOps (ArgoCD)', url: 'https://argo-cd.readthedocs.io/' }, style: { background: 'linear-gradient(135deg, #ef7b4d, #e85d2c)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'flux', position: { x: 480, y: 810 }, data: { label: 'Flux', url: 'https://fluxcd.io/' }, style: { background: 'linear-gradient(135deg, #326ce5, #2456c7)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 3
  { id: 'arrow-3', position: { x: 640, y: 870 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 4: CLOUD PLATFORMS & SERVICES
  { id: 'cloud-header', position: { x: 450, y: 920 }, data: { label: '4️⃣ CLOUD PLATFORMS & SERVICES' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 350, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Major Cloud Providers
  { id: 'aws', position: { x: 100, y: 1000 }, data: { label: 'AWS', url: 'https://aws.amazon.com/' }, style: { background: 'linear-gradient(135deg, #ff9900, #e68900)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'azure', position: { x: 250, y: 980 }, data: { label: 'Microsoft Azure', url: 'https://azure.microsoft.com/' }, style: { background: 'linear-gradient(135deg, #0078d4, #005a9e)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'gcp', position: { x: 400, y: 1000 }, data: { label: 'Google Cloud', url: 'https://cloud.google.com/' }, style: { background: 'linear-gradient(135deg, #4285f4, #3367d6)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  
  // Infrastructure as Code
  { id: 'terraform', position: { x: 580, y: 980 }, data: { label: 'Terraform', url: 'https://www.terraform.io/' }, style: { background: 'linear-gradient(135deg, #623ce4, #5629c7)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'cloudformation', position: { x: 730, y: 1000 }, data: { label: 'CloudFormation', url: 'https://aws.amazon.com/cloudformation/' }, style: { background: 'linear-gradient(135deg, #ff9900, #e68900)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'pulumi', position: { x: 880, y: 980 }, data: { label: 'Pulumi', url: 'https://www.pulumi.com/' }, style: { background: 'linear-gradient(135deg, #8a3ffc, #7a35e6)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Cloud Native Services
  { id: 'serverless', position: { x: 200, y: 1060 }, data: { label: 'Serverless (Lambda)', url: 'https://aws.amazon.com/lambda/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'api-gateway', position: { x: 380, y: 1060 }, data: { label: 'API Gateway', url: 'https://aws.amazon.com/api-gateway/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'cdn', position: { x: 520, y: 1060 }, data: { label: 'CDN & Edge', url: 'https://aws.amazon.com/cloudfront/' }, style: { background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'load-balancers', position: { x: 660, y: 1060 }, data: { label: 'Load Balancers', url: 'https://aws.amazon.com/elasticloadbalancing/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 4
  { id: 'arrow-4', position: { x: 640, y: 1140 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 5: MONITORING & OBSERVABILITY
  { id: 'monitoring-header', position: { x: 500, y: 1190 }, data: { label: '5️⃣ MONITORING & OBSERVABILITY' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 350, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Monitoring & Metrics
  { id: 'prometheus', position: { x: 100, y: 1270 }, data: { label: 'Prometheus', url: 'https://prometheus.io/' }, style: { background: 'linear-gradient(135deg, #e6522c, #d1431f)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'grafana', position: { x: 250, y: 1250 }, data: { label: 'Grafana', url: 'https://grafana.com/' }, style: { background: 'linear-gradient(135deg, #f46800, #e25a00)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'datadog', position: { x: 400, y: 1270 }, data: { label: 'Datadog', url: 'https://www.datadoghq.com/' }, style: { background: 'linear-gradient(135deg, #632ca6, #5626a0)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'newrelic', position: { x: 550, y: 1250 }, data: { label: 'New Relic', url: 'https://newrelic.com/' }, style: { background: 'linear-gradient(135deg, #008c99, #007c89)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Logging & Tracing
  { id: 'elk-stack', position: { x: 700, y: 1270 }, data: { label: 'ELK Stack', url: 'https://www.elastic.co/elastic-stack/' }, style: { background: 'linear-gradient(135deg, #005571, #004459)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'jaeger', position: { x: 850, y: 1250 }, data: { label: 'Jaeger Tracing', url: 'https://www.jaegertracing.io/' }, style: { background: 'linear-gradient(135deg, #60b2b5, #519fa2)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'fluentd', position: { x: 950, y: 1270 }, data: { label: 'Fluentd', url: 'https://www.fluentd.org/' }, style: { background: 'linear-gradient(135deg, #0f5c9a, #0d4d80)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Advanced Observability
  { id: 'opentelemetry', position: { x: 200, y: 1330 }, data: { label: 'OpenTelemetry', url: 'https://opentelemetry.io/' }, style: { background: 'linear-gradient(135deg, #f5a623, #e8890b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'sli-slo', position: { x: 380, y: 1330 }, data: { label: 'SLI/SLO/SLA', url: 'https://sre.google/sre-book/service-level-objectives/' }, style: { background: 'linear-gradient(135deg, #8e44ad, #7d3c98)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'chaos-engineering', position: { x: 520, y: 1330 }, data: { label: 'Chaos Engineering', url: 'https://principlesofchaos.org/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 5
  { id: 'arrow-5', position: { x: 640, y: 1410 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 6: SECURITY & COMPLIANCE
  { id: 'security-header', position: { x: 450, y: 1460 }, data: { label: '6️⃣ SECURITY & COMPLIANCE' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 320, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Security Tools & Practices
  { id: 'vault', position: { x: 100, y: 1540 }, data: { label: 'HashiCorp Vault', url: 'https://www.vaultproject.io/' }, style: { background: 'linear-gradient(135deg, #000000, #1a1a1a)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'secrets-management', position: { x: 280, y: 1520 }, data: { label: 'Secrets Management', url: 'https://kubernetes.io/docs/concepts/configuration/secret/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'rbac', position: { x: 450, y: 1540 }, data: { label: 'RBAC & IAM', url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Security Scanning & Compliance
  { id: 'vulnerability-scanning', position: { x: 620, y: 1520 }, data: { label: 'Vulnerability Scanning', url: 'https://owasp.org/www-community/Vulnerability_Scanning_Tools' }, style: { background: 'linear-gradient(135deg, #e67e22, #d35400)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'compliance', position: { x: 820, y: 1540 }, data: { label: 'Compliance (SOC2, ISO)', url: 'https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome.html' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'policy-as-code', position: { x: 950, y: 1520 }, data: { label: 'Policy as Code (OPA)', url: 'https://www.openpolicyagent.org/' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Network & Infrastructure Security
  { id: 'zero-trust', position: { x: 200, y: 1600 }, data: { label: 'Zero Trust Architecture', url: 'https://www.nist.gov/publications/zero-trust-architecture' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'network-security', position: { x: 420, y: 1600 }, data: { label: 'Network Security', url: 'https://www.cloudflare.com/learning/security/what-is-network-security/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'encryption', position: { x: 600, y: 1600 }, data: { label: 'Encryption & TLS', url: 'https://www.ssl.com/faqs/what-is-ssl/' }, style: { background: 'linear-gradient(135deg, #34495e, #2c3e50)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Timeline Arrow 6
  { id: 'arrow-6', position: { x: 640, y: 1680 }, data: { label: '⬇️' }, style: { background: 'transparent', border: 'none', fontSize: '32px', filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' } },
  
  // STEP 7: ADVANCED TOPICS & LEADERSHIP
  { id: 'advanced-header', position: { x: 450, y: 1730 }, data: { label: '7️⃣ ADVANCED & LEADERSHIP' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', fontWeight: 'bold', fontSize: '15px', width: 320, padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' } },
  
  // Site Reliability Engineering
  { id: 'sre', position: { x: 100, y: 1810 }, data: { label: 'Site Reliability Engineering', url: 'https://sre.google/' }, style: { background: 'linear-gradient(135deg, #4285f4, #3367d6)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'incident-response', position: { x: 320, y: 1790 }, data: { label: 'Incident Response', url: 'https://www.pagerduty.com/resources/learn/what-is-incident-response/' }, style: { background: 'linear-gradient(135deg, #e74c3c, #c0392b)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'capacity-planning', position: { x: 500, y: 1810 }, data: { label: 'Capacity Planning', url: 'https://sre.google/sre-book/software-engineering-in-sre/' }, style: { background: 'linear-gradient(135deg, #16a085, #138d75)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Platform Engineering
  { id: 'platform-engineering', position: { x: 680, y: 1790 }, data: { label: 'Platform Engineering', url: 'https://platformengineering.org/' }, style: { background: 'linear-gradient(135deg, #9b59b6, #8e44ad)', color: 'white', fontWeight: 'bold', borderRadius: '8px', padding: '8px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' } },
  { id: 'developer-experience', position: { x: 880, y: 1810 }, data: { label: 'Developer Experience', url: 'https://dx.gitlabcommunity.com/' }, style: { background: 'linear-gradient(135deg, #f39c12, #e67e22)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Leadership & Culture
  { id: 'devops-culture', position: { x: 200, y: 1870 }, data: { label: 'DevOps Culture & Leadership', url: 'https://www.atlassian.com/devops/what-is-devops/devops-culture' }, style: { background: 'linear-gradient(135deg, #27ae60, #219a52)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'team-topologies', position: { x: 420, y: 1870 }, data: { label: 'Team Topologies', url: 'https://teamtopologies.com/' }, style: { background: 'linear-gradient(135deg, #3498db, #2980b9)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  { id: 'cost-optimization', position: { x: 600, y: 1870 }, data: { label: 'Cost Optimization', url: 'https://aws.amazon.com/aws-cost-management/' }, style: { background: 'linear-gradient(135deg, #2ecc71, #27ae60)', color: 'white', borderRadius: '6px', padding: '6px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' } },
  
  // Senior Best Practices
  { id: 'senior-best-practices', position: { x: 400, y: 1950 }, data: { label: 'Senior DevOps Best Practices', url: 'https://12factor.net/' }, style: { background: 'linear-gradient(135deg, #96ceb4, #85c1a5)', color: 'white', fontWeight: 'bold', fontSize: '14px', borderRadius: '8px', padding: '10px 20px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', border: '2px solid rgba(255,255,255,0.3)' } },
];

const devopsEdges = [
  // Main connections from devops-main (Level 1) - THICKEST LINES
  { id: 'e-main-fundamentals', source: 'devops-main', target: 'fundamentals-header', style: { strokeWidth: 6, stroke: '#96ceb4' } },
  
  // Section progression arrows (Level 1) - THICKEST LINES  
  { id: 'e-fund-to-containers', source: 'fundamentals-header', target: 'containers-header', style: { strokeWidth: 6, stroke: '#34495e' } },
  { id: 'e-containers-to-cicd', source: 'containers-header', target: 'cicd-header', style: { strokeWidth: 6, stroke: '#3498db' } },
  { id: 'e-cicd-to-cloud', source: 'cicd-header', target: 'cloud-header', style: { strokeWidth: 6, stroke: '#e67e22' } },
  { id: 'e-cloud-to-monitoring', source: 'cloud-header', target: 'monitoring-header', style: { strokeWidth: 6, stroke: '#16a085' } },
  { id: 'e-monitoring-to-security', source: 'monitoring-header', target: 'security-header', style: { strokeWidth: 6, stroke: '#27ae60' } },
  { id: 'e-security-to-advanced', source: 'security-header', target: 'advanced-header', style: { strokeWidth: 6, stroke: '#e74c3c' } },
  
  // Fundamentals connections (Level 2) - THICK LINES
  { id: 'e-fund-linux', source: 'fundamentals-header', target: 'linux', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-networking', source: 'fundamentals-header', target: 'networking', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-security', source: 'fundamentals-header', target: 'security', style: { strokeWidth: 4, stroke: '#34495e' } },
  { id: 'e-fund-bash', source: 'fundamentals-header', target: 'bash', style: { strokeWidth: 3, stroke: '#34495e' } },
  { id: 'e-fund-python', source: 'fundamentals-header', target: 'python-devops', style: { strokeWidth: 3, stroke: '#34495e' } },
  { id: 'e-fund-powershell', source: 'fundamentals-header', target: 'powershell', style: { strokeWidth: 3, stroke: '#34495e' } },
  
  // Container connections (Level 2) - THICK LINES
  { id: 'e-containers-docker', source: 'containers-header', target: 'docker', style: { strokeWidth: 4, stroke: '#3498db' } },
  { id: 'e-containers-compose', source: 'containers-header', target: 'docker-compose', style: { strokeWidth: 3, stroke: '#3498db' } },
  { id: 'e-containers-podman', source: 'containers-header', target: 'podman', style: { strokeWidth: 3, stroke: '#3498db' } },
  { id: 'e-containers-k8s', source: 'containers-header', target: 'kubernetes', style: { strokeWidth: 4, stroke: '#3498db' } },
  { id: 'e-containers-helm', source: 'containers-header', target: 'helm', style: { strokeWidth: 3, stroke: '#3498db' } },
  { id: 'e-containers-openshift', source: 'containers-header', target: 'openshift', style: { strokeWidth: 3, stroke: '#3498db' } },
  
  // Container advanced connections (Level 3) - MEDIUM LINES
  { id: 'e-containers-security', source: 'containers-header', target: 'container-security', style: { strokeWidth: 3, stroke: '#3498db' } },
  { id: 'e-containers-mesh', source: 'containers-header', target: 'service-mesh', style: { strokeWidth: 3, stroke: '#3498db' } },
  { id: 'e-containers-operators', source: 'containers-header', target: 'k8s-operators', style: { strokeWidth: 3, stroke: '#3498db' } },
  
  // Docker to Kubernetes progression
  { id: 'e-docker-k8s', source: 'docker', target: 'kubernetes', style: { strokeWidth: 3, stroke: '#2496ed' } },
  { id: 'e-k8s-helm', source: 'kubernetes', target: 'helm', style: { strokeWidth: 2, stroke: '#326ce5' } },
  
  // CI/CD connections (Level 2) - THICK LINES
  { id: 'e-cicd-jenkins', source: 'cicd-header', target: 'jenkins', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-cicd-github', source: 'cicd-header', target: 'github-actions', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-cicd-gitlab', source: 'cicd-header', target: 'gitlab-ci', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-cicd-azure', source: 'cicd-header', target: 'azure-devops', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-cicd-ansible', source: 'cicd-header', target: 'ansible', style: { strokeWidth: 4, stroke: '#e67e22' } },
  { id: 'e-cicd-puppet', source: 'cicd-header', target: 'puppet', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-cicd-chef', source: 'cicd-header', target: 'chef', style: { strokeWidth: 3, stroke: '#e67e22' } },
  
  // GitOps connections (Level 3) - MEDIUM LINES
  { id: 'e-cicd-git', source: 'cicd-header', target: 'git-advanced', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-cicd-gitops', source: 'cicd-header', target: 'gitops', style: { strokeWidth: 3, stroke: '#e67e22' } },
  { id: 'e-cicd-flux', source: 'cicd-header', target: 'flux', style: { strokeWidth: 3, stroke: '#e67e22' } },
  
  // Cloud connections (Level 2) - THICK LINES
  { id: 'e-cloud-aws', source: 'cloud-header', target: 'aws', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-cloud-azure', source: 'cloud-header', target: 'azure', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-cloud-gcp', source: 'cloud-header', target: 'gcp', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-cloud-terraform', source: 'cloud-header', target: 'terraform', style: { strokeWidth: 4, stroke: '#16a085' } },
  { id: 'e-cloud-cloudformation', source: 'cloud-header', target: 'cloudformation', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-cloud-pulumi', source: 'cloud-header', target: 'pulumi', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // Cloud services connections (Level 3) - MEDIUM LINES
  { id: 'e-cloud-serverless', source: 'cloud-header', target: 'serverless', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-cloud-api-gateway', source: 'cloud-header', target: 'api-gateway', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-cloud-cdn', source: 'cloud-header', target: 'cdn', style: { strokeWidth: 3, stroke: '#16a085' } },
  { id: 'e-cloud-lb', source: 'cloud-header', target: 'load-balancers', style: { strokeWidth: 3, stroke: '#16a085' } },
  
  // Monitoring connections (Level 2) - THICK LINES
  { id: 'e-monitoring-prometheus', source: 'monitoring-header', target: 'prometheus', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-monitoring-grafana', source: 'monitoring-header', target: 'grafana', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-monitoring-datadog', source: 'monitoring-header', target: 'datadog', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-monitoring-newrelic', source: 'monitoring-header', target: 'newrelic', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-monitoring-elk', source: 'monitoring-header', target: 'elk-stack', style: { strokeWidth: 4, stroke: '#27ae60' } },
  { id: 'e-monitoring-jaeger', source: 'monitoring-header', target: 'jaeger', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-monitoring-fluentd', source: 'monitoring-header', target: 'fluentd', style: { strokeWidth: 3, stroke: '#27ae60' } },
  
  // Advanced observability connections (Level 3) - MEDIUM LINES
  { id: 'e-monitoring-otel', source: 'monitoring-header', target: 'opentelemetry', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-monitoring-sli', source: 'monitoring-header', target: 'sli-slo', style: { strokeWidth: 3, stroke: '#27ae60' } },
  { id: 'e-monitoring-chaos', source: 'monitoring-header', target: 'chaos-engineering', style: { strokeWidth: 3, stroke: '#27ae60' } },
  
  // Prometheus to Grafana connection
  { id: 'e-prometheus-grafana', source: 'prometheus', target: 'grafana', style: { strokeWidth: 3, stroke: '#e6522c' } },
  
  // Security connections (Level 2) - THICK LINES
  { id: 'e-security-vault', source: 'security-header', target: 'vault', style: { strokeWidth: 4, stroke: '#e74c3c' } },
  { id: 'e-security-secrets', source: 'security-header', target: 'secrets-management', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-rbac', source: 'security-header', target: 'rbac', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-vuln', source: 'security-header', target: 'vulnerability-scanning', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-compliance', source: 'security-header', target: 'compliance', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-policy', source: 'security-header', target: 'policy-as-code', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Advanced security connections (Level 3) - MEDIUM LINES
  { id: 'e-security-zero-trust', source: 'security-header', target: 'zero-trust', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-network', source: 'security-header', target: 'network-security', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  { id: 'e-security-encryption', source: 'security-header', target: 'encryption', style: { strokeWidth: 3, stroke: '#e74c3c' } },
  
  // Advanced connections (Level 2) - THICK LINES
  { id: 'e-advanced-sre', source: 'advanced-header', target: 'sre', style: { strokeWidth: 4, stroke: '#f39c12' } },
  { id: 'e-advanced-incident', source: 'advanced-header', target: 'incident-response', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-advanced-capacity', source: 'advanced-header', target: 'capacity-planning', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-advanced-platform', source: 'advanced-header', target: 'platform-engineering', style: { strokeWidth: 4, stroke: '#f39c12' } },
  { id: 'e-advanced-dx', source: 'advanced-header', target: 'developer-experience', style: { strokeWidth: 3, stroke: '#f39c12' } },
  
  // Leadership & culture connections (Level 3) - MEDIUM LINES
  { id: 'e-advanced-culture', source: 'advanced-header', target: 'devops-culture', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-advanced-topologies', source: 'advanced-header', target: 'team-topologies', style: { strokeWidth: 3, stroke: '#f39c12' } },
  { id: 'e-advanced-cost', source: 'advanced-header', target: 'cost-optimization', style: { strokeWidth: 3, stroke: '#f39c12' } },
  
  // Senior best practices connection (Level 1) - THICKEST LINE
  { id: 'e-advanced-best', source: 'advanced-header', target: 'senior-best-practices', style: { strokeWidth: 6, stroke: '#f39c12' } },
  
  // Cross-section integrations
  { id: 'e-k8s-monitoring', source: 'kubernetes', target: 'prometheus', style: { strokeWidth: 2, stroke: '#326ce5' } },
  { id: 'e-terraform-aws', source: 'terraform', target: 'aws', style: { strokeWidth: 2, stroke: '#623ce4' } },
  { id: 'e-ansible-security', source: 'ansible', target: 'vault', style: { strokeWidth: 2, stroke: '#ee0000' } },
  { id: 'e-docker-security', source: 'docker', target: 'container-security', style: { strokeWidth: 2, stroke: '#2496ed' } },
  { id: 'e-gitops-k8s', source: 'gitops', target: 'kubernetes', style: { strokeWidth: 2, stroke: '#ef7b4d' } },
];

export default function DevOpsRoadmap() {
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
          <h1 className="text-3xl font-bold text-[#96ceb4]">Senior DevOps Engineer Roadmap</h1>
          <p className="text-gray-600 mt-2">Complete learning path from fundamentals to production-ready senior skills</p>
        </div>
      </header>
      <div className="flex-1 w-full overflow-auto">
        <div style={{ width: '1400px', height: '2100px', minWidth: '1400px', minHeight: '2100px' }}>
          <ReactFlow 
            nodes={devopsNodes} 
            edges={devopsEdges} 
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
              background: 'linear-gradient(135deg, #96ceb4 0%, #85c1a5 100%)',
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(150, 206, 180, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(150, 206, 180, 0.1) 0%, transparent 50%),
                linear-gradient(-45deg, transparent 46%, rgba(255, 255, 255, 0.03) 50%, transparent 54%)
              `
            }}
          />
        </div>
      </div>
    </div>
  );
}
