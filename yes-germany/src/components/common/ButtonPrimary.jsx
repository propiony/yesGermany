const ButtonPrimary = (props) => {
  const { text } = props;
  return (
    <>
      <button className="btn btn-primary">{text}</button>
    </>
  );
};
export default ButtonPrimary;
