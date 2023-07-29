import "./Button.css";

function Button({ children, onClick, className = "", color }) {
  const cn = `Button ${className} ${color}`;
  return (
    <button className={cn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
