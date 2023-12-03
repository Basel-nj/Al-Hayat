import style from "./footer.module.css";

function Footer() {
   const address = [
      {
         id: 1,
         address: "0964 420 202",
         icon: require("../../assets/icons/svg/phone.svg").default,
      },
      {
         id: 2,
         address: "حلب - العزيزية - شارع بارون",
         icon: require("../../assets/icons/svg/location.svg").default,
      },
      {
         id: 3,
         address: "سياسة الخصوصيّة ",
      },
   ];

   const links = [
      {
         id: 1,
         link: "alhayat@gmail.com",
         icon: require("../../assets/icons/svg/EMAIL.svg").default,
      },
      {
         id: 2,
         link: "hayat travel agency",
         icon: require("../../assets/icons/svg/facebook.svg").default,
      },
      {
         id: 3,
         link: "www.Alhayat.Sy.com",
         icon: require("../../assets/icons/svg/website.svg").default,
      },
   ];

   return (
      <footer className={style.footer}>
         <div className={style.title}>تواصل معنا </div>
         <div className={style.contactUs}>
            <div>
               {address.map((address) => {
                  return (
                     <div key={address.id} className={style.element}>
                        {address.icon && <img src={address.icon} alt="" />}
                        <p>{address.address}</p>
                     </div>
                  );
               })}
            </div>
            <div>
               {links.map((link) => {
                  return (
                     <div key={link.id} className={style.element}>
                        <img src={link.icon} alt="" />
                        <p>{link.link}</p>
                     </div>
                  );
               })}
            </div>
         </div>
         <p className={style.copyright}>Powered & Designed By Levant Company</p>
      </footer>
   );
}

export default Footer;
