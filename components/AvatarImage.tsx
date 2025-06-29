"use client"
import { useSession } from "next-auth/react";

import Image from "next/image";
import React from "react";

const AvatarImage = () => {
  const { data: session } = useSession();
  
  if (session) {
    return (
      <div>
        <div>
          <Image
            className="rounded-full"
            src={session.user?.image ?? ""}
            alt="image"
            width={40}
            height={4}
          />
        </div>
      </div>
    );
  }


};

export default AvatarImage;
