import "../index.css";
import Mark from "/assets/mark.png";
import Logo from "/assets/TheCatLogo.png";

export default function Footer() {
  return (
    <footer className="footer footer-bg py-3">
      <div className="container d-block d-lg-none">
        <div className="row">
          <div className="col-6 py-3">
            <div className="ft-logo">
              <img src={Logo} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="ft-mark">
              <img
                src={Mark}
                style={{ width: 200 }}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title my-3 fs-4 text-special fw-bold">LIÊN HỆ</div>
          <div className="contact text-light fs-6 fw-medium">
            <div className="phone">
              <i className="bi bi-telephone-fill" />
              <span className="px-3">0987523525 - 0234533678</span>
            </div>
            <div className="email">
              <i className="bi bi-envelope-fill" />
              <span className="px-3">thecat@gmail.com</span>
            </div>
            <div className="location">
              <i className="bi bi-envelope-fill" />
              <span className="px-3">
                Số 150 Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="title my-3 fs-4 text-special fw-bold">BẢN ĐỒ</div>
          <p>
            <iframe
              className="img-fluid"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5656930393943!2d105.79597497517582!3d21.01003958063461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca6e2094ac3%3A0x5cdddc52f7c4779c!2zMTUwIMSQLiBUcuG6p24gRHV5IEjGsG5nLCBUcnVuZyBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1687276707265!5m2!1svi!2s"
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </p>
        </div>
      </div>
      <div className="container d-none d-lg-block">
        <div className="row">
          <div className="col-4">
            <div className="img-wrap">
              <div className="ft-logo">
                <img src={Logo} alt="" />
              </div>
              <div className="ft-logo" style={{ width: 200 }}>
                <img src={Mark} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="title my-3 fs-4 text-special fw-bold text-center">
              LIÊN HỆ
            </div>
            <div className="contact d-flex flex-column gap-3 text-light fs-6 fw-medium">
              <div className="phone">
                <i className="bi bi-telephone-fill" />
                <span className="px-3">0987523525 - 0234533678</span>
              </div>
              <div className="email">
                <i className="bi bi-envelope-fill" />
                <span className="px-3">thecat@gmail.com</span>
              </div>
              <div className="location">
                <i className="bi bi-envelope-fill" />
                <span className="px-3">
                  Số 150 Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
                </span>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="title my-3 fs-4 text-special fw-bold text-center">
              BẢN ĐỒ
            </div>
            <p className="d-flex justify-content-center">
              <iframe
                className="img-fluid"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5656930393943!2d105.79597497517582!3d21.01003958063461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca6e2094ac3%3A0x5cdddc52f7c4779c!2zMTUwIMSQLiBUcuG6p24gRHV5IEjGsG5nLCBUcnVuZyBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1687276707265!5m2!1svi!2s"
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
