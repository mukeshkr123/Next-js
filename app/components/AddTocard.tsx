"use client";
const AddTocard = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("add to cart ");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddTocard;
