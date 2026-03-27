export default function UploadProductPage() {
  return (
    <section className="section-card form-card">
      <h1>Upload Product</h1>
      <p>Add a new product with category, pricing, rating, and multiple views.</p>
      <form className="form-grid-double">
        <label>Title<input type="text" placeholder="Product title" /></label>
        <label>Category<select><option>Choose category</option></select></label>
        <label>Description<textarea placeholder="Write product description"></textarea></label>
        <label>Price<input type="number" placeholder="0.00" /></label>
        <label>Rating<input type="number" min="1" max="5" placeholder="4.5" /></label>
        <label>Front Image<input type="file" /></label>
        <label>Side Image<input type="file" /></label>
        <label>Back Image<input type="file" /></label>
        <button type="button" className="primary-btn span-full">Upload Product</button>
      </form>
    </section>
  );
}
