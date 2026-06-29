export default function SuccessStories() {
  const stories = [
    { name: "Milo found a home", text: "Milo was shy at first, but his new family gave him patience and care. Today he enjoys morning walks and cozy evenings.", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8" },
    { name: "Luna met her best friend", text: "Luna, a rescued cat, now lives with a student who needed a calm companion during busy study days.", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" },
    { name: "Rio joined a caring family", text: "Rio the rabbit now has a safe indoor space, regular care, and children who adore him.", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308" },
  ];
  return (
    <section className="section-padding bg-white"><div className="container-custom"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Success Stories</p><h2 className="text-3xl font-black text-slate-950 md:text-5xl">Happy homes, happy pets</h2></div><div className="mt-10 grid gap-6 md:grid-cols-3">{stories.map((story) => <div key={story.name} className="overflow-hidden rounded-3xl bg-orange-50"><img src={story.image} alt={story.name} className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-black text-slate-950">{story.name}</h3><p className="mt-3 leading-7 text-slate-600">{story.text}</p></div></div>)}</div></div></section>
  );
}
