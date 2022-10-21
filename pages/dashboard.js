export default function Dashboard() {
  return "Some super secret dashboard";
}

Dashboard.auth = {
  role: "admin",
  unauthorized: "/userdashboard"
};
