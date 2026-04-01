import Header from "@/components/shared/Header";
import { getNavigation } from "@/lib/content";

export default function SiteLayout(
  props: React.PropsWithChildren<object>,
): React.ReactElement {
  const routes = getNavigation();

  return (
    <div className="site-theme bg-dark min-h-screen">
      <Header routes={routes} />
      <div className="mt-28">{props.children}</div>
    </div>
  );
}
