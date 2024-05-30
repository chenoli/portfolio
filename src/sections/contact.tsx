import phone from "../assets/phone.png";

function ContactSection(): React.ReactElement {
  return (
    <section className="flex-1 flex bg-primary items-center justify-center pt-8 pb-16">
      <div className="flex max-w-base items-center justify-between w-base">
        <div className="flex flex-col" />
        <div className="flex items-center">
          <span className="text-xxl font-black text-white leading-sm">
            con
            <br />
            tact
          </span>
          <img src={phone} alt="" className="-ml-9" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
