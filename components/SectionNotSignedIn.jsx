import ButtonSignIn from "./ButtonSignIn";

export default function SectionNotSignedIn() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-5">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold">Welcome Wanderer! 👋</h1>
        <p className="opacity-80">looks like you're not signed in</p>
      </div>
      <ButtonSignIn provider="github">Sign in with Github</ButtonSignIn>
    </section>
  );
}
