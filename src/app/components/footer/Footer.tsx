import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__divider" />
        <div className="footer__top-image">
             <Image
               src="/logo3.jpg"
               alt="Mhares Sea Club"
               fill
               priority={false}
               sizes="(max-width: 640px) 100vw, 530px"
               className="footer__top-image-img"
             />
           </div>

           </div>
    </footer>
  );
}