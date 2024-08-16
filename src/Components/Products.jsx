import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const result = await axios.get('http://localhost:5000/products', { params: { page, limit: 9 } });
            console.log('Fetched data:', result.data);
            
            if (result.data) {
                setCurrentPage(result.data.currentPage);
                setTotalPages(result.data.totalPages);
                setProducts(result.data.products || []); // Ensure products is set as an array
            } else {
                console.warn('No data returned from the server');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 ">
                        {products.length ? (
                            products.map(product => (
                            //     <div key={product._id} className="card bg-base-100 shadow-xl">
                            //     <figure>
                            //       <img
                            //         src={product.productImage}
                            //         alt="Shoes"
                            //        className="w-full h-[300px] pt-6 pl-6 pr-6 rounded-lg" />
                            //     </figure>
                            //     <div className="card-body">
                            //       <h2 className="card-title">{product.productName}</h2>
                            //       <p>{product.description}</p>
                            //       <div className="flex gap-8">
                            //         <p>{product.price}</p>
                            //         <p>{product.category}</p>
                                    
                            //       </div>
                            //       <div className="flex gap-8">
                            //       <p>{product.ratings}</p>
                            //       <p>{product.productCreationDateTime}</p>

                            //       </div>
                            //       <div className="card-actions justify-end">
                            //         <button className="btn btn-primary">Buy Now</button>
                            //       </div>
                            //     </div>
                            //   </div>
                              <div key={product._id} className="card bg-base-100  shadow-xl">
                              <figure className="px-10 pt-10">
                                <img
                                  src={product.productImage}
                                  alt="Shoes"
                                  className="rounded-xl w-full h-[250px]" />
                              </figure>
                              <div className="card-body ">
                                <h2 className="card-title">{product.productName}</h2>
                                <p>{product.description}</p>
                                <div className="flex gap-8">
                                  <p>{product.price}</p>
                                    <p>{product.category}</p>
                                    
                                  </div>
                                   <div className="flex gap-8">
                                 <p>{product.ratings}</p>
                                 <p>{product.productCreationDateTime}</p>

                                  </div>
                                
                              </div>
                            </div>
                            ))
                        ) : (
                            <li>No products found</li>
                        )}
                    </div>
                    <div className="mx-auto text-center m-16">
                        <button className="btn btn-active btn-primary"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button
                        className="btn btn-active btn-primary"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Products;
