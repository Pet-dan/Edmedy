import React, { ChangeEvent, FC, useState } from "react";
import { BsArrowRight, BsFileEarmarkArrowUpFill } from "react-icons/bs";
import { StepProps } from "../../pages/SubscriptionPlans";

const formatFileSize = (size: number) => {
  if (size < 1024) {
    return `${size} bytes`;
  } else if (size > 1024) {
    return `${(size / 1024).toFixed(1)} kb`;
  } else if (size > 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} md`;
  }
};

const Step4: FC<StepProps> = ({ increaseStep }) => {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<any>("");
  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <header className="text-darkGray text-center">
        <h1 className="text-[27px] font-bold mb-2">Organization Preference</h1>
        <p className="text-[16px] font-[500]">
          Select your organization{"'"}s preference for the application
        </p>
      </header>
      <form className="mt-8 mb-6 w-full max-w-[600px] mx-auto">
        <div className="mb-4 w-full">
          <label
            htmlFor="organization-name"
            className="text-[17px] font-bold mb-2 block cursor-pointer"
          >
            Organization name
          </label>
          <input
            type="text"
            id="organization-name"
            className="input-field"
            placeholder="E.g Jaded Future Schools"
            value={name}
            required
            onChange={updateName}
          />
        </div>
        <div className="mb-4 w-full">
          <p className="text-[17px] font-bold mb-2 block cursor-pointer">
            Organization logo
          </p>
          <>
            <label
              htmlFor="file-upload"
              className="sm:min-w-[280px] max-w-fit flex items-center gap-x-4 bg-white px-3 py-2 rounded-md"
            >
              <span className="text-[30px]">
                <BsFileEarmarkArrowUpFill />
              </span>
              {!file && (
                <div className="">
                  <p>Click here to upload</p>
                  <p>Max Size: 5mb</p>
                </div>
              )}
              {file && (
                <div className="">
                  <p>
                    {file.name.length > 24
                      ? `${file.name.slice(0, 25)}...`
                      : `${file.name}`}
                  </p>
                  <p>Size: {formatFileSize(file.size)}</p>
                </div>
              )}
            </label>
            <input
              type={"file"}
              id="file-upload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                console.log(file);
                if ((file?.size as number) < 1024 * 1024 * 5) {
                  if (
                    file?.type === "image/webp" ||
                    file?.type === "image/jpeg" ||
                    file?.type === "image/png" ||
                    file?.type === "image/jpg"
                  ) {
                    setFile(file);
                  }
                }
              }}
              required
            />
          </>
        </div>
        <button
          className="max-w-full min-w-full sm:min-w-fit sm:max-w-fit ml-auto py-3 px-6 bg-black text-mainBg rounded-md block mt-6"
          onClick={increaseStep}
        >
          Proceed{" "}
          <span className="inline-block align-middle ml-2">
            <BsArrowRight />
          </span>
        </button>
      </form>
    </>
  );
};
export default Step4;
