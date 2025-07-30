import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../models/productModel.js";
export const addProduct=async(req,res)=>{
    try 
    {
      console.log(req.files);
      console.log(req.body); 
       let {name,description,price,category,subcategory,sizes,bestseller}=req.body;
       let image1=await uploadOnCloudinary(req.files.image1[0].path) 
       let image2=await uploadOnCloudinary(req.files.image2[0].path) 
       let image3=await uploadOnCloudinary(req.files.image3[0].path) 
       let image4=await uploadOnCloudinary(req.files.image4[0].path)
       let productData={
         name,
         description,
         price:Number(price),
         category,
         subcategory,
         sizes:JSON.parse(sizes),
         bestseller:bestseller==="true"?true:false,
         date:Date.now(),
         image1,
         image2,
         image3,
         image4
       } 
       const product=await Product.create(productData)
       return res.status(201).json(product)
    } 
    catch (error) 
    {
        console.log("addProduct error");
      
       return res.status(500).json({message:`addProduct error ${error}`})       
    }
}
export const listProduct=async(req,res)=>{
          try
          {
              const product=await Product.find({})
              return res.status(201).json(product)
          } 
          catch (error) 
          {
            console.log("listProduct error");
            console.log(error)
            return res.status(500).json({message:`listProduct error ${error}`})     
          }
}
export const removeProduct=async(req,res)=>{
   try 
   {
     let {id}=req.params;
     const product=await Product.findByIdAndDelete(id)
     return res.status(201).json(product)
   } 
   catch (error) 
   {
            console.log("removeProduct error");
            return res.status(500).json({message:`removeProduct error ${error}`})     
   }
}