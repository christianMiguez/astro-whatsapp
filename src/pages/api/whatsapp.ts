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
