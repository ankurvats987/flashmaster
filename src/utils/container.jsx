const Container = ({
  children,
  display = "block",
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
}) => {
  const flexClass =
    display === "flex" ? `flex-${direction}-${justify}-${align}` : "";
  return <div className={`container-wrapper ${flexClass}`}>{children}</div>;
};

export default Container;
