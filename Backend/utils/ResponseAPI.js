function ResponseAPI(
    statusCode=200,
    message="OK",
    data={}
){
    this.statusCode=statusCode
    this.message= message
    this.data=data
    return this
}

export default ResponseAPI