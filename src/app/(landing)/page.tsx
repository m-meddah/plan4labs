import { CalendarCheck } from "lucide-react";
import Link from "next/link";
import Menu from "../_components/Menu";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function LandingPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <CalendarCheck color="#6088e6" strokeWidth={3} size={24}/>
          <p className="hidden lg:block scroll-m-20 text-2xl font-semibold tracking-tight">
            Plan4Labs
          </p>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-popover overflow-scroll flex flex-col">
        <div className="flex items-center gap-2 justify-end w-full">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/login">
            <Button className="m-4">Log in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
