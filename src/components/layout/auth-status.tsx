/* eslint-disable @typescript-eslint/no-misused-promises */
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { getNameAbbreviation } from "@/utils/name-abbreviation";

export function AuthStatus() {
  const { data: session, status } = useSession();
  const nameAbbreviation = getNameAbbreviation(session?.user?.name ?? "");
  return (
    <>
      <div className="hidden lg:block">
        {status === "authenticated" && (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={session?.user?.image ?? ""} />
              <AvatarFallback>{nameAbbreviation}</AvatarFallback>
            </Avatar>
            {session?.user?.name && (
              <span className="whitespace-nowrap text-lg">
                {session?.user?.name}
              </span>
            )}
            {/* If user doesn't provide name use email */}
            {!session?.user?.name && session?.user?.email && (
              <span className="whitespace-nowrap text-lg">
                {session?.user?.email}
              </span>
            )}
          </div>
        )}
      </div>
      {status === "authenticated" && (
        <Button variant={"secondary"} onClick={() => signOut()}>
          Logout
        </Button>
      )}
      {status === "unauthenticated" && (
        <Button variant={"secondary"} onClick={() => signIn()}>
          Login
        </Button>
      )}
      {status === "loading" && (
        <Icons.spinner className="animate-spin" fill="black" />
      )}
    </>
  );
}
