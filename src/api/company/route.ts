export async function getAbout(request: Request) {
  const res = await fetch("http://localhost:4000/about");
  const about = await res.json();

  return Response.json(about);
}
