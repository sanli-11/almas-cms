import { Button } from "app/components/ui/button";
import { Input } from "app/components/ui/input";
import { sidebarIcons } from "./icons";

export function Dashboard() {
  const username = "San";
  const email = "sanli.has11@gmail.com";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date().toLocaleDateString("en-US", options);
  const salesMonthly = 18000;
  const countSalesMonthly = 120;
  const profitMonthly = 3500;
  const productsAvailable = 53;
  const countSalesToday = 15;
  const profitToday = 300;

  return (
    <main className="grid h-dvh w-dvw grid-cols-6 gap-1.25 overflow-hidden bg-stone-200 p-2">
      <aside className="relative col-span-1 rounded-lg bg-white p-4">
        <h2 className="my-6 flex items-end justify-start gap-4 text-4xl font-semibold tracking-wide">
          <div className="size-12 rounded-md bg-black p-1.5">
            <img
              src="app/assets/icons/gear-solid-full.svg"
              alt="Almas Logo"
              className="size-full invert"
            />
          </div>
          Almas
        </h2>
        <ul className="mt-18 mb-4 flex flex-col gap-1.5">
          {sidebarIcons
            .filter((icon) => icon.button === true)
            .map((icon) => (
              <li key={icon.id} className="mb-4">
                <Button
                  variant={icon.id === 0 ? "default" : "outline"}
                  className={`${icon.id === 0 ? "bg-emerald-800" : "group border-emerald-800 hover:text-white"} flex w-full gap-4 rounded-full transition-colors hover:bg-emerald-950`}
                >
                  <img
                    src={icon.icon}
                    alt=""
                    className={`${icon.id === 0 ? "invert" : "group-hover:invert"} size-5`}
                  />
                  {icon.name}
                </Button>
              </li>
            ))}
        </ul>
        <h3 className="mt-12 px-3 font-medium text-stone-700 uppercase">
          General
        </h3>
        <ul className="my-6 flex flex-col gap-1">
          {sidebarIcons
            .filter(
              (icon) => icon.button === false && icon.category === "general",
            )
            .map((icon) => (
              <Button
                className="my-1.5 flex w-full justify-start gap-4 py-6 hover:bg-emerald-100 hover:text-emerald-900"
                variant="ghost"
              >
                <img src={icon.icon} alt="" className="size-6" />
                {icon.name}
              </Button>
            ))}
        </ul>
        <h3 className="mt-12 px-3 font-medium text-stone-700 uppercase">
          Shop
        </h3>
        <ul className="my-6 flex flex-col gap-1">
          {sidebarIcons
            .filter((icon) => icon.button === false && icon.category === "shop")
            .map((icon) => (
              <Button
                className="my-1.5 flex w-full justify-start gap-4 py-6 hover:bg-emerald-100 hover:text-emerald-900"
                variant="ghost"
              >
                <img src={icon.icon} alt="" className="size-6" />
                {icon.name}
              </Button>
            ))}
        </ul>
        <h3 className="mt-12 px-3 font-medium text-stone-700 uppercase">
          Support
        </h3>
        <ul className="my-6 flex flex-col gap-1">
          {sidebarIcons
            .filter(
              (icon) => icon.button === false && icon.category === "support",
            )
            .map((icon) => (
              <Button
                className="my-1.5 flex w-full justify-start gap-4 py-6 hover:bg-emerald-100 hover:text-emerald-900"
                variant="ghost"
              >
                <img src={icon.icon} alt="" className="size-6" />
                {icon.name}
              </Button>
            ))}
        </ul>
        <Button
          variant="ghost"
          className="absolute bottom-6 left-0 flex w-full items-center justify-start gap-3 hover:bg-white"
        >
          <div className="grid size-9 place-content-center rounded-md bg-black p-1.5 text-white">
            {username.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-sm leading-none font-medium">{username}</span>
            <span className="text-xs/tight text-stone-500">{email}</span>
          </div>
        </Button>
      </aside>
      <section className="col-span-5 flex flex-col gap-1.5 overflow-auto rounded-lg bg-stone-200">
        <section className="flex max-h-25 w-full items-center justify-end gap-4 rounded-lg bg-white p-8">
          <Input
            className="inset-shadow-md max-w-96"
            type="search"
            placeholder="Search Receipt ID"
          />
          <Button type="submit" variant="outline">
            Search
          </Button>
        </section>
        <article className="grid grid-cols-3 grid-rows-5 gap-4 rounded-lg bg-white p-8">
          <div className="col-span-3 flex items-center justify-between">
            <hgroup className="flex flex-col gap-3">
              <h3 className="text-4xl font-medium">
                Welcome <span className="font-semibold">{username}</span>
              </h3>
              <p>Your dashboard overview — {formattedDate}</p>
            </hgroup>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-2 rounded-full"
            >
              This Month
              <img
                className="size-4"
                src="app/assets/icons/chevron-down-solid-full.svg"
                alt=""
              />
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
