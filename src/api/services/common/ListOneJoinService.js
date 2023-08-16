const ListOneJoinService= async (Request, DataModel, JoinStage) => {
    try{/* 
        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);
        let searchValue = Request.params.searchKeyword;
        let skipRow = (pageNo - 1) * perPage;
 */
        let data;

        if (searchValue!=="0") {
            data = await DataModel.aggregate([
                JoinStage,
                
                {
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[]
                }
                }
            ])

        }
        else {
            data = await DataModel.aggregate([
                JoinStage,
                {
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[]
                }
                }
            ])
        }
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=ListOneJoinService