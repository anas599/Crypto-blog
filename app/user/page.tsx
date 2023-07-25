import { prisma } from '@/lib/prisma';
import Link from 'next/link';
export default async function user() {
  const allUsers = await prisma.user.findMany();
  return (
    <div>
      <Link
        className="m-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        href="/"
      >
        Home
      </Link>
      <h1 className="m-3"> This info is fetched from database</h1>
      {allUsers.map((user) => (
        <div className="m-3" key={user.id}>
          <h2>Name : {user.name}</h2>
          <h3> Email : {user.email}</h3>
        </div>
      ))}
    </div>
  );
}
