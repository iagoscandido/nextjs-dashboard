import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ComputerDesktopIcon className="h-24 w-24" />
      <p className="text-[44px]">ITech</p>
    </div>
  );
}
