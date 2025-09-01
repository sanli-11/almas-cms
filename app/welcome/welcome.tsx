export function Welcome() {
  return (
    <main className="grid h-dvh w-dvw grid-cols-5 overflow-hidden">
      <section className="banner relative col-span-2 flex flex-col items-center justify-center">
        <hgroup className="w-full self-center text-center">
          <h1 className="text-9xl font-bold tracking-widest uppercase">
            Almas
          </h1>
          <p className="text-3xl">Point of Sale</p>
        </hgroup>
        <footer className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a className="flex items-center gap-2" href="github.com/sanli-11">
            <img
              className="invert"
              src="app/assets/icons/github-brands-solid-full.svg"
              alt="GitHub"
              width="35"
              height="35"
            />
            <span className="text-xl">San Li</span>
          </a>
        </footer>
      </section>
      <section className="col-span-3 flex flex-col items-center justify-center p-40">
        <h2 className="text-center text-3xl font-semibold">Welcome Back!</h2>
        <form className="mt-20 flex w-4/5 flex-col items-stretch gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            <label className="ml-1.5" htmlFor="username">
              Username
            </label>
            <input
              className="w-full"
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <label className="ml-1.5" htmlFor="username">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="mt-15 w-90 self-center" type="submit">
            Login
          </button>
        </form>
      </section>
      <a
        className="group absolute top-5 right-5 flex items-end justify-center gap-2 text-sm/tight"
        href="mailto:sanli.has11@gmail.com"
      >
        <span className="invisible group-hover:visible">Report Issue</span>
        <img
          className="invert"
          src="app/assets/icons/circle-exclamation-solid-full.svg"
          alt=""
          width="20"
          height="20"
        />
      </a>
    </main>
  );
}
