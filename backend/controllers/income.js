const IncomeSchema=require('../models/incomeModel');

//to add income
exports.addIncome= async (req,res)=>{
    const {title,amount,type,category,description,date}=req.body;

    const income=IncomeSchema({
        title,
        amount,
        type,
        date,
        category,
        description,
        
    })
    try {
        //validations
        if(!title || !category ||!description || !date){
            return res.status(400).json({message: 'All fields are required'});
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message: 'Amount must be +ve'});
        }

        await income.save();
        res.status(200).json({message: "Data saved successfully"})
    } catch (error) {
        res.status(404).json({message: "Unsuccessful"})
    }

}

//to fetch income
exports.getIncome=async (req,res)=>{
    try {
        const incomes= await IncomeSchema.find().sort({createdAt:-1});
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

//to delete income
exports.deleteIncome=async (req,res)=>{
   const {id}=req.params;
   IncomeSchema.findByIdAndDelete(id)
   .then((income)=>{
    res.status(200).json({message:" Income deleted Successfully"})
   })
   .catch((error)=>{
    res.status(500).json({message:" Failed to delete income"+error})
   })


}