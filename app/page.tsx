export default function Home() {
  return (
    <div className="flex w-full h-full justify-center">
      <div className="flex flex-col w-[50%] text-palette-2">
        <h1 className="font-bold text-center">Home Page</h1>
        <p className="text-center text-sm italic">Whats going on fellas</p>
        {[...Array(6)].map((_, index) => (
          <p key={index}>
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
