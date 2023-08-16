import Link from 'next/link';

const revalidate = 0;

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = res.json();
  return data;
}

export default async function About() {
  const data = await fetchData();
  return (
    <main>
      <Link href={'/'}>Navigate</Link>
      {data.map((todo: any) => (
        <h3>{todo.title}</h3>
      ))}
    </main>
  );
}
