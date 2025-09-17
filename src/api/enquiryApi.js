import axios from "axios";


const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

// Fetch enquiries
export const fetchEnquiries = async () => {
  const res = await API.get("/api/v1/enquiries");
  return res.data;
};

// Submit new enquiry
export const createEnquiry = async (enquiryData) => {
    console.log("dsfnbdsmzxcnzx");
    
  const res = await API.post("/api/v1/enquiries/createEnquiry", enquiryData);
  return res.data;
};
