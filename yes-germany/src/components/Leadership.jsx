import React from "react";

function LeadershipComponent(props) {
  return (
    <div className="justify-center container items-stretch flex flex-col" style={{textAlign:"left",margin:"20px auto"}}>
      <div className=" justify-center text-yellow-500 text-4xl font-semibold leading-10 tracking-widest w-full max-md:max-w-full">
        <span className="text-zinc-800">Our Leadership in Action: </span>
        <span className="text-yellow-500">Committed for Excellence</span>
      </div>
      <div className="justify-between w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col  items-start max-md:max-w-full max-md:mt-10">
              <div className="text-amber-300 text-xs font-bold tracking-widest uppercase whitespace-nowrap items-stretch rounded bg-neutral-700 w-[281px] max-w-full justify-center px-2.5 py-1.5">
                Founder and CEO at Yes Germany
              </div>
              <div className="text-zinc-800 text-left text-3xl font-semibold leading-10 tracking-widest self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                Dr.-Ing. Gagan Syal
              </div>
              <p className="self-stretch text-neutral-700 text-base font-medium leading-6 mt-4 max-md:max-w-full">
                Dr.-Ing. Gagan Syal, Founder and CEO at YES Germany, has worked 10+ years at Mercedes-Benz Germany. He did his MS and PhD (KIT) from Germany. He gives lectures at German Universities like KIT Karlsruhe, RUB Bochum etc. and Indian Universities like DTU Delhi, NIT Jaipur etc.
              </p>
              <div className="justify-center items-center bg-stone-100 flex w-[248px] max-w-full gap-2 mt-4 px-4 py-3 rounded-lg">
                <a href="#" className="text-neutral-700 text-sm font-semibold tracking-wide underline grow whitespace-nowrap my-auto">Learn More About Founder</a>
                <img 
                //loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3de27df3-2a76-4e6c-92b3-b56371940c05?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&" className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch shrink-0 max-w-full" alt="Founder" />
              </div>
              <h2 className="text-zinc-800 text-left text-2xl font-semibold leading-7 tracking-wider self-stretch whitespace-nowrap mt-14 text-wrap max-md:mt-10">
                Authored Book - 'Indian Curry With German Beer'
              </h2>
              <div className="items-stretch self-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                <img 
                //loading="lazy" 
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a033dfa4-41a9-4cf3-a8b9-b4384c56e3df?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"className="aspect-[0.7] object-contain object-center w-[82px] overflow-hidden shrink-0 max-w-full" alt="Book" />
                <div className="items-stretch flex grow basis-[0%] flex-col self-start max-md:max-w-full">
                  <div className="text-zinc-800 text-left text-lg font-bold leading-6 tracking-wider whitespace-nowrap max-md:max-w-full">
                    Must Read for Future German Students
                  </div>
                  <p className="text-neutral-700 text-sm font-medium leading-5 mt-2 max-md:max-w-full">
                    'Indian Curry With German Beer' is meant to be your go-to guide! Dr. G’s book reveals the real experiences of an Indian in Germany. Gain insights, embrace the culture, and prepare for success with this invaluable guide. Immerse yourself in these stories to equip yourself for an enriching journey in Germany!
                  </p>
                </div>
              </div>
              <div className="text-neutral-400 text-left text-base font-semibold leading-5 whitespace-nowrap mt-8">
                Check out the Book Here
              </div>
              <div className="items-stretch flex w-[364px] max-w-full gap-3.5 mt-4">
                <div className="justify-center items-center shadow-sm bg-white bg-opacity-10 flex grow basis-[0%] flex-col px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-100">
                  <img 
                  //loading="lazy"
                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/823ad4c9-1a40-442b-9243-b706a002eba6?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&" className="aspect-[4.54] object-contain object-center w-[109px] overflow-hidden max-w-full" alt="Book" />
                </div>
                <div className="justify-center items-center shadow-sm bg-white bg-opacity-10 flex grow basis-[0%] flex-col px-5 py-2 rounded-lg border-2 border-solid border-zinc-100">
                  <img 
                  //loading="lazy" 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d7af16d-093e-48f9-aec4-740803cf5dee?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&" className="aspect-[4.19] object-contain object-center w-[109px] overflow-hidden max-w-full" alt="Book" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <img 
            //loading="lazy" 
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cef0dede-55e2-40c8-a185-09591424b324?apiKey=1cd6f2baf53a4a76b28d9da74d6a512b&"className="aspect-[1.02] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadershipComponent;