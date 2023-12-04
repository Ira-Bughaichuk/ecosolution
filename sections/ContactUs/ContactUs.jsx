import ContactForm from "@/components/ContactForm/ContactForm";
import ContactsInfo from "@/components/ContactsInfo/ContactsInfo";
import s from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <div className="section-main">
      <div className="container-main">
        <div className={s.block__title}>
          <h2 className="title font-oswald">Contact us</h2>
        </div>

        <div className={s.blocks}>
          <ContactsInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
