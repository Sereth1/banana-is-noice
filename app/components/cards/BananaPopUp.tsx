import React from "react";

interface Props {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  generatedLink: string;
}

export default function BananaPopUp({
  isActive,
  setIsActive,
  generatedLink,
}: Props) {
  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black bg-opacity-10 lg:p-0"
      onClick={() => setIsActive(false)}
    >
      <div
        className="bg-hightLight p-10 rounded-xl  max-w-md w-full shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        {generatedLink && (
          <div className="text-center">
            <p className="mb-2 text-2xl pb-5 font-bold text-lightBeige">
              Banana ready to be send
            </p>
            <input
              type="text"
              value={generatedLink}
              readOnly
              className="p-2 border rounded w-full"
            />
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => navigator.clipboard.writeText(generatedLink)}
                className="mt-2 p-2
                w-[100px] bg-lightBeige text-black  rounded"
              >
                Copy Link
              </button>
              <button
                onClick={() => setIsActive(false)}
                className="mt-2 p-2 w-[100px] bg-lightBeige text-black   rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
