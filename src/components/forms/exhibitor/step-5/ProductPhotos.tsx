/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ProductPhotos: React.FC = () => {
  return (
    <section className="flex flex-col mt-8 w-full max-md:max-w-full">
      <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <h3 className="self-stretch my-auto">Product Photos</h3>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>
      <div className="flex flex-col mt-2.5 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-6 py-px w-full text-lg leading-loose border border-solid border-stone-800 max-md:max-w-full">
          <button className="overflow-hidden gap-2.5 self-stretch px-4 py-3 font-bold text-white bg-stone-600">
            Choose File
          </button>
          <span className="flex-auto my-auto font-medium text-stone-800 text-opacity-70 w-[387px]">
            No file chosen
          </span>
        </div>
        <div className="flex flex-col items-start mt-1.5 w-full text-sm font-medium leading-7 text-center text-black max-md:max-w-full">
          <p className="max-md:max-w-full">
            Upload minimum of 3 product photos, maximum of 5 and maximum file
            size of 2MB per photo.
          </p>
          <p className="max-md:max-w-full">
            File type accepted are .jpg, .jpeg, and .png.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPhotos;
