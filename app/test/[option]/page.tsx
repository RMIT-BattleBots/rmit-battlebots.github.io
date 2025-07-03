export default async function Page(
  {params}: {params: Promise<{ option: string }>}
  ) {
  const { option } = await params
  return <div>My Post: {option}</div>
}