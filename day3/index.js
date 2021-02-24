let data = 
    [
        {
            "_id": [
                "In Progress"
            ],
            "cards": [
                {
                    "_id": "602cbf7d125d2016aa6ecb07",
                    "name": "Buat fitur login",
                    "list_id": "602cc4d4ce1f440d7d35f953",
                    "__v": 0,
                    "list_name": [
                        {
                            "_id": "602cc4d4ce1f440d7d35f953",
                            "name": "In Progress"
                        }
                    ]
                },
                {
                    "_id": "602cbf7d125d2016aa6ecb09",
                    "name": "Buat fitur landing page",
                    "list_id": "602cc4d4ce1f440d7d35f953",
                    "__v": 0,
                    "list_name": [
                        {
                            "_id": "602cc4d4ce1f440d7d35f953",
                            "name": "In Progress"
                        }
                    ]
                }
            ]
        },
        {
            "_id": [
                "To Do"
            ],
            "cards": [
                {
                    "_id": "602cbf7d125d2016aa6ecb08",
                    "name": "Buat fitur register",
                    "list_id": "602cbeff6ae30316922a7586",
                    "__v": 0,
                    "list_name": [
                        {
                            "_id": "602cbeff6ae30316922a7586",
                            "name": "To Do",
                            "__v": 0
                        }
                    ]
                }
            ]
        }
    ]

    const result=data.map((item)=>{
        return{
            listName: item._id,
            cards: item.cards.map((item2) => {
                return {
                    name: item2.name
                }
            })
        }
      })
      
      console.log(result)