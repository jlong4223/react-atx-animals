import LoginForm from "../components/LoginForm";

export default function LoginPage(props) {
  return (
    <main className="page">
      <div>
        <LoginForm {...props} />
      </div>
    </main>
  );
}
