export default function Dashboard() {
  let body = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const callAPI = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        body: JSON.stringify(body),
        method: "POST",
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={callAPI}>Call API</button>;
}

Dashboard.auth = {
  role: "admin",
  unauthorized: "/userdashboard",
};
