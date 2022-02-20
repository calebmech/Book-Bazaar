import { PostWithBookWithUser } from "@lib/services/post";
import axios from "axios";
import { useRouter } from "next/router";
import {
  UseQueryResult,
  useQuery,
  useMutation,
  useQueryClient,
} from "react-query";

export function usePostQuery(
  postId: string | string[] | undefined
): UseQueryResult<PostWithBookWithUser> {
  return useQuery(
    "post-" + postId,
    () =>
      axios
        .get<PostWithBookWithUser>(`/api/post/${postId}/`)
        .then((res) => res.data),
    {
      enabled: !(postId == undefined || Array.isArray(postId)),
    }
  );
}

export function useDeletePostMutation(postId: string, isAccountPage?: boolean) {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation(() => axios.delete("/api/post/" + postId), {
    onSuccess: () => {
      queryClient.invalidateQueries("post-" + postId);
      router.push(isAccountPage ? "/account" : "/");
    },
  });
}

export interface EditablePostClient {
  description?: string;
  price?: number;
  image?: Blob;
}

export function useEditPostMutation(postId: string) {
  return useMutation((request: EditablePostClient) => {
    const formData = new FormData();

    if (request.description)
      formData.append("description", request.description);

    if (request.price)
      formData.append("price", request.price.toFixed(2).replace(".", ""));

    if (request.image) formData.append("image", request.image);

    return axios.put("/api/post/" + postId, formData);
  });
}
