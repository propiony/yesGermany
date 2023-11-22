const ButtonSecondary = (props) => {
  const { text } = props;
  return (
    <>
      <button className="btn btn-secondary">{text}</button>
    </>
  );
};
export default ButtonSecondary;
