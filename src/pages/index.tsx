import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [accordionItems, setAccordionItems] = useState([
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      isOpen: false,
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      isOpen: false,
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      isOpen: false,
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index: number) => {
    setAccordionItems(
      accordionItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return { ...item, isOpen: false };
      }),
    );
  };

  return (
    <>
      <Head>
        <title>FAQ Accordion</title>
        <meta name="description" content="FAQ-Accordion" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <main className="bg-mobile-bg bg-full-auto md:bg-desktop-bg flex min-h-screen flex-col items-center justify-center bg-light-pink bg-no-repeat ">
        {/* FAQ Container */}
        <div className="flex flex-col gap-8 rounded-3xl border border-light-pink bg-white p-14 shadow-2xl shadow-grayish-purple md:w-[60%]">
          {/* Header */}
          <div className="flex h-12 flex-row items-center justify-start gap-8">
            <Image
              className="h-full w-auto"
              src="/assets/images/icon-star.svg"
              width={100}
              height={100}
              alt="Star Icon"
            />
            <h1 className="text-6xl font-bold">FAQs</h1>
          </div>
          {/* Accordion Items */}
          {accordionItems.map((item, index) => (
            <div className="accordion-item w-full border-b-2 pb-4" key={index}>
              <button
                className="accordion-button flex h-8 w-full flex-row items-center justify-between font-semibold hover:text-dark-purple"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                {item.isOpen ? (
                  <Image
                    className="h-full w-auto"
                    src="/assets/images/icon-minus.svg"
                    height={100}
                    width={100}
                    alt="Minus Icon"
                  />
                ) : (
                  <Image
                    className="h-full w-auto"
                    src="/assets/images/icon-plus.svg"
                    height={100}
                    width={100}
                    alt="Plus Icon"
                  />
                )}
              </button>
              {item.isOpen && (
                <div className="accordion-content my-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
