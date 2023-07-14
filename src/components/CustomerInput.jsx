export default function CustomerInput({ value, label, type, onChange }) {
  return (
    <div className="customer-name fw-medium w-100">
      <label className="w-100">
        <div>{label}</div>
        <input
          type={type}
          value={value}
          className="w-100 border border-secondary-subtle px-2"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
