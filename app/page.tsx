import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-full justify-center p-4">
      <div className="flex flex-col w-full max-w-4xl text-palette-2">
        <div className="flex flex-col md:flex-row justify-between items-start my-7 gap-4">
          <Image
            src="/mebw.JPG"
            width={360}
            height={240}
            alt="photo of me"
            className="hidden lg:block border-2 border-palette-2 rounded-xl"
          />
          <Image
            src="/mebw.JPG"
            width={300}
            height={200}
            alt="photo of me"
            className="hidden md:block lg:hidden border-2 border-palette-2 rounded-xl"
          />
          <div className="mx-2 flex flex-col items-center">
            <Image
              src="/mebw.JPG"
              width={240}
              height={160}
              alt="photo of me"
              className="block md:hidden border-2 border-palette-2 rounded-xl"
            />
            <div className="py-2">
              <h1 className="text-center md:text-left py-1 font-bold text-2xl">
                {`Hi, I'm Isai`}
              </h1>
              <p className="italic pb-1 text-md">Thanks for swinging by!</p>
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
      </div>
    </div>
  );
}
