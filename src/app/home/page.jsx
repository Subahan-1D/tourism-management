// import React from "react";
// import { auth } from "@/components/authProvider/auth";
// import { redirect } from "next/navigation";
// import Image from "next/image";
// const HomePage = () => {
//   const session = auth();
//   if (!session?.user) redirect("/profile");
//   return (
//     <div className="flex flex-col items-center m-4">
//         <h2>USER DATA</h2>
//       <h2 className="text-3xl my-3">{session.user?.name}</h2>
//       <Image
//         src={session.user?.image}
//         width={72}
//         height={72}
//         className="rounded-full"
//       ></Image>
//     </div>
//   );
// };

// export default HomePage;
