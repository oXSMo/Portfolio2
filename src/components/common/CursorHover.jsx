import { useHoverSlice } from "../../store/store";

function CursorHover({ children, Size }) {
  const { size, setSize } = useHoverSlice();

  return (
    <aside
      onMouseEnter={() => {
        setSize(Size);
      }}
      onMouseLeave={() => setSize(1)}
      className="group"
    >
      {children}
    </aside>
  );
}

export default CursorHover;
