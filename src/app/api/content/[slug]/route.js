import { connectDb } from "@/lib/mongodb";

export async function GET(req, { params }) {
  const { slug } = await params;
  const { db } = await connectDb();

  if (slug === "about") {
    const about = await db.collection("about").findOne();

    return new Response(JSON.stringify(about), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (slug === "work") {
    const [projects, career] = await Promise.all([
      db.collection("projects").find({}).toArray(),
      db.collection("career").find({}).toArray(),
    ]);

    return new Response(JSON.stringify({ projects, career }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // fallback
  return new Response(JSON.stringify({ message: "Not found" }), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
