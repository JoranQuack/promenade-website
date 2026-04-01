import Header from "@/components/shared/Header";
import { getNavigation } from "@/lib/content";

export default function SiteLayout(
  props: React.PropsWithChildren<object>,
): React.ReactElement {
  const routes = getNavigation();

  return (
    <>
      <Header routes={routes} />
      <div className="mt-28">{props.children}</div>
    </>
  );
}
