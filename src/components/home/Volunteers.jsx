export default function Volunteers() {
  const volunteers = [
    { name: "Nadia Rahman", role: "Shelter Coordinator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
    { name: "Arif Hasan", role: "Pet Care Volunteer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
    { name: "Sadia Karim", role: "Adoption Advisor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
  ];
  return <section className="section-padding bg-white"><div className="container-custom"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Meet Our Volunteers</p><h2 className="text-3xl font-black text-slate-950 md:text-5xl">People behind every adoption</h2><p className="mt-4 text-slate-600">Our volunteers help shelters, owners, and adopters make responsible decisions.</p></div><div className="mt-10 grid gap-6 md:grid-cols-3">{volunteers.map((person) => <div key={person.name} className="rounded-3xl bg-orange-50 p-6 text-center"><img src={person.image} alt={person.name} className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-white" /><h3 className="mt-5 text-xl font-black text-slate-950">{person.name}</h3><p className="mt-1 font-semibold text-orange-700">{person.role}</p></div>)}</div></div></section>;
}
