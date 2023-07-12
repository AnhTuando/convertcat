import { useState } from "react";

export function SearchInput({ value, onChange, onKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="search-input p-2 w-100 fs-4 fw-medium border-bottom border-success bg-transparent"
        style={{ border: "none" }}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}
