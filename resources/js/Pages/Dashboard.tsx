import { AppSidebar } from "@/Components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb"
import { Separator } from "@/Components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Applayout from "@/Layouts/Applayout"

const breadcrumbs = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
]

export default function Page() {

  return (
    <Applayout breadcrumbs={breadcrumbs} >
      <h1>testing</h1>
    </Applayout>
  )
}
