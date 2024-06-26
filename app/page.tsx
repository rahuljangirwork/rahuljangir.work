import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex flex-col w-80 md:w-[60%] text-palette-2">
        <div className="w-full flex justify-between my-7">
          <Image
            src="/shepherd.jpg"
            width={300}
            height={300}
            alt="photo of me"
            className="hidden lg:block border-2 border-palette-2 rounded-xl"
          />
          <div className="mx-2 flex flex-col">
            <h1 className="flex justify-center items-center gap-2 mb-2 font-bold text-2xl">
              <Image
                src="/shepherd.jpg"
                width={50}
                height={50}
                alt="photo of me"
                className="block lg:hidden border-2 border-palette-2 rounded-xl"
              ></Image>
              Hi, I'm Isai
            </h1>
            <div className="px-2">
              <p className="italic">Thanks for swinging by!</p>
              <p className="text-sm text-palette-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h1 className="font-bold text-center border-2 border-palette-4 rounded-md">
          Home Page
        </h1>
        <p className="text-center text-sm italic">Whats going on fellas</p>
        {[...Array(6)].map((_, index) => (
          <p key={index} className="text-palette-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        ))}
      </div>
    </div>
  );
}
