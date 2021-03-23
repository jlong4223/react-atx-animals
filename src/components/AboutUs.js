import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const StyledImg = styled.img`
  border-radius: 50%;
  width: 200px;
`;

const AboutUs = () => {
  return (
    <>
      <h1 style={{ marginTop: "15px" }}>Meet Our Team!</h1>
      <StyledMain>
        <StyledDiv>
          <h6>CEO and President</h6>
          <h4>Jared Long</h4>
          <StyledImg src="https://i.imgur.com/4oFTEnA.jpg" />
        </StyledDiv>
        <StyledDiv>
          <h6>Director of Policy</h6>
          <h4>Joy Long</h4>
          <StyledImg src="https://i.imgur.com/Vihew4s.jpg" />
        </StyledDiv>
        <StyledDiv>
          <h6>Director of Development</h6>
          <h4>Paul</h4>
          <StyledImg src="https://i.imgur.com/kJ2B1uZ.jpg" />
        </StyledDiv>
        <StyledDiv>
          <h6>Office Dog</h6>
          <h4>Chloe</h4>
          <StyledImg src="https://i.imgur.com/cHSDWKi.jpg" />
        </StyledDiv>
        <StyledDiv>
          <h6>Animal Trainer</h6>
          <h4>Dwight</h4>
          <img
            style={{ borderRadius: "50%", width: "210px", height: "250px" }}
            src="https://i.imgur.com/mGHYYvO.jpg"
          />
        </StyledDiv>
      </StyledMain>
    </>
  );
};

export default AboutUs;
