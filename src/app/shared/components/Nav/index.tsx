"use client";
import Link from "next/link";
import Image from "next/image";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  href: string;
  title: string;
  icon?: string;
};
export default function Nav(p: Props) {
  const { children, href, title, icon = "/static/frank.webp" } = p;
  return (
    <Link href={href} className="flex flex-col group border p-2 rounded-sm border-orange-500">
      <div className="flex items-center relative">
        <div>{title}</div>
        <div>
          <Image
            width={32}
            height={32}
            className="absolute -top-2 group-hover:rotate-12 group-hover:ml-10 group-hover:scale-125 transition-all"
            src={icon}
            alt={`${title} icon`}
          />
        </div>
      </div>
      <div>{children}</div>
    </Link>
  );
}
