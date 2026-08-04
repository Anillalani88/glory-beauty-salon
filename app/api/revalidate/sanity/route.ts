import {revalidatePath, revalidateTag} from "next/cache";
import {NextRequest, NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";

type SanityWebhookBody = {
  _type?: string;
};

const revalidatingDocumentTypes = ["salonSettings", "location", "service", "serviceCategory", "googleReview"];

const pathsToRevalidate = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/stoney-creek",
  "/services/welland"
];

export async function POST(request: NextRequest) {
  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({message: "Missing SANITY_REVALIDATE_SECRET"}, {status: 500});
  }

  try {
    const {isValidSignature, body} = await parseBody<SanityWebhookBody>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
      true
    );

    if (!isValidSignature) {
      return NextResponse.json({message: "Invalid signature"}, {status: 401});
    }

    revalidateTag("site-content", "max");
    pathsToRevalidate.forEach((path) => revalidatePath(path));

    return NextResponse.json({
      revalidated: true,
      revalidatingDocumentTypes,
      documentType: body?._type ?? "unknown",
      paths: pathsToRevalidate
    });
  } catch (error) {
    return NextResponse.json(
      {message: error instanceof Error ? error.message : "Revalidation failed"},
      {status: 500}
    );
  }
}
