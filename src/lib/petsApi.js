import axiosInstance from "./axiosInstance";

export async function getPetsApi({ search = "", species = "", sort = "" } = {}) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (species) params.set("species", species);
  if (sort) params.set("sort", sort);
  const queryString = params.toString();
  const url = queryString ? `/api/pets?${queryString}` : "/api/pets";
  const { data } = await axiosInstance.get(url);
  return data;
}

export async function getFeaturedPetsApi() {
  const { data } = await axiosInstance.get("/api/pets/featured");
  return data;
}

export async function getPetByIdApi(id) {
  const { data } = await axiosInstance.get(`/api/pets/${id}`);
  return data;
}

export async function addPetApi(petData) {
  const { data } = await axiosInstance.post("/api/pets", petData);
  return data;
}

export async function getMyListingsApi() {
  const { data } = await axiosInstance.get("/api/pets/owner/my-listings");
  return data;
}

export async function updatePetApi(id, petData) {
  const { data } = await axiosInstance.patch(`/api/pets/${id}`, petData);
  return data;
}

export async function deletePetApi(id) {
  const { data } = await axiosInstance.delete(`/api/pets/${id}`);
  return data;
}
