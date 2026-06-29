import Link from "next/link";

export const metadata = { title: "Dashboard | PawsNest" };

export default function DashboardPage() {
  return <div><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Dashboard</p><h1 className="text-3xl font-black text-slate-950">Welcome to your PawsNest dashboard</h1><p className="mt-3 max-w-2xl text-slate-600">Manage your pet listings, review adoption requests, and track your own adoption requests from one place.</p><div className="mt-8 grid gap-5 md:grid-cols-3"><Card href="/dashboard/add-pet" title="Add Pet" text="Create a new adoption listing." /><Card href="/dashboard/my-listings" title="My Listings" text="Update, delete, and manage pets." /><Card href="/dashboard/my-requests" title="My Requests" text="Track adoption requests you submitted." /></div></div>;
}
function Card({ href, title, text }) { return <Link href={href} className="rounded-3xl bg-orange-50 p-6 transition hover:bg-orange-100"><h3 className="text-xl font-black text-slate-950">{title}</h3><p className="mt-2 text-slate-600">{text}</p></Link>; }
