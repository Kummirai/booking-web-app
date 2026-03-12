import { Spinner } from "@/components/ui/spinner";

export default function SpinnerCustom() {
  return (
    <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto min-h-screen">
      <Spinner className="size-8" />
    </div>
  );
}
