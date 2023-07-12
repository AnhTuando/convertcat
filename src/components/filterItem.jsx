export function FilterItem({
  label,
  value,
  name,
  onChange,
  className,
  checked,
}) {
  return (
    <label className={`fw-medium ${className} `}>
      <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <span className="color-value">{label}</span>
    </label>
  );
}
