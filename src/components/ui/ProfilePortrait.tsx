import Image from "next/image";
import profilePhoto from "@/app/perfil.png";
import { site } from "@/config/site";

export default function ProfilePortrait({
  alt,
  label,
  caption,
}: {
  alt: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="profile-portrait">
      <div className="portrait-image-frame">
        <Image
          src={profilePhoto}
          alt={alt}
          fill
          sizes="(max-width: 680px) min(320px, calc(100vw - 40px)), 320px"
          placeholder="blur"
          className="portrait-image"
        />
        <div className="portrait-label" aria-hidden="true">
          <span className="status-dot" />
          {label}
        </div>
      </div>
      <figcaption className="portrait-caption">
        <div>
          <strong>{site.name}</strong>
          <span>{caption}</span>
        </div>
        <span className="portrait-star" aria-hidden="true">
          ✳
        </span>
      </figcaption>
    </figure>
  );
}
