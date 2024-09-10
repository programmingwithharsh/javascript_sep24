var info = {
    "username": "Lalita",
    "friends": ["Shreya", "Yogita", "Sangeetha",
        [
            [
                [
                    "Harsh",
                    "Anubhav",
                    [
                        [
                            [
                                "Suchitra",
                                "Osama",
                                [
                                    [
                                        [
                                            "Lalita",
                                            "Rahul",
                                            "Suchitra"
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ],
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" } // console Chocolate by Chitta Ranjan
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" }, // console None by Shreya
            { "id": "5002", "type": "Glazed" }
        ]
};

console.log(info.friends[2]);