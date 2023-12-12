import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>Hello GameHub gamers</p>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
