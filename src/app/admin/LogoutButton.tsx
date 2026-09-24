'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <button
      onClick={handleLogout}
      className="text-xs text-creme/50 hover:text-creme/80"
    >
      Sair
    </button>
  );
}