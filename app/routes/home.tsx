import { SignIn } from "../signin/signin";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Almas POS" },
    { name: "description", content: "POS for Almas" },
  ];
}

export default function Home() {
  return <SignIn />;
}
