import { Input } from "@/components/ui/input";
import { MessageCircleMore, Volume2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 px-2">
        <Input type="text" placeholder="Recherche"/>
      </div>
      <div className='flex items-center gap-6 justify-end w-full'>
        <MessageCircleMore />
        <Volume2 />
        <div className="flex flex-col">
        <h3 className="scroll-m-20 text-md font-semibold tracking-tight">Madjid Meddah</h3>
        <p className="text-sm text-muted-foreground">Admin</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;