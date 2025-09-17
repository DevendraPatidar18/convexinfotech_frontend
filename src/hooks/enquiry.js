// // src/hooks/useEnquiry.js
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { fetchEnquiries, createEnquiry } from "../api/enquiryApi.js";
// const useEnquiry = () => {
//   const queryClient = useQueryClient();

//   // Get enquiries
//   const {
//     data: enquiries,
//     isLoading,
//     isError,
//     error,
//   } = useQuery({
//     queryKey: ["enquiries"],
//     queryFn: fetchEnquiries,
//   });

//   // Create enquiry
//   const mutation = useMutation({
//     mutationFn: createEnquiry,
//     onSuccess: () => {
//       // Refresh list after new enquiry
//       queryClient.invalidateQueries(["enquiries"]);
//     },
//   });

//   return {
//     enquiries,
//     isLoading,
//     isError,
//     error,
//     createEnquiry: mutation.mutate, // function to call in components
//     creating: mutation.isLoading,
//   };
//   console.log('djdkjcbxckb');
  
// };

// export default useEnquiry;
// src/hooks/useEnquiry.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchEnquiries, createEnquiry } from "../api/enquiryApi.js";

const useEnquiry = () => {
  const queryClient = useQueryClient();

  // Get enquiries
  const {
    data: enquiries,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["enquiries"],
    queryFn: fetchEnquiries,
  });

  // Create enquiry
  const mutation = useMutation({
    mutationFn: createEnquiry,
    onSuccess: () => {
      queryClient.invalidateQueries(["enquiries"]);
    },
  });

  return {
    enquiries,
    isLoading,
    isError,
    error,
    createEnquiry: mutation.mutate,
    creating: mutation.isLoading,
  };
};

export default useEnquiry;
