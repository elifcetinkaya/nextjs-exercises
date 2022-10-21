export default function Dashboard() {
  return "Some super secret dashboard";
}

Dashboard.auth = {
  role: "admin",
  unauthorized: "/login", // redirect to this url
};
