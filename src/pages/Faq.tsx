import React, { useEffect, useRef, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const accordionsList = [
  {
    question: "Is Edmedy only for schools",
    answer: "Yes, edmedy is solely for school management",
  },
  {
    question: "Do i need credit card to start",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "Can i change subscription pans in the future",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "Can i extend my trial",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "Can i cancel my account at any time",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "Will you renew my subscription automatically",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "What are the steps involved in the setup process",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question: "How do i reset my administrative password",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
  {
    question:
      "Do i continue to enjoy the features and functionalities of edmedy if i do not renew my subscription",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, odit eum reprehenderit quo est ipsum.",
  },
];

const FAQ = () => {
  return (
    <section className="w-full bg-white">
      <header className="border-b shadow-md">
        <div className="items-center flex justify-between gap-x-4 max-w-[900px] mx-auto p-6">
          <h2 className="sm:block hidden cursor-pointer font-bold text-[23px] text-darkGray">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <h2 className="block sm:hidden cursor-pointer font-bold text-[23px] text-darkGray">
            FAQ
          </h2>
          <Link to={"/"} className="cursor-pointer text-[20px] text-[darkGray]">
            <FaTimes />
          </Link>
        </div>
      </header>
      <div className="w-full mt-[60px] p-4 max-w-[900px] mx-auto">
        {accordionsList.map((accordion, index: number) => {
          return <Accordion key={index} {...accordion} />;
        })}
      </div>
    </section>
  );
};

const Accordion = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const bodyRef = useRef<any>(null);

  const [height, setHeight] = useState<number>(
    bodyRef?.current?.getBoundingClientRect().height
      ? bodyRef?.current?.getBoundingClientRect().height
      : 0
  );
  useEffect(() => {
    setHeight(bodyRef?.current?.getBoundingClientRect().height);
  }, []);
  return (
    <div className="bg-mainBg">
      <header
        className="w-full flex items-center justify-between border-2 rounded-md p-3 cursor-pointer gap-x-2"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p className="max-w-[400px] md:max-w-[560px] font-bold text-darkGray">
          {question}
        </p>
        <span className="text-[20px] font-bold text-darkGray">
          {isOpen ? <FiMinusSquare /> : <BsPlusSquare />}
        </span>
      </header>
      <div
        className="w-full h-0 overflow-hidden transition-all duration-400"
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        <p className="px-3 py-4 text-[16px]" ref={bodyRef}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQ;
