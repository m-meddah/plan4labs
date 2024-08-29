import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { MessageCircleMore, Volume2 } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 px-2">
        <Input type="text" placeholder="Recherche"/>
      </div>
      <div className='flex items-center gap-2 justify-end w-full'>
      <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/list/messages" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <MessageCircleMore />
                </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/list/announces" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Volume2 />
                </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        
        
        <div className="flex flex-col">
        <h3 className="scroll-m-20 text-md font-semibold tracking-tight">Madjid Meddah</h3>
        <p className="text-sm text-muted-foreground">Admin</p>
        </div>
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/77695390?v=4"/>
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar;