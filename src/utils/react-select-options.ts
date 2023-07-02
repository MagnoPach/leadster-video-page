import { OrderOptionsModel } from "src/models/Interfaces";

export const orderOptions: OrderOptionsModel[] = [
  {
    value: "publishedAt",
    label: "Data de Publicação",
  },
  {
    value: "title",
    label: "Titulo",
  },
];

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    width: "174px",
    height: "24px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    borderWidth: state.isFocused ? "2px" : "1px",
    borderColor: state.isFocused ? "#2c83fb" : "#5A5A5A",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    ":hover": {
      borderColor: "#2c83fb",
    },
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "12px",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: 600,
    color: "#2c3e50",
  }),
  placeholder: (base) => ({
    ...base,
    fontFamily: "Plus Jakarta Sans",
    fontSize: "12px",
    fontWeight: 700,
    color: "#778996",
  }),
  option: (base, state) => ({
    ...base,
    borderBottom: `1px solid`,
    height: "100%",
    cursor: "pointer",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "12px",
    fontWeight: 500,
    borderColor: "#2c3e50",
    color: state.isSelected ? "#fff" : "#2c3e50",
    backgroundColor: state.isSelected ? "#2c83fb" : "#fff",
    display: state.isSelected ? "none" : "block",
    "&:hover": {
      backgroundColor: "#2c83fb",
      color: "#fff",
    },
  }),
  indicatorsContainer: (base, state) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    "div > svg": {
      color: "#2c3e50",
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
    backgroundColor: "#fff",
  }),
  menuPortal: (base) => ({
    ...base,
    zIndex: "10",
  }),
};
