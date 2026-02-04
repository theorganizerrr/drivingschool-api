export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "") {
      return new Response(
        "DrivingSchool API is running. Try /health",
        { status: 200 }
      );
    }

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "drivingschool-api" });
    }

    return new Response("Not Found", { status: 404 });
  },
};
