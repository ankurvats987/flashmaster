const Button = ({
  className,
  btnColor,
  btnIcon = "",
  btnText,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`${className} ${btnColor} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {btnIcon}
      {btnText}
    </button>
  );
};

export default Button;
