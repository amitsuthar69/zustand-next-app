// both Request and Response are classical Browser interfaces for fetch calls, we can use NextRequest instead.

export async function GET(req: Request) {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        title: "Title 1",
        post: "Post 1",
      },
      {
        id: 2,
        title: "Title 2",
        post: "Post 2",
      },
    ])
  );
}

export async function POST(req: Request) {
  return new Response(
    JSON.stringify([
      {
        id: 3,
        title: "Title 3",
        post: "Post 3",
      },
    ])
  );
}
