export default function SectionNotes() {
  let notes = [
    // { body: "hello how are you", date: "7/5/2025" },
    // { body: "hope you're good", date: "7/5/2025" },
    // { body: "just checking in", date: "7/5/2025" },
    // { body: "don't forget this", date: "7/5/2025" },
    // { body: "meeting at 5", date: "7/5/2025" },
  ];

  const daisyThemes = [
    { bg: "bg-primary", text: "text-primary-content" },
    { bg: "bg-secondary", text: "text-secondary-content" },
    { bg: "bg-accent", text: "text-accent-content" },
    { bg: "bg-info", text: "text-info-content" },
    { bg: "bg-success", text: "text-success-content" },
    { bg: "bg-warning", text: "text-warning-content" },
    { bg: "bg-error", text: "text-error-content" },
  ];

  if (notes.length < 1) {
    return (
      <h1 className="opacity-80 w-70 text-center">
        you have created no notes.. what ya waiting for? 😪
      </h1>
    );
  }

  return (
    <section className="flex flex-wrap justify-center items-center gap-4 lg:px-100 md:px-30 px-5">
      {notes.map((note, index) => {
        const { bg, text } =
          daisyThemes[Math.floor(Math.random() * daisyThemes.length)];

        return (
          <div
            key={index}
            className={`md:w-70 w-full aspect-square p-4 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,0.2)] ${bg} ${text} flex flex-col justify-between`}
          >
            <p className="text-md">{note.body}</p>
            <small className="font-bold">Created: {note.date}</small>
          </div>
        );
      })}
    </section>
  );
}
