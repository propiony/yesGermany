import React from "react";
import ExpertPanel from "./Expert";

export function TeamComponent(props) {
  return (
    <div className="justify-center items-center bg-stone-800 flex flex-col px-5 py-12">
    <div className="flex w-[1280px] max-w-full flex-col my-8 pb-3.5">
      <div className="text-yellow-400 text-4xl font-semibold leading-10 tracking-widest max-w-[1060px] self-center max-md:max-w-full">
        <span className="text-white">Our Committed Team: </span>
        <span className="text-yellow-400">A Dedicated Support System</span>
      </div>
      <div className="text-white text-opacity-80 text-2xl italic font-bold leading-7 tracking-wider max-w-[443px] self-center mt-6 max-md:max-w-full">
        Team exceeding 200+ Professionals
      </div>
      <img
        //loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f4873c4-d0be-4c78-a7d0-df3329e4a060?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
        className="aspect-[2.5] object-contain object-center w-full overflow-hidden self-stretch mt-10 max-md:max-w-full"
      />
      <div className="self-center text-neutral-50 text-center text-2xl font-semibold leading-7 tracking-wider max-w-[868px] mt-8 max-md:max-w-full">
        “Your dreams matter, and we at YesGermany are committed to making them
        a reality.&quot;
      </div>
      <div className="self-center text-zinc-50 text-opacity-80 text-center text-base font-medium leading-6 max-w-[868px] mt-4 max-md:max-w-full">
        Our extensive team comprises expert consultants, visa advisors,
        language instructors, and local support staff, all united in their
        goal to ensure your success. Whether it's guidance, assistance, or a
        friendly face to address your concerns, our robust team is always here
        for you.
      </div>{" "}
      <div className="text-yellow-400 text-4xl font-semibold leading-10 tracking-widest max-w-[971px] self-center mt-20 max-md:max-w-full max-md:mt-10">
        <span className="text-white">Assisted by Robust Indo-German: </span>
        <span className="text-yellow-400">Expert Panel</span>
      </div>{" "}
      <div className="items-stretch self-center flex w-[1110px] max-w-full gap-3.5 mt-10 max-md:flex-wrap max-md:justify-center">
        <div className="flex-col overflow-hidden relative flex aspect-[0.7489177489177489] justify-center items-stretch flex-1">
          <img
            //loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/31f11d49-9250-43f2-a027-8d442d226ef1?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />{" "}
          <div className="relative border flex flex-col justify-center items-stretch rounded-lg border-solid border-white border-opacity-30">
            <div className="flex flex-col items-stretch pt-12 pb-4 px-5 max-md:pl-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Dr. Abhishek Kumar
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70 self-center">
                YES GERMANY
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-center py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex-col overflow-hidden relative flex aspect-[0.7478260869565218] w-[172px] justify-center items-stretch">
            <img
              //loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56cbb00c-a9cb-414a-9cb3-1cb43ecc863b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative flex flex-col items-stretch pt-12 pb-3.5 px-5 max-md:pl-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Mr. Rajender Kumar
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70 self-center">
                YES GERMANY
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex-col overflow-hidden relative flex aspect-[0.7489177489177489] justify-center items-stretch flex-1">
          <img
            //loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbee4f78-9b0e-413c-8aa5-65a38b449847?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />{" "}
          <div className="relative border flex flex-col justify-center items-stretch py-px rounded-lg border-solid border-white border-opacity-30">
            <div className="flex flex-col items-stretch pt-12 pb-3.5 px-4">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Mrs. Beate Renninger
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70 self-center">
                YES GERMANY
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-stretch py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex flex-col items-center pb-3.5">
            <img
              //loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c977fe50-4ee4-49a1-a7fa-91d8d7834383?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="aspect-[0.8] object-contain object-center w-[172px] overflow-hidden"
            />
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-center py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex-col overflow-hidden relative flex aspect-[0.7521739130434782] w-[173px] justify-center items-stretch">
            <img
              //loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83d233ed-48bc-47a8-b239-fc29ee1f31a5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative flex flex-col items-stretch pt-12 pb-3.5 px-10 max-md:px-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Dr. Asta Forsti
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70">
                PROFESSORS
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex-col overflow-hidden relative flex aspect-[0.7489177489177489] justify-center items-stretch flex-1 px-px">
          <img
            //loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/455b119c-1569-4c92-866e-0d51220fa32d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />{" "}
          <div className="relative border flex flex-col justify-center items-stretch py-px rounded-lg border-solid border-white border-opacity-30">
            <div className="flex flex-col items-stretch pt-12 pb-3.5 px-7 max-md:px-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Mr. Tarun sharma
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70 self-center">
                YES GERMANY
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-yellow-400 text-4xl font-semibold leading-10 tracking-widest max-w-[778px] self-center mt-20 max-md:max-w-full max-md:mt-10">
        <span className="text-white">Hyper Active Alumni: </span>
        <span className="text-yellow-400">Guidance Portal </span>
      </div>{" "}
      <div className="text-white text-opacity-80 text-2xl italic font-bold leading-7 tracking-wider max-w-[418px] self-center mt-10">
        {" "}
        800+ Alumni Working in Germany
      </div>{" "}
      <div className="items-stretch self-center flex w-[1110px] max-w-full gap-3.5 mt-12 max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <img
          //loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ac62b-4396-4c78-b816-6bcb57b8d134?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
          className="aspect-[0.75] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-stretch py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex flex-col justify-center items-center py-px">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7510917030567685] w-[172px] items-center pt-12 pb-3.5 px-10 max-md:px-5">
              <img
                //loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70437377-ed2f-4b5c-80bb-e59bc09ce1e6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Jasmine
              </div>{" "}
              <div className="relative text-white text-xs font-medium leading-4 opacity-70 self-stretch">
                Mercedez Benz
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-center py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex-col overflow-hidden relative flex aspect-[0.7521739130434782] w-[173px] justify-center items-stretch">
            <img
              //loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b407321-36cd-4671-91e0-8e83522e269a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative flex flex-col items-stretch pt-12 pb-3.5 px-6 max-md:px-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Shivam Chaudhary
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70">
                Kvalito Consulting
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-center py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex-col overflow-hidden relative flex aspect-[0.7478260869565218] w-[172px] justify-center items-stretch">
            <img
              //loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1aae0399-07b4-4b39-990d-045ad8b6bff3?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative flex flex-col items-stretch pt-12 pb-3.5 px-9 max-md:px-5">
              <div className="text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Gagan Madaan
              </div>{" "}
              <div className="text-white text-xs font-medium leading-4 opacity-70">
                Sivantos Group
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="border flex grow basis-[0%] flex-col justify-center items-stretch py-px rounded-lg border-solid border-white border-opacity-30">
          <div className="flex flex-col justify-center items-center">
            <div className="flex-col overflow-hidden relative flex aspect-[0.7478260869565218] w-[172px] items-stretch pt-12 pb-3.5 px-11 max-md:px-5">
              <img
                //loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5440645b-d935-4550-9434-275f4e1e230a?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />{" "}
              <div className="relative text-zinc-100 text-sm font-medium leading-4 mt-32 max-md:mt-10">
                Manas Abrol
              </div>{" "}
              <div className="relative text-white text-xs font-medium leading-4 opacity-70 self-center">
                Air Bus
              </div>
            </div>
          </div>
        </div>{" "}
        <img
          //loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/512fb5ea-ca2f-436b-9d89-8584d479f7c4?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
          className="aspect-[0.75] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>{" "}
      <div className="text-white text-4xl font-semibold leading-10 tracking-widest max-w-[997px] self-center mt-16 max-md:max-w-full max-md:mt-10">
        Our Student Community Feedbacks and Testimonials
      </div>{" "}
      <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch self-stretch flex grow flex-col pb-12 max-md:mt-4">
              <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “With YES Germany everything is easy.”
                </div>{" "}
                <div className="text-black text-sm leading-5 mt-2">
                  Answered all my questions, helped with visa stuff, and found
                  a great place to stay. They're like a friend guiding you.
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfe6ec75-0c78-4460-ae65-a0a29a9b679d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Rajesh
                    </div>
                    <div className="text-black text-base leading-6">
                      Father of Student{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-6 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “Thank Yes Germany for making my study abroad dreams
                  stress-free!”
                </div>
                <div className="text-black text-sm leading-5 mt-2">
                  YesGermany answered all my questions, helped me with visas,
                  and ensured I was ready. The team's friendly approach and
                  expertise made the process smooth.
                </div>{" "}
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/438cb6ea-342f-4b74-8bfb-3a0b2c2034b5?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Swathi
                    </div>{" "}
                    <div className="text-black text-base leading-6">
                      University- “Stuttgart”
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="items-stretch bg-white flex flex-col mt-6 mb-4 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “Thank Yes Germany for making my study abroad dreams
                  stress-free!”
                </div>{" "}
                <div className="text-black text-sm leading-5 mt-2">
                  YesGermany answered all my questions, helped me with visas,
                  and ensured I was ready. The team's friendly approach and
                  expertise made the process smooth.
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/88a4714c-2973-4b0d-aaa9-beefbc0fae83?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Swathi
                    </div>
                    <div className="text-black text-base leading-6">
                      University- “Stuttgart”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-4">
              <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “They're like a caring friend, answering all my questions
                  with patience.”
                </div>{" "}
                <div className="text-black text-sm leading-5 mt-2">
                  From visas to where I'll stay, they sorted everything.
                  Thanks to them, my journey is stress-free and exciting. YES
                  Germany made my study abroad dreams come true!
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e3fa0-7efe-48eb-8822-88705218f49c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Bhavana
                    </div>
                    <div className="text-black text-base leading-6">
                      University - “TU Dresden”
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-6 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “They're like a caring friend, answering all my questions
                  with patience.”
                </div>{" "}
                <div className="text-black text-sm leading-5 mt-2">
                  From visas to where I'll stay, they sorted everything.
                  Thanks to them, my journey is stress-free and exciting. YES
                  Germany made my study abroad dreams come true!
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef3eb984-fea6-4657-8b7d-728d5011e9cb?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Bhavana
                    </div>
                    <div className="text-black text-base leading-6">
                      University - “TU Dresden”
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-6 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “Received Support and guidance after Landing in Germany
                  Airport itself”
                </div>
                <div className="text-black text-sm leading-5 mt-2">
                  Before starting my study abroad journey, I was tense and
                  unsure about whom to contact to get all my queries resolved.
                  Engaging with YES Germany turned out to be a game-changer
                  for me and I got an admission in “TU Dresden”{" "}
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b88627fa-b24b-4883-8da8-00e7d06dc468?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Ragu
                    </div>
                    <div className="text-black text-base leading-6">
                      University- “TU Dresden”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-4">
              <div className="items-stretch bg-white flex flex-col px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “As Parent I was Confused for my Child safety - YesGermany
                  answered all my doubts clearly”
                </div>
                <div className="text-black text-sm leading-5 mt-2">
                  I was in doubt before I met Mr. Chaudhary on a couple of
                  things for my child. The professionalism, guidance, and
                  sense of trust and conviction helped me decide and I'm happy
                  that today my child is well settled.
                </div>{" "}
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9139a128-09a0-4392-88ab-f2adc898271e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Rajesh
                    </div>{" "}
                    <div className="text-black text-base leading-6">
                      Father of Student{" "}
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="items-stretch bg-white flex flex-col mt-6 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “YES Germany made our child's study-abroad dream a reality!”
                </div>
                <div className="text-black text-sm leading-5 mt-2">
                  They patiently answered all our questions, guiding us
                  through the entire process. Thanks to them, our child is now
                  thriving overseas. Grateful for YES Germany's unwavering
                  support and expertise!
                </div>{" "}
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/961f7b14-6426-469b-8724-31ca30ce104c?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Swathi
                    </div>{" "}
                    <div className="text-black text-base leading-6">
                      University- “Stuttgart”
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="items-stretch bg-white flex flex-col mt-6 px-4 py-6 rounded-lg border-b-[12px] border-b-yellow-400 border-solid">
                <div className="text-black text-base font-semibold leading-6">
                  “With YES Germany everything is easy.”
                </div>{" "}
                <div className="text-black text-sm leading-5 mt-2">
                  Answered all my questions, helped with visa stuff, and found
                  a great place to stay. They're like a friend guiding you.
                </div>
                <div className="items-stretch flex justify-between gap-4 mt-6">
                  <img
                    //loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d76b3b98-d67e-4508-b27b-12319d65ee7f?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      Rajesh
                    </div>
                    <div className="text-black text-base leading-6">
                      Father of Student{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-neutral-700 text-base font-semibold justify-center items-center bg-yellow-400 self-center w-[270px] max-w-full mt-12 px-5 py-3 rounded-lg max-md:mt-10">
        View All Reviews
      </div>
      <img
        //loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3751d3d3-ad99-4efb-81fc-d1180d981348?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
        className="aspect-[20] object-contain object-center w-full overflow-hidden self-center mt-8 max-md:max-w-full"
      />
      <img
        //loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d17fba73-5a82-46e5-a5c3-15c7a117114e?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
        className="aspect-[20] object-contain object-center w-full opacity-60 overflow-hidden self-center mt-7 max-md:max-w-full"
      />
    </div>
  </div>
  );
}
