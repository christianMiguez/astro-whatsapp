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
    const accessToken = process.env.WHATSAPP_API_ACCESS_TOKEN;
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
