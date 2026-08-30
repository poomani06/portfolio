import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();
  const isBrowser = typeof window !== "undefined";
  const basepath =
    isBrowser && window.location.pathname.startsWith("/portfolio")
      ? "/portfolio"
      : (import.meta.env.BASE_URL || "/");

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};
