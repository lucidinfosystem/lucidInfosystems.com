// "use client";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const productsMenu = [
//   { label: "Salesforce Apps", href: "salesforce_apps.php" },
//   { label: "PLM App", href: "PLM-App.php" },
//   { label: "Event Buddy", href: "Event-Buddy.php" },
//   { label: "Donor App", href: "Donor-App.php" },
//   { label: "CRM Reportz", href: "crm.php" },
//   { label: "Quality Tracker", href: "Quality-Tracker.php" },
//   { label: "Case Manager", href: "case_manegar.php" },
//   { label: "Quick Turn Solutions", href: "Quick-Turn-Solutions.php" },
//   { label: "SalesPRO Tracker", href: "salespro_tracker.php" },
// ];

// const servicesMenu = [
//   { label: "Development", href: "development.php" },
//   { label: "Implementation", href: "implementation.php" },
//   { label: "Professional Services", href: "Professional-Services.php" },
//   { label: "Training", href: "training.php" },
//   { label: "Support", href: "support.php" },
// ];

// const communityMenu = [
//   { label: "Partnerships", href: "partnership.php" },
//   { label: "Meetups", href: "meetups.php" },
//   { label: "Submit Ideas", href: "submit_ideas.php" },
//   { label: "College Scholarships", href: "college_scholarships.php" },
// ];

// const helpMenu = [
//   { label: "SFDC Help", href: "Sfdc-Help.php" },
//   { label: "Internship Help", href: "Internship-Help.php" },
// ];

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Products", href: "/products" },
//   { name: "Services", href: "/services" },
//   { name: "Community", href: "/community" },
//   { name: "Help", href: "/help" },
//   { name: "Ebook", href: "/ebook" },
//   { name: "Careers", href: "/careers" },
//   { name: "Contact", href: "/contact" },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathName = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={` top-0 left-0 right-0 z-50  ${
//         isScrolled
//           ? "bg-white/95 shadow-md fixed sm:top-4 sm:mx-5  sm:rounded-full transition-all "
//           : "absolute bg-white md:bg-transparent "
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
//         <div
//           className={`flex items-center justify-between h-16 ${
//             isScrolled ? "sm:16" : "sm:20"
//           }`}
//         >
//           {/* Logo Section */}
//           <Link href={"/"}>
//             <Image
//               src={isScrolled ? "/lucidLogoDark.svg" : "/lucidLogoLight.svg"}
//               alt="Lucid Infosystems"
//               width={120}
//               height={100}
//             />
//           </Link>

//           {/* Navigation Links - Hidden on mobile, shown on tablet and up */}
//           <nav className="hidden md:flex gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={` ${
//                   isScrolled || "/contact" == pathName
//                     ? "text-black"
//                     : "text-white"
//                 } ${
//                   link.href == pathName
//                     ? " border-b pb-[1] transition-all font-medium"
//                     : ""
//                 } hover:border-b transition-colors text-sm`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {isMobileMenuOpen && (
//           <nav className="md:hidden pb-4 space-y-2">
//             {navLinks.map((link, index) => (
//               <Link
//                 href={link.href}
//                 key={index}
//                 className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-sm"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const productsMenu = [
  { label: "Salesforce Apps", href: "/products/salesforceApps" },
  { label: "PLM App", href: "/products/plmApp" },
  { label: "Event Buddy", href: "/products/eventBuddy" },
  { label: "Donor App", href: "/products/donorApp" },
  { label: "CRM Reportz", href: "/products/crm" },
  { label: "Quality Tracker", href: "/products/qualityTracker" },
  { label: "Case Manager", href: "/products/caseManager" },
  { label: "Quick Turn Solutions", href: "/products/quickTurnSolutions" },
  { label: "SalesPRO Tracker", href: "/products/salesproTracker" },
];

const servicesMenu = [
  { label: "Development", href: "/services/development" },
  { label: "Implementation", href: "/services/implementation" },
  { label: "Professional Services", href: "/services/professionalServices" },
  { label: "Training", href: "/services/training" },
  // { label: "Support", href: "/services/support" },
];

const communityMenu = [
  { label: "Partnerships", href: "/community/partnership" },
  { label: "Meetups", href: "/community/meetups" },
  { label: "Submit Ideas", href: "/community/submitIdeas" },
  { label: "College Scholarships", href: "/community/collegeScholarships" },
];

const helpMenu = [
  { label: "SFDC Help", href: "/help/sfdcHelp" },
  { label: "Internship Help", href: "/help/internshipHelp" },
];

