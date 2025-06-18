import { auth } from "@/auth";
import ButtonCreateNote from "@/components/ButtonCreateNote";
import SectionNotes from "@/components/SectionNotes";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    return <SectionNotSignedIn />;
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10">
      <ButtonCreateNote />
      <h1 className="text-4xl font-extrabold">
        Welcome {session?.user?.name}! 👋
      </h1>
      <SectionNotes />
    </div>
  );
}
