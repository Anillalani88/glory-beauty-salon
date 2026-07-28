import {NextRequest, NextResponse} from "next/server";

const username = process.env.PRIVATE_SITE_USERNAME;
const password = process.env.PRIVATE_SITE_PASSWORD;

function isProtected() {
  return Boolean(username && password);
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Glory Beauty Salon Preview"'
    }
  });
}

function hasValidCredentials(request: NextRequest) {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  try {
    const decoded = atob(header.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");
    if (separatorIndex === -1) return false;

    const providedUsername = decoded.slice(0, separatorIndex);
    const providedPassword = decoded.slice(separatorIndex + 1);

    return providedUsername === username && providedPassword === password;
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  if (!isProtected()) return NextResponse.next();
  if (hasValidCredentials(request)) return NextResponse.next();

  return unauthorized();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|og.png|images|fonts).*)"]
};
