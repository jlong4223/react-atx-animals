import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: whitesmoke;
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      Copyright &copy; ATX Animals {new Date().getFullYear()} All Rights
      Reserved &nbsp;&nbsp;
      <a
        href="https://www.linkedin.com/in/jaredlong-95/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/jlong4223" target="_blank" rel="noreferrer">
        <i className="fab fa-github-square fa-2x"></i>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/jlong4223" target="_blank" rel="noreferrer">
        <i class="fab fa-facebook-square fa-2x"></i>
      </a>
      &nbsp;&nbsp;
      <a href="https://github.com/jlong4223" target="_blank" rel="noreferrer">
        <i class="fab fa-instagram-square fa-2x"></i>
      </a>
    </StyledFooter>
  );
};

export default Footer;
