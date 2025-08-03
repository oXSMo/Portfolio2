import { EncryptButton } from "../common/EncryptText";
import CursorHover from "../common/CursorHover";
import Link from "next/link";

function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex mix-blend-difference text-sm  justify-between fixed top-0 z-40 text-[#f4f4f4]">
      <CursorHover Size={45}>
        <Link href="/">
          <EncryptButton
            shuffle={30}
            TxT="Sohaib Mansouri"
            lowercase
            className="w-52 mix-blend-difference "
          />
        </Link>
      </CursorHover>

      <CursorHover Size={45}>
        <aside className="flex  -space-x-8">
          <Link href="/works">
            <EncryptButton
              shuffle={40}
              cycles={8}
              TxT="Works"
              className="w-24 mix-blend-difference text-sm "
            />
          </Link>
        </aside>
      </CursorHover>
    </header>
  );
}

export default Navbar;
