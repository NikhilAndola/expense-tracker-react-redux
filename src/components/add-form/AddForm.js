import React from "react";
import { categories } from "../../constants/add-expense";

export const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(e.target.value);
  };

  const handleCategory = () => {
    setCategory(category);
    setCategoryOpen(false);
  };

  return (
    <div className="add-form">
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to expenditure..."
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount</label>
        <input
          placeholder="Enter Amount..."
          value={amount}
          className="amount-input"
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <i class="fi fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
