import { EncryptButton } from "../common/EncryptText";
import CursorHover from "../common/CursorHover";

function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex mix-blend-difference text-sm  justify-between fixed top-0 z-40 text-[#f4f4f4]">
      <CursorHover Size={45}>
        <EncryptButton
          shuffle={30}
          TxT="Sohaib Mansouri"
          lowercase
          className="w-52 mix-blend-difference "
        />
      </CursorHover>

      <CursorHover Size={45}>
        <aside className="flex  -space-x-8">
          <EncryptButton
            shuffle={40}
            cycles={8}
            TxT="About"
            className="w-24 mix-blend-difference text-sm "
          />

          <EncryptButton
            shuffle={40}
            cycles={8}
            TxT="Works"
            className="w-24 mix-blend-difference text-sm "
          />
        </aside>
      </CursorHover>
    </header>
  );
}

export default Navbar;
