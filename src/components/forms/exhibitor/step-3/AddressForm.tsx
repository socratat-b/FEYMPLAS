/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface AddressFormProps {
  title: string;
}

const AddressForm: React.FC<AddressFormProps> = ({ title }) => {
  return (
    <form className="flex flex-col mt-8 w-full text-lg font-medium text-stone-800 text-opacity-70 max-md:max-w-full">
      <div className="flex overflow-hidden gap-4 items-center self-start text-xl font-bold text-stone-800">
        <h3 className="self-stretch my-auto">{title}</h3>
        <div className="flex shrink-0 self-stretch my-auto h-0.5 bg-stone-800 w-[73px]" />
      </div>
      {title === "Factory Address" && (
        <div className="flex flex-wrap gap-4 items-center mt-2.5 w-full text-sm leading-loose max-w-[555px] text-zinc-600 max-md:max-w-full">
          <label className="flex grow shrink gap-4 items-center self-stretch my-auto min-w-[240px] w-[216px]">
            <input
              type="checkbox"
              className="w-5 h-5 border border-solid bg-stone-100 border-zinc-600"
            />
            <span className="self-stretch my-auto w-[497px] max-md:max-w-full">
              Same as office address
            </span>
          </label>
          <label className="flex grow shrink gap-4 items-center self-stretch my-auto min-w-[240px] w-[216px]">
            <input
              type="checkbox"
              className="w-5 h-5 border border-solid bg-stone-100 border-zinc-600"
            />
            <span className="self-stretch my-auto w-[235px]">
              No factory address
            </span>
          </label>
        </div>
      )}
      <div className="flex flex-col mt-2.5 max-w-full leading-loose whitespace-nowrap w-[555px]">
        <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full bg-transparent"
            >
              <option value="">Country</option>
            </select>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3280131ff66335a1b935998099a98140ebb3bf335247a24a9ac8bb15822b6144?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-2.5 leading-loose whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 justify-between items-center">
                <label htmlFor="region" className="sr-only">
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  className="w-full bg-transparent"
                >
                  <option value="">Region</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3280131ff66335a1b935998099a98140ebb3bf335247a24a9ac8bb15822b6144?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 items-center">
                <label htmlFor="province" className="sr-only">
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className="w-full bg-transparent"
                >
                  <option value="">Province</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3280131ff66335a1b935998099a98140ebb3bf335247a24a9ac8bb15822b6144?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-2.5 leading-loose max-md:max-w-full">
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <div className="flex gap-10 justify-between items-center">
                <label htmlFor="city" className="sr-only">
                  City / Municipality
                </label>
                <select id="city" name="city" className="w-full bg-transparent">
                  <option value="">City / Municipality</option>
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3280131ff66335a1b935998099a98140ebb3bf335247a24a9ac8bb15822b6144?placeholderIfAbsent=true&apiKey=bcd25a482c724058b98e564e8bbde85d"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 items-start min-w-[240px] w-[270px]">
          <div className="flex flex-col min-w-[240px] w-[270px]">
            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:pl-5">
              <label htmlFor="zipCode" className="sr-only">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                className="w-full bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2.5 max-w-full leading-loose w-[555px]">
        <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 w-full border border-solid border-stone-800 max-md:px-5 max-md:max-w-full">
          <label htmlFor="street" className="sr-only">
            Building / Street
          </label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Building / Street*"
            className="w-full bg-transparent"
          />
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
