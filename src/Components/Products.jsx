import axios from "axios";
import { useEffect, useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchItem,setSearchItem]=useState('');
    const [selectedCategory,setSelectedCategory]=useState('');
    const [brandName,setBrandName]=useState('');
    const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');


    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            const result = await axios.get('http://localhost:5000/products', { params: { page, limit: 9,searchItem,category:selectedCategory,brand:brandName, minPrice: minPrice,
                maxPrice: maxPrice, } });
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
    }, [currentPage,selectedCategory,brandName,minPrice, maxPrice]);

    const handleSearch=()=>{
        setCurrentPage(1); // Reset to first page on search
        fetchProducts(1, searchItem); // Fetch with the new search query
    }


    const handleCategoryChange=(e)=>{
        setSelectedCategory(e.target.value);
    }
    const handleBrandChange=(e)=>{
        setBrandName(e.target.value);
        console.log('brandName:',brandName)
    }
    const handlePriceRangeChange = (e) => {
        const [min, max] = e.target.value.split('-').map(Number);
        setMinPrice(min);
        setMaxPrice(max);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
    };
    return (
        <div >
            <div className="relative mb-4 w-[350px] lg:w-[420px] mx-auto"> 
            <input 
                type="text"
                placeholder="Search products by name..."
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
                className="p-3 border border-gray-300 w-[350px] lg:w-[420px] rounded-xl mb-4"
            /> <button onClick={handleSearch} className="bg-blue-600 text-white absolute flex gap-2 right-1 top-1 rounded-lg p-2"> <RxMagnifyingGlass  className="items-center mt-1 justify-center"/>  Search</button>
            </div>

            <div className="mb-24">
            <select 
                    className="select select-bordered w-full max-w-xs"
                    value={selectedCategory} // Set the current selected value
                    onChange={handleCategoryChange} // Handle change
                >
                    <option disabled value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="wearables">Wearables</option>
                    <option value="Home Appliances">Home Appliances</option>
                    <option value="gaming">Gaming</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Personal Care">Personal Care</option>
                    <option value="Home Automation">Home Automation</option>
                    <option value="Health & Fitness">Health & Fitness</option>
                    <option value="Home Security">Home Security</option>
                    <option value="Audio">Audio</option>
                    <option value="Accessories">Accessories</option>
                    {/* Add more categories as needed */}
                </select>
            <select 
                    className="select select-bordered w-full max-w-xs"
                    value={brandName} // Set the current selected value
                    onChange={handleBrandChange} // Handle change
                >
                    <option disabled value="">Select Brand</option>
                    <option value="TechPro">TechPro</option>
                    <option value="SmartTech">SmartTech</option>
                    <option value="VivaWave">VivaWave</option>
                    <option value="HyperTrend">HyperTrend</option>
                    <option value="Innovix">Innovix</option>
                    
                    {/* Add more categories as needed */}
                </select>
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={minPrice && maxPrice ? `${minPrice}-${maxPrice}` : ""}
                    onChange={handlePriceRangeChange}
                >
                    <option disabled value="">Select Price Range</option>
                    <option value="0-50">$0 - $50</option>
                    <option value="51-100">$51 - $100</option>
                    <option value="101-200">$101 - $200</option>
                    <option value="201-500">$201 - $500</option>
                    <option value="501-1000">$501 - $1000</option>
                    <option value="1001-Infinity">Above $1000</option>
                </select>
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={minPrice && maxPrice ? `${minPrice}-${maxPrice}` : ""}
                    onChange={handlePriceRangeChange}
                >
                    <option disabled value="">Short by</option>
                    <option value="High t Low">High to Low</option>
                    <option value="Low to High"> Low to High</option>
                    <option value="Newest first">Newest first</option>
                   
                </select>
            </div>
            
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
                              <figure className="px-8 pt-10">
                                <img
                                  src={product.productImage}
                                  alt="Shoes"
                                  className="rounded-xl w-full h-[250px]" />
                              </figure>
                              <div className="card-body ">
                                <h2 className="card-title">{product.productName}</h2>
                                <p className="p-0 m-0">{product.description}</p>
                                <div className="flex gap-8">
                                  <p><span className="font-semibold text-black mr-1">Price:</span>  $ {product.price}</p>
                                    <p><span className="font-semibold text-black mr-1">Category:</span>{product.category}</p>
                                    
                                  </div>
                                   <div className="flex gap-8">
                                 <p><span className="font-semibold text-black mr-1">Rating:</span>{product.ratings}</p>
                                 <p><span className="font-semibold text-black mr-1">Brand:</span>{product.brand}</p>
                                 

                                  </div>
                                  <p><span className="font-semibold text-black mr-1">CreationDateTime:</span>{formatDate(product.productCreationDateTime)}</p>
                                
                              </div>
                            </div>
                            ))
                        ) : (
                            <li>No products found</li>
                        )}
                    </div>
                    <div className="mx-auto text-center m-16">
                        <button className="btn btn-active btn-primary mr-4"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span> Page {currentPage} of {totalPages} </span>
                        <button
                        className="btn btn-active btn-primary ml-4"
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
