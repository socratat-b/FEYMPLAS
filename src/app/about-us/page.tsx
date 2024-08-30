import Footer from "@/components/layouts/about-us-footer/about-us-footer";

/* eslint-disable @next/next/no-img-element */
export default function AboutUs() {
  return (
    <section className="w-full h-fit text-primary-2 text-lg font-[300]">
      <div className="w-full h-full max-w-[75%] mx-auto flex flex-col gap-16 justify-center items-center">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}
// First Section
const FirstSection = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-8 items-center py-8">
      <h1 className="text-4xl font-bold">About Us</h1>
      <Buttons />
      <div className="w-full font-[300]">
        <div className="flex flex-row gap-2 justify-start items-center">
          <p>FAME+</p>
          <hr className="w-16 border border-primary-2" />
        </div>
        <div className="w-full flex flex-row justify-center gap-20 pb-8">
          <FirstDiv />

          <img
            className="object-cover"
            src="assets/about-us/1.png"
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <p>
            FAME+ is published by the Center for International Trade Expositions
            & Missions (CITEM).{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
const FirstDiv = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-8 tracking-wide">
      <h1 className="text-3xl font-bold">
        PHILIPPINE DESIGN <br /> AND BEYOND
      </h1>
      <p>
        FAME+ is the ultimate digital sourcing and storytelling platform for
        Philippine quality home, fashion, and lifestyle products.
      </p>
      <p>
        FAME+ enables Philippine brands and manufacturers to generate leads and
        reach global buyers through the content creation, learning
        opportunities, and B2B capabilities. It intends to ensure and improve
        the discoverability of exhibitors online, creating a community of
        exhibitors, buyers, and stakeholders in one digital space.
      </p>
      <div>
        <p>
          Official website: <a href="#">https://fameplus.com/</a>
        </p>
        <p>
          Facebook: <a href="#">ManilaFAMEofficial</a>
        </p>
        <p>
          Twitter: <a href="#">@TheManilaFAME</a>
        </p>
        <p>
          Instagram: <a href="#">@ManilaFame</a>
        </p>
        <p>
          Pinterest: <a href="#">@ManilaFAME</a>
        </p>
      </div>
    </div>
  );
};

const Buttons = () => {
  const buttonNames = ["FAME+", "Manila FAME", "CITEM"];
  return (
    <div className="pb-12 w-full flex flex-row justify-center items-center gap-6  text-secondary-5">
      {buttonNames.map((name, index) => (
        <button
          key={index}
          type="button"
          className="px-4 py-1.5 w-full min-w-52 max-w-52 border border-secondary-5 "
        >
          About {name}
        </button>
      ))}
    </div>
  );
};

// Second Section
const SecondSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-full flex flex-row justify-start gap-20 items-start pb-6">
        <img className=" object-cover" src="assets/about-us/2.png" alt="" />
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-2 justify-start items-center">
            <p>MANILA FAME</p>
            <hr className="w-16 border border-primary-2" />
          </div>
          <SecondDiv />
        </div>
      </div>
      <div>
        <p className="w-full max-w-screen-md text-center">
          Manila FAME is a member of the Union des Foires Internationales (UFI)
          and is organized by the Center for International Trade Expositions and
          Missions (CITEM).
        </p>
      </div>
    </div>
  );
};

const SecondDiv = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-6 tracking-wide">
      <h1 className="text-3xl font-bold max-w-sm">
        THE PHILIPPINES PREMIER DESIGN AND LIFESTYLE EVENT
      </h1>
      <p className="">
        Manila FAME is the Philippines’ premier trade show for quality home,
        fashion, and lifestyle products.
      </p>
      <p>
        Since 1983, it has been supporting and showcasing Philippine MSMEs and
        artisan communities from the home, fashion and lifestyle sectors through
        various capacity-building efforts, collaborations with international
        design figures, and networking activities with buyers from around the
        world.
      </p>
      <p>
        Together with FAME+ (fameplus.com), Manila FAME continues to promote the
        craft of the artisan to even more markets in the digital sphere.
      </p>
    </div>
  );
};

// Third Section
const ThirdSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-full flex flex-row justify-start gap-20 items-start pb-4">
        <div className="flex flex-col gap-8">
          <ThirdDiv />
        </div>
        <img className="object-cover" src="assets/about-us/3.png" alt="" />
      </div>
    </div>
  );
};

const ThirdDiv = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6 tracking-wide">
      <img className="pb-4" src="assets/about-us/dti.png" alt="" />
      <p>
        The Center for International Trade Expositions and Missions (CITEM) is
        the export promotion arm of the Philippine Department of Trade and
        Industry (DTI)
      </p>
      <p>
        CITEM is committed to developing, nurturing, and promoting
        globally-competitive small and medium enterprises (SMEs), exporters,
        designers, and manufacturers by implementing an integrated approach to
        export marketing in partnership with other government and private
        entities.
      </p>
      <p>
        For three decades, CITEM has established the country’s image as the
        premier destination for quality export products and services. It
        continues to set the highest standards of creativity, excellence and
        innovation to achieve export competitiveness in the international
        market.
      </p>
    </div>
  );
};

// Footer
