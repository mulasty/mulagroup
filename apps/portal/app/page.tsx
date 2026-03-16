import { DEFAULT_LOCALE, buildLocaleRedirectPath } from "@mulagroup/utils";
import { redirect } from "next/navigation";

type RootPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Page({ searchParams }: RootPageProps) {
  redirect(buildLocaleRedirectPath(DEFAULT_LOCALE, await searchParams));
}
