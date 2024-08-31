// src/components/forms/trade-buyer/NavigationButtons.tsx

interface NavigationButtonsProps {
  handlePrev: () => void;
  handleNext: () => void;
  isSubmit?: boolean;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handlePrev,
  handleNext,
  isSubmit = false,
  disablePrev = false,
  disableNext = false,
}) => {
  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center self-end mt-11 max-w-full text-lg font-bold leading-loose text-white whitespace-nowrap w-[554px] max-md:mt-10">
      <button
        className="flex flex-col self-stretch my-auto w-[53px] h-[53px] bg-stone-600"
        aria-label="Previous"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        <span className="self-center my-auto">&lt;</span>
      </button>
      <button
        className="flex flex-col self-stretch my-auto w-[171px] px-12 py-3.5 bg-stone-600 min-h-[53px] max-md:px-5"
        onClick={handleNext}
        disabled={disableNext}
      >
        {isSubmit ? 'SUBMIT' : 'NEXT'}
      </button>
    </nav>
  );
};

export default NavigationButtons;
