import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 px-2">
        <Input type="text" placeholder="Recherche"/>
      </div>
    </div>
  )
}

export default Navbar;