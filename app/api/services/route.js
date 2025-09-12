// app/api/services/route.js
export async function GET() {
  const services = [
    { title: "Math Tutor", cat: "Tutoring" },
    { title: "Web Developer", cat: "Tech" },
    { title: "Catering for Events", cat: "Catering" },
    { title: "Fashion Designer", cat: "Fashion" },
    { title: "DJ for Parties", cat: "Entertainment" },
    { title: "Barbers", cat: "stylish haircut for men" },
    { title: "Hairdressers", cat: "Beauty" },
  ];

  return Response.json(services);
}
