const IncomeSchema=require('../models/incomeModel')
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
        
    }

    // console.log(income);
}