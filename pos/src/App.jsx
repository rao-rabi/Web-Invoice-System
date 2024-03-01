import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getProducts } from "./Features/Products";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
function App() {
  const { data, loading, error } = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading Data....</p>
      ) : (
        <div>
          <p className="bg-green-500">Products</p>
          <div  className="flex justify-between gap-4 flex-wrap mt-4">
          {data &&
            data?.map((item, index) => (
              <div key={index} className="border border-gray-400 shadow-lg rounded-lg p-3 w-80 h-76">
                {" "}

                <img src={item?.image} alt={item?.title} className="object-contain w-24 h-24 mx-auto" />
                <p className="py-1 text-sm text-green-600">Titile:{item.title}</p>
                <p className="py-1 text-sm text-green-600">Price:{item.price}</p>
                <p className="py-1 text-xs text-gray-600">Description:{item.description.slice(0,400)}</p>
              </div>
            ))}{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
