import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const UserCard = ({type, number, link}: {type:string, number:string, link:string}) => {
  return (
    <Card className="p-4 flex-1 min-w-[170px]">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{number}</CardTitle>
        <CardDescription className="flex">{type}s</CardDescription>
      </CardHeader>
        <Link href={`/list/${link}`}>
      <CardFooter>
        <Button className="w-full">
          Voir plus
        </Button>
      </CardFooter>
        </Link>
    </Card>
  )
}

export default UserCard;