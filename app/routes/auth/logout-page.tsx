import { Form, Link } from "react-router";


export default function LogoutRoute() {
    return (
      <>
        <p>Are you sure you want to log out?</p>
        <Form method="post">
          <button>Logout</button>
        </Form>
        <Link to="/">Never mind</Link>
      </>
    );
  }