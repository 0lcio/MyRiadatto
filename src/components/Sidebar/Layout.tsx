import { AppSidebar } from "@/components/Sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner";
import { BreadcrumbTool } from "./breadcrumb";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbTool />
          </div>
        </header>
        <main className="pb-10 md:pb-0 px-5 w-screen md:w-full">
            {children}
            <Toaster richColors theme="light" toastOptions={{}} />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout;