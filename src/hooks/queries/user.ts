import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { fetchMyInfo } from "@/apis/api/user";
import { User } from "@/interfaces/user";
import { AxiosError, AxiosResponse } from "axios";

export const useFetchMyInfo = (
  options?: UseQueryOptions<
    AxiosResponse<User>,
    AxiosError,
    AxiosResponse<User>,
    ["user"]
  >
): UseQueryResult<AxiosResponse, AxiosError> =>
  useQuery(["user"], () => fetchMyInfo(), options);
