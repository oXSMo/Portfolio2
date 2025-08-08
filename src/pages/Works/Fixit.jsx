import React from "react";
import { MaskText } from "../../components/common/MaskText";

function Fixit() {
  return (
    <main className="">
      <article className="py-24 sticky mx-auto w-fit ">
        <MaskText
          phrases={["Fixiiit"]}
          className="mx-auto text-6xl text-center w-full font-black mb-6 tracking-wider "
        />
        <MaskText
          phrases={[
            "FIXiiit is a repair platform for your electronic devices.",
            "Users can create an account to track their orders and repair status,",
            "get quotes, and easily place an order to have their PC, phone",
            "or other gadgets sent in to be fixed by our expert technicians",
          ]}
          className="text-center my-1.5 text-2xl  mx-auto text-[#b7b7b7] "
        />
      </article>
    </main>
  );
}

export default Fixit;
