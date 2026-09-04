import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function NavbarAuth() {
  const session = await auth();

  return (
    <div className="flex items-center gap-5 text-black">
      {session && session.user ? (
        <>
          <Link href="/startup/create">
            <span className="max-sm:hidden">Create</span>
            <BadgePlus className="size-6 sm:hidden" />
          </Link>

          <form
            action={async () => {
              "use server";

              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit">
              <span className="max-sm:hidden">Logout</span>
              <LogOut className="size-6 sm:hidden text-red-500" />
            </button>
          </form>

          <Link href={`/user/${session.id}`}>
            <Avatar className="size-10">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </Link>
        </>
      ) : (
        <form
          action={async () => {
            "use server";

            await signIn("github");
          }}
        >
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
