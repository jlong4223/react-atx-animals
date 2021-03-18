import AdoptForm from "../components/AdoptForm";

const AdoptPage = (props) => {
  return (
    <div className="page">
      <AdoptForm {...props} />
    </div>
  );
};

export default AdoptPage;
