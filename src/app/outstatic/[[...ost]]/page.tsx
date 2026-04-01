import "outstatic/outstatic.css";
import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";

type OutstaticPageProps = {
  params: Promise<{
    ost?: string[];
  }>;
};

export default async function OutstaticPage(
  props: OutstaticPageProps,
): Promise<React.ReactElement> {
  const hasSelfHostedGithubAuth =
    Boolean(process.env.OST_GITHUB_ID) &&
    Boolean(process.env.OST_GITHUB_SECRET);
  const hasOutstaticCloudAuth = Boolean(process.env.OUTSTATIC_API_KEY);

  if (!hasSelfHostedGithubAuth && !hasOutstaticCloudAuth) {
    return (
      <main className="min-h-screen bg-dark text-bright p-8 flex items-center justify-center">
        <div className="max-w-2xl bg-black/40 rounded-2xl p-8">
          <h1 className="text-3xl font-semibold mb-4">
            Outstatic Auth Setup Required
          </h1>
          <p className="mb-3">
            GitHub sign-in is not configured yet for this project, so the
            Outstatic login flow cannot start.
          </p>
          <p className="mb-3">
            Create a <code>.env.local</code> file from{" "}
            <code>.env.local.example</code>, then set <code>OST_GITHUB_ID</code>{" "}
            and <code>OST_GITHUB_SECRET</code>.
          </p>
          <p>
            Use this callback URL in your GitHub OAuth app:
            <br />
            <code>http://localhost:3000/api/outstatic/callback</code>
          </p>
        </div>
      </main>
    );
  }

  const ostData = await Outstatic();
  const params = await props.params;

  return <OstClient ostData={ostData} params={{ ost: params.ost || [] }} />;
}
