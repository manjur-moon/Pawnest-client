import axiosInstance from "./axiosInstance";

export async function createAdoptionRequestApi(requestData) {
  const { data } = await axiosInstance.post("/api/requests", requestData);
  return data;
}

export async function getMyRequestsApi() {
  const { data } = await axiosInstance.get("/api/requests/my-requests");
  return data;
}

export async function cancelRequestApi(id) {
  const { data } = await axiosInstance.delete(`/api/requests/${id}`);
  return data;
}

export async function getPetRequestsApi(petId) {
  const { data } = await axiosInstance.get(`/api/requests/pet/${petId}`);
  return data;
}

export async function approveRequestApi(id) {
  const { data } = await axiosInstance.patch(`/api/requests/${id}/approve`);
  return data;
}

export async function rejectRequestApi(id) {
  const { data } = await axiosInstance.patch(`/api/requests/${id}/reject`);
  return data;
}
