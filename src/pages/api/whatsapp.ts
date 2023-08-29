import type { APIRoute } from "astro";

export const config = {
  runtime: "edge",
};

export default (request: Request) => {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};

export const get: APIRoute = ({ url }) => {
  // verifyToken Whatsapp
  try {
    const accessToken =
      "61442efe315e75ec8f395fea215ef13fd662b8d8f8114fbf40c6a105f24f74fb6d14c97459cfe53de0f71d2d4998ecd9a56b3ca0257f6b4046df1552478bee32";
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    if (challenge != null && token != null && token === accessToken) {
      return {
        body: JSON.stringify({
          challenge,
        }),
      };
    } else {
      return { statusCode: 400, body: "Invalid token" };
    }
  } catch (error) {
    return { statusCode: 400, body: "some error" };
  }
};

export async function post(request: Request) {}
