"use client";

import ConfirmModal from "@/components/shared/ConfirmModal";
import EmptyState from "@/components/shared/EmptyState";
import ErrorState from "@/components/shared/ErrorState";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { cancelRequestApi, getMyRequestsApi } from "@/lib/requestsApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CalendarDays, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MyRequestsClient() {
  const [cancelTarget, setCancelTarget] = useState(null);
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({ queryKey: ["my-requests"], queryFn: getMyRequestsApi });
  const cancelMutation = useMutation({ mutationFn: cancelRequestApi, onSuccess: (response) => { toast.success(response.message || "Request cancelled"); queryClient.invalidateQueries({ queryKey: ["my-requests"] }); setCancelTarget(null); }, onError: (error) => toast.error(error?.response?.data?.message || "Failed to cancel request") });
  const requests = data?.requests || [];
  return <div><div className="mb-8"><p className="mb-3 inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-700">Adoption Tracking</p><h1 className="text-3xl font-black text-slate-950">My Requests</h1><p className="mt-3 max-w-2xl text-slate-600">Track adoption requests you submitted and cancel pending or rejected requests when needed.</p></div>{isLoading && <LoadingSpinner message="Loading your requests..." />}{isError && <ErrorState title="Failed to load requests" message="Please check your server connection and login session." />}{!isLoading && !isError && requests.length === 0 && <EmptyState title="No adoption requests" message="Browse pets and submit an adoption request to see it here." />}{!isLoading && !isError && requests.length > 0 && <div className="space-y-4">{requests.map((request) => <div key={request._id} className="grid gap-4 rounded-3xl border border-orange-100 p-4 md:grid-cols-[110px_1fr_auto]"><img src={request.petImage} alt={request.petName} className="h-28 w-full rounded-2xl object-cover md:w-28" /><div><div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-black text-slate-950">{request.petName}</h3><span className={statusClass(request.status)}>{request.status}</span></div><p className="mt-3 flex items-center gap-2 text-sm font-bold text-orange-700"><CalendarDays size={16} />Pickup Date: {formatDate(request.pickupDate)}</p><p className="mt-2 text-sm text-slate-500">Request Date: {formatDate(request.createdAt)}</p><p className="mt-3 line-clamp-2 leading-6 text-slate-600">{request.message}</p></div><div className="flex flex-wrap items-center gap-2 md:flex-col md:items-stretch"><Link href={`/pets/${request.petId}`} className="flex items-center justify-center gap-2 rounded-2xl bg-green-100 px-4 py-2 text-sm font-bold text-green-700 transition hover:bg-green-200"><Eye size={16} />View</Link><button type="button" onClick={() => setCancelTarget(request)} disabled={request.status === "approved"} className="flex items-center justify-center gap-2 rounded-2xl bg-red-100 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-200 disabled:cursor-not-allowed disabled:opacity-50"><Trash2 size={16} />Cancel</button></div></div>)}</div>}<ConfirmModal open={Boolean(cancelTarget)} title="Cancel adoption request?" message={`Are you sure you want to cancel your request for ${cancelTarget?.petName || "this pet"}?`} confirmText="Cancel Request" loading={cancelMutation.isPending} onClose={() => setCancelTarget(null)} onConfirm={() => cancelMutation.mutate(cancelTarget._id)} /></div>;
}
function statusClass(status) { if (status === "approved") return "rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700"; if (status === "rejected") return "rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700"; return "rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700"; }
function formatDate(date) { if (!date) return "N/A"; return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }); }
