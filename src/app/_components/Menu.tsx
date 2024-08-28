import { role } from "@/lib/fakeData";
import { BriefcaseMedical, CalendarFold, House, LogIn, LogOut, MessageCircleMore, Settings, SquareChartGantt, TestTubeDiagonal, User, Volume2 } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <House/>,
        label: "Accueil",
        href: "/",
        visible: ["admin", "manager", "biologist", "technician", "visitor"],
      },
      {
        icon: <SquareChartGantt />,
        label: "Cadre",
        href: "/list/managers",
        visible: ["admin", "manager"],
      },
      {
        icon: <BriefcaseMedical />,
        label: "Biologiste",
        href: "/list/biologists",
        visible: ["admin", "manager"],
      },
      {
        icon: <TestTubeDiagonal />,
        label: "Technicien",
        href: "/list/technicians",
        visible: ["admin", "manager"],
      },
      {
        icon: <CalendarFold />,
        label: "Evenements",
        href: "/list/events",
        visible: ["admin", "manager", "biologist", "technician"],
      },
      {
        icon: <MessageCircleMore />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "manager", "biologist", "technician"],
      },
      {
        icon: <Volume2 />,
        label: "Annonces",
        href: "/list/announcements",
        visible: ["admin", "manager", "biologist", "technician"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <User/>,
        label: "Profil",
        href: "/profile",
        visible: ["admin", "manager", "biologist", "technician"],
      },
      {
        icon: <Settings/>,
        label: "Paramêtres",
        href: "/settings",
        visible: ["admin", "manager", "biologist", "technician"],
      },
      {
        icon: <LogIn />,
        label: "Se connecter",
        href: "/login",
        visible: ["visitor"],
      },
      {
        icon: <LogOut />,
        label: "Se déconnecter",
        href: "/logout",
        visible: ["admin", "manager", "biologist", "technician"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;