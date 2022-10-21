export default function UserDashboard() {
  return "This is user dashboard";
}

UserDashboard.auth = {
  role: "user",
  unauthorized: "/login"
};
