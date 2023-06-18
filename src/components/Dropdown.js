import { React, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Dropdown({ options, handleSelect, selectedOption, purpose }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          handleSelect(option.label);
          setIsOpen(false);
        }}
        className="bg-gray-100 px-4 py-2"
      >
        {option.label}
      </div>
    );
  });
  return (
    <>
      Select {purpose}
      <div className="w-72">
        <div
          onClick={handleToggleOpen}
          className="bg-gray-200 rounded-t-md px-4 py-2 flex items-center justify-between"
        >
          {selectedOption}
          <div className="">
            {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
        </div>

        <div>{isOpen && renderedOptions}</div>
      </div>
    </>
  );
}

export default Dropdown;
