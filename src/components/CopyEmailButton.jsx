import { useState } from "react";
import { toast } from "sonner";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "utkarshpalav17@gmail.com"

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        toast.success("Email has copied!", {
            icon: <img src='/assets/copy.svg' alt="Success" className="w-5 h-5 invert"/>
        })

        setTimeout(() => setCopied(false), 2000);
    }
  return (
    <button onClick={copyToClipboard} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
      <p className="flex items-center justify-center gap-2">
        <img src="/assets/copy.svg" alt="copy" className="w-5 h-5" />
        Copy Email Address
      </p>
    </button>
  );
};

export default CopyEmailButton;
