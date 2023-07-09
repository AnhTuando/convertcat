export default function Title({ children }) {
  return (
    <>
      <div className="title text-center fw-bold text-gr fs-1 d-none d-lg-block mb-3">
        {children}
      </div>
      <div className="title text-center fw-bold text-gr fs-4 d-lg-none mb-3">
        {children}
      </div>
    </>
  );
}
