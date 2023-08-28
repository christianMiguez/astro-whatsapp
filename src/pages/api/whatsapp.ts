export const config = {
  runtime: "edge",
};

export default (request: Request) => {
  return new Response(`Hello, from ${request.url} I'm now an Edge Function!`);
};

export async function get() {
  return {
    body: JSON.stringify({
      message: {
        messaging_product: "whatsapp",
        preview_url: false,
        to: "59892646464",
        recipient_type: "individual",
        type: "text",
        text: {
          body: "Hola chiche",
        },
      },
    }),
  };
}
