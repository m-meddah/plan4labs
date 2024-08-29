import UserCard from "@/app/_components/UserCard";
import { Calendar } from "@/components/ui/calendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard number="2" type="Cadre" link="managers"/>
          <UserCard number="10" type="Biologiste" link="biologists"/>
          <UserCard number="50" type="Technicien" link="technicians"/>
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <div className="flex justify-center md:justify-end">
        <Calendar />
      </div>

      </div>
    </div>
  );
};

export default AdminPage;
