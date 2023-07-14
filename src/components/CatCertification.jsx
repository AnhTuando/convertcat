import cert2 from "/assets/cert2.png";
import cert1 from "/assets/cert1.png";

export default function CatCertification() {
  return (
    <div className="row certification">
      <div className="col-12">
        <div className="title d-lg-none text-center mt-2 fw-bold text-soft-bl">
          Giấy Tờ Kèm Theo
        </div>
        <div className="title d-none d-lg-block text-center fs-4 mt-2 fw-bold text-soft-bl">
          Giấy Tờ Kèm Theo
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="vaccination-box d-flex flex-column justify-content-center">
          <img src={cert1} className="img-fluid" alt="" />
          <div className="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl">
            Sổ tiêm phòng
          </div>
          <div className="d-lg-none cert-info text-center fw-medium text-soft-bl">
            Sổ tiêm phòng
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="warranty-box d-flex flex-column justify-content-center">
          <img src={cert2} className="img-fluid" alt="" />
          <div className="cert-info text-center text-soft-bl">
            <div className="d-none d-lg-block fs-4 fw-medium cert-info text-center text-soft-bl">
              Phiếu bảo hành
            </div>
            <div className="d-lg-none cert-info text-center fw-medium text-soft-bl">
              Phiếu bảo hành
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
