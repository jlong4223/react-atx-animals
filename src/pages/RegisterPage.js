import RegisterForm from "../components/RegisterForm";

const RegisterPage = (props) => {
  return (
    <main className="page">
      <RegisterForm {...props} />
    </main>
  );
};

export default RegisterPage;
