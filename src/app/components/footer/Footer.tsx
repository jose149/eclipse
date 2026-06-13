import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__divider" />
          <Image
            src="/logo2.jpg"
            alt="Mhares Sea Club"
            width={180}
            height={80}
            className="footer__logo"
            priority={false}
          />
      </div>
    </footer>
  );
}