function MyButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.otherClass}
      onSubmit={props.btnSubmit}
      type={props.btnType}
      disabled={props.bol}
    >
      {props.btnName}
    </button>
  );
}

export default MyButton;
