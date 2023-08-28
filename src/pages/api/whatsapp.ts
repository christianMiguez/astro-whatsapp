export const config = {
  runtime: "edge",
};

export default (request: Request) => {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};

export async function get(req: Request, res: Response) {
  // verifyToken Whatsapp
  try {
    const accessToken = process.env.WHATSAPP_API_ACCESS_TOKEN;
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token === accessToken) {
      return challenge;
    } else {
      return { statusCode: 400, body: "Invalid token" };
    }
  } catch (error) {
    return res.status(400).json({ message: "Unauthorized" });
  }
}

export async function post(request: Request) {}
