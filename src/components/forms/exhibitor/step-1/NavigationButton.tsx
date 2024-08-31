/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface NavigationButtonProps {
  direction: "prev" | "next";
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
}) => {
  const isNext = direction === "next";
  const buttonText = isNext ? "NEXT" : "<";
  const buttonWidth = isNext ? "w-[171px]" : "w-[53px]";
  const buttonPadding = isNext ? "px-12 py-3.5" : "px-5";

  return (
    <div className={`flex flex-col self-stretch my-auto ${buttonWidth}`}>
      <div
        className={`gap-2.5 self-stretch ${buttonPadding} bg-stone-600 min-h-[53px] max-md:px-5`}
      >
        {buttonText}
      </div>
    </div>
  );
};
