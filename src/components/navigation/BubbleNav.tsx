import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Info, Grid3X3, LayoutDashboard, Activity, MessageCircle, Menu, X, CreditCard } from "lucide-react";
import { UserAvatar } from "@/components/ui/user-avatar";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: "nav-home", icon: Home, label: "Home", path: "/" },
  { id: "nav-info", icon: Info, label: "Info", path: "/info" },
  { id: "nav-systems", icon: Grid3X3, label: "Systems", path: "/systems" },
  { id: "nav-dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { id: "nav-output", icon: Activity, label: "Output", path: "/output-preview" },
  { id: "nav-chatbot", icon: MessageCircle, label: "Chatbot", path: "/chatbot" },
  { id: "nav-pricing", icon: CreditCard, label: "Pricing", path: "/pricing" },
];

export function BubbleNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  // Don't show nav on login/signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const handleNavClick = (item: NavItem) => {
    navigate(item.path);
    setIsMobileOpen(false);
  };

  const isActive = (item: NavItem) => {
    return location.pathname === item.path;
  };

  return (
    <>
      {/* Desktop Navbar - Pill Style */}
      <nav
        id="bubble-nav"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl"
        role="navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          return (
            <button
              key={item.id}
              id={item.id}
              onClick={() => handleNavClick(item)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${active
                ? "text-primary-foreground"
                : "text-[#8a8a8f] hover:text-white hover:bg-white/5"
                }`}
              aria-label={item.label}
              aria-pressed={active}
            >
              {active && (
                <motion.div
                  layoutId="bubble-active"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  style={{ zIndex: 0 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </span>
            </button>
          );
        })}

        {/* User Avatar */}
        {isAuthenticated && (
          <div className="ml-2 pl-2 border-l border-white/10">
            <UserAvatar />
          </div>
        )}
      </nav>

      {/* Mobile FAB */}
      <button
        className="fixed right-4 bottom-4 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-2xl text-white"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Nav Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsMobileOpen(false)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <nav
            className="absolute right-4 bottom-20 flex flex-col gap-2 p-2 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10"
            role="navigation"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active
                    ? "bg-primary text-primary-foreground"
                    : "text-[#8a8a8f] hover:text-white hover:bg-white/5"
                    }`}
                  aria-label={item.label}
                  aria-pressed={active}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
