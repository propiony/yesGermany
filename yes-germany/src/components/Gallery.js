import "../styles/gallery.scss";
import { Card } from "./common/CardPrimary";
const Gallery = () => {
  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="760"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  const galleryCards = [
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
    {
      head: "Counselling",
      content:
        "Our counseling services go beyond advice. Our expert consultants provide personalized guidance, ensuring you get the right directions for preparations and arrangements.",
    },
  ];
  return (
    <div className="gallery-container home-container">
      <h2>
        Why should one consider <span>YesGermany?</span>
      </h2>
      <div className="video-section">
        <YoutubeEmbed embedId="SWdrlWwjI30" />
      </div>
      {/* <p>
        One-Stop Solution with YesGermany{" "}
        <span>: Your Educational Journey Simplified</span>
      </p>
      <div className="gallery-cards row">
        {galleryCards.map((item) => (
          <div className="col-12 col-sm-6 col-md-4" key={item.head}>
            <Card head={item.head} content={item.content} />
          </div>
        ))}
      </div> */}
      <div className="items-center flex flex-col">
        <div className="text-neutral-600 text-center text-3xl font-semibold leading-10 tracking-widest w-[1024px] max-w-screen-lg max-md:max-w-full">
          <span className="font-bold text-zinc-800">
            We are a One-Stop Solution :{" "}
          </span>
          <span className="font-semibold text-neutral-600">
            For Getting Your Educational Journey Simplified
          </span>
          <span className="font-bold text-neutral-600"> </span>
          <span className="font-bold text-zinc-800"> </span>
        </div>
        <div className="self-stretch w-full mt-20 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto px-8 py-10 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-2 rounded-[47px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7acc9df-987b-496a-94cd-2122c6a1bfd3?"
                    className="aspect-[1.02] object-contain object-center w-full justify-center items-center overflow-hidden"
                  />
                </div>
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  Counselling
                </div>
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2">
                  Our counseling services go beyond advice. Our expert
                  consultants provide personalized guidance, ensuring you get
                  the right directions for preparations and arrangements.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto pt-8 pb-12 px-8 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-2.5 rounded-[36px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/380599cc-a4c4-4042-95c1-78d96a84dfd3?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  Confirmed Admission
                </div>
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2 mb-6">
                  We've got you covered! Yes Germany applies to the top German
                  universities, ensuring you not only get admitted but find your
                  spot in the best specialized programs.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto px-8 py-10 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-2.5 rounded-[40px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a18d561-fcdb-41f2-b330-e7cc8291c2a9?"
                    className="aspect-[0.98] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  Visa & Living
                </div>{" "}
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2">
                  We streamline and simplify the visa application, making it
                  efficient and stress-free. Plus, we don't stop there consider
                  us your local guardian for accommodation and all-around
                  support.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-full mt-8 px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto pt-8 pb-12 px-8 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-2 rounded-[60px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1736d8d9-ab5d-422c-99d2-c89a88958dfb?"
                    className="aspect-[1.07] object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  IELTS Preparation
                </div>
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2 mb-6">
                  Our IELTS trainers use a unique methodology to equip you with
                  the skills needed to attain your desired score. We don't just
                  teach; we guide you towards success.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto px-8 py-10 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-3 rounded-[35px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bfee2c8-47f2-4a0a-a159-61ae42da3683?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  German Language
                </div>{" "}
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2">
                  Discover the ease of learning German language As the leading
                  German teaching center in India, our focus is on productive
                  teaching that ensures you not only learn the language but
                  excel in it.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center self-stretch shadow-2xl bg-white flex grow flex-col w-full mx-auto px-8 py-10 rounded-3xl border-b-8 border-b-yellow-400 border-solid max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center bg-yellow-400 flex aspect-square flex-col w-16 h-16 px-3 rounded-[50px]">
                  <img
                    //loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0111f510-a7a8-40df-8a44-920199f47d65?"
                    className="aspect-[0.98] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="self-stretch text-zinc-800 text-center text-2xl font-semibold leading-8 tracking-tight mt-7">
                  Buddy Services
                </div>{" "}
                <div className="self-stretch text-neutral-700 text-center text-base leading-6 tracking-normal mt-2">
                  Dedicated companion awaits you at the airport, ensuring a
                  stress-free arrival. From airport pickup to guiding you to
                  your accommodation, our service is tailored for your comfort
                  and peace of mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="free-consultation">
        <h2>Let's Connect and Make Your Dreams a Reality</h2>
        <p>
          Schedule a FREE consultation with one of our specialists to learn
          about German Education.
        </p>
        <div className="gallery-btns row justify-content-center">
          <button className="btn btn-primary col-sm-12 col-md-auto">
            Schedule Free Profile Evaluation
          </button>
          <button className="btn btn-secondary col-sm-12 col-md-auto">
            Talk to an Expert
          </button>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
