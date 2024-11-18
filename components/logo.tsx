import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 md:gap-x-3 hidden md:flex">
        <Image src="/logo.svg" alt="logo" height={20} width={20} />
        <p className="text-lg font-bold text-neutral-700 pb-1 mt-3">Taskify</p>
      </div>
    </Link>
  );
};
