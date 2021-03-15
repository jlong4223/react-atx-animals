const Animals = (props) => {
  return (
    <div>
      <h3>{props.animal.name}</h3>
      <h6>{props.animal.weight}lbs</h6>
      <img src={props.animal.picture} alt="pic" width="100" />
    </div>
  );
};

export default Animals;
