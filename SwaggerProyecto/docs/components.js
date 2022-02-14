module.exports = {
    components:{
        schemas:{
            post:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"post identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"post's title",
                        example:"make an excellent readme"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the post",
                        example:false
                    }
                }
            },
            PostInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Post's title",
                        example:"make an excellent readme"
                    },
                    completed:{
                        type:"boolean",
                        description:"The status of the post",
                        example:false
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
            
        }

        }
    }