const darkModeLinks = [
  "/contact",
  "/ebook",
  "/careers",
  "/help/sfdcHelp",
  "/help/internshipHelp",
  "/community/partnership",
  "/community/meetups",
  "/community/submitIdeas",
  "/community/collegeScholarships",
  "/services/development",
  "/services/implementation",
  "/services/professionalServices",
  "/services/training",
  "/products/salesforceApps",
  "/products/plmApp",
  "/products/eventBuddy",
  "/products/donorApp",
  "/products/crm",
  "/products/qualityTracker",
  "/products/caseManager",
  "/products/quickTurnSolutions",
  "/products/salesproTracker",
];

function NavDropdown({
  pathName,
  label,
  items,
  isScrolled,
  isMobile,
  isOpen,
  onToggle,
  onItemClick,
}: any) {
  const dropdownRef = useRef(null);
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const node = dropdownRef.current as HTMLElement | null;
      if (node && !node.contains(event.target as Node)) {
        setIsDesktopOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (href: string) => {
    onItemClick(href);
    if (isMobile) {
      onToggle();
    }
  };

  if (isMobile) {
    return (
      <div className="space-y-2">
        <button
          onClick={() => onToggle()}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-sm flex items-center justify-between"
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="pl-4 space-y-1 border-l-2 border-gray-200">
            {items.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 text-sm hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => handleItemClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={() => setIsDesktopOpen(true)}
      onMouseLeave={() => setIsDesktopOpen(false)}
    >
      <button
        className={`flex items-center gap-1 ${
          isScrolled || darkModeLinks.includes(pathName)
            ? "text-black"
            : "text-white"
        } hover:border-b transition-colors text-sm`}
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isDesktopOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDesktopOpen && (
        <div className="absolute left-0 mt-0 pt-2 z-50 ">
          <div className="w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
            {items.map((item: any, index: number) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 cursor-pointer text-gray-700 font-medium  hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm ${
                  index === 0 ? "" : ""
                }`}
                onClick={() => handleItemClick(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<any>(null);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownItemClick = (href: string) => {
    router.push(href);
  };

  return (
    <header
      className={`top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "fixed sm:top-4 sm:mx-5 rounded-[99px] shadow-md backdrop-blur-[20px] bg-[rgba(255,255,255,0.4)] opacity-100"
          : "absolute bg-white md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between h-16 ${
            isScrolled ? "sm:h-16" : "sm:h-20"
          }`}
        >
          <Link href={"/"}>
            <Image
              src={
                isScrolled || darkModeLinks.includes(pathName)
                  ? "/lucidLogoDark.svg"
                  : "/lucidLogoLight.svg"
              }
              alt="Lucid Infosystems"
              width={120}
              height={100}
            />
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <NavDropdown
                    key={link.name}
                    label={link.name}
                    items={link.items}
                    isScrolled={isScrolled}
                    isMobile={false}
                    isOpen={false}
                    onToggle={() => {}}
                    onItemClick={handleDropdownItemClick}
                    pathName={pathName}
                  />
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isScrolled || darkModeLinks.includes(pathName)
                      ? "text-black"
                      : "text-white"
                  } ${
                    link.href === pathName
                      ? "border-b pb-1 transition-all font-medium"
                      : ""
                  } hover:border-b transition-colors text-sm`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <NavDropdown
                    key={link.name}
                    label={link.name}
                    items={link.items}
                    isScrolled={isScrolled}
                    isMobile={true}
                    isOpen={openMobileDropdown === link.name}
                    onToggle={() => {
                      setOpenMobileDropdown(
                        openMobileDropdown === link.name ? null : link.name
                      );
                    }}
                    onItemClick={handleDropdownItemClick}
                  />
                );
              }
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

const navLinks = [
  { name: "Home", href: "/", isDropdown: false },
  { name: "About", href: "/about", isDropdown: false },
  {
    name: "Products",
    href: "/products",
    isDropdown: true,
    items: productsMenu,
  },
  {
    name: "Services",
    href: "/services",
    isDropdown: true,
    items: servicesMenu,
  },
  {
    name: "Community",
    href: "/community",
    isDropdown: true,
    items: communityMenu,
  },
  // { name: "Help", href: "/help", isDropdown: true, items: helpMenu },
  { name: "Ebook", href: "/ebook", isDropdown: false },
  { name: "Careers", href: "/careers", isDropdown: false },
  { name: "Contact", href: "/contact", isDropdown: false },
];
