import { auth } from "@/components/authProvider/auth";
import LogOut from "@/components/LoginFrom/LogOut";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await auth();
  if (!session?.user) redirect("/profile");
  return (
    <div className="flex flex-col items-center m-4">
      <h2>USER DATA</h2>
      <h2 className="text-3xl my-3">{session?.user?.name}</h2>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full mb-3"
      ></Image>
      <LogOut></LogOut>
    </div>
  );
};

export default Profile;
