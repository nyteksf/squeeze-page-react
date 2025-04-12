// api/_middleware.ts (TypeScript) or _middleware.js for JavaScript
import { NextResponse } from "next/server";

export const config = {
  matcher: "/(.*)", // Apply to all paths
};

export function middleware(req) {
  const auth = req.headers.get("authorization");
  const user = "myuser";
  const pass = "mypassword";
  const valid = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");

  if (auth === valid) {
    return NextResponse.next();
  }

  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Private"',
    },
  });
}
