import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

const UserCard = ({type}: {type:string}) => {
  return (
    <Card className="p-4 flex-1 min-w-[130px]">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>222</CardTitle>
        <CardDescription className="flex">{type}s</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          Voir plus
        </Button>
      </CardFooter>
    </Card>
  )
}

export default UserCard;