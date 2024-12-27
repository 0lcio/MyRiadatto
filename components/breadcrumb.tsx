"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbHeader() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.map((path, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbLink href={`/${path}`}>{path}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
