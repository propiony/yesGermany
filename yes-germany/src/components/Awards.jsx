import * as React from "react";

export function AwardsComponent(props) {
  return (
    <div
      className="justify-center items-center bg-stone-500 flex flex-col px-20 py-12 max-md:px-5"
      style={{ background: "#242220",color:"#fff",textAlign:"left"}}
    >
      {/* <div className=" text-yellow-500 text-center text-4xl font-semibold leading-10 tracking-widest whitespace-nowrap mt-8 max-md:max-w-full">
        <span className="text-white">Awards that Prove Our Excellence: </span>
        <span className="text-yellow-500">Setting the Gold Standard</span>
      </div> */}
      <div className="justify-between w-[1280px] max-w-full mt-16 mb-8 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
            <img
              ////loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f7ced2b-a4a9-4841-b0a9-5dee394dd2ee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
              className="aspect-square object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-start self-stretch flex grow flex-col pb-3 max-md:max-w-full max-md:mt-10">
              <img
                //loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a234a930-e8a5-495c-b62c-152ed1a8d94d?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                className="aspect-square object-contain object-center w-[52px] overflow-hidden max-w-full self-start"
              />
              <div className="self-stretch text-gray-400 text-sm font-bold leading-6 tracking-normal mt-2 max-md:max-w-full">
                Asia Education Summit & Awards - 2023
              </div>
              <div className="self-stretch text-white text-xl font-semibold leading-8 tracking-normal mt-1 max-md:max-w-full">
                Most Trusted European Education Consultant{" "}
              </div>
              <div className="self-stretch text-gray-400 text-sm font-semibold leading-6 tracking-normal mt-2 max-md:max-w-full">
                Awarded by{" "}
              </div>
              <div className="self-stretch text-white text-base font-medium leading-6 tracking-normal mt-1 max-md:max-w-full">
                <span className="font-medium text-white text-opacity-90">
                  Mr. Ramesh Pokhriyal -{" "}
                </span>
                <span className="font-semibold text-white">
                  Cabinet Minister of Education
                </span>
              </div>
              <div className="self-stretch text-white text-base font-medium leading-6 tracking-normal mt-1 max-md:max-w-full">
                <span className="font-medium text-white text-opacity-90">
                  Shree Rajkumar Ranjan Singh
                </span>
                <span className="font-medium text-white"> - </span>
                <span className="font-semibold text-white">
                  Minister of State of Education
                </span>
              </div>
              <div className="justify-center items-center bg-white flex w-[137px] max-w-full flex-col mt-12 px-2 py-px rounded-lg border-[0.8px] border-solid border-zinc-300 self-start max-md:mt-10">
                <img
                  //loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5741957b-2f27-4e2c-be8a-40cfda7f5b39?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                  className="aspect-[2.93] object-contain object-center w-full overflow-hidden"
                />
              </div>
              <div className="self-stretch text-gray-400 text-sm font-bold leading-6 tracking-normal mt-2 max-md:max-w-full">
                Eminent Research Brand IQ - 2023
              </div>
              <div className="self-stretch text-white text-xl font-semibold leading-8 tracking-normal mt-1 max-md:max-w-full">
                Most Trusted German Education Consultant in India{" "}
              </div>
              <div className="self-stretch text-gray-400 text-sm font-semibold leading-6 tracking-normal mt-2 max-md:max-w-full">
                Award Given by{" "}
              </div>
              <div className="self-stretch text-white text-base font-medium leading-6 tracking-normal mt-1 max-md:max-w-full">
                <span className="font-medium text-white text-opacity-90">
                  Mr. Sohail Khan
                </span>
                <span className="font-medium text-white"> - </span>
                <span className="font-semibold text-white">
                  Bollywood Personality
                </span>
                <span className="font-medium text-white"> </span>
              </div>
              <div className="self-stretch text-gray-400 text-sm font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
                Eminent Research Brand IQ - 2021
              </div>
              <div className="self-stretch text-white text-xl font-semibold leading-8 tracking-normal mt-1 max-md:max-w-full">
                Most Trusted German Education Consultant in India{" "}
              </div>
              <div className="justify-center items-center flex w-[210px] max-w-full gap-2 mt-8 rounded-lg self-start">
                <a
                  href="..."
                  className="text-neutral-50 text-sm font-semibold tracking-wide underline grow whitespace-nowrap my-auto"
                >
                  Learn More About Awards{" "}
                </a>
                <img
                  //loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f4c6361-3625-4ff3-91b8-38143b799b7b?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
