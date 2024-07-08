"use client";
import router, { useRouter } from "next/navigation";
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  startTransition,
  useTransition,
} from "react";
import { Input } from "../input";
import { Spinner } from "../spinner";
import style from "./index.module.css";
interface Props {
  /** Defaults to "q" */
  queryParamName?: string;
}

/** Implements a search input compatible with server-side
 * components by using `next/router` to update the URL query
 */
export function SearchParamInput({
  queryParamName = "q",
  ...props
}: Props &
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function searchAction(formData: FormData) {
    let value = formData.get(queryParamName) as string;
    let params = new URLSearchParams({ [queryParamName]: value });
    startTransition(() => {
      router.replace(`/?${params.toString()}`);
    });
  }

  return (
    <form
      {...props}
      action={searchAction}
      className={`${style.form} ${props.className}`}
    >
      <Input name={queryParamName} type="search" placeholder="Search..." />
      {isPending && <Spinner />}
    </form>
  );
}
