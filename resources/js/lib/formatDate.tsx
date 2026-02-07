export function formatDate(date: string | Date): string {
  const d = new Date(date)

  return d.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}