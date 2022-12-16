import PropTypes from "prop-types";

const Header = ({ innerText = "test" }) => {
  return (
    <header>
      <div className="container">
        <h2>{innerText}</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  innerText: PropTypes.string,
};

export default Header;
