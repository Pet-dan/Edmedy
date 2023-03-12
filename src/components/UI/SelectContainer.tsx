import React, { FC, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface SelectContainerProps {
  list: string[] | number[];
  currentItem: string;
  updateItem: (value: string) => void;
  fitContent: boolean;
}

const SelectContainer: FC<SelectContainerProps> = ({
  list,
  currentItem,
  updateItem,
  fitContent,
}) => {
  const [accordionOpened, setAccordionOpened] = useState<boolean>(false);
  const toggleAccordion = () => {
    setAccordionOpened((prev) => !prev);
  };
  const closeAccordion = () => {
    setAccordionOpened(false);
  };
  return (
    <div className={`w-full relative`}>
      <header
        className={`w-full cursor-pointer border-[1.5px] flex justify-between items-center gap-x-4 px-3 py-2 rounded-md bg-white ${
          accordionOpened && "border-black"
        }`}
        onClick={toggleAccordion}
      >
        <p>{currentItem}</p>
        <span>{accordionOpened ? <BiChevronUp /> : <BiChevronDown />}</span>
      </header>
      {accordionOpened && (
        <div
          className="absolute top-[115%] shadow-md left-0 w-full overflow-hidden overflow-y-scroll rounded-md z-[5] bg-white"
          style={{ maxHeight: fitContent ? "fit-content" : "300px" }}
        >
          {list.map((listItem, index) => {
            return (
              <p
                key={index}
                className="p-3 text-darkGray hover:text-black w-full cursor-pointer"
                onClick={() => {
                  updateItem(listItem as string);
                  closeAccordion();
                }}
              >
                {listItem}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectContainer;
