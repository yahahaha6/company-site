"use client";

import { usePathname } from "next/navigation";

export default function RouteBackground() {
  const pathname = usePathname();

  let backgroundImage = "/homebg.jpg";
  let backgroundPosition = "center 78%";

  if (pathname === "/about") {
    backgroundImage = "/aboutus.JPG";
    backgroundPosition = "center 78%";
  } else if (pathname === "/services") {
    backgroundImage = "/service.JPG";
    backgroundPosition = "center 70%";
  } else if (pathname === "/contact") {
    backgroundImage = "/contact.JPG";
    backgroundPosition = "center 70%";
  } else if (pathname == "/companyprofile") {
    backgroundImage = "companyprofile.JPG";
    backgroundPosition = "center 70%";
  }

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition,
          filter: "blur(3px)",
          transform: "scale(1.05)",
          opacity: 0.9,
        }}
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-white/15" />
    </>
  );
}