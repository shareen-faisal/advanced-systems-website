"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GlobalRouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  // Trigger spinner when path changes
  useEffect(() => {
    if (pathname !== currentPath) {
      setLoading(true);
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  // Hide spinner shortly after the new page mounts
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, loading]);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
}
