import { NextRequest, NextResponse } from 'next/server';
import { getProjects, createProject } from '@/lib/projectsStore';

export async function GET() {
  return NextResponse.json(getProjects());
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    createProject(data);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}