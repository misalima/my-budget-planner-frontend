import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  CreditCard,
  Settings,
  ArrowLeftRight,
  Landmark,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "My expenses",
    url: "/expenses",
    icon: ArrowLeftRight,
  },
  {
    title: "My cards",
    url: "/cards",
    icon: CreditCard,
  },
  {
    title: "My budgets",
    url: "/budgets",
    icon: Landmark,
  },
  {
    title: "My Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar
      style={{
        backgroundColor: "var(--blue)",
      }}
    >
      <SidebarContent>
        <SidebarHeader>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "2rem",
            }}
          >
            <Image
              src="/images/logo-side.png"
              alt="Budget Planner Logo"
              width={180}
              height={60}
            />
          </div>
        </SidebarHeader>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url}>
                  <SidebarMenuButton
                    icon={item.icon}
                    style={{
                      color: "white",
                    }}
                    className="pl-6"
                    isActive={isActive}
                  >
                    {item.title}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator className="bg-white/10" />
        <SidebarMenu className="p-0">
          <SidebarMenuItem>
            <SidebarMenuButton
              icon={HelpCircle}
              style={{
                color: "white",
              }}
              className="pl-6"
            >
              Help
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              icon={LogOut}
              style={{
                color: "#ff914d",
              }}
              className="pl-6"
            >
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
