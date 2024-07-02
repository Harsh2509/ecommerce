import { User, db, users } from "@repo/database";

async function getUserData() {
  return db.select().from(users);
}

export default async function Home() {
  const users = await getUserData();

  return (
    <div>
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}
