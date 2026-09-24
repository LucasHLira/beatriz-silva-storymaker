import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Beatriz Silva â€” Storymaker',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-preto text-creme">
      {children}
    </div>
  );
}