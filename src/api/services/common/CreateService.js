const CreateService= async (Request,DataModel) => {
    try{

        let PostBody=Request.body;
        debugger;

        let data = await DataModel.create(PostBody)
        debugger;
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=CreateService