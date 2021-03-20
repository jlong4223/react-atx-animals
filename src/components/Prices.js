import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default function Prices() {
  return (
    <>
      <h1 style={{ marginTop: "15px" }}>Adoption Fees</h1>
      <StyledDiv>
        <div>
          <h2 style={{ textAlign: "center" }}>Dogs</h2>
          <div>
            <h4>Puppies</h4>
            <p>(5 months & younger) Adoption Cost: $275</p>
            <h4>Adult Dogs</h4>
            <p>(6 months & older) Adoption Cost: $170</p>
            <h4>Senior Dogs</h4>
            <p>
              (over 8 years | under 20lbs & over 10 years) Adoption Cost: $100
            </p>
            <h4>Lonely Heart Dogs</h4>
            <p>Adoption Cost: $75</p>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>Cats</h2>
          <div>
            <h4>Kittens</h4>
            <p>(5 months & younger) Adoption Cost: $70</p>
            <h4>Adult Cats</h4>
            <p>(6 months to 8 years) Adoption Cost: $45</p>
            <h4>Senior Cats</h4>
            <p>(8 years & older) Adoption Cost: $20</p>
            <h4>Lonely Heart Cats</h4>
            <p>Adoption Cost: $15</p>
          </div>
        </div>
      </StyledDiv>
      <div style={{ width: "50%", margin: "30px 0" }}>
        <h2>Adoption Special: Lonely Hearts</h2>
        <p>
          These are dogs & cats who have been patiently waiting for their
          forever homes for longer than our other guests. For some reason
          unbeknownst to staff and volunteers, they are overlooked, even though
          they will make wonderful pets. They have won our hearts. Please give
          them a chance to win yours. Look for the dogs & cats with the Lonely
          Heart emblem on their cage. Lonely Heart adoption fee for dogs is
          $75.00. Lonely Heart adoption fee for cats is $15.00.
        </p>
      </div>
    </>
  );
}
