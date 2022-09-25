function Button(prompt) {
  return <button onClick={prompt.onClick} className={prompt.otherClass}>{prompt.btnName}</button>;
}

export default Button;
