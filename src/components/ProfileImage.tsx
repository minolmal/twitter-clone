import Image from "next/image";
import React from "react";
import { VscAccount } from "react-icons/vsc";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, className = "" }) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? (
        <VscAccount className="h-full w-full" />
      ) : (
        <Image src={src} alt="Profile Image" quality={80} fill />
      )}
    </div>
  );
};

export default ProfileImage;
