import fs from 'fs';
import path from 'path';

export interface Project {
  slug: string;
  title: string;
  client: string;
  type: string;
  date: string;
  description: string;
  mediaType: 'foto' | 'video';
  coverImage: string;
  gallery: string[];
  span: 'wide' | 'tall';
}

const DATA_PATH = path.join(process.cwd(), 'data', 'projects.json');

function ensureDataFile(): void {
  if (!fs.existsSync(DATA_PATH)) {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const staticData = require('../data/projects').projects;
    fs.writeFileSync(DATA_PATH, JSON.stringify(staticData, null, 2));
  }
}

export function getProjects(): Project[] {
  ensureDataFile();
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}

export function getProject(slug: string): Project | null {
  return getProjects().find((p) => p.slug === slug) ?? null;
}

export function createProject(project: Project): void {
  const projects = getProjects();
  if (projects.find((p) => p.slug === project.slug)) {
    throw new Error('Slug ja existe');
  }
  projects.push(project);
  fs.writeFileSync(DATA_PATH, JSON.stringify(projects, null, 2));
}

export function updateProject(slug: string, data: Partial<Project>): void {
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) throw new Error('Projeto nao encontrado');
  projects[idx] = { ...projects[idx], ...data };
  fs.writeFileSync(DATA_PATH, JSON.stringify(projects, null, 2));
}

export function deleteProject(slug: string): void {
  const projects = getProjects().filter((p) => p.slug !== slug);
  fs.writeFileSync(DATA_PATH, JSON.stringify(projects, null, 2));
}