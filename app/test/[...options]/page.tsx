export default async function Page(
  { params }: { params: Promise<{ options: string[] }> }
) {
  const { options } = await params;
  return <div>{options.join(' ')}</div>;
}
