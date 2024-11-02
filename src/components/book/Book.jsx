
const Book = ({bok}) => {
    const {author,bookId,category,image,publisher,rating,review,tags,totalPages,yearOfPublishing,bookName}=bok
    return (
        <div>
            <div className="card bg-base-100 w-96 border p-4 rounded-lg ">
  <figure className="bg-gray-300 py-8">
    <img className="card-image w-64  h-52 rounded-lg transition-transform duration-300 ease-in-out transform hover:rotate-y-6 hover:rotate-x-6 hover:scale-105 shadow-lg hover:sh"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className="flex  gap-9">
   {
        tags.map((tag)=> <button className="btn btn-xs">{tag}</button>
    )
    }
   </div>
    <h3 className="text-2xl font-semibold">{bookName}</h3>
      <p className="text-lg">By: {author}</p>
    <div className="card-actions justify-between mt-5">
      <div>
        <p className="">{category}</p>
      </div>
      <div>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;