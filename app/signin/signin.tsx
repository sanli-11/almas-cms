import { Button } from "app/components/ui/button";
import { Input } from "app/components/ui/input";
import { Label } from "app/components/ui/label";
import { useState } from "react";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid h-dvh w-dvw grid-cols-5 overflow-hidden">
      <section className="relative col-span-2 flex flex-col items-center justify-center bg-stone-800 text-white">
        <hgroup className="w-full self-center text-center">
          <h1 className="text-9xl font-bold tracking-widest uppercase">
            Almas
          </h1>
          <p className="text-3xl">Point of Sale</p>
        </hgroup>
        <footer className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Button variant="link" size="sm" className="text-white">
            <img
              className="invert"
              src="app/assets/icons/github-brands-solid-full.svg"
              alt="GitHub"
              width="35"
              height="35"
            />
            GitHub/Sanli-11
          </Button>
        </footer>
      </section>
      <section className="col-span-3 m-auto w-full max-w-md">
        <h2 className="text-center text-3xl font-semibold">Welcome Back!</h2>
        <form className="mt-20 flex w-full flex-col items-center justify-center gap-y-9">
          <div className="grid w-full items-center gap-3">
            <Label className="ml-1" htmlFor="username">
              Username
            </Label>
            <Input
              className="shadow-xs"
              type="text"
              id="username"
              placeholder="username"
            />
          </div>
          <div className="grid w-full items-center gap-3">
            <Label className="ml-1" htmlFor="password">
              Password
            </Label>
            <div className="relative">
              <Input
                className="shadow-xs"
                type="password"
                id="password"
                placeholder="password"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-3 size-5 -translate-y-1/2 opacity-25 hover:opacity-50"
              >
                <img
                  src={
                    showPassword
                      ? "app/assets/icons/eye-slash-regular-full.svg"
                      : "app/assets/icons/eye-solid-full.svg"
                  }
                  alt="Show Password"
                />
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="mx-auto mt-4 w-full max-w-sm shadow-sm"
          >
            Sign In
          </Button>
        </form>
      </section>
      <Button variant="link" size="sm" className="absolute top-5 right-5">
        Report Issue
        <img
          className=""
          src="app/assets/icons/circle-exclamation-solid-full.svg"
          alt=""
          width="20"
          height="20"
        />
      </Button>
    </main>
  );
}